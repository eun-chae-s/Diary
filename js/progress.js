// Reference: https://webdesign.tutsplus.com/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500

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

    var page_full = document.createElement('div');
    page_full.className = 'modal';
    page_full.id = 'modal' + i;
    // page_full.style.position = 'fixed';
    // page_full.style.top = '0';
    // page_full.style.bottom = '0';
    // page_full.style.left = '0';
    // page_full.style.right = '0';
    // page_full.style.display = 'flex';
    // page_full.style.justifyContent = 'center';
    // page_full.style.alignItems = 'center';
    // page_full.style.visibility = 'hidden';
    // page_full.style.opacity = '0';
    // page_full.style.cursor = 'pointer';
    // page_full.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    var page = document.createElement('div');
    page.style.fontFamily = "Nunito, sans-serif";
    page.style.border = 'solid';
    page.style.width = '400px';
    page.style.height = '400px';
    page.style.position = 'relative';
    page.style.backgroundColor = 'white';
   
    

    page_header = document.createElement('header');
    page_header.style.marginTop = '30px';
    page_header.style.marginLeft = '20px';
    page_header.appendChild(date);
    page.appendChild(page_header);


    page_content = document.createElement('div');
    page_content.style.display = 'block';
    page_content.style.marginLeft = '20px';
    page_content.style.marginTop = '20px';
    page_content.appendChild(weather);
    page_content.appendChild(song);
    page_content.appendChild(text);
    page.appendChild(page_content);
    
    page_full.appendChild(page);

    document.body.appendChild(page_full);
    
    if (i == 8) {
        break;
    }
};

var buttons = document.getElementById('list').querySelectorAll('button');
buttons.forEach((button) => {
    if (button.id[0] == 'b') {
        var i = button.id[1];
        button.onclick = () => {
            var page = document.getElementById('modal' + i);
            page.classList.add("is-visible");
        };
    }
});

function deleteJournal(i) {

};