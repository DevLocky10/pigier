import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Home() {
    return (
        <>
            <Header />

            <main className="flex flex-col justify-center items-center p-4">
                <h1 className="text-3xl font-bold mb-4">Bienvenue sur notre application</h1>
                <p className="text-lg text-center mb-4">
                    Cette application vous permet de gérer vos niveaux, sessions et résultats de manière efficace.
                </p>
                <p className="text-lg text-center">
                    Utilisez le menu ci-dessus pour naviguer à travers les différentes sections de l'application.
                </p>
            </main>
            
            <Footer />
        </>
    )
}