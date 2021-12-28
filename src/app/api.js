// Please Note The id is important!
// The id can be anything but unique
// @Ahmad Khidir


import bg1 from '../assets/images/bg.jpg';
import bg2 from '../assets/images/bg1.jpg';
import bg3 from '../assets/images/bg4.jpg';

export const products = {
    main_meal: [
        {   
            id: 1,
            name: 'jollof rice',
            label: 'per plate',
            price: 300,
            image: require('../assets/images/15.jpg'),
        },
        {
            id: 2,
            name: 'fried rice',
            label: 'per plate',
            price: 350,
            image: require('../assets/images/17.jpg'),
        },
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
        {
            id: 5,
            name: 'egusi riro',
            label: 'per plate',
            price: 200,
            image: require('../assets/images/16.jpg'),
        },
        {
            id: 6,
            name: 'plantain',
            label: 'per 3 pieces',
            price: 100,
            image: require('../assets/images/13.jpg'),
        },
        {
            id: 7,
            name: 'beef',
            label: 'per plate',
            price: 300,
            image: require('../assets/images/12.jpg'),
        },{
            id: 8,
            name: 'chicken',
            label: 'per plate',
            price: 600,
            image: require('../assets/images/11.jpg'),
        },
        {
            id: 9,
            name: 'grilled fish',
            label: 'per plate',
            price: 2000,
            image: require('../assets/images/9.jpg'),
        },
        {
            id: 10,
            name: 'asun',
            label: 'per plate',
            price: 800,
            image: require('../assets/images/7.jpg'),
        },
        {
            id: 11,
            name: 'pepper soup',
            label: 'per plate',
            price: 2000,
            image: require('../assets/images/10.jpg'),
        },
        {
            id: 12,
            name: 'chicken & chips',
            label: 'per plate',
            price: 1500,
            image: require('../assets/images/6.jpg'),
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
    desserts: [
        {
            id: 9,
            name: 'onion soup',
            label: 'with toasted bread',
            price: 2500,
            image: bg1,
        },
        {
            id: 10,
            name: 'asun',
            label: 'with sauce',
            price: 1500,
            image: bg2,
        },
        {
            id: 11,
            name: 'amala',
            label: 'with gbegiri soup',
            price: 1700,
            image: bg3,
        },
        {
            id: 12,
            name: 'jollof rice',
            label: 'with chicken and plantain',
            price: 2700,
            image: bg1,
        }
    ]
}