# Contenidos
1. [Consigna](#consigna)
2. [Querys & Mutations Producto](#producto)
3. [Querys & Mutations Mensajes](#mensajes)
---
## CONSIGNA
<a name="consigna"></a>

En base al último proyecto entregable de servidor API RESTful, reformar la capa de routeo y el controlador para que los requests puedan ser realizados a través del lenguaje de query GraphQL. Si tuviesemos un frontend, reformarlo para soportar GraphQL y poder dialogar apropiadamente con el backend y así realizar las distintas operaciones de pedir, guardar, actualizar y borrar recursos.
Utilizar GraphiQL para realizar la prueba funcional de los querys y las mutaciones.

GRAPHQL QUERYS / MUTATIONS /

### PRODUCTOS
<a name="producto"></a>

##### Endpoint: "/api/productos"

Query:<br>
- getProducts:<br>
query{<br>
  getProducts{<br>
    title,<br>
    price,<br>
    thumbnail<br>
  }<br>
}<br>

- getById:<br>
query{<br>
  getById(_id:"612ad1846b787172e4859d05") -> Ejemplo _id: Type String<br>
  {<br>
    title,<br>
    price,<br>
    thumbnail<br>
  }<br>
}<br>

- createProduct:<br>
mutation {<br>
  createProduct(<br>
    title: "Arroz",<br>
    price: 55,<br>
    thumbnail: "www.img.com"<br>
  ){<br>
    title,<br>
    price<br>
    thumbnail<br>
  }<br>
}<br>

- updateProduct:<br>
mutation{<br>
  updateProduct(input:{<br>
    _id:"612be3954ccd7be9893c3762",<br>
    title:"remolacha",<br>
    price: 123,<br>
    thumbnail: "img"<br>
  })<br>
}<br>

- deleteProduct:<br>
mutation {<br>
  deleteProduct(_id: "612be38c4ccd7be9893c3761") -> Ejemplo _id: Type String<br>
}<br>

---

### MENSAJES
<a name="mensajes"></a>

- findAllMsg<br>
query{<br>
  findAllMsg{<br>
    nombre,<br>
    email,<br>
    edad<br>
  }<br>
}<br>

- addMsg<br>
mutation{<br>
  addMsg(input:{<br>
    nombre: "sara",<br>
    email: "sara@b.com",<br>
    apellido: "perez",<br>
    edad: 20,<br>
    alias: "sara",<br>
    avatar: "img.jpg",<br>
    text: "Test GQL"<br>
  }){<br>
    nombre,<br>
    text<br>
  }<br>
}<br>

##### Endpoint: "/mensajes"


