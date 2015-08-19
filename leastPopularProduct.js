var fs = require("fs"); 

var leastPopularProduct = require('./productsSold');

var findleastPopularProduct = function ( fileName){
	var categoryMap = new leastPopularProduct.findProductsSold(fileName);
       // console.log("=====>" ,findleastPopularProduct);


	  	var min = 172;
        var leastPopular = {};

            for(var prop in categoryMap){
                var value = categoryMap[prop];
                    if(categoryMap[prop] < min){
                       min = categoryMap[prop];
                        leastPopular = {
                            productName: prop,
                            amt: min

                        };
                    };
        };
        	 //console.log(leastPopularProduct);
    		 return leastPopular;   
};


       

	 exports.getleastPopular = function(fileName){
        var Product = findleastPopularProduct(fileName);
        return Product;
    };

