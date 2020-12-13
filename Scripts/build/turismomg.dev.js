(function () {
  'use strict';

  var cityList = [{
    cidade: "Belo Horizonte",
    images: [{
      source: "https://razoesparaacreditar.com/wp-content/uploads/2020/04/estadio-mineirao-solar-scaled.jpg",
      alt: "Vista aérea mineirão"
    }, {
      source: "https://content.skyscnr.com/m/36952f0d33b958e7/original/GettyImages-186133603.jpg?resize=1800px:1800px&quality=100",
      alt: "Igreja São Francisco de Assis (Igrejinha da Pampulha)"
    }, {
      source: "https://www.pracadopapa.com.br/wp-content/uploads/2018/06/praca-do-papa-11851976838886621.jpg",
      alt: "Praça do Papa"
    }, {
      source: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQieThKW2SyVqomSrKyBEL6DFfZ6FAQinTGgg&usqp=CAU",
      alt: "Mercado Central"
    }]
  }, {
    cidade: "Ouro Preto",
    images: [{
      source: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLByln7wWIOPeu6C_Q1-9U_AndCMMwP6_Nog&usqp=CAU",
      alt: "Igreja com serra ao fundo"
    }, {
      source: "https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/04/ouro-preto.jpg",
      alt: "Igreja com serra ao fundo"
    }, {
      source: "https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/34201/show/igreja-de-sao-francisco-de-assis.jpg",
      alt: "Igreja de São Francisco de Assis"
    }, {
      source: "https://i.pinimg.com/originals/bb/5d/3b/bb5d3b5dc211d0924dfa157f27530ced.jpg",
      alt: "Vista Superior da Cidade"
    }, {
      source: "https://partiupelomundo.com/wp-content/uploads/2016/04/Ouro-Preto-Brasil-Minas-e1459627063258.jpg",
      alt: "Vista da rua"
    }]
  }, {
    cidade: "Mariana",
    images: [{
      source: "https://www.fundacaorenova.org/wp-content/uploads/2019/03/saude-vocal-mariana-site.jpg",
      alt: "Vista aérea"
    }, {
      source: "https://cdnstatic8.com/viagensecaminhos.com//wp-content/uploads/2010/09/mariana-minas-gerais.jpg",
      alt: "Duas Igrejas"
    }, {
      source: "https://www.fundacaorenova.org/wp-content/uploads/2019/04/rodada-negocios-mariana-site.jpg",
      alt: "Vista da rua"
    }, {
      source: "https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/34413/show/mariana.jpg",
      alt: "Igreja"
    }, {
      source: "https://outrosrelatos.com.br/wp-content/uploads/2017/04/pra%C3%A7a-da-se-mariana.jpg",
      alt: "Praça da Sé"
    }]
  }, {
    cidade: "Tiradentes",
    images: [{
      source: "https://www.pacodolavradio.com.br/wp-content/uploads/2018/06/igreja-matriz-de-santo-antonio-tiradentes-mg.jpg",
      alt: "Igreja Matriz de Santo Antonio"
    }, {
      source: "https://ladica.com.br/wp-content/uploads/2016/04/Cidade-De-Tiradentes-a-beleza-da-arquitetura-Barroca-1050x743.jpg",
      alt: "Subida para Igreja Matriz"
    }, {
      source: "https://lirp-cdn.multiscreensite.com/36e30871/dms3rep/multi/opt/igreja-nossa-senhora-do-rosc3a1rio-640w.jpg",
      alt: "Igreja Nossa Senhora do Rosario"
    }, {
      source: "https://www.vli-logistica.com.br/wp-content/uploads/2017/12/Trem_Turistico_VLI-10-ajustes.jpg",
      alt: "Maria Fumaça"
    }, {
      source: "https://irp-cdn.multiscreensite.com/36e30871/dms3rep/multi/Chafariz+Tiradentes.jpg",
      alt: "Chafariz de São José"
    }]
  }, {
    cidade: "Carrancas",
    images: [{
      source: "https://turismodeminas.com.br/wp-content/uploads/2017/01/IMG_8570.jpg",
      alt: "Centro histórico"
    }, {
      source: "https://i.pinimg.com/originals/fc/d3/ab/fcd3abfc94194369173bc73b5fd34e7a.jpg",
      alt: "Cachoeira da Esmeralda"
    }, {
      source: "https://www.carrancas.com.br/cachoeiras/images/portfolio_toca/12_g.jpg",
      alt: "Poço do Coração"
    }, {
      source: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Cachoeira_da_Fuma%C3%A7a_%28Carrancas%29.jpg",
      alt: "Cachoeira da Fumaça"
    }, {
      source: "https://media-cdn.tripadvisor.com/media/photo-s/0f/01/a7/98/cachoeira-do-salomao.jpg",
      alt: "Cachoeira do Salomão"
    }]
  }, {
    cidade: "Diamantina",
    images: [{
      source: "https://magazine.zarpo.com.br/wp-content/uploads/2019/02/Roteiro-de-1-Dia-em-Diamantina-1.jpg",
      alt: "Catedral de Santo Antônio da Sé"
    }, {
      source: "https://www.minasecoturismo.com.br/wp-content/uploads/2018/08/Mercado-Velho-em-Diamantina-MG-1.jpg",
      alt: "Mercado Velho"
    }, {
      source: "https://www.minasgerais.com.br/imagens/atracoes/1504184891nnUWbQFHII.jpg",
      alt: "Casa de Juscelino Kubitschek"
    }, {
      source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Igreja_da_Ordem_Terceira_de_Nossa_Senhora_do_Monte_do_Carmo.JPG/1024px-Igreja_da_Ordem_Terceira_de_Nossa_Senhora_do_Monte_do_Carmo.JPG",
      alt: "Igreja de Nossa Senhora do Carmo"
    }, {
      source: "https://media-cdn.tripadvisor.com/media/photo-s/0d/06/7d/71/casa-da-xica-da-silva.jpg",
      alt: "Casa de Chica da Silva"
    }]
  }, {
    cidade: "Brumadinho",
    images: [{
      source: "https://diariodocomercio.com.br/wp-content/uploads/2019/02/Inhotim.jpg",
      alt: "Inhotim"
    }, {
      source: "https://media-cdn.tripadvisor.com/media/photo-s/0c/5f/41/30/igreja-nossa-senhora.jpg",
      alt: "Igreja Nossa Senhor da Piedade"
    }, {
      source: "https://lh3.googleusercontent.com/proxy/EvupncCNkAODwx30B1x5xZZ6ko6R5Knp5aL1jo9MZbl34I7XhkjIAR46R7gtyhbJ4eeo_HeZgE_c7-6Ocplbl5G-haBeFjCevi62mlHUaRqC0ZI0dMeDQZ8F4Kr1tfBp1QxmCdYy4nXIiFSuR-ejefdJRimtuMrFM_tHC1NMUemeBLkFAY-nD07fwISLYL4dOre6Hsubm2aZsCrjDUoQqjASKLWJAJObcA",
      alt: "Fazenda dos Martins"
    }, {
      source: "https://lh3.googleusercontent.com/proxy/0iv1nsAjWuptujmZuTI3s7mMqRhrG_X7MhB2N1VrhJdTz_QgHgzr_7qTLSt6V9G8Jc-gQ9-hgqwzMLrnRMA0fJXwnSorTYbshfbroEbYaoNYL7q6yYNmvN5mAbP0c5WXYgoZo4XJhSgEZMJzkUfof7W3a-wguRF6ngj2QpbuOnDMqZRULrTr6mbPuAkN3VqJQw-aBSna7-YeFsyWNAWJ11n_71eSWA",
      alt: "Serra da Calçada"
    }, {
      source: "https://viajento.files.wordpress.com/2020/06/cachoeira-da-ostra-casa-branca-brumadinho.jpg",
      alt: "Cachoeira da Ostra"
    }]
  }, {
    cidade: "Monte Verde",
    images: [{
      source: "https://i2.wp.com/documentodeviagem.com/wp-content/uploads/2020/02/Shopping-Center-Celeiro-monte-verde-documento-de-viagem-5_edited.jpg?resize=800%2C445&ssl=1",
      alt: "Shopping Celeiro"
    }, {
      source: "https://img.r7.com/images/2014/03/14/3l6jzgilrf_4w8osdq4bu_file.jpg?dimensions=660x360",
      alt: "Vista da rua"
    }, {
      source: "https://monteverde.org.br/wp-content/uploads/2017/06/Pedra-Redonda-Drone-850x491.jpg",
      alt: "Pedra redonda"
    }, {
      source: "https://media-cdn.tripadvisor.com/media/photo-s/06/f6/ac/b3/igreja-de-sao-francisco.jpg",
      alt: "Igreja de São Francisco de Assis"
    }, {
      source: "https://cdnstatic8.com/viajandonajanela.com//wp-content/uploads/2019/03/monte-verde-mg-o-que-fazer-vnj-1-de-1-4.jpg",
      alt: "Vila Europa"
    }]
  }, {
    cidade: "Cordisburgo",
    images: [{
      source: "https://www.transportal.com.br/noticias/wp-content/uploads/2018/11/Casa-Elefante-em-Cordisburgo.jpg",
      alt: "Casa Elelefante"
    }, {
      source: "https://media-cdn.tripadvisor.com/media/photo-s/09/38/e2/45/capela-sao-jose.jpg",
      alt: "Capela São José"
    }, {
      source: "https://www.casadedoda.com/wp-content/uploads/2017/07/cordisburgo-mg-igreja-matriz-sagrado-coracao-2.jpg",
      alt: "igreja matriz"
    }, {
      source: "https://www.viagenspossiveis.com.br/wp-content/uploads/2018/05/Gruta-do-Maquine-MG-8.jpg",
      alt: "Gruta de Maquiné"
    }, {
      source: "https://i1.wp.com/www.conhecendomuseus.com.br/wp-content/uploads/2016/06/Fachada-1-1.png?resize=748%2C350",
      alt: "Museu Cas Guimarães Rosa"
    }]
  }, {
    cidade: "Poços de Caldas",
    images: [{
      source: "https://media-cdn.tripadvisor.com/media/photo-s/17/9a/15/99/cristo.jpg",
      alt: "Cristo"
    }, {
      source: "https://upload.wikimedia.org/wikipedia/commons/0/07/V%C3%A9u_das_Noivas%2C_Po%C3%A7os_de_Caldas_-_MG_%285711207139%29.jpg",
      alt: "Cachoeira Veu das Noivas"
    }, {
      source: "https://www.pocosja.com.br/divirta-se/wp-content/uploads/2016/11/1480102458acf3e992fe4f9c440221d7341524ba40.jpg",
      alt: "Fonte dos amores"
    }, {
      source: "https://www.feriasbrasil.com.br/fotosfb/696850170-MOB.jpg",
      alt: "Recanto Japones"
    }, {
      source: "https://turismopocosdecaldas.com.br/wp-content/uploads/2019/08/po%C3%A7os.jpg",
      alt: "Relogio Floral"
    }]
  }];

  var cityImage = _ => "<div class=\"img-ct\">\n    <img src=\"".concat(_.src, "\" alt=\"").concat(_.alt, "\">\n</div>");
  /*
    Módulo responsável pela injeção de conteúdo nas páginas de cidades
  */


  var citySingle = () => {
    /*
      Detecta se a página atual é uma página de cidade e, se sim, injeta o conteúdo adequado
    */
    var cityPayload = getCity(); // Se o cityPayload não for null, executa o código

    if (cityPayload) {
      // Recupera Nodes
      var cityNameNode = document.querySelector('#cityName');
      var cityDetailsNode = document.querySelector('#cityDetails');
      var cityInfoNode = document.querySelector('.slider-city');
      var heroNode = document.querySelector('.landing-page'); // Injeta nome e detalhes da cidade - Caso não existam no payload da cidade, injeta 'Conheça mais'

      cityNameNode.textContent = cityPayload.cidade || 'Conheça mais';
      cityDetailsNode.textContent = cityPayload.details || 'Conheça mais'; // Recupera array de imagens da cidade

      var imageList = cityPayload.images; // Usa primeira imagem da cidade como imagem de fundo

      var backgroundImage = imageList.shift();
      heroNode.setAttribute('style', "background-image: url('".concat(backgroundImage.source, ")'")); // Para cada imagem restante, insere na página

      injectImages(imageList, cityInfoNode);
    }
  };

  var getCity = () => {
    /*
      Procura por parâmetros na URL da página que fazem referência à cidade e, se encontrar,
      retorna as informações sobre a cidade
    */
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString); // Se o parâmetro cidadeId não existir ou se o Id for inválido, retorna null
    // Se não, retorna a cidade correspondente

    var cityId = urlParams.get('cidadeId');
    return !cityId || cityId < 0 || cityId > cityList.length - 1 ? null : cityList[cityId];
  };

  var injectImages = (imageList, targetElement) => {
    /*
      Injeta no DOM as imagens de um array
    */
    var imageNodes = []; // Constrói array com nodes

    imageList.forEach(image => {
      imageNodes.push(cityImage({
        src: image.source,
        alt: image.alt
      })).code;
    }); // Injeta os nodes, um a um, no DOM

    imageNodes.forEach(node => {
      targetElement.insertAdjacentHTML('afterbegin', node);
    });
    initCitySlider();
  };

  var initCitySlider = () => {
    $('.slider-city').slick({
      centerMode: false,
      centerPadding: '60px',
      slidesToShow: 1,
      acessibility: true,
      autoplay: true,
      autoplaySpeed: 11000,
      adaptiveHeight: true,
      prevArrow: $('.slider-arrows.-ct>.slider-previous'),
      nextArrow: $('.slider-arrows.-ct>.slider-next'),
      responsive: [{
        breakpoint: 1024,
        settings: {
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    });
  };

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
  /*
    Módulo responsável pela busca por voos e injeção de conteúdo para a calculadora de gastos
  */


  var calculateExpenses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      /*
        Função principal que injeta os gastos projetados na calculadora
      */
      // Recuperando dados da página
      var originCityId = document.querySelector('#come-from').value;
      var departureDate = document.querySelector('#dateGo').value;
      var returnDate = document.querySelector('#dateReturn').value;
      var accommodationType = document.querySelector('#places-btn').value;
      var loadingNode = document.querySelector('#calcLoading');
      var resultNode = document.querySelector('.calc-results'); // Valida os dados enviados antes de processá-los

      var flightValid = originCityId.includes('-sky') || departureDate.length === 10;
      var accommodationValid = accommodationType.length > 2;

      if (!flightValid || !accommodationValid) {
        window.alert('Os dados que você inseriu são inválidos.');
        return null;
      } // Limpa a div de resultado e exibe o loading


      loadingNode.classList.add('-show');
      resultNode.classList.remove('-show'); // Chamando callbacks de voos

      var flightOutboundInfo = yield getFlightPrice(originCityId, 'BHZA-sky', departureDate);
      var flightInboundInfo = yield getFlightPrice('BHZA-sky', originCityId, returnDate); // Validando dados da resposta dos voos

      if (!flightInboundInfo.success || !flightOutboundInfo.success) {
        window.alert('A busca por um voo retornou um erro.');
      } // Gera valor estimado para estadia


      var accommodationCost = getEstadiaPrice(departureDate, returnDate, accommodationType); // Renderiza os resultados

      showCalcResults(flightInboundInfo.data, flightOutboundInfo.data, accommodationCost);
      loadingNode.classList.remove('-show');
      resultNode.classList.add('-show');
    });

    return function calculateExpenses() {
      return _ref.apply(this, arguments);
    };
  }();

  var getFlightPrice = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (originCity, destinationCity, date) {
      /*
        Função que busca pela API do FlightScanner o preço da viagem
      */
      var baseUrl = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/BR/BRL/pt-BR';
      var isSuccess, data; // Valida se as informações estão corretas

      if (!originCity.includes('-sky') || !destinationCity.includes('-sky') || date.length !== 10 || destinationCity === originCity) {
        isSuccess = false;
      } else {
        yield fetch("".concat(baseUrl, "/").concat(originCity, "/").concat(destinationCity, "/").concat(date), {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'x-rapidapi-key': '360f42a35fmshffac9dd4d1ad0ebp1c2740jsn0efbb3666498'
          }
        }).then( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(function* (response) {
            isSuccess = true;
            data = yield response.json();
          });

          return function (_x4) {
            return _ref3.apply(this, arguments);
          };
        }()).catch(err => {
          isSuccess = false;
          console.log(err);
        });
      }

      return {
        success: isSuccess,
        data: data
      };
    });

    return function getFlightPrice(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getEstadiaPrice = (start, end, accomodationType) => {
    /*
      Função que retorna o gasto estimado com estadia, com base no período informado e no tipo de acomodação
    */
    var startDate = Date.parse(start);
    var endDate = Date.parse(end);
    var timeDelta = Math.floor((startDate - endDate) / 1000 / 60 / 60 / 24);
    var multiplier = 0;

    switch (accomodationType) {
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

  var showCalcResults = (inboundFlightResponse, outboundFlightResponse, accomodationCost) => {
    /*
      Função que injeta na página os resultados da calculadora
    */
    var outboundFlightNode = document.querySelector('#calc-results-outbound');
    var inboundFlightNode = document.querySelector('#calc-results-inbound');
    var accomodationNode = document.querySelector('#calc-results-accomodation');
    var totalNode = document.querySelector('#calc-results-total'); // Verifica se foram encontrados voos

    var outboundValue = outboundFlightResponse.Quotes.length >= 1 ? outboundFlightResponse.Quotes[0].MinPrice : 0;
    var inboundValue = inboundFlightResponse.Quotes.length >= 1 ? inboundFlightResponse.Quotes[0].MinPrice : 0;
    outboundFlightNode.textContent = "".concat(outboundValue > 0 ? 'R$ ' + String(outboundValue) : 'Voo não encontrado.');
    inboundFlightNode.textContent = "".concat(inboundValue > 0 ? 'R$ ' + String(inboundValue) : 'Voo não encontrado.');
    accomodationNode.textContent = "R$ ".concat(accomodationCost);
    totalNode.textContent = "R$ ".concat(inboundValue + outboundValue + accomodationCost);
  };

  var searchResultItem = _ => "<a href=\"".concat(_.url, "\" target=\"_self\">").concat(_.city, "</a>");
  /*
    Componente de busca por cidades
  */


  var searchBox = () => {
    /*
      */
    // Recupera os nodes
    var searchBoxNode = document.querySelector('.search-box');
    var searchInputNode = document.querySelector('.search-text');
    var resultBoxNode = document.querySelector('#searchResultBox'); // Se os nodes existirem, executa o código

    if (searchBoxNode && searchInputNode) {
      if (searchInputNode.value) {
        var searchResults = searchCities(searchInputNode.value);
        injectSearchResults(searchResults);
        resultBoxNode.classList.add('-show');
      } else {
        resultBoxNode.classList.remove('-show');
      }
    }
  };

  var searchCities = searchParam => {
    /*
      Busca no array de cidades pelo termo informado e retorna um array com os resultados
    */
    var searchResults = []; // Para cada cidade na lista, checa se o nome (em lower case) contém o parâmetro (em lower case)

    cityList.forEach((city, index) => {
      if (city.cidade.toLowerCase().includes(searchParam.toLowerCase())) {
        searchResults.push({
          name: city.cidade,
          id: index
        });
      }
    });
    return searchResults;
  };

  var injectSearchResults = results => {
    /*
      A partir do payload com os resultados da busca, injeta os resultados na caixa de busca
    */
    var searchResultsNode = document.querySelector('#searchResultBox');
    var resultCountNode = document.querySelector('.result-count'); // Insere a quantidade de resultados encontrados no contador

    var resultCounterText = results.length === 0 ? 'Nenhum resultado encontrado' : "".concat(results.length, " resultados encontrados:");
    resultCountNode.textContent = resultCounterText; // Remove os nodes de resultado antigos

    var oldResultNodes = [...document.querySelectorAll('#searchResultBox>a')];
    oldResultNodes.forEach(node => {
      node.parentNode.removeChild(node);
    }); // Para cada resultado encontrado, insere um node na caixa de resultados

    results.forEach(result => {
      var node = searchResultItem({
        url: "cidade.html?cidadeId=".concat(result.id),
        city: result.name
      });
      searchResultsNode.insertAdjacentHTML('beforeend', node);
    });
  }; // ====== Imports


  var searchInputNode = document.querySelector('.search-text');
  var calculatorBtn = document.querySelector('#submitCalc');

  if (searchInputNode) {
    searchInputNode.addEventListener('keyup', searchBox);
  }

  if (calculatorBtn) {
    calculatorBtn.addEventListener('click', calculateExpenses);
  } // Código a ser executado caso seja uma single de cidade


  citySingle();
})();
