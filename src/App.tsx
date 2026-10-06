import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"


function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/level", element: <div>Page des Niveaux</div>},
    {path: "/session/:level_id", element: <div>Page des sessions</div>},
    {path: "/authenticate/:level_id/:session_id", element: <div>Formulaire d'indentification</div>},
    {path: "/result", element: <div>Page des résultats</div>}
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
