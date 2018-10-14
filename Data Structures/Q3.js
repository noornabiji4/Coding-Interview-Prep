function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Othis.push = function(val){
      this.push = function(val){
        return collection.push(val);
    }
    this.pop = function(){
        return collection.pop();
    }
    this.peek = function(){
        return collection[collection.length-1];
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
    this.clear = function(){
        collection.length = 0;
    }
    // Only change code above this line
}