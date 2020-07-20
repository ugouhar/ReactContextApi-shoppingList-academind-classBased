import React, { Component } from "react";
import ShopContext from "../context/shop-context";
import MainNavigation from "../components/MainNavigation";
import "./Products.css";

class ProductsPage extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <MainNavigation
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />
            <main className="products">
              <ul>
                {context.products.map((product) => (
                  <li key={product.id}>
                    <div>
                      <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                      <button
                        onClick={context.addProductToCart.bind(this, product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </main>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default ProductsPage;

/**
 * 1. context argument in the function inside
 * ShopContext.Consumer refers to the object
 * we provided in ShopContext.Provider, so we can
 * access that object here now.
 *
 * 2. Advantage of this method of context is that it
 * can be used with both class and function base
 * component
 *
 * 3. Disadvantage of this method is that it, can
 * only be used inside the (context) => {...} i.e,
 * where we render our JSX code.
 * So we can't access our context in componentDidMount,
 * constructor etc.
 */
