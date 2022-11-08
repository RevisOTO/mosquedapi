const grid = new gridjs.Grid({
    columns: ['idpersona', 'Nombre', 'Apellido'],
    server: {
      url: 'http://localhost:1234/',
      then: data => data.map(persona => [persona.idpersona,persona.nombre,persona.apellido])
    } 
  }).render(document.getElementById("wrapper"));