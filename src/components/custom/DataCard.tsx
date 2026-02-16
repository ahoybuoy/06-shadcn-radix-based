import React from 'react';

interface DataCardProps {
  title: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
}

export function DataCard({ title, value, description, trend = 'neutral' }: DataCardProps) {
  return (
    <div className="bg-white border-[1px] border-[#e4e4e7] rounded-[12px] p-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <p className="text-[12px] font-medium text-[#71717a] uppercase tracking-[0.05em]">{title}</p>
      <div className="flex items-baseline gap-[8px] mt-[8px]">
        <span className="text-[28px] font-bold text-[#09090b]">{value}</span>
        {trend !== 'neutral' && (
          <span className={`text-[13px] font-semibold ${trend === 'up' ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
            {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
      </div>
      <p className="text-[13px] text-[#a1a1aa] mt-[6px]">{description}</p>
    </div>
  );
}
