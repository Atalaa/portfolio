import bttfsvg from '../media/bttf.svg';
import dice from '../media/dice.svg';
import shopify from '../media/shopify.svg';
import emoji from '../media/emoji.svg';
import resto from '../media/resto.svg';
import checklists from '../media/checklists.svg';

const portfolioData = [
  {
    id: 1,
    name: 'To-do list',
    languages: ['all','javascript','react','sass'],
    languagesIcons: ['fab fa-js-square','fab fa-react','fab fa-sass'],
    source: 'https://github.com/Atalaa/to-do-list',
    demo: 'https://atalaa.github.io/to-do-list/',
    info: 'A simple to-do list built with React, Sass.',
    picture: checklists
  },
  {
    id: 2,
    name: 'Back to the Future',
    languages: ['all','javascript','react','sass'],
    languagesIcons: ['fab fa-js-square','fab fa-react','fab fa-sass'],
    source: 'https://github.com/Atalaa/Back-to-the-Future',
    demo: 'https://atalaa.github.io/Back-to-the-Future/',
    info: 'Back to the Future is a project that pays homage to this masterpiece. It gathers information about the film like the soundtrack, what the actors thought and even a memory game. The concepts learned in this project are how to use React components, connect them to each other, and style them.',
    picture: bttfsvg
  },
  {
    id: 3,
    name: 'Pig Dice Game',
    languages: ['all','javascript','css'],
    languagesIcons: ['fab fa-js-square','fab fa-css3-alt'],
    source: 'https://github.com/Atalaa/Pig-Dice-Game',
    demo: 'https://atalaa.github.io/Pig-Dice-Game/',
    info: "Pig Dice is a simple dice game that can be played with two players of almost any age. It's a good math and probability activity. It's simple to learn and play. The concepts learned in this project are vanilla Javascript and jQuery.",
    picture: dice
  },
  {
    id: 4,
    name: 'Shopify iOS App',
    languages: ['all','swift'],
    languagesIcons: ['fab fa-swift'],
    source: 'https://github.com/Atalaa/Shopify-Challenge-Summer-2019',
    info: 'This project is part of a challenge that Shopify has created for its internship applications. The goal was to create an iOS mobile application that merchants could use in a fictional scenario. The concepts learned in this project are how to use the object oriented programming language Swift.',
    picture: shopify
  
  },
  {
    id: 5,
    name: 'Emojionary',
    languages: ['all','javascript','react','css'],
    languagesIcons: ['fab fa-js-square','fab fa-react','fab fa-css3-alt'],
    source: 'https://github.com/Atalaa/Emojionary',
    demo: 'https://atalaa.github.io/Emojionary/',
    info: 'Emojionary is a dictionary for emojis, in the sense that it defines them. This project is simple and taught me how to work with the map function and props.',
    picture: emoji
  },
  {
    id: 6,
    name: 'Restaurant Finder',
    languages: ['all','javascript','react','css'],
    languagesIcons: ['fab fa-js-square','fab fa-react', 'fab fa-css3-alt'],
    source: 'https://github.com/Atalaa/deliver-it',
    demo: 'https://atalaa.github.io/deliver-it/',
    info: 'Coming Soon...',
    picture: resto
  }
];

export default portfolioData;