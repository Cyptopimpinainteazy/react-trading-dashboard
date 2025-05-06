import React, { useEffect, useState } from 'react';
import GraphComponent from './GraphComponent';

const Dashboard = () => {
  const [marketData, setMarketData] = useState([]);
  const [performance, setPerformance] = useState({});

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('/api/market-data');
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    const fetchPerformance = async () => {
      try {
        const response = await fetch('/api/performance');
        const data = await response.json();
        setPerformance(data);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchMarketData();
    fetchPerformance();

    const interval = setInterval(() => {
      fetchMarketData();
      fetchPerformance();
    }, 60000); // refresh every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Market Overview & Performance</h2>
      <GraphComponent data={marketData} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Performance Metrics</h3>
        <ul>
          <li>Total Return: {performance.total_return || 'N/A'}</li>
          <li>Sharpe Ratio: {performance.sharpe_ratio || 'N/A'}</li>
          <li>Max Drawdown: {performance.max_drawdown || 'N/A'}</li>
          <li>Win Rate: {performance.win_rate || 'N/A'}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
