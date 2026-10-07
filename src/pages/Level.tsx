import { LinkCard } from "../components/LinkCard";

export function Level() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-4xl font-bold mb-8">Sélectionnez votre niveau</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LinkCard content="Licence 1"/>
            <LinkCard content="Licence 2"/>
            <LinkCard content="Licence 3"/>
        </div>
    </div>
  );
}