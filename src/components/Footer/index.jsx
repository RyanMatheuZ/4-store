import './footer.css'

import Facebook from '../../img/icon/facebook.svg'
import Instagram from '../../img/icon/instagram.svg'
import LinkedIn from '../../img/icon/linkedin.svg'

export default function Footer() {
	return (
		<div className="footer-box">
			<footer className="footer">
				<div className="footer__container">
					<p className="footer__text">
						4Store
					</p>

					<ul className="footer-list">
						<li>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noopener noreferrer"
								title="Facebook"
								className="footer-list__item"
							>
								<img
									src={ Facebook }
									alt="Facebook"
									draggable="false"
									className="footer-list__image"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
								title="Instagram"
								className="footer-list__item"
							>
								<img
									src={ Instagram }
									alt="Instagram"
									draggable="false"
									className="footer-list__image"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noopener noreferrer"
								title="LinkedIn"
								className="footer-list__item"
							>
								<img
									src={ LinkedIn }
									alt="LinkedIn"
									draggable="false"
									className="footer-list__image"
								/>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	)
}