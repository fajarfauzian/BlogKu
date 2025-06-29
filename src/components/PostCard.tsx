export default function PostCard({ title, date }: { title: string; date: string }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}