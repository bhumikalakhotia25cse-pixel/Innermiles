import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Star, AlertCircle } from "lucide-react"

const localMarkets = [
  {
    id: 1,
    name: "Crawford Market",
    location: "Fort, Mumbai",
    image: "/mumbai-crawford-market-spices-fruits-bustling-vendors.jpg",
    openHours: "6:00 AM - 8:00 PM",
    bestTime: "Morning (7-10 AM)",
    specialties: ["Fresh fruits", "Spices", "Dry fruits", "Imported goods"],
    priceRange: "₹₹",
    rating: 4.3,
    description: "Historic Victorian market building with the freshest produce and authentic spices",
    localTip: "Start bargaining at 30% of quoted price. Best mangoes in summer, imported chocolates year-round",
    mustBuy: ["Alphonso mangoes (seasonal)", "Kashmiri saffron", "Dry fruits", "Fresh spices"],
    avoidTouristTraps: "Don't buy pre-packaged spices, get them ground fresh",
    emoji: "🥭",
    category: "Food Market",
    heritage: "Built in 1869, named after Arthur Crawford, Mumbai's first Municipal Commissioner",
  },
  {
    id: 2,
    name: "Anjuna Flea Market",
    location: "Anjuna Beach, Goa",
    image: "/anjuna-flea-market-hippie-crafts-colorful-stalls.jpg",
    openHours: "Wednesday only, 8:00 AM - 6:00 PM",
    bestTime: "Early morning (8-11 AM)",
    specialties: ["Handicrafts", "Jewelry", "Vintage clothes", "Tibetan items"],
    priceRange: "₹₹₹",
    rating: 4.5,
    description: "Famous hippie market with unique crafts, vintage finds, and authentic Tibetan goods",
    localTip:
      "Only open Wednesdays! Arrive early for best selection. Many vendors are Tibetan refugees with authentic items",
    mustBuy: ["Tibetan jewelry", "Vintage band t-shirts", "Handmade bags", "Goan cashews"],
    avoidTouristTraps: "Avoid machine-made 'handcrafts', look for genuine handmade items",
    emoji: "🌸",
    category: "Handicrafts",
    heritage: "Started in the 1960s by hippies selling belongings before returning home",
  },
  {
    id: 3,
    name: "Hathi Pol Bazaar",
    location: "Old City, Udaipur",
    image: "/udaipur-hathi-pol-bazaar-traditional-handicrafts-colorful.jpg",
    openHours: "10:00 AM - 9:00 PM",
    bestTime: "Evening (5-8 PM)",
    specialties: ["Miniature paintings", "Rajasthani textiles", "Silver jewelry", "Puppets"],
    priceRange: "₹₹₹",
    rating: 4.6,
    description: "Traditional bazaar near City Palace with authentic Rajasthani handicrafts and art",
    localTip:
      "Many artists work in their shops - watch them create! Best prices after 6 PM when they want to close sales",
    mustBuy: ["Miniature paintings", "Bandhani textiles", "Silver jewelry", "Wooden puppets"],
    avoidTouristTraps: "Ensure miniature paintings are hand-painted, not printed copies",
    emoji: "🎨",
    category: "Art & Crafts",
    heritage: "Named after elephant (Hathi) gate, this 400-year-old market served royal families",
  },
  {
    id: 4,
    name: "Mapusa Friday Market",
    location: "Mapusa, North Goa",
    image: "/mapusa-friday-market-local-vegetables-spices-authentic.jpg",
    openHours: "Friday only, 6:00 AM - 2:00 PM",
    bestTime: "Early morning (6-9 AM)",
    specialties: ["Local vegetables", "Goan spices", "Fresh fish", "Coconut products"],
    priceRange: "₹",
    rating: 4.4,
    description: "Authentic local market where Goans shop - experience real Goan life",
    localTip:
      "This is where locals shop! Try Goan sausages, fresh kokum, and local vegetables you won't find elsewhere",
    mustBuy: ["Kokum", "Goan sausages", "Fresh spices", "Coconut oil"],
    avoidTouristTraps: "Stick to food items, handicrafts here are usually overpriced",
    emoji: "🥥",
    category: "Local Market",
    heritage: "Traditional Goan market serving local communities for over 100 years",
  },
  {
    id: 5,
    name: "Shilpgram Crafts Village",
    location: "Near Fateh Sagar Lake, Udaipur",
    image: "/udaipur-shilpgram-traditional-crafts-artisan-village.jpg",
    openHours: "9:00 AM - 6:00 PM",
    bestTime: "Morning (10 AM - 12 PM)",
    specialties: ["Live craft demonstrations", "Traditional pottery", "Textiles", "Metalwork"],
    priceRange: "₹₹₹₹",
    rating: 4.7,
    description: "Living museum where master craftsmen demonstrate traditional Rajasthani arts",
    localTip: "Watch artisans work and buy directly from them. Prices are higher but quality is guaranteed authentic",
    mustBuy: ["Hand-thrown pottery", "Block-printed textiles", "Metalwork", "Leather goods"],
    avoidTouristTraps: "All items here are authentic - focus on quality over bargaining",
    emoji: "🏺",
    category: "Artisan Village",
    heritage: "Established to preserve and promote traditional Rajasthani crafts and culture",
  },
  {
    id: 6,
    name: "Chor Bazaar",
    location: "Mutton Street, Mumbai",
    image: "/mumbai-chor-bazaar-antiques-vintage-items-treasure-hunt.jpg",
    openHours: "11:00 AM - 7:30 PM (Closed Fridays)",
    bestTime: "Afternoon (2-5 PM)",
    specialties: ["Antiques", "Vintage items", "Old Bollywood posters", "Brass items"],
    priceRange: "₹₹",
    rating: 4.2,
    description: "Famous 'Thieves Market' with incredible antiques and vintage treasures",
    localTip:
      "Bring cash and bargain hard! Some items are genuine antiques, others are good replicas. Know the difference!",
    mustBuy: ["Vintage Bollywood posters", "Brass items", "Old cameras", "Antique furniture"],
    avoidTouristTraps: "Check authenticity of 'antiques' - many are good reproductions sold as originals",
    emoji: "🗝️",
    category: "Antiques",
    heritage: "Over 150 years old, legend says stolen goods were once sold here (hence the name)",
  },
]

export function LocalMarkets() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"🛍️ Authentic Local Markets 🛍️"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Shop where locals shop! Discover traditional handicrafts, spices, and unique treasures with insider tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localMarkets.map((market) => (
            <Card
              key={market.id}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={market.image || "/placeholder.svg"}
                  alt={market.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground">{market.category}</Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold">{market.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-secondary-foreground">{market.emoji}</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <Badge variant="secondary" className="text-xs">
                    {market.priceRange}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-balance">{market.name}</h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{market.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span>{market.openHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-accent" />
                    <span className="font-medium">Best time: {market.bestTime}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm">{market.description}</p>

                <div className="bg-accent/10 border-l-4 border-accent p-3 mb-4 rounded-r">
                  <p className="text-sm font-medium text-accent-foreground">
                    {"💡 Local Tip: "}
                    {market.localTip}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">{"🏛️ Heritage:"}</h4>
                  <p className="text-xs text-muted-foreground">{market.heritage}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">{"🛒 Must Buy:"}</h4>
                  <div className="flex flex-wrap gap-1">
                    {market.mustBuy.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">{"⚠️ Avoid Tourist Traps:"}</h4>
                  <p className="text-xs text-muted-foreground italic">{market.avoidTouristTraps}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">{"🎯 Specialties:"}</h4>
                  <div className="flex flex-wrap gap-1">
                    {market.specialties.map((specialty) => (
                      <Badge key={specialty} className="text-xs bg-secondary text-secondary-foreground">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Get Directions
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Explore All Markets
          </Button>
        </div>
      </div>
    </section>
  )
}
