
const dataSource ='https://jsonplaceholder.typicode.com/users'

var tableEl = document.getElementById('table-content');
var tbody = document.querySelector("#table-content");
var cards = document.getElementsByClassName('card');
var mediaCards = document.getElementsByClassName('mediaCard');
var cardUserName = document.getElementById('name-card');
var btnNexPrevious = document.querySelectorAll('.actions');


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
  let [{username,address,company}] = UserData;

  if (cardUserName.innerText == 'Titulo do Card'){
    for (var card = 0; card < cardsElements.length; card++) {
      if (cardsElements[card].id== 'company'){
        document.getElementById('name-card2').innerHTML = company.name;
        document.getElementById('catchPhrase').innerHTML = company.catchPhrase;
        document.getElementById('bs').innerHTML = company.bs;
      } else {
        document.getElementById('name-card').innerHTML = username;
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
    //el.target.parentNode.innerText retorna a tr inteira
    const rowValue = el.target.parentNode.querySelectorAll('td')[0].innerText;
    console.log(rowValue);

   let [{username,address,company}] = UserData.filter(user =>{
       if(user.id == rowValue) return user;
    });

    for (var card = 0; card < cardsElements.length; card++) {
      if (cardsElements[card].id== 'company'){
        document.getElementById('name-card2').innerHTML = company.name;
        document.getElementById('catchPhrase').innerHTML = company.catchPhrase;
        document.getElementById('bs').innerHTML = company.bs;
      } else {
        document.getElementById('name-card').innerHTML = username;
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
filterUserbyClick(tbody,cards,mediaCards,dataUsers);

async function next(nextPreviousBtn,cardsElements,mediaCardEl,data){
  let dados = await data;
  nextPreviousBtn.forEach(btn => {
    btn.addEventListener('click', action =>{
      if(action.target.className.split(' ')[1] =='next'){

        const actualUserName =document.getElementById('name-card').innerText;
        const filterNextUser = dados.findIndex(user => user.username === actualUserName);
        console.log('mover para frente');
        let {username,address,company} = nextUser(dados,filterNextUser);
        //document.getElementById('name-card').innerHTML = username;

        for (var card = 0; card < cardsElements.length; card++) {
          if (cardsElements[card].id== 'company'){
            document.getElementById('name-card2').innerHTML = company.name;
            document.getElementById('catchPhrase').innerHTML = company.catchPhrase;
            document.getElementById('bs').innerHTML = company.bs;
          } else {
            document.getElementById('name-card').innerHTML = username;
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
      }
    });
  });
}

function nextUser(data, current){
  //Parar a iteração quando chegar no ultimo item do arrey
  if (current === (data.length-1)){
    return data[data.length-1]
  }else{
    return data[++current]
  }
}

next(btnNexPrevious,cards,mediaCards,dataUsers)

async function previus(nextPreviousBtn,cardsElements,mediaCardEl,data){
  let dados = await data;
  nextPreviousBtn.forEach(btn => {
    btn.addEventListener('click', action =>{
      if(action.target.className.split(' ')[1] =='previous'){

        const actualUserName = document.getElementById('name-card').innerText;
        console.log(actualUserName);
        const filterPreviusUser = dados.findIndex(user => user.username === actualUserName);
        console.log('mover para trás');
        let {username,address,company} = previusUser(dados,filterPreviusUser);
        //document.getElementById('name-card').innerHTML = username;

        for (var card = 0; card < cardsElements.length; card++) {
          if (cardsElements[card].id== 'company'){
            document.getElementById('name-card2').innerHTML = company.name;
            document.getElementById('catchPhrase').innerHTML = company.catchPhrase;
            document.getElementById('bs').innerHTML = company.bs;
          } else {
            document.getElementById('name-card').innerHTML = username;
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
      }
    });
  });
}

function previusUser(data, current){
  //Parar a iteração quando chegar no ultimo item do arrey
  if (current === 0){
    return data[0]
  }else{
    return data[--current]
  }
}

previus(btnNexPrevious,cards,mediaCards,dataUsers)

/// destacar a linha/ID atual selecionado pelo cursor ou botões com acor abaixo,
//background-color:rgb(123, 248, 171)