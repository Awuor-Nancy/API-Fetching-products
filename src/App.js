import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [product, setProduct] = useState([]);

  // fetched products from dummyjson
  const getData = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((product) => {
        setProduct(product.products);
        console.log(product.products);
      })
      .catch(
        (error) => {
          throw new Error(error);
        },
        [setProduct]
      );
  };
  useEffect(() => {
    getData();
  }, []);

  // Added a product to the dummyjson

  const handleSubmit = () => {
    const newProduct = {
      id: 31,
      title: "washing Machine",
      description: "A machine that cleans your clothes in a magical way",
      price: 30000,
      discountPercentage: 5.96,
      rating: 3.69,
      stock: 104,
      brand: "Samsung",
      category: "Washing machines",
      thumbnail:
        "https://media.istockphoto.com/photos/washing-machine-at-blue-wall-frontal-view-with-copy-space3d-rendering-picture-id1096523200?b=1&k=20&m=1096523200&s=612x612&w=0&h=L1oPQRg9M6qu8lSesEsM0k5S3TCP-XFNV1eFyj6VOHs="
    };
    alert(JSON.stringify(newProduct));
  };
  const url = "https://dummyjson.com/products";
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    Body: JSON.stringify(product)
  })
    .then((res) => res.json())
    .then((product) => {
      setProduct(product);
      console.log(product.products);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      {product.map((product) => (
        <div key={product.id} className="productCard">
      
          <p className="productDiscount">{product.discountPercentage}</p>
          <img
            src={product.thumbnail}
            alt="productImages"
            className="productImg"
          />
          <div className="productDetails">
            <h1 className="productTitle">{product.title}</h1>
            <p className="productDescr">{product.description}</p>
            <p className="productPrice">Ksh.{product.price}</p>
            <p className="productIntitialPrice">Ksh.700</p>
            <h1 className="productCategory">{product.category}</h1>
          </div>

          <div className="productRate">
            <img
              src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
              alt="rateProduct"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
              alt="rateProduct"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
              alt="rateProduct"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
              alt="rateProduct"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
              alt="rateProduct"
            />
            <p>{product.rating}</p>
          </div>
        </div>
      ))}

      {/* Create a form and add one product.   */}
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          type="text"
          placeholder="input product"
          onChange={(e) => {
            setProduct([e.target.value]);
          }}
        />
        <button onClick="click" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
