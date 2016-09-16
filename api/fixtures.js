var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('jebouquine');
var id = pow.createObjectId;

fixtures.clearAndLoad({
    livres: [
        {
            "Id": 1,
            "Nom": "Victoires",
            "Auteur": "Danielle Steel",
            "Description": "Lily, championne de ski junior, s’entraîne chaque jour afin de participer aux Jeux olympiques, sous le regard bienveillant mais inquiet de son père qui ne s’est jamais vraiment remis de la disparition de sa femme. Mais parfois, hélas, la vigilance ne suffit pas. Victime d’un terrible accident, Lily est condamnée à passer le restant de ses jours en fauteuil roulant. Il lui faudra désormais tout réapprendre et tout reconstruire. Accepter d’abandonner ses anciens rêves pour en construire de nouveaux… plus grands encore.",
            "Langue": "Français",
            "Prix": 18.000,
            "ISBN": "978-2-266-26208-8",
            "MaisonEdition": "Pocket",
            "NombrePages": 352,
            "Poids": "190 g",
            "DateSortie": "21 janv. 2016",
            "Disponibilite": "exclusif",
            "UrlImage": "victoires.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 2,
            "Nom": "Les cavaliers d'Allah",
            "Auteur": "Geneviève Chauvel",
            "Description": "Au début du VIIe siècle, tandis que l’Occident s’assoupit, au cœur de l’Orient, en Arabie, naît une doctrine qui se répand à la vitesse du vent : l’islam. Par la voix du Prophète, elle séduit et s’impose. Ses cavaliers n’auront désormais qu’un but : conquérir et répandre la révélation du Tout-Puissant. Lorsque Muhammad s’éteint en 632, toute la péninsule arabique est islamisée. Les califes successeurs s’élancent hors des frontières pour clamer le nom d’Allah. Force est de constater avec quelle rapidité les Arabes ont imposé l’islam : en soixante ans à peine, les habitants d’Afrique du Nord ont oublié cinq siècles de latinisation et de rites chrétiens pour adopter la doctrine musulmane. La célèbre Kahéna, Jeanne d’Arc berbère à la tête de cent mille hommes, n’a pu empêcher le général Hassan Ibn Noman de s’imposer par les armes et par la ruse. C’est en arabe, désormais, que l’histoire du pays va s’écrire. Dans un style épique, Geneviève Chauvel retrace la chevauchée des cavaliers d’Allah, des abords de La Mecque à la bataille de Poitiers (732). Des guerriers qui ont lancé le monde arabe sur sa trajectoire actuelle.",
            "Langue": "Français",
            "Prix": 52.000,
            "ISBN": "978-2-8098-1797-3",
            "MaisonEdition": "L'Archipel",
            "NombrePages": 268,
            "Poids": "370 g",
            "Disponibilite": "immédiate",
            "DateSortie": "20 janv. 2016",
            "UrlImage": "cavalier_allah.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 3,
            "Nom": "Ainsi résonne l'écho infini des montagnes",
            "Auteur": "Khaled Hosseini",
            "Description": "Dans le village de Shadbagh, Abdullah, dix ans, veille sur sa petite soeur Pari, trois ans. Entre les deux enfants, le lien est indéfectible, un amour si fort qu'il leur permet de supporter la disparition de leur mère, les absences de leur père en quête désespérée d'un travail et ces jours ou la faim les tenaille. Mais un événement va venir distendre ce lien, un choix terrible qui modifiera à jamais le destin des deux jeunes vies, et de bien d'autres encore... Après les Cerfs-volants de Kaboul et de Mille Soleils splendides, Khaled Hosseini nous emmène dans un voyage bouleversant, d'un village afghan des années 1950 à la Californie des années 2000, et signe une fresque familiale renversante d'émotion, d'une ampleur et d'une audace inouïes.",
            "Langue": "Français",
            "Prix": 22.800,
            "ISBN": "978-2-264-06349-6",
            "MaisonEdition": "10-18",
            "NombrePages": 504,
            "Poids": "330 g",
            "Disponibilite": "",
            "DateSortie": "2 oct. 2014",
            "UrlImage": "echo_infini.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 4,
            "Nom": "After Tome 3",
            "Auteur": "Anna Todd",
            "Description": "Le caractère ombrageux d'Hardin continue à lui jouer des tours, et il échappe de peu à l'expulsion de l'université. De son côté, Tessa retrouve son père par hasard au détour d'une rue. Hardin, toujours aussi ingérable, ne facilite pas cette entrevue inopinée. Tessa va devoir affronter la plus douloureuse des questions : Hardin pourra-t-il s'ouvrir un jour ? Un week-end chez le père d'Hardin est l'occasion rêvée pour se recentrer sur leur histoire. La rencontre de Riley et de Lillian va leur en apprendre bien plus que toutes leurs querelles. Pourtant, le départ pour Seattle approche... C'est le moment de prendre les bonnes décisions. Mais Hardin est-il seulement capable de mettre ses démons de côté pour suivre Tessa ? Le besoin passionné d'être ensemble sera-t-il plus fort que tous les obstacles ?",
            "Langue": "Français",
            "Prix": 20.500,
            "ISBN": "978-2-253-19460-6",
            "MaisonEdition": "Le Livre de Poche",
            "NombrePages": 576,
            "Poids": "300 g",
            "Disponibilite": "En stock",
            "DateSortie": "1 juin 2016",
            "UrlImage": "after_fell.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 6,
            "Nom": "Le Petit Prince",
            "Auteur": "Antoine de Saint-Exupéry",
            "Description": "«Le premier soir, je me suis donc endormi sur le sable à mille milles de toute terre habitée. J'étais bien plus isolé qu'un naufragé sur un radeau au milieu de l'océan. Alors, vous imaginez ma surprise, au lever du jour, quand une drôle de petite voix m'a réveillé. Elle disait : “S'il vous plaît... dessine-moi un mouton!” J'ai bien regardé. Et j'ai vu ce petit bonhomme tout à fait extraordinaire qui me considérait gravement...»",
            "Langue": "Français",
            "Prix": 17.400,
            "ISBN": "978-2-07-061275-8",
            "MaisonEdition": "Gallimard",
            "NombrePages": 120,
            "Poids": "160 g",
            "Disponibilite": "exclusif",
            "DateSortie": "1 juin 2016",
            "UrlImage": "petit_prince.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 7,
            "Nom": "Violetta Tome 11",
            "Auteur": "Disney",
            "Description": "Cher journal, Pourquoi l'amour doit-il toujours être si compliqué ? J'espérais que Leon et moi, nous nous retrouverions. Mais il semble avoir oublié notre histoire... dans les bras de Lara ! Diego espère toujours me conquérir... Mais suis-je encore capable de faire confiance ? Violetta",
            "Langue": "Français",
            "Prix": 20,
            "ISBN": "978-2-01-204782-2",
            "MaisonEdition": "Hachette Jeunesse",
            "NombrePages": 160,
            "Poids": "200 g",
            "Disponibilite": "exclusif",
            "DateSortie": "1 juin 2016",
            "UrlImage": "violetta.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 8,
            "Nom": "Max et les Maximonstres",
            "Auteur": "Maurice Sendak",
            "Description": "À force de faire bêtise sur bêtise dans son terrible costume de loup, Max s’est retrouvé puni et enfermé dans sa chambre. Mais pas seulement. Voilà qu’il se retrouve aussi roi d’une armée de bêtes immondes, les Maximonstres. Max le maudit les a domptés. Ils sont griffus, dentus, poilus, vivent sur une île et ne savent rien faire que des sarabandes, des fêtes horribles où il n’y a rien à manger. Max a la nostalgie de son chez-lui, des bonnes odeurs de cuisine et de l’amour de sa mère. Que faut- il faire pour rentrer ? Peut-être commencer par le désirer…",
            "Langue": "",
            "Prix": 33.000,
            "ISBN": "978-2-211-22271-6",
            "MaisonEdition": "L'Ecole des loisirs",
            "NombrePages": 44,
            "Poids": "425 g",
            "Disponibilite": "Français",
            "DateSortie": "25 mars 2015",
            "UrlImage": "max_monstres.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 9,
            "Nom": "Journal d'un dégonflé Tome 7",
            "Auteur": "Jeff Kinney",
            "Description": "Le monde de Greg s’écroule quand son collège organise un bal pour la Saint-Valentin. C’est la panique ! Si aucune fille n'accepte de l'accompagner, il sera la risée de l'école. Et il ne peut pas compter sur l’aide de son ami Robert, qui n'y connaît RIEN aux filles. Il lui reste quelques semaines avant le bal. D'ici-là, Greg a intérêt à se tenir à carreau et à ne pas se ridiculiser en public, une fois de plus, s'il veut trouver une cavalière…",
            "Langue": "Français",
            "Prix": 30.900,
            "ISBN": "979-10-235-0187-2",
            "MaisonEdition": "Seuil",
            "NombrePages": 228,
            "Poids": "280 g",
            "Disponibilite": "exclusif",
            "DateSortie": "1 juin 2016",
            "UrlImage": "journal_degonfle.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 10,
            "Nom": "Le Petit Nicolas",
            "Auteur": "Sempé, René Goscinny",
            "Description": "avez-vous qui est le petit garçon le plus impertinent, le plus malin et le plus tendre aussi? À l'école ou en famille, il a souvent de bonnes idées et cela ne lui réussit pas toujours. Vous l'avez tous reconnu. C'est le petit Nicolas évidemment! La maîtresse est inquiète, le photographe s'éponge le front, le Bouillon devient tout rouge, les mamans ont mauvaise mine, quant à l'inspecteur, il est reparti aussi vite qu'il était venu. Pourtant, Geoffroy, Agnan, Eudes, Rufus, Clotaire, Maixent, Alceste, Joachim… et le petit Nicolas sont – presque – toujours sages",
            "Langue": "",
            "Prix": 17.800,
            "ISBN": "978-2-07-061276-5",
            "MaisonEdition": "Gallimard",
            "NombrePages": 176,
            "Poids": "235 g",
            "Disponibilite": "exclusif",
            "DateSortie": "15 mars 2007",
            "UrlImage": "petit_nicolas.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 11,
            "Nom": "L'été devant nous",
            "Auteur": "Jenny Han",
            "Description": "Depuis deux ans qu’elle est en couple avec Jeremiah, Belly est presque convaincue d’avoir trouvé l’âme soeur. Presque. Conrad, le frère de Jeremiah, ne s’est pas remis de l’erreur qu’il a commise en laissant partir Belly. Alors, quand Belly et Jeremiah décident de se marier, Conrad se rend compte que c’est le moment ou jamais : avouer son amour à Belly, ou la perdre pour toujours",
            "Langue": "Français",
            "Prix": 17.900,
            "ISBN": "978-2-01-161161-1",
            "MaisonEdition": "Le Livre de Poche Jeunesse",
            "NombrePages": 352,
            "Poids": "230 g",
            "Disponibilite": "",
            "DateSortie": "1 juin 2016",
            "UrlImage": "ete_devant.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 12,
            "Nom": "Les disparus du Clairdelune",
            "Auteur": "Christelle Dabos",
            "Description": "Fraîchement promue vice-conteuse, Ophélie découvre à ses dépens les haines et les complots qui couvent sous les plafonds dorés de la Citacielle. Dans cette situation toujours périlleuse, peut-elle seulement compter sur Thorn, son énigmatique fiancé? Et que signifient les mystérieuses disparitions des personnalités influentes à la cour? Ophélie se retrouve impliquée malgré elle dans une enquête qui l'entraînera au-delà des illusions du Pôle, au coeur d'une redoutable vérité.",
            "Langue": "Français",
            "Prix": 49.900,
            "ISBN": "978-2-07-066198-5",
            "MaisonEdition": "",
            "NombrePages": 560,
            "Poids": "820 g",
            "Disponibilite": "",
            "DateSortie": "29 oct. 2015",
            "UrlImage": "disparu_claire.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 13,
            "Nom": "Hunger Games Tome 1",
            "Auteur": "Suzanne Collins",
            "Description": "Dans un futur sombre, sur les ruines des Etats-Unis, est créé un jeu télévisé pour contrôler le peuple par la terreur: douze garçons et douze filles tirés au sort participent à cette sinistre téléréalité, que tout le monde est forcé de regarder en direct. Une seule règle dans l’arène : survivre, à tout prix. Quand sa petite sœur est appelée pour participer aux Hunger Games, Katniss n’hésite pas une seconde. Elle prend sa place, consciente du danger. A seize ans, Katniss a déjà été confrontée plusieurs fois à la mort. Chez elle, survivre est comme une seconde nature",
            "Langue": "Français",
            "Prix": 20.200,
            "ISBN": "978-2-266-26077-0",
            "MaisonEdition": "Pocket Jeunesse",
            "NombrePages": 432,
            "Poids": "285 g",
            "Disponibilite": "",
            "DateSortie": "4 juin 2015",
            "UrlImage": "hungergames.jpg",
            "Categorie": "Jeunesse",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 14,
            "Nom": "Les étincelles de hasard Tome 1",
            "Auteur": "Henri Atlan",
            "Description": "Ne faut-il pas faire parler à nouveau la connaissance par le sexe, et par la fécondité du concept, pour entendre ce que la biologie, les sciences cognitives et la psychanalyse tentent, peut-être maladroitement, de nous dire ? Connaissance, sexualité, hasard, incertitude, naissances et avortements, anges et démons, vieillissement, maladie et mort, les sciences et les techniques renvoient sans cesse à ces problèmes inhérents à la condition humaine. Nous rêvons de tout maîtriser, y compris l'incertitude. Mais l'aléatoire garde d'autant plus sa valeur que la maîtrise totale s'avère illusoire. Le mythe s'est toujours emparé de ce type de problèmes : non seulement Prométhée, Œdipe, mais aussi le serpent des mythes bibliques, l'arbre de vie, et l'arbre de connaissance, qui rappelle que celle-ci est toujours ambivalente, le déluge et Babel. Dans ce livre, qui constitue le premier tome d'un diptyque, Henri Atlan aborde quelques-uns des problèmes concernant les techniques et les sciences liées à la fabrication du vivant. Mais, pour nous éclairer, l'auteur emprunte des traverses inattendues, celles de la philosophie et des plus vieilles mythologies de l'humanité (Spinoza, la Kabbale, le Talmud). Point de départ : suivant une légende hébraïque. Adam est séparé d'Eve pendant cent trente ans. Durant tout ce temps, il répand des gouttes de sperme. Ce sont «les étincelles de hasard»",
            "Langue": "Français",
            "Prix": 60.500,
            "ISBN": "978-2-02-025248-5",
            "MaisonEdition": "Seuil",
            "NombrePages": 400,
            "Poids": "590 g",
            "Disponibilite": "exclusif",
            "DateSortie": "17 sept. 1999",
            "UrlImage": "etincelle_hasard.jpg",
            "Categorie": "SciencesTechniques",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 15,
            "Nom": "Exercices : méthodologie",
            "Auteur": "Guillaume Grzych",
            "DescriptioFrançaisn": "Cet ouvrage regroupe les items du nouveau programme de 2010 de l’internat en Pharmacie en lien avec l’épreuve des exercices. Il propose un large éventail de méthodes et formules utiles à la préparation du concours. C’est également une aide précieuse pour la résolution des épreuves d’exercices pour les étudiants des trois premières années de pharmacie ainsi qu’en première année des études de santé (PACES). Il permet de réviser facilement et rapidement l’une des épreuves les plus sélectives de l’examen grâce à des chapitres synthétiques contenant l’essentiel du cours. Il a été élaboré selon de nombreuses sources des quatre coins de la France afin d’obtenir un contenu des plus exhaustifs, ceci pour éviter le maximum de surprises le jour du concours.",
            "Langue": "Français",
            "Prix": 72.500,
            "ISBN": "978-2-8073-0205-1",
            "MaisonEdition": "De Boeck Supérieur",
            "NombrePages": 160,
            "Poids": "450 g",
            "Disponibilite": "exclusif",
            "DateSortie": "15 janv. 2016",
            "UrlImage": "exercice_methodologie.jpg",
            "Categorie": "SciencesTechniques",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 16,
            "Nom": "Exercices : méthodologie TOME 1",
            "Auteur": "Guillaume Grzych",
            "DescriptioFrançaisn": "Cet ouvrage regroupe les items du nouveau programme de 2010 de l’internat en Pharmacie en lien avec l’épreuve des exercices. Il propose un large éventail de méthodes et formules utiles à la préparation du concours. C’est également une aide précieuse pour la résolution des épreuves d’exercices pour les étudiants des trois premières années de pharmacie ainsi qu’en première année des études de santé (PACES). Il permet de réviser facilement et rapidement l’une des épreuves les plus sélectives de l’examen grâce à des chapitres synthétiques contenant l’essentiel du cours. Il a été élaboré selon de nombreuses sources des quatre coins de la France afin d’obtenir un contenu des plus exhaustifs, ceci pour éviter le maximum de surprises le jour du concours.",
            "Langue": "Français",
            "Prix": 72.500,
            "ISBN": "978-2-8073-0205-1",
            "MaisonEdition": "De Boeck Supérieur",
            "NombrePages": 160,
            "Poids": "450 g",
            "Disponibilite": "",
            "DateSortie": "15 janv. 2016",
            "UrlImage": "exercice_methodologie.jpg",
            "Categorie": "SciencesTechniques",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 17,
            "Nom": "Les étincelles de hasard Tome 2",
            "Auteur": "Henri Atlan",
            "Description": "Ne faut-il pas faire parler à nouveau la connaissance par le sexe, et par la fécondité du concept, pour entendre ce que la biologie, les sciences cognitives et la psychanalyse tentent, peut-être maladroitement, de nous dire ? Connaissance, sexualité, hasard, incertitude, naissances et avortements, anges et démons, vieillissement, maladie et mort, les sciences et les techniques renvoient sans cesse à ces problèmes inhérents à la condition humaine. Nous rêvons de tout maîtriser, y compris l'incertitude. Mais l'aléatoire garde d'autant plus sa valeur que la maîtrise totale s'avère illusoire. Le mythe s'est toujours emparé de ce type de problèmes : non seulement Prométhée, Œdipe, mais aussi le serpent des mythes bibliques, l'arbre de vie, et l'arbre de connaissance, qui rappelle que celle-ci est toujours ambivalente, le déluge et Babel. Dans ce livre, qui constitue le premier tome d'un diptyque, Henri Atlan aborde quelques-uns des problèmes concernant les techniques et les sciences liées à la fabrication du vivant. Mais, pour nous éclairer, l'auteur emprunte des traverses inattendues, celles de la philosophie et des plus vieilles mythologies de l'humanité (Spinoza, la Kabbale, le Talmud). Point de départ : suivant une légende hébraïque. Adam est séparé d'Eve pendant cent trente ans. Durant tout ce temps, il répand des gouttes de sperme. Ce sont «les étincelles de hasard»",
            "Langue": "Français",
            "Prix": 62.500,
            "ISBN": "978-2-02-025248-5",
            "MaisonEdition": "Seuil",
            "NombrePages": 400,
            "Poids": "590 g",
            "Disponibilite": "",
            "DateSortie": "17 sept. 1999",
            "UrlImage": "etincelle_hasard2.jpg",
            "Categorie": "SciencesTechniques",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 18,
            "Nom": "Reinventing Organizations",
            "Auteur": "Frédéric Laloux",
            "Description": "Reinventing Organizations est un guide pour ceux qui aspirent à gérer autrement leur entreprise, association, école, hôpital... Dans ce livre révolutionnaire, Frédéric Laloux ouvre des perspectives étonnantes. Il montre qu’à chaque fois que l’humanité est entrée dans une nouvelle ère de développement, elle a inventé une façon inédite de penser le management. C’est ce qui semble se passer à l’heure actuelle : visible pour ceux qui cherchent à le voir, un nouveau modèle d’organisation est en train d’émerger, porteur de sens, d’enthousiasme et d’authenticité. Il ne s’agit pas d’un modèle théorique ou d’une utopie. Reinventing Organizations se base sur une recherche rigoureuse d’organisations pionnières qui fonctionnent déjà sur des schémas novateurs. Si vous êtes dirigeant ou créateur d’entreprise, manager, coach ou consultant, vous trouverez ici de nombreux conseils pratiques, exemples et histoires inspirantes pour imaginer, concrètement, l’étape suivante de votre entreprise",
            "Langue": "Français",
            "Prix": 81.200,
            "ISBN": "978-2-35456-105-5",
            "MaisonEdition": "Diateino",
            "NombrePages": 492,
            "Poids": "600 g",
            "Disponibilite": "",
            "DateSortie": "22 oct. 2015",
            "UrlImage": "reinventing_innovation.jpg",
            "Categorie": "DroitEconomieGestion",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 19,
            "Nom": "Conduire le changement",
            "Auteur": "John Kotter",
            "Description": "Pourquoi les organisations ont-elles tendance à s'opposer aux transformations  ? Quelle démarche adopter pour surmonter cette inertie ? Comment éviter les angoisses et dépasser les blocages au moment d’évoluer  ? En quoi le leadership est-il indispensable pour relever les défis que pose le changement  ? Dans un monde de plus en plus instable et concurrentiel, les entreprises doivent sans cesse prendre de nouvelles initiatives. Cette stratégie, devenue essentielle pour réussir, suppose, afin d’être appliquée avec succès, d’apprendre à conduire le changement. Dans un ouvrage considéré par le magazine Time comme l’un des 25  livres d’entreprise les plus influents de tous les temps, le spécialiste mondialement reconnu de la gestion du changement, John Kotter, souligne non seulement les erreurs à éviter mais propose aussi une véritable feuille de route en huit étapes pour réussir le changement. Résolument pratique et opérationnel, Conduire le changement offre des pistes d’action utilisables par tous pour permettre aux organisations de devenir plus agiles et plus évolutives, renforcer le leadership des individus, appliquer des stratégies plus élaborées et réussir à exécuter rapidement des initiatives hardies.",
            "Langue": "Français",
            "Prix": 84.100,
            "ISBN": "978-2-7440-6638-2",
            "MaisonEdition": "Pearson",
            "NombrePages": 256,
            "Poids": "370 g",
            "Disponibilite": "",
            "DateSortie": "18 sept. 2015",
            "UrlImage": "conduire_changement.jpg",
            "Categorie": "DroitEconomieGestion",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 20,
            "Nom": "Lean Startup",
            "Auteur": "Eric Ries",
            "Description": "Un livre déjà culte dans le monde des entrepreneurs ! En appliquant les grands principes du lean management au développement de nouveaux produits, Eric Ries a mis au point une méthode qui change radicalement la donne pour tous ceux qui souhaitent créer une entreprise ou développer un nouveau projet : le Lean Startup. Cette approche révolutionnaire permet en effet d'adapter constamment son offre mais aussi son entreprise aux évolutions du marché, en suivant le principe de l'innovation continue. Dans cet ouvrage, Eric Ries expose sa méthodologie et l'illustre de nombreux exemples d'entreprises qui ont su encourager la créativité et sortir des sentiers battus en s'adaptant aux besoins de leurs clients, pour faire ainsi évoluer leur business model d'origine : Groupon, Zappos, Dropbox, Intuit… Lean Startup est un remarquable guide pratique d'innovation pour améliorer les chances de succès de tout nouveau projet, à l'usage des grandes entreprises comme des plus petites. C'est également un mode d'emploi du travail collaboratif et du management créatif. En ces temps d'hyper-compétition mondiale, c'est donc une lecture indispensable !",
            "Langue": "Français",
            "Prix": 89.900,
            "ISBN": "978-2-7440-6640-5",
            "MaisonEdition": "Pearson",
            "NombrePages": 320,
            "Poids": "510 g",
            "Disponibilite": "",
            "DateSortie": "3 juil. 2015",
            "UrlImage": "lean_startup.jpg",
            "Categorie": "DroitEconomieGestion",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 21,
            "Nom": "Le pilotage du changement",
            "Auteur": "Pierre Collerette",
            "Description": "Rares sont les organisations qui échappent au déferlement de changements : c’était vrai au début des années 1990 lors de la parution de la première édition de ce livre, ce l’est d’autant plus aujourd’hui, alors qu’évoluer dans un environnement instable représente désormais une constante pour les gestionnaires. Dans un contexte marqué par une concurrence toujours plus vive, par des législations toujours plus complexes et par des consommateurs plus critiques, tout, absolument tout, est continuellement remis en cause.",
            "Langue": "Français",
            "Prix": 147.900,
            "ISBN": "978-2-7605-2533-7",
            "MaisonEdition": "PU Québec",
            "NombrePages": 318,
            "Poids": "510 g",
            "Disponibilite": "exclusif",
            "DateSortie": "7 mai 2013",
            "UrlImage": "pilotage_changement.jpg",
            "Categorie": "DroitEconomieGestion",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 22,
            "Nom": "Guide du Routard Corse 2016",
            "Auteur": "Collectif",
            "Description": "NOUVEAU : une expérience de voyage encore plus forte avec le Routard ! Retrouvez en début de guide un cahier illustré de 32 pages pour découvrir en photos et en couleurs tous nos coups de cœur et nos suggestions de circuits",
            "Langue": "Français",
            "Prix": 30,
            "ISBN": "978-2019124359",
            "MaisonEdition": "Hachette Tourisme",
            "NombrePages": 500,
            "Poids": "",
            "Disponibilite": "immédiate",
            "DateSortie": "1 juin 2016",
            "UrlImage": "corse.jpg",
            "Categorie": "VoyagesNature",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 23,
            "Nom": "Guide du Routard Croatie 2016/2017",
            "Auteur": "Collectif",
            "Description": "Parcourir Gradec, la ville haute de Zagreb, qui garde le parfum des villes d’Europe centrale. Visiter Pula, Pore ou Rovinj, villes d’Istrie marquées par la présence italienne. Faire le grand tour des lacs de Plitvice, merveilles naturelles entourées de magnifiques forêts. Jouer au Robinson dans les Kornati, ensemble d’îles et d’îlots pratiquement inhabités. Flâner à Split dans la ville-palais de l’empereur Dioclétien. Arpenter les rues patinées par les siècles de la vieille ville de Dubrovnik… Et puis le routard Croatie c’est toujours des adresses souvent introuvables ailleurs, des infos remises à jour chaque année et des cartes et plans détaillés. Avec le Routard, tracez votre propre route ! Rencontres, découvertes, partage, voilà des valeurs que nous défendons !",
            "Langue": "Français",
            "Prix": 35,
            "ISBN": "978-2019124717",
            "MaisonEdition": "Hachette Tourisme",
            "NombrePages": 504,
            "Poids": "",
            "Disponibilite": "",
            "DateSortie": "1 juin 2016",
            "UrlImage": "croatie.jpg",
            "Categorie": "VoyagesNature",
            "Quantite": 0,
            "DateDerniereCommande": "2016-07-20T15:38:34.728Z"
        },
        {
            "Id": 24,
            "Nom": "La grammaire au jour le jour",
            "Auteur": "Françoise Picot",
            "Description": "Une méthode complète pour faire de la grammaire et mieux lire et écrire en classes de CE2, CM1 et CM2. ",
            "Langue": "Français",
            "Prix": 20,
            "ISBN": "978-2091243368",
            "MaisonEdition": "Nathan",
            "NombrePages": 288 ,
            "Poids": "",
            "Disponibilite": "",
            "DateSortie": "1 juin 2016",
            "UrlImage": "education1.jpg",
            "Categorie": "ScolairePedagogie",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 25,
            "Nom": "Réussir son entrée en vocabulaire",
            "Auteur": "Françoise Bellanger",
            "Description": "Le recentrage actuel des programmes de l’école primaire sur la maîtrise de la langue, et notamment sur un enseignement structuré du vocabulaire, situe la classe de CE1 à une place charnière. Si les connaissances et les compétences s’acquièrent par l’entraînement, leur appropriation par l’élève est davantage optimisée lorsque les notions sont « mises en scène » et « manipulées » (notamment chez les enfants jeunes) afin de leur donner du sens dès le départ. Cet ouvrage propose donc une approche réfléchie du vocabulaire organisée en 2 temps : Appropriation de notions : ordre alphabétique, utilisation du dictionnaire, champ lexical, approche des notions d’antonyme, synonyme, famille de mots. Des exercices d’entraînement sont proposés à l’issue de chaque séquence. Thèmes lexicaux pour enrichir son vocabulaire : le corps, l’alimentation, les étapes de la vie, la famille, les sentiments, les paysages, les matières. Les séquences privilégient toujours un temps de manipulation et de recherches ; elles sont à mener en lien avec les autres disciplines pour une meilleure contextualisation, mais certaines visent un entrainement systématique décontextualisé. L’ouvrage propose les supports textuels ; les fiches de préparation pour le guidage didactique des séquences ; les exercices à mener sur chaque notion ou thème. Le CD-Rom reprend les exercices en format A4 et les textes illustrés (prêts à l’emploi) ; il comporte également du matériel annexe (étiquettes, mémento, etc.).",
            "Langue": "Français",
            "Prix": 45,
            "ISBN": "978-2725632049",
            "MaisonEdition": "Retz",
            "NombrePages": 180,
            "Poids": "",
            "Disponibilite": "",
            "DateSortie": "1 juin 2016",
            "UrlImage": "education2.jpg",
            "Categorie": "ScolairePedagogie",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 26,
            "Nom": "Réussir son entrée en vocabulaire Tome 2",
            "Auteur": "Françoise Bellanger",
            "Description": "Le recentrage actuel des programmes de l’école primaire sur la maîtrise de la langue, et notamment sur un enseignement structuré du vocabulaire, situe la classe de CE1 à une place charnière. Si les connaissances et les compétences s’acquièrent par l’entraînement, leur appropriation par l’élève est davantage optimisée lorsque les notions sont « mises en scène » et « manipulées » (notamment chez les enfants jeunes) afin de leur donner du sens dès le départ. Cet ouvrage propose donc une approche réfléchie du vocabulaire organisée en 2 temps : Appropriation de notions : ordre alphabétique, utilisation du dictionnaire, champ lexical, approche des notions d’antonyme, synonyme, famille de mots. Des exercices d’entraînement sont proposés à l’issue de chaque séquence. Thèmes lexicaux pour enrichir son vocabulaire : le corps, l’alimentation, les étapes de la vie, la famille, les sentiments, les paysages, les matières. Les séquences privilégient toujours un temps de manipulation et de recherches ; elles sont à mener en lien avec les autres disciplines pour une meilleure contextualisation, mais certaines visent un entrainement systématique décontextualisé. L’ouvrage propose les supports textuels ; les fiches de préparation pour le guidage didactique des séquences ; les exercices à mener sur chaque notion ou thème. Le CD-Rom reprend les exercices en format A4 et les textes illustrés (prêts à l’emploi) ; il comporte également du matériel annexe (étiquettes, mémento, etc.).",
            "Langue": "Français",
            "Prix": 45,
            "ISBN": "978-2725632049",
            "MaisonEdition": "Retz",
            "NombrePages": 180,
            "Poids": "",
            "Disponibilite": "",
            "DateSortie": "1 juillet 2016",
            "UrlImage": "education2.jpg",
            "Categorie": "ScolairePedagogie",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        }
    ],
    categories: [{Id: "Jeunesse", Libelle: "Lecture jeunesse"},
        {Id: "SciencesTechniques", Libelle: "Sciences & Techniques"},
        {Id: "DroitEconomieGestion", Libelle: "Droit, Economie & Gestion"},
        {Id: "VoyagesNature", Libelle: "Voyages & Nature"},
        {Id: "ScolairePedagogie", Libelle: "Scolaire & Pédagogie"}
    ]
}, function (err) {
    if (err) {
        console.log('************** ERREUR : clearAndLoad');
        console.log(err);
        console.log('************** ERREUR : clearAndLoad');
    }
});