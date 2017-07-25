// functions returning functions

function interviewQuestion(job){
	if(job==='designer'){
		return function(name){
			console.log(name + ", can you please explain what UX design is?");
		}
	} else if(job==='teacher'){
		return function(name){
			console.log("What do you teach " + name + "?");
		}
	} else {
		return function(name){
			console.log('Hello, ' + name + ', what do you do?');
		}
	}

}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John'); // 'What do you teach, John?'
interviewQuestion('designer')('Mika'); // "Mika, can you please explain what UX design is?"