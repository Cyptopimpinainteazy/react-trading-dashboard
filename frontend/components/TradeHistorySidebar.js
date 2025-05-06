import React, { useEffect, useState } from 'react';

const TradeHistorySidebar = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTradeHistory = async () => {
      try {
        const response = await fetch('/api/trade-history');
        const data = await response.json();
        setTrades(data);
      } catch (error) {
        console.error('Error fetching trade history:', error);
      }
    };

    fetchTradeHistory();

    const interval = setInterval(() => {
      fetchTradeHistory();
    }, 60000); // refresh every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg max-h-96 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Trade History</h2>
      <ul>
        {trades.map((trade) => (
          <li key={trade.trade_id} className="border-b border-gray-700 py-2 hover:bg-gray-700 cursor-pointer">
            <div>Time: {new Date(trade.timestamp).toLocaleString()}</div>
            <div>Entry: {trade.entry_price}</div>
            <div>Exit: {trade.exit_price}</div>
            <div>Profit/Loss: {trade.profit_loss}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradeHistorySidebar;
