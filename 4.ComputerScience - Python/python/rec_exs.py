def even_counter(num):
    counter = 0
    for item in range(num+1):
        if item % 2 == 0 and item != 0:
            counter += 1
    return counter


def rec_counter(num):
    if num == 0:
        return 0
    elif num % 2 == 0:
        return 1 + rec_counter(num-1)
    else:
        return rec_counter(num-1)


# print(rec_counter(10))


def biggest_int_calculator(lista, n):
    if n == 1:
        return lista[0]
    else:
        i = biggest_int_calculator(lista, n-1)
        if i > lista[n-1]:
            return i
        else:
            return lista[n-1]


def biggest_int(lista):
    n = len(lista)
    return biggest_int_calculator(lista, n)


print(biggest_int([3, 4, 5, 7]))
