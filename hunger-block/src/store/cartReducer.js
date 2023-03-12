
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../utils/constants'

const initialState = {
  cartItems: [],
  addedItems:[],
  total: 0
};

function cartReducer(state = initialState, action) {
  let addedItem,newTotal;
  switch (action.type) {
  case "ADD_TO_CART":
    addedItem = state.items.find(item=> item.id === action.id)
      //check if the action id exists in the addedItems
    let existed_item= state.addedItems.find(item=> action.id === item.id)
    if(existed_item)
    {
        addedItem.quantity += 1 
        return{
            ...state,
            total: state.total + addedItem.price 
              }
    }
   else{
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price 
      
      return{
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : newTotal
      }
    }
  case "REMOVE_ITEM":
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)
  
    //calculating the total
    //newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }
//INSIDE CART COMPONENT
case "ADD_QUANTITY":
  addedItem = state.items.find(item=> item.id === action.id)
    addedItem.quantity += 1 
    let newTotal = state.total + addedItem.price
    return{
        ...state,
        total: newTotal
    }

case "SUB_QUANTITY":
  addedItem = state.items.find(item=> item.id === action.id) 
  //if the qt == 0 then it should be removed
  if(addedItem.quantity === 1){
      let new_items = state.addedItems.filter(item=>item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return{
          ...state,
          total: newTotal
      }
  }
  default:
    return state;
  }
}

export default cartReducer;
