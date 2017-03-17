var Doctor = require('./../js/doctor.js').doctorModule;



$(document).ready(function() {
  var newDoctor = new Doctor();
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var issue = $('#issue').val();
    $('issue').val("");
    newDoctor.getDoctors(issue)
  });
});
