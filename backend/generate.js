const {Trie} = require("./trie");
const {data} = require("./gen");




// console.log(spell.suggest("adv"))

  spell = new Trie();

  data.forEach(ele => {
    spell.insert(ele);
  });


module.exports.spell = spell;