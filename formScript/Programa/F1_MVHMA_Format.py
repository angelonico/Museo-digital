import pandas as pd
from Validaciones import carga_excel, guarda_excel, carga_JSON # Usados para cargar archivos
from Funciones import obtener_id

#########################
# Paths
#########################

path_carpeta = r'C:\Users\victo\OneDrive\Escritorio\Colecciones Desk\Scripts'
path_excel = path_carpeta + r'\f1.xlsx' # Archivo excel de entrada
path_excel_salida= path_carpeta + r'\datos_procesados.xlsx' # Archivo salida
path_UbicacionesMHAMVM = path_carpeta + r'\json\UbicacionMHAMVM.json'

########################
# Carga de datos
########################

df = carga_excel(path_excel) # DataFrame que recibe el excel en bruto del formulario
datos_ubicacion = carga_JSON(path_UbicacionesMHAMVM)

#######################
# Concatena ubicaciones
#######################

for index, row in df.iterrows(): # Iterar sobre cada fila

    ubi="" # Guarda la ultima ubicacion
    ubi_concat="" # Guarda seguimiento jerarquico de la ubicacion

    col_num=0; # Contador de columnas
    for col_name in df.columns: # Iterar sobre cada columna en la fila
        if pd.notna(row[col_name]): # Verifica que el valor no sea Nan, para no agregarlo
            if col_num>=19: # De la columna 39 hasta la 205, para seguir la clasificacion
                ubi=str(row[col_name])
                ubi_concat+=ubi+ ">"
        col_num+=1
            
    # Convierte la celda a string
    df[df.columns[19]] = df[df.columns[19]].astype(str) 
    df[df.columns[20]] = df[df.columns[20]].astype(str)

    # Guarda ultimo valor de ubicacion
    df.at[index, df.columns[19]]=ubi.strip() 

    # Guarda concatenacion jerarquica de ubicacion
    df.at[index, df.columns[20]]=ubi_concat[:-1].strip()  # elimina el ultimo ">"

####################
# Prepara DataFrame
####################

# Cambia el nombre de las columnas
df.rename(columns={'Piso / Nivel del Edificio\n': 'Ubicacion'}, inplace=True)
df.rename(columns={'Recintos Primer Piso\n': 'Ubicacion completa'}, inplace=True)

# Crea un nuevo dataFrame temporal con las columnas acotadas y formateadas
df = df.iloc[:, 0:21] # Elimina filas sobrantes
df['ID UBICACION'] = pd.NA # Agrega nueva columna

#################
# Obtiene los id
#################

for index, row in df.iterrows(): # Iterar sobre cada fila

    # Splitea la ruta, obteniendo una array de la ruta
    key_ubi=row["Ubicacion completa"].split('>')
    
    # Obtengo la ID y booleano de error
    df.at[index,"ID UBICACION"],errorUbi = obtener_id(datos_ubicacion, key_ubi, 0)
    df["Tipo de material"]
    


# Guardar el DataFrame en el archivo
guarda_excel(df, path_excel_salida)