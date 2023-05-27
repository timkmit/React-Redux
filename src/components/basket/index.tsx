import { useDispatch, useSelector } from 'react-redux'
import './basket.css'
import { State, Action, Product, initialState } from '../../redux/types.tsx'

const Basket = () => {
  const basket = useSelector((state: State = initialState) => state.basket)
  const dispatch = useDispatch()

  return (
    <div className="Basket">
      <h2>Basket</h2>
      {basket && basket.length ? (
        <>
          {basket.map((item) => (
            <div className="Basket-item" key={item.productId}>
              <div className="Basket-itemName">{item.name}</div>
              <div className="Basket-itemProductId">{item.productId}</div>
              <div className="Basket-itemPricing">
                <div className="Basket-itemQuantity">{item.quantity}</div>
                <div className="Basket-itemPrice">{item.price}</div>
              </div>
            </div>
          ))}
          <button onClick={() => dispatch({ type: 'clearBasket' })}>
            Clear
          </button>
        </>
      ) : (
        'Empty'
      )}
    </div>
  )
}

export default Basket
