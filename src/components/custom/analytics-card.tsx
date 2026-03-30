export function AnalyticsCard({ title, value, change }: { title: string; value: string; change: number }) {
  return (
    <div className="rounded-lg border p-6" style={{ backgroundColor: 'hsl(210, 40%, 98%)' }}>
      <h3 className="text-sm font-medium" style={{ color: 'hsl(215.4, 16.3%, 46.9%)' }}>{title}</h3>
      <p className="text-2xl font-bold mt-2" style={{ color: 'hsl(222.2, 84%, 4.9%)' }}>{value}</p>
      <span className={`text-xs mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </span>
    </div>
  );
}
