import { useParams } from "react-router-dom";
import { LinkCard } from "../components/LinkCard";

export function Session() {

  const level_id = useParams().level_id;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-8 sm:px-6">
        <h2 className="mb-6 text-center text-2xl leading-tight font-bold tracking-tight sm:mb-8 sm:text-3xl">Sélectionnez la session</h2>
        <div className="flex flex-col items-center justify-center gap-8 w-full md:max-w-lg">
            <LinkCard to={`/authenticate/${level_id}/ses_1`} content="session 1"/>
            <LinkCard to={`/authenticate/${level_id}/ses_2`} content="session 2"/>
        </div>
    </div>
  );
}