const hoverSelectedUser = (trEl, nextUser, actualUser) => {
 [...trEl].map(el => {
    if(nextUser == el.querySelectorAll('td')[2].innerText){
        el.classList.toggle('trSelected');
    }
    if(actualUser.innerText == el.querySelectorAll('td')[2].innerText){
      el.classList.toggle('trSelected');
      el.classList.remove('trSelected');
    }
  });

console.log('atual: ',actualUser.innerText, 'proximo: ', nextUser);
console.log(trEl);
}

export default hoverSelectedUser;


