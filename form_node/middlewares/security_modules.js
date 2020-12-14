const dontSniffMimetype = require('dont-sniff-mimetype'); // proteger os usuários contra vulnerabilidades de detecção de MIME.
const helmet = require('helmet');

module.exports = (app) => {
    //helmet already does this --> app.disable('x-powered-by'); //referência de que o Express/Node compõem a lista de tecnologias utilizadas, isso irá afastar rotinas mais simples de varredura e ataques automatizados;
    app.use(dontSniffMimetype());
    app.use(helmet());
}