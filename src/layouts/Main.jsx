import { Home, BarChart3, Users, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Analytics", icon: BarChart3 },
  { label: "Customers", icon: Users },
  { label: "Settings", icon: Settings },
];

function Main() {
  return (
    <main className="min-w-0 flex-1 bg-gray-50">
      {/* Main Header */}
      <header className="flex h-16 items-center border-b border-gray-200 bg-white px-6">
        <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back 👋</h1>

        <p className="mt-2 text-gray-500">
          Here's what's happening with your business today.
        </p>
      </div>
    </main>
  );
}

export default Main;
