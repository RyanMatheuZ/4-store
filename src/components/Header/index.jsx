import { Link } from "react-router-dom"

import './header.css'

import Logo from '../../img/icon/logo.svg'

export default function Header() {
	return (
		<header className="header">
			<div className="container container--header">
				<Link to="/" className="header__logo">
					<img
						src={ Logo }
						alt="4Store"
						title="4Store"
						draggable="false"
						width="40"
					/>
				</Link>

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