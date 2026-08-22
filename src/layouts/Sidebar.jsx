import { Home, BarChart3, Users, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Inventory", icon: BarChart3 },
  { label: "Booked", icon: Users },
  { label: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 border-r border-gray-200 bg-white lg:block">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <h1 className="text-xl font-bold text-gray-900">MyDashboard</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
export default Sidebar;
