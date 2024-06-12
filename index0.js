var clicked = ""

function myFunction() {
    clicked = window.event.target.name;
    sessionStorage.setItem("clicked", clicked);
    //console.log(clicked);
    window.location="booknow.html";
}

function changeOption() {
    var newOption = document.createElement("option");
    newOption.text = sessionStorage.getItem("clicked");
    newOption.value="newValue"
    document.getElementById("appointmenttype").add(newOption);
    document.getElementById("appointmenttype").value="newValue";
}
