# Validaciones.py
# Contiene funciones para validar cargas y guardados
# de excels y JSON

import pandas as pd
import json
import sys
from Funciones import lowerCase

def carga_excel(path):
  try:
    df = pd.read_excel(path)
    print("Archivo leído correctamente.")
    return df
  except PermissionError: # Caso archivo abierto o falta de permisos
      print(f"Error: Asegurate de que '{path}' no esté abierto y que tienes permisos para usarlo.")
  except FileNotFoundError: # Caso no se encuentra
      print(f"Error: El archivo '{path}' no se encuentra.")
  except pd.errors.EmptyDataError: # Caso archivo vacio
      print(f"Error: El archivo '{path}' está vacío.")
  except pd.errors.InvalidFileFormatError: # Caso archivo excel no valido
      print(f"Error: El archivo '{path}' no es un archivo Excel válido o está corrupto.")
  except Exception as e: # Excepciones generales
      print(f"Se ha producido un error inesperado: {e}")

def carga_JSON(path):
  # PENDIENTE !!! VALIDAR CORRECTAMENTE
  try:
    # Leer archivos JSON
    with open(path, 'r', encoding='utf-8') as archivo:
        datos = json.load(archivo)
        datos = lowerCase(datos)  # Convertir claves a minúsculas si es necesario
  except Exception as e:
      print(f"Se ha producido un error con JSON: {e}")
      sys.exit(1)
  
  return datos

def guarda_excel(df, path):
  try:
    df.to_excel(path, index=False)
    print("Archivo guardado correctamente.")
  except PermissionError:
    print(f"Error: No se puede guardar el archivo '{path}'. Asegúrate de que NO ESTE ABIERTO y que tienes permisos para escribir en el directorio.")
  except Exception as e:
    print(f"Se ha producido un error al guardar el archivo: {e}")