var assert = require("assert");



describe("Find data in file", function(){
	var ProductList = require("../productList");


    it('should return a unique list of product in the file synchronously', function(){

        
        var productLines = ProductList.linesInFiles('./files/Nelisa Sales History.csv');
        assert.deepEqual(productLines, ["Milk 1l","Imasi","Bread","Chakalaka Can","Gold Dish Vegetable Curry Can","Fanta 500ml","Coke 500ml","Cream Soda 500ml","Iwisa Pap 5kg","Top Class Soy Mince","Shampoo 1 litre","Soap Bar","Bananas - loose","Apples - loose","Mixed Sweets 5s","Heart Chocolates","Rose (plastic)","Valentine Cards"]);

	});


     
    it("it should return the number of items sold", function(){
        var ProductsSold = require("../productsSold");

        var productNames = ProductsSold.productsSold("./files/Nelisa Sales History.csv");
        var itemsMap =  {'Milk 1l':142, 'Imasi':125, 'Bread':130, 'Chakalaka Can':94, 'Gold Dish Vegetable Curry Can':86, 'Fanta 500ml':94, 'Coke 500ml':159, 'Cream Soda 500ml':75, 'Iwisa Pap 5kg':47, 'Top Class Soy Mince':98, 'Shampoo 1 litre':26, 'Soap Bar':50, 'Bananas - loose': 114, 'Apples - loose':114, 'Mixed Sweets 5s':172, 'Heart Chocolates':20, 'Rose (plastic)': 14, 'Valentine Cards':14};
        assert.deepEqual(itemsMap,productNames);  
		

    });

     it('should return the most popular products', function(){
             var mostPopularproduct = require('../mostPopularProducts');

              var  mostpopular = mostPopularproduct.popularProduct("./files/Nelisa Sales History.csv");
              var resultsMap = {name:'Mixed Sweets 5s', amt:172};
              //console.log(resultsMap);
              assert.deepEqual(resultsMap,mostpopular);

});

      it("it should return category name", function(){
        //assemble
        var categoryCalculations = require('../categoryCalculations');

        var salesPerCategory = categoryCalculations.getSalesPerCatergory('./files/Nelisa Sales History.csv');

        var expectedSalesPerCategory = {'Fruits': 228, 'Candies': 192, 'Soft Drinks':328, 'Dairy':267, 'Starch':275,'Toiletries':76,'Tin Food':180,'Gifts':28};
      // console.log(expectedSalesPerCategory)
        assert.deepEqual(salesPerCategory,expectedSalesPerCategory);  

    });

  
      

     it("it should return category total", function(){
    //     //assemble
        var mostProfitableCategory = require('../mostProfitableCategory');

        var profitableTotal = mostProfitableCategory.getTotalCatergory('./files/Nelisa Sales History.csv');

        var expectedTotal=  {productName:'Soft Drinks',amt:328,};
          // act
           assert.deepEqual(profitableTotal, expectedTotal);  

     });
     
    it("it should return return least popular product and the total number sold in the month", function(){

         var leastPopularProduct = require('../leastPopularProduct');

         var leastPopular = leastPopularProduct.getleastPopular('./files/Nelisa Sales History.csv');

         var leastMap = {productName:'Valentine Cards' &&  'Rose (plastic)',amt:14 };
      
         assert.deepEqual(leastMap,leastPopular);  

    });


     it("it should return least popular category and the total number sold in the month", function(){
    //     //assemble
        var leastPopularCategory = require('../leastPopularCategory');

        var leastCategory = leastPopularCategory.getleastCat('./files/Nelisa Sales History.csv');

        var leastCatMap = {name:'Gifts',amt :28,};
          console.log('......'+popularProduct)
           assert.deepEqual(leastCatMap,leastCategory );  

     });

});



    
