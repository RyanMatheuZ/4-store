import { Link } from 'react-router-dom'
import { useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../forms.css'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const userLogin = 'ryan@ryan.com'
	const userPassword = '12345678'

	const validateForm = e => {
		e.preventDefault()

		if (!email) {
			alert('Preencha corretamente seu e-mail!')
		} else if (!password || password.length < 4) {
			alert('Preencha corretamente sua senha!')
		} else {
			if (email !== userLogin || password !== userPassword) {
				alert('Usuário não registrado!')

				return
			}

			alert('Bem-vindo, Ryan!')
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