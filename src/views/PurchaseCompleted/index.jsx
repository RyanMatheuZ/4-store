import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectCart } from '../../redux/cartSlice'
import { ADD_COUPON_CODE } from '../../redux/cartSlice'

import './purchaseCompleted.css'

import Back from '../../img/icon/back.svg'

export default function PurchasedCompleted() {
	const { totalValue, typeOfPayment, couponCode } = useSelector(selectCart)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const clearCoupon = () =>  {
		dispatch(ADD_COUPON_CODE(''))

		navigate('/', { replace: true })
	}

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
								Total: R$
							</span> { couponCode ? totalValue - (totalValue * 10 / 100) : totalValue }
						</li>
					</ul>

					<div className="purchased-completed-box__button-box">
						<button
							onClick={ () => clearCoupon() }
							title="Voltar ao início"
							className="purchased-completed-box__button"
						>
							<img
								src={ Back }
								alt="Voltar ao início"
								width="25"
							/>
						</button>
					</div>
				</section>
			</div>
		</main>
	)
}