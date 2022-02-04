import { useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../forms.css'

export default function Register() {
	const [name, setName] = useState('')
	const [id, setId] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const validateForm = e => {
		e.preventDefault()

		if (!name || name.length < 4) {
			alert('Preencha corretamente seu nome!')
		} else if (!id || id.length !== 11) {
			alert('Preencha corretamente seu CPF!')
		} else if (!email) {
			alert('Preencha corretamente seu e-mail!')
		} else if (!password || password.length < 8) {
			alert('Preencha corretamente sua senha!')
		}
	}

	return (
		<>
			<Header />

			<main>
				<div className="container">
					<header className="header-form">
						<h1 className="header-form__title">
							Registre-se!
						</h1>

						<p className="header-form__text">
							Crie sua nova conta
						</p>
					</header>

					<div className="container-form">
						<form className="form">
							<div className="form__box">
								<label htmlFor="name" className="form__label">
									Nome:
								</label>

								<input
									onChange={ e => setName(e.target.value) }
									type="text"
									id="name"
									placeholder="João"
									className="form__input"
								/>
							</div>

							<div className="form__box">
								<label htmlFor="person-id" className="form__label">
									CPF:
								</label>

								<input
									onChange={ e => setId(e.target.value) }
									type="number"
									id="person-id"
									placeholder="xxx.xxx.xxx-xx"
									className="form__input"
								/>
							</div>

							<div className="form__box">
								<label htmlFor="email" className="form__label">
									E-mail:
								</label>

								<input
									onChange={ e => setEmail(e.target.value) }
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
									onChange={ e => setPassword(e.target.value) }
									type="password"
									id="password"
									placeholder="••••••••••"
									className="form__input"
								/>
							</div>

							<div className="form__box">
								<button className="form__button" onClick={ e => validateForm(e) }>
									Registrar
								</button>
							</div>
						</form>
					</div>

					<div className="warning">
						<p className="warning__text">
							<span className="warning__span">Ao registrar-se, você concorda com nossos</span> termos de <br /> uso <span className="warning__span">e</span> política de privacidade
						</p>
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}