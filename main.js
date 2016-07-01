"use strict";

	var categs;
	var types;
	var prods;
	// var result = [];

$(document).ready(function(){

	$("#menu").change(function(){
		var selection = $("#menu option:selected").val();
		if (selection === "1"){
			$("#output").empty();
			console.log("1", selection);
			buildDom(0);
		} else if (selection === "2"){
			$("#output").empty();
			console.log("2", selection);
			buildDom(1);
		} else {
			$("#output").empty();
		}
	});

	function buildDom (num){
		var main = $("<div></div>").addClass("main h1");
		$("#output").append(main);
		main.append(categs.categories[num].name);
		for (var i = 0; i < types.types.length; i++) {
			if (types.types[i].category === num){
				console.log("types", types.types[i].name, i);
				var ty = $("<div></div>").addClass("type h3");
				main.append(ty);
				ty.append("Type: " + types.types[i].name);

				for (var j = 0; j < prods.products.length; j++) {
					var currentThing = prods.products[j];
					console.log("thing", currentThing);
					for (var currentKey in currentThing) {
						console.log("key", currentKey);
						var innerProduct = currentThing[currentKey];

					if (innerProduct.type === i){
						var pro = $("<div></div>").addClass("prods h4");
						ty.append(pro);
						pro.append(innerProduct.name);
						var desc = $("<div></div>").addClass("desc small");
						pro.append(desc);
						desc.append(innerProduct.description);
						}	
					}
				}
			}		
		}
	}




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
		    return secondAjax();
		  })
		.then(function(data2) {
		  	types = data2;
		  	console.log("types", types);
		    return thirdAjax();
		  })
		.then(function(data3){
		  	prods = data3;
		  	console.log("prods", prods);
		  	// buildDom(num)
		});



});