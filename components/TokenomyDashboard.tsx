'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

interface Token {
  symbol: string
  name: string
  balance: number
  value: number
  change: number
  color: string
  icon: string
}

const tokens: Token[] = [
  { symbol: 'XFI', name: 'Governance Token', balance: 1247.5, value: 4368.25, change: 12.4, color: '#8B5CF6', icon: '⚡' },
  { symbol: 'REAL', name: 'Reality Energy', balance: 8934.2, value: 2680.26, change: 8.7, color: '#3B82F6', icon: '🌀' },
  { symbol: 'TIME', name: 'Conscious Attention', balance: 2156.8, value: 1723.44, change: -3.2, color: '#EC4899', icon: '⏳' },
  { symbol: 'SOUL', name: 'Reputation Score', balance: 847.0, value: 0, change: 15.8, color: '#10B981', icon: '✨' },
]

const priceData = [
  { time: '00:00', xfi: 3.2, real: 0.28, soul: 0 },
  { time: '04:00', xfi: 3.4, real: 0.29, soul: 0 },
  { time: '08:00', xfi: 3.3, real: 0.31, soul: 0 },
  { time: '12:00', xfi: 3.5, real: 0.30, soul: 0 },
  { time: '16:00', xfi: 3.6, real: 0.32, soul: 0 },
  { time: '20:00', xfi: 3.5, real: 0.30, soul: 0 },
  { time: '24:00', xfi: 3.8, real: 0.33, soul: 0 },
]

const distribution = [
  { name: 'Staking Rewards', value: 40, color: '#8B5CF6' },
  { name: 'Creator Rewards', value: 25, color: '#3B82F6' },
  { name: 'Liquidity Pool', value: 20, color: '#EC4899' },
  { name: 'Treasury', value: 10, color: '#10B981' },
  { name: 'Team', value: 5, color: '#F59E0B' },
]

export default function TokenomyDashboard() {
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    const sum = tokens.reduce((acc, token) => acc + token.value, 0)
    setTotalValue(sum)
  }, [])

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="glass-effect p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Token Portfolio</h2>
        <p className="text-4xl font-bold text-purple-400 mb-2">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-green-400">+8.7% (24h)</p>
      </div>

      {/* Token Balances */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tokens.map((token, index) => (
          <motion.div
            key={token.symbol}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect p-6 rounded-xl dimension-card"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{token.icon}</span>
              <span
                className={`text-sm px-2 py-1 rounded ${
                  token.change >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}
              >
                {token.change >= 0 ? '+' : ''}{token.change}%
              </span>
            </div>

            <h3 className="text-lg font-bold mb-1">{token.symbol}</h3>
            <p className="text-xs text-gray-400 mb-4">{token.name}</p>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Balance</span>
                <span className="font-semibold">{token.balance.toLocaleString()}</span>
              </div>
              {token.value > 0 && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Value</span>
                  <span className="font-semibold text-purple-400">
                    ${token.value.toLocaleString()}
                  </span>
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 py-2 rounded-lg font-semibold"
              style={{ backgroundColor: token.color }}
            >
              Trade {token.symbol}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Price Chart */}
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Price History (24h)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={priceData}>
            <XAxis dataKey="time" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
              }}
            />
            <Line type="monotone" dataKey="xfi" stroke="#8B5CF6" strokeWidth={2} />
            <Line type="monotone" dataKey="real" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Token Distribution */}
        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Token Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={distribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {distribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {distribution.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Economics */}
        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Circular Economy</h3>
          <div className="space-y-4">
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Annual Emission</span>
                <span className="font-semibold text-purple-400">5% APY ↓</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full cosmic-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>

            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Transaction Burn</span>
                <span className="font-semibold text-orange-400">1%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full neural-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </div>

            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Fee Burn Rate</span>
                <span className="font-semibold text-red-400">50%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">40%</p>
                <p className="text-xs text-gray-400">Staking APY</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">25%</p>
                <p className="text-xs text-gray-400">Creator Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass-effect p-6 rounded-xl text-center dimension-card"
        >
          <p className="text-2xl mb-2">💎</p>
          <p className="font-bold mb-1">Stake XFI</p>
          <p className="text-sm text-gray-400">Earn 40% APY</p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass-effect p-6 rounded-xl text-center dimension-card"
        >
          <p className="text-2xl mb-2">🔄</p>
          <p className="font-bold mb-1">Swap Tokens</p>
          <p className="text-sm text-gray-400">Low fees</p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass-effect p-6 rounded-xl text-center dimension-card"
        >
          <p className="text-2xl mb-2">🌊</p>
          <p className="font-bold mb-1">Add Liquidity</p>
          <p className="text-sm text-gray-400">Earn fees</p>
        </motion.button>
      </div>
    </div>
  )
}
