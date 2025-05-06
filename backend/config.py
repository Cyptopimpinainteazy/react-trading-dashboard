import os

# Trading Bot Configuration

TRADING_API_KEY = os.environ.get('TRADING_API_KEY', 'your_api_key_here')
MARKET_DATA_URL = os.environ.get('MARKET_DATA_URL', 'https://api.marketdata.example.com')
STOP_LOSS_PERCENTAGE = float(os.environ.get('STOP_LOSS_PERCENTAGE', 0.02))  # 2%
TAKE_PROFIT_PERCENTAGE = float(os.environ.get('TAKE_PROFIT_PERCENTAGE', 0.05))  # 5%
TRADE_INTERVAL_SECONDS = int(os.environ.get('TRADE_INTERVAL_SECONDS', 60))  # 1 minute
LOG_FILE_PATH = os.environ.get('LOG_FILE_PATH', 'logs/trading_bot.log')
