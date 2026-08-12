import React, { useMemo, useState } from "react";
import {
  LayoutDashboard,
  Package,
  CalendarCheck,
  ShoppingCart,
  Truck,
  Users,
  BarChart3,
  Settings,
  Search,
  ChevronDown,
  Plus,
  Download,
  MoreHorizontal,
  Menu,
  X,
  Boxes,
  AlertTriangle,
  Ban,
  CircleDollarSign,
  ClipboardList,
  ArrowUpDown,
} from "lucide-react";

const inventoryData = [
  {
    item: "10Hp Air Compressor",
    branch: "Lagos",
    category: "Machinery",
    dubai: 3,
    kubwa: 1,
    price: 0,
    status: "Low Stock",
  },
  {
    item: "Vontron Membrane",
    branch: "Lagos",
    category: "Machinery",
    dubai: 4,
    kubwa: 8,
    price: 160000,
    status: "In Stock",
  },
  {
    item: "5 Ton Foreign Reverse Osmosis Machine",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 15000000,
    status: "Out of Stock",
  },
  {
    item: "2Hp Stainless Pump",
    branch: "Lagos",
    category: "Machinery",
    dubai: 1,
    kubwa: 5,
    price: 250000,
    status: "In Stock",
  },
  {
    item: "8040 Membrane Casing (Slim)",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 0,
    status: "Out of Stock",
  },
  {
    item: "Alamo Carbon",
    branch: "Lagos",
    category: "Machinery",
    dubai: 2,
    kubwa: 0,
    price: 35000,
    status: "Low Stock",
  },
  {
    item: "Pallet Truck",
    branch: "Lagos",
    category: "Machinery",
    dubai: 1,
    kubwa: 1,
    price: 600000,
    status: "Low Stock",
  },
  {
    item: "Semi Automated Shrink Wrapping Machine",
    branch: "Lagos",
    category: "Machinery",
    dubai: 2,
    kubwa: 2,
    price: 7000000,
    status: "Low Stock",
  },
  {
    item: "Dingli Sachet Machine",
    branch: "Lagos",
    category: "Machinery",
    dubai: 2,
    kubwa: 2,
    price: 2600000,
    status: "In Stock",
  },
  {
    item: "3Grams Ceramic Ozone Generator",
    branch: "Lagos",
    category: "Machinery",
    dubai: 1,
    kubwa: 0,
    price: 900000,
    status: "Low Stock",
  },
  {
    item: "1Hp Stainless Pump",
    branch: "Lagos",
    category: "Machinery",
    dubai: 10,
    kubwa: 11,
    price: 120000,
    status: "In Stock",
  },
  {
    item: "Jumbo Carbon Filter Candle",
    branch: "Lagos",
    category: "Machinery",
    dubai: 3,
    kubwa: 5,
    price: 20000,
    status: "In Stock",
  },
  {
    item: "Cool Base Carbon",
    branch: "Lagos",
    category: "Chemicals",
    dubai: 4,
    kubwa: 0,
    price: 0,
    status: "Low Stock",
  },
  {
    item: '30" Absolute Filter',
    branch: "Lagos",
    category: "Machinery",
    dubai: 1,
    kubwa: 1,
    price: 50000,
    status: "Low Stock",
  },
  {
    item: "Ink Jet Date Coding Machine (Small)",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 1650000,
    status: "Out of Stock",
  },
  {
    item: "Plastic Pallet",
    branch: "Lagos",
    category: "Machinery",
    dubai: 7,
    kubwa: 5,
    price: 50000,
    status: "In Stock",
  },
  {
    item: "1054 Fibre Glass",
    branch: "Lagos",
    category: "Machinery",
    dubai: 4,
    kubwa: 6,
    price: 190000,
    status: "In Stock",
  },
  {
    item: "6HP Vertical Pump",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 0,
    status: "Out of Stock",
  },
  {
    item: "Automatic Fibre Glass Head",
    branch: "Lagos",
    category: "Machinery",
    dubai: 2,
    kubwa: 0,
    price: 150000,
    status: "Low Stock",
  },
  {
    item: '30"Micron Filter Candle',
    branch: "Lagos",
    category: "Machinery",
    dubai: 5,
    kubwa: 0,
    price: 3000,
    status: "Low Stock",
  },
  {
    item: "Short Filter Housing",
    branch: "Lagos",
    category: "Machinery",
    dubai: 3,
    kubwa: 0,
    price: 13000,
    status: "Low Stock",
  },
  {
    item: "Activated Carbon (France)",
    branch: "Lagos",
    category: "Machinery",
    dubai: 20,
    kubwa: 29,
    price: 10000,
    status: "In Stock",
  },
  {
    item: "6Grams Ceramic Ozone Generator",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 2200000,
    status: "Out of Stock",
  },
  {
    item: "Birm Carbon",
    branch: "Lagos",
    category: "Chemicals",
    dubai: 0,
    kubwa: 0,
    price: 50000,
    status: "Out of Stock",
  },
  {
    item: "5 Ton Foreign Treatment Plant",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 2200000,
    status: "Out of Stock",
  },
  {
    item: "Panamar Membrane",
    branch: "Lagos",
    category: "Machinery",
    dubai: 64,
    kubwa: 110,
    price: 100000,
    status: "In Stock",
  },
  {
    item: "1252 Fibre Glass",
    branch: "Lagos",
    category: "Machinery",
    dubai: 4,
    kubwa: 7,
    price: 200000,
    status: "In Stock",
  },
  {
    item: "Solenoid Valve 24VDC",
    branch: "ValveTech NG",
    category: "Spare Parts",
    dubai: 18,
    kubwa: 15,
    price: 15000,
    status: "In Stock",
  },
  {
    item: "Cation Resin",
    branch: "",
    category: "Chemicals",
    dubai: 3,
    kubwa: 6,
    price: 70000,
    status: "In Stock",
  },
  {
    item: "Double Tube UV Water Sterilizer",
    branch: "Lagos",
    category: "Machinery",
    dubai: 1,
    kubwa: 3,
    price: 780000,
    status: "Low Stock",
  },
  {
    item: "Domestic R.O Machine (Dispenser)",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 1,
    price: 1500000,
    status: "Low Stock",
  },
  {
    item: "Activated Carbon (Germany)",
    branch: "Lagos",
    category: "Machinery",
    dubai: 3,
    kubwa: 0,
    price: 35000,
    status: "Low Stock",
  },
  {
    item: "1.5HP Vertical Pump",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 500000,
    status: "Out of Stock",
  },
  {
    item: "Cap Loader",
    branch: "",
    category: "Machinery",
    dubai: 2,
    kubwa: 0,
    price: 2500000,
    status: "Low Stock",
  },
  {
    item: "8040 Jumbo Panama Membrane",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 4,
    price: 0,
    status: "Low Stock",
  },
  {
    item: "6 Grams Ozone Generator Anamel",
    branch: "Lagos",
    category: "Machinery",
    dubai: 1,
    kubwa: 0,
    price: 0,
    status: "Low Stock",
  },
  {
    item: "Pet Blow Motor",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 1200000,
    status: "Out of Stock",
  },
  {
    item: "Original Birm",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 2,
    price: 160000,
    status: "Low Stock",
  },
  {
    item: "4040 Membrane Casing",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 56,
    price: 45000,
    status: "In Stock",
  },
  {
    item: "8/8/3 Monoblock Machine",
    branch: "Lagos",
    category: "Machinery",
    dubai: 1,
    kubwa: 2,
    price: 20000000,
    status: "Low Stock",
  },
  {
    item: "2 Ton Foreign Reverse Osmosis Machine",
    branch: "Lagos",
    category: "Machinery",
    dubai: 0,
    kubwa: 0,
    price: 7200000,
    status: "Out of Stock",
  },
  {
    item: "1665 FIBRE GLASS BIG HEAD",
    branch: "Lagos",
    category: "Machinery",
    dubai: 5,
    kubwa: 1,
    price: 500000,
    status: "In Stock",
  },
];

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Inventory", icon: Package, active: true },
  { label: "Booked Items", icon: CalendarCheck },
  { label: "Purchase List", icon: ShoppingCart },
  { label: "Goods Received", icon: Truck },
  { label: "Suppliers", icon: Users },
  { label: "Reports", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const money = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(value);

function StatusBadge({ status }) {
  const styles = {
    "In Stock": "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
    "Low Stock": "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
    "Out of Stock": "bg-red-50 text-red-600 ring-1 ring-red-100",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
        styles[status]
      }`}
    >
      <span
        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
          status === "In Stock"
            ? "bg-emerald-500"
            : status === "Low Stock"
              ? "bg-amber-500"
              : "bg-red-500"
        }`}
      />
      {status}
    </span>
  );
}

function SummaryCard({ icon: Icon, label, value, color }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors[color]}`}
        >
          <Icon size={19} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}

export default function InventoryDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [stockFilter, setStockFilter] = useState("All Stock");
  const [sortAsc, setSortAsc] = useState(true);

  const categories = [
    "All Categories",
    ...new Set(inventoryData.map((item) => item.category)),
  ];

  const filteredItems = useMemo(() => {
    let result = inventoryData.filter((item) => {
      const searchMatch =
        item.item.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      const categoryMatch =
        category === "All Categories" || item.category === category;

      const stockMatch =
        stockFilter === "All Stock" || item.status === stockFilter;

      return searchMatch && categoryMatch && stockMatch;
    });

    result = [...result].sort((a, b) => {
      return sortAsc
        ? a.item.localeCompare(b.item)
        : b.item.localeCompare(a.item);
    });

    return result;
  }, [search, category, stockFilter, sortAsc]);

  const totalQuantity = inventoryData.reduce(
    (sum, item) => sum + item.dubai + item.kubwa,
    0,
  );

  const totalValue = inventoryData.reduce(
    (sum, item) => sum + (item.dubai + item.kubwa) * item.price,
    0,
  );

  const lowStock = inventoryData.filter(
    (item) => item.status === "Low Stock",
  ).length;

  const outOfStock = inventoryData.filter(
    (item) => item.status === "Out of Stock",
  ).length;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[245px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[72px] items-center border-b border-slate-100 px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Boxes size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Bevick
            </span>
          </div>

          <button
            className="ml-auto text-slate-400 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Main Menu
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    item.active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={item.active ? 2.2 : 1.8}
                    className={
                      item.active
                        ? "text-blue-600"
                        : "text-slate-400 group-hover:text-slate-600"
                    }
                  />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* User */}
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-lg p-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
              EK
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-800">
                Ekpe Godwin
              </p>
              <p className="text-xs text-slate-400">Administrator</p>
            </div>

            <MoreHorizontal size={18} className="ml-auto text-slate-400" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-[245px]">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={21} />
            </button>

            <div>
              <p className="text-xs text-slate-400">Inventory</p>
              <h1 className="text-base font-semibold text-slate-900">
                Inventory Management
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              All Branches
              <ChevronDown size={15} />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
              EK
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {/* Page heading */}
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Inventory
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Manage and monitor stock across all your branches.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50">
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>

              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700">
                <Plus size={17} />
                Add Item
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex gap-6 overflow-x-auto border-b border-slate-200">
            {[
              "General Inventory",
              "General Record",
              "Transaction History",
              "Inventory Transactions",
            ].map((tab, index) => (
              <button
                key={tab}
                className={`relative whitespace-nowrap pb-3 text-sm font-medium ${
                  index === 0 ? "text-blue-600" : "text-slate-500"
                }`}
              >
                {tab}

                {index === 0 && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 rounded-full bg-blue-600" />
                )}
              </button>
            ))}
          </div>

          {/* Summary */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <SummaryCard
              icon={Package}
              label="Total Items"
              value="182"
              color="blue"
            />

            <SummaryCard
              icon={Boxes}
              label="Total Quantity"
              value={totalQuantity.toLocaleString()}
              color="violet"
            />

            <SummaryCard
              icon={CircleDollarSign}
              label="Stock Value"
              value="₦417,924,900"
              color="emerald"
            />

            <SummaryCard
              icon={AlertTriangle}
              label="Low Stock"
              value="66"
              color="amber"
            />

            <SummaryCard
              icon={Ban}
              label="Out of Stock"
              value="59"
              color="red"
            />
          </div>

          {/* Table card */}
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Filters */}
            <div className="border-b border-slate-200 p-4">
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <div className="relative w-full xl:max-w-md">
                  <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search items…"
                    className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {/* Category */}
                  <div className="relative">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="h-10 appearance-none rounded-lg border border-slate-200 bg-white pl-3 pr-9 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    >
                      {categories.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>

                  {/* Stock */}
                  <div className="relative">
                    <select
                      value={stockFilter}
                      onChange={(e) => setStockFilter(e.target.value)}
                      className="h-10 appearance-none rounded-lg border border-slate-200 bg-white pl-3 pr-9 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    >
                      <option>All Stock</option>
                      <option>In Stock</option>
                      <option>Low Stock</option>
                      <option>Out of Stock</option>
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>

                  <button
                    onClick={() => setSortAsc((value) => !value)}
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                  >
                    <ArrowUpDown size={15} />
                    Sort
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70">
                    <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Item
                    </th>
                    <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Category
                    </th>
                    <th className="px-4 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Dubai
                    </th>
                    <th className="px-4 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Kubwa
                    </th>
                    <th className="px-4 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Total Items
                    </th>
                    <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Unit
                    </th>
                    <th className="px-4 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Price
                    </th>
                    <th className="px-4 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Value
                    </th>
                    <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredItems.map((item) => {
                    const total = item.dubai + item.kubwa;
                    const value = total * item.price;

                    return (
                      <tr
                        key={item.item}
                        className="group transition hover:bg-slate-50/70"
                      >
                        {/* Item */}
                        <td className="px-5 py-4">
                          <div className="max-w-[270px]">
                            <p className="text-sm font-medium text-slate-800">
                              {item.item}
                            </p>

                            {item.branch && (
                              <p className="mt-1 text-xs text-slate-400">
                                {item.branch}
                              </p>
                            )}
                          </div>
                        </td>

                        {/* Category */}
                        <td className="px-4 py-4">
                          <span className="text-sm text-slate-600">
                            {item.category}
                          </span>
                        </td>

                        {/* Dubai */}
                        <td className="px-4 py-4 text-right">
                          <span className="text-sm font-medium text-slate-700">
                            {item.dubai}
                          </span>
                          <span className="ml-1 text-xs text-slate-400">
                            Unit
                          </span>
                        </td>

                        {/* Kubwa */}
                        <td className="px-4 py-4 text-right">
                          <span className="text-sm font-medium text-slate-700">
                            {item.kubwa}
                          </span>
                          <span className="ml-1 text-xs text-slate-400">
                            Unit
                          </span>
                        </td>

                        {/* Total */}
                        <td className="px-4 py-4 text-right">
                          <span className="text-sm font-semibold text-slate-800">
                            {total}
                          </span>
                          <span className="ml-1 text-xs text-slate-400">
                            Unit
                          </span>
                        </td>

                        {/* Unit */}
                        <td className="px-4 py-4">
                          <span className="text-sm text-slate-500">Unit</span>
                        </td>

                        {/* Price */}
                        <td className="px-4 py-4 text-right">
                          <span className="text-sm text-slate-600">
                            {money(item.price)}
                          </span>
                        </td>

                        {/* Value */}
                        <td className="px-4 py-4 text-right">
                          <span className="text-sm font-medium text-slate-700">
                            {money(value)}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-5 py-4">
                          <StatusBadge status={item.status} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Empty */}
            {filteredItems.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16">
                <ClipboardList className="mb-3 text-slate-300" size={38} />
                <p className="text-sm font-medium text-slate-600">
                  No inventory items found
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Try changing your search or filters.
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Showing{" "}
                <span className="font-medium text-slate-700">
                  {filteredItems.length}
                </span>{" "}
                of{" "}
                <span className="font-medium text-slate-700">
                  {inventoryData.length}
                </span>{" "}
                inventory items
              </p>

              <div className="flex items-center gap-1">
                <button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-400">
                  Previous
                </button>

                <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white">
                  1
                </button>

                <button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  2
                </button>

                <button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  3
                </button>

                <button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
