import './footer.css'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="footer">
			<p className="footer__text">
				4Store
			</p>

			<p className="footer__text">
				{ year } - Todos os direitos reservados
			</p>
		</footer>
	)
}