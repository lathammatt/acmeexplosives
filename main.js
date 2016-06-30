"use strict";

$(document).ready(function(){

	$("#menu").click(function(){
		if ($("#menu").val === 1){
			firstAjax();
		} else {
			// run rockets build
		}
	});

	function buildDom (object, num){
		var main = $("<div></div>").addClass("main");
		$("#output").append(main);
		main.append(object.categories[num].name);
	}

	var categs;
	var types;
	var prods;


	var firstAjax = function (){
		return new Promise((resolve, reject) => {
			$.ajax({
				url:"categories.json"
			}).done(function(data){
				resolve(data);
			}).fail(function(xhr, status, error) {
	      reject(error);
	    	});
		});
	};

	var secondAjax = function (){
		return new Promise((resolve, reject) => {
			$.ajax({
				url:"dynamite.json"
			}).done(function(data){
				resolve(data);
			}).fail(function(xhr, status, error) {
	      reject(error);
	    	});
		});
	};

	var thirdAjax = function (){
		return new Promise((resolve, reject) => {
			$.ajax({
				url:"products.json"
			}).done(function(data){
				resolve(data);
			}).fail(function(xhr, status, error) {
	      reject(error);
	    	});
		});
	};

	firstAjax()
		.then(function(data) {
			categs = data;
			console.log("categs", categs);
		    return secondAjax(data);
		  })
		  .then(function(data2) {
		  	types = data2;
		  	console.log("types", types);
		    return thirdAjax(data2);
		  }).then(function(data3){
		  	prods = data3;
		  	console.log("prods", prods);
		  });


});