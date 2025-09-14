"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, X, Send, Volume2, MapPin, Heart, Camera, Utensils } from "lucide-react"

const cityData = {
  "cities": [
    {
      "name": "Goa",
      "local_food_points": [
        "Mum's Rasoi in Mapusa – homely Goan fish thali",
        "Anjuna roadside stalls serving Poi with xacuti"
      ],
      "secret_sunset_points": [
        "Chapel near Cabo de Rama Fort",
        "Betalbatim beach sand dunes"
      ],
      "local_shops_handcrafted": [
        "Margao Saturday Market – pottery and bamboo crafts",
        "Velha Goa Gallery – hand-painted azulejos tiles"
      ],
      "weather_info": "Pleasant from Nov–Feb, humid Mar–Jun, heavy monsoon Jul–Sep",
      "local_transport": "Pilot bikes (₹100–150 short rides), Kadamba buses (₹20–40), rickshaws fair ~₹15/km",
      "best_time_to_visit": "Nov–Feb",
      "photo_points": ["Fontainhas colorful streets", "Fort Aguada walls"],
      "high_traffic_areas": ["Panaji city center", "Calangute Baga stretch"],
      "festivals_events": ["Shigmo (Mar)", "Sao Joao (Jun)"],
      "must_do": ["River cruise Mandovi", "Spice plantation tour"],
      "secret_trails": ["Chorla Ghats jungle trek", "Butterfly beach trail"]
    },
    {
      "name": "Udaipur",
      "local_food_points": [
        "Santosh Bhojanalaya – authentic Rajasthani thali",
        "Street kachoris near Jagdish Temple"
      ],
      "secret_sunset_points": [
        "Badi Lake viewpoint",
        "Hilltop behind Sajjangarh Fort"
      ],
      "local_shops_handcrafted": [
        "Shilpgram crafts village",
        "Hathi Pol Bazaar (miniature paintings)"
      ],
      "weather_info": "Pleasant in winter (Oct–Mar), scorching summers",
      "local_transport": "Auto rickshaws ~₹10–12/km, shared tempos ₹10–20",
      "best_time_to_visit": "Oct–Mar",
      "photo_points": ["City Palace arches", "Lake Pichola ghats"],
      "high_traffic_areas": ["Hathipole", "Surajpole"],
      "festivals_events": ["Mewar Festival (Mar/Apr)", "Shilpgram Utsav (Dec)"],
      "must_do": ["Boat ride on Lake Pichola", "Cultural show at Bagore ki Haveli"],
      "secret_trails": ["Badi Lake trekking route", "Neemach Mata hill climb"]
    },
    {
      "name": "Mumbai",
      "local_food_points": [
        "Cannon Pav Bhaji opposite CST",
        "Bademiya seekh kebabs, Colaba"
      ],
      "secret_sunset_points": [
        "Madh Island beach",
        "Worli Sea Face hidden spots"
      ],
      "local_shops_handcrafted": [
        "Colaba Causeway hidden stalls",
        "Dharavi leather workshops"
      ],
      "weather_info": "Hot & humid year-round, heavy monsoon Jun–Sep",
      "local_transport": "Local trains (₹10–20 short distance), BEST buses (₹5–20), auto ~₹15/km",
      "best_time_to_visit": "Nov–Feb",
      "photo_points": ["Marine Drive queens necklace", "Gateway of India"],
      "high_traffic_areas": ["Bandra–Kurla Complex", "Andheri East"],
      "festivals_events": ["Ganesh Chaturthi (Aug/Sep)", "Kala Ghoda Arts Festival (Feb)"],
      "must_do": ["Ferry to Elephanta Caves", "Street shopping at Colaba"],
      "secret_trails": ["Sanjay Gandhi National Park trail", "Yeoor Hills trek"]
    }
  ]
}

const localPhrases = [
  {
    phrase: "Khamma Ghani",
    meaning: "Traditional greeting in Udaipur",
    pronunciation: "KHAM-ma GA-ni",
    location: "Udaipur",
  },
  {
    phrase: "Dev Borem Korum",
    meaning: "Thank you in Konkani",
    pronunciation: "dev BOR-em KOR-um",
    location: "Goa",
  },
  {
    phrase: "Kem Cho",
    meaning: "How are you in Gujarati",
    pronunciation: "kem CHO",
    location: "Mumbai",
  },
]

const localStories = [
  {
    trigger: ["anjuna", "market", "hippie"],
    story:
      "🌸 Let me tell you about Anjuna Market... Back in the 1960s, Western hippies started this market to sell their belongings before flying home. What began as a necessity became Goa's most famous flea market! The best finds are still there on Wednesday mornings - authentic Tibetan jewelry, vintage clothes, and that famous Goan feni that locals have been making for 400 years!",
    location: "Goa",
  },
  {
    trigger: ["mumbai", "local", "train"],
    story:
      "🚂 Mumbai locals are the city's lifeline! Here's what tourists don't know: there's an unwritten code. During rush hour, stand to the right on escalators, let people exit first, and NEVER block the doors. The 'ladies compartment' is sacred - respect it! Pro tip: buy a monthly pass if staying longer than a week, it's 10x cheaper than daily tickets!",
    location: "Mumbai",
  },
  {
    trigger: ["udaipur", "sunset", "sajjangarh"],
    story:
      "🌅 Forget City Palace for sunset! Locals go to Sajjangarh Fort (Monsoon Palace). Built in 1884 by Maharana Sajjan Singh to watch monsoon clouds, it offers the most spectacular 360° view of Udaipur. The secret? Arrive 30 minutes before sunset, bring a thermos of chai, and watch the entire city turn golden. It's magical and crowd-free!",
    location: "Udaipur",
  },
  {
    trigger: ["food", "street", "mumbai"],
    story:
      "🍛 Mumbai street food rule #1: Follow the crowds of locals! Vada pav from street vendors tastes 100x better than restaurant versions. The secret is the fresh, hot oil and that special green chutney made with mint, coriander, and green chilies. Best spots: Ashok Vada Pav near Kirti College, and any stall with a long queue of office workers!",
    location: "Mumbai",
  },
  {
    trigger: ["goa", "beach", "hidden"],
    story:
      "🏖️ Skip crowded Baga! Locals love Kakolem Beach (Tiger Beach) - a hidden gem accessible only by a 20-minute trek through jungle. Crystal clear water, no shacks, no crowds. Bring your own water and snacks. The trek starts near a small Shiva temple. It's like having your private piece of paradise!",
    location: "Goa",
  },
]

const quickResponses = [
  {
    category: "Food",
    icon: Utensils,
    responses: [
      "What are the secret sunset points in Goa?",
      "Best local food points in Mumbai?",
      "Where to find authentic Rajasthani food in Udaipur?",
      "Vegetarian options in each city?",
    ],
  },
  {
    category: "Hidden Gems",
    icon: MapPin,
    responses: [
      "Secret trails and hidden spots?",
      "Local shops for handcrafted items?",
      "Offbeat places tourists don't know?",
      "Best time to visit each city?",
    ],
  },
  {
    category: "Photography",
    icon: Camera,
    responses: [
      "Best photo points in each city?",
      "Instagram-worthy locations?",
      "Secret sunset photography spots?",
      "Local photo etiquette?",
    ],
  },
  {
    category: "Transport & Tips",
    icon: Heart,
    responses: [
      "Local transport options and prices?",
      "Weather information for each city?",
      "Festivals and events to attend?",
      "Must-do activities in each city?",
    ],
  },
]

export function AIBotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Namaste! 🙏 I'm Kaka, your friendly local guide for Mumbai, Goa, and Udaipur! I know all the hidden gems, secret sunset spots, authentic food joints, and local stories that guidebooks miss. Ask me anything about these amazing cities - I'm here to help you experience India like a true local! 🇮🇳",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const generateBotResponse = async (userMessage: string) => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-pro",
          messages: [
            {
              role: "system",
              content: "You are Kaka, a helpful and friendly local tourism guide for Mumbai, Goa, and Udaipur. You have deep knowledge of these cities and provide authentic, local insights. Use the provided dataset as ground truth when answering, but you're not limited to it - you can provide additional helpful information. Be conversational, use emojis, and make responses engaging and informative. Always be helpful and encouraging to travelers."
            },
            {
              role: "system",
              content: "Dataset:\n" + JSON.stringify(cityData)
            },
            {
              role: "user",
              content: userMessage
            }
          ],
          max_tokens: 2000,
          temperature: 0.7
        })
      })

      const data = await response.json()
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content
      } else {
        throw new Error("Invalid API response")
      }
    } catch (error) {
      console.error("API Error:", error)
      
      // Fallback responses based on keywords
      const lowerMessage = userMessage.toLowerCase()
      
      if (lowerMessage.includes("food") || lowerMessage.includes("eat")) {
        return "🍛 Food is the heart of Indian culture! Each city has its specialties - Mumbai's vada pav and pav bhaji, Goa's fish curry rice and bebinca, Udaipur's dal baati churma and laal maas. Want specific recommendations for any city? I know where the locals actually eat!"
      }

      if (lowerMessage.includes("transport") || lowerMessage.includes("travel")) {
        return "🚗 Smart travel tip: In Mumbai, use local trains during non-peak hours. In Goa, rent a scooter but watch for tourist pricing - locals pay ₹300/day, tourists get quoted ₹800! In Udaipur, auto-rickshaws are best for short distances. Always negotiate or use Ola/Uber for fair pricing!"
      }

      if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
        return "💰 Local pricing secrets: Tourist prices are usually 3-5x higher! In markets, start bargaining at 30% of quoted price. For transport, know the local rates - Mumbai local train ₹10, Goa bus ₹15-25, Udaipur auto ₹10/km. Always ask locals what they pay!"
      }

      if (lowerMessage.includes("culture") || lowerMessage.includes("tradition")) {
        return "🎭 Cultural experiences: Mumbai - catch a Bollywood show at Prithvi Theatre, Goa - attend a traditional Konkani wedding if invited, Udaipur - watch puppet shows at Bagore Ki Haveli. Remember: remove shoes at temples, dress modestly, and always ask before photographing people!"
      }

      // Default fallback response
      return "That's a great question! 🤔 I have stories and insider tips for Mumbai, Goa, and Udaipur. Try asking about specific places, food, hidden gems, or cultural experiences. I love sharing the real local secrets that guidebooks miss!"
    }
  }

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const newMessage = {
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setMessage("")
    setIsTyping(true)

    try {
      // Get AI response from API
      const botResponseContent = await generateBotResponse(newMessage.content)
      
      const botResponse = {
        type: "bot",
        content: botResponseContent,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    } catch (error) {
      console.error("Error generating response:", error)
      
      // Fallback response
      const botResponse = {
        type: "bot",
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment! 😅",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickResponse = (response: string) => {
    setMessage(response)
  }

  const playPronunciation = (phrase: string) => {
    // In a real app, this would use text-to-speech
    console.log(`Playing pronunciation for: ${phrase}`)
  }

  return (
    <>
      {/* Language Survival Guide Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"🗣️ Local Language Survival Guide 🗣️"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Connect with locals using these essential phrases with audio pronunciation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {localPhrases.map((item, index) => (
              <Card
                key={item.phrase}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Badge className="mb-4 bg-primary text-primary-foreground">{item.location}</Badge>
                <h3 className="text-2xl font-bold mb-2">{item.phrase}</h3>
                <p className="text-muted-foreground mb-2">{item.meaning}</p>
                <p className="text-sm text-accent font-mono mb-4">Pronunciation: {item.pronunciation}</p>
                <Button variant="outline" size="sm" onClick={() => playPronunciation(item.phrase)} className="gap-2">
                  <Volume2 className="h-4 w-4" />
                  Play Audio
                </Button>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickResponses.map((category) => (
              <Card key={category.category} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary p-2 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg">{category.category}</h3>
                </div>
                <div className="space-y-2">
                  {category.responses.map((response) => (
                    <Button
                      key={response}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-2 text-sm hover:bg-primary/10"
                      onClick={() => {
                        setIsOpen(true)
                        handleQuickResponse(response)
                      }}
                    >
                      {response}
                    </Button>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floating AI Bot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full h-16 w-16 shadow-2xl pulse-glow hover:scale-110 transition-transform"
          >
            <Bot className="h-8 w-8" />
          </Button>
        )}

        {/* Enhanced Chat Widget */}
        {isOpen && (
          <Card className="w-96 h-[600px] shadow-2xl border-2 border-primary/20">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Local Kaka AI</h3>
                  <p className="text-xs opacity-90">Your storytelling local guide</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 h-80">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg ${
                      msg.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask about local experiences..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm" disabled={isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </>
  )
}
