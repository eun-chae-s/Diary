d = new Date();
year = d.getFullYear();
month = d.getMonth() + 1;
day = d.getDate();

document.getElementById("date").innerHTML = year + "." + month + "." + day;

function changeToEdit() {
    var btn = document.getElementById("save");
    var t = document.getElementById("text");

    var main_w = document.getElementById("weather");

    var main_song = document.querySelector('.song');

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

        // Replace the select bar with the text
        var w = document.getElementById("selected-weather");
        var weather = w.options[w.selectedIndex].text;
        var ww = document.createElement('span');
        ww.id = "w_text";
        ww.style.color = "black";
        ww.style.fontSize = "15px";
        ww.innerHTML = weather;
        main_w.replaceChild(ww, w);

        // Replace the input text with just the plain text
        var song = document.getElementById("chosen_song");
        var s = document.createElement('span');
        s.innerHTML = song.value;
        s.style.color = "black";
        s.style.fontSize = "15px";
        s.id ="s_text";
        main_song.replaceChild(s, song);

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

        // Replace the text with the select bar
        var w = document.createElement('select');
        var ww = document.getElementById('w_text');
        var opt1 = document.createElement('option');
        opt1.value = "sunny";
        opt1.innerHTML = "Sunny";
        w.appendChild(opt1);
        var opt2 = document.createElement('option');
        opt2.value = "cloudy";
        opt2.innerHTML = "Cloudy";
        w.appendChild(opt2);
        var opt3 = document.createElement('option');
        opt3.value = "rainy";
        opt3.innerHTML = "Rainy";
        w.appendChild(opt3);
        var opt4 = document.createElement('option');
        opt4.value = "windy";
        opt4.innerHTML = "Windy";
        w.appendChild(opt4);
        var opt5 = document.createElement('option');
        opt5.value = "groomy";
        opt5.innerHTML = "Groomy";
        w.appendChild(opt5);
        w.id = "selected-weather";

        main_w.replaceChild(w, ww);

        // Replace the plain text with the input text
        var s = document.createElement('input');
        var song = document.getElementById('s_text');
        s.placeholder = 'Type the title of song';
        s.value = song.innerHTML;
        s.id = "chosen_song";
        main_song.replaceChild(s, song);

        btn.innerHTML = "Save!";
    }

    // // Add the text to the database with the date;
    // let journals;
    // let dates;
    // if (localStorage.getItem('journals') === null && localStorage.getItem('dates') === null) {
    //     journals=[];
    //     dates = [];
    // }
    // else{
    //     journals = JSON.parse(localStorage.getItem('journals'));
    //     dates = JSON.parse(localStorage.getItem('dates'));
    // }
    // // Save the item
    // journals.push(journal_text);
    // dates.push(year + "." + month + "." + day);
    // localStorage.setItem('journals', JSON.stringify(journals));
    // localStorage.setItem('dates', JSON.stringify(dates));
}
