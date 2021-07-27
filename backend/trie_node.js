function Node(){
  this.isword = false;
  this.children = [];
  for(var i = 0; i < 26; i++)
  {
    this.children.push(null);
  }
  this.check_isword = function(){
    return this.isword;
  };
  this.on_isword = function(){
    this.isword = true;
  };
  this.set_child = function(index){
    if(index < 26 && this.children[index] == null){
      this.children[index] = new Node();
    }
  };
}

module.exports.Node = Node;