#!/bin/bash

#Escreva um Shell Script que receba um diretório como argumento (ou parâmetro). Se o argumento não for um diretório, mostre a mensagem: "O argumento _ não é um diretório!". Se o argumento for um diretório, conte quantos arquivos existem nele e mostre a seguinte mensagem: "O _ tem _ arquivos.", em que você deve substituir os "_" pelo diretório e a quantidade de arquivos nele, respectivamente.

DIRECTORY=$1
if [ -d "$DIRECTORY" ]
  then
    FILES=`ls -l $DIRECTORY | wc -l`
    echo "O $DIRECTORY tem $FILES arquivos."
else
    echo "O argumento $DIRECTORY não é um diretório!"
fi
  
