$('#contact-form').submit(function(e) {
  var name = document.getElementById('inputName');
  var email = document.getElementById('inputEmail');
  var message = document.getElementById('inputMessage');
  
  if (!name.value || !email.value ||!message.value) {
    alertify.error('Please check your entries')
  } else {
    $.ajax({
      url: "https://forspree.io/vlbardenova6187@eagle.fgcu.edu",
      method: "POST",
      data: $(this).serialize,
      dataType: "json"
    });
    e.preventDefault()
    $(this).get(0).reset()
    alertify.success('Message sent')
  }
})
