import { Wrapper } from './Cart.styles'
import CartItem from '../CartItem/CartItem'
import { CartItemType } from '../App'

type Props = {
  cartItems: CartItemType[]
  addtoCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addtoCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem />
      ))}
    </Wrapper>
  )
}

export default Cart
