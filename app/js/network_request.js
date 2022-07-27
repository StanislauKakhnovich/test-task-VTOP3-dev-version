
postForm=()=> {
    const data = {};
        data.name = document.querySelector('#name').value;
        data.password = document.querySelector('#password').value;
        let nameString = passwordUser.value;

        
        $.ajax( {
                url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
                data : { f : 'INSERT', n : nameString, v : JSON.stringify(data)},
                success : readReady, error : errorHandler
            }
        );
      
  }
  
  
    readReady = (callresult)=> {
      if ( callresult.error!=undefined )
          console.log(callresult.error);
      else if ( callresult.result!="" ) {
        nameUser.value = "";
        lastNameUser.value = "";
        emailUser.value = "";
        passwordUser.value = "";
        confirmPasswordUser.value = "";
        setTimeout(()=>{
            document.querySelector('#hidden-form').style.display = 'none';
            document.querySelector('.btn-signup').style.display = 'none';
            document.querySelector('#success-request').style.display = 'inline-block';
        }, 1000);
        console.log("SIGN_SUCCESS")
        }
    };
  
  errorHandler = (jqXHR,statusStr,errorStr) => {
      console.log(statusStr+' '+errorStr);
    }

