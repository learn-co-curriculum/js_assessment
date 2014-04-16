'use strict';

describe('Level2', function() {
	describe('Objects', function(){
		it("adds a new property", function(){
			var instructor = { name: "Steven", age: 30 };
       // Add a property location with a value of "NYC" to instructor
       instructor.location = "NYC";
       expect(instructor.location).toEqual("NYC");
     });

		it("prints out all the property value pairs in the object", function(){
			var instructor = { name: "Steven", age: 30 };
			spyOn(console, 'log');
      // Iterate over the object and print each property value pair. 
      // Print using string interpolation to match the expectations.			
    for(var property in instructor){
    	console.log("Property is " + property + ". Value is " + instructor[property]);
    }
      expect(console.log).toHaveBeenCalledWith("Property is name. Value is Steven");
      expect(console.log).toHaveBeenCalledWith("Property is age. Value is 30");
    });

		it("returns a value from the object", function(){
			var instructor = {name: "Steven", age: 30};
			var name = instructor.name; // extract 'name' value from the object
			expect(name).toEqual("Steven");
		});

		it("finds a property from a known value", function(){
			var instructor = {name: "Steven", age: 30};
			var property_from_value;
			for(var prop in instructor){
				if(instructor[prop] == 30){
					property_from_value = prop;
				}
			}
			 // write code that finds the property name where the value is 30
			expect(property_from_value).toEqual('age');
		});
	});
});