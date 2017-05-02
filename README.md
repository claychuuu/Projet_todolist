# Todolist

## Présentation

Projet réalisé lors de la première année de Master à l'Université de Grenoble par Antoine ARCANGELONI et Claire TEOULLE, M1 WIC.
Inspiré de [TODOMVC](http://todomvc.com/) avec Angular 2.
__Objectif__ : Pouvoir ajouter des fichiers multimédias.

## Installation

Télécharger le dossier du projet.

## Configuration

Se placer à la racine du dossier, ouvrir une console et lancer les commandes suivantes :

#### Installation/mise à jour des librairies

    npm install

#### Compilation

    gulp

#### Lancement

    node miniServerHTTP.js

Utiliser avec le navigateur Google Chrome. 
Vous pouvez maintenant aller à l'adresse http://localhost:8080 pour afficher la liste.

## Fonctionnalités existantes

Ces fonctionnalités ont déjà été implémentées en cours lors de TP :
* Ajout d'une "chose à faire" sous forme de texte.
* Compteur des choses à faire restantes.
* Filtrage (choses faites/"complétées", non-faites/"actives", toutes sans distinctions).
* Bouton qui supprime toutes les choses faites.
* Possibilité d'éditer le texte de la chose à faire.
* Partie "sans framework" servant principalement à débugger.

## Fonctionnalités ajoutées

Ces fonctionnalités ont été ajoutées dans le cadre du projet :
* Possibilité d'ajouter un fichier multimédia à la chose à faire.
Ces fichiers peuvent être de type image/son/vidéo.
Ils seront ajoutés via une URL ou via le chemin vers le répertoire qui contient le fichier multimédia.
__Problème__ : lors de l'utilisation d'un fichier multimédia stocké sur l'ordinateur, le navigateur renvoie un chemin "C:/fakepath" qui protège l'utilisateur mais bloque l'affichage dans la vue.
* Possibilité de mettre le texte de la chose à faire en couleur pour pouvoir ensuite les classer par domaine personnellement et mieux s'y retrouver.
* Bouton "croix" qui permet de réinitialiser la chose à faire (supprime tout fichier multimédia ajouté et toute modification de style/couleur).
* Le fichier multimédia apparaît dans la liste en dessous de son texte sous la forme d'un logo qui indique son type. Lorsqu'on clique dessus, une vue s'ouvre et montre le contenu du fichier multimédia en rappelant le texte en dessous.
Les vues sont gérées à l'aide de l'outil [Fancybox](http://fancybox.net/).

## Fonctionnalités futures
Nous aurions aimé ajouter les fonctionnalités suivantes :
* Ajouter plusieurs fichiers multimédia pour une chose à faire.
* Pouvoir ajouter une adresse en intégrant l'API Google Maps.
Le clic sur le logo aurait montré en vue la carte correspondante.
* Traduction.
