import { Link } from "react-router-dom"

import './header.css'

export default function Header() {
	return (
		<header className="header">
			<div className="container container--header">
				<figure className="header__logo">
					Logo
				</figure>

				<nav>
					<ul className="list">
						<li className="list__item">
							<Link to="/" title="Início" className="list__link">
								Início
							</Link>
						</li>

						<li className="list__item">
							<Link to="/products" title="Produtos" className="list__link">
								Produtos
							</Link>
						</li>

						<li className="list__item">
							<Link to="/login" title="Entrar" className="list__link">
								Entrar
							</Link>
						</li>

						<li className="list__item">
							<Link to="/register" title="Registrar" className="list__link">
								Registrar
							</Link>
						</li>

						<li className="list__item">
							<Link to="/cart" title="Carrinho" className="list__link">
								Carrinho
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}