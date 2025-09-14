"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Clock, DollarSign, Utensils, Leaf, AlertCircle } from "lucide-react"

// TypeScript declarations for Google Maps
declare global {
  interface Window {
    google: any
  }
}

interface Location {
  id: number
  name: string
  type: string
  city: string
  coordinates: { lat: number; lng: number }
  price: string
  bestTime: string
  rating: number
  description: string
  transportOptions: Array<{ type: string; price: string; time: string }>
  nearbyWashrooms: boolean
  instagramWorthy: boolean
  localTip: string
  foodInfo?: {
    nearbyRestaurants: string[]
    vegetarianStatus: string
    localFood: string
  }
}

const locations: Location[] = [
  {
    id: 1,
    name: "Gateway of India",
    type: "monument",
    city: "Mumbai",
    coordinates: { lat: 18.9220, lng: 72.8347 },
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
    coordinates: { lat: 15.5550, lng: 73.7550 },
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
    coordinates: { lat: 24.5760, lng: 73.6800 },
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
    coordinates: { lat: 18.9300, lng: 72.8300 },
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
    coordinates: { lat: 15.5700, lng: 73.7400 },
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
    coordinates: { lat: 24.5800, lng: 73.6700 },
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

const getVegetarianIcon = (status: string) => {
  switch (status) {
    case "pure-veg":
      return <Leaf className="h-4 w-4 text-green-600" />
    case "veg":
      return <Leaf className="h-4 w-4 text-green-600" />
    case "non-veg":
      return <AlertCircle className="h-4 w-4 text-red-600" />
    case "both":
      return <Utensils className="h-4 w-4 text-orange-600" />
    default:
      return <Utensils className="h-4 w-4 text-gray-600" />
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

const getMarkerColor = (type: string) => {
  switch (type) {
    case "monument":
      return "#f59e0b" // amber
    case "beach":
      return "#3b82f6" // blue
    case "market":
      return "#10b981" // emerald
    case "palace":
      return "#8b5cf6" // purple
    case "garden":
      return "#06b6d4" // cyan
    default:
      return "#6b7280" // gray
  }
}

export function GoogleMapsComponent() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [markers, setMarkers] = useState<google.maps.Marker[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initMap = () => {
      // Check if Google Maps is already loaded
      if (typeof window.google !== 'undefined' && window.google.maps) {
        createMap()
        return
      }

      // Load Google Maps script if not already loaded
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBnWJFZu1DC4sp0yuAr6FM_45EOcuEEuvk&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => {
        createMap()
      }
      script.onerror = () => {
        console.error("Error loading Google Maps script")
        setIsLoaded(true) // Show fallback
      }
      document.head.appendChild(script)
    }

    const createMap = () => {
      if (mapRef.current && window.google && window.google.maps) {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: { lat: 20.5937, lng: 78.9629 }, // Center of India
          zoom: 6,
          mapTypeId: "roadmap",
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        })

        setMap(mapInstance)
        setIsLoaded(true)

        // Create markers for each location
        const newMarkers: google.maps.Marker[] = []
        
        locations.forEach((location) => {
          const marker = new window.google.maps.Marker({
            position: location.coordinates,
            map: mapInstance,
            title: location.name,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 12,
              fillColor: getMarkerColor(location.type),
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
            animation: window.google.maps.Animation.DROP,
          })

          // Add click listener to marker
          marker.addListener("click", () => {
            setSelectedLocation(location)
          })

          newMarkers.push(marker)
        })

        setMarkers(newMarkers)
      }
    }

    initMap()
  }, [])

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location)
    if (map) {
      map.panTo(location.coordinates)
      map.setZoom(15)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Google Map */}
      <div className="lg:col-span-2">
        <Card className="p-6 h-[600px] relative overflow-hidden">
          <div 
            ref={mapRef} 
            className="w-full h-full rounded-lg"
            style={{ minHeight: "500px" }}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading Google Maps...</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Initializing interactive map with your API key
                </p>
              </div>
            </div>
          )}
          
          {/* Fallback Map if Google Maps fails to load */}
          {isLoaded && !map && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Google Maps is loading... If this persists, please check your internet connection.
                </p>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <Button
                      key={location.id}
                      variant="outline"
                      onClick={() => setSelectedLocation(location)}
                      className="w-full justify-start"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getMarkerColor(location.type) }}
                        />
                        <div className="text-left">
                          <div className="font-medium">{location.name}</div>
                          <div className="text-xs text-muted-foreground">{location.city}</div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Location Details */}
      <div className="space-y-6">
        {selectedLocation ? (
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedLocation.name}</h3>
                <Badge className="mb-2">{selectedLocation.city}</Badge>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{selectedLocation.rating}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-primary font-semibold">
                  <DollarSign className="h-4 w-4" />
                  {selectedLocation.price}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  {selectedLocation.bestTime}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{selectedLocation.description}</p>

            {/* Local Tip */}
            <div className="bg-accent/10 border-l-4 border-accent p-3 mb-4 rounded-r">
              <p className="text-sm font-medium">
                {"💡 Local Tip: "}
                {selectedLocation.localTip}
              </p>
            </div>

            {/* Food Information */}
            {selectedLocation.foodInfo && (
              <div className="mb-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Utensils className="h-4 w-4" />
                  Food & Dining
                </h4>
                <div className="space-y-3">
                  {/* Vegetarian Status */}
                  <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                    {getVegetarianIcon(selectedLocation.foodInfo.vegetarianStatus)}
                    <span className="font-medium">
                      {getVegetarianLabel(selectedLocation.foodInfo.vegetarianStatus)}
                    </span>
                  </div>
                  
                  {/* Local Food */}
                  <div className="p-2 bg-accent/10 rounded">
                    <p className="text-sm font-medium text-accent-foreground">
                      {"🍽️ Local Food: "}
                      {selectedLocation.foodInfo.localFood}
                    </p>
                  </div>
                  
                  {/* Nearby Restaurants */}
                  <div>
                    <p className="text-sm font-medium mb-1">Nearby Restaurants:</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedLocation.foodInfo.nearbyRestaurants.map((restaurant) => (
                        <Badge key={restaurant} variant="outline" className="text-xs">
                          {restaurant}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Transport Options */}
            <div className="mb-4">
              <h4 className="font-semibold mb-3">Transport Options</h4>
              <div className="space-y-2">
                {selectedLocation.transportOptions.map((transport, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="capitalize font-medium">{transport.type}</span>
                    <div className="text-right text-sm">
                      <div className="font-semibold text-primary">{transport.price}</div>
                      <div className="text-muted-foreground">{transport.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedLocation.nearbyWashrooms && (
                <Badge variant="outline" className="text-xs">
                  🚻 Washrooms Nearby
                </Badge>
              )}
              {selectedLocation.instagramWorthy && (
                <Badge variant="outline" className="text-xs">
                  📸 Instagram Worthy
                </Badge>
              )}
            </div>

            <Button className="w-full">Get Directions</Button>
          </Card>
        ) : (
          <Card className="p-6 text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Select a Location</h3>
            <p className="text-muted-foreground">
              Click on any marker on the map to see detailed information, transport options, and local tips
            </p>
          </Card>
        )}

        {/* Location List */}
        <Card className="p-6">
          <h4 className="font-semibold mb-4">All Locations</h4>
          <div className="space-y-2">
            {locations.map((location) => (
              <Button
                key={location.id}
                variant={selectedLocation?.id === location.id ? "default" : "outline"}
                onClick={() => handleLocationClick(location)}
                className="w-full justify-start"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getMarkerColor(location.type) }}
                  />
                  <div className="text-left">
                    <div className="font-medium">{location.name}</div>
                    <div className="text-xs text-muted-foreground">{location.city}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
