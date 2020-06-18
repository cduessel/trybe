#!/bin/bash

read -p "digite sua idade: " num1

read -p "digite a idade de sua mae :" num2

echo "scale=2;$num1 / $num2" | bc


