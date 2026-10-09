import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-secondary">
        <Link className="block" to="/">
            <img className="h-20 w-20" src={logo} alt="Pigier" />
        </Link>
      
        <Link className="btn btn-primary block" to="/level">
            Consulter mes résultats
        </Link>
    </header>
  )
}
