import React, { Component } from "react";

import MainNavigation from "../components/MainNavigation";
import ShopContext from "../context/shop-context";
// import { addProductToCart } from '../store/actions';
import "./Products.css";

/**
 * Advantage of ShopContext.Consumer method: works in both class and function based component.
 * Disadvantage : allows access to parts only where we render our JSX i.e, inside the render parts.
 *                Don't have access in lifecycle methods like componentDidMount or constructor methods.
 */
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

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };

export default ProductsPage;
