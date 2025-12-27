import React from "react";

const SkeletonRow = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-100 h-20 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-200" />
        <div className="space-y-2">
          <div className="h-3 w-24 bg-slate-200 rounded" />
          <div className="h-2 w-32 bg-slate-200 rounded" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-5 w-16 bg-slate-200 rounded-full" />
        <div className="h-4 w-4 bg-slate-200 rounded" />
      </div>
    </div>
  );
};

export default SkeletonRow;
