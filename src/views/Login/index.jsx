import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../forms.css'

export default function Login() {
	return (
		<>
			<Header />

			<main>
				<div className="container">
					<header className="header-form">
						<h1 className="header-form__title">
							Olá novamente!
						</h1>

						<p className="header-form__text">
							Entre em sua conta
						</p>
					</header>

					<form className="form">
						<div className="form__box">
							<label htmlFor="email" className="form__label">
								E-mail:
							</label>

							<input
								type="text"
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
								type="password"
								id="password"
								placeholder="••••••••••"
								className="form__input"
							/>
						</div>

						<div className="form__box">
							<button className="form__button">
								Entrar
							</button>
						</div>
					</form>

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