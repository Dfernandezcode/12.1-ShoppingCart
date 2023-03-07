import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div key={props.product.id}>
      {props.product.name} / {props.product.price}
    </div>
  );
};

export default ProductItem