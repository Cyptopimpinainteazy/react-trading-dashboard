import time
from backend.logger import logger
from backend.trading_bot import TradingBot
from backend.config import TRADE_INTERVAL_SECONDS

def main():
    logger.info("Starting Trading Bot")
    bot = TradingBot()
    try:
        while True:
            bot.run_cycle()
            time.sleep(TRADE_INTERVAL_SECONDS)
    except KeyboardInterrupt:
        logger.info("Trading Bot stopped by user")
    except Exception as e:
        logger.error(f"Fatal error: {e}")
    finally:
        logger.info("Shutting down Trading Bot")

if __name__ == "__main__":
    main()
