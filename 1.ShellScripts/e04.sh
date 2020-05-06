#!/bin/bash

# Escreva um Shell Script que verifique se o caminho até um arquivo existe (“file path”). Se ele existir, imprima na tela a mensagem: "O caminho _ está habilitado!". Então, verifique se você tem permissão de escrita no arquivo. Se tiver, mostre a mensagem: "Você tem permissão para editar _". Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _". O _ nas mensagens deve ser substituído pelo (“file path”)
path="/home/scripts/teste.sh"

if [ -e "$path" ]
  then
     echo "O caminho $path está habilitado!"
fi
if [ -w "$path" ]
  then
    echo "Você tem permissão para editar $path"
  else
    echo "Você NÃO foi autorizado a editar $path"
fi
  