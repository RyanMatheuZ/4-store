import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCart } from '../../redux/cartSlice'
import { ADD_TO_CART, SUM_ALL_PRICES } from '../../redux/cartSlice'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

import 'sweetalert2/dist/sweetalert2.css'
import './products.css'

export default function Products() {
	const { productCart } = useSelector(selectCart)

	const [products, setProducts] = useState([])

	const dispatch = useDispatch()

	async function getProducts() {
		const response = await fetch('https://fakestoreapi.com/products')
		const data = await response.json()

		setProducts(data)
	}

	useEffect(() => {
		getProducts()
	}, [])

	const addToCart = (id, title, image, price) =>  {
		let productAlreadyExists = productCart.find(product => product.title === title)

		if (productAlreadyExists) {
			Swal.fire({
				title: 'Produto já existe no carrinho!',
				text: title,
				icon: 'error',
				confirmButtonText: 'Ok'
			})

			return
		}

		dispatch(ADD_TO_CART({id, title, image, price}))

		Swal.fire({
			title: 'Produto adicionado',
			text: title,
			icon: 'success',
			confirmButtonText: 'Ok'
		})

		dispatch(SUM_ALL_PRICES())
	}

	return (
		<>
			<Header />

			<main>
				<header>
					<h1 className="header-title">
						Produtos
					</h1>
				</header>

				{products.length === 0 && (
					<Loading />
				)}

				{products.length > 0 && (
					<section className="container product-box">
						{products && (
							products.map((item, index) => (
								<article key={ item.id } className="product-box__item">
									<figure className="product-box__image">
										<img
											src={ item.image }
											alt={ item.title }
											title={ item.title }
											draggable="false"
											width="100"
										/>
									</figure>

									<span className="product-box__name" title="Nome">
										{ item.title }
									</span>

									<div className="product-box__info">
										<span className="product-box__price" title="Preço">
											<span className="product-box__price-sign">R$</span> { item.price }
										</span>

										<div>
											<button
												onClick={
													() => addToCart(item.id, item.title, item.image, item.price)
												}
												className="product-box__button"
												title="Comprar produto"
											>
												Comprar
											</button>
										</div>
									</div>
								</article>
							))
						)}
					</section>
				)}
			</main>

			<Footer />
		</>
	)
}