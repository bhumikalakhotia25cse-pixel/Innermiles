"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, DollarSign, Utensils, Leaf, AlertCircle, CheckCircle } from "lucide-react"
import { useState } from "react"

const foodPlaces = [
  {
    id: 1,
    name: "Bademiya Kebabs",
    location: "Mumbai",
    area: "Colaba Causeway",
    image: "/mumbai-street-food-markets-colorful-spices-vendors.jpg",
    cuisine: "Mughlai",
    priceRange: "₹₹",
    rating: 4.6,
    timings: "6:00 PM - 2:00 AM",
    vegetarianStatus: "non-veg",
    pureVegetarian: false,
    specialties: ["Seekh Kebabs", "Chicken Tikka", "Mutton Biryani"],
    localTip: "Best kebabs in Mumbai, but only non-veg options available",
    emoji: "🍖",
    mustTry: ["Seekh Kebab", "Chicken Tikka", "Mutton Biryani"],
    avoidIf: "Vegetarian",
    instagramWorthy: true,
    familyFriendly: false,
  },
  {
    id: 2,
    name: "Cafe Mondegar",
    location: "Mumbai",
    area: "Colaba",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Continental",
    priceRange: "₹₹₹",
    rating: 4.3,
    timings: "8:00 AM - 11:00 PM",
    vegetarianStatus: "both",
    pureVegetarian: false,
    specialties: ["Pizza", "Pasta", "Sandwiches", "Beer"],
    localTip: "Iconic Mumbai cafe with both veg and non-veg options",
    emoji: "🍕",
    mustTry: ["Margherita Pizza", "Veg Pasta", "Chicken Sandwich"],
    avoidIf: "Looking for pure veg",
    instagramWorthy: true,
    familyFriendly: true,
  },
  {
    id: 3,
    name: "Shree Thaker Bhojanalay",
    location: "Mumbai",
    area: "Kalyan",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Gujarati Thali",
    priceRange: "₹₹",
    rating: 4.8,
    timings: "11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM",
    vegetarianStatus: "pure-veg",
    pureVegetarian: true,
    specialties: ["Gujarati Thali", "Dal Dhokli", "Kadhi", "Sweets"],
    localTip: "Pure vegetarian Gujarati thali - authentic and delicious",
    emoji: "🥘",
    mustTry: ["Gujarati Thali", "Dal Dhokli", "Gujarati Kadhi"],
    avoidIf: "Looking for non-veg",
    instagramWorthy: true,
    familyFriendly: true,
  },
  {
    id: 4,
    name: "Martin's Corner",
    location: "Goa",
    area: "Betim",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Goan",
    priceRange: "₹₹₹",
    rating: 4.7,
    timings: "12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM",
    vegetarianStatus: "both",
    pureVegetarian: false,
    specialties: ["Fish Curry Rice", "Prawn Balchao", "Veg Xacuti", "Bebinca"],
    localTip: "Famous for seafood but has good veg options too",
    emoji: "🐟",
    mustTry: ["Fish Curry Rice", "Veg Xacuti", "Bebinca"],
    avoidIf: "Pure vegetarian only",
    instagramWorthy: true,
    familyFriendly: true,
  },
  {
    id: 5,
    name: "Gunpowder",
    location: "Goa",
    area: "Assagao",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "South Indian",
    priceRange: "₹₹₹",
    rating: 4.5,
    timings: "12:00 PM - 3:00 PM, 7:00 PM - 10:30 PM",
    vegetarianStatus: "both",
    pureVegetarian: false,
    specialties: ["Kerala Fish Curry", "Veg Thali", "Appam", "Coconut Rice"],
    localTip: "South Indian cuisine with both veg and non-veg options",
    emoji: "🍛",
    mustTry: ["Kerala Fish Curry", "Veg Thali", "Appam"],
    avoidIf: "Pure vegetarian only",
    instagramWorthy: true,
    familyFriendly: true,
  },
  {
    id: 6,
    name: "Natraj Dining Hall",
    location: "Udaipur",
    area: "City Palace Road",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Rajasthani",
    priceRange: "₹₹",
    rating: 4.4,
    timings: "11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM",
    vegetarianStatus: "pure-veg",
    pureVegetarian: true,
    specialties: ["Dal Baati Churma", "Laal Maas", "Gatte Ki Sabzi", "Kadhi"],
    localTip: "Pure vegetarian Rajasthani food - authentic and traditional",
    emoji: "🥘",
    mustTry: ["Dal Baati Churma", "Gatte Ki Sabzi", "Rajasthani Kadhi"],
    avoidIf: "Looking for non-veg",
    instagramWorthy: true,
    familyFriendly: true,
  },
  {
    id: 7,
    name: "Ambrai Ghat Restaurant",
    location: "Udaipur",
    area: "Lake Pichola",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Multi-cuisine",
    priceRange: "₹₹₹₹",
    rating: 4.6,
    timings: "12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM",
    vegetarianStatus: "both",
    pureVegetarian: false,
    specialties: ["Laal Maas", "Veg Thali", "Pizza", "Pasta"],
    localTip: "Beautiful lake view with both veg and non-veg options",
    emoji: "🏰",
    mustTry: ["Laal Maas", "Veg Thali", "Pizza"],
    avoidIf: "Pure vegetarian only",
    instagramWorthy: true,
    familyFriendly: true,
  },
  {
    id: 8,
    name: "Street Food - Vada Pav",
    location: "Mumbai",
    area: "Various Locations",
    image: "/mumbai-street-food-markets-colorful-spices-vendors.jpg",
    cuisine: "Street Food",
    priceRange: "₹",
    rating: 4.8,
    timings: "6:00 AM - 10:00 PM",
    vegetarianStatus: "pure-veg",
    pureVegetarian: true,
    specialties: ["Vada Pav", "Pav Bhaji", "Misal Pav", "Samosa"],
    localTip: "Mumbai's most famous street food - all vegetarian",
    emoji: "🌶️",
    mustTry: ["Vada Pav", "Pav Bhaji", "Misal Pav"],
    avoidIf: "Looking for non-veg",
    instagramWorthy: true,
    familyFriendly: true,
  },
]

const getVegetarianIcon = (status: string) => {
  switch (status) {
    case "pure-veg":
      return <Leaf className="h-4 w-4 text-green-600" />
    case "veg":
      return <CheckCircle className="h-4 w-4 text-green-600" />
    case "non-veg":
      return <AlertCircle className="h-4 w-4 text-red-600" />
    case "both":
      return <Utensils className="h-4 w-4 text-orange-600" />
    default:
      return <Utensils className="h-4 w-4 text-gray-600" />
  }
}

const getVegetarianColor = (status: string) => {
  switch (status) {
    case "pure-veg":
      return "bg-green-100 text-green-800 border-green-200"
    case "veg":
      return "bg-green-100 text-green-800 border-green-200"
    case "non-veg":
      return "bg-red-100 text-red-800 border-red-200"
    case "both":
      return "bg-orange-100 text-orange-800 border-orange-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getVegetarianLabel = (status: string) => {
  switch (status) {
    case "pure-veg":
      return "Pure Vegetarian"
    case "veg":
      return "Vegetarian"
    case "non-veg":
      return "Non-Vegetarian"
    case "both":
      return "Veg & Non-Veg"
    default:
      return "Unknown"
  }
}

export function FoodGuide() {
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null)

  const cities = ["All Cities", "Mumbai", "Goa", "Udaipur"]
  const types = ["All Types", "Pure Vegetarian", "Vegetarian", "Non-Vegetarian", "Veg & Non-Veg"]

  const filteredPlaces = foodPlaces.filter((place) => {
    const matchesCity = selectedCity === "All Cities" || place.location === selectedCity
    const matchesType = selectedType === "All Types" || 
      (selectedType === "Pure Vegetarian" && place.vegetarianStatus === "pure-veg") ||
      (selectedType === "Vegetarian" && place.vegetarianStatus === "veg") ||
      (selectedType === "Non-Vegetarian" && place.vegetarianStatus === "non-veg") ||
      (selectedType === "Veg & Non-Veg" && place.vegetarianStatus === "both")
    return matchesCity && matchesType
  })

  const handleViewDetails = (restaurantId: number) => {
    setSelectedRestaurant(restaurantId)
    
    // Scroll to interactive map section
    const mapElement = document.getElementById('interactive-map')
    if (mapElement) {
      mapElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    // Reset selection after 3 seconds
    setTimeout(() => {
      setSelectedRestaurant(null)
    }, 3000)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <Utensils className="inline-block h-12 w-12 text-primary mr-4" />
            Food Guide
            <Utensils className="inline-block h-12 w-12 text-primary ml-4" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover authentic local food with clear vegetarian indicators - know what you're eating before you go!
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex gap-2">
            {cities.map((city) => (
              <Button
                key={city}
                variant={selectedCity === city ? "default" : "outline"}
                onClick={() => setSelectedCity(city)}
                className="whitespace-nowrap"
              >
                {city}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            {types.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className="whitespace-nowrap"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Food Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => (
            <Card
              key={place.id}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={place.image || "/placeholder.svg"}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Vegetarian Status Badge */}
                <div className="absolute top-3 left-3">
                  <Badge className={`${getVegetarianColor(place.vegetarianStatus)} flex items-center gap-1`}>
                    {getVegetarianIcon(place.vegetarianStatus)}
                    {getVegetarianLabel(place.vegetarianStatus)}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold">{place.rating}</span>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-secondary-foreground">
                    {place.emoji} {place.location}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{place.name}</h3>
                    <p className="text-sm text-muted-foreground">{place.area}, {place.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-primary font-semibold">
                      <DollarSign className="h-4 w-4" />
                      {place.priceRange}
                    </div>
                    <div className="text-xs text-muted-foreground">{place.cuisine}</div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{place.timings}</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">{"🍽️ Specialties"}</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Must Try */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">{"⭐ Must Try"}</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.mustTry.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Local Tip */}
                <div className="bg-accent/10 border-l-4 border-accent p-3 mb-4 rounded-r">
                  <p className="text-sm font-medium">
                    {"💡 Local Tip: "}
                    {place.localTip}
                  </p>
                </div>

                {/* Avoid If */}
                {place.avoidIf && (
                  <div className="bg-red-50 border-l-4 border-red-200 p-3 mb-4 rounded-r">
                    <p className="text-sm font-medium text-red-800">
                      {"⚠️ Avoid if: "}
                      {place.avoidIf}
                    </p>
                  </div>
                )}

                {/* Additional Info */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {place.instagramWorthy && (
                    <Badge variant="outline" className="text-xs">
                      📸 Instagram Worthy
                    </Badge>
                  )}
                  {place.familyFriendly && (
                    <Badge variant="outline" className="text-xs">
                      👨‍👩‍👧‍👦 Family Friendly
                    </Badge>
                  )}
                  {place.pureVegetarian && (
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      🌱 Pure Vegetarian
                    </Badge>
                  )}
                </div>

                <Button 
                  onClick={() => handleViewDetails(place.id)}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {selectedRestaurant === place.id ? "Viewing on Map..." : "View Details"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <Card className="mt-12 p-6 bg-white/80 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-center">Vegetarian Status Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-sm">Pure Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-sm">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-3 w-3 text-red-600" />
              </div>
              <span className="text-sm">Non-Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center">
                <Utensils className="h-3 w-3 text-orange-600" />
              </div>
              <span className="text-sm">Veg & Non-Veg</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
