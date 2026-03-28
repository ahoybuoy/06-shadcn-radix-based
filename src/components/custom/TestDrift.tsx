export function TestDrift() {
  return (
    <div style={{ backgroundColor: '#3b82f6', padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: '#1e293b', fontSize: '24px', marginBottom: '12px' }}>
        Shadcn Test
      </h2>
      <p style={{ color: '#94a3b8', fontSize: '14px' }}>
        Hex values that won't match HSL tokens — should get 💡 suggestions.
      </p>
    </div>
  );
}
// Retrigger: bug fixes deployed
