const cards = (
  cardsElements,
  addressInput,
  companyTextElements,
  username,
  address,
  company
) => {

  [...cardsElements].map(({id }) =>{
    if (id== 'address'){
      [...addressInput].map(input => {
        switch (input.id) {
          case 'street':
            input.value = address.street;
            break;
          case 'suite':
            input.value = address.suite;
            break;
          case 'city':
            input.value = address.city;
            break;
          case 'zipcode':
            input.value = address.zipcode;
            break;
          default:
            input.innerHTML = username;
            break;
        }
      });
    }else{
      [...companyTextElements].map(textLabel => {
        switch (textLabel.id) {
          case 'company-name':
            textLabel.innerHTML = company.name;
            break;
          case 'bs':
            textLabel.innerHTML = company.bs;
            break;
          default:
            textLabel.innerHTML = company.catchPhrase;
            break;
        }
      });
    }
  });
}

export default cards;
