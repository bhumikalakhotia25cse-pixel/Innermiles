"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Waves, Mountain, Palette } from "lucide-react"

const moods = [
  {
    id: "relaxing",
    title: "Relaxing",
    emoji: "🧘‍♀️",
    icon: Waves,
    color: "bg-blue-500",
    description: "Beaches, cafes, and peaceful spots",
    experiences: [
      { name: "Arambol Beach Sunset", location: "Goa", image: "/peaceful-beach-sunset-meditation.jpg" },
      { name: "Lake Pichola Boat Ride", location: "Udaipur", image: "/serene-lake-boat-ride-palace-view.jpg" },
      { name: "Marine Drive Evening", location: "Mumbai", image: "/marine-drive-evening-peaceful-ocean-view.jpg" },
    ],
  },
  {
    id: "adventurous",
    title: "Adventurous",
    emoji: "🏔️",
    icon: Mountain,
    color: "bg-green-500",
    description: "Treks, water sports, and thrills",
    experiences: [
      { name: "Dudhsagar Falls Trek", location: "Goa", image: "/waterfall-trek-adventure-jungle.jpg" },
      { name: "Aravalli Hills Hiking", location: "Udaipur", image: "/mountain-hiking-trail.png" },
      { name: "Elephanta Caves Exploration", location: "Mumbai", image: "/ancient-caves-exploration-adventure.jpg" },
    ],
  },
  {
    id: "cultural",
    title: "Cultural",
    emoji: "🎭",
    icon: Palette,
    color: "bg-purple-500",
    description: "Folk shows, temples, and traditions",
    experiences: [
      { name: "Rajasthani Folk Dance", location: "Udaipur", image: "/colorful-rajasthani-folk-dance-performance.jpg" },
      { name: "Portuguese Heritage Walk", location: "Goa", image: "/portuguese-colonial-architecture-heritage.jpg" },
      { name: "Dharavi Community Tour", location: "Mumbai", image: "/community-cultural-tour-authentic-experience.jpg" },
    ],
  },
]

export function TravelMoodSelector() {
  const [selectedMood, setSelectedMood] = useState("relaxing")

  const currentMood = moods.find((mood) => mood.id === selectedMood)

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"🎯 What's Your Travel Mood? 🎯"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tell us how you feel, and we'll show you the perfect local experiences
          </p>
        </div>

        {/* Mood Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {moods.map((mood) => (
            <Button
              key={mood.id}
              variant={selectedMood === mood.id ? "default" : "outline"}
              size="lg"
              onClick={() => setSelectedMood(mood.id)}
              className={`h-16 px-8 text-lg transition-all duration-300 ${
                selectedMood === mood.id ? "scale-105 shadow-lg" : "hover:scale-105"
              }`}
            >
              <mood.icon className="mr-3 h-6 w-6" />
              <span className="mr-2">{mood.emoji}</span>
              {mood.title}
            </Button>
          ))}
        </div>

        {/* Selected Mood Content */}
        {currentMood && (
          <div className="space-y-8">
            <div className="text-center">
              <div
                className={`${currentMood.color} inline-flex items-center justify-center w-20 h-20 rounded-full mb-4`}
              >
                <currentMood.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {currentMood.emoji} {currentMood.title} Vibes
              </h3>
              <p className="text-xl text-muted-foreground">{currentMood.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentMood.experiences.map((experience, index) => (
                <Card
                  key={experience.name}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-foreground">{experience.location}</Badge>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{experience.name}</h4>
                    <p className="text-muted-foreground mb-4">
                      Perfect for your {currentMood.title.toLowerCase()} mood
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
