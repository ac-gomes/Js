import loadDataCard from "./crads.js";
import hoverSelectedUser from "./utils.js";

const selectedButton = async (
  trEl,
  cardsEl,
  inputsEl,
  buttons,
  companyLabel,
  data
) => {
  let userData = await data;

  for (let btn of buttons) {
    btn.addEventListener('click', action =>{
      let actualUserName = document.getElementById('user-name')
      const userIndex = userData.findIndex(user => user.username === actualUserName.innerText);

      if(action.target.className.split(' ')[1] =='next'){
        let {username,address,company} = nextUser(userData,userIndex);

        hoverSelectedUser(trEl,username,actualUserName);
        loadDataCard(
          cardsEl,
          inputsEl,
          companyLabel,
          username,
          address,
          company
        );
      } else {
        let {username,address,company} = previusUser(userData,userIndex);
        hoverSelectedUser(trEl,username,actualUserName);
        loadDataCard(
          cardsEl,
          inputsEl,
          companyLabel,
          username,
          address,
          company
        );
      }
    });
  }
}

function nextUser (data, current){
  if (current === (data.length-1)){
    return data[data.length-1]
  }else{
    return data[++current]
  }
}

function previusUser(data, current){
    if (current === 0){
      return data[0]
    }else{
      return data[--current]
    }
  }

const buttons = {
  selectedButton
}

export default buttons;
