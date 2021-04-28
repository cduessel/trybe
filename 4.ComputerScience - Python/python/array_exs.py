# ex1:

def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time

# 2


def shuffle(numbers, n):
    answer = []
    new_array_index = 0
    for index in range(n):
        answer.insert(new_array_index, numbers[index])
        new_array_index += 1
        answer.insert(new_array_index, numbers[index + n])
        new_array_index += 1
    return answer

# 3


def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer

# 4


def students_in_instant(inputs, outputs, query_number):
    answer = 0
    size = len(input)
    for index in range(size):
        if inputs[index] < query_number < outputs[size]:
            answer += 1
    return answer


# ou de uma maneira mais pythonica
def students_in_instant_2(inputs, outputs, query_number):
    answer = 0
    for input, output in zip(inputs, outputs):
        if input < query_number < output:
            answer += 1
    return answer
