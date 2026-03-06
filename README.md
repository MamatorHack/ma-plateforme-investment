<div align="center">

# ⚡ M&A Intelligence Server

### *Analyse de Fusion-Acquisition propulsée par l'Intelligence Artificielle*

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_GPT--4o-412991?style=for-the-badge&logo=openai&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

<br/>

**Plateforme d'analyse stratégique M&A** qui génère des **Investment Memos professionnels** — complets avec tableaux financiers, analyse SWOT, valorisation par multiples, due diligence technique et décision de comité d'investissement.

<br/>

[🚀 Démarrage rapide](#-démarrage-rapide) · [📋 Fonctionnalités](#-fonctionnalités) · [🏗️ Architecture](#️-architecture) · [📦 Stack technique](#-stack-technique)

</div>

---

## 🎬 Démonstration

> Analyse en temps réel : **Apple** × **Mistral AI**

[https://github.com/user-attachments/assets/video_presentation.mp4](https://github.com/user-attachments/assets/561170c6-61e9-4d89-8323-f46603c143d0)

---

## 📋 Fonctionnalités

### 🧠 Investment Memo Automatisé

L'IA génère un rapport professionnel structuré en **5 sections** :

| # | Section | Contenu |
|:-:|---------|---------|
| `01` | **Executive Summary & SWOT** | Thèse d'investissement, synergies identifiées, tableau SWOT complet |
| `02` | **Analyse Financière** | Revenus/ARR, structure OPEX/CAPEX, burn rate — avec tableaux comparatifs |
| `03` | **Valorisation** | Multiples (EV/Revenue, EV/EBITDA, P/E), fourchette de prix, prime stratégique |
| `04` | **Due Diligence Technique** | Dette technique, key-man risk, risques cyber/RGPD — avec niveaux 🟢🟡🔴 |
| `05` | **Décision Finale du Comité** | **GO** / **NO-GO** / **GO SOUS CONDITIONS** avec justification |

### 🎨 Design Cyber / Néon

- **Dark mode profond** (`#09090E`) avec grille holographique
- **Accents néon** : Vert Cyan `#00FFCC` + Violet Électrique `#B026FF`
- **Effets Glow** sur les inputs et boutons
- **Glassmorphism** : cartes semi-transparentes avec backdrop blur
- **Police Orbitron** : typographie technologique
- **Animation radar** : scan avec cercles concentriques et sweep line pendant l'analyse

---

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** 18+
- **Clé API OpenAI** ([obtenir ici](https://platform.openai.com/api-keys))

### Installation

```bash
# 1. Cloner le repo
git clone https://github.com/MamatorHack/ma-plateforme-investment.git
cd ma-plateforme-investment

# 2. Installer les dépendances
npm install

# 3. Configurer la clé API
cp .env.local.example .env.local
# Éditer .env.local et ajouter votre clé :
# OPENAI_API_KEY=sk-...

# 4. Lancer le serveur
npm run dev
```

Ouvrir **http://localhost:3000** 🚀

---

## 🏗️ Architecture

```
src/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          # API POST → OpenAI GPT-4o
│   ├── globals.css               # Design system Cyber/Néon
│   ├── layout.tsx                # Root layout + Google Fonts
│   └── page.tsx                  # Page principale (orchestrateur)
└── components/
    ├── Header.tsx                # Titre M&A Intelligence Server
    ├── AnalysisForm.tsx          # Formulaire Acquéreur × Cible
    ├── LoadingAnimation.tsx      # Animation radar néon
    └── ResultsPanel.tsx          # 5 cartes Investment Memo (Markdown)
```

### Flux de données

```
[Utilisateur] → Acquéreur + Cible
      ↓
[POST /api/analyze] → OpenAI GPT-4o (prompt Investment Memo)
      ↓
[JSON structuré] → 5 sections Markdown
      ↓
[ReactMarkdown + remark-gfm] → Rendu avec tables néon
```

---

## 📦 Stack technique

| Technologie | Utilisation |
|-------------|-------------|
| **Next.js 16** | Framework React full-stack (App Router) |
| **Tailwind CSS 4** | Système de design utilitaire |
| **Framer Motion** | Animations fluides (entrées, transitions) |
| **OpenAI GPT-4o** | Génération de l'analyse M&A |
| **react-markdown** | Rendu Markdown (tableaux, listes) |
| **remark-gfm** | Support GitHub Flavored Markdown |
| **TypeScript** | Typage statique |

---

## ⚙️ Variables d'environnement

| Variable | Description | Requis |
|----------|-------------|:------:|
| `OPENAI_API_KEY` | Clé API OpenAI pour GPT-4o | ✅ |

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**Développé avec ⚡ par [@MamatorHack](https://github.com/MamatorHack) / Axel Bonneau / Louis Maillet**

*M&A Intelligence Server — Powered by AI*

</div>
