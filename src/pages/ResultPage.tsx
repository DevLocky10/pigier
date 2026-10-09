import { useState } from "react";
import html2pdf from "html2pdf.js";
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

type ResultItem = (typeof mockData.results.major)[number];

function ResultSection({ title, items }: { title: string; items: ResultItem[] }) {
    const cectTotal = items.reduce((total, item) => total + item.cect, 0);
    const capitalizedTotal = items.reduce((total, item) => total + item.cect_cap, 0);
    const weightedTotal = items.reduce((total, item) => total + item.note * item.cect, 0);
    const average = cectTotal === 0 ? 0 : weightedTotal / cectTotal;

    return (
        <section className="space-y-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h2 className="text-lg leading-6 font-bold text-slate-900 sm:text-xl">{title}</h2>
                    <p className="text-sm leading-5 text-slate-500 sm:text-base">{items.length} unité(s) d’enseignement</p>
                </div>
                <p className="text-sm leading-5 text-slate-600 sm:text-base">
                    Moyenne pondérée : <span className="font-bold text-slate-900">{average.toFixed(2)} / 20</span>
                </p>
            </div>

            <div className="space-y-3 md:hidden print:hidden">
                {items.map((item) => {
                    const isPassed = item.result.toLocaleLowerCase("fr").includes("admis");
                    return (
                        <article key={item.ue} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-base leading-6 font-semibold text-slate-900">{item.ue}</h3>
                                <span className={"shrink-0 rounded-full px-2.5 py-1 text-sm leading-5 font-semibold " + (isPassed ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800")}>{item.result}</span>
                            </div>
                            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm leading-5">
                                <div><dt className="text-slate-500">Note</dt><dd className="mt-0.5 font-semibold text-slate-900">{item.note.toFixed(2)} / 20</dd></div>
                                <div><dt className="text-slate-500">Crédits CECT</dt><dd className="mt-0.5 font-semibold text-slate-900">{item.cect}</dd></div>
                                <div><dt className="text-slate-500">Session</dt><dd className="mt-0.5 font-semibold text-slate-900">{item.session}</dd></div>
                                <div><dt className="text-slate-500">Capitalisés</dt><dd className="mt-0.5 font-semibold text-slate-900">{item.cect_cap} CECT</dd></div>
                            </dl>
                        </article>
                    );
                })}
                <div className="flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-sm leading-5">
                    <span className="font-semibold text-slate-700">Total · {average.toFixed(2)} / 20</span>
                    <span className="font-bold text-[#034AA6]">{capitalizedTotal} / {cectTotal} CECT</span>
                </div>
            </div>

            <div className="hidden overflow-x-auto rounded-xl border border-slate-200 md:block print:block print:overflow-visible">
                <table className="w-full min-w-[800px] border-collapse text-sm leading-5 print:min-w-0 print:text-xs">
                    <caption className="sr-only">{title} : notes, crédits et résultats</caption>
                    <thead className="bg-slate-100 text-left text-sm font-semibold text-slate-600">
                        <tr>
                            <th className="px-4 py-3" scope="col">Unité d’enseignement</th>
                            <th className="px-3 py-3 text-center" scope="col">CECT</th>
                            <th className="px-3 py-3 text-center" scope="col">Note / 20</th>
                            <th className="px-3 py-3 text-center" scope="col">Résultat</th>
                            <th className="px-3 py-3 text-center" scope="col">Session</th>
                            <th className="px-3 py-3 text-center" scope="col">CECT capitalisés</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        {items.map((item) => {
                            const isPassed = item.result.toLocaleLowerCase("fr").includes("admis");
                            return (
                                <tr key={item.ue} className="transition-colors hover:bg-slate-50">
                                    <th className="max-w-[360px] px-4 py-3 text-left font-medium text-slate-800" scope="row">{item.ue}</th>
                                    <td className="px-3 py-3 text-center tabular-nums">{item.cect}</td>
                                    <td className="px-3 py-3 text-center font-semibold tabular-nums">{item.note.toFixed(2)}</td>
                                    <td className="px-3 py-3 text-center">
                                        <span className={"inline-flex rounded-full px-2.5 py-1 text-sm leading-5 font-semibold print:px-1 print:py-0 " + (isPassed ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800")}>{item.result}</span>
                                    </td>
                                    <td className="px-3 py-3 text-center">{item.session}</td>
                                    <td className="px-3 py-3 text-center tabular-nums">{item.cect_cap}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className="bg-blue-50 font-semibold text-slate-800">
                        <tr>
                            <th className="px-4 py-3 text-left" scope="row">Total · moyenne {average.toFixed(2)} / 20</th>
                            <td className="px-3 py-3 text-center tabular-nums">{cectTotal}</td>
                            <td className="px-3 py-3 text-center tabular-nums">{average.toFixed(2)}</td>
                            <td className="px-3 py-3 text-center" colSpan={2}>CECT capitalisés</td>
                            <td className="px-3 py-3 text-center tabular-nums">{capitalizedTotal}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    );
}

export function ResultPage() {
    const data = mockData;
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState("");
    const cectTotal = data.results.major.reduce((total, item) => total + item.cect, 0)
        + data.results.minor.reduce((total, item) => total + item.cect, 0);
    const capitalizedTotal = data.results.major.reduce((total, item) => total + item.cect_cap, 0)
        + data.results.minor.reduce((total, item) => total + item.cect_cap, 0);

    const handleDownload = async () => {
        const element = document.getElementById("print-section");

        if (!element) {
            setDownloadError("Le relevé à télécharger est introuvable.");
            return;
        }

        setDownloadError("");
        setIsDownloading(true);

        try {
            await html2pdf()
            .set({
                margin: 8,
                filename: "releve-" + data.matricule + ".pdf",
                image: { type: "jpeg" as const, quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
                pagebreak: { mode: ["avoid-all", "css", "legacy"] },
            })
            .from(element)
            .save();
        } catch (error) {
            console.error("Échec de la génération du relevé PDF", error);
            setDownloadError("Le PDF n’a pas pu être généré. Réessaie ou vérifie les paramètres de téléchargement du navigateur.");
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 px-3 py-5 text-slate-900 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-4 flex justify-end sm:mb-6 print:hidden">
                    <div className="w-full sm:w-auto">
                        <button className="btn btn-primary w-full text-sm sm:w-auto sm:text-base disabled:cursor-wait disabled:opacity-60" onClick={handleDownload} type="button" disabled={isDownloading} aria-busy={isDownloading}>
                            {isDownloading ? "Génération du PDF…" : "Télécharger le relevé PDF"}
                        </button>
                        {downloadError && <p className="mt-2 text-sm text-red-700" role="alert">{downloadError}</p>}
                    </div>
                </div>

                <div id="print-section" className="space-y-6 rounded-2xl bg-white p-4 shadow-sm sm:space-y-8 sm:p-7 print:space-y-4 print:rounded-none print:p-0 print:shadow-none">
                    <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
                        <img className="h-14 w-auto self-start object-contain sm:h-16" src={logo} alt="Pigier" />
                        <div className="sm:text-right">
                            <p className="text-sm leading-5 font-semibold uppercase tracking-wide text-[#034AA6] sm:text-base">Année académique {data.year} · {data.semester}</p>
                            <h1 className="mt-1 text-2xl leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl">Relevé de notes et résultats</h1>
                        </div>
                    </div>

                    <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-5 text-amber-900 sm:text-base">
                        Démonstration : ces résultats sont fictifs et ne correspondent pas aux informations saisies.
                    </p>

                    <section className="grid gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-5 sm:grid-cols-3 sm:gap-4 sm:p-5 sm:text-base">
                        <div><p className="text-sm text-slate-500">Étudiant</p><p className="mt-1 font-semibold">{data.name}</p></div>
                        <div><p className="text-sm text-slate-500">Matricule</p><p className="mt-1 font-semibold">{data.matricule}</p></div>
                        <div><p className="text-sm text-slate-500">Formation</p><p className="mt-1 font-semibold">{data.Class.trim()}</p></div>
                    </section>

                    <div className="space-y-6 sm:space-y-8">
                        <ResultSection title="Unités d’enseignement majeures" items={data.results.major} />
                        <ResultSection title="Unités d’enseignement mineures" items={data.results.minor} />
                    </div>

                    <section aria-label="Total des crédits" className="flex flex-col gap-1 border-t border-slate-200 pt-4 text-sm leading-5 sm:flex-row sm:items-center sm:justify-between sm:text-base">
                        <h2 className="font-semibold text-slate-700">Total des CECT capitalisés</h2>
                        <p className="text-lg leading-6 font-bold text-[#034AA6] sm:text-xl">{capitalizedTotal} / {cectTotal} CECT</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
