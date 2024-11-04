# IMPORTA F2
# Junta columnas separadas (SEPCTRUM Y CLASIFICACION)
# Retorna excel con IDs respectivas y ruta de seguimiento
# Retorna excel reporte

import pandas as pd
from Funciones import obtener_id
from Validaciones import carga_excel, guarda_excel, carga_JSON
from Reportes import Reportes_F2

# Rutas
path_carpeta = r'C:\Users\victo\OneDrive\Escritorio\Colecciones Desk\Scripts'
path_excel = path_carpeta + r'\f2.xlsx' # Archivo excel
path_clasificacion = path_carpeta + r'\json\Clasificacion.json' # JSON Clasificacion
path_spectrum = path_carpeta + r'\json\Spectrum.json' # JSON Spectrum
path_excel_salida= path_carpeta + r'\datos_procesados.xlsx' # Archivo salida

# Carga de archivos
df = carga_excel(path_excel) # DataFrame que recibe el excel en bruto del formulario
datos_clasificacion = carga_JSON(path_clasificacion) # Recibe JSON de mapa de ID clasificacion
datos_spectrum = carga_JSON(path_spectrum) # Recibe JSON de mapa de ID SPECTRUM

# Concatena columnas respectivas
for index, row in df.iterrows(): # Iterar sobre cada fila

    tipo="" # Contendra el ultimo tipo del SPECTRUM
    tipo_concat="" # Contendra el seguimiento jerarquico del SEPCTRUM

    clasi="" # Contendra la ultima clasificacion
    clasi_concat="" # Contendra el seguimiento jerarquico de la clasificacion

    col_num=0; # Contador de columnas
    for col_name in df.columns: # Iterar sobre cada columna en la fila
        if pd.notna(row[col_name]): # Verifica que el valor no sea Nan, para no agregarlo
            if col_num>=37: # De la columna 39 hasta la 205, para seguir la clasificacion
                clasi=str(row[col_name])
                clasi_concat+=clasi+ ">"
            elif col_num>=7: # de la columna 9 hasta la 38, para seguir el SPECTRUM
                tipo=str(row[col_name])
                tipo_concat+=tipo+ ">"
        col_num+=1
            
    # Convierte el tipo de celdas a string
    df[df.columns[7]] = df[df.columns[7]].astype(str) 
    df[df.columns[8]] = df[df.columns[8]].astype(str)
    df[df.columns[9]] = df[df.columns[9]].astype(str)
    df[df.columns[10]] = df[df.columns[10]].astype(str)

    # Guarda ultimo valor de tipo y clasificacion de objeto
    df.at[index, df.columns[7]]=tipo.strip() 
    df.at[index, df.columns[9]]=clasi.strip() 

    # Guarda concatenacion jerarquica de clasificacion y tipo objeto
    df.at[index, df.columns[8]]=tipo_concat[:-1].strip()  # elimina el ultimo ">"
    df.at[index, df.columns[10]]=clasi_concat[:-1].strip()  # elimina el ultimo ">"

# Cambia el nombre de las columnas
df.rename(columns={'Es del tipo:\n': 'Tipo'}, inplace=True)
df.rename(columns={'Cultural': 'Tipo completo'}, inplace=True)
df.rename(columns={'Natural': 'Clasificacion'}, inplace=True)
df.rename(columns={'Antropología': 'Clasificacion completa'}, inplace=True)


# Crea un nuevo dataFrame temporal con las columnas acotadas y formateadas
df_format = df.iloc[:, 0:11]
df_format.insert(9, 'ID SPECTRUM', pd.NA) # Agrega nueva columna
df_format.insert(12, 'ID Clasificacion', pd.NA) # Agrega nueva columna
"""
index_a_eliminar=[]
index_errores=[]
# Obtiene la id para cada columna de Clasificacion
for index, row in df_format.iterrows(): # Iterar sobre cada fila

    # Splitea la ruta, obteniendo una array de la ruta
    key_clasi=row["Clasificacion completa"].split('>')
    key_spect=row["Tipo completo"].split('>')
    
    # Obtengo la ID y booleano de error
    df_format.at[index,"ID Clasificacion"],errorClasi = obtener_id(datos_clasificacion, key_clasi, 0)
    df_format.at[index,"ID SPECTRUM"],errorSpect = obtener_id(datos_spectrum, key_spect, 1)
    
    if(errorClasi or errorSpect):
        index_errores.append(index)
        if(errorClasi): index_a_eliminar.append(index) # Almacena indices de error en categoria Clasificacion

# Elimina erroes por clasificacion del excel a subir a collective

# Agregar errores al Reporte
# Pasa un DataFrame con todos los errores de clasificacion y SPECTRUM, a partir de sus indices
Reportes_F2(df_format.loc[index_errores].reset_index(drop=True)) 

# Elimina todos los errores de clasificacion (para no subirlos)
df_format=df_format.drop(index_a_eliminar)
"""
# Guardar el DataFrame en el archivo
guarda_excel(df_format,path_excel_salida)
