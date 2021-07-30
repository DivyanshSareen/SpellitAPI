const {Trie} = require("./trie");
const {data} = require("./gen");

  spell = new Trie();

  data.forEach(ele => {
    spell.insert(ele);
  });


module.exports.spell = spell;