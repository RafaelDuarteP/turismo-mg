(function () {
  'use strict';

  var cityImages = [{
    cidade: "Belo Horizonte",
    images: [{
      source: "https://lh3.googleusercontent.com/proxy/WxOEzxIEMLaJF6yGHOQrvQ9ILES05eydrScGA7EJyeCoZSAvMVMwowux_YAfPlSV8b-jVtERDW6l8keOrxdYC9F1pylvfjxhUgtkVlimsmXY",
      alt: "Vista aérea mineirão"
    }, {
      source: "https://content.skyscnr.com/m/36952f0d33b958e7/original/GettyImages-186133603.jpg?resize=1800px:1800px&quality=100",
      alt: "Igreja São Francisco de Assis (Igrejinha da Pampulha)"
    }]
  }, {
    cidade: "Ouro Preto",
    images: [{
      source: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLByln7wWIOPeu6C_Q1-9U_AndCMMwP6_Nog&usqp=CAU",
      alt: "Igreja com serra ao fundo"
    }, {
      source: "https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/04/ouro-preto.jpg",
      alt: "Igreja com serra ao fundo"
    }]
  }]; // ====== Imports

  cityImages.forEach(city => {
    console.log(city);
  });
})();
