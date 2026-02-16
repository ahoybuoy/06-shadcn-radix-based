import React from 'react';

interface KpiCardProps {
  label: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export function KpiCard({ label, value, change, icon }: KpiCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <div className="text-muted-foreground">{icon}</div>
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-[13px] mt-[4px] ${isPositive ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
          {isPositive ? '+' : ''}{change}% from last period
        </p>
      </div>
      <div className="mt-4 h-[2px] bg-[#e5e7eb] rounded-full overflow-hidden">
        <div className="h-full bg-[#6366f1] rounded-full" style={{ width: '65%' }} />
      </div>
    </div>
  );
}
