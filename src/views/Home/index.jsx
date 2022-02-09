import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './home.css'

import Buying from '../../img/buying.png'

export default function Home() {
	useEffect(() => {
		document.title = '4Store | Início'
	},[])

	return (
		<>
			<Header />

			<main>
				<div className="container">
					<section className="section-initial">
						<article className="section-initial__article">
							<h1 className="section-initial__title">
								4Store
							</h1>

							<p className="section-initial__text">
								Encontre aqui os <br /> melhores produtos!
							</p>
						</article>

						<figure className="section-initial__figure">
							<img
								src={ Buying }
								alt="Imagem ilustrativa"
								title="Imagem ilustrativa"
								draggable="false"
								class="section-initial__image"
							/>
						</figure>
					</section>
				</div>

				<div className="container">
					<section className="section-account">
						<Link to="/login" className="section-account__link link--login">
							Entrar
						</Link>

						<Link to="/register" className="section-account__link link--register">
							Registrar
						</Link>
					</section>
				</div>
			</main>

			<Footer />
		</>
	)
}