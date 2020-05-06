#!/bin/bash

data=$(date +%Y)

for nomes in `ls *.png`
do mv $nomes $data-$nomes
done