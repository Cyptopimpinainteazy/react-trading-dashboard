import requests
from backend.logger import logger
from backend.config import MARKET_DATA_URL

class MarketData:
    def __init__(self):
        self.api_url = MARKET_DATA_URL

    def fetch_latest_data(self):
        try:
            response = requests.get(self.api_url)
            response.raise_for_status()
            data = response.json()
            logger.info("Market data fetched successfully")
            return data
        except requests.RequestException as e:
            logger.error(f"Error fetching market data: {e}")
            return None
