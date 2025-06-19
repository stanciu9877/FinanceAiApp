"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TrendingUp, TrendingDown } from "lucide-react";
import Chip from "@mui/material/Chip";

type StockData = { date: string; price: number };

export const StockDemo = () => {
  const [data, setData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate mock stock data
    const generateStockData = () => {
      const basePrice = 150;
      const days = 30;
      const stockData = [];

      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (days - i));

        const randomChange = (Math.random() - 0.45) * 5;
        const prevPrice = i > 0 ? stockData[i - 1].price : basePrice;
        const price = Number.parseFloat((prevPrice + randomChange).toFixed(2));

        stockData.push({
          date: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          price,
        });
      }

      return stockData;
    };

    setData(generateStockData());
    setLoading(false);
  }, []);

  const firstPrice = data[0]?.price || 0;
  const lastPrice = data[data.length - 1]?.price || 0;
  const priceChange = Number.parseFloat((lastPrice - firstPrice).toFixed(2));
  const percentChange = Number.parseFloat(
    ((priceChange / firstPrice) * 100).toFixed(2)
  );
  const isPositive = priceChange >= 0;

  return (
    <Card className="w-full overflow-hidden bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">AAPL</h3>
            <p className="text-slate-300">Apple Inc.</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">${lastPrice}</div>
            <div
              className={`flex items-center ${
                isPositive ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {isPositive ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              <span>${Math.abs(priceChange)}</span>
              <span className="ml-1">({Math.abs(percentChange)}%)</span>
            </div>
          </div>
        </div>

        <div className="h-[200px] mt-4">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
                  tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <YAxis
                  domain={["dataMin - 5", "dataMax + 5"]}
                  tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
                  tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke={isPositive ? "#10b981" : "#ef4444"}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Chip
            className="bg-white/10 text-white border-white/20"
            label="AI Analysis"
          />
          <Chip
            className="bg-white/10 text-white border-white/20"
            label="Real-time"
          />
          <Chip
            className="bg-white/10 text-white border-white/20"
            label="Favorite"
          />
        </div>
      </CardContent>
    </Card>
  );
};
