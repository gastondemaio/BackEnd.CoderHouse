class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascotas(mascotas){
        this.mascotas.push(mascotas)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(book, autor){
        this.libros.push({nombre: book, autor: autor})
    }

    getBookNames(){
        return this.libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: "El señor de las moscas",
        autor: "William Golding",
    },
    {
        nombre: "Fundacion",
        autor: "Isaac Asimov",
    },
]

const U1 = new Usuario("Gastón", "De Maio", libros, ["Perro", "Gato"])

console.log(U1.getFullName())
console.log(U1.getBookNames())
U1.addBook("Del arte de la guerra", "Nicolas Maquiavelo")
console.log(U1.getBookNames())
console.log(U1.countMascotas())
U1.addMascotas("Tortuga")
console.log(U1.countMascotas())