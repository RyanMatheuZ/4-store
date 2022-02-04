import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../forms.css'

export default function Register() {
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