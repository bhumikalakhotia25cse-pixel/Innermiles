"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Moon, Sun, Users, MapPin, Clock, AlertTriangle, CheckCircle, Star } from "lucide-react"
import { useState } from "react"

const safetyData = [
  {
    city: "Mumbai",
    emoji: "🏙️",
    overallRating: 4.2,
    nightSafety: 3.8,
    peopleRating: 4.1,
    safetyTips: [
      "Avoid isolated areas after 10 PM",
      "Use well-lit main roads",
      "Travel in groups when possible",
      "Keep emergency contacts handy"
    ],
    safeAreas: ["Marine Drive", "Bandra West", "Powai", "Andheri West"],
    avoidAreas: ["Dharavi at night", "Some parts of Kurla", "Isolated railway stations"],
    emergencyContacts: {
      police: "100",
      womenHelpline: "1091",
      localTouristPolice: "022-22044040"
    },
    localInsights: "Mumbai is generally safe for women, especially in South Mumbai and Western suburbs. Local women are very supportive and helpful.",
    bestTimeToVisit: "6 AM - 10 PM",
    transportSafety: "Metro and local trains have women's compartments. Uber/Ola are generally safe."
  },
  {
    city: "Goa",
    emoji: "🏖️",
    overallRating: 4.5,
    nightSafety: 4.2,
    peopleRating: 4.4,
    safetyTips: [
      "Beach areas are safe during day",
      "Avoid isolated beaches at night",
      "Stay in well-known tourist areas",
      "Don't accept drinks from strangers"
    ],
    safeAreas: ["Calangute", "Baga", "Anjuna", "Panjim"],
    avoidAreas: ["Isolated beaches at night", "Some remote areas"],
    emergencyContacts: {
      police: "100",
      womenHelpline: "1091",
      localTouristPolice: "0832-2225151"
    },
    localInsights: "Goa is very tourist-friendly and safe for women. Locals are welcoming and respectful. Beach shacks and restaurants are safe.",
    bestTimeToVisit: "6 AM - 11 PM",
    transportSafety: "Rent bikes with helmets, use registered taxis, avoid hitchhiking."
  },
  {
    city: "Udaipur",
    emoji: "🏰",
    overallRating: 4.6,
    nightSafety: 4.4,
    peopleRating: 4.5,
    safetyTips: [
      "Very safe city overall",
      "Rajasthani culture is respectful",
      "Palace areas are well-lit",
      "Local women are very helpful"
    ],
    safeAreas: ["City Palace area", "Lake Pichola", "Fateh Sagar", "Old City"],
    avoidAreas: ["Some isolated areas near lakes at night"],
    emergencyContacts: {
      police: "100",
      womenHelpline: "1091",
      localTouristPolice: "0294-2411000"
    },
    localInsights: "Udaipur is one of the safest cities for women in India. The royal heritage and local culture promote respect and safety.",
    bestTimeToVisit: "5 AM - 10 PM",
    transportSafety: "Auto-rickshaws and taxis are safe. Walking in main areas is very safe."
  }
]

const getSafetyColor = (rating: number) => {
  if (rating >= 4.5) return "text-green-600 bg-green-100"
  if (rating >= 4.0) return "text-yellow-600 bg-yellow-100"
  if (rating >= 3.5) return "text-orange-600 bg-orange-100"
  return "text-red-600 bg-red-100"
}

const getSafetyIcon = (rating: number) => {
  if (rating >= 4.5) return <CheckCircle className="h-5 w-5" />
  if (rating >= 4.0) return <Star className="h-5 w-5" />
  if (rating >= 3.5) return <AlertTriangle className="h-5 w-5" />
  return <AlertTriangle className="h-5 w-5" />
}

export function WomenSafety() {
  const [selectedCity, setSelectedCity] = useState(0)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <Shield className="inline-block h-12 w-12 text-primary mr-4" />
            Women Safety Guide
            <Shield className="inline-block h-12 w-12 text-primary ml-4" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Travel with confidence - Local insights on safety, people, and best practices for women travelers
          </p>
        </div>

        {/* City Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 bg-white rounded-2xl shadow-lg">
            {safetyData.map((city, index) => (
              <Button
                key={city.city}
                variant={selectedCity === index ? "default" : "ghost"}
                onClick={() => setSelectedCity(index)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedCity === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-muted"
                }`}
              >
                <span className="text-2xl mr-2">{city.emoji}</span>
                {city.city}
              </Button>
            ))}
          </div>
        </div>

        {/* Safety Information Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{safetyData[selectedCity].emoji}</div>
              <div>
                <h3 className="text-3xl font-bold">{safetyData[selectedCity].city}</h3>
                <p className="text-muted-foreground">Safety Overview</p>
              </div>
            </div>

            {/* Safety Ratings */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Overall Safety</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getSafetyColor(safetyData[selectedCity].overallRating)}`}>
                  {getSafetyIcon(safetyData[selectedCity].overallRating)}
                  <span className="font-bold">{safetyData[selectedCity].overallRating}/5</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Moon className="h-6 w-6 text-purple-600" />
                  <span className="font-semibold">Night Safety</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getSafetyColor(safetyData[selectedCity].nightSafety)}`}>
                  {getSafetyIcon(safetyData[selectedCity].nightSafety)}
                  <span className="font-bold">{safetyData[selectedCity].nightSafety}/5</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">People Rating</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getSafetyColor(safetyData[selectedCity].peopleRating)}`}>
                  {getSafetyIcon(safetyData[selectedCity].peopleRating)}
                  <span className="font-bold">{safetyData[selectedCity].peopleRating}/5</span>
                </div>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-xl mb-6">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="font-semibold">Safest Time: </span>
              <span>{safetyData[selectedCity].bestTimeToVisit}</span>
            </div>

            {/* Local Insights */}
            <div className="p-4 bg-primary/10 rounded-xl">
              <h4 className="font-semibold mb-2 text-primary">💡 Local Insight</h4>
              <p className="text-sm text-muted-foreground">{safetyData[selectedCity].localInsights}</p>
            </div>
          </Card>

          {/* Safety Tips and Areas */}
          <div className="space-y-6">
            {/* Safety Tips */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                Safety Tips
              </h4>
              <ul className="space-y-2">
                {safetyData[selectedCity].safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Safe Areas */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-green-500" />
                Safe Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {safetyData[selectedCity].safeAreas.map((area) => (
                  <Badge key={area} variant="secondary" className="bg-green-100 text-green-800">
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Areas to Avoid */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Areas to Avoid
              </h4>
              <div className="flex flex-wrap gap-2">
                {safetyData[selectedCity].avoidAreas.map((area) => (
                  <Badge key={area} variant="destructive" className="bg-red-100 text-red-800">
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Emergency Contacts */}
        <Card className="p-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200">
          <h3 className="text-2xl font-bold mb-6 text-center text-red-800">
            🚨 Emergency Contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Police</h4>
              <p className="text-2xl font-bold text-red-600">{safetyData[selectedCity].emergencyContacts.police}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Women Helpline</h4>
              <p className="text-2xl font-bold text-red-600">{safetyData[selectedCity].emergencyContacts.womenHelpline}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Tourist Police</h4>
              <p className="text-lg font-bold text-red-600">{safetyData[selectedCity].emergencyContacts.localTouristPolice}</p>
            </div>
          </div>
        </Card>

        {/* Transport Safety */}
        <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-800">
            🚗 Transport Safety
          </h4>
          <p className="text-blue-700">{safetyData[selectedCity].transportSafety}</p>
        </Card>
      </div>
    </section>
  )
}
