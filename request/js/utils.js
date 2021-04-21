
const nextUser =(data, current) => {

  if (current === (data.length-1)){
    return data[data.length-1];
  }else{
    return data[++current];
  }
}

const previusUser = (data, current) =>{

  if (current === 0){
    return  data[0];
  }else{
    return  data[--current];
  }
}

const test = data =>{

  return data

}

//Marcar a usuario atual na tabela quando o botão next e previus forem pressionados