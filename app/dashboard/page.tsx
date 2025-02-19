import DashboardLayout from "@/app/components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Overview</h1>
        <p>
          Welcome to the forum dashboard. Here you can manage posts, users, and
          settings.
        </p>
      </div>
    </DashboardLayout>
  );
}
