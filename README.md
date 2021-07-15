# One Quote App

## Description

The One Quote App is a fun application created by Pachel Pederson in July 2021 where users can browse characteers. 
Using The One API our application allows users to learn  about over 933 Lord of the Rings and Hobbit Franchises.

## Planning
[Models]
[Routes]

## Back-end Dependencies:
- Sequelize
- Sequlize CLI
- PG
- Body-Parser
- CORS
- Express
- ReactPlayer
    

## Technology Used

    - React / ReactRouter
    - Java Script / CSS
    - Axios
    - TheCocktailDB API

## Screenshots

Profile Page
<img src="https://raw.githubusercontent.com/davidglic/project3-frontend/main/screenshots/screen-profile.png" style="width: 800px;"/>

Search Page
<img src="https://raw.githubusercontent.com/davidglic/project3-frontend/main/screenshots/screen-search.png" style="width: 800px;"/>

Drink Page
<img src="https://raw.githubusercontent.com/davidglic/project3-frontend/main/screenshots/screen-drink.png" style="width: 800px;"/>

## Components

    - Drink: displays large cocktail image and recipe.
    - DrinkStream: displays search results, pulled from App state, as a flex list small images and drink names.
    - Header: displays navigation and login form.
    - Landing: displays front landing page with a sample search result.
    - Profile: displays favorite list and user profile data with edit/delete options.
    - Search: displays search dialogue with multiple options and a DrinkStream with results.
    - Signup: displays sign up form.

## Install

To install:
Download all components and run npm install. 
Download and install backend API: <a href="https://github.com/davidglic/project3-backend">here</a>.
Create a 'resources' folder in the ./src directory, and create a keys.js file with the following code:
```
//external API key here. 
//this folder is in .gitignore for security.

const apiKey = 1;

export default apiKey
```


