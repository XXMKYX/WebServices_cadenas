// npm install express

var express = require('express');
var app = express(); //Contenedor de Endpoints o WS Restful
const crypto = require('crypto');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function(request, response) {

  r = {
    'message': 'Nothing to send'
  };

  response.json(r);
});

/*Calling this service sending payload as parameters in URL: 
https://practica1webservice.miguel-ange1319.repl.co/serv001?id=Nope&token=2345678dhuj43567fgh&geo=123456789,1234567890
*/
app.get("/serv001", async function(req, res) {
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;

  r = {
    'user_id': user_id,
    'token': token,
    'geo': geo
  };

  res.json(r);
});

// Call this service sending payload in body: raw - json
/*
{
    "id": "nope",
    "token": "ertydfg456Dfgwerty",
    "geo": "12345678,34567890"
}
*/
app.post("/serv002", async function(req, res) {
  const user_id = req.body.id;
  const token = req.body.token;
  const geo = req.body.geo;

  r = {
    'user_id': user_id,
    'token': token,
    'geo': geo
  };

  res.json(r);
});

/*
Call this service sending parameter as a part of the URL
https://practica1webservice.miguel-ange1319.repl.co/serv003/:1234567
*/
app.post("/serv003/:info", async function(req, res) {
  const info = req.params.info;
  let r = { 'info': info };
  res.json(r);
});

app.listen(3000, function() {
  console.log('AplicaciÃ³n ejemplo, escuchando el puerto 3000!');
});

/* i.	mascaracteres: recibe dos cadenas y regresa la que tenga más caracteres. Si son iguales, regresa la del primer parámetro

https://practica1webservice.miguel-ange1319.repl.co/serv004?cadena1=mike&cadena2=miguel
*/

app.get("/serv004", async function(req, res) {
  const cadena1 = req.query.cadena1;
  const cadena2 = req.query.cadena2;

  var respuesta = "";

  if (cadena1 && cadena2) {
    if (cadena1 > cadena2) {
      respuesta = "Cadena1";
    } else if (cadena1 < cadena2) {
      respuesta = "Cadena2";
    } else if (cadena1 == cadena2) {
      respuesta = "Cadena1 ingreso primero";
    }

    r = {
      "resultado": respuesta.toString(2),
      "Palabra": (cadena1.length > cadena2.length) ? cadena1 :
        (cadena1.length === cadena2.length) ? cadena1 : cadena2
    }
    res.status(200).json(r);
  }

  r = {
    'message': "Te faltan parametros por enviar"
  };

  res.status(400).json(r);
});

/*ii.	menoscaracteres: recibe dos cadenas y regresa la que tenga menos caracteres. Si son iguales, regresa la del primer parámetro

https://practica1webservice.miguel-ange1319.repl.co/serv005?cadena1=mike&cadena2=miguel
*/
app.get("/serv005", async function(req, res) {
  const cadena1 = req.query.cadena1;
  const cadena2 = req.query.cadena2;

  var respuesta = "";

  if (cadena1 && cadena2) {
    if (cadena1 < cadena2) {
      respuesta = "Cadena1";
    } else if (cadena1 > cadena2) {
      respuesta = "Cadena2";
    } else if (cadena1 == cadena2) {
      respuesta = "Cadena1 ingreso primero";
    }

    r = {
      "resultado": respuesta.toString(2),
      "Palabra": (cadena1.length < cadena2.length) ? cadena1 :
        (cadena1.length === cadena2.length) ? cadena1 : cadena2
    }
    res.status(200).json(r);
  }

  r = {
    'message': "Te faltan parametros por enviar"
  };

  res.status(400).json(r);
});

/** 
iii.	numcaracteres: recibe una cadena y regresa el número de caracteres que la cadena tiene

https://practica1webservice.miguel-ange1319.repl.co/serv006?cadena1=mike

*/
app.get("/serv006", async function(req, res) {
  const cadena1 = req.query.cadena1;

  if (cadena1) {
    r = {
      "Longitud": cadena1.length
    }
    res.status(200).json(r);
  }

  r = {
    'message': "Te faltan parametros por enviar"
  };

  res.status(400).json(r);
});

/** iv.	palindroma: recibe una cadena y regresa true si la cadena es una palindroma, y false en caso contrario 

https://practica1webservice.miguel-ange1319.repl.co/serv007?cadena1=mike

*/

app.get("/serv007", async function(req, res) {
  const cadena1 = req.query.cadena1;
  const palindromo = cadena1.split("").reverse().join("");
  
  if (cadena1) {
    r = {
    "Palindromo es": palindromo === cadena1 ? true : false
    }
    res.status(200).json(r);
  }

  r = {
    'message': "Te faltan parametros por enviar"
  };

  res.status(400).json(r);
});

/** v.	concat: recibe dos cadenas y regresa la concatenación iniciando con el primer parámetro

https://practica1webservice.miguel-ange1319.repl.co/serv008?cadena1=miguel&cadena2=angel

*/
app.get("/serv008", async function(req, res) {
  const cadena1 = req.query.cadena1;
  const cadena2 = req.query.cadena2;
  
  if (cadena1 && cadena2) {
    
    r = {
      "Concatenación": cadena1 + cadena2
    }
    res.status(200).json(r);
  }

  r = {
    'message': "Te faltan parametros por enviar"
  };

  res.status(400).json(r);
});

/** vi.	applysha256: recibe una cadena, le aplica una encriptación SHA256 y regresa como resultado la cadena original y la encriptada

https://practica1webservice.miguel-ange1319.repl.co/serv009?cadena1=miguel
*/

app.get("/serv009", async function(req, res) {
  const cadena1 = req.query.cadena1;

  if (cadena1) {
    const hash = crypto.createHash('sha256').update(cadena1).digest('hex');
    r = {
      "Longitud": cadena1.length,
      "Hash": hash
    }
    res.status(200).json(r);
  } else {
    r = {
      'message': "Te faltan parametros por enviar"
    };
    res.status(400).json(r);
  }
});
/** 
vii.	verifysha256: recibe una cadena encriptada, una cadena normal, a la cadena normal le aplica SHA256, la compara con la cadena encriptada y regresa true si coinciden, y false en otro caso

https://practica1webservice.miguel-ange1319.repl.co/serv010?cadena1=5ef68465886fa04d3e0bbe86b59d964dd98e5775e95717df978d8bedee6ff16c&cadena2=miguel
*/

app.get("/serv010", async function(req, res) {
  const cadena1 = req.query.cadena1;
  const cadena2 = req.query.cadena2;

  if (cadena1 && cadena2) {
    const hash = crypto.createHash('sha256').update(cadena2).digest('hex');
    const coinciden = (hash === cadena1);
    r = {
      "Coinciden": coinciden
    }
    res.status(200).json(r);
  } else {
    r = {
      'message': "Te faltan parametros por enviar"
    };
    res.status(400).json(r);
  }
});
