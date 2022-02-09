import { useSelector, useDispatch } from 'react-redux'

import { selectCart } from '../../redux/cartSlice'
import { REMOVE_PRODUCT, SUM_ALL_PRICES } from '../../redux/cartSlice'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CartResult from '../../components/CartResult'
import CartNoProducts from '../../components/CartNoProducts'

import './cart.css'

export default function Cart() {
	const { productCart } = useSelector(selectCart)

	const dispatch = useDispatch()

	const removeProduct = id => {
		dispatch(REMOVE_PRODUCT(id))

		dispatch(SUM_ALL_PRICES())
	}

	return (
		<>
			<Header />

			<main>
				<header>
					<h1 className="header-title">
						Carrinho de Compras
					</h1>
				</header>

				<CartNoProducts />

				<section className="container product-cart">
					{productCart && (
						productCart.map((item, index) => (
							<article key={ item.id } className="product-cart__item">
								<div className="product-cart-box">
									<figure className="product-cart__image">
										<img
											src={ item.image }
											alt={ item.title }
											title={ item.title }
											draggable="false"
											width="100"
										/>
									</figure>

									<div className="product-info">
										<span className="product-info__name" title="Nome">
											{ item.title }
										</span>

										<div className="product-info__price" title="Preço">
											<span className="product-info__price-sign">R$</span>
											{ item.price }
										</div>
									</div>
								</div>

								<div className="remove-box">
									<button
										onClick={ () => removeProduct(item.id) }
										title="Remover produto"
										className="remove-box__button"
									>
										X
									</button>
								</div>
							</article>
						))
					)}
				</section>

				<CartResult />
			</main>

			<Footer />
		</>
	)
}