"use strict";

	var categs;
	var types;
	var prods;
	var result = [];

$(document).ready(function(){

	$("#menu").change(function(){
		var selection = $("#menu option:selected").val();
		if (selection === "1"){
			$("#output").empty();
			console.log("1", selection);
			// firstAjax();
			buildDom(0);
		} else if (selection === "2"){
			$("#output").empty();
			console.log("2", selection);
			// firstAjax();
			buildDom(1);
		} else {}
	});

	function buildDom (num){
		var main = $("<div></div>").addClass("main");
		$("#output").append(main);
		main.append(categs.categories[num].name);
			// console.log("check", types.types.length);
		for (var i = 0; i < types.types.length; i++) {
			// console.log("types", types[i]);
			if (types.types[i].category === num){
				var ty = $("<div></div>").addClass("type");
				main.append(ty);
				ty.append(types.types[i].name);
				for (var j = 0; j < prods.products.length; j++) {
					var currentThing = prods.products[j];
					for (var currentKey in currentThing) {
						var innerProduct = currentThing[currentKey];
						for (var allIn in innerProduct)
						console.log("what", innerProduct[allIn], j, i);
						console.log("huh", currentKey);

					if (innerProduct.type === i){
						var pro = $("<div></div>").addClass("prods");
						ty.append(pro);
						pro.append(innerProduct.name);
						var desc = 	$("<div></div>").addClass("desc");
						desc.append(pro);
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