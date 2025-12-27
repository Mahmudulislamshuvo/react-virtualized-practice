import { User, MoreVertical } from "lucide-react";

const ListItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 border-b border-slate-100 transition-colors h-20">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          <User size={20} />
          <img className="rounded-full" src={item.avatar} alt={item.name} />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">{item.name}</h4>
          <p className="text-xs text-slate-500">{item.position}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span
          className={`px-2 py-1 text-[10px] font-medium rounded-full ${
            item.status === "Active"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {item.status}
        </span>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
