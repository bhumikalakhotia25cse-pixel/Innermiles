"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, DollarSign, Users } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Sunrise at Sajjangarh Fort",
    location: "Udaipur",
    image: "/sajjangarh-fort-sunrise-golden-hour-udaipur.jpg",
    price: "₹200",
    duration: "3 hours",
    rating: 4.9,
    reviews: 234,
    category: "Hidden Gems",
    emoji: "🌅",
    localSecret: "Best kept secret - locals go here, not City Palace!",
    highlights: ["No crowds", "Perfect sunrise view", "Local guide stories"],
  },
  {
    title: "Anjuna Flea Market Stories",
    location: "Goa",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹150",
    duration: "4 hours",
    rating: 4.7,
    reviews: 189,
    category: "Cultural",
    emoji: "🛍️",
    localSecret: "Started by hippies in the 1960s - hear the real stories!",
    highlights: ["Hippie history", "Authentic crafts", "Local food"],
  },
  {
    title: "Mumbai Local Train Experience",
    location: "Mumbai",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹100",
    duration: "2 hours",
    rating: 4.8,
    reviews: 456,
    category: "Authentic",
    emoji: "🚂",
    localSecret: "Learn the unwritten rules of Mumbai's lifeline!",
    highlights: ["Rush hour tips", "Local etiquette", "Street food stops"],
  },
  {
    title: "Spice Plantation Walk",
    location: "Goa",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹300",
    duration: "5 hours",
    rating: 4.6,
    reviews: 167,
    category: "Nature",
    emoji: "🌿",
    localSecret: "Family-run plantation with 200-year-old recipes!",
    highlights: ["Traditional cooking", "Spice tasting", "Family stories"],
  },
  {
    title: "Miniature Painting Workshop",
    location: "Udaipur",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹500",
    duration: "3 hours",
    rating: 4.9,
    reviews: 123,
    category: "Art & Craft",
    emoji: "🎨",
    localSecret: "Learn from 5th generation master artist!",
    highlights: ["Traditional techniques", "Take home artwork", "Artist stories"],
  },
  {
    title: "Dharavi Reality Tour",
    location: "Mumbai",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹400",
    duration: "3 hours",
    rating: 4.8,
    reviews: 289,
    category: "Community",
    emoji: "🏘️",
    localSecret: "See the entrepreneurial spirit, not just poverty!",
    highlights: ["Small industries", "Community spirit", "Real stories"],
  },
]

export function LocalExperiences() {
  const [bookingExperience, setBookingExperience] = useState<string | null>(null)

  const handleBookExperience = (experienceTitle: string) => {
    setBookingExperience(experienceTitle)
    
    // Scroll to interactive map section
    const mapElement = document.getElementById('interactive-map')
    if (mapElement) {
      mapElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    // Reset booking state after 3 seconds
    setTimeout(() => {
      setBookingExperience(null)
    }, 3000)
  }

  const handleViewAll = () => {
    // Scroll to interactive map section
    const mapElement = document.getElementById('interactive-map')
    if (mapElement) {
      mapElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"🔥 Authentic Local Experiences 🔥"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Skip the tourist traps! These are the experiences locals actually recommend
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card
              key={experience.title}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground">{experience.category}</Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold">{experience.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-secondary-foreground">
                    {experience.emoji} {experience.location}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-balance">{experience.title}</h3>

                <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    {experience.price}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {experience.reviews} reviews
                  </div>
                </div>

                <div className="bg-accent/10 border-l-4 border-accent p-3 mb-4 rounded-r">
                  <p className="text-sm font-medium text-accent-foreground">
                    {"💡 Local Secret: "}
                    {experience.localSecret}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">{"✨ What makes it special:"}</h4>
                  <div className="flex flex-wrap gap-1">
                    {experience.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => handleBookExperience(experience.title)}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {bookingExperience === experience.title ? "Booking..." : "Book Experience"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleViewAll}
            className="px-8 bg-transparent"
          >
            View All Experiences
          </Button>
        </div>
      </div>
    </section>
  )
}
