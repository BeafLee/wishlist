'use client'

import { motion } from 'framer-motion'
import Countdown from 'react-countdown'
import { Gift, Cake, Instagram, ExternalLink } from 'lucide-react'

const wishlistItems = [
  { name: "PlayStation 5", image: "/placeholder.svg?height=200&width=200", link: "https://www.playstation.com" },
  { name: "AirPods Pro", image: "/placeholder.svg?height=200&width=200", link: "https://www.apple.com/airpods-pro/" },
  { name: "Kindle Paperwhite", image: "/placeholder.svg?height=200&width=200" },
  { name: "Nike Air Max", image: "/placeholder.svg?height=200&width=200", link: "https://www.nike.com" },
  { name: "DJI Drone", image: "/placeholder.svg?height=200&width=200" },
  { name: "Nintendo Switch", image: "/placeholder.svg?height=200&width=200", link: "https://www.nintendo.com" },
]

const BirthdayWishlist = () => {
  const birthday = new Date('2024-11-20T00:00:00')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white p-8">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Wishlist de cumpleaños de Carlos Chung
      </motion.h1>

      <motion.div 
        className="flex justify-center items-center space-x-6 mb-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Cake className="w-8 h-8" />
        <Countdown 
          date={birthday} 
          renderer={({ days, hours, minutes, seconds }) => (
            <span className="text-4xl md:text-5xl font-bold">
              {days}d {hours}h {minutes}m {seconds}s
            </span>
          )}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {wishlistItems.map((item, index) => (
          <motion.div 
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 hover:text-blue-100 transition-colors">
                View <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a 
          href="https://www.instagram.com/carlos.chung.20/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-xl hover:text-pink-300 transition-colors"
        >
          <Instagram className="w-6 h-6" />
          <span>Carlos Chung</span>
        </a>
      </motion.div>

      <motion.div 
        className="absolute top-4 right-4"
        whileHover={{ rotate: 20 }}
      >
        <Gift className="w-12 h-12 text-yellow-300" />
      </motion.div>
    </div>
  )
}

export default BirthdayWishlist