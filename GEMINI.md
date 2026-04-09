# MiniAI — Agent Rules

## Projet
Générateur de miniatures YouTube alimenté par l'IA.
Stack : Vite + React 18 + TypeScript strict + Tailwind CSS + shadcn/ui
APIs : fal.ai (Flux Kontext Pro) + Google Generative AI (Gemini Flash)

## Architecture fichiers
- src/components/ — composants UI purs, aucune logique métier
- src/hooks/ — logique métier (useGenerator, useStyles, usePersona)
- src/lib/ — clients API (falClient.ts, geminiClient.ts)
- src/types/index.ts — toutes les interfaces TypeScript
- src/data/styles.ts — données statiques des 9 styles
- .env — clefs API (jamais hardcodées)

## Règles de code
- TypeScript strict partout, jamais `any`, utiliser `unknown` si nécessaire
- Composants fonctionnels uniquement, pas de classes React
- Named exports uniquement, pas de default exports sauf App.tsx
- Fonctions max 40 lignes, fichiers max 200 lignes
- Supprimer tous les console.log avant de marquer une tâche terminée
- try/catch sur tous les appels API avec messages d'erreur lisibles
- Variables d'environnement : VITE_FAL_KEY et VITE_GEMINI_KEY uniquement
- Jamais de secrets hardcodés dans le code


## Ce qu'il ne faut JAMAIS faire
- Créer des fichiers ou pages non demandés
- Modifier les types TypeScript sans demander confirmation
- Hardcoder des clefs API ou secrets
- Toucher aux composants qui fonctionnent déjà lors de modifications sur d'autres
- Installer des dépendances non demandées
- Ignorer les erreurs TypeScript avec @ts-ignore

## Workflow de travail
1. Présenter un plan (Artifact) avant de coder chaque tâche
2. Travailler composant par composant, pas tout en même temps
3. Commiter en Git après chaque tâche réussie
4. Arrêter et demander confirmation si une décision de design est ambiguë
5. Ne modifier qu'un seul composant à la fois sauf si explicitement demandé

## Variables d'environnement requises
VITE_FAL_KEY=<clef fal.ai>
VITE_GEMINI_KEY=<clef Google AI Studio>

## Commandes projet
- npm run dev — démarrer le serveur de développement
- npm run build — build de production
- npm run lint — vérifier le code
