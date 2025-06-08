import Link from "next/link";

export default function Dashboard() {
  // TODO: Add real authentication check and user context
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/dashboard/credentials" className="underline text-blue-600">My Credentials</Link>
        <Link href="/dashboard/submissions" className="underline text-blue-600">My Submissions</Link>
        <Link href="/dashboard/editor" className="underline text-blue-600">Editor Panel</Link>
        <Link href="/dashboard/admin" className="underline text-blue-600">Admin Panel</Link>
      </div>
    </main>
  );
}