import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Star, DollarSign } from "lucide-react"

const culturalEvents = [
  {
    id: 1,
    title: "Rajasthani Folk Dance Evening",
    location: "Bagore Ki Haveli, Udaipur",
    date: "Daily",
    time: "7:00 PM - 8:30 PM",
    price: "₹60",
    image: "/rajasthani-folk-dance-colorful-traditional-costumes.jpg",
    category: "Dance",
    rating: 4.8,
    attendees: "50-80 people",
    description: "Experience authentic Rajasthani culture with traditional Ghoomar and Kalbeliya dances",
    highlights: ["Traditional costumes", "Live music", "Puppet show", "Heritage venue"],
    localStory: "These dances were originally performed in royal courts. Ghoomar was the welcome dance for new brides!",
    bestFor: "Culture enthusiasts, photographers",
    emoji: "💃",
  },
  {
    id: 2,
    title: "Konkani Cultural Night",
    location: "Kala Academy, Goa",
    date: "Fridays & Saturdays",
    time: "6:30 PM - 9:00 PM",
    price: "₹150",
    image: "/goan-konkani-cultural-performance-traditional-music.jpg",
    category: "Music",
    rating: 4.6,
    attendees: "100-150 people",
    description: "Traditional Goan music, Dekhni dance, and Portuguese-influenced performances",
    highlights: ["Konkani songs", "Dekhni dance", "Traditional instruments", "Local artists"],
    localStory: "Dekhni dance tells stories of Goan women waiting for their fishermen husbands to return from sea",
    bestFor: "Music lovers, cultural explorers",
    emoji: "🎵",
  },
  {
    id: 3,
    title: "Mumbai Street Art Festival",
    location: "Bandra West, Mumbai",
    date: "Weekends",
    time: "4:00 PM - 10:00 PM",
    price: "Free",
    image: "/mumbai-street-art-colorful-murals-local-artists.jpg",
    category: "Art",
    rating: 4.7,
    attendees: "200-300 people",
    description: "Local artists showcase Mumbai's vibrant street art culture with live painting sessions",
    highlights: ["Live murals", "Artist interactions", "Food stalls", "Photography spots"],
    localStory: "Started by local artists to reclaim public spaces and tell Mumbai's diverse stories through art",
    bestFor: "Art enthusiasts, Instagram lovers",
    emoji: "🎨",
  },
  {
    id: 4,
    title: "Miniature Painting Workshop",
    location: "City Palace Museum, Udaipur",
    date: "Tuesdays & Thursdays",
    time: "10:00 AM - 1:00 PM",
    price: "₹800",
    image: "/udaipur-miniature-painting-workshop-traditional-art.jpg",
    category: "Workshop",
    rating: 4.9,
    attendees: "8-12 people",
    description: "Learn traditional Rajasthani miniature painting from 5th generation master artists",
    highlights: ["Master artist guidance", "Traditional techniques", "Take home artwork", "Historical stories"],
    localStory: "This art form was patronized by Maharanas for over 400 years. Each painting tells a royal story!",
    bestFor: "Art learners, souvenir seekers",
    emoji: "🖌️",
  },
  {
    id: 5,
    title: "Bollywood Dance Class",
    location: "Prithvi Theatre, Mumbai",
    date: "Sundays",
    time: "11:00 AM - 1:00 PM",
    price: "₹500",
    image: "/bollywood-dance-class-energetic-colorful-mumbai.jpg",
    category: "Dance",
    rating: 4.5,
    attendees: "15-25 people",
    description: "Learn iconic Bollywood moves from choreographers who work with film stars",
    highlights: ["Professional choreographers", "Famous song sequences", "Group performance", "Certificate"],
    localStory: "Many of these choreographers have worked on actual Bollywood films shot in Mumbai studios!",
    bestFor: "Dance lovers, Bollywood fans",
    emoji: "🕺",
  },
  {
    id: 6,
    title: "Fado Night with Goan Twist",
    location: "Fontainhas, Goa",
    date: "First Saturday of month",
    time: "8:00 PM - 11:00 PM",
    price: "₹300",
    image: "/goan-fado-music-portuguese-heritage-intimate-setting.jpg",
    category: "Music",
    rating: 4.4,
    attendees: "30-50 people",
    description: "Portuguese Fado music blended with Goan melodies in heritage Latin Quarter",
    highlights: ["Portuguese heritage", "Intimate venue", "Local musicians", "Wine tasting"],
    localStory:
      "Fontainhas still echoes with Portuguese culture. These musicians are descendants of Portuguese settlers!",
    bestFor: "Music connoisseurs, heritage lovers",
    emoji: "🎼",
  },
]

export function CulturalEvents() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"🎭 Cultural Events & Experiences 🎭"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Immerse yourself in authentic local culture with folk dances, traditional music, and artisan workshops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturalEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold">{event.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-secondary-foreground">{event.emoji}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-balance">{event.title}</h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-600">{event.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-xs">{event.attendees}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm">{event.description}</p>

                <div className="bg-accent/10 border-l-4 border-accent p-3 mb-4 rounded-r">
                  <p className="text-sm font-medium text-accent-foreground">
                    {"📚 Local Story: "}
                    {event.localStory}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">{"✨ Highlights:"}</h4>
                  <div className="flex flex-wrap gap-1">
                    {event.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">
                    <strong>Best for:</strong> {event.bestFor}
                  </p>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Book Experience
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View All Cultural Events
          </Button>
        </div>
      </div>
    </section>
  )
}
