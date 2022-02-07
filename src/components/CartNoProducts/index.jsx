import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cartSlice'

import './cartNoProducts.css'

import Cart from '../../img/icon/cart.svg'

export default function CartNoProducts() {
	const { productCart } = useSelector(selectCart)

	return (
		<>
			{productCart.length === 0 && (
				<section className="container cart-no-products">
					<figure>
						<img
							src={ Cart }
							alt="Carrinho vazio!"
							title="Carrinho vazio!"
							draggable="false"
							width={ 90 }
						/>
					</figure>

					<div>
						<p className="cart-no-products__title">
							Vazio!
						</p>

						<p className="cart-no-products__text">
							Você ainda não possui produtos <br /> em seu carrinho.
						</p>
					</div>

					<div>
						<Link to="/products" className="cart-no-products__link" title="Ver produtos">
							Ver produtos
						</Link>
					</div>
				</section>
			)}
		</>
	)
}