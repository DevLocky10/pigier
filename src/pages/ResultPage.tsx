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
                note: 12,
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

    const data = mockData;

    const notesMajSum = data.results.major.reduce((accumulator, cur) =>  accumulator + (cur.note*cur.cect), 0 );
    const cectMajSum = data.results.major.reduce((accumulator, cur) =>  accumulator + cur.cect, 0 );
    const averageMaj = notesMajSum / cectMajSum;
    
    const notesMinSum = data.results.minor.reduce((accumulator, cur) =>  accumulator + (cur.note*cur.cect), 0 );
    const cectMinSum = data.results.minor.reduce((accumulator, cur) =>  accumulator + cur.cect, 0 );
    const averageMin = notesMinSum / cectMinSum;

    return (
        <div>
            <div className="flex justify-center p-2">
                <button className="btn btn-primary w-full max-w-lg">
                    Télécharger mon relevé de notes
                </button>
            </div>

            <div className="w-full border hidden md:flex flex-col items-center justify-center p-2 gap-8">
                <div className="flex items-center justify-between w-full">
                    <img className="block aspect-video h-25" src={logo} alt="logo" />
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="font-bold mb-1 text-center text-xl">RELEVE DE NOTES ET RESULTATS</h2>
                        <p>Année académique {data.year}</p>
                        <p>{data.semester}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-full">
                    <span className="inline-bolck font-bold">{data.name.toUpperCase()}</span>
                    <span className="inline-bolck">Matricule: {data.matricule}</span>
                    <span className="inline-bolck">Inscrit(e) en: {data.Class}</span>
                </div>
                <div className="w-full flex flex-col align-center gap-5">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-sm text-left" scope="col">UNITE D'ENSSEIGNEMENT</th>
                                <th className="text-sm px-1" scope="col">CECT</th>
                                <th className="text-sm px-1"  scope="col">NOTES</th>
                                <th className="text-sm px-1"  scope="col">RESULTAT</th>
                                <th className="text-sm px-1"  scope="col">SESSION</th>
                                <th className="text-sm px-1"  scope="col">CECT CAPITALISES</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.results.major.map((res) => {
                                    return (
                                        <tr className="">
                                            <td className="py-2">{res.ue}</td>
                                            <td className="text-center py-2">{res.cect}</td>
                                            <td className="text-center py-2">{res.note.toFixed(2)}</td>
                                            <td className="text-center py-2">{res.result}</td>
                                            <td className="text-center py-2">{`${res.session} ${data.year}`}</td>
                                            <td className="text-center py-2">{res.cect_cap}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td className="py-2">Moyenne Pondérée UE Majeures</td>
                                <td className="text-center py-2">{cectMajSum}</td>
                                <td className="text-center py-2">{ averageMaj.toFixed(2) }</td>
                                <td className="text-center py-2">_</td>
                                <td className="text-center py-2">_</td>
                                <td className="text-center py-2 tab">{data.results.major.reduce((accumulator, cur) =>  accumulator + cur.cect_cap, 0 )}</td>
                            </tr>
                        </tbody>  

                        <thead>
                            <tr>
                                <th className="text-sm text-left pt-5" scope="col">UNITE D'ENSSEIGNEMENT</th>
                                <th className="text-sm pt-5" scope="col">CECT</th>
                                <th className="text-sm pt-5" scope="col">NOTES</th>
                                <th className="text-sm pt-5" scope="col">RESULTAT</th>
                                <th className="text-sm pt-5" scope="col">SESSION</th>
                                <th className="text-sm pt-5" scope="col">CECT CAPITALISES</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.results.minor.map((res) => {
                                    return (
                                        <tr className="">
                                            <td className="py-2">{res.ue}</td>
                                            <td className="text-center py-2 ">{res.cect}</td>
                                            <td className="text-center py-2">{res.note.toFixed(2)}</td>
                                            <td className="text-center py-2">{res.result}</td>
                                            <td className="text-center py-2">{`${res.session} ${data.year}`}</td>
                                            <td className="text-center py-2">{res.cect_cap}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td className="py-2">Moyenne Pondérée UE Majeures</td>
                                <td className="text-center py-2">{cectMinSum}</td>
                                <td className="text-center py-2">{ averageMin.toFixed(2) }</td>
                                <td className="text-center py-2">_</td>
                                <td className="text-center py-2">_</td>
                                <td className="text-center py-2 tab">{data.results.minor.reduce((accumulator, cur) =>  accumulator + cur.cect_cap, 0 )}</td>
                            </tr>
                        </tbody>   
                    </table>
                </div>
                <div></div>
            </div>
        </div>
    );
}