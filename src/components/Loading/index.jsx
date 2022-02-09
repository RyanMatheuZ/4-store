import LoadingGif from '../../img/video/loading.gif'

import './loading.css'

export default function Loading() {
	return (
		<figure className="loading-figure">
			<img
				src={ LoadingGif }
				alt="Carregando..."
				title="Carregando..."
				draggable="false"
				width="55"
			/>
		</figure>
	)
}