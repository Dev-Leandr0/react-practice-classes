import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Remera", price: 12000 },
  { id: 2, name: "Pantalón", price: 25000 },
  { id: 3, name: "Camisa", price: 18000 },
  { id: 4, name: "Zapatillas", price: 42000 },
  { id: 5, name: "Buzo", price: 30000 }
];


function Detail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  console.log(product);
  return (
    <div>
      <h1>Detail</h1>
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
    </div>
  );
}

export default Detail