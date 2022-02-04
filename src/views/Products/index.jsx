import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './products.css'

export default function Products() {
	const [products, setProducts] = useState([])

	async function getProducts() {
		const response = await fetch('https://fakestoreapi.com/products')
		const data = await response.json()

		setProducts(data)
	}

	useEffect(() => {
		getProducts()
	}, [])

	const addToCart = (title, image, price) => {
		console.log(`
			NOME: ${title}, 
			PREÇO: ${price}
			IMAGEM: ${image}
		`)
	}

	return (
		<>
			<Header />

			<main>
				<section className="container product-box">
					{products && (
						products.map(item => (
							<article key={ item.id } className="product-box__item">
								<figure className="product-box__image">
									<img 
										src={ item.image } 
										alt={ item.title } 
										title={ item.title } 
										draggable="false"
										width={ 100 }
									/>
								</figure>

								<span className="product-box__name" title="Nome">
									{ item.title }
								</span>

								<div className="product-box__info">
									<span className="product-box__price" title="Preço">
										<span className="product-box__price-sign">R$</span> 
										{ item.price }
									</span>

									<button 
										onClick={ () => addToCart(item.title, item.image, item.price) }
										className="product-box__button" 
										title="Comprar produto"
									>
										Comprar
									</button>
								</div>
							</article>
						))
					)}
				</section>
			</main>

			<Footer />
		</>
	)
}