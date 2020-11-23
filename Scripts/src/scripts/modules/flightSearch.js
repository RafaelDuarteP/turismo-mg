/*
  Módulo responsável pela busca por voos e injeção de conteúdo para a calculadora de gastos
*/


const calculateExpenses = async () => {
  /*
    Função principal que injeta os gastos projetados na calculadora
  */

  // Recuperando dados da página
  const originCityId = document.querySelector('#come-from').value;
  const departureDate = document.querySelector('#dateGo').value;
  const returnDate = document.querySelector('#dateReturn').value;
  const accommodationType = document.querySelector('#places-btn').value;
  const loadingNode = document.querySelector('#calcLoading');
  const resultNode = document.querySelector('.calc-results');

  // Valida os dados enviados antes de processá-los
  const flightValid = (originCityId.includes('-sky') || departureDate.length === 10);
  const accommodationValid = (accommodationType.length > 2);
  if(!flightValid || !accommodationValid) {
    window.alert('Os dados que você inseriu são inválidos.');
    return null;
  }

  // Limpa a div de resultado e exibe o loading
  loadingNode.classList.add('-show');
  resultNode.classList.remove('-show');

  // Chamando callbacks de voos
  const flightOutboundInfo = await getFlightPrice(originCityId, 'BHZA-sky', departureDate);
  const flightInboundInfo = await getFlightPrice('BHZA-sky', originCityId, returnDate);
  // Validando dados da resposta dos voos
  if(!flightInboundInfo.success || !flightOutboundInfo.success) {
    window.alert('A busca por um voo retornou um erro.');
  }

  // Gera valor estimado para estadia
  const accommodationCost = getEstadiaPrice(departureDate, returnDate, accommodationType);

  // Renderiza os resultados
  showCalcResults(flightInboundInfo.data, flightOutboundInfo.data, accommodationCost);
  loadingNode.classList.remove('-show');
  resultNode.classList.add('-show');
  
};



const getFlightPrice = async (originCity, destinationCity, date) => {
  /*
    Função que busca pela API do FlightScanner o preço da viagem
  */

  const baseUrl = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/BR/BRL/pt-BR';
  let isSuccess, data;

  // Valida se as informações estão corretas
  if(!originCity.includes('-sky') || !destinationCity.includes('-sky') || date.length !== 10 || destinationCity === originCity) {
    isSuccess = false;
  }
  else{
    await fetch(`${baseUrl}/${originCity}/${destinationCity}/${date}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '360f42a35fmshffac9dd4d1ad0ebp1c2740jsn0efbb3666498'
      }
    })
      .then(async response => {
        isSuccess = true;
        data = await response.json(); 
      })
      .catch(err => {
        isSuccess = false;
        console.log(err);
      });
  }

  return {
    success: isSuccess,
    data: data
  };
};



const getEstadiaPrice = (start, end, accomodationType) => {
  /*
    Função que retorna o gasto estimado com estadia, com base no período informado e no tipo de acomodação
  */

  const startDate = Date.parse(start);
  const endDate = Date.parse(end);

  const timeDelta = Math.floor((startDate - endDate) / 1000 / 60 / 60 / 24);

  let multiplier = 0;

  switch(accomodationType) {
  case 'hotel':
    multiplier = 100;
    break;
  case 'farm-hotel':
    multiplier = 120;
    break;
  case 'cottage':
    multiplier = 120;
    break;
  case 'hostel':
    multiplier = 70;
    break;
  default:
    multiplier = 0;
  }

  return multiplier * Math.abs(timeDelta);

};



const showCalcResults = (inboundFlightResponse, outboundFlightResponse, accomodationCost) => {
  /*
    Função que injeta na página os resultados da calculadora
  */

  const outboundFlightNode = document.querySelector('#calc-results-outbound');
  const inboundFlightNode = document.querySelector('#calc-results-inbound');
  const accomodationNode = document.querySelector('#calc-results-accomodation');
  const totalNode = document.querySelector('#calc-results-total');

  // Verifica se foram encontrados voos
  const outboundValue = outboundFlightResponse.Quotes.length >= 1 ? outboundFlightResponse.Quotes[0].MinPrice : 0;
  const inboundValue = inboundFlightResponse.Quotes.length >= 1 ? inboundFlightResponse.Quotes[0].MinPrice : 0;

  outboundFlightNode.textContent = `${outboundValue > 0 ? ('R$ '+ String(outboundValue)) : 'Voo não encontrado.'}`;
  inboundFlightNode.textContent = `${inboundValue > 0 ? ('R$ '+ String(inboundValue)) : 'Voo não encontrado.'}`;
  accomodationNode.textContent = `R$ ${accomodationCost}`;
  totalNode.textContent = `R$ ${inboundValue + outboundValue + accomodationCost}`;
};

export default calculateExpenses;