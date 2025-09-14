"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Users } from "lucide-react"
import { useState } from "react"

const destinations = [
  {
    name: "Mumbai",
    image: "/mumbai-street-food-markets-colorful-spices-vendors.jpg",
    highlights: ["Street Food Tours", "Bollywood Studios", "Local Trains", "Marine Drive"],
    bestTime: "Oct - Mar",
    localTip: "Try vada pav from street vendors, not restaurants!",
    emoji: "🏙️",
    rating: 4.8,
    experiences: 127,
  },
  {
    name: "Goa",
    image: "/goa-local-market-spices-colorful-fishing-boats-bea.jpg",
    highlights: ["Hidden Beaches", "Spice Plantations", "Portuguese Heritage", "Feni Tasting"],
    bestTime: "Nov - Feb",
    localTip: "Visit Anjuna Flea Market on Wednesdays for authentic finds",
    emoji: "🏖️",
    rating: 4.9,
    experiences: 89,
  },
  {
    name: "Udaipur",
    image: "/udaipur-city-palace-lake-view-traditional-rajastha.jpg",
    highlights: ["Palace Tours", "Lake Cruises", "Miniature Paintings", "Puppet Shows"],
    bestTime: "Oct - Mar",
    localTip: "Watch sunset from Sajjangarh Fort, not City Palace",
    emoji: "🏰",
    rating: 4.7,
    experiences: 156,
  },
]

export function FeaturedDestinations() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const handleExplore = (cityName: string) => {
    setSelectedCity(cityName)
    
    // Scroll to interactive map section
    const mapElement = document.getElementById('interactive-map')
    if (mapElement) {
      mapElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    // Show a brief notification
    setTimeout(() => {
      setSelectedCity(null)
    }, 2000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"🎯 Our Featured Destinations 🎯"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Three incredible cities, countless authentic experiences waiting for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Card
              key={dest.name}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">
                    {dest.emoji} {dest.name}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{dest.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{dest.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{dest.experiences} experiences</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Best Time: {dest.bestTime}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground italic">{dest.localTip}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{"✨ Local Highlights"}</h4>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => handleExplore(dest.name)}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {selectedCity === dest.name ? "Exploring..." : `Explore ${dest.name}`}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
