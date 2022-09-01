import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, sortName } from './store.js'
import Footer from './Footer.js';
import './Cart_css_1200.css';

function Cart() {

  let state = useSelector((state) => state)
  // console.log(state.cart[0].name);

  // dispatch는  store.js 로 요청보내주는 함수
  let dispatch = useDispatch()
  return (
    <>
      <div className='cart-wrap'>
        <div className='cart-header' style={{ backgroundImage: 'url(/img/page-header-bg.jpg)' }}>
          <h3>Shopping Cart</h3>
          <span>Shop</span>
        </div>
        <div className='cart-index'>
          <ul className='cart-index-container'>
            <li>Home</li>
            <li>&gt;</li>
            <li>Shop</li>
            <li>&gt;</li>
            <li>Shopping Cart</li>
          </ul>
        </div>
        <div className='cart-container'>
          <div className='cart-left'>
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th> </th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
                {
                  state.cart.map((a, i) =>
                    <tr key={i}>
                      <td>{state.cart[i].id}</td>
                      <td>{state.cart[i].name}</td>
                      <td>{state.cart[i].count}</td>
                      <td><button onClick={() => {
                        dispatch(addCount(state.cart[i].id))
                      }}>+</button></td>
                      <td>{state.cart[i].price}</td>
                    </tr>
                  )
                }
              </thead>
              <tbody>

                

              </tbody>
            </Table>
          </div>
          <div className='cart-right'>
            <h3>Cart Total</h3>
            <table>
              <tbody>
                <tr>
                  <td>Subtotal:</td>
                  <td>$997,00</td>
                </tr>
                <h4>Shipping</h4>
                <tr>
                  <td><input type='radio' value='shipping'/>Free Shipping:</td>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <td><input type='radio' value='standard'/>Standard:</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td><input type='radio' value='Express'/>Express:</td>
                  <td>$20.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )

}

export default Cart;