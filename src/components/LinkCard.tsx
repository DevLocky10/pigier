export function LinkCard({ content }: { content: string }) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden linkCard">
      <div className="p-4">
        <h2>{content}</h2>
      </div>
    </div>
  );
}