import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import * as React from 'react';


function createUnet(id, maara, pvm, laatu, lisatiedot) {
    return { id, maara, pvm, laatu, lisatiedot };
}

export const unet = [
    createUnet(1, '7', '12.04.2023', 'Erinomainen', 'ei'),
    createUnet(2, '5', '13.04.2023', 'Hyvä', 'ei'),
    createUnet(3, '6', '14.04.2023', 'Huono', 'ei'),
    createUnet(4, '8', '15.04.2023', 'Hyvä', 'ei'),
    createUnet(5, '7', '16.04.2023', 'Hyvä', 'ei'),
    createUnet(6, '7', '17.04.2023', 'Muu(lisatietoja)', 'heräsin pirteänä'),
    createUnet(7, '9', '18.04.2023', 'Huono', 'ei'),
    createUnet(8, '7', '19.04.2023', 'Erinomainen', 'ei'),
];


export const unenlaatu = [
    {
        value: 1,
        label: "Erinomainen"
    },
    {
        value: 2,
        label: "Hyvä"
    },
    {
        value: 3,
        label: "Huono"
    },
    {
        value: 4,
        label: "Muu(Lisatietoja)"
    }
];

function createRuoat(id, ruoka, pvm, kellonaika, lisatiedot, tahdet) {
    return { id, ruoka, pvm, kellonaika, lisatiedot, tahdet: <StarRatingCell value={tahdet} /> };
}

export const ruoat = [
    createRuoat(1, 'Ruoka1', '12.04.2023', '12.35', 'ei', 1),
    createRuoat(2, 'Ruoka2', '12.04.2023', '12.35', 'ei', 2),
    createRuoat(3, 'Ruoka3', '13.04.2023', '12.35', 'ei', 3),
    createRuoat(4, 'Ruoka4', '14.04.2023', '12.35', 'ei', 4),
    createRuoat(5, 'Ruoka5', '15.04.2023', '12.35', 'ei', 5),
    createRuoat(6, 'Ruoka6', '16.04.2023', '12.35', 'ei', 4),
    createRuoat(7, 'Ruoka7', '17.04.2023', '12.35', 'ei', 3),
    createRuoat(8, 'Ruoka8', '18.04.2023', '12.35', 'ei', 2),
];

export function StarRatingCell({ value }) {
    const filledStars = value;
    const emptyStars = 5 - filledStars;
    const filledStarsArray = Array.from({ length: filledStars }, (_, i) => (
      <StarIcon key={`filled-${i}`} style={{ color: '#FAAF00' }} />
    ));
    const emptyStarsArray = Array.from({ length: emptyStars }, (_, i) => (
      <StarBorderIcon key={`empty-${i}`} />
    ));
    const stars = [...filledStarsArray, ...emptyStarsArray];
  
    return <div>{stars}</div>;
  }
  

export const munTiedot = {
    tunnus: 'abc',
    enimi: 'aakkoset',
    snimi: 'Åkerman',
    email: 'etunimi.sukunimi@sähköposti.com',
    puh: '0400123456',
};
