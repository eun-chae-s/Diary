d = new Date();
year = d.getFullYear();
month = d.getMonth() + 1;
day = d.getDate();

document.getElementById("date").innerHTML = year + "." + month + "." + day;

function changeToEdit() {
    var btn = document.getElementById("save");
    if (btn.innerHTML == "Save!") {
        btn.innerHTML = "Edit!";
    }
    else {
        btn.innerHTML = "Save!";
    }
}

// Add a weather section

// Add a font moditifcation section