"""
Author: Marcos Oliveira
Github: https://github.com/the-physicist
Date:   18/10/21
"""

# 6 - Faça um Programa que peça o raio de um círculo, calcule e mostre sua área. 

import math

raio = float(input("Digite o raio do circulo: "))

pi = 3.14159
area = pi * pow(raio, 2) #raio**2

print("A area do círculo é ", area)
