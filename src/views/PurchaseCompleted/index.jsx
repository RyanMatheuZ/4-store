import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cartSlice'

import './purchaseCompleted.css'

import Back from '../../img/icon/back.svg'

export default function PurchasedCompleted() {
	const { totalValue, typeOfPayment, couponCode } = useSelector(selectCart)

	return (
		<main className="main">
			<div>
				<header className="purchased-completed-header">
					<h1 className="purchased-completed-header__title">
						Compra finalizada!
					</h1>

					<p className="purchased-completed-header__text">
						Agradecemos por confiar em nós e <br /> em nossos produtos, conte sempre conosco.
					</p>

					<p className="purchased-completed-header__text--blue">
						Faça bom proveito!
					</p>
				</header>

				<section className="purchased-completed-box">
					<ul>
						<li className="purchased-completed-box__item">
							<span className="purchased-completed-box__item-title">
								Método de pagamento:
							</span> { typeOfPayment }
						</li>

						{couponCode && (
							<li className="purchased-completed-box__item">
								<span className="purchased-completed-box__item-title">
									Cupom:
								</span> 4store (10% OFF)
							</li>
						)}

						<li className="purchased-completed-box__item">
							<span className="purchased-completed-box__item-title">
								Total:
							</span> { couponCode ? totalValue - (totalValue * 10 / 100) : totalValue }
						</li>
					</ul>

					<div className="purchased-completed-box__link">
						<Link to="/">
							<img
								src={ Back }
								alt="Voltar ao início"
								title="Voltar ao início"
								width={ 30 }
							/>
						</Link>
					</div>
				</section>
			</div>
		</main>
	)
}