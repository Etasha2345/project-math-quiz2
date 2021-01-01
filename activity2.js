function send() {
    Number_1 = document.getElementById("Number_1").value;
    Number_2 = document.getElementById("Number_2").value;

    localStorage.setItem("Number_1", Number_1);
    localStorage.setItem("Number_2", Number_2);

    window.location = "activity_1.html";
}