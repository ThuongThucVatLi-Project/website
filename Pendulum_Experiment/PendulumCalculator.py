from math import pi
def data(): 
    p_list = [] #list of values of the period of oscillation
    l_list = [] #list of values of the length of the rope
    print("Enter values for length and then the period of oscillation corresponding to that; type 'done' when finished")
    print("NOTE: The values should be seperated by a space inbetween")
    while True:
        dummy = input('')
        if dummy.lower() == 'done':
            break
        try:
            l_string ,p_string = dummy.split()
            if float(l_string) == 0 or float(p_string) == 0:
                print("Invalid input, try again.")
            else:
                p_list.append(float(p_string))
                l_list.append(float(l_string))
        except ValueError:
            print('Invalid input, try again.')
    return l_list, p_list

def avg(values): #calc average value of a list
    val = []
    for value in values:
        if value is not None:
            val.append(value)
    if not val:
        return 0
    return sum(val)/len(val)

def error(values, average): #Calculate the absolute error of any list using the list and its average value, then output a list of absolute error
    abs_error_list = []
    for value in values:
        if value is not None:
            abs_error_list.append(abs(average - value))
    if not abs_error_list:
        return None
    return abs_error_list #The reason we're outputting this as a list is that we can reuse the average function above to find the average absolute error

def gcalc(l_list, p_list): #Calculate using inputs from length and period list, then outputs a list of values of g corresponding to each pairs of leng and period
    g_list = []
    for l, p in zip(l_list, p_list): #zip(list1, list2) pair elements in both list into tuples 
        try:
            g_list.append(4*(pi**2)*l/(p**2))
        except ZeroDivisionError:
            g_list.append(None)
    return g_list

if __name__ == "__main__": #Checks if the script is being run as the main program or is it just being imported as a module into another program
    l_list, p_list = data()
    g_list = gcalc(l_list, p_list)
    print("DATA COLLECTED, THANK YOU")
    print("Length : ", l_list)
    print("Period : ", p_list)
    avg_l = avg(l_list)
    avg_p = avg(p_list)
    avg_g = avg(g_list)
    error_l = avg(error(l_list, avg_l)) 
    error_p = avg(error(p_list, avg_p))
    error_g = avg(error(g_list, avg_g))
    print("Calculation Completed:")
    print(f'\n L = {avg_l:.4f} ± {error_l:.4f} m')
    print(f'\n T = {avg_p:.4f} ± {error_p:.4f} s')
    print(f'\n g = {avg_g:.4f} ± {error_g:.4f} m/s²')