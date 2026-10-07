import { Link } from "react-router-dom";

export function LinkCard({ content, to }: { content: string; to: string }) {
  return (
    <Link to={to} className="w-full rounded-lg shadow-md overflow-hidden linkCard">
      <div className="p-4 text-center text-primary cursor-pointer 
                    hover:bg-primary hover:text-white transition-colors duration-300 rounded-lg">
        <h2 className="text-center sm:text-sm">{content}</h2>
      </div>
    </Link>
  );
}