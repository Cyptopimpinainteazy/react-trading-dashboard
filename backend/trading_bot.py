from backend.logger import logger
from backend.market_data import MarketData
from backend.trade_signals import generate_signals
from backend.risk_manager import RiskManager
from backend.ai_trade_executor import AITradeExecutor
from backend.performance_tracker import PerformanceTracker

class TradingBot:
    def __init__(self):
        self.market_data = MarketData()
        self.risk_manager = RiskManager()
        self.trade_executor = AITradeExecutor()
        self.performance_tracker = PerformanceTracker()

    def run_cycle(self):
        logger.info("Starting trading cycle")
        try:
            data = self.market_data.fetch_latest_data()
            signals = generate_signals(data)
            if signals:
                filtered_signals = self.risk_manager.apply_risk_management(signals)
                executed_trades = self.trade_executor.execute_trades(filtered_signals)
                self.performance_tracker.record_trades(executed_trades)
            else:
                logger.info("No valid trading signals generated this cycle")
        except Exception as e:
            logger.error(f"Error during trading cycle: {e}")
