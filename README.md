# 🏠 Homelinks - Smart Home Dashboard

<div align="center">

![Homelinks Logo](https://img.shields.io/badge/Homelinks-Smart%20Home-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)

Une interface web moderne et élégante pour contrôler votre maison connectée, inspirée du design Apple.

[Démo](#demo) • [Fonctionnalités](#-fonctionnalités) • [Installation](#-installation) • [Utilisation](#-utilisation)

</div>

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Aperçu](#-aperçu)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Configuration](#-configuration)
- [Architecture](#-architecture)
- [Déploiement](#-déploiement)
- [Contribuer](#-contribuer)
- [License](#-license)

---

## 🎯 À propos

**Homelinks** est une interface web moderne pour maison connectée qui permet de contrôler vos appareils domestiques via une interface utilisateur intuitive et élégante. Inspirée du design Apple avec un effet glassmorphisme, l'application offre une expérience utilisateur fluide et professionnelle.

### Pourquoi Homelinks ?

- ✨ **Design moderne** : Interface élégante avec effet glassmorphisme
- 🎨 **Inspiré d'Apple** : UX/UI professionnelle et intuitive
- 🎤 **Commande vocale** : Contrôlez votre maison avec votre voix
- 📱 **Responsive** : Fonctionne sur tous les appareils
- 🚀 **Léger** : Rapide et performant
- 🐳 **Containerisé** : Déploiement facile avec Docker

---

## ✨ Fonctionnalités

### 💡 Contrôle des Lumières
- Gestion de 5 zones d'éclairage :
  - 🛋️ Salon
  - 🍳 Cuisine
  - 🛏️ Chambre
  - 🌳 Extérieur
  - 🚗 Garage
- Switches personnalisés avec animations fluides
- Contrôle individuel de chaque zone

### 🌡️ Capteurs Environnementaux
- **Température** : Affichage en temps réel avec gauge circulaire
- **Humidité** : Monitoring avec indicateur visuel
- Mise à jour automatique toutes les 3 secondes
- Design inspiré des appareils Apple

### 🚪 Gestion des Portes
- Contrôle de l'**Entrée principale**
- Gestion de la **Porte de garage**
- Animations d'ouverture/fermeture fluides
- Indicateurs visuels d'état

### 👤 Détecteurs
- **Capteur de présence** : Détection de mouvement
- **Détecteur de fumée** : Sécurité incendie
- Alertes visuelles et contrôles

### ⏰ Horloge & Date
- Horloge numérique en temps réel
- Affichage de la date en français
- Design minimaliste et élégant

### 🎤 Commande Vocale
- **Enregistrement audio** via le navigateur
- **Transcription automatique** des commandes
- **Traitement intelligent** des instructions
- Interface avec feedback visuel
- Support des commandes naturelles

---

## 🖼️ Aperçu

### Interface Principale

```
┌─────────────────────────────────────────────────────────────┐
│  🏠 Homelinks                                    🕐 14:30    │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  💡 Contrôle des Lumières        🌡️ Capteurs                │
│  ┌─────────────────────┐        ┌──────────────┐           │
│  │ □ Salon             │        │ Température  │           │
│  │ □ Cuisine           │        │    38°C      │           │
│  │ □ Chambre           │        │              │           │
│  │ □ Extérieur         │        │ Humidité     │           │
│  │ □ Garage            │        │    75%       │           │
│  └─────────────────────┘        └──────────────┘           │
│                                                               │
│  🚪 Portes                       🎤 Commande Vocale         │
│  ┌─────────────────────┐        ┌──────────────┐           │
│  │ [Entrée]   [Garage] │        │   🎙️ Parler  │           │
│  └─────────────────────┘        └──────────────┘           │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technologies

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Animations et glassmorphisme
- **JavaScript (ES6+)** - Logique interactive
- **Bootstrap 5** - Framework responsive
- **GSAP** - Animations avancées
- **Google Fonts** - Typographie (Bree Serif, Noto Serif)

### Backend (supposé)
- **Python Flask** - Serveur API
- **Web Audio API** - Traitement audio
- **REST API** - Communication client/serveur

### DevOps
- **Docker** - Containerisation
- **Nginx** - Serveur web
- **Bash** - Scripts de déploiement

### Bibliothèques JavaScript
- `gauge.js` - Jauges circulaires
- `timepicker-ui.js` - Sélecteurs temporels
- `modern-animations.js` - Animations personnalisées
- `apple-dashboard.js` - Interactions Apple-style

---

## 📦 Installation

### Prérequis

- Node.js (optionnel, pour serveur de développement)
- Docker (pour déploiement)
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/Yoannoza/Homelinks.git

# Aller dans le dossier
cd Homelinks

# Ouvrir dans un navigateur
# Option 1: Avec Python
python -m http.server 8000

# Option 2: Avec Node.js
npx http-server -p 8000

# Accéder à http://localhost:8000
```

### Installation avec Docker

```bash
# Build l'image Docker
docker build -t homelinks .

# Lancer le conteneur
docker run -d -p 4000:80 --name homelinks homelinks

# Accéder à http://localhost:4000
```

### Déploiement rapide

```bash
# Utiliser le script de déploiement
chmod +x deploy.sh
./deploy.sh
```

---

## 🚀 Utilisation

### Contrôle des Lumières

1. Cliquez sur les switches pour allumer/éteindre les lumières
2. Les requêtes HTTP sont envoyées au serveur backend
3. L'état visuel se met à jour instantanément

```javascript
// Exemple d'utilisation programmatique
toggleLight('salon', true);  // Allume le salon
toggleLight('cuisine', false); // Éteint la cuisine
```

### Commande Vocale

1. Cliquez sur le bouton micro 🎤
2. Parlez votre commande (ex: "Allume le salon")
3. Le système transcrit et exécute la commande

**Commandes vocales supportées :**
- "Allume [zone]" / "Éteins [zone]"
- "Ouvre la porte [entrée/garage]"
- "Ferme la porte [entrée/garage]"
- "Quelle est la température ?"

### Monitoring des Capteurs

Les capteurs se mettent à jour automatiquement :
- **Température** : Toutes les 3 secondes
- **Humidité** : Toutes les 3 secondes
- Valeurs affichées avec des jauges circulaires animées

---

## ⚙️ Configuration

### Configuration du Backend

Le projet communique avec un serveur backend sur les ports suivants :

```javascript
// Dans apple-dashboard.js
const API_BASE_URL = 'http://localhost:5500';
const VOICE_API_URL = 'http://localhost:5000';
```

### Endpoints API

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/led` | GET | Contrôle des lumières |
| `/motor` | GET | Contrôle des portes |
| `/transcribe` | POST | Transcription audio |
| `/process` | POST | Traitement des commandes |

### Personnalisation des Styles

Modifiez `css/styles.css` pour personnaliser :

```css
/* Couleur principale */
:root {
  --primary-bg: #000d38;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --accent-color: #007aff;
}
```

---

## 🏗️ Architecture

### Structure du Projet

```
Homelinks/
├── 📄 index.html              # Interface principale
├── 📄 test.html               # Interface de test
├── 📄 Dockerfile              # Configuration Docker
├── 📄 nginx.conf              # Configuration Nginx
├── 📄 deploy.sh               # Script de déploiement
├── 📄 README.md               # Documentation
│
├── 📁 css/
│   ├── styles.css             # Styles personnalisés
│   ├── bootstrap.min.css      # Framework Bootstrap
│   └── ...                    # Autres fichiers Bootstrap
│
└── 📁 js/
    ├── apple-dashboard.js     # Logique principale
    ├── gauge.js               # Bibliothèque jauges
    ├── modern-animations.js   # Animations
    ├── timepicker-ui.js       # Sélecteur temps
    └── bootstrap.bundle.min.js # Bootstrap JS
```

### Architecture Technique

```
┌─────────────────┐
│   Navigateur    │
│   (Frontend)    │
└────────┬────────┘
         │
         │ HTTP/AJAX
         │
┌────────▼────────┐
│  Nginx Server   │
│   (Port 4000)   │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼──┐  ┌──▼────┐
│ Flask│  │ Flask │
│ API  │  │ Voice │
│:5500 │  │ :5000 │
└───┬──┘  └───┬───┘
    │         │
    └────┬────┘
         │
    ┌────▼─────┐
    │ Hardware │
    │ Devices  │
    └──────────┘
```

---

## 🐳 Déploiement

### Docker

Le projet inclut un `Dockerfile` pour un déploiement facile :

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

**Commandes de déploiement :**

```bash
# Build
docker build -t homelinks:latest .

# Run
docker run -d -p 4000:80 homelinks:latest

# Stop
docker stop homelinks

# Logs
docker logs -f homelinks
```

### Script de Déploiement

Utilisez `deploy.sh` pour un déploiement automatisé :

```bash
./deploy.sh
```

Le script effectue :
1. ✅ Build de l'image Docker
2. ✅ Arrêt du conteneur existant
3. ✅ Démarrage du nouveau conteneur
4. ✅ Vérification du statut

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. **Créez** une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

### Guidelines

- Respectez le style de code existant
- Commentez le code complexe
- Testez vos modifications
- Mettez à jour la documentation si nécessaire

---

## 🐛 Problèmes Connus

- La commande vocale nécessite un serveur backend Flask actif
- Les navigateurs nécessitent HTTPS pour l'API MediaRecorder (sauf localhost)
- Certaines animations peuvent être lentes sur les anciens navigateurs

---

## 📝 TODO / Roadmap

- [ ] Ajouter l'authentification utilisateur
- [ ] Implémenter les notifications push
- [ ] Créer une application mobile
- [ ] Ajouter plus de types d'appareils
- [ ] Intégration avec Google Home/Alexa
- [ ] Mode sombre/clair
- [ ] Historique des actions
- [ ] Graphiques de consommation

---

## 📄 License

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

```
MIT License

Copyright (c) 2025 Yoannoza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Auteur

**Yoannoza**

- GitHub: [@Yoannoza](https://github.com/Yoannoza)
- Repository: [Homelinks](https://github.com/Yoannoza/Homelinks)

---

## 🙏 Remerciements

- [Bootstrap](https://getbootstrap.com/) pour le framework CSS
- [GSAP](https://greensock.com/gsap/) pour les animations
- [Google Fonts](https://fonts.google.com/) pour les polices
- Apple pour l'inspiration design
- La communauté open-source

---

## 📞 Support

Pour toute question ou problème :

1. Ouvrez une [Issue](https://github.com/Yoannoza/Homelinks/issues)
2. Consultez la [Documentation](https://github.com/Yoannoza/Homelinks/wiki)
3. Contactez l'auteur

---

<div align="center">

**⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile ! ⭐**

Made with ❤️ by Yoannoza

</div>
