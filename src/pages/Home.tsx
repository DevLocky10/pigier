import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export function Home() {
    return (
        <>
            <Header />

            <main className="flex flex-col justify-center items-center p-4">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Consulter vos résultats en toutes facilités</h1>
                    <p>Cette platforme centralise l'enssemble de vos résultats et permet un accès rapide et facile à vos informations.</p>
                    <p>Une seule chose à faire : consulter vos résultats quand vous le souhaitez.</p>
                    <Link className="block" to="/level">
                        <button className="btn btn-primary">Consulter mes resultats</button>
                    </Link>
                </div>
                <div>
                    <img className="w-64 h-64" src={logo} alt="logo" />
                </div>
            </main>
            
            <Footer />
        </>
    )
}