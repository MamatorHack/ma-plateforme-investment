import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = [
  "Tu es un Expert Comptable, Analyste Financier et Consultant en Fusion-Acquisition (M&A) d'un grand fonds de Venture Capital Tech.",
  "Ta mission est d'analyser l'acquisition potentielle de la CIBLE par l'ACQUÉREUR et de rédiger un Investment Memo strict, chiffré et professionnel.",
  "",
  "IMPORTANT : Si les données financières exactes ne sont pas publiques, réalise des estimations crédibles basées sur le secteur et la taille des entreprises, et précise clairement qu'il s'agit d'estimations. Utilise des chiffres concrets, des pourcentages et des fourchettes.",
  "",
  "Réponds UNIQUEMENT avec un objet JSON valide (pas de markdown autour, pas de texte avant ou après) respectant exactement cette structure :",
  "",
  '{',
  '  "executive_summary": "Contenu en Markdown avec : résumé stratégique (3-4 paragraphes), synergies principales listées, et un tableau SWOT de l\'Acquéreur au format Markdown (| Forces | Faiblesses | puis | Opportunités | Menaces |). Utilise des bullet points et des chiffres concrets.",',
  '  "analyse_financiere": "Contenu en Markdown avec tableaux : diagnostic de santé financière, estimation des revenus/ARR avec tableau comparatif (| Métrique | Acquéreur | Cible | Combiné |), structure de coûts OPEX/CAPEX en tableau, estimation du burn rate et runway. Minimum 4 paragraphes avec au moins 2 tableaux.",',
  '  "valorisation": "Contenu en Markdown avec tableaux : méthode des multiples (EV/Revenue, EV/EBITDA, P/E) présentée en tableau, estimation de la fourchette de prix en monnaie locale, analyse de la prime stratégique (%), comparaison avec des transactions similaires. Minimum 3 paragraphes avec au moins 1 tableau.",',
  '  "due_diligence": "Contenu en Markdown : dette technique potentielle, dépendance aux talents clés (key-man risk), risques IA/Cyber/technologiques, conformité légale et RGPD, risques de rétention des employés post-acquisition. Utilise des bullet points et un niveau de risque (Faible / Moyen / Élevé) pour chaque item. Minimum 4 paragraphes.",',
  '  "decision_finale": "Contenu en Markdown : synthèse des points GO et NO-GO en bullet points, puis une des 3 décisions en gras : **GO**, **NO-GO**, ou **GO SOUS CONDITIONS**, suivie d\'une justification détaillée (2-3 paragraphes). Si GO SOUS CONDITIONS, lister les conditions."',
  '}',
  "",
  "Chaque champ doit contenir du Markdown riche (tableaux, bullet points, gras, italique). Les tableaux doivent être au format Markdown standard (| col1 | col2 |). Sois précis, chiffré et professionnel.",
].join("\n");

export async function POST(request: NextRequest) {
  try {
    const { acquirer, target } = await request.json();

    if (!acquirer || !target) {
      return NextResponse.json(
        { error: "Les champs 'acquéreur' et 'cible' sont requis." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Clé API OpenAI non configurée. Veuillez définir OPENAI_API_KEY dans votre fichier .env.local.",
        },
        { status: 500 }
      );
    }

    const userPrompt =
      "Analyse la fusion-acquisition suivante et rédige un Investment Memo complet :\n" +
      "- Acquéreur : " + acquirer + "\n" +
      "- Cible : " + target + "\n\n" +
      "Produis un Investment Memo professionnel, chiffré avec des estimations crédibles, au format JSON structuré avec du Markdown riche dans chaque champ.";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 6000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenAI API error:", errorData);
      const errMsg = errorData.error?.message || response.statusText;
      return NextResponse.json(
        { error: "Erreur API OpenAI: " + errMsg },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "Réponse vide de l'API OpenAI." },
        { status: 500 }
      );
    }

    // Parse JSON from the response — strip markdown fences if present
    let cleanedContent = content.trim();
    if (cleanedContent.startsWith("```")) {
      cleanedContent = cleanedContent
        .replace(/^```(?:json)?\s*\n?/, "")
        .replace(/\n?```\s*$/, "");
    }

    const analysisResult = JSON.parse(cleanedContent);

    // Validate structure
    const requiredKeys = [
      "executive_summary",
      "analyse_financiere",
      "valorisation",
      "due_diligence",
      "decision_finale",
    ];
    for (const key of requiredKeys) {
      if (!analysisResult[key]) {
        return NextResponse.json(
          { error: "Champ manquant dans la réponse : " + key },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(analysisResult);
  } catch (error) {
    console.error("Analysis error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Erreur de parsing de la réponse IA. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
