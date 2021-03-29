
let tableEl = document.getElementById('teble-content');

async function getData() {
  //Forma mais resumida
  //return (await fetch('https://jsonplaceholder.typicode.com/users')).json();

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

   return users;
}

async function loadData(fn){

  let users = await fn;

  for (let user of users){

   row = `
        <tr>
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

loadData(getData())


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


