En base al último proyecto entregable de servidor API RESTful, reformar la capa de routeo y el controlador para que los requests puedan ser realizados a través del lenguaje de query GraphQL.

Si tuviesemos un frontend, reformarlo para soportar GraphQL y poder dialogar apropiadamente con el backend y así realizar las distintas operaciones de pedir, guardar, actualizar y borrar recursos.

Utilizar GraphiQL para realizar la prueba funcional de los querys y las mutaciones.

---

GRAPHQL QUERYS / MUTATIONS /

\*\* Productos 
Endpoint: "/api/productos"

Query:
- getProducts: getProducts,
query{
  getProducts{
    title,
    price,
    thumbnail
  }
}

- getById: getById,
query{
  getById(_id:"612ad1846b787172e4859d05") -> Ejemplo _id: Type String
  {
    title,
    price,
    thumbnail
  }
}

- createProduct: createProduct,
mutation {
  createProduct(
    title: "Arroz",
    price: 55,
    thumbnail: "www.img.com"
  ){
    title,
    price
    thumbnail
  }
}

- updateProduct: updateProduct,
mutation{
  updateProduct(input:{
    _id:"612be3954ccd7be9893c3762",
    title:"remolacha",
    price: 123,
    thumbnail: "img"
  })
}

- deleteProduct: 
mutation {
  deleteProduct(_id: "612be38c4ccd7be9893c3761") -> Ejemplo _id: Type String
}

\*\* Mensajes 
Endpoint: "/mensajes"

