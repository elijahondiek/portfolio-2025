"use client"

import { motion } from "framer-motion"

const achievements = [
  {
    icon: "💰",
    value: "KES 6.6B+",
    label: "Business Impact",
    bgColor: "bg-blue-900/90",
    borderColor: "border-blue-500",
    iconBg: "bg-blue-700",
    delay: 0.2,
  },
  {
    icon: "🏢",
    value: "128K+",
    label: "Organizations Served",
    bgColor: "bg-emerald-900/90",
    borderColor: "border-emerald-500",
    iconBg: "bg-emerald-700",
    delay: 0.4,
  },
  {
    icon: "🎤",
    value: "10+",
    label: "Speaking Events",
    bgColor: "bg-purple-900/90",
    borderColor: "border-purple-500",
    iconBg: "bg-purple-700",
    delay: 0.6,
  },
  {
    icon: "🏆",
    value: "Top Performer",
    label: "Safaricom PLC",
    bgColor: "bg-amber-900/90",
    borderColor: "border-amber-500",
    iconBg: "bg-amber-700",
    delay: 0.8,
  },
]

export default function AchievementsSection() {
  return (
    <section className="block md:hidden w-full px-4 pt-20 pb-0">
      <div className="flex flex-col items-center gap-y-4 gap-x-3">
        {/* Top card - Top Performer */}
        <motion.div
          key="mobile-top-performer"
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: achievements[3].delay }}
        >
          <motion.div
            className={`${achievements[3].bgColor} backdrop-blur-md border-2 ${achievements[3].borderColor} rounded-xl shadow-lg shadow-black/30 w-[220px] p-3 [&_*]:!text-white [&_div.text-sm]:!text-white/90`}
            whileHover={{ scale: 1.05, opacity: 1 }}
            animate={{
              boxShadow: [
                "0 10px 25px rgba(0,0,0,0.3)",
                "0 15px 30px rgba(0,0,0,0.4)",
                "0 10px 25px rgba(0,0,0,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="flex items-center space-x-3">
              <div className={`flex items-center justify-center w-9 h-9 rounded-full ${achievements[3].iconBg} text-white text-lg flex-shrink-0`}>
                {achievements[3].icon}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-white text-base">{achievements[3].value}</div>
                <div className="text-sm font-medium">{achievements[3].label}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* First row of two cards */}
        <div className="flex justify-center gap-x-4 w-full">
          {[0, 1].map((achievementIndex) => {
            const achievement = achievements[achievementIndex]
            return (
              <motion.div
                key={`mobile-${achievementIndex}`}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: achievement.delay }}
              >
                <motion.div
                  className={`${achievement.bgColor} backdrop-blur-md border-2 ${achievement.borderColor} rounded-xl shadow-lg shadow-black/30 w-[140px] p-2 [&_*]:!text-white [&_div.text-xs]:!text-white/90`}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${achievement.iconBg} text-white text-base flex-shrink-0`}>
                      {achievement.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-white text-sm">{achievement.value}</div>
                      <div className="text-xs font-medium">{achievement.label}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
        {/* Second row with just one card */}
        <div className="flex justify-center w-full mt-4">
          <motion.div
            key="mobile-2"
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: achievements[2].delay }}
          >
            <motion.div
              className={`${achievements[2].bgColor} backdrop-blur-md border-2 ${achievements[2].borderColor} rounded-xl shadow-lg shadow-black/30 w-[140px] p-2 [&_*]:!text-white [&_div.text-xs]:!text-white/90`}
              whileHover={{ scale: 1.05, opacity: 1 }}
            >
              <div className="flex items-center space-x-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${achievements[2].iconBg} text-white text-base flex-shrink-0`}>
                  {achievements[2].icon}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-sm">{achievements[2].value}</div>
                  <div className="text-xs font-medium">{achievements[2].label}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
