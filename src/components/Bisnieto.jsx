import { useContext } from "react"
import AppContext from "../context/AppContext"

const Bisnieto = () => {
	const nombre = useContext(AppContext)
	return (
		<div className="bg-gray-800">
			<h1>Bisnieto: {nombre}</h1>
		</div>
	)
}

export default Bisnieto
