export default function RefreshButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        style={{
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Refresh
      </button>
    );
  }