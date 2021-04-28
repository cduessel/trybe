# Conjunto = {}

# for i in range(1000):
#     Conjunto[i] = False

# print (Conjunto)

class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjuntoB):
        #  retorno: outro objeto Conj. com união do próprio obj com conjuntoB
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    conj = Conjunto()
    for item in [0, 10, 100, 1000]:
        conj.add(item)
    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conjA = Conjunto()
    for i in range(1, 11):
        conjA.add(i)

    conjB = Conjunto()
    for i in range(10, 21):
        conjB.add(i)

    conjC = conjA.union(conjB)
    print(conjC)

    conjX = Conjunto()
    for i in [1, 2, 3]:
        conjX.add(i)

    conjY = Conjunto()
    for i in [7, 2, 10]:
        conjY.add(i)

    conjZ = conjX.intersection(conjY)
    print(conjZ)
