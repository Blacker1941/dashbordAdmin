let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

const newMembers = [
    {
        id: 1,
        username: 'parsa Farivash',
        title: 'Web Developer',
        img:'./images/Blacker.jpg'
    },
    {
        id: 2,
        username: 'pidar pidarzade',
        title: 'Seo Eng',
        img:'./images/blank-avatar-1-450x450.png'
    },
    {
        id: 3,
        username: 'mr white',
        title: 'Weblog',
        img:'./images/mr white.webp'
    },
    {
        id: 4,
        username: 'kevin David Mitcick',
        title: 'Hacker',
        img:'./images/kevin-mitnicks-quotes-7.jpg'
    },
    {
        id: 5,
        username: 'Carl Jahnson',
        title: 'businessman',
        img:'./images/CJ-GTASA.webp'
    },
]
const transactions = [
    {
        id: 1,
        customer: 'Carl Jahnson',
        date: '1 may 2933',
        amount: 1933.9,
        status: 'Declined',
        img: './images/CJ-GTASA.webp'
    },
    {
        id: 2,
        customer: 'Carl Jahnson',
        date: '1 sep 2939',
        amount: 1939.9,
        status: 'Pending',
        img: './images/CJ-GTASA.webp'
    },
    {
        id: 3,
        customer: 'Carl Jahnson',
        date: '2 sep 2945',
        amount: 1945.9,
        status: 'Approved',
        img: './images/CJ-GTASA.webp'
    },
]
let userRows = [
    {
        id: 1,
        username: 'Michael Corleone',
        avatar: './images/Michaelcoreleone.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'Michaelcoreleone@gmail.com'
    },
    {
        id: 2,
        username: 'Shir Farhad',
        avatar: './images/images_32.jpeg.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'shirFarhad@gmail.com'
    },
    {
        id: 3,
        username: 'Jesse Pinkman',
        avatar: './images/Jesse_Pinkman_S5B.png',
        status: 'active',
        transaction: '$98',
        email: 'Pinkman@gmail.com'
    },
    {
        id: 4,
        username: 'Rick Sanchez',
        avatar: './images/Rick_Sanchez.1.jpg',
        status: 'active',
        transaction: '$0',
        email: 'rick.sanchez@gmail.com'
    },
    {
        id: 5,
        username: 'Tony Soprano',
        avatar: './images/Tony_Soprano_2.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'Tony@gmail.com'
    }
]
let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: './images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: './images/acer.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: './images/hp.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: './images/dell.jpg',
        price: 890
    },
]
const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export { xAxisData, newMembers, transactions, userRows, products, productsData }