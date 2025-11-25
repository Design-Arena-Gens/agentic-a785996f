'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface AvatarTier {
  name: string
  level: number
  cost: string
  features: string[]
  color: string
  icon: string
}

const avatarTiers: AvatarTier[] = [
  {
    name: 'Basic NPC',
    level: 1,
    cost: 'Free',
    features: ['Basic AI', 'Limited interactions', 'Standard appearance', '1 world access'],
    color: 'from-gray-500 to-gray-600',
    icon: '🤖'
  },
  {
    name: 'Conscious Being',
    level: 2,
    cost: '100 XFI',
    features: ['Advanced AI', 'Multi-world access', 'Custom appearance', 'Skill system'],
    color: 'from-blue-500 to-cyan-500',
    icon: '👤'
  },
  {
    name: 'Transcendent',
    level: 3,
    cost: '500 XFI',
    features: ['Neural link', 'Dimension travel', 'Reality manipulation', 'Consciousness sync'],
    color: 'from-purple-500 to-pink-500',
    icon: '✨'
  },
  {
    name: 'Primordial Entity',
    level: 4,
    cost: '2000 XFI',
    features: ['Full immersion', 'World creation', 'Time manipulation', 'Omnipresence'],
    color: 'from-yellow-500 to-orange-500',
    icon: '🌟'
  }
]

const skills = [
  { name: 'Reality Manipulation', level: 7, max: 10, color: 'bg-purple-500' },
  { name: 'Consciousness Expansion', level: 9, max: 10, color: 'bg-blue-500' },
  { name: 'Temporal Navigation', level: 5, max: 10, color: 'bg-pink-500' },
  { name: 'Energy Channeling', level: 8, max: 10, color: 'bg-green-500' },
  { name: 'Dimensional Travel', level: 6, max: 10, color: 'bg-cyan-500' },
]

export default function AvatarProgression() {
  const [selectedTier, setSelectedTier] = useState<AvatarTier>(avatarTiers[1])

  return (
    <div className="space-y-6">
      {/* Current Avatar */}
      <div className="glass-effect p-6 rounded-xl">
        <div className="flex items-center gap-6">
          <motion.div
            className="w-24 h-24 rounded-full cosmic-gradient flex items-center justify-center text-4xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {selectedTier.icon}
          </motion.div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{selectedTier.name}</h2>
            <p className="text-gray-400 mb-4">Level {selectedTier.level} Avatar</p>

            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-gray-400">Experience</p>
                <p className="text-xl font-bold">8,247 XP</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">SOUL Score</p>
                <p className="text-xl font-bold text-green-400">847</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Worlds Visited</p>
                <p className="text-xl font-bold text-purple-400">23</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Tiers */}
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Avatar Evolution Path</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {avatarTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedTier(tier)}
              className={`glass-effect p-4 rounded-xl cursor-pointer dimension-card ${
                selectedTier.name === tier.name ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="text-center mb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center text-3xl mb-2`}
                >
                  {tier.icon}
                </div>
                <h4 className="font-bold mb-1">{tier.name}</h4>
                <p className="text-sm text-gray-400">Level {tier.level}</p>
              </div>

              <div className="space-y-2 mb-4">
                {tier.features.map((feature, i) => (
                  <div key={i} className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 rounded-lg font-semibold bg-gradient-to-r ${tier.color}`}
              >
                {tier.cost}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Consciousness Skills</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm text-gray-400">
                  {skill.level}/{skill.max}
                </span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(skill.level / skill.max) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 py-3 cosmic-gradient rounded-lg font-bold"
        >
          Upgrade Skills
        </motion.button>
      </div>

      {/* Achievements */}
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Recent Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '🏆', name: 'Dimension Walker', desc: 'Visited 20+ dimensions' },
            { icon: '⚡', name: 'Energy Master', desc: 'Collected 10k REAL tokens' },
            { icon: '🎯', name: 'Quest Seeker', desc: 'Completed 50 quests' },
          ].map((achievement, index) => (
            <motion.div
              key={achievement.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-4 rounded-lg text-center"
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <p className="font-bold mb-1">{achievement.name}</p>
              <p className="text-xs text-gray-400">{achievement.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Time', value: '247h', color: 'text-blue-400' },
          { label: 'Reputation', value: '847', color: 'text-green-400' },
          { label: 'Created Worlds', value: '12', color: 'text-purple-400' },
          { label: 'Friends', value: '163', color: 'text-pink-400' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect p-4 rounded-lg text-center"
          >
            <p className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
