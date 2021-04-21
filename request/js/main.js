import getUsers from "./dataSource.js";
import loadDataTable from "./loadData.js";
import loadDataCard from "./crads.js";
import Buttons from "./buttons.js";

let url ='https://jsonplaceholder.typicode.com/users'

const tableEl = document.getElementById('table-content');//remover esse
const tableContent = document.querySelector("#table-content");// ou remover esse
const cards = document.getElementsByClassName('card');
const addressInputs = document.getElementsByClassName('address-input');
const companyTextLabel = document.getElementsByClassName('company-label');
const btnNexPrevious = document.querySelectorAll('.actions');
const actualUserName = document.getElementById('user-name');

//Initialize
(async () => {
  let data = await getUsers(url);
  let [{username, address, company}] = data;
  loadDataTable(data, tableEl);
  loadDataCard(
    cards,
    addressInputs,
    companyTextLabel,
    username,
    address,
    company
  );
})();

tableContent.addEventListener('click', async td => {
  let data = await getUsers(url);
  let userId = td.target.parentNode.querySelectorAll('td')[0].innerText;
  let [{username, address, company}] = data.filter(user => user.id == userId)
  loadDataCard(
    cards,
    addressInputs,
    companyTextLabel,
    username,
    address,
    company
    );
 });

Buttons.selectedButton(
  cards,
  addressInputs,
  btnNexPrevious,
  companyTextLabel,
  getUsers(url)
);
