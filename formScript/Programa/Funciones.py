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
  rutasClasificaciones=''
  report=False
  clasificaciones=[]
  largoClasi=len(lista_claves)

  #Con esta funcion clasificacion contiene todas las clasificaciones separadas si son mas de 1
  for i in range(largoClasi): #Funcion para separar los ; siesque es mas de 1 clasificacion.
    clasi=lista_claves[i].split(";")
    if (len(clasi)==1):
      clasificaciones.append(clasi[0])
      clasificaciones[i].lower()
      largoClasi=len(lista_claves)
    else:
      largoClasi=len(clasi)
      for i in range(largoClasi):
        porPartes=clasi[i]
        clasificaciones.append(porPartes)
        clasificaciones[i].lower()
  
  #print("clasificacion completa:",clasificaciones)
  largoClasi=len(clasificaciones)
  valor = diccionario
  otro=[] #Usado para recorrer la siguiente clasificación
  for i in range (largoClasi): #Condicion para  recorrer el largo de clasificación.
    clave = clasificaciones[i].lower()
    clave = eliminar_tildes(clave)
    clave = eliminar_punto(clave)
    if clave == "musica1":
      clave="musica"
    elif clave =="numismatica1":
      clave="numismatica"   #Tengo resuelto el problema de musica1 y numismática1 como nombres de columnas.

    #CASO SPECTRUM
    if caso_SPECTRUM:
      if clave in valor:
        valor=valor[clave]
        if type(valor)==str:  #Si el valor es STR entonces encontró el id.
          return valor,report
      else: #SI NO EXISTE CLAVE EN VALOR, PODRIA SER PORQUE TIENE MAS DE 1 CLASIFICACION O PORQUE NO EXISTE.
        #print("No existe clave",clave,"en spectrum asique a otras.")
        #print("valor donde no se encontró", valor)
        return 'otras',report
    #CASO CLASIFICACIONES. 
    else:
      if clave in valor:
        #print("Existe clave ",clave," en los diccionarios")
        valor=valor[clave]
        if type(valor)==str:
          #print("Se encontró str: ",valor)
          rutasClasificaciones=rutasClasificaciones+valor+';'
      elif clave=='nan':
          #print("no existe nan en los diccionarios")
          rutasClasificaciones=rutasClasificaciones+'error'+';'
          PASS=True
      else: #SI NO EXISTE CLAVE EN VALOR, PODRIA SER PORQUE NO EXISTE
        #print("No existe clave",clave,"en valor")
        #print("Agrego a lista otro")
        otro.append(clave)
  if len(otro)!=0:
    seeker=obtener_id(diccionario,otro,False)
    rutasClasificaciones=rutasClasificaciones+seeker[0]+';'

  rutasClasificaciones=rutasClasificaciones.strip(";")
  #if type(valor)==str:
  #print(valor)
  #print(rutasClasificaciones)
  if not(caso_SPECTRUM):
    if type(valor)==str:
      if (len(rutasClasificaciones)>=2):
        #print("Cantidad de clasificaciones en rutasClasificaciones: ",rutasClasificaciones)
        return rutasClasificaciones,report
      elif type(valor)=='nan':
        return rutasClasificaciones,report
    else: return 'error',report
  elif type(valor)==str:
    return valor,report
  else: #Aqui entra spectrum
    return valor,report
  #print("Clasificaciones:\t",clasificaciones)
 
 #si es Clasificacion entonces FALSE -> como error
 #si es Spectrum es TRUE -> si es true entoncea alfinal envío como "otras"

def id_material(diccionario, lista_claves):
  valor=diccionario
  for clave in lista_claves:
    clave=clave.lower()
    clave=eliminar_tildes()
    clave=eliminar_punto()
    try:
      valor=valor[clave]
    except:
      valor="otros"
  return valor