import { LinkCard } from "../components/LinkCard";

export function Level() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-8 sm:px-6">
        <h2 className="mb-6 text-center text-2xl leading-tight font-bold tracking-tight sm:mb-8 sm:text-3xl">Sélectionnez votre niveau</h2>
        <div className="flex flex-col items-center justify-center gap-8 w-full md:max-w-lg">
            <LinkCard to="/session/lvl_1" content="Licence 1"/>
            <LinkCard to="/session/lvl_2" content="Licence 2"/>
            <LinkCard to="/session/lvl_3" content="Licence 3"/>
            <LinkCard to="/session/lvl_4" content="Master 1"/>
            <LinkCard to="/session/lvl_5" content="Master 2"/>
        </div>
    </div>
  );
}