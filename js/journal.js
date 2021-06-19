d = new Date();
year = d.getFullYear();
month = d.getMonth() + 1;
day = d.getDate();

document.getElementById("date").innerHTML = year + "." + month + "." + day;

function changeToEdit() {
    var btn = document.getElementById("save");
    
    var t = document.getElementById("text");
    let journal_text;
    if (btn.innerHTML == "Save!") {
        var text = document.getElementById("journal");
        var box = document.createElement('div');
        box.id = "box";
        journal_text = text.value;
        box.innerHTML = text.value;
        box.style.borderColor = "#6e9cff";
        box.style.borderStyle = "solid";
        box.style.borderWidth = "2px";
        box.style.fontFamily = "Mukta, sans-serif";
        box.style.fontSize = "18px";
        box.style.padding = "10px";

        t.replaceChild(box, text);
        btn.innerHTML = "Edit!";
    }
    else {
        var box = document.getElementById("box");
        var text = document.createElement('textarea');
        text.id = "journal";
        journal_text = box.innerHTML;
        text.innerHTML = box.innerHTML;
        text.style.borderColor = "#6e9cff";
        text.style.borderWidth = "5px";
        text.style.fontFamily = "Mukta, sans-serif";
        text.style.fontSize = "18px";
        text.style.padding = "10px";
        text.rows = "20";
        text.cols = "75";

        t.replaceChild(text, box);
        btn.innerHTML = "Save!";
    }

    // Add the text to the database with the date;
    let journals;
    let dates;
    if (localStorage.getItem('journals') === null && localStorage.getItem('dates') === null) {
        journals=[];
        dates = [];
    }
    else{
        journals = JSON.parse(localStorage.getItem('journals'));
        dates = JSON.parse(localStorage.getItem('dates'));
    }
    // Save the item
    journals.push(journal_text);
    dates.push(year + "." + month + "." + day);
    localStorage.setItem('journals', JSON.stringify(journals));
    localStorage.setItem('dates', JSON.stringify(dates));
}

// Add a weather section

// Add a font moditifcation section