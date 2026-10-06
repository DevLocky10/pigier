import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-secondary">
        <Link className="block" to="/level">
            <img src="../assets/logo.png" alt="logo" />
        </Link>
      
        <Link className="block" to="/level">
            <button className="btn btn-primary">Consulter mes resultats</button>
        </Link>
    </header>
  )
}