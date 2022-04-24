$(document).ready(function() {

  var form = $('#queryForm'),
      fullName = $('#nameField'),
      mobNumber = $('#mobileField'),
      fromLoc = $('#locFromField'),
      toLoc = $('#locToField'),
      info = $('#info'),
      loader = $('#loader'),
      submit = $("#submit");
  
  form.on('input', '#nameField, #mobileField, #locFromField, #locToField', function() {
    $(this).css('border-color', '');
    info.html('').slideUp();
  });
  
  submit.on('click', function(e) {
    info.html('Loading...').css('color', 'red').slideDown();
    e.preventDefault();
    if(validate()) {
      $.ajax({
        type: "POST",
        url: "mailer.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if(data.success) {
          fullName.val('');
          mobNumber.val('');
          fromLoc.val('');
          toLoc.val('');
          info.html('Your Email has been sent.').css('color', 'green').slideDown();
        } else {
          info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
        }
      });
    }
  });
  
  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if($.trim(fullName.val()) === "") {
      fullName.css('border-color', 'red');
      valid = false;
    }
    if(!regex.test(mobNumber.val())) {
      mobNumber.css('border-color', 'red');
      valid = false;
    }
    if($.trim(fromLoc.val()) === "") {
      fromLoc.css('border-color', 'red');
      valid = false;
    }
    if($.trim(toLoc.val()) === "") {
      toLoc.css('border-color', 'red');
      valid = false;
    }
    
    return valid;
  }

});