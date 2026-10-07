import { LinkCard } from "../components/LinkCard";

export function Level() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2">
        <h2 className="font-bold mb-8 text-center text-3xl">Sélectionnez votre niveau</h2>
        <div className="flex flex-col items-center justify-center gap-8 w-full md:max-w-lg">
            <LinkCard to="/session/lvl_1" content="Licence 1"/>
            <LinkCard to="/session/lvl_2" content="Licence 2"/>
            <LinkCard to="/session/lvl_3" content="Licence 3"/>
        </div>
    </div>
  );
}