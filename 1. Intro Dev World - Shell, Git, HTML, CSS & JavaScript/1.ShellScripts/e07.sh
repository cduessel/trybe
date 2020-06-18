#!/bin/bash

#Modifique o Shell Script do exercício anterior de forma que ele aceite o nome do arquivo ou diretório como argumento (ou parâmetro), em vez de perguntar ao usuário. Pesquise nos recursos adicionais como utilizar os parâmetros (ou argumentos) no Shell Script.

FILE=$1

if [ -f "$FILE" ]
  then
    echo "$FILE é um arquivo comum"
elif [ -d "$FILE" ]
  then
    echo "$FILE é um diretório"
else
    echo "$FILE é alguma outra coisa"
fi
ls -l $FILE
  
