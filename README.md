# RoninCode

## Description

Plateforme web de mise en relation de mentors et d'apprentis en développement informatique proposant à ses membres des contenus et outils pédagogiques.

## Présentation

  

RoninCode permet aux développeurs débutants de se rapprocher de développeurs plus expérimentés, souhaitant à leur tour partager leur savoir.  
Trop d'apprentis se retrouvent isolés durant leur étude en développement informatique.

Avec notre plateforme simple et attrayante, nous souhaitons proposer des cours, des tutoriels ainsi que des webinaires et des mises en relation pour du mentorat.

Un module de prise de rendez-vous et de visioconférence permettra aux utilisateurs de ne pas stagner dans leur apprentissage.

## Parcours utilisateur

  

Un utilisateur peut :

- créer un compte et se connecter

- rédiger et accéder à des cours et des articles des autres utilisateurs

- voir en page d'accueil, les mentors disponibles et les apprentis en demande de mentorat

- rechercher un mentor ou un apprenti par langage informatique

- communiquer via une messagerie privée avec d'autres utilisateurs.

- prendre des rendez-vous

  

Chaque utilisateur possède un tableau de bord avec un calendrier de prise de rendez-vous.

  

Les administrateurs peuvent modérer les articles/cours créés et supprimer des comptes utilisateurs.

  

## Concrètement et techniquement

### Base de données

Elle est prévu en PostgreSQL et comportera au minimum :

-   un model Users
    
-   un model Messages
    
-   un model Articles
    
-   un model Calendar
    

### Front

-   React.js
    

### Backend

-   Ruby On Rails 6
    
-   MailBox (feature de RoR 6) + SendGrid
    
-   Strapi (Management de nos données)
    

## MVP : La version minimaliste

Nous prévoyons d'axer nos efforts sur la mise en place d'une base de données propre, solide et sécurisée, l'accès à l'inscription des utilisateurs, aux profils, au dashboard, au calendrier de prise de rendez-vous ainsi qu’au module rédactionnel pour les tutoriels. Nous devrions également pouvoir mettre en place le système de messagerie et le système d’annonce visible depuis la page d’accueil. Le design sera sans doute plus fonctionnel qu'esthétique en fin de première semaine.

## La version que l'on présentera aux jury

Nous souhaitons présenter aux jury un site avec la meilleure User Experience possible en soignant le design et l’interface du site ainsi qu’en ajoutant un système de visioconférence.
