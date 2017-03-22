var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctor) {
  $('#solution').html('');
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
      response.data.forEach(function(element) {
        var name = element.profile.first_name + ' ' + element.profile.last_name;
        displayDoctor(name);
      });

    })
    .fail(function(error){
      $('.error-message').text(error.responseJSON.message);
      console.log(e);
      alert('error happened');
    });
};
exports.doctorModule = Doctor;
