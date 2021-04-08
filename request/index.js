
const dataSource ='https://jsonplaceholder.typicode.com/users'

var tableEl = document.getElementById('table-content');
var tbody = document.querySelector("#table-content");
var cards = document.getElementsByClassName('card');
var mediaCards = document.getElementsByClassName('mediaCard');

//Obter dados
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}

var dataUsers = getData(dataSource);

async function loadData(fn){
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
}

loadData(dataUsers)

async function  loadDataCards(cardsElements,tableElement,mediaCardEl,dataUsers) {
  const allData  = await dataUsers;

  tableElement.addEventListener('click', el => {
    const rowValue = el.target.parentNode.innerText[0]

    const [{id,name,address,company}]= allData.filter(user =>{
       if(user.id == rowValue) return user;
    });
    console.log('test',id, name, address,company)

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

  });

 }

 loadDataCards(cards,tbody,mediaCards,dataUsers)





// {
//   "id": 2,
//   "name": "Ervin Howell",
//   "username": "Antonette",
//   "email": "Shanna@melissa.tv",
//   "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//       }
//   },
//   "phone": "010-692-6593 x09125",
//   "website": "anastasia.net",
//   "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//   }
// }


