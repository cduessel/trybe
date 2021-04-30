# Instanciando a classe Dict
employee_registry = {}
dict1 = {}
dict2 = dict()

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = 'name1'
employee_registry[23] = 'name2'
employee_registry[10] = 'name3'
employee_registry[9] = 'name4'
print(employee_registry)

dict3 = {1: 'name1', 2: 'name2'}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = 'name30'
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")

# Consulta e Remoção
# Se a chave não existir no dict, causa erro
name = dict1[14]
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")

double = {i: i*2 for i in range(3, 21)}

print(double)

count_chars = {}

for char in str:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

print(count_chars)
