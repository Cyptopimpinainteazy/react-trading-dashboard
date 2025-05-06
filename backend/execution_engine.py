from backend.logger import logger
import ccxt

class ExecutionEngine:
    def __init__(self, exchange_name='binance', api_key=None, secret=None):
        try:
            exchange_class = getattr(ccxt, exchange_name)
            self.exchange = exchange_class({
                'apiKey': api_key,
                'secret': secret,
                'enableRateLimit': True,
            })
            logger.info(f"Connected to exchange: {exchange_name}")
        except Exception as e:
            logger.error(f"Error initializing exchange: {e}")
            self.exchange = None

    def place_order(self, symbol, order_type, side, amount, price=None):
        if not self.exchange:
            logger.error("Exchange not initialized")
            return None
        try:
            order = None
            if order_type == 'market':
                order = self.exchange.create_market_order(symbol, side, amount)
            elif order_type == 'limit':
                order = self.exchange.create_limit_order(symbol, side, amount, price)
            logger.info(f"Order placed: {order}")
            return order
        except Exception as e:
            logger.error(f"Error placing order: {e}")
            return None
