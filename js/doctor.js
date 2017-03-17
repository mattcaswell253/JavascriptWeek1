var apiKey = require('./../.env').apiKey;

function Doctor() {

}

var name = "";


Doctor.prototype.getDoctors = function(medicalIssue) {
  doctorArray = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {

    //  for (var i = 0; i < response.data.length; i++);
    //  firstName = response.data[i].profile['first_name'];
    //  lastName = response.data[i].profile['last_name'];


      response.data.forEach(function(element) {
        name = (element.profile.first_name + " " + element.profile.last_name );
        console.log(name);


        // displayDoctor(element.profile.first_name, element.profile.last_name);

    }).fail(function(error){
      $('.error-message').text(error.responseJSON.message);
    });
  });
};
exports.doctorModule = Doctor;
