import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { InformationCard } from "../components/informationCard";

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
                    <Link className="block w-full mt-4" to="/level">
                        <button className="btn btn-primary">Consulter mes resultats</button>
                    </Link>
                </div>

                <div className="max-w-xl flex flex-col justify-center items-center">
                    <div className="grid grid-cols-2 mb-1 gap-2">
                        <InformationCard title="Rapide" description="Accédez à vos résultats en quelques instants, depuis n'importe quel appareil." />
                        <InformationCard title="Sécurisé" description="L'accès à vos résultats est soumis à la vérification de vos informations personnelles." />
                    </div>
                    <div>
                        <InformationCard title="Facile" description="Notre interface conviviale vous permet de naviguer facilement et de trouver vos résultats sans tracas." />
                    </div>
                </div>
            </main>
            
            <Footer />
        </>
    )
}