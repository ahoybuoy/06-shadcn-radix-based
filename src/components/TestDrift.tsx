import React from 'react';

export function TestDrift() {
  return (
    <div
      className="bg-[#020817] text-[#f8fafc] p-[20px] rounded-[10px] border border-[#1e293b]"
    >
      <h3 className="text-[18px] font-[600] text-[#e2e8f0] mb-[12px]">
        Quick Settings
      </h3>
      <p className="text-[14px] text-[#94a3b8] leading-[1.6]">
        Should use shadcn/ui tokens like hsl(var(--primary)) instead of hardcoded hex.
      </p>
      <div className="flex gap-[8px] mt-[16px]">
        <button
          className="bg-[#3b82f6] text-white px-[16px] py-[8px] rounded-[6px] text-[14px]"
          style={{ border: 'none' }}
        >
          Save
        </button>
        <button
          className="bg-transparent text-[#3b82f6] px-[16px] py-[8px] rounded-[6px] text-[14px] border border-[#3b82f6]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
// trigger re-scan
// re-scan v2
