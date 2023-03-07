import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./AddBar.css";

//functionality for form input and submit.
const AddBar = () => {
  const [productList, setProductList] = React.useState([
    { name: "Platanos", price: 5, id: 1 },
    { name: "Chocolate", price: 2, id: 2 },
    { name: "Arroz", price: 1, id: 3 },
    { name: "Queso", price: 5, id: 4 },
  ]);

  const [addProduct, setAddProduct] = React.useState({
    name: "",
    price: 0,
  });

  //aux function to add product.
  const addNewProduct = (event) => {
    event.preventDefault();

    const newProductAdd = {
      ...addProduct,
      id: productList[productList.length - 1].id + 1,
    };

    setProductList([...productList, newProductAdd]);
  };


  return (  
    <div className="addcart">
    {/*Add new item function*/}

      <h1 className="addcart__title">Carrito</h1>
      <form className="addcart__box" onSubmit={(event) => addNewProduct(event)}>
        <p>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Nombre del producto"
              value={addProduct.name}
              onChange={(event) =>
                setAddProduct({
                  ...addProduct,
                  name: event.target.value,
                })
              }
            ></input>
          </label>
        </p>

        <p>
          <label>
            <input
              type="number"
              name="price"
              placeholder="Precio del producto"
              value={addProduct.price}
              onChange={(event) =>
                setAddProduct({
                  ...addProduct,
                  price: event.target.value,
                })
              }
            ></input>
          </label>
        </p>

        <button type="submit">Añadir producto</button>
      </form>

{/*Product List*/}      
      <div>
        <h2>Productos</h2>
        {productList.map(product => <ProductItem key={product.id} product={product}></ProductItem>)}
      </div>

{/*TOTAL*/}
        <h1>Total:</h1>
    </div>
  );
};

export default AddBar;
