#!/bin/bash

file="digite nome do arquivo"
read file

if [ -e $file ]
then 
    echo "o caminho $file está habilitado"
else
    echo "não existe"
fi

if [ -w $file ]
    then echo "vc tem permissao para editar"
    else echo "nao pode editar"
fi
