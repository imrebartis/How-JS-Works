// Object.create
var personProto = {
	calculateAge: function() {
	  console.log(2017 - this.yearOfBirth);
  }
};

var john = Object.create(personProto,

		{
			name: { value: 'John'},
			yearOfBirth: { value: 1990},
			job: { value: 'designer'}
		}
	);