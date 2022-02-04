import './footer.css'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="footer">
			<p className="footer__text">
				{ year } - &copy; 4Store
			</p>
		</footer>
	)
}