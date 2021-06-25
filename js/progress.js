let data;
data = JSON.parse(localStorage.getItem('journals'));

const box = document.getElementById('list');
var row1 = document.createElement('div');
row1.style.height = '160px';
row1.style.marginBottom = '3px';

var row2 = document.createElement('div');
row2.style.height = '160px';
row2.style.marginBottom = '3px';

var row3 = document.createElement('div');
row3.style.height = '160px';
row3.style.marginBottom = '3px';

box.appendChild(row1);
box.appendChild(row2);
box.appendChild(row3);

var pages = document.getElementById('pages');


for (let i = 0; i < data.length; i++) {
    let row;
    if (i < 3) {
        row = row1;
    } else if (3 <= i < 6) {
        row = row2;
    } else {
        row = row3;
    }

    var card = document.createElement('div');
    var text = document.createElement('h1');
    text.innerHTML = data[i].date;
    text.style.fontSize = '25px';
    text.style.fontFamily = 'Nunito, sans-serif';
    text.style.fontWeight = 'bold';
    text.style.color = 'rgb(110, 156, 255)';
    text.style.marginTop = '20px';

    // view button
    var button = document.createElement('button');
    button.innerHTML = 'view';
    button.style.width = '70px';
    button.style.height = '30px';
    button.style.border = 'none';
    button.style.backgroundColor = 'rgb(110, 156, 255)';
    button.style.color = 'white';
    button.style.cursor = 'pointer';
    button.id = 'b' + i;
    button.style.marginRight = '2px';
    

    // delete button
    // will replace with the icon
    var d = document.createElement('button');
    d.innerHTML = 'delete';
    d.style.width = '70px';
    d.style.height = '30px';
    d.style.border = 'none';
    d.style.backgroundColor = 'rgb(155, 130, 255)';
    d.style.color = 'white';
    d.style.cursor = 'pointer';
    d.id = 'd' + i;
    d.addEventListener('click', deleteJournal(i));

    // Styling the card
    card.style.display = 'inline-block';
    card.style.width = '220px';
    card.style.height = '150px';
    card.style.textAlign = 'center';
    card.style.justifyContent = 'center';
    card.style.verticalAlign = 'middle';
    
    // style - border color
    card.style.border = 'none';
    // style - shadow
    card.style.boxShadow = '6px 6px 5px grey';

    card.style.marginLeft = '10px';
    
    card.appendChild(text);
    card.appendChild(button);
    card.appendChild(d);
    
    row.appendChild(card);

    // Add the modal
    var date = document.createElement('h3');
    date.innerHTML = data[i].date;
    date.style.fontSize = '30px';
    date.style.marginTop = '10px';
    date.style.marginLeft = '10px';
    var weather = document.createElement('p');
    weather.innerHTML = '&#127758' + '  ' + data[i].weather;
    weather.style.marginLeft = '10px';
    var song = document.createElement('p');
    song.innerHTML = '&#127911' + '  ' + data[i].song;
    song.style.marginLeft = '10px';
    var text = document.createElement('p');
    text.innerHTML = '"' + data[i].text + '"';
    text.style.marginLeft = '10px';

    var page = document.createElement('div');
    page.appendChild(date);
    page.appendChild(weather);
    page.appendChild(song);
    page.appendChild(text);
    page.style.fontFamily = "Nunito, sans-serif";
    
    page.style.zIndex = '200';
    page.style.backgroundColor = 'white';
    page.style.border = 'solid';
    page.style.width = '300px';
    page.style.height = '300px';
    page.style.justifyContent = 'center';
    page.style.alignItems = 'center';
    page.style.display = 'none';


    page.id = 'p' + i;

    pages.appendChild(page);
    
    if (i == 8) {
        break;
    }
};

pages.style.display = 'block';

var buttons = document.getElementById('list').querySelectorAll('button');
buttons.forEach((button) => {
    if (button.id[0] == 'b') {
        var i = button.id[1];
        button.onclick = () => {
            var page = document.getElementById('p' + i);
            page.style.display = 'block';
        };
    }
});

function deleteJournal(i) {

};