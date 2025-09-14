import { HeroSection } from "@/components/hero-section"
import { QuickActions } from "@/components/quick-actions"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { TravelMoodSelector } from "@/components/travel-mood-selector"
import { InteractiveMap } from "@/components/interactive-map"
import { CulturalEvents } from "@/components/cultural-events"
import { LocalMarkets } from "@/components/local-markets"
import { LocalExperiences } from "@/components/local-experiences"
import { AIBotWidget } from "@/components/ai-bot-widget"
import { PhotoSpots } from "@/components/photo-spots"
import { WomenSafety } from "@/components/women-safety"
import { FoodGuide } from "@/components/food-guide"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <QuickActions />
      <div id="featured-destinations">
        <FeaturedDestinations />
      </div>
      <div id="women-safety">
        <WomenSafety />
      </div>
      <div id="food-guide">
        <FoodGuide />
      </div>
      <div id="travel-mood">
        <TravelMoodSelector />
      </div>
      <div id="interactive-map">
        <InteractiveMap />
      </div>
      <div id="photo-spots">
        <PhotoSpots />
      </div>
      <div id="cultural-events">
        <CulturalEvents />
      </div>
      <div id="local-markets">
        <LocalMarkets />
      </div>
      <div id="local-experiences">
        <LocalExperiences />
      </div>
      <div id="ai-guide">
        <AIBotWidget />
      </div>
    </main>
  )
}
