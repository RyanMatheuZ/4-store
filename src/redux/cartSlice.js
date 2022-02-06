import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
	name: 'shop',

	initialState: {
		productCart: [],
		typeOfPayment: '',
		totalValue: 0
	},

	reducers: {
		ADD_TO_CART(state, { payload }) {
			return {
				...state,

				productCart: [ ...state.productCart, payload ]
			}
		},

		REMOVE_PRODUCT(state, { payload }) {
			return {
				...state,

				productCart: state.productCart.filter(item => item.id !== payload)
			}
		},

		SUM_ALL_PRICES(state) {
			return {
				...state,

				totalValue: state.productCart.reduce(
					(prevVal, item) => item.price + prevVal, 0
				)
			}
		},

		SUBTRACT_ALL_PRICES(state) {
			return {
				...state,

				totalValue: state.productCart.reduce(
					(prevVal, item) => item.price - prevVal, 0
				)
			}
		},

		TYPE_OF_PAYMENT(state, { payload }) {
			return {
				...state,

				typeOfPayment: payload
			}
		}
	}
})

export const {
	ADD_TO_CART,
	REMOVE_PRODUCT,
	SUM_ALL_PRICES,
	SUBTRACT_ALL_PRICES,
	TYPE_OF_PAYMENT
} = slice.actions

export const selectCart = state => state.shop

export default slice.reducer