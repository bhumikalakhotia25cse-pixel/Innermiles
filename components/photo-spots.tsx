"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, MapPin, Clock, Users, Heart, Share2 } from "lucide-react"

const photoSpots = [
  {
    id: 1,
    name: "Gateway of India Sunset",
    location: "Mumbai",
    image: "/mumbai-gateway-of-india-sunset-vibrant-street-life.jpg",
    bestTime: "Golden Hour (6-7 PM)",
    difficulty: "Easy",
    crowdLevel: "High",
    tips: "Arrive early for the best angle. Use the boats in the background for depth.",
    likes: 2847,
    category: "Iconic",
  },
  {
    id: 2,
    name: "Palolem Beach Sunrise",
    location: "Goa",
    image: "/goa-beach-sunset-palm-trees-colorful-boats.jpg",
    bestTime: "Early Morning (6-7 AM)",
    difficulty: "Easy",
    crowdLevel: "Low",
    tips: "Perfect for silhouette shots with palm trees. Bring a wide-angle lens.",
    likes: 1923,
    category: "Nature",
  },
  {
    id: 3,
    name: "City Palace Courtyard",
    location: "Udaipur",
    image: "/udaipur-city-palace-ornate-architecture-colorful-c.jpg",
    bestTime: "Morning (9-11 AM)",
    difficulty: "Medium",
    crowdLevel: "Medium",
    tips: "Focus on the intricate details and use natural light from the courtyards.",
    likes: 3156,
    category: "Architecture",
  },
  {
    id: 4,
    name: "Bandra-Worli Sea Link",
    location: "Mumbai",
    image: "/mumbai-bandra-worli-sea-link-cable-bridge-night-li.jpg",
    bestTime: "Blue Hour (7-8 PM)",
    difficulty: "Hard",
    crowdLevel: "Medium",
    tips: "Long exposure shots work best. Find elevated viewpoints for dramatic angles.",
    likes: 4231,
    category: "Urban",
  },
  {
    id: 5,
    name: "Spice Plantation Trails",
    location: "Goa",
    image: "/goa-spice-plantation-lush-green-tropical-plants-co.jpg",
    bestTime: "Morning (8-10 AM)",
    difficulty: "Medium",
    crowdLevel: "Low",
    tips: "Capture the vibrant colors of spices and lush greenery. Macro shots work great.",
    likes: 1654,
    category: "Nature",
  },
  {
    id: 6,
    name: "Lake Pichola Reflection",
    location: "Udaipur",
    image: "/udaipur-lake-pichola-palace-reflection-golden-hour.jpg",
    bestTime: "Golden Hour (6-7 PM)",
    difficulty: "Easy",
    crowdLevel: "High",
    tips: "Perfect reflections during calm weather. Boat rides offer unique perspectives.",
    likes: 5892,
    category: "Scenic",
  },
]

const categories = ["All", "Iconic", "Nature", "Architecture", "Urban", "Scenic"]

export function PhotoSpots() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedSpots, setLikedSpots] = useState<number[]>([])

  const filteredSpots =
    selectedCategory === "All" ? photoSpots : photoSpots.filter((spot) => spot.category === selectedCategory)

  const toggleLike = (spotId: number) => {
    setLikedSpots((prev) => (prev.includes(spotId) ? prev.filter((id) => id !== spotId) : [...prev, spotId]))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCrowdColor = (crowdLevel: string) => {
    switch (crowdLevel) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "High":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="h-8 w-8 text-orange-600" />
            <h2 className="text-4xl font-bold text-gray-900">📸 Instagram-Worthy Photo Spots</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most photogenic locations across Mumbai, Goa, and Udaipur. From iconic landmarks to hidden
            gems, capture memories that will make your feed shine!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                  : "border-orange-200 text-orange-700 hover:bg-orange-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Photo Spots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpots.map((spot) => (
            <Card
              key={spot.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={spot.image || "/placeholder.svg"}
                  alt={spot.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-600 text-white px-3 py-1">{spot.location}</Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white p-2"
                    onClick={() => toggleLike(spot.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        likedSpots.includes(spot.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white p-2">
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {spot.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Heart className="h-4 w-4" />
                    <span>{spot.likes.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{spot.location}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{spot.bestTime}</span>
                </div>

                <div className="flex gap-2 mb-4">
                  <Badge className={getDifficultyColor(spot.difficulty)}>{spot.difficulty}</Badge>
                  <Badge className={getCrowdColor(spot.crowdLevel)}>
                    <Users className="h-3 w-3 mr-1" />
                    {spot.crowdLevel} Crowd
                  </Badge>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  💡 <strong>Pro Tip:</strong> {spot.tips}
                </p>

                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                  <Camera className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Share Your Shots!</h3>
            <p className="text-gray-600 mb-6">
              Tag us <strong>@InnerMiles</strong> and use <strong>#InnerMilesPhotoSpot</strong> to get featured on our
              page!
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3">
              Upload Your Photo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
