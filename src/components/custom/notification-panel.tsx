export function NotificationPanel() {
  return (
    <div className="fixed right-[24px] top-[72px] w-[380px] bg-[#1e293b] rounded-xl shadow-2xl p-4 text-white">
      <h3 className="text-[15px] font-semibold mb-3">Notifications</h3>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.08)]">
          <p className="text-sm">New deployment completed</p>
        </div>
      </div>
    </div>
  );
}
