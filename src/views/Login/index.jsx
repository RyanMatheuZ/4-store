import { useState } from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import 'sweetalert2/dist/sweetalert2.css'
import '../../forms.css'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const userLogin = 'ryan@ryan.com'
	const userPassword = '12345678'

	const validateForm = e => {
		e.preventDefault()

		if (!email) {
			Swal.fire({
				title: 'Erro',
				text: 'Preencha corretamente seu e-mail!',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		} else if (!password || password.length < 4) {
			Swal.fire({
				title: 'Erro',
				text: 'Preencha corretamente sua senha!',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		} else {
			if (email !== userLogin || password !== userPassword) {
				Swal.fire({
					title: 'Erro',
					text: 'Usuário não registrado!',
					icon: 'error',
					confirmButtonText: 'Ok'
				})

				return
			}

			Swal.fire({
				title: 'Login realizado',
				text: 'Bem-vindo, Ryan!',
				icon: 'success',
				confirmButtonText: 'Ok'
			})
		}
	}

	return (
		<>
			<Header />

			<main>
				<div className="container container--form">
					<header className="header-form">
						<h1 className="header-form__title">
							Olá novamente!
						</h1>

						<p className="header-form__text">
							Entre em sua conta
						</p>
					</header>

					<div className="container-form">
						<form className="form">
							<div className="form__box">
								<label htmlFor="email" className="form__label">
									E-mail:
								</label>

								<input
									onChange={ e => setEmail(e.target.value) }
									type="email"
									id="email"
									placeholder="nome@endereco.com"
									className="form__input"
								/>
							</div>

							<div className="form__box">
								<label htmlFor="password" className="form__label">
									Senha:
								</label>

								<input
									onChange={ e => setPassword(e.target.value) }
									type="password"
									id="password"
									placeholder="••••••••••"
									className="form__input"
								/>
							</div>

							<div className="form__box">
								<button className="form__button" onClick={ (e) => validateForm(e) }>
									Entrar
								</button>
							</div>
						</form>
					</div>

					<div className="warning">
						<p className="warning__text">
							Não possui uma conta ainda?
						</p>

						<Link to="/register" className="warning__link">
							Criar uma agora
						</Link>
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}