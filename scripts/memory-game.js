const cardArray = [
    {
        name: "family",
        img: 'img/about-us/family-learning.png'
    },
    {
        name: "sun",
        img: 'img/about-us/sun.svg'
    },
    {
        name: "fries",
        img: 'img/about-us/family-learning.png'
    },
    {
        name: "fries",
        img: 'img/about-us/family-learning.png'
    },

    {
        name: "fries",
        img: 'img/about-us/family-learning.png'
    },
    {
        name: "family",
        img: 'img/about-us/family-learning.png'
    },
    {
        name: "sun",
        img: 'img/about-us/sun.svg'
    },
    {
        name: "fries",
        img: 'img/about-us/family-learning.png'
    },
    {
        name: "fries",
        img: 'img/about-us/family-learning.png'
    },

    {
        name: "fries",
        img: 'img/about-us/family-learning.png'
    }
]

console.log(cardArray)
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector("#grid");

functon createBoard() {
    for (let i = 0, i < 10, i++) {
        const card = document.createElement('img')
    }
}