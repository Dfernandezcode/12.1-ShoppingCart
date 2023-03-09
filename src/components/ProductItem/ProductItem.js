import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div key={props.product.id}>
      {props.product.name} / {props.product.price}
      <button onClick={() => props.deleteProduct(props.product.id)}>Eliminar</button>
    </div>
  );
};

export default ProductItem