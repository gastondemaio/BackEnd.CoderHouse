const Contenedor = require("./contenedor");

const contenedor = new Contenedor("productos.json");

const main = async () => {
  const id1 = await contenedor.save({ title: "Regla", price: 75.66, thumbnail:"https://w7.pngwing.com/pngs/623/552/png-transparent-measure-scale-measuring-symbol-ruler-law-measurement-thumbnail.png" });
  const id2 = await contenedor.save({ title: "Goma", price: 57.75, thumbnail:"https://w7.pngwing.com/pngs/915/795/png-transparent-blue-and-red-eraser-illustration-eraser-icon-eraser-blue-rectangle-happy-birthday-vector-images-thumbnail.png" });
  const id3 = await contenedor.save({ title: "Lapicera", price: 100, thumbnail:"https://w7.pngwing.com/pngs/457/85/png-transparent-faber-castell-pencil-writing-implement-ballpoint-pen-pen-thumbnail.png" });

  console.log(id1, id2, id3); // 1, 2, 3

  const object2 = await contenedor.getById(2);
  console.log(object2); // { title: 'Goma', price: 57.75, id: 2 }

  await contenedor.deleteById(2);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
  /**
     * [
        { title: 'Regla', price: 75.66, id: 1 },
        { title: 'Lapicera', price: 100, id: 3 }
        ]
    */

  //await contenedor.deleteAll();
};

main();