'use strict';

describe('Level1', function() {
	describe('Arrays', function(){
		it('adds and element to the array', function() {
			var array = ["Blake","Steven","Avi"];
  		// add an element to the array
  		array.push("Joe");
  		expect(array.length).toEqual(4);
  	});

		it("prints each element in the array", function(){
			var array = ["Blake","Steven","Avi"];
			spyOn(console, 'log');

			array.forEach(function(item){console.log(item);});
			// iterate over each element in the array and log it out
			expect(console.log).toHaveBeenCalledWith("Blake");
			expect(console.log).toHaveBeenCalledWith("Steven");
			expect(console.log).toHaveBeenCalledWith("Avi");
		});

		it("returns first element of the array", function(){
			var array = ["Blake","Steven","Avi"];
			var element_0 = array[0];
			expect(element_0).toEqual("Blake");
		});

		it("returns the user at an index", function(){
			var array = ["Blake","Steven","Avi"];
			var avi_index = array.indexOf("Avi");
			expect(avi_index).toEqual(2);
		});
	});
});