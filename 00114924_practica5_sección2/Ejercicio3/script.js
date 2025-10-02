const estanteria = {
  libros: [
    {
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false,
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false,
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true,
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false,
    }
  ],
  log() {
    const { libros } = this;
    let resultado = ''
    for (const libro of libros) {
      const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
      resultado = `${resultado}${prefijo} leido ${libro.nombre} de ${libro.autor}\n`;
    }
    console.log(resultado)
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random() );
    const elementoRandom = librosNoLeidos[indiceRandom];
    console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
  }
}

estanteria.log();
estanteria.sugerencia();


//para mostrar al usuario
const contenedorLibros = document.getElementById("libros");
const contenedorSugerencia = document.getElementById("sugerencia");

//para los libros
estanteria.libros.forEach(libro => {
  const p = document.createElement("p");
  const texto = (libro.leido ? " Ya has leído" : " Aún no has leído") +` "${libro.nombre}" de ${libro.autor}`;
  p.textContent = texto;
  p.classList.add(libro.leido ? "leido" : "no-leido");
  contenedorLibros.appendChild(p);
});

// para la sugerencia
const librosNoLeidos = estanteria.libros.filter(libro => !libro.leido);
if (librosNoLeidos.length > 0) {
  const i = Math.floor(Math.random() * librosNoLeidos.length);
  const sugerido = librosNoLeidos[i];

  const p = document.createElement("p");
  p.textContent = `Te sugiero leer "${sugerido.nombre}" de ${sugerido.autor}`;
  p.classList.add("sugerencia");
  contenedorSugerencia.appendChild(p);
}
