'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DimensionExplorer from '@/components/DimensionExplorer'
import TokenomyDashboard from '@/components/TokenomyDashboard'
import WorldSelector from '@/components/WorldSelector'
import AvatarProgression from '@/components/AvatarProgression'
import CosmicBackground from '@/components/CosmicBackground'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dimensions')
  const [consciousness, setConsciousness] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setConsciousness(prev => Math.min(prev + 0.01, 30))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden">
      <CosmicBackground />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-effect border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full cosmic-gradient"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    XFI Ecosystem
                  </h1>
                  <p className="text-sm text-gray-400">Conscious Metaverse Platform</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-gray-400">Consciousness Level</p>
                  <p className="text-2xl font-bold text-purple-400">
                    Dimension {consciousness.toFixed(1)}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 cosmic-gradient rounded-lg font-semibold"
                >
                  Connect Wallet
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <nav className="flex gap-2 glass-effect p-2 rounded-lg w-fit">
            {['dimensions', 'worlds', 'tokenomy', 'avatar'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? 'cosmic-gradient text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dimensions' && <DimensionExplorer />}
            {activeTab === 'worlds' && <WorldSelector />}
            {activeTab === 'tokenomy' && <TokenomyDashboard />}
            {activeTab === 'avatar' && <AvatarProgression />}
          </motion.div>
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 right-0 glass-effect border-t border-white/10 py-4"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">30+</p>
                <p className="text-sm text-gray-400">Dimensions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">1,847</p>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-pink-400">$2.4M</p>
                <p className="text-sm text-gray-400">Total Value Locked</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">98.7%</p>
                <p className="text-sm text-gray-400">Network Health</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
