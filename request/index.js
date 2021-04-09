
const dataSource ='https://jsonplaceholder.typicode.com/users'

var tableEl = document.getElementById('table-content');
var tbody = document.querySelector("#table-content");
var cards = document.getElementsByClassName('card');
var mediaCards = document.getElementsByClassName('mediaCard');
var cardUserName = document.getElementById('name-card');
var btnNext = document.getElementsByClassName('next');
var btnPrevious = document.getElementsByClassName('previous');


async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
var dataUsers = getData(dataSource);

//Initialize
async function loadDataTable(fn){
  dataUsers = await fn;
  for (let user of dataUsers){
   row = `
        <tr class="tr-rows">
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.website}</td>
        </tr>`
    tableEl.innerHTML += row
  }
  loadDataCard(cards, mediaCards, dataUsers);

}

async function loadDataCard(cardsElements,mediaCardEl,data){
  let UserData = await data;
  let [{name,address,company}] = UserData;

  if (cardUserName.innerText == 'Titulo do Card'){
    for (var card = 0; card < cardsElements.length; card++) {
      if (cardsElements[card].id== 'company'){
        document.getElementById('name-card2').innerHTML = company.name;
        document.getElementById('catchPhrase').innerHTML = company.catchPhrase;
        document.getElementById('bs').innerHTML = company.bs;
      } else {
        document.getElementById('name-card').innerHTML = name;
        for (var media = 0; media < mediaCardEl.length; media++) {
          if(mediaCardEl[media].id =='card-address'){
            mediaCardEl[media].children[0].innerHTML = address.street
            mediaCardEl[media].children[1].innerHTML = address.suite
            mediaCardEl[media].children[2].innerHTML = address.city
            mediaCardEl[media].children[3].innerHTML = address.zipcode
          }
        }
      }
    }
  };
}

loadDataTable(dataUsers);

async function filterUserbyClick(tableElement,cardsElements,mediaCardEl,data){
  const UserData = await data
  tableElement.addEventListener('click', el => {
    const rowValue = el.target.parentNode.innerText[0]

   let [{name,address,company}] = UserData.filter(user =>{
       if(user.id == rowValue) return user;
    });

    for (var card = 0; card < cardsElements.length; card++) {
      if (cardsElements[card].id== 'company'){
        document.getElementById('name-card2').innerHTML = company.name;
        document.getElementById('catchPhrase').innerHTML = company.catchPhrase;
        document.getElementById('bs').innerHTML = company.bs;
      } else {
        document.getElementById('name-card').innerHTML = name;
        for (var media = 0; media < mediaCardEl.length; media++) {
          if(mediaCardEl[media].id =='card-address'){
            mediaCardEl[media].children[0].innerHTML = address.street
            mediaCardEl[media].children[1].innerHTML = address.suite
            mediaCardEl[media].children[2].innerHTML = address.city
            mediaCardEl[media].children[3].innerHTML = address.zipcode
          }
        }
      }
    }
  })

}
filterUserbyClick(tbody,cards,mediaCards,dataUsers);