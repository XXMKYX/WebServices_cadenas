# WebServices_cadenas
Serie de servicios web recibiendo cadenas como parametros

1.	Crear una serie de servicios web en la plataforma RepLit, usando un servidor NodeJS que realicen lo siguiente:

  a.	Requerimientos
i.	Todos los servicios reciben sus parámetros en una estructura JSON
ii.	Todos los servicios responden en una estructura JSON
iii.	Todos los servicios deben validar los parámetros y el resultado de la operación, e incluir un atributo en el JSON de respuesta que indique el resultado o error de la ejecución

  b.	Tareas a implementar
i.	mascaracteres: recibe dos cadenas y regresa la que tenga más caracteres. Si son iguales, regresa la del primer parámetro
ii.	menoscaracteres: recibe dos cadenas y regresa la que tenga menos caracteres. Si son iguales, regresa la del primer parámetro
iii.	numcaracteres: recibe una cadena y regresa el número de caracteres que la cadena tiene
iv.	palindroma: recibe una cadena y regresa true si la cadena es una palindroma, y false en caso contrario
v.	concat: recibe dos cadenas y regresa la concatenación iniciando con el primer parámetro
vi.	applysha256: recibe una cadena, le aplica una encriptación SHA256 y regresa como resultado la cadena original y la encriptada
vii.	verifysha256: recibe una cadena encriptada, una cadena normal, a la cadena normal le aplica SHA256, la compara con la cadena encriptada y regresa true si coinciden, y false en otro caso
