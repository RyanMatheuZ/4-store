import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { selectCart } from '../../redux/cartSlice'

import { TYPE_OF_PAYMENT, CLEAR_CART, ADD_COUPON_CODE } from '../../redux/cartSlice'

import './cartResult.css'

export default function CartResult() {
	const { productCart, totalValue } = useSelector(selectCart)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [userCoupon, setUserCoupon] = useState('')
	const [userTypeOfPayment, setUserTypeOfPayment] = useState('')

	const couponCode = '4store'

	const validateCoupon = () => {
		if (userCoupon !== couponCode) {
			alert('Cupom inválido!')

			return
		}

		alert('Cupom válido!')

		dispatch(ADD_COUPON_CODE(couponCode))
	}

	const finalizaPurchase = payment => {
		if (!userTypeOfPayment) {
			alert('Adicione um método de pagamento!')

			return
		}

		dispatch(TYPE_OF_PAYMENT(payment))

		dispatch(CLEAR_CART())

		navigate('/purchase-completed', { replace: true })
	}

	return (
		<>
			{productCart.length > 0 && (
				<section className="cart-result">
					<div className="cart-result__box">
						<p className="cart-result__text">
							Método de pagamento:
						</p>

						<select
							className="cart-result__select"
							onChange={ e => setUserTypeOfPayment(e.target.value) }
						>
							<option value="">
								MÉTODOS
							</option>
							<option value="Cheque bancário">
								Cheque bancário
							</option>
							<option value="Cartão de crédito">
								Cartão de crédito
							</option>
						</select>
					</div>

					<div className="cart-result__box">
						<p className="cart-result__text">
							Cupom de desconto:
						</p>

						<input
							type="text"
							placeholder="XXXXX"
							className="cart-result__input"
							onChange={ e => setUserCoupon(e.target.value) }
						/>

						<button className="cart-result-coupon" onClick={ () => validateCoupon() }>
							Validar cupom
						</button>
					</div>

					<div className="cart-result__box">
						<p className="cart-result__text">
							• Total: <span className="cart-result__price-sign">R$</span> { totalValue }
						</p>
					</div>

					<div className="cart-result__box">
						<button
							className="cart-result__button"
							onClick={ () => finalizaPurchase(userTypeOfPayment) }
						>
							Finalizar compra
						</button>
					</div>
				</section>
			)}
		</>
	)
}