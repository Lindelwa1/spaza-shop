var express = require('express');
var exphbs  = require('express-handlebars');

var product = require('./productList');
var productSold = require('./productsSold');
var mostPop = require('./mostPopularProducts');
var catCaculation = require('./categoryCalculations');
var mostProfCat = require('./mostProfitableCategory');
var leastPopProd = require('./leastPopularProduct');

 
var app = express();
var fs =require('fs');
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/product', function(req,res){
	var prodMap = product.findFiles('./files/Nelisa Sales History.csv');
	//console.log(prodMap);
	res.render('productList', {product: prodMap})
});

app.get('/product/sold', function (req,res){
	var prodSoldMap = productSold.findProductsSold('./files/Nelisa Sales History.csv'); //

	res.render('productsSold', {product: prodSoldMap}) //to evaluate the handlerbar template
});


app.get('/mostPopular', function (req, res){
	var mostPopMap = mostPop.popularProduct('./files/Nelisa Sales History.csv'); //
	//console.log('............Pop' + popularProduct);
	res.render('mostPopularProduct', {product: mostPopMap}) //to evaluate the handlerbar template
});


app.get('/categories', function (req, res){
	var CatCalcuMap = catCaculation.getSalesPerCatergory('./files/Nelisa Sales History.csv'); //
	//console.log('............Pop' + popularProduct);
	res.render('categoryCalculation', {product: CatCalcuMap}) //to evaluate the handlerbar template
});

app.get('/mostProfiCat', function (req, res){
	var mostPopCatMap = mostProfCat.getTotalCatergory('./files/Nelisa Sales History.csv'); //
	//console.log('............Pop' + popularProduct);
	res.render('mostProfitableCategories', {product: mostPopCatMap}) //to evaluate the handlerbar template
});

app.get('/leastPopularProd', function (req, res){
	var leastPopularCatMap = leastPopProd.getleastPopular('./files/Nelisa Sales History.csv'); //
	//console.log('............Pop' + popularProduct);
	res.render('leastPopularProducts', {product: leastPopularCatMap}) //to evaluate the handlerbar template
});


 app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3002);