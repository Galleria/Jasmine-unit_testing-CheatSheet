

var housePassword = function(password){
  var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{10,}$/
  return regex.test(password);
}

module.exports = housePassword;
