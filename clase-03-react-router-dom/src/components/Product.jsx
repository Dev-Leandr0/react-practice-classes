import { Link } from "react-router-dom";
const products = [
  { id: 1, name: "Remera", price: 12000 },
  { id: 2, name: "Pantalón", price: 25000 },
  { id: 3, name: "Camisa", price: 18000 },
  { id: 4, name: "Zapatillas", price: 42000 },
  { id: 5, name: "Buzo", price: 30000 }
];

function Product() {
  return (
    <div>
      <h3>Product</h3>
      {products.map((product) => (
        <Link to={`/detail/${product.id}`} key={product.id}>
          {product.name}
        </Link >
      ))}
    </div>
  );
}
export default Product