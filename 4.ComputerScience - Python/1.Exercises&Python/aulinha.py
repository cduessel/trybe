import random
from timeit import timeit


def random_values(n):
    lista_de_medias = []
    for i in range(n):
        soma_media = 0
        for j in range(n):
            soma_media += random.randint(1, 10)
            media = soma_media//10
            lista_de_medias.append(media)

    return lista_de_medias


for n in [10, 100, 1000]:
    def random_values_time_it():
        random_values(n)
        print(timeit(random_values_time_it, number=20))
