import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices } from '../utils/fetchCryptoPrices';
import SearchBar from '../components/SearchBar';
import RefreshButton from '../components/RefreshButton';
import CryptoCard from '../components/CryptoCard';
import { useState } from 'react';

export default function Home() {
  const { data: cryptoPrices, isLoading, isError, refetch } = useQuery(
    'cryptoPrices',
    fetchCryptoPrices
  );

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCryptos = cryptoPrices
    ? cryptoPrices.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error fetching data</div>;

  return (
    <div className="container">
      <h1>Crypto Price Tracker</h1>
      <div className="mb-20">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mb-20">
        <RefreshButton onClick={refetch} />
      </div>
      <div>
        {filteredCryptos.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  );
}