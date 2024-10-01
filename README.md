# Welcome to the Gotta fetch() 'Em All / Pokemon Battle Game Project Repository!

Embark on an exciting journey into the world of Pokémon with the Gotta fetch() 'Em All project! Powered by the robust PokéApi, this project lets you explore various locations, encounter diverse Pokémon, and engage in thrilling battles—all from the comfort of your browser.

Whether you're a seasoned Pokémon Trainer or new to the Pokémon world, this project offers a fun and interactive experience for everyone.

Developed by:
* [![mooradam][mooradam]][mooradam-url]
* [![keszegroland][keszegroland]][keszegroland-url]

## Table of Contents
- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Learnings](#learnings)

## Overview
This project aims to create a frontend-based Pokémon web application where users can:
  - Explore diverse Pokémon habitats.
  - Encounter various Pokémon species.
  - Engage in dynamic Pokémon battles.

## Technologies
Technologies used in this application:
* [![JavaScript][JavaScript]][JavaScript-url]
* [![React][React.js]][React-url]
* [![PokéAPI][PokéAPI]][PokéAPI-url]
* [![CSS3][CSS3]][CSS3-url]

## Installation
To set up the project locally:
  1. Clone the repository from GitHub:
  ```bash
  git clone git@github.com:CodecoolGlobal/gotta-fetch-em-all-react-MoorAdam.git
  ```

  2. Navigate to the project directory:
  ```bash
  cd pokemon-game
  ```

  3. Install dependencies:
  ```bash
  npm install
  ```

## Usage
To run the project:
  1. Start the development server:
  ```bash
  npm start
  ```

  2. The server should automatically open the application in your browser. If not, navigate to [http://localhost:3000/](http://localhost:3000/) to view the application.

## Features
  - Location Exploration:
    - Detail: Navigate through up to 20 distinct locations, each with its own ecosystem and Pokémon species.
    - Visual: ![LocationImage](.//MediaFilesForReadme/LocationsImage.png)

  - Pokémon Encounters: 
    - Detail: Click on a location to meet a random Pokémon native to that area. Pokémon are displayed with their names, health and sprites.
    - Visual: ![PokemonInventoryImage](.//MediaFilesForReadme/PokemonInventoryImage.png)

  - Battle System: 
    - Detail: Engage in battles with wild Pokémon. The system is designed for dynamic, turn-based combat until one Pokémon's HP reaches zero.
    - Visual: ![Battle](.//MediaFilesForReadme/Battle.gif)

  - Capture Mechanism:
    - Detail: Successfully defeat wild Pokémon to capture them and add them to your collection. If your Pokémon's HP drops to zero, the encounter ends.
    - Visuals: ![Winning](.//MediaFilesForReadme/Winning.gif) ![Losing](.//MediaFilesForReadme/Losing.gif)

  - Repeat and Discover:
    - Detail: After each encounter, revisit locations to continue discovering new Pokémon and experiences.

## Learnings
Key learnings from this project include:
  - Handling API requests and responses using the Fetch API.
  - Implementing a simple, automatic battle system.
  - Structuring a React application with reusable components.
  - Designing a responsive web interface using vanilla CSS.


[JavaScript]: https://img.shields.io/badge/JavaScript-4B4B4B?style=for-the-badge&logo=javascript&logoColor=yellow
[JavaScript-url]: https://www.javascript.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[PokéAPI]: https://img.shields.io/badge/PokeAPI-FFCB05?style=for-the-badge&logo=pokemon&logoColor=black
[PokéAPI-url]: https://pokeapi.co/
[CSS3]: https://img.shields.io/badge/CSS3-blue?style=for-the-badge
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[keszegroland]: https://img.shields.io/badge/Roland%20Keszeg-181717?style=for-the-badge&logo=github&logoColor=white
[keszegroland-url]: https://github.com/keszegroland
[mooradam]: https://img.shields.io/badge/%C3%81d%C3%A1m%20Mo%C3%B3r-181717?style=for-the-badge&logo=github&logoColor=white
[mooradam-url]: https://github.com/MoorAdam