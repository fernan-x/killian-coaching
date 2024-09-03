export type Review = {
    id: number;
    comment: string;
    user: string;
    note: number;
}

const REVIEWS: Review[] = [
    {
        id: 3,
        comment: `Excellente prestation de Killian, qui intègre parfaitement dans son programme sportif , l'etat de santé et les objectifs de son patient/client.`,
        user: `Patrice Merhand`,
        note: 5,
    },
    {
        id: 4,
        comment: `De l'écoute, de la bienveillance, de l'exigence et du challenge ! Killian est un très bon coach, qui sait s'adapter à vos attentes et vous pousser au meilleur de vous même !`,
        user: `Carole Deletre`,
        note: 5,
    },
    {
        id: 6,
        comment: `Killian est un très bon coach. Je suis quelqu'un qui perd souvent en motivation et régularité et malgré cela il reste à l'écoute et derrière moi à m'encourager et cela fait plaisir.`,
        user: 'Élodie Nester',
        note: 5,
    }
];

export {
    REVIEWS,
}