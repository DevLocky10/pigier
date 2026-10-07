import { useParams } from "react-router-dom";
import { LinkCard } from "../components/LinkCard";

export function Session() {

  const level_id = useParams().level_id;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2">
        <h2 className="font-bold mb-8 text-center text-3xl">Sélectionnez la session</h2>
        <div className="flex flex-col items-center justify-center gap-8 w-full md:max-w-lg">
            <LinkCard to={`/authenticate/${level_id}/ses_1`} content="session 1"/>
            <LinkCard to={`/authenticate/${level_id}/ses_2`} content="session 2"/>
        </div>
    </div>
  );
}