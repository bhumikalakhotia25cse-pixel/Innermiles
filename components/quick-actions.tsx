"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bot, Map, Calendar, ShoppingBag, Camera, Utensils, Shield, Leaf } from "lucide-react"
import { useState } from "react"

const quickActions = [
  {
    icon: Bot,
    title: "AI Local Guide",
    description: "Chat with our AI that knows local secrets",
    color: "bg-primary",
    emoji: "🤖",
    action: "ai-guide",
  },
  {
    icon: Shield,
    title: "Women Safety",
    description: "Safety ratings, tips & local insights",
    color: "bg-pink-500",
    emoji: "🛡️",
    action: "women-safety",
  },
  {
    icon: Leaf,
    title: "Food Guide",
    description: "Restaurants with veg/non-veg indicators",
    color: "bg-green-500",
    emoji: "🍽️",
    action: "food-guide",
  },
  {
    icon: Map,
    title: "Smart Navigation",
    description: "Find best routes & fair prices",
    color: "bg-secondary",
    emoji: "🗺️",
    action: "interactive-map",
  },
  {
    icon: Calendar,
    title: "Cultural Events",
    description: "Folk dances, festivals & more",
    color: "bg-accent",
    emoji: "🎭",
    action: "cultural-events",
  },
  {
    icon: ShoppingBag,
    title: "Local Markets",
    description: "Authentic handicrafts & souvenirs",
    color: "bg-chart-3",
    emoji: "🛍️",
    action: "local-markets",
  },
  {
    icon: Camera,
    title: "Photo Spots",
    description: "Instagram-worthy hidden gems",
    color: "bg-chart-4",
    emoji: "📸",
    action: "photo-spots",
  },
  {
    icon: Utensils,
    title: "Local Food",
    description: "Where locals actually eat",
    color: "bg-chart-5",
    emoji: "🍛",
    action: "food-guide",
  },
]

export function QuickActions() {
  const scrollToSection = (action: string) => {
    const element = document.getElementById(action)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"🌟 Discover Like a Local 🌟"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Skip the tourist traps and experience authentic India with our local insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickActions.map((action, index) => (
            <Card
              key={action.title}
              className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/20"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`${action.color} p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <action.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl mb-4">{action.emoji}</div>
                <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
                <p className="text-muted-foreground text-lg text-pretty">{action.description}</p>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection(action.action)}
                  className="mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Explore
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
