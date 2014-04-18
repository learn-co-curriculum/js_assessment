'use strict';

describe('Level3', function() {
	// Will be added to ECMAScript6. 
	if(!(Array.prototype.find instanceof Function)){
		// Write your own if it's not defined.
		Array.prototype.find = function(callback){
			var result;
			this.forEach(function(item){
				if(callback(item)) {
					result = item;
					return; 
				}
			});
			return result;
		};
	}
	// Will be added to ECMAScript6. 
	if(!(Array.prototype.every instanceof Function)){
		// Write your own if it's not defined.
		Array.prototype.every = function(callback){
			var result = true;
			this.forEach(function(item){
				if(!callback(item)){
					result = false;
				}
			});
			return result;
		};
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
			school.foundedIn = 2013;
			expect(school.foundedIn).toEqual(2013);
		});

		it("adds to a nested array",function(){
			// Add a student to the end of the school's students' array.
			school.students.push({name: "Steven", grade: "A++++"});
			expect(school.students.length).toEqual(5);
			expect(school.students.slice(-1)[0].name).not.toEqual("Sophie");
		});

		it("deletes values from nested array",function(){
			// Delete the student named "Billy" from the object
			var students = school.students;
			var billy_location;
			students.forEach(function(student, index){
				if(student.name === "Billy"){
					billy_location = index;
					return; 
				}
			});

			school.students.splice(billy_location,1);
			expect(school.students.length).toEqual(3);
			expect(school.students.find(function(student) { 
				return student.name == 'Billy';
			})).toBeUndefined();
		});

		it("modifies all values from nested array",function(){
			// Add a property to every student in the students array with a property of semester and assign it the value "Summer".
			school.students.forEach(function(student){
				student.semester = "Summer";
			});

			expect(school.students.every(function(student){ 
				return student.semester == "Summer";
			})).toBe(true);
		});

		it("changes value of object in nested array", function(){
			// Change Steven's subject to "Being Fantastic"
			school.instructors.forEach(function(instructor){
				if(instructor.name === "Steven"){
					instructor.subject = 'Being Fantastic';
					return;
				}
			});
			expect(school.instructors.find(function(instructor) { 
				return instructor.name == "Steven"; 
			}).subject).toEqual("Being Fantastic");
		});

		it("changes value of object in nested students array", function(){
			// Change Frank's grade from "A" to "F".
			school.students.forEach(function(student){
				if(student.name === "Frank"){
					student.grade = "F";
					return;
				}
			});

			expect(school.students.find(function(student){ 
				return student.name == "Frank";
			}).grade).toEqual("F");
		});

		it("finds student by their grade", function(){
			// Return the name of the student with a "B". 
			// Assume you don't know the order of the elements.

			var student = school.students.find(function(s){
				return s.grade === 'B';
			});
			var studentName = student.name;
			expect(studentName).toEqual("Marissa");
		});

		it("finds instructor by their subject", function(){
      // Return the subject of the instructor "Avi". 
      // Assume you don't know the order of the elements.
      var instructor = school.instructors.find(function(i){
      	return i.name === "Avi";
      });
      var subjectName = instructor.subject; 
      expect(subjectName).toEqual("Hunting");
    });

		it("prints all values from all hashes, including nested ones", function(){
			spyOn(console, 'log');
			 // Log all the values in the school. NOTE: If this takes too long, skip it!
			 
			 var getKeys = function(i){
				 	for(var k in i){
				 		console.log(i[k]);
				 	}
			 };
			 
			 for(var key in school){
			 	if(school[key] instanceof Array){
			 		var arr = school[key];
			 		arr.forEach(getKeys);
			 	}else{
			 		console.log(school[key]);
			 	}
			 }

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