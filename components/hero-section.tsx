"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Heart, Camera } from "lucide-react"

const destinations = [
  {
    name: "Mumbai",
    image: "/mumbai-gateway-of-india-sunset-vibrant-street-life.jpg",
    tagline: "The City of Dreams",
  },
  {
    name: "Goa",
    image: "/goa-beach-sunset-palm-trees-colorful-boats.jpg",
    tagline: "Beaches & Culture",
  },
  {
    name: "Udaipur",
    image: "/udaipur-city-palace-lake-reflection-golden-hour.jpg",
    tagline: "City of Lakes",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {destinations.map((dest, index) => (
          <div
            key={dest.name}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={dest.image || "/placeholder.svg"} alt={dest.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance">
            Inner<span className="text-secondary">Miles</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 text-pretty">{"🇮🇳 Experience India like a Local 🇮🇳"}</p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto text-pretty">
            Discover authentic experiences in Mumbai, Goa & Udaipur with our AI local guide
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for local experiences, food, culture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-lg"
              />
            </div>
            <Button size="lg" className="h-14 px-8 text-lg font-semibold pulse-glow">
              <MapPin className="mr-2 h-5 w-5" />
              Explore Now
            </Button>
          </div>

          {/* Current Destination Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">{destinations[currentSlide].name}</h3>
            <p className="text-white/80 text-lg">{destinations[currentSlide].tagline}</p>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 float-animation">
          <Heart className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute top-32 right-16 float-animation" style={{ animationDelay: "1s" }}>
          <Camera className="h-10 w-10 text-secondary" />
        </div>
        <div className="absolute bottom-32 left-20 float-animation" style={{ animationDelay: "2s" }}>
          <MapPin className="h-6 w-6 text-accent" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
