const {Node} = require('./trie_node');

function Trie(){
  this.root = new Node();
  
  this.get_index = function(ch){
    return ch.charCodeAt(0) - "a".charCodeAt(0);
  };
  
  this.insert = function(word){
    var curr_root = this.root;
    for(var i = 0; i < word.length; i++)
    {
      curr_root.set_child(this.get_index(word[i]));
      curr_root = curr_root.children[this.get_index(word[i])];
    }
    curr_root.on_isword();
  };
  
  this.search = function(word){
    var curr_root = this.root;
    for(var i = 0; i < word.length; i++)
    {
      if(curr_root.children[this.get_index(word[i])] !== null)
      curr_root = curr_root.children[this.get_index(word[i])];
      else return false;
    }
    return curr_root.check_isword();
  };
  
  this.find_words = function(root, word, res){
    if(!root)
     return;
   for(var i = 0; i < 26; i++)
   {
     if(root.children[i])
    return  String.fromCharCode(65+i) + this.find_words(root.children[i], word);
   }
   return;
  };
  
  this.suggest = function(word){
    var curr_root = this.root;
    const a = [];
    for(var i = 0; i < word.length; i++)
    { 
      if(curr_root.children[this.get_index(word[i])])
        curr_root = curr_root.children[this.get_index(word[i])];
      else break;
    }
    if(curr_root.check_isword() === true)
      return [word];
    else
    {
      return this.find_words(curr_root, word);
    }
  };
};

const v = new Trie();
v.insert("hello");
v.insert("he");
console.log(v.suggest("hel"));