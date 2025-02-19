import DashboardLayout from "@/app/components/DashboardLayout";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <p>Configure forum settings here.</p>
      </div>
    </DashboardLayout>
  );
}
