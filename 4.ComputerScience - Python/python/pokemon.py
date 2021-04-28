import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    pokemons = json.loads(content)["results"]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[3])  # imprime o primeiro pokemon da lista

# ou:
# import json


# with open("pokemons.json") as file:
#    pokemons = json.load(file)["results"]

# print(pokemons[0])  # imprime o primeiro pokemon da lista
