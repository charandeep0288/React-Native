import { createContext, useState } from "react";
const data = [];
export const CartContext = createContext({
  cartItems: [],
  IsItemsExist: (code) => {},
  AddItems: (code) => {},
  DeleteItems: ({ code }) => {},
});
export default function CartContextHandler({ children }) {
  const [cartItem, setCartItems] = useState([]);
  function IsItemsExist(code) {
    return true;
  }
  // const selectedMeal = cartItem.filter((item) =>
  //   item.ids.includes(mealItem.id)
  // );
  // let IsItemsExist = ({ cartItem }) =>
  //   cartItem.filter((item) => item.code === code);
  // console.log(IsItemsExist);
//   function AddItems(code) {
//     setCartItems((cartItems) => {
//       let cartItem0 = cartItems.filter((item) => item.code === code);
//       let otherCartItems = cartItems.filter((item) => item.code !== code);
//       if (cartItem0.length > 1) {
//         [...otherCartItems, { code: code, quantity: cartItem0.quantity + 1 }];
//       } else {
//         [...cartItems, { code: code, quantity: 1 }];
//       }
//     });

//     console.log(cartItem);
//   }

    function AddItems(code)
    {
        const IsItemsExist = cartItem.filter((item) => item.code.includes(code));
        // let IsItemsExist = ({cartItem}) => cartItem.filter((item) => item.code === code)
        console.log(IsItemsExist)
        if(IsItemsExist && IsItemsExist.length > 0)
        {
            // const ItemsDetail = cartItem.find((IsItemsExist) => IsItemsExist.code === code)
            console.log(newCartItem)
            setCartItems((newCartItem) =>{
                for(let i = 0 ; i < newCartItem.length ; i++) {
                    if(newCartItem.code === code) {
                        newCartItem.quantity += 1;
                    }
                }
                [...newCartItem]
            });
            console.log("88")
            console.log(cartItem)
        }
        else{
            setCartItems((items) => [...items,{code:code,quantity: 1 }])
            console.log(cartItem)
        }
    }

  function DeleteItems(code) {
    let IsItemsExist = (cartItems) =>
      cartItems.filter((item) => item.code === code);
    console.log(IsItemsExist);
    setCartItems((items) => [
      ...items,
      { code: code, quantity: IsItemsExist ? IsItemsExist.quantity - 1 : 1 },
    ]);
  }
  const Value = {
    cartItems: cartItem,
    IsItemsExist: IsItemsExist,
    AddItems: AddItems,
    DeleteItems: DeleteItems,
  };
  return <CartContext.Provider value={Value}>{children}</CartContext.Provider>;
}
