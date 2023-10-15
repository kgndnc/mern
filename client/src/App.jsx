import { useCallback, useState } from 'react'

import './App.css'

const endpoint = 'http://localhost:5000/'

function App() {
	const [message, setMessage] = useState('')

	const handleClick = useCallback(event => {
		fetch(endpoint)
			.then(res => res.json())

			.then(data => setMessage(data.message))
	}, [])

	return (
		<>
			<div>Hello!!!</div>
			<p>Message: {message}</p>

			<button onClick={handleClick}>Click me to fetch</button>
		</>
	)
}

export default App

