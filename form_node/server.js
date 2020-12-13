var app = require('./custom-express');

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('servidor rodando na porta ' + (process.env.APP_PORT || '3000'));
});