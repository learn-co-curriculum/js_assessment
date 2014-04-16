'use strict';

describe('Level2', function() {
	describe('Objects', function(){
		it("adds a new key", function(){
			var instructor = { name: "Steven", age: 30 };
       // Add a property location with a value of "NYC" to instructor
       expect(instructor.location).toEqual("NYC");
     });

		it("prints out all the key value pairs in the hash", function(){
			var instructor = { name: "Steven", age: 30 };
			spyOn(console, 'log');

      // Iterate over the hash and print each key value pair. 
      // Print using string interpolation to match the expectations.			
      expect(console.log).toHaveBeenCalledWith("Key is name. Value is Steven");
      expect(console.log).toHaveBeenCalledWith("Key is age. Value is 30");
    });

		it("returns a value from the hash", function(){
			var instructor = {name: "Steven", age: 30};
			var name = "banana"; // extract 'name' value from the object
			expect(name).toEqual("Steven");
		});

		it("finds a key from a known value", function(){
			var instructor = {name: "Steven", age: 30};
			var key_from_value = "banana"; // write code that finds the property name where the value is 30
			expect(key_from_value).toEqual('age');
		});
	});
});