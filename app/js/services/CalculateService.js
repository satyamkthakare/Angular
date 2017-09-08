'use strict'

eventsApp.factory("calculate", function () {
   return {
      calculationProcess : function (a, b) {
          // if(!input1 && !input2){
          //     return input1, input2;
          // }

          var num1= Number(a || 0);
          var num2= Number(b || 0);

          var result = num1 + num2;
          return result;
      } 
   } ;
});