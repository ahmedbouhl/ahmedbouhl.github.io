Pour mettre du texte en emphase (balise HTML <em>), ce qui produit une mise en italique dans un navigateur courant :

*quelques mots* ou  _quelques mots_

Pour mettre du texte en grande emphase (balise HTML <strong>), ce qui produit une mise en gras dans un navigateur courant :

**plus important** ou __également important__

Pour mettre du code dans le texte (balise HTML <code>) :

Mon texte `code` fin de mon texte

Pour un paragraphe de code, mettre quatre espaces devant :

    Première ligne de code
    Deuxième ligne

Comme dans les courriels, il est possible de faire des citations :

> Ce texte apparaîtra dans un élément HTML <blockquote>.

Pour faire un nouveau paragraphe, sauter une ligne

Premier paragraphe

Deuxième paragraphe   

Pour faire un simple retour à la ligne, mettre deux espaces en fin de ligne (balise HTML <br>).
Listes

Sauter une ligne avant le début de la liste.

Pour créer une liste non ordonnée (balise HTML <ul>) :

* Pommes
* Poires
    * Sous élément avec au moins quatre espaces devant.
    

Et une liste ordonnée (balise HTML <ol>) :

1. mon premier
2. mon deuxième

Et une liste en mode case à cocher

- [ ] Case non cochée
- [x] Case cochée

Titres

Les titres sont créés avec un certain nombre de # avant le titre, qui correspondent au niveau de titre souhaité (le HTML propose 6 niveaux de titres de <h1> à <h6>)

# un titre de premier niveau
#### un titre de quatrième niveau

Pour les deux premiers niveaux de titre (<h1> et <h2>), il est également possible de souligner le titre avec des = ou des - (leur nombre réel importe peu, mais il doit être supérieur à 2).

Titre de niveau 1
=====================

Titre de niveau 2
-------------------

Tableaux

Pour créer des tableaux (balises HTML <tr> et <th>)

| Titre 1       |     Titre 2     |   Titre 3      |
| ------------- | -------------   | ---------      |
| Colonne       |     Colonne     |      Colonne   |
| Alignée à     |      Alignée au |     Alignée à  |
| Gauche        |      Centre     |      Droite    |

Liens

Pour créer des liens (balise HTML <a>) :

[texte du lien](url_du_lien "texte pour le titre, facultatif")

Images

Pour afficher une image (balise HTML <img>) :

![Texte alternatif](url_de_l'image "texte pour le titre, facultatif")

Mises en œuvre
Plusieurs mises en œuvre existent et ce dans différents langages de programmation : en Perl5, qui reste la mise en œuvre de référence, en PHP6, en Ruby7, en Python8, en Java9, en C#10, en Haskell11, en Gambas et même en JavaScript12, notamment avec strapdown.js13. C'est depuis la version 2.0 de Swift aussi possible dans ces playgrounds.