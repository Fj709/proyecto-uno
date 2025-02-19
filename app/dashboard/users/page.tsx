import DashboardLayout from "@/app/components/DashboardLayout";

export default function Users() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p>Manage all forum users here.</p>
      </div>
    </DashboardLayout>
  );
}
