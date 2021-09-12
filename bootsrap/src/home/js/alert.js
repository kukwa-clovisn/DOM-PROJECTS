     function validate(){
    let username = document.getElementById('username').value;
    let select = document.getElementById('select').value;
    let age = document.getElementById('email').value;
    let address = document.getElementById('amount').value;
    let tel = document.getElementById('number').value;
    let school = document.getElementById('text').value;
    let location = document.getElementById("area").value;
    let form_output = document.getElementById('form_input');

    if(username == " " && select == " " && age == " " && address == " " && tel == " " && school == " " && location == " ") {
        swal("Awesome!", "your form has been successfully submitted. \n we will send updates to your email \n thanks for trusting Digital Real Estate Foundation", "success");
        
    } else {
        sweetAlert("ooopss...", "one or more input field has not been filled. \n Do well to fill all inputs \n Digital Real Estate Foundation", "error");
    }
}
 console.log(form_output);