export function StudiantForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary p-2">
        <h2 className="font-bold mb-8 text-center text-3xl">Saisissez vos informations</h2>
        <div className="flex flex-col items-center justify-center gap-8 w-full md:max-w-lg">
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="matricule"
                        type="text"
                        placeholder="Entrez votre matricule"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="birthdate"
                        type="date"
                        placeholder="Selectionnez votre date de naissance"
                    />
                </div>
            </form>
        </div>
    </div>
  );
}