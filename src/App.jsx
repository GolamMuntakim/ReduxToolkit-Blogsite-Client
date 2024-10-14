import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Provider } from 'react-redux'
import { store } from "./redux/store"

function App() {
 

  return (
    <>
    <Provider store={store}>
    <div className="max-w-screen-xl mx-auto px-2">
       <NavBar></NavBar>
      <main className="mt-8 min-h-screen">
      <Outlet></Outlet>
      </main>
      </div>
    </Provider>
    </>
  )
}

export default App
