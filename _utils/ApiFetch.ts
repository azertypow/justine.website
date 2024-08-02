import type {ApiPageContent, ApiSiteInfo} from "~/_utils/ApiDefinitions";

export function fetchSiteInfo(): ApiSiteInfo {
    return {
        projectsInfos: [
            {
                title: "Horrendous Banquet",
                category: "Cie Théâtre En Quete",
                src: "img/Horrendous banquet Galpon e murcia artengo 020.jpg",
                year: "2022",
                slug: "horrendous",
                subtitle: "Studio d'Action Théâtrale",
            },
            {
                title: "Angelina",
                category: "Actrice",
                src: "img/angelinagalponemurciaartengoweb010.jpg",
                year: "2023",
                slug: "angelina",
                subtitle: "Cie Théâtre EnQuete",
            },
            {
                title: "Borges",
                category: "Écriture",
                src: "img/Herodiasse Galpon Elisa Murcia Artengo 027.jpg",
                year: "2020",
                slug: "borges",
                subtitle: "Studio d'Action Théâtrale",
            },
            {
                title: "Enquete",
                category: "Actrice",
                src: "img/MG_0351.JPG",
                year: "2021",
                slug: "enquete",
                subtitle: "Cie Théâtre EnQuete",
            },
            {
                title: "La traversée d'Antigone",
                category: "Cie Théâtre En Quete",
                src: "img/Scherm­afbeelding 2024-04-12 om 08.14.24.png",
                year: "2022",
                slug: "traverse",
                subtitle: "Lorem sous-titre",
            },
        ]
    }
}


export function fetchProjectBySlug(): ApiPageContent {
    return {
        title: 'Angelina',
        category: 'Actrice',
        imageCover: '/justine.website/img/angelinagalponemurciaartengoweb010.jpg',
        intro: `
            <p>Débuté en 2018 avec comme point de départ des interrogations sur le monde de la prostitution, Angelina est une pièce de théâtre sur le stigmate de putain, montée à partir d’une écriture originale, créée sur base d’une enquête, de témoignages, et d’une recherche personnelle.</p>
            <p>Tressant une narration avec du matériaux documentaire, le spectacle s'articule autour d'une trame dans laquelle interviennent régulièrement des témoignages audio de travailleuses du sexe, provenant de diverses sources : des documentaires, des émissions radios, ou des interviews.</p>
        `,
        content: [
            {
                type: 'title',
                level: 'h2',
                value: 'Synopsis',
            },
            {
                type: 'body',
                content: `
                  <p>Dans l’intimité des loges d’un théâtre, une comédienne se prépare pour la répétition.</p>
                  <p>Elle met son costume de scène : un joli petit haut, une minijupe, des talons et se regarde dans le miroir : « Mais qui a inventé ces codes de merde ? »</p>
                  <p>Deuxième création de la compagnie, Angelina s’interroge sur la place symbolique de la figure de la prostituée : à la fois invisibilisée et présente partout. Dans le langage, d’abord, puis comme figure de référence ambiguë, parfois positive, parfois négative, mais nous laissant rarement indifférent.e.s.</p>
                  <p>Angelina met en scène une recherche, la tentative d’une rencontre avec le milieu des travailleuses du sexe, mais surtout l’envie de s’interroger sur la complexité de nos rapports à la sexualité, au travail, à l’argent, aux rapports de pouvoirs, à la liberté.</p>
                  <p>De quoi cette figure de la prostituée est-elle l’expression ? Qu’est-ce qu’elle nous pousse à faire ? A ne pas faire ?</p>
                  <p>Entre travail documentaire et narration, ce solo nous invite à entrer dans des zones ambigües, où désirs, fantasmes, et aspirations se confrontent avec la volonté de maitrise de sa propre image.</p>
                `,
            },
            {
                type: 'image',
                src: '/justine.website/img/angelina galpon e murcia artengo web  017.jpg',
                isFull: false,
            },
            {
                type: 'title',
                level: 'h2',
                value: 'Presse (liste des articles à télécharger)',
            },

            {
                type: "body",
                content: `
                    <p><strong>Tribune de Genève:</strong>
                       <br>Justine Ruchat se dévoile dans Angelina
                    </p>
                    <p><strong>Tribune de Genève:</strong>
                       <br>Justine Ruchat se dévoile dans Angelina
                    </p>
                `,
            },

            {
                type: 'title',
                level: 'h2',
                value: 'Crédits',
            },
            {
                type: 'body',
                content: `
                    <p><strong>Écriture, direction artistique et jeu:</strong> Justine Ruchat
                    <br><strong>Collaboration artistique:</strong> Koen Augustijnen
                    <br><strong>Direction technique et collaboration artistique:</strong> Hèctor Salvador Vicente
                    <br><strong>Scénographie:</strong> Camille Lacroix
                    <br><strong>Construction:</strong> Mansour Walter, Malik Ramallo, Philippe Lacroix
                    <br><strong>Costumes:</strong> Patty Eggerickx
                    <br><strong>Réalisation costumes:</strong> Sarah Duvert
                    <br><strong>Création sonore:</strong> Sylvain Fournier
                    <br><strong>Création lumière:</strong> Francesco dell'Elba
                    <br><strong>Production déléguée:</strong> Laure Chapel, Pâquis Production
                    <br><strong>Production:</strong> Théâtre EnQuête
                    <br><strong>Résidences de création:</strong> Projet H107, Hybrid Studios (Bruxelles)
                    <br><strong>Soutiens:</strong> Ville de Genève, Loterie Romande, Fondation Ernst Göhner,
                    </p>
                    
                    <p>Fondation Emilie Gourd, ville de Lancy, commune de Choulex, FEEIG,</p>
                    <p>Noumeno Asbl (Bruxelles)</p>
                    <p>La pièce a reçu le prix Théâtre de la Société Genevoise des Ecrivains en 2021</p>
                `
            },
            {
                type: 'image',
                src: '/justine.website/img/Borges Galpon_ e murcia artengo web 029.jpg',
                isFull: true,
            },
        ]
    }
}







