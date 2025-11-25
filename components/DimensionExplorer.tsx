'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Dimension {
  id: number
  name: string
  range: string
  description: string
  color: string
  physics: string
}

const dimensions: Dimension[] = [
  {
    id: 1,
    name: 'Physical Base',
    range: '1-12',
    description: 'Standard physics foundation with classical mechanics and relativistic laws',
    color: 'from-blue-500 to-cyan-500',
    physics: 'Classical + Quantum'
  },
  {
    id: 13,
    name: 'Consciousness Expanded',
    range: '13-20',
    description: 'Thought-responsive reality where consciousness shapes matter directly',
    color: 'from-purple-500 to-pink-500',
    physics: 'Psycho-Quantum'
  },
  {
    id: 21,
    name: 'Metacosmic',
    range: '21-30',
    description: 'Pure existence beyond form, reality as information patterns',
    color: 'from-yellow-500 to-orange-500',
    physics: 'Information-Based'
  },
  {
    id: 31,
    name: 'Primordial',
    range: '31+',
    description: 'Pre-cosmic source realm where potential exists before manifestation',
    color: 'from-green-500 to-emerald-500',
    physics: 'Pre-Existence'
  }
]

export default function DimensionExplorer() {
  const [selectedDimension, setSelectedDimension] = useState<Dimension | null>(null)

  return (
    <div className="space-y-6">
      <div className="glass-effect p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Dimensional Architecture</h2>
        <p className="text-gray-400">Explore 30+ interconnected reality layers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dimensions.map((dimension, index) => (
          <motion.div
            key={dimension.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedDimension(dimension)}
            className="dimension-card glass-effect p-6 rounded-xl cursor-pointer"
          >
            <div className={`h-2 w-full rounded-full bg-gradient-to-r ${dimension.color} mb-4`} />

            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold">{dimension.name}</h3>
              <span className="text-xs text-gray-400">D{dimension.range}</span>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              {dimension.description}
            </p>

            <div className="flex items-center justify-between text-xs">
              <span className="text-purple-400">{dimension.physics}</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1 bg-white/10 rounded-full"
              >
                Enter
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reality Layers Visualization */}
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Reality Layers</h3>
        <div className="relative h-64">
          {[...Array(30)].map((_, i) => {
            const intensity = i / 30
            return (
              <motion.div
                key={i}
                className="absolute w-full h-2 rounded-full"
                style={{
                  bottom: `${(i / 30) * 100}%`,
                  background: `linear-gradient(90deg,
                    rgba(59, 130, 246, ${1 - intensity}),
                    rgba(147, 51, 234, ${intensity}))`,
                  opacity: 0.5 + intensity * 0.5
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: i * 0.02 }}
              />
            )
          })}
        </div>
      </div>

      {/* Selected Dimension Details */}
      {selectedDimension && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-effect p-8 rounded-xl"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{selectedDimension.name}</h3>
              <p className="text-gray-400">Dimensions {selectedDimension.range}</p>
            </div>
            <button
              onClick={() => setSelectedDimension(null)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className={`h-3 w-full rounded-full bg-gradient-to-r ${selectedDimension.color} mb-6`} />

          <p className="text-lg mb-6">{selectedDimension.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="glass-effect p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Physics Model</p>
              <p className="font-semibold">{selectedDimension.physics}</p>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Accessibility</p>
              <p className="font-semibold text-green-400">Active</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-lg font-bold bg-gradient-to-r ${selectedDimension.color}`}
          >
            Enter Dimension {selectedDimension.range}
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
