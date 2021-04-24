import getUsers from "./dataSource.js";
import loadDataTable from "./loadData.js";
import loadDataCard from "./crads.js";
import Buttons from "./buttons.js";

let url = "../data/dataSource.json"
//let url ='https://jsonplaceholder.typicode.com/users'

const trEl = document.getElementsByClassName('tr-rows');
const tableContent = document.querySelector("#table-content");
const cards = document.getElementsByClassName('card');
const addressInputs = document.getElementsByClassName('address-input');
const companyTextLabel = document.getElementsByClassName('company-label');
const btnNexPrevious = document.querySelectorAll('.actions');

//Initialize
(async () => {

  let data = await getUsers(url);
  let [{username, address, company}] = data;

  loadDataTable(data, tableContent);
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
  let [{username, address, company}] = data.filter(user => user.id == userId);

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
  trEl,
  cards,
  addressInputs,
  btnNexPrevious,
  companyTextLabel,
  getUsers(url)
);

window.addEventListener("load",_ =>{
  document.getElementById('spinner-wrapper').style.display = "none";
})
