'use strict';

describe('Level3', function() {
	// Will be added to ECMAScript6. 
	if(!(Array.prototype.find instanceof Function)){
		// Write your own if it's not defined.
		Array.prototype.find = function(){};
	}
	// Will be added to ECMAScript6. 
	if(!(Array.prototype.every instanceof Function)){
		// Write your own if it's not defined.
		Array.prototype.every = function(){};
	}
	describe("Array find", function(){
		it("finds first value", function(){
			var find_two = [1,2,3].find(function(num){
				return num % 2 === 0;
			});

			expect(find_two).toEqual(2);
		});

		it("find returns undefined if no matches found", function(){
			var find_nothing = [1,2,3].find(function(num){
				return num > 10 ;
			});
			expect(find_nothing).toBeUndefined();
		});
	});

	describe("Array every", function(){
		it("returns true when function returns true for all elements", function(){
			var all_match = [1,2,3].every(function(num){
				return num > 0;
			});

			expect(all_match).toEqual(true);
		});
	});

	it("returns false when function returns false for at least one element", function(){
		var some_match = [1,2,3].every(function(num){
			return num > 1;
		});

		expect(some_match).toEqual(false);
	});

	it("returns false when function returns false for all elements", function(){
		var no_match = [1,2,3].every(function(num){
			return num > 10;
		});

		expect(no_match).toEqual(false);
	});

	describe('Nested Structures', function(){
		var school;
		beforeEach(function(){
			school = { 
				name: "Happy Funtime School",
				location: "NYC",
				instructors: [ 
				{ name: "Blake", subject: "Being Awesome" },
				{ name: "Steven",subject: "Being Just 'OK'" },
				{ name: "Avi",   subject: "Hunting" },
				],
				students: [ 
				{ name: "Marissa", grade: "B" },
				{ name: "Billy",   grade: "F" },
				{ name: "Frank",   grade: "A" },
				{ name: "Sophie",  grade: "C" },
				]
			};
		});

		it("modifies the object",function(){
			// modify school object. Add property foundedIn with a value of 2013
			expect(school.foundedIn).toEqual(2013);
		});

		it("adds to a nested array",function(){
			// Add a student to the end of the school's students' array.
			expect(school.students.length).toEqual(5);
			expect(school.students.slice(-1)[0].name).not.toEqual("Sophie");
		});

		it("deletes values from nested array",function(){
			// Delete the student named "Billy" from the object
			expect(school.students.length).toEqual(3);
			expect(school.students.find(function(student) { 
				return student.name == 'Billy';
			})).toBeUndefined();
		});

		it("modifies all values from nested array",function(){
			// Add a property to every student in the students array with a property of semester and assign it the value "Summer".
			expect(school.students.every(function(student){ 
				return student.semester == "Summer";
			})).toBe(true);
		});

		it("changes value of object in nested array", function(){
			// You have to create function "find" on the Array prototype
			// Change Steven's subject to "Being Fantastic"
			expect(school.instructors.find(function(instructor) { 
				return instructor.name == "Steven"; 
			}).subject).toEqual("Being Fantastic");
		});

		it("changes value of object in nested students array", function(){
			// Change Frank's grade from "A" to "F".
			expect(school.students.find(function(student){ 
				return student.name == "Frank";
			}).grade).toEqual("F");
		});

		it("finds student by their grade", function(){
			// Return the name of the student with a "B". 
			// Assume you don't know the order of the elements.
			var studentName = "banana"; 
			expect(studentName).toEqual("Marissa");
		});

		it("finds instructor by their subject", function(){
      // Return the subject of the instructor "Avi". 
      // Assume you don't know the order of the elements.
      var subjectName = "banana"; 
      expect(subjectName).toEqual("Hunting");
    });

		it("prints all values from all hashes, including nested ones", function(){
			spyOn(console, 'log');
			 // Log all the values in the school. NOTE: If this takes too long, skip it!

			 expect(console.log).toHaveBeenCalledWith("Happy Funtime School");
			 expect(console.log).toHaveBeenCalledWith("NYC");
			 expect(console.log).toHaveBeenCalledWith("Blake");
			 expect(console.log).toHaveBeenCalledWith("Being Awesome");
			 expect(console.log).toHaveBeenCalledWith("Steven");
			 expect(console.log).toHaveBeenCalledWith("Being Just 'OK'");
			 expect(console.log).toHaveBeenCalledWith("Avi");
			 expect(console.log).toHaveBeenCalledWith("Hunting");
			 expect(console.log).toHaveBeenCalledWith("Marissa");
			 expect(console.log).toHaveBeenCalledWith("B");
			 expect(console.log).toHaveBeenCalledWith("Billy");
			 expect(console.log).toHaveBeenCalledWith("F");
			 expect(console.log).toHaveBeenCalledWith("Frank");
			 expect(console.log).toHaveBeenCalledWith("A");
			 expect(console.log).toHaveBeenCalledWith("Sophie");
			 expect(console.log).toHaveBeenCalledWith("C");
			});
});
});