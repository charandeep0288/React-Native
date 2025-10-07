import { createContext, useReducer } from "react";

export const ProductsContext = createContext({
  cart: [],
  isPresentProduct: (code) => {},
  addProduct: ({ code, productCountAvailable }) => {},
  removeProduct: (code) => {},
});

function productsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      let addProductFlag = action.payload.addProduct;

      const updateableProductIndex = state.findIndex(
        (product) => product.code === action.payload.code
      );
      const updateableProduct = state[updateableProductIndex];

      let updateItem = {};
      addProductFlag
        ? (updateItem = {
            ...updateableProduct,
            productCountAvailable: action.payload.productCountAvailable - 1,
            productQuantity: action.payload.productQuantity + 1,
          })
        : (updateItem = {
            ...updateableProduct,
            productCountAvailable: action.payload.productCountAvailable + 1,
            productQuantity: action.payload.productQuantity - 1,
          });

      const updatedProducts = [...state];
      updatedProducts[updateableProductIndex] = updateItem;
      return updatedProducts;
    case "DELETE":
      return state.filter((product) => product.code !== action.payload);
    default:
      return state;
  }
}

function ProductContextProvider({ children }) {
  const [productsState, dispatch] = useReducer(productsReducer, []);

  function isPresentProduct(code) {
    const isPresentProduct0 = productsState.filter(
      (currentProduct) => currentProduct.code === code
    );

    if (
      isPresentProduct0.length > 0 &&
      isPresentProduct0[0].productQuantity > 0
    ) {
      return isPresentProduct0[0].productQuantity;
    }
    return 0;
  }

  function addProduct({ code, productCountAvailable }) {
    const isPresentProduct0 = isPresentProduct(code);

    if (isPresentProduct0 > 0) {
      const product = productsState.filter(
        (currentProduct) => currentProduct.code === code
      )[0];

      dispatch({
        type: "UPDATE",
        payload: {
          code: code,
          productCountAvailable: product.productCountAvailable,
          productQuantity: product.productQuantity,
          addProduct: true,
        },
      });
    } else {
      dispatch({
        type: "ADD",
        payload: {
          code: code,
          productCountAvailable: productCountAvailable,
          productQuantity: 1,
        },
      });
    }
  }

  function removeProduct(code) {
    const isPresentProduct0 = isPresentProduct(code);

    if (isPresentProduct0 > 1) {
      const product = productsState.filter(
        (currentProduct) => currentProduct.code === code
      )[0];
      dispatch({
        type: "UPDATE",
        payload: {
          code: code,
          productCountAvailable: product.productCountAvailable,
          productQuantity: product.productQuantity,
          addProduct: false,
        },
      });
    } else {
      dispatch({ type: "DELETE", payload: code });
    }
  }

  const value = {
    cart: productsState,
    isPresentProduct: isPresentProduct,
    addProduct: addProduct,
    removeProduct: removeProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductContextProvider;
