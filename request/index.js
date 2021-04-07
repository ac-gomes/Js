
const dataSource ='https://jsonplaceholder.typicode.com/users'

var tableEl = document.getElementById('table-content');
var tbody = document.querySelector("#table-content");
var cards = document.getElementsByClassName('card');
var mediaCards = document.getElementsByClassName('mediaCard');
console.log(mediaCards)


async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}

async function loadData(fn){
  let users = await fn;
  for (let user of users){
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

loadData(getData(dataSource))


function getRowId(element){

  element.addEventListener('click', el => {
    console.log( el.target.parentNode.innerText)
  });

}

getRowId(tbody)

// Pegar os dados endereço e empresa
async function getAdressCompany(fn){
    const [{id,name},{address},{company}] =  await fn;
    return console.log(id,name,address,company)

}
getAdressCompany(getData(dataSource))

 function loadDataCards(cardsElements,tableElement,mediaCardEl) {

  tableElement.addEventListener('click', el => {
    const rowValue = el.target.parentNode.innerText[0]

    for (var card = 0; card < cardsElements.length; card++) {
      if (cardsElements[card].id== 'company'){

        document.getElementById('name-card').innerHTML =  rowValue;
        // id="card-company"
        // id="catchPhrase"

      } else {
        document.getElementById('name-card2').innerHTML = rowValue;
        for (var media = 0; media < mediaCardEl.length; media++) {

          if(mediaCardEl[media].id =='card-address'){

            mediaCardEl[media].children[0].innerHTML = mediaCardEl[media].children[0].id
            mediaCardEl[media].children[1].innerHTML = mediaCardEl[media].children[1].id
            mediaCardEl[media].children[2].innerHTML = mediaCardEl[media].children[2].id
            mediaCardEl[media].children[3].innerHTML = mediaCardEl[media].children[3].id

          }

        }

      }
    }

  });

 }

 loadDataCards(cards,tbody,mediaCards)





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


