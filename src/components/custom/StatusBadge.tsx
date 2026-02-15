import React from 'react';

type Status = 'active' | 'inactive' | 'pending' | 'error';

interface StatusBadgeProps {
  status: Status;
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = {
    active: { bg: '#dcfce7', color: '#166534', dot: '#22c55e' },
    inactive: { bg: '#f3f4f6', color: '#6b7280', dot: '#9ca3af' },
    pending: { bg: '#fef9c3', color: '#854d0e', dot: '#eab308' },
    error: { bg: '#fee2e2', color: '#991b1b', dot: '#ef4444' },
  };

  const c = config[status];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '2px 10px',
        borderRadius: '9999px',
        backgroundColor: c.bg,
        color: c.color,
        fontSize: '12px',
        fontWeight: 500,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: c.dot }} />
      {label || status}
    </span>
  );
}

export default StatusBadge;
