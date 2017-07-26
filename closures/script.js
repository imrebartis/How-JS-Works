// closures

// rule: an inner function has always access to the vars and params of its outer function, even after the outer function has returned

function retirement(retirementAge) {
	return function(yearOfBirth){
		var a = ' years left until retirement.';
		var age = 2017 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);

retirementUS(1990);

retirement(66)(1990);

var retirementIceland = retirement(67);
retirementIceland(1990);

function interviewQuestion(job) {
	return function(name){
		if(job==='designer'){
			console.log(name + ", can you please explain what UX design is?");

		} else if(job==='teacher'){
				console.log("What do you teach, " + name + "?");
			
		} else {
				console.log('Hello, ' + name + ', what do you do?');
		}

	}
}

interviewQuestion('teacher')('John')