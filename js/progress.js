// Reference: https://webdesign.tutsplus.com/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500

let data;
data = JSON.parse(localStorage.getItem('journals'));

// Event Listeners
document.addEventListener('click', e => {
    if (e.target == document.querySelector('.modal.is-visible')) {
        document.querySelector('.modal.is-visible').classList.remove('is-visible');
    }
})

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

let list = [];

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
    card.className = 'card';
    card.id = 'c' + i;
    var text = document.createElement('h1');
    text.innerHTML = data[i].date;
    text.style.fontSize = '25px';
    text.style.fontFamily = 'Nunito, sans-serif';
    text.style.fontWeight = 'bold';
    text.style.color = 'rgb(110, 156, 255)';
    text.style.marginTop = '20px';

    // view button
    var button = document.createElement('button');
    button.className = 'view';
    button.innerHTML = 'view';
    button.id = 'b' + i;
    
    // delete button
    // will replace with the icon
    var d = document.createElement('button');
    d.className = 'delete';
    d.innerHTML = 'delete';
    d.id = 'd' + i;

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
    var content = document.createElement('p');
    content.innerHTML = '"' + data[i].text + '"';
    content.style.marginLeft = '10px';

    var page_full = document.createElement('div');
    page_full.className = 'modal';
    page_full.id = 'modal' + i;

    var page = document.createElement('div');
    page.className = 'page';
    

    page_header = document.createElement('header');
    page_header.appendChild(date);
    page.appendChild(page_header);


    page_content = document.createElement('div');
    page_content.className = 'con';
    
    page_content.appendChild(weather);
    page_content.appendChild(song);
    page_content.appendChild(content);
    page.appendChild(page_content);
    
    page_full.appendChild(page);

    document.body.appendChild(page_full);

    list.push(card);
    
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

var deletes = document.querySelectorAll('.delete');
deletes.forEach((del) => {
    if (del.id[0] == 'd') {
        del.onclick = () => {
            var index = parseInt(del.id[1]);
            var card = document.getElementById('c' + del.id[1]);
            let row;
            if (index < 3) {
                row = row1;
            } else if (3 <= index < 6) {
                row = row2;
            } else {
                row = row3;
            }
            row.removeChild(card);
            data.splice(index, 1);
            list.splice(index, 1);
            localStorage.setItem('journals', JSON.stringify(data));
            reorderCards();
        }
    }
})

function reorderCards() {
    row1.innerHTML = '';
    row2.innerHTML = '';
    row3.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let row;
        if (i < 3) {
            row = row1;
        } else if (3 <= i < 6) {
            row = row2;
        } else {
            row = row3;
        }
        row.appendChild(list[i]);
    }
}