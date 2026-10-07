interface CardProps {
  title: string;
  description: string;
}

export function InformationCard({ title, description }: CardProps) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden infoCard">
      <div className="p-4">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}