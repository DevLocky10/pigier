import logo from "../assets/logo_pigier_bulettin.png";

const mockData = {
    year: "2023-2024",
    semester: "Semestre 1",
    name: "Fofana Issiaka Zen Talad",
    matricule: "0071712",
    Class: "LICENCE PROFESSIONNELLE RESEAUX ET GENIE LOGICIEL 1ère ANNEE ",
    results: {
        major: [
            {
                ue: "Informatique Générale Et Certification MOS",
                cect: 6,
                note: 15,
                result: "admis(e)",
                session: "SESS1",
                cect_cap: 6
            },
            {
                ue: "Introduction à L'étude du Droit",
                cect: 5,
                note: 10,
                result: "admis(e)",
                session: "SESS1",
                cect_cap: 5
            },
            {
                ue: "Analyse Mathématique 1",
                cect: 5,
                note: 9.05,
                result: "compensé(e)",
                session: "SESS2",
                cect_cap: 5
            },
            {
                ue: "Probabilité et Statistique Inférentielle",
                cect: 4,
                note: 16,
                result: "admis(e)",
                session: "SESS2",
                cect_cap: 4
            },
        ],
        minor: [
            {
                ue: "Techniques D'expression Française 1",
                cect: 3,
                note: 10,
                result: "admis(e)",
                session: "SESS1",
                cect_cap: 3
            },
            {
                ue: "Anglais Général",
                cect: 3,
                note: 6.67,
                result: "compensé(e)",
                session: "SESS2",
                cect_cap: 3
            },
            {
                ue: "Technique De Recherche Documentaire",
                cect: 2,
                note: 11,
                result: "compensé(e)",
                session: "SESS2",
                cect_cap: 2
            },
            {
                ue: "Connaissance Du Monde et Relations Internationnales",
                cect: 2,
                note: 10,
                result: "admis(e)",
                session: "SESS2",
                cect_cap: 2
            },
        ],
    }
}

export function ResultPage() {


    return (
        <div className="border flex flex-col items-center justify-center min-h-screen p-2 gap-8">
           
        </div>
    );
}