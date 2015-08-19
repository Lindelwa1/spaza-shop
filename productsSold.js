var fs = require("fs"); 


exports.findProductsSold = function (fileName) {
         var productNames= [];
         var productsMap = {};
         var quantitySold = [];
         // body...

         var fileContent = fs.readFileSync(fileName, "utf8");
         var products = fileContent.split("\r");
         
         // remove the first line from the list
         products = products.splice(1);

         products.forEach( function (product) {
          
             var productColumns = product.split(";");
             var productName = productColumns[2];
             var quantity = Number(productColumns[3]);

             if (productsMap[productName] === undefined ) {
                 quantitySold.push(productName);
                 productsMap[productName] = 0;   
             }

             productsMap[productName] += quantity;
             

         });
         
      
         //console.log(productMap);
         //console.log(productsMap);
         return productsMap;
     };

  /*exports.linesInFiles = function(fileName){
   var productList = findFiles(fileName);
   return productList;
    };*/
