import { useState } from 'react';
import axios from 'axios';
import Layout from './components/Layout';
import InputCard from './components/InputCard';
import ResultCard from './components/ResultCard';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShorten = async (url, alias) => {
    setLoading(true);
    setError(null);
    setResult(null);

    const payload = { url, alias };
    
    try {
      const response = await axios.post(`${API_URL}/api/shorten`, payload);
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.url || err.response?.data?.error || 'Failed to shorten URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <InputCard onShorten={handleShorten} loading={loading} />
      
      {error && (
        <div className="px-4 py-3 bg-red-50 text-red-600 text-[14px] rounded-xl border border-red-100 animate-fade-in mt-4 shadow-sm">
          {error}
        </div>
      )}

      {result && <ResultCard result={result} />}
    </Layout>
  );
}

export default App;
