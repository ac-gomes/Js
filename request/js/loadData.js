const loadDataTable = async (data, table) =>{
  let userData = await data;
  for (let user of userData){
  let row = `
        <tr class="tr-rows">
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.website}</td>
        </tr>`
    table.innerHTML += row
  }

}

export default loadDataTable;