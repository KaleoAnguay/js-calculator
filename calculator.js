/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 var calculatorModule = (function(){

  //private
  var memory = 0;
  var total = 0;
  var calculator = {};

    calculator.load = function(x) {
      total = x;

      if(typeof x !== "number"){
    throw new Error("Wrong Data type!!");
   }
   return total;

};


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  calculator.getTotal = function(x) {
      return total;
};



  /**
   * Return the value of `total`
   * @return { Number }
   */

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  calculator.add = function(x){
      total+=x;
        if(typeof x !== "number"){
    throw new Error("Wrong Data type!!");
   }
   return total;
};

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
      calculator.subtract = function(x) {
    total-=x;
      if(typeof x !== "number"){
    throw new Error("Wrong Data type!!");
   }
   return total;
};

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   calculator.multiply = function(x) {
    total*=x;
      if(typeof x !== "number"){
    throw new Error("Wrong Data type!!");
   }
   return total;
};

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   calculator.divide = function(x) {
    total/=x;
      if(typeof x !== "number"){
    throw new Error("Wrong Data type!!");
    }
    return total;
   };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   calculator.recallMemory = function(){
    return memory;
   };


  /**
   * Stores the value of `total` to `memory`
   */
   calculator.saveMemory = function(){
    memory = total;
    return memory;
   };

  /**
   * Clear the value stored at `memory`
   */
   calculator.clearMemory = function(){
    memory = 0;
   };

  /**
   * Validation
   */




return calculator;
});