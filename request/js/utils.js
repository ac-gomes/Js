const hoverSelectedUser = (trEl,user) => {

 let userfill = [...trEl].map(el => el.querySelectorAll('td')[2].innerText)
 .filter(filteredUser => user == filteredUser);
  console.log(userfill[0]);
}
export default hoverSelectedUser;

//Marcar o usuario atual na tabela quando o botão next e previus forem pressionados

