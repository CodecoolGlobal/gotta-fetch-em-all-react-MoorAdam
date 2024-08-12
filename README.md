# Welcome to the Gotta fetch() 'Em All / Pokemon Battle Game Project Repository!

Embark on an exciting journey into the world of Pokémon with the Gotta fetch() 'Em All project! Powered by the robust PokéApi, this project lets you explore various locations, encounter diverse Pokémon, and engage in thrilling battles—all from the comfort of your browser.

Whether you're a seasoned Pokémon Trainer or new to the Pokémon world, this project offers a fun and interactive experience for everyone.

Developed by:
- [Ádám Moór](https://github.com/MoorAdam)
- [Roland Keszeg](https://github.com/keszegroland)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Learnings](#learnings)
- [Technologies](#technologies)

## Overview
This project aims to create a frontend-based Pokémon web application where users can:
  - Explore diverse Pokémon habitats.
  - Encounter various Pokémon species.
  - Engage in dynamic Pokémon battles.

## Features
  - Location Exploration:
    - Detail: Navigate through up to 20 distinct locations, each with its own ecosystem and Pokémon species.
    - Visual: ![LocationImage](.//ImagesReadme/LocationsImage.png)

  - Pokémon Encounters: 
    - Detail: Click on a location to meet a random Pokémon native to that area. Pokémon are displayed with their names, health and sprites.
    - Visual: ![PokemonInventoryImage](.//ImagesReadme/PokemonInventoryImage.png)

  - Battle System: 
    - Detail: Engage in battles with wild Pokémon. The system is designed for dynamic, turn-based combat until one Pokémon's HP reaches zero.
    - Visual: ![BattleImage](.//ImagesReadme/BattleImage.png)

  - Capture Mechanism:
    - Detail: Successfully defeat wild Pokémon to capture them and add them to your collection. If your Pokémon's HP drops to zero, the encounter ends.
    - Visuals: ![WinningImage](.//ImagesReadme/WinningImage.png) ![LosingImage](.//ImagesReadme/LosingImage.png)

  - Repeat and Discover:
    - Detail: After each encounter, revisit locations to continue discovering new Pokémon and experiences.


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

## Learnings
Key learnings from this project include:
  - Handling API requests and responses using the Fetch API.
  - Implementing a simple, automatic battle system.
  - Structuring a React application with reusable components.
  - Designing a responsive web interface using vanilla CSS.

## Technologies
Technologies used in this application:
  - JavaScript: For application logic.
  - React: Front-end framework for building the user interface.
  - Fetch API: For making asynchronous HTTP requests to the PokéApi.
  - Vanilla CSS: For creating a responsive and visually appealing user experience.