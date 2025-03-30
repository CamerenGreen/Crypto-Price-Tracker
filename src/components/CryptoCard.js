export default function CryptoCard({ crypto }) {
    return (
      <div className="card">
        <h2>{crypto.name}</h2>
        <p>Price: ${crypto.current_price}</p>
      </div>
    );
  }