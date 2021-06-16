d = new Date();
year = d.getFullYear();
month = d.getMonth() + 1;
day = d.getDate();

document.getElementById("date").innerHTML = year + "." + month + "." + day;

function changeToEdit() {
    document.getElementById("save").innerHTML = "Edit!";
}

// Add a weather section

// Add a font moditifcation section