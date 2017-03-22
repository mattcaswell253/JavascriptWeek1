var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(name) {
  $('#solution').append("<li>Doctors name:" + name + "</li>" );
};

$(document).ready(function() {
  var newDoctor = new Doctor();

  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var issue = $('#issue').val();
    newDoctor.getDoctors(issue, displayDoctor);
    $('#issue').val("");

  });
});
