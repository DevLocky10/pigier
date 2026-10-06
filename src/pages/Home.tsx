import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export function Home() {
    return (
        <>
            <Header />

            <main className="flex justify-center items-center p-4">
                <div className="max-w-md text-center">
                    <h1 className="text-4xl font-bold mb-4">Consulter vos résultats en toutes facilités</h1>
                    <p className="text-lg font-bold">
                        Cette platforme centralise l'enssemble de vos résultats et permet un accès rapide et facile à vos informations.
                    </p>
                    <p className="text-lg font-bold">
                        Une seule chose à faire : consulter vos résultats quand vous le souhaitez.
                    </p>
                    <p className="mt-4 flex space-between justify-center gap-4">
                        <Link className="block" to="/level">
                            <button className="btn btn-primary">Consulter mes resultats</button>
                        </Link>
                        <Link className="block" to="/level">
                            <button className="btn btn-secondary">Consulter mes resultats</button>
                        </Link>
                    </p>
                </div>
                <div className="max-w-md w-full h-full">
                    <img className="w-64 h-64" src={logo} alt="logo" />
                </div>
            </main>
            
            <Footer />
        </>
    )
}