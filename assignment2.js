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
Array.prototype.myFilter = function(callback) {
   let filterArray = [];
   for (let i = 0; i < this.length; i++)
   {
      if (callback(this[i]))
      {
         filterArray.push(this[i]);
      }
   }
   return filterArray;
};

// SOME //
Array.prototype.mySome = function(callback) {
   for (let i = 0; i < this.length; i++)
   {
       if (callback(this[i], i, this))
       {
          return true;
       }
   }
   return false;
};

// EVERY //
Array.prototype.myEvery = function(callback) {
   for (let i = 0; i < this.length; i++)
   {
      if (!callback(this[i], i, this))
      {
         return false;
      }
   }
   return true;
};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function(target, n = 0) {
   if (n >= this.length)
   {
       return false;
   }
   for (let i = n; i < this.length; i++)
   {
      if (this[i] === target)
      {
          return true;
      }
   }
   return false;
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