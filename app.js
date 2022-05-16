const { response } = require('express');
const express = require('express')

const app = express(); //Criando uma instancia do APP com express

app.get('/',(req, res) =>{                      // Criando uma Rota dizendo que o ? será da Raiz (root)
    res.send('<h1>Minha Lista de Tarefas :) </h1>') // Dando um resposta para meu Get
})

app.listen(3000, () =>{                         // Solicitando para que o APP fique "Escutando" as modificações da porta 3000
    console.log('Servidor foi Iniciado')        // Respota genérica para auxiliar a visualiação
})

// Instalando o NodeMon paara auxiliar o monitoramento dos arquivos para quando houvr alterações ele já atualiza o servidor automático