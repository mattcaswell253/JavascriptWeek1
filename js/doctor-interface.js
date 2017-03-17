var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var issue = $('#issue').val();
  });
});
