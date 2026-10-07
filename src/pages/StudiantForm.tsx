import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function StudiantForm() {
    const navigate = useNavigate();

    //const { level_id, session_id } = useParams<{ level_id: string; session_id: string }>();
    const [ matricule, setMatricule ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");

    const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/result");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-2">
            <h2 className="font-bold mb-8 text-center text-3xl">Saisissez vos informations</h2>
            <div className="flex flex-col items-center justify-center gap-8 w-full md:max-w-lg">
                <form className="w-full max-w-lg bg-secondary p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <input
                            className="shadow text-gray-100 appearance-none border border-primary  rounded w-full py-2 px-3 leading-tight focus:border-2 focus:outline-none focus:shadow-outline"
                            id="matricule"
                            type="text"
                            placeholder="Entrez votre matricule"
                            value={matricule}
                            onChange={(e) => setMatricule(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="shadow text-gray-100 appearance-none border border-primary  rounded w-full py-2 px-3 leading-tight focus:border-2 focus:outline-none focus:shadow-outline"
                            id="birthdate"
                            type="date"
                            placeholder="JJ/MM/AAAA"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <button
                            className="bg-primary w-full hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={onSubmit}
                        >
                            Conculter mes resultats
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}