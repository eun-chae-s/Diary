let data;
data = JSON.parse(localStorage.getItem('journals'));

const box = document.getElementById('list');

for (let i = 0; i < data.length; i++) {
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
    button.id = i;
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
    d.id = i;

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
    box.appendChild(card);
    // if (i != 0 && i % 3 == 0) {
        
    // } else {

    // }
    
};
