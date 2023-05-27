import { useDispatch } from 'react-redux';
import { buyProduct } from '../../redux/actions/buyProduct';
import { Product } from '../../redux/types';
import './Boots.css';

const products: Product[] = [
  {
    productId: 'BE8290004',
    name: 'Ski boots',
    description: 'Mondo 26.5. White.',
    price: 698.62,
    quantity: 1,
  },
  {
    productId: 'PC6310098',
    name: 'Snowboard boots',
    description: 'Mondo 27.5. Blue.',
    price: 825.59,
    quantity: 1,
  },
  {
    productId: 'RR5430103',
    name: 'Mountaineering boots',
    description: 'Mondo 27.3. Brown.',
    price: 634.98,
    quantity: 1,
  },
];

const Boots = () => {
  const dispatch = useDispatch();

  const addToBasket = (product: Product) => {
    dispatch(buyProduct(product));
  };

  return (
    <div className="Boots">
      <h1>Boots</h1>

      <dl className="Boots-products">
        {products.map((product) => (
          <div key={product.productId}>
            <dt>{product.name}</dt>
            <dd>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => addToBasket(product)}>
                Add to basket
              </button>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Boots;
