export type Review = {
    id: number;
    comment: string;
    user: string;
    note: number;
}

const REVIEWS: Review[] = [
    {
        id: 1,
        comment: `Super coach qui adapte les programmes et les exercices en fonction des besoins. J'ai commencé les coachings de groupe et Killian sait comment nous pousser au maximum tout en adaptant au niveau de chacun ! En plus il est toujours présent pour répondre aux questions. Je recommande vivement 😉`,
        user: `Fabien Fernandes Alves`,
        note: 5,
    },
    {
        id: 2,
        comment: `Killian est un excellent coach.
Ayant pour but d'intégrer l'armée, et en partant de 0 en sport, Killian a su me motiver et me pousser à performer. Il est à l'écoute et adapte les séances en fonction des besoins.
En seulement quelque mois, le sport n'était plus une corvée mais une motivation devenue nécessaire à mon quotidien.
(Perdu déjà 10kg en 7 mois et prise de muscle et de force importante)
Merci à lui`,
        user: `Chloe Goulvent`,
        note: 5,
    },
    {
        id: 3,
        comment: `Excellente prestation de Killian, qui intègre parfaitement dans son programme sportif , l'etat de santé et les objectifs de son patient/client.`,
        user: `Patrice Merhand`,
        note: 5,
    },
    {
        id: 4,
        comment: `Killian est un très bon coach, qui est à l'écoute de mes demandes.
Il m'a aider à progresser avec un programme personnalisé, un suivis alimentaire complet.
Toujours disponibles pour répondre à nos questions.
Plus que professionnel !!!`,
        user: `Alicia Lucas`,
        note: 5,
    },
    {
        id: 5,
        comment: `Killian est quelqu'un de très professionnel. Il sait être à l'écoute de mes attentes, et réalise des programmes en accord avec mes objectifs. Il m'a redonné goût au sport, et me motive à chaque séance pour repousser mes limites et me donner à fond. Je le recommande fortement, c'est un très bon coach sportif!!`,
        user: `Michon Colyne`,
        note: 5,
    },
    {
        id: 6,
        comment: `Killian est un coach a l'écoute , il sait nous motiver , prend le temps de faire des modifications selon nos compétences, il m'a beaucoup aidé moi qui avait beaucoup de mal avec le sport avant , et ses programmes sont parfait et adapté à chacun . La salle est devenu un endroit que j'adore grâce à ses séances .`,
        user: 'Léa Martineau',
        note: 5,
    }
];

export {
    REVIEWS,
}