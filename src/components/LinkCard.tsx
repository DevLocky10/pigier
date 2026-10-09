import { Link } from "react-router-dom";

export function LinkCard({ content, to }: { content: string; to: string }) {
  return (
    <Link to={to} className="linkCard w-full overflow-hidden rounded-lg shadow-md">
      <div className="rounded-lg p-4 text-center text-base leading-snug text-primary transition-colors duration-300 hover:bg-primary hover:text-white sm:text-lg">
        <h2 className="text-center text-base leading-snug sm:text-lg">{content}</h2>
      </div>
    </Link>
  );
}