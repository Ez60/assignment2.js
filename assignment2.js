// FOR EACH //
Array.prototype.myEach = function(callback) {
   for (let i = 0; i < this.length; i++)
   {
       callback(this[i], i, this);
   }
};

// MAP //
Array.prototype.myMap = function(callback) {
   let mapArray = [];
   for (let i = 0; i < this.length; i++)
   {
      mapArray.push(callback(this[i]));
   }
};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};