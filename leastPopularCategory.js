var fs = require("fs"); 

var leastPopularCategory = require('./categoryCalculations');

var findleastPopularCategory = function ( fileName) {

    var categoryMap = leastPopularCategory.getSalesPerCatergory(fileName);

    //var expectedSalesPerCategory = {};
    var min = 328;

    for(var prop in categoryMap){
        var value = categoryMap[prop];
            if(min > categoryMap[prop]){
                min = categoryMap[prop];
                leastPopularCategory = {
                    name: prop,
                    amt: min
                    
                };
            };
    };

  
    //console.log(mostPopularProducts);
    return leastPopularCategory;

};
           
  exports.getleastCat = function(fileName){
        var leastCategory = findleastPopularCategory(fileName);
        return leastPopularCategory;
    };