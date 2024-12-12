function obtenerFecha() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const fechaActual = new Date();
    const diaSemana = diasSemana[fechaActual.getDay()];
    const diaMes = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    const anio = fechaActual.getFullYear();
  
    const fechaString = `${diaSemana}, ${diaMes} de ${mes} de ${anio}`;
    document.getElementById("fecha").textContent = fechaString;
  }
  
  function actualizarReloj() {
    const relojElement = document.getElementById("reloj");
    const tiempoActual = new Date();
    const horas = tiempoActual.getHours().toString().padStart(2, '0');
    const minutos = tiempoActual.getMinutes().toString().padStart(2, '0');
    const segundos = tiempoActual.getSeconds().toString().padStart(2, '0');
  
    relojElement.textContent = `${horas}:${minutos}:${segundos}`;
  }
  
  function comprobarClaseM04() {
    const tiempoActual = new Date();
    const dia = tiempoActual.getDay();
    const hora = tiempoActual.getHours();
    const minutos = tiempoActual.getMinutes();
  
    let mensaje = "No estás en clase de M04.";
  
    if (
      (dia === 1 && hora >= 15 && (hora < 17 || (hora === 17 && minutos <= 45))) ||
      (dia === 2 && ((hora === 16 && minutos >= 50) || (hora === 17 && minutos <= 45) || (hora === 18 && minutos < 15) || (hora === 18 && minutos >= 15 && minutos <= 19))) ||
      (dia === 4 && hora >= 15 && (hora < 17 || (hora === 17 && minutos <= 45))) 
    ) {
      mensaje = "¡Estás en clase de M04!";
    }
  
    document.getElementById("claseM04").textContent = mensaje;
  }
  
  function actualizar() {
    obtenerFecha();
    actualizarReloj();
    comprobarClaseM04();
  }
  
  setInterval(actualizar, 1000);
  