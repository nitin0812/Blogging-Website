let submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
    let name = getElementById("name");
    let phone = getElementById("phone");
    let email = getElementById("email");
    let msg = getElementById("msg");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
          notesObj = [];
    } else {
          notesObj = JSON.parse(notes);
    }
    let myObj = {
        personName: name.value,
        personPhone: phone.value,
        personEmail: email.value,
        message: msg.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    name.value="";
    phone.value="";
    email.value="";
    msg.value="";
});