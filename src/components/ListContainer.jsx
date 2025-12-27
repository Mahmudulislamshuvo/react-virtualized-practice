import { Search } from "lucide-react";

const ListContainer = ({ children, title }) => {
  return (
    <div className="max-w-3xl mx-auto my-12 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="sticky top-0 bg-white border-b border-slate-200 p-6 z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search directory..."
              className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full sm:w-64 transition-all"
            />
          </div>
        </div>
      </div>
      <div className="h-150 overflow-y-auto">{children}</div>
    </div>
  );
};

export default ListContainer;
