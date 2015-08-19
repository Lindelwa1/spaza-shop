var fs = require("fs"); 

var leastPopularCategory = require('./categoryCalculations');

var findleastPopularCategory = function ( fileName) {

    var categoryMap = new leastPopularCategory.getSalesPerCatergory(fileName);

    //var expectedSalesPerCategory = {};
    var min = 328;
    var leastCat ={};
  

    for(var prop in categoryMap){
        var value = categoryMap[prop];
            if(min > categoryMap[prop]){
                min = categoryMap[prop];
                 leastCat = {
                    name: prop,
                    amt: min
                    
                };
            };
    };

  
    //console.log(mostPopularProducts);
    return leastCat;

};
           
  exports.getleastCat = function(fileName){
        var Product = findleastPopularCategory(fileName);
        return Product;
    };