"use strict";

$(document).ready(function(){

	$("#menu").click(function(){
		if ($("#menu").val === 1){
				// run dynamite build
		} else {
			// run rockets build
		}
	});

	function buildDom (){
		$("output").
	}




	var categs = function (){
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

	var types = function (){
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

	var products = function (){
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




});