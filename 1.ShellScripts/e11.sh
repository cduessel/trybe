#!/bin/bash

dir=$1
ext=$2

for nomes in `ls /$dir *$ext`
do 
    if [ $nomes -f ]
    then mv $nomes "v2"$nomes && echo $nomes "virou" "v2"$nomes
    else echo $nomes "não é arquivo"
    fi
done