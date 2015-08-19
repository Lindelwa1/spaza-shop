var fs = require("fs"); 

var leastPopularProduct = require('./productsSold');

var findleastPopularProduct = function ( fileName){
	var categoryMap = leastPopularProduct.findProductsSold(fileName);
       // console.log("=====>" ,findleastPopularProduct);


	  	var min = 172;

            for(var prop in categoryMap){
                var value = categoryMap[prop];
                    if(categoryMap[prop] < min){
                       min = categoryMap[prop];
                        leastPopularProduct = {
                            productName: prop,
                            amt: min

                        };
                    };
        };
        	 //console.log(leastPopularProduct);
    		 return leastPopularProduct;   
};


       

	 exports.getleastPopular = function(fileName){
        var Product = findleastPopularProduct(fileName);
        return leastPopularProduct;
    };

