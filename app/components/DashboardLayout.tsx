import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white w-64 space-y-6 px-2 py-4">
        <div className="text-xl font-bold text-gray-800">
          {" "}
          <Link href="/">Forum Dashboard</Link>
        </div>
        <nav>
          <Link
            href="/dashboard"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
          >
            Overview
          </Link>
          <Link
            href="/dashboard/posts"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
          >
            Posts
          </Link>
          <Link
            href="/dashboard/users"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
          >
            Users
          </Link>
          <Link
            href="/dashboard/settings"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
          >
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
