# Funciones.py
# Contiene funciones varias
# Principalmente enfocadas en el tratamiento del diccionario y cadenas de texto

import unicodedata

# Transforma a minusculas las claves de un diccionario
def lowerCase(diccionario):
  nuevo_diccionario = {}
  for clave, valor in diccionario.items():
      clave = eliminar_tildes(clave).lower()
      if isinstance(valor, dict):
        valor = lowerCase(valor)  # Recursivamente transformar subdiccionarios
      nuevo_diccionario[clave.lower()] = valor
  return nuevo_diccionario

def eliminar_tildes(texto):
  # Normalizar el texto a la forma de composición de Unicode (NFD)
  texto_normalizado = unicodedata.normalize('NFD', texto)
  # Filtrar y unir solo los caracteres que no son marcas de acento
  texto_sin_tildes = ''.join(c for c in texto_normalizado if not unicodedata.combining(c))
  return texto_sin_tildes

# Eliminar el último punto de la cadena
def eliminar_punto(texto):
  if texto.endswith("."):
    return texto[:-1]
  else:
    return texto

# Función para acceder al valor en el diccionario anidado
# Otros se usa como booleano para saber si es de diccionario SPECTRUM, el cual permite categoria otros.
def obtener_id(diccionario, lista_claves, caso_SPECTRUM):
  valor = diccionario
  for clave in lista_claves:
    clave = clave.lower()
    clave = eliminar_tildes(clave)
    clave = eliminar_punto(clave)
    print(clave)
    try:
      valor = valor[clave]
    except KeyError: # Si la clave no se encuentra
      if caso_SPECTRUM: # CASO SPECTRUM
        valor = valor["otros"]
      else: # CASO CLASIFICACION y UBICACION
         valor = None
      return valor,True
  return valor,False


