// Please Note The id is important!
// The id can be anything but unique
// @Ahmad Khidir


import bg1 from '../assets/images/bg.jpg';
import bg2 from '../assets/images/bg1.jpg';
import bg3 from '../assets/images/bg4.jpg';

export const products = {
    meals: [
        {   
            id: 1,
            name: 'jollof rice',
            label: 'per portion',
            price: 300,
            image: require('../assets/images/15.jpg'),
        },
        {
            id: 2,
            name: 'fried rice',
            label: 'per portion',
            price: 350,
            image: require('../assets/images/17.jpg'),
        },
        {
            id: 3,
            name: 'Spaghetti',
            label: 'per portion',
            price: 300,
            image: require('../assets/images/spaghetti.jpeg'),
        },
        {
            id: 4,
            name: 'Noodles',
            label: 'per 70g',
            price: 300,
            image: require('../assets/images/noodles.jpeg'),
        },
        {
            id: 5,
            name: 'Yam Porridge',
            label: 'per portion',
            price: 350,
            image: require('../assets/images/Porridge.jpeg'),
        },
        {
            id: 6,
            name: 'Yam Slices',
            label: 'per portion',
            price: 300,
            image: require('../assets/images/yam.jpeg'),
        },
        {
            id: 7,
            name: 'plantain',
            label: 'per 4 pieces',
            price: 100,
            image: require('../assets/images/13.png'),
        },
    ],
    swallows: [
        {
            id: 3,
            name: 'amala',
            label: 'per wrap',
            price: 200,
            image: require('../assets/images/3.jpg'),
        },
        {
            id: 4,
            name: 'semolina',
            label: 'per wrap',
            price: 200,
            image: require('../assets/images/1.jpg'),
        },
    ],
    protein: [
        {
            id: 8,
            name: 'beef',
            label: 'per plate',
            price: 300,
            image: require('../assets/images/12.jpg'),
        },{
            id: 9,
            name: 'chicken',
            label: 'per plate',
            price: 600,
            image: require('../assets/images/11.jpg'),
        },
    ],
    soups: [
        {
            id: 5,
            name: 'egusi',
            label: 'per portion',
            price: 200,
            image: require('../assets/images/16.jpg'),
        },
        {
            id: 6,
            name: 'efo riro',
            label: 'per portion',
            price: 200,
            image: require('../assets/images/14.jpg'),
        },
        {
            id: 10,
            name: 'pepper soup',
            label: 'per plate',
            price: 2000,
            image: require('../assets/images/10.jpg'),
        },
    ],
    grills: [
        {
            id: 33,
            name: 'barbecue fish',
            label: 'per plate',
            price: 2000,
            image: require('../assets/images/9.jpeg'),
        },
        {
            id: 34,
            name: 'chicken & chips',
            label: 'per serving',
            price: 1500,
            image: require('../assets/images/6.png'),
        },
        {
            id: 35,
            name: 'asun',
            label: 'per portion',
            price: 800,
            image: require('../assets/images/7.jpg'),
        },
        {
            id: 36,
            name: 'grilled chicken',
            label: 'per serving',
            price: 1500,
            image: require('../assets/images/barbecue_chicken.jpeg'),
        },
    ],
    combos: [
        {
            id: 13,
            name: 'jollof rice and beef',
            label: 'per plate',
            price: 600,
            image: require('../assets/images/8.jpg'),
        },
        {
            id: 14,
            name: 'fried rice and beef',
            label: 'per plate',
            price: 600,
            image: require('../assets/images/8.jpg'),
        },
        {
            id: 15,
            name: 'jollof rice and chicken',
            label: 'per plate',
            price: 900,
            image: require('../assets/images/4.jpg'),
        },
        {
            id: 16,
            name: 'fried rice and chicken',
            label: 'per plate',
            price: 900,
            image: require('../assets/images/4.jpg'),
        },
        {
            id: 17,
            name: 'amala with soup and beef',
            label: 'per plate',
            price: 700,
            image: require('../assets/images/bg1.jpg'),
        },
        {
            id: 18,
            name: 'semolina with soup and beef',
            label: 'per plate',
            price: 700,
            image: require('../assets/images/bg1.jpg'),
        },
        {
            id: 19,
            name: 'amala with soup and chicken',
            label: 'per plate',
            price: 1000,
            image: require('../assets/images/bg1.jpg'),
        },
        {
            id: 20,
            name: 'semolina with soup and chicken',
            label: 'per plate',
            price: 1000,
            image: require('../assets/images/bg1.jpg'),
        },
    ],
    drinks: [
        {
            id: 9,
            name: 'Coca Cola',
            label: 'per bottle',
            price: 150,
            image: bg1,
        },
        {
            id: 10,
            name: 'Pepsi',
            label: 'per bottle',
            price: 150,
            image: bg2,
        },
        {
            id: 11,
            name: 'Chamdor Wine',
            label: 'per bottle',
            price: 2500,
            image: bg3,
        },
        {
            id: 12,
            name: 'Veleta Wine',
            label: 'per bottle',
            price: 2000,
            image: bg1,
        }
    ]
}