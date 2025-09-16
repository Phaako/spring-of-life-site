import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Christmas Eve Service",
      date: "December 24, 2025",
      time: "6:00 PM & 8:00 PM",
      location: "Main Sanctuary",
      description: "Join us for a beautiful candlelight service celebrating the birth of our Savior. This family-friendly service will include carols, scripture readings, and a message of hope.",
      image: "/placeholder.svg",
      category: "Worship Service",
      featured: true
    },
    {
      title: "Annual Harvest",
      date: "October 26, 2025",
      time: "9:00 AM",
      location: "Church & Online",
      description: "Start the new year seeking God's direction through prayer and fasting. Daily prayer meetings and resources provided.",
      image: "/placeholder.svg",
      category: "Prayer Event"
    },
    {
      title: "Youth Winter Retreat",
      date: "January 18-20, 2025",
      time: "Friday 6 PM - Sunday 6 PM",
      location: "Mountain View Camp",
      description: "A weekend of worship, fellowship, and fun for our youth group. Registration required by January 10th.",
      image: "/placeholder.svg",
      category: "Youth Event"
    },
    {
      title: "Women's Conference: 'His Beloved'",
      date: "February 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Fellowship Hall",
      description: "A day of worship, teaching, and fellowship for women of all ages. Featuring guest speaker Dr. Sarah Martinez.",
      image: "/placeholder.svg",
      category: "Women's Ministry"
    }
  ];

  const pastEvents = [
    {
      title: "Fall Harvest Festival",
      date: "October 31, 2024",
      description: "Our annual community outreach event with games, food, and fellowship for families.",
      image: "/placeholder.svg",
      attendees: "300+ people"
    },
    {
      title: "Men's Retreat: 'Iron Sharpens Iron'",
      date: "September 20-22, 2024",
      description: "A powerful weekend of teaching, fellowship, and outdoor activities for men.",
      image: "/placeholder.svg",
      attendees: "75 men"
    },
    {
      title: "Back to School Blessing",
      date: "August 25, 2024",
      description: "Special service blessing students, teachers, and parents for the new school year.",
      image: "/placeholder.svg",
      attendees: "250+ families"
    },
    {
      title: "VBS: 'Kingdom Chronicles'",
      date: "July 8-12, 2024",
      description: "Week-long Vacation Bible School with Bible stories, crafts, games, and snacks.",
      image: "/placeholder.svg",
      attendees: "120 children"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Events
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in">
            Join us for worship, fellowship, and community events throughout the year
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mark your calendars and join us for these exciting upcoming events
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className={`shadow-card hover:shadow-warm transition-smooth animate-fade-in ${
                  event.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Event Image */}
                    <div className="aspect-video md:aspect-square bg-muted flex items-center justify-center">
                      <Calendar className="h-12 w-12 text-muted-foreground" />
                    </div>
                    
                    {/* Event Details */}
                    <div className="md:col-span-2 p-8">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          {event.featured && (
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                              Featured Event
                            </span>
                          )}
                          <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {event.title}
                      </h3>
                      
                      <div className="grid sm:grid-cols-3 gap-4 mb-6 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="shadow-warm">
                          Register Now
                        </Button>
                        <Button variant="outline">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Recent Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what God has been doing through our recent church events and gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-warm transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-muted-foreground" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                    <div className="flex items-center text-sm text-accent font-medium">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Types of Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We host various types of events throughout the year for different groups and interests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Worship Services",
                description: "Special worship services, baptisms, and seasonal celebrations",
                icon: "🙏"
              },
              {
                title: "Community Outreach",
                description: "Events that serve and connect with our local community",
                icon: "❤️"
              },
              {
                title: "Ministry Events",
                description: "Conferences, retreats, and gatherings for specific ministry groups",
                icon: "👥"
              },
              {
                title: "Family Events",
                description: "Fun activities designed for families and children of all ages",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "Educational",
                description: "Seminars, workshops, and classes for spiritual growth",
                icon: "📚"
              },
              {
                title: "Fellowship",
                description: "Social gatherings to build relationships and community",
                icon: "🤝"
              }
            ].map((category, index) => (
              <Card 
                key={index}
                className="text-center shadow-card hover:shadow-warm transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss out on upcoming events. Subscribe to our newsletter or follow us on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-warm">
              Subscribe to Newsletter
            </Button>
            <Button variant="outline" size="lg">
              Follow on Social Media
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;