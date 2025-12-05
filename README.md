# 📑 Index
- [🇫🇷 Version Française](#version-française)
- [🇬🇧 English Version](#english-version)
---
# 🇫🇷 Version Française
Tu es développeur et tu créer 15 PR par jours ?  
Tu en as marre d'assigner sans cesse les mêmes personnes à chaque PR ?  
Cette extension est faite pour toi !

Ce projet est une extension Chrome qui permet d'assigner automatiquement des gens à une pull request Gitea.  
Elle permet aussi de gérer différentes listes de personnes.

## Limitations
Ça ne marche que pour Gitea, et que sous Chrome.

Peut-être qu'un jour je me taperais une deter et ce sera disponible partout.

## Utilisation en local
### Prérequis
- Il te faut [NodeJS](https://nodejs.org/en/download).

### Build
- Clone le projet où tu veux sur ton PC.
- Lance `npm install` à la racine du projet.
- Et ensuite lance `npm run build`.

### Importation dans Chrome
- Ouvre Chrome et entre cet URL dans la barre de recherche : `chrome://extensions/`. Ça va ouvrir le gestionnaire d'extension.
- Active le mode développeur avec le switch.
- Clique sur *Charger l'extension non-empaquetée*.
- Choisis, dans l'explorateur de fichiers, le dossier `dist` présent à la racine du projet.

L'extension est maintenant chargée. Tu peux la voir dans le menu dépliant où il y a tes autres extensions.

---

# 🇬🇧 English Version

This project is a Chrome extension designed to automatically assign users to a Gitea pull request.  
It also allows you to manage different lists of assignees.

## Limitations
The extension works only with Gitea and only on Google Chrome.

## Local Usage
### Prerequisites
- Install [NodeJS](https://nodejs.org/en/download).

### Build
- Clone the project to your machine.
- Run `npm install` at the project root.
- Then run `npm run build`.

### Importing into Chrome
- Open Chrome and navigate to `chrome://extensions/`.
- Enable Developer Mode.
- Click *Load unpacked extension*.
- Select the `dist` folder located at the project root.

The extension is now loaded and appears in your Chrome extensions menu.