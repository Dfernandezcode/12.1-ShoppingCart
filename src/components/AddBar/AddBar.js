import React, { useMemo } from "react";
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

  //TOTAL
  //LESS OPTIMAL
  //const [totalPrice, setTotalPrice] = useState(0)
  // useEffect(() => {
  //   const newTotalPrice = productList.reduce((total, product) => {
  //     return total + parseFloat(product.price);
  //   }, 0);
  //   setTotalPrice(newTotalPrice);
  // }, [productList]);

  //useMemo function --> more optimized.
  const totalPrice = useMemo(() => {
    return productList.reduce((total, product) => {
      return total + parseFloat(product.price);
    }, 0);
  }, [productList]);

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

  // delete product
  const deleteProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  //clear input
  // const inputReference = React.useState(null);

  // const onSubmit = React.useCallback((event) => {
  //   event.preventDefault();
  //   inputReference = addProduct.value = "";
  // });

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

        <button type="submit">A??adir producto</button>
      </form>

      {/*Product List*/}
      <div>
        <h2>Productos</h2>
        {productList.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          ></ProductItem>
        ))}
      </div>

      {/*TOTAL*/}
      <h1>Total: ${totalPrice}</h1>
    </div>
  );
};

export default AddBar;
