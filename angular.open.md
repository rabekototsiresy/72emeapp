# INSTALL LA DERNIERE VERSION NPM

    * npm install -g npm@latest

# INSTALL CLI ANGULAR

    * npm install -g @angular/cli

# CREER PROJET ANGULAR

    *ng new mon-premier-projet

# PROJECT AVEC STYLE

    ng new project --style=scss

# LIER PRORPIETER: on utiliser le crochet

    [disabled]= "isAth

# EVENEMENT: on utiliser la parenthese

    (click)


Inerpollation et liason par propriété


Liason par l'evenement de l'autre


Deux direction: two way binding,on utilise le formsModule



# DIRECTIVE

    directive structurell
        ng if,
        true or false
        afficher ou non une component


    directive par attribut

    [ngStyle]="{color: getColor()}" : attribuer des styles dynamiquement

    [ngClass] : attribuer dynamiquerment de class au DOM


# PIPE

    {{date | async }}


# SERVICE

    Facon de centralisé le code et des donnés qui sont utilisés par differentes partie de l'application

    *Injecté

    Pour etre utilisé dans une app,un service doit etre injecté 

    * 03 niveau d'injection
        incetion au niveau: 
                 - app.module : Le serice sera dispo pour tous le comp de l'app et pour tous le service que vous creerer par  la suite

                 - app.component: dipspo pour les app mais ne serai pas dispo pour les autre service

                 - pour un comp: servi dispo seulement sur ce compo et ses enfants: 
                 il ya plusier instance

# ngOninit

    * Lancer apres le constructor et executé au moment de la creation de l'applicaiton


# ROUTER

    ActivatedROute: qui contient tous le informations de la route active

# GUARD

    service angular pour empecher un utilisateur,il doit authentifier

    Cette service sera execute,utilisé,lu au moment l'utilisateur essai de naviger a la route dans laquelle on appliqué cette guard


    Mretorurne true: afaka mande amle route or false: tsi afaka


# OBSERVABLE

    c'est un objet qui emet des informations 
        ex: champs de text,progression de chargment d'une fichier et tous les communications http

        Chaque OBSERVABLE associé par un observeur

        # Observeur: bloc de code qui sera executé a chaque fois l'observable une informations

        -> L' OBSERVARBLE peut emet: 
                - informations
                - une erreur
                - emet rien et detruite