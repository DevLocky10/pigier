import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <Header />

            <main className="flex flex-col justify-center items-center p-4">
                <div className="max-w-xl text-justify mb-5">
                    <h1 className="text-4xl font-bold mb-4 text-center">Consulter vos résultats académiques</h1>
                    <p className="text-lg font-bold">
                        Retrouvez vos résultats scolaires simplement et rapidement. 
                        Aucun compte n'est nécessaire : munissez-vous de votre matricule et de votre date 
                        de naissance pour accéder à vos résultats.
                    </p>
                    <Link className="block w-full" to="/level">
                        <button className="btn btn-primary">Consulter mes resultats</button>
                    </Link>
                </div>

                <div className="max-w-xl text-justify italic">
                    <h2 className="text-xl font-semibold mb-2">Simple</h2>
                    <p className="text-md italic">Aucun compte à créer. Vos informations suffisent pour consulter vos résultats.</p>
                </div>
                <div className="max-w-xl text-justify italic">
                    <h2 className="text-xl font-semibold mb-2">Rapide</h2>
                    <p className="text-md italic">Accédez à vos résultats en quelques instants, depuis n'importe quel appareil.</p>
                </div>
                <div className="max-w-xl text-justify italic">
                    <h2 className="text-xl font-semibold mb-2">Sécurisé</h2>
                    <p className="text-md italic">L'accès à vos résultats est soumis à la vérification de vos informations personnelles.</p>
                </div>
            </main>
            
            <Footer />
        </>
    )
}