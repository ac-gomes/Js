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
}

export default hoverSelectedUser;