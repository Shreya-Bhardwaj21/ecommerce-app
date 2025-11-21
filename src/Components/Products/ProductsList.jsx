import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import Loder from "./Loder";
import "./Product.css";

export default function ProductsList() {
  let [item, setItem] = useState([])
  let [allItem, setAllItem] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [searchitem, setSearchitem] = useState('');
  useEffect(() => {
    datafetch();
  }, []);

  function searchproduct(e) {
    e.preventDefault();
    let filtered = allItem.filter((product) =>
      product.title.toLowerCase().includes(searchitem.toLowerCase())
    );

    setItem(filtered);
    setSearchitem('')
  }

  async function datafetch() {
    try {
      setIsLoading(true);
      let res = await fetch("https://fakestoreapi.com/products");
      console.log(res);
      if (!res.ok) throw new Error("somthing went wrong");
      let data = await res.json();
      console.log(data);
      setItem(data);
      setAllItem(data);
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      setIsLoading(false);
    }

  }
  function topreating() {
    setItem((item) => {
      return (
        item.filter((i) => i.rating.rate > 4)
      )
    })
  }
  function allproduct() {
    setItem(allItem)
  }

  return (
    <>
      <section className="container-fluid m-3">
        <div className="col-9">
          <div className="row">
            <div className="row">
              <div className="col-6">
                <button className=" btn btn-dark m-2" onClick={topreating}>Top Product</button>
                <button className=" btn btn-dark" onClick={allproduct}> All Product</button>
              </div>
              <div className="col-4">
                <form onSubmit={searchproduct}>
                  <div className="input-group">
                    <input type="text" placeholder="search here" className="form-control" value={searchitem} onChange={(e) => setSearchitem(e.target.value)} />
                    <button className="btn btn-dark" type="submit">search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid mt-3">
        {isLoading ? (
          <Loder />
        ) : (
          <div className="product-grid">
            {item.length >= 1 &&
              item.map((product) => (
                <div className="product-card" key={product.id}>
                  <Product item={product} />
                </div>
              ))}
          </div>
        )}
        <div className="mt-4">
          <Link to="/" className="btn btn-dark">Go to Home</Link>
        </div>
      </section>
    </>
  );
}


