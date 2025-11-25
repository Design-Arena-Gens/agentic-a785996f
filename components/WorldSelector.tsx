'use client'

import { motion } from 'framer-motion'

interface World {
  name: string
  type: string
  description: string
  population: string
  color: string
  features: string[]
}

const worlds: World[] = [
  {
    name: 'Aethelgard',
    type: 'RPG Evolutivo',
    description: 'Epic fantasy realm with dynamic character evolution and procedural storytelling',
    population: '847 citizens',
    color: 'from-amber-500 to-red-500',
    features: ['Character Evolution', 'Epic Quests', 'Guild Systems', 'Dynamic Economy']
  },
  {
    name: 'Veridia Prime',
    type: 'Ecosistema Simbiótico',
    description: 'Living ecosystem where players and environment co-evolve in symbiotic harmony',
    population: '623 guardians',
    color: 'from-green-500 to-emerald-500',
    features: ['Bio-Engineering', 'Ecosystem Balance', 'Symbiotic Bonds', 'Terraforming']
  },
  {
    name: 'Kiber Nexus',
    type: 'Realidad Hackeable',
    description: 'Cyberpunk metaverse where code manipulation shapes reality itself',
    population: '1,204 hackers',
    color: 'from-cyan-500 to-blue-500',
    features: ['Reality Hacking', 'Neural Networks', 'AI Companions', 'Code Artifacts']
  }
]

export default function WorldSelector() {
  return (
    <div className="space-y-6">
      <div className="glass-effect p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Foundational Worlds</h2>
        <p className="text-gray-400">Choose your starting reality</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {worlds.map((world, index) => (
          <motion.div
            key={world.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-xl overflow-hidden dimension-card"
          >
            <div className={`h-48 bg-gradient-to-br ${world.color} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">{world.name}</h3>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs">
                {world.type}
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-300 mb-4">{world.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">{world.population}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-gray-300">Key Features:</p>
                <div className="grid grid-cols-2 gap-2">
                  {world.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-xs px-2 py-1 bg-white/5 rounded text-center"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-bold bg-gradient-to-r ${world.color}`}
              >
                Enter {world.name}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* World Creation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect p-8 rounded-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Create Your Own World</h3>
            <p className="text-gray-400">Design a custom reality with unique physics and rules</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 cosmic-gradient rounded-lg font-semibold"
          >
            + New World
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="glass-effect p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-purple-400 mb-1">∞</p>
            <p className="text-sm text-gray-400">Possible Worlds</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-blue-400 mb-1">127</p>
            <p className="text-sm text-gray-400">Community Worlds</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-pink-400 mb-1">43</p>
            <p className="text-sm text-gray-400">Your Creations</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
