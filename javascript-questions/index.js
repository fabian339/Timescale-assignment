const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  let marvelCharacters = heroes.filter(heroe => heroe.publisher.includes("Marvel"));
  return marvelCharacters;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  let characters = [];
  heroes.forEach(heroe => {
    // let temp = [heroe.characters]
    let obj = {
      ...heroe,
      characters: [heroe.characters]
    }
    characters.push(obj)
  });
  return characters;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let data = {
    "DC Comics": [],
    "Marvel Comics": []
  };
  heroes.forEach(heroe => {
    let temp = heroe.publisher;
    data[temp].push(heroe)
  });
  return data;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  let multiCharacters = heroes.filter(heroe => heroe.publisher.includes("DC Comics") && heroe.characters.split(",").length > 1);
  return multiCharacters;
}

// console.log(getDCHeroes(superHeroes).length)
// console.log(convertCharactersToArray(superHeroes))
// console.log(groupByPublisher(superHeroes))
// console.log(getDCHeroesWithMoreThanOneCharacter(superHeroes))

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher
}
