from backend.logger import logger
import csv
import os
from datetime import datetime

class PerformanceTracker:
    def __init__(self, filepath='performance.csv'):
        self.filepath = filepath
        if not os.path.exists(self.filepath):
            with open(self.filepath, mode='w', newline='') as file:
                writer = csv.writer(file)
                writer.writerow(['timestamp', 'trade_id', 'profit_loss', 'details'])

    def record_trades(self, trades):
        try:
            with open(self.filepath, mode='a', newline='') as file:
                writer = csv.writer(file)
                for trade in trades:
                    writer.writerow([
                        datetime.utcnow().isoformat(),
                        trade.get('trade_id', ''),
                        trade.get('profit_loss', 0),
                        trade.get('details', '')
                    ])
            logger.info(f"Recorded {len(trades)} trades to performance log")
        except Exception as e:
            logger.error(f"Error recording trades: {e}")
