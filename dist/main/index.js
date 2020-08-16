const lugares = (()=>{
    return {
    salidaCine: () => {
    return "Cine";
    },
    salidaMusica: () => {
    return "Musica";
    },
    salidaComida: () => {
    return "comida";
    },
 
    }
    })();
    salida.addEventListener('change',function () {
    switch (salida.value) {
    case "Cine":
    resultado.innerHTML = lugares.salidaCine();
    break;
    case "Musica":
    resultado.innerHTML = lugares.salidaMusica();
    break;
    case "Comida":
    resultado.innerHTML = lugares.salidaComida();
    break;
    }
    })
    