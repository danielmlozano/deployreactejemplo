import "./App.css"
import Hijo from "./components/Hijo"
import AppContext from "./context/AppContext"

const App = () => {
	const nombre = "Daniel"
	return (
		<div className="container mx-auto py-10">
			<AppContext.Provider value={nombre}>
				<Hijo nombre={nombre} />
			</AppContext.Provider>
		</div>
	)
}

export default App
