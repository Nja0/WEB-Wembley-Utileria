const products = [
  {
    name: "Producto 1",
    price: "$3.000",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero comprar el Producto 1"
  },
  {
    name: "Producto 2",
    price: "$5.500",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, estoy interesado en el Producto 2"
  },
  {
    name: "Producto 3",
    price: "$4.200",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero consultar sobre el Producto 3"
  },
  {
    name: "Producto 1",
    price: "$3.000",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero comprar el Producto 1"
  },
  {
    name: "Producto 2",
    price: "$5.500",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, estoy interesado en el Producto 2"
  },
  {
    name: "Producto 3",
    price: "$4.200",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero consultar sobre el Producto 3"
  },
  {
    name: "Producto 1",
    price: "$3.000",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero comprar el Producto 1"
  },
  {
    name: "Producto 2",
    price: "$5.500",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, estoy interesado en el Producto 2"
  },
  {
    name: "Producto 3",
    price: "$4.200",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero consultar sobre el Producto 3"
  },
  {
    name: "Producto 1",
    price: "$3.000",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero comprar el Producto 1"
  },
  {
    name: "Producto 2",
    price: "$5.500",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, estoy interesado en el Producto 2"
  },
  {
    name: "Producto 3",
    price: "$4.200",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero consultar sobre el Producto 3"
  },
  {
    name: "Producto 1",
    price: "$3.000",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero comprar el Producto 1"
  },
  {
    name: "Producto 2",
    price: "$5.500",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, estoy interesado en el Producto 2"
  },
  {
    name: "Producto 3",
    price: "$4.200",
    image: "https://via.placeholder.com/300x200",
    message: "Hola, quiero consultar sobre el Producto 3"
  },
];

const phone = "549XXXXXXXXXX"; // Reemplazá con tu número

const container = document.getElementById("product-container");
products.forEach(p => {
  container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" class="product-img mb-3">
        <h5>${p.name}</h5>
        <p class="text-muted">${p.price}</p>
        <a class="btn btn-whatsapp w-100" target="_blank" href="https://wa.me/${phone}?text=${encodeURIComponent(p.message)}">
          Comprar por WhatsApp
        </a>
      </div>
    </div>
  `;
});
