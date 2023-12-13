var express = require ('express')
var bodyParser = require ('body-parser')
var cors = require('cors') 

const app = express()

app.use((request,response,next)=>{
    //Permite especificar quem poderá acessar a API (* = liberar acesso público, 'IP' = liberar acesso apenas para aquela máquina)
    response.header('Acess-Control-Allow-Origin','*');

    //Permite especificar como a API será requisitada (GET, POST, PUT e DELETE)
    response.header('Acess-Control-Allow-Methods','GET');

    //Ativa as configurações de permissão no cors
    app.use(cors());


    next();
})


app.get('/produtos/pizzas', cors(), async function(request, response, next){

    let  = require('./funcoes.js')
    let pizzas = controleEstadosCidades.getListaDeEstados()
    response.json(pizzas);
    response.status(200);
}) 