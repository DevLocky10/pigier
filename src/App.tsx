import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Level } from "./pages/Level"
import { Session } from "./pages/session"


function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/level", element: <Level />},
    {path: "/session/:level_id", element: <Session />},
    {path: "/authenticate/:level_id/:session_id", element: <div>Formulaire d'indentification</div>},
    {path: "/result", element: <div>Page des résultats</div>}
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
