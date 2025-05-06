import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/Dashboard';
import TradeHistorySidebar from './components/TradeHistorySidebar';
import MetamaskButton from './components/MetamaskButton';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  if (!loggedIn) {
    return <Login onLogin={setLoggedIn} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Dashboard />
      </div>
      <aside>
        <TradeHistorySidebar />
        <div className="mt-4">
          <MetamaskButton />
        </div>
      </aside>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
