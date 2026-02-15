import React from 'react';

// Metrics card that bypasses the shadcn/HSL token system
export function MetricsCard({ title, value, change }: {
  title: string;
  value: string;
  change: number;
}) {
  return (
    <div className="p-[20px] bg-white rounded-[12px] border border-[#e2e8f0] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between mb-[14px]">
        <h3 className="text-[15px] font-semibold text-[#334155]">{title}</h3>
        <span className={`text-[12px] font-medium px-[8px] py-[2px] rounded-full ${
          change >= 0 ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fef2f2] text-[#991b1b]'
        }`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
      </div>

      <p className="text-[32px] font-bold text-[#0f172a] tracking-[-0.02em]">
        {value}
      </p>

      <div className="mt-[16px] flex items-center gap-[12px]">
        <div className="flex-1 h-[4px] bg-[#f1f5f9] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3b82f6] rounded-full duration-[400ms]"
            style={{ width: `${Math.min(Math.abs(change) * 5, 100)}%` }}
          />
        </div>
        <span className="text-[11px] text-[#94a3b8] font-medium">
          vs last week
        </span>
      </div>

      <button className="mt-[14px] w-full py-[8px] text-[13px] font-medium text-[#3b82f6] bg-[#eff6ff] rounded-[8px] border border-[#bfdbfe] opacity-[0.9] hover:opacity-100 z-[5] duration-[150ms]">
        View Details
      </button>
    </div>
  );
}
