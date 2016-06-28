"use strict";

$(document).ready(function(){

	$("#menu").click(function(){
		if ($("#menu").val === 1){

		}
	});





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






});