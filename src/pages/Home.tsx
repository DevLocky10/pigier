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
                    <h1 className="mb-4 text-center text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl">Consulter vos résultats académiques</h1>
                    <p className="text-base leading-relaxed font-medium sm:text-lg">
                        Retrouvez vos résultats scolaires simplement et rapidement. 
                        Aucun compte n'est nécessaire : munissez-vous de votre matricule et de votre date 
                        de naissance pour accéder à vos résultats.
                    </p>
                    <Link className="btn btn-primary block w-full mt-4 text-center" to="/level">
                        Consulter mes résultats
                    </Link>
                </div>

                <div className="max-w-xl flex flex-col justify-center items-center">
                    <div className="mb-1 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
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
