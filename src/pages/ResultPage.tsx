import logo from "../assets/logo_pigier_bulettin.png";

export function ResultPage() {
    return (
        <div className="border flex flex-col items-center justify-center min-h-screen p-2">
            <div className="flex items-center justify-between w-full">
                <img className="block aspect-video h-25" src={logo} alt="logo" />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold mb-1 text-center text-xl">RELEVE DE NOTES ET RESULTATS</h2>
                    <p>Année académique 2023-2024</p>
                    <p>Semestre 1</p>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}