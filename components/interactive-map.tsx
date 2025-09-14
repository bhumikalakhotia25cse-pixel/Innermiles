"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { GoogleMapsComponent } from "@/components/google-maps"
import {
  MapPin,
  Navigation,
  DollarSign,
  Clock,
  Star,
  Search,
  Camera,
  ShoppingBag,
  Calendar,
  PenTool as Restroom,
  Car,
  Train,
  Bus,
  Utensils,
  Leaf,
  AlertCircle,
} from "lucide-react"

const mapLocations = [
  {
    id: 1,
    name: "Gateway of India",
    type: "monument",
    city: "Mumbai",
    coordinates: { x: 45, y: 60 },
    price: "Free",
    bestTime: "Evening",
    rating: 4.5,
    description: "Iconic monument with stunning sunset views",
    transportOptions: [
      { type: "taxi", price: "₹150-200", time: "30 min" },
      { type: "local", price: "₹10", time: "45 min" },
      { type: "bus", price: "₹15", time: "40 min" },
    ],
    nearbyWashrooms: true,
    instagramWorthy: true,
    localTip: "Visit during sunset for best photos, avoid weekends for crowds",
  },
  {
    id: 2,
    name: "Baga Beach",
    type: "beach",
    city: "Goa",
    coordinates: { x: 25, y: 40 },
    price: "Free",
    bestTime: "Morning/Evening",
    rating: 4.3,
    description: "Popular beach with water sports and shacks",
    transportOptions: [
      { type: "taxi", price: "₹300-400", time: "45 min" },
      { type: "bus", price: "₹25", time: "1 hour" },
    ],
    nearbyWashrooms: true,
    instagramWorthy: true,
    localTip: "Try fish curry rice at local shacks, not tourist restaurants",
    foodInfo: {
      nearbyRestaurants: ["Martin's Corner", "Gunpowder"],
      vegetarianStatus: "both",
      localFood: "Fish curry rice, Goan thali, Bebinca"
    }
  },
  {
    id: 3,
    name: "City Palace",
    type: "palace",
    city: "Udaipur",
    coordinates: { x: 70, y: 35 },
    price: "₹300",
    bestTime: "Morning",
    rating: 4.7,
    description: "Magnificent palace complex with lake views",
    transportOptions: [
      { type: "taxi", price: "₹100-150", time: "20 min" },
      { type: "auto", price: "₹50", time: "25 min" },
    ],
    nearbyWashrooms: true,
    instagramWorthy: true,
    localTip: "Book online to skip queues, visit early morning for best light",
  },
  {
    id: 4,
    name: "Crawford Market",
    type: "market",
    city: "Mumbai",
    coordinates: { x: 40, y: 55 },
    price: "Free entry",
    bestTime: "Morning",
    rating: 4.2,
    description: "Historic market for spices, fruits, and local goods",
    transportOptions: [
      { type: "local", price: "₹10", time: "30 min" },
      { type: "taxi", price: "₹120", time: "25 min" },
    ],
    nearbyWashrooms: true,
    instagramWorthy: false,
    localTip: "Bargain hard, prices are 3x higher for tourists initially",
    foodInfo: {
      nearbyRestaurants: ["Bademiya Kebabs", "Cafe Mondegar", "Street Food Stalls"],
      vegetarianStatus: "both",
      localFood: "Vada pav, Pav bhaji, Fresh fruits, Spices"
    }
  },
  {
    id: 5,
    name: "Anjuna Flea Market",
    type: "market",
    city: "Goa",
    coordinates: { x: 30, y: 45 },
    price: "Free entry",
    bestTime: "Wednesday",
    rating: 4.4,
    description: "Famous hippie market with unique crafts and food",
    transportOptions: [
      { type: "taxi", price: "₹250", time: "35 min" },
      { type: "bus", price: "₹20", time: "50 min" },
    ],
    nearbyWashrooms: true,
    instagramWorthy: true,
    localTip: "Only open on Wednesdays, arrive early for best selection",
    foodInfo: {
      nearbyRestaurants: ["Gunpowder", "Martin's Corner", "Market Food Stalls"],
      vegetarianStatus: "both",
      localFood: "Goan thali, Fish curry, Coconut water, Fresh fruits"
    }
  },
  {
    id: 6,
    name: "Saheliyon Ki Bari",
    type: "garden",
    city: "Udaipur",
    coordinates: { x: 65, y: 30 },
    price: "₹30",
    bestTime: "Morning",
    rating: 4.1,
    description: "Beautiful garden with fountains and lotus pools",
    transportOptions: [
      { type: "auto", price: "₹40", time: "15 min" },
      { type: "taxi", price: "₹80", time: "12 min" },
    ],
    nearbyWashrooms: true,
    instagramWorthy: true,
    localTip: "Perfect for morning walks, fountains work best in morning",
    foodInfo: {
      nearbyRestaurants: ["Natraj Dining Hall", "Ambrai Ghat Restaurant"],
      vegetarianStatus: "both",
      localFood: "Dal baati churma, Rajasthani thali, Laal maas"
    }
  },
]

const filterCategories = [
  { id: "all", name: "All", icon: MapPin, color: "bg-primary" },
  { id: "monument", name: "Monuments", icon: Camera, color: "bg-secondary" },
  { id: "beach", name: "Beaches", icon: MapPin, color: "bg-blue-500" },
  { id: "market", name: "Markets", icon: ShoppingBag, color: "bg-green-500" },
  { id: "palace", name: "Palaces", icon: Calendar, color: "bg-purple-500" },
  { id: "garden", name: "Gardens", icon: MapPin, color: "bg-emerald-500" },
]

const cities = ["All Cities", "Mumbai", "Goa", "Udaipur"]

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof mapLocations)[0] | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLocations = mapLocations.filter((location) => {
    const matchesFilter = activeFilter === "all" || location.type === activeFilter
    const matchesCity = selectedCity === "All Cities" || location.city === selectedCity
    const matchesSearch =
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesCity && matchesSearch
  })

  const getTransportIcon = (type: string) => {
    switch (type) {
      case "taxi":
        return Car
      case "local":
        return Train
      case "bus":
        return Bus
      case "auto":
        return Car
      default:
        return Car
    }
  }

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"🗺️ Smart Navigation Map 🗺️"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Find the best routes, fair prices, and hidden gems with local insider knowledge
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search locations, experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
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
          </div>

          <div className="flex flex-wrap gap-2">
            {filterCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Google Maps Integration */}
        <GoogleMapsComponent />
      </div>
    </section>
  )
}
