import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Calendar, Heart, Book, Users, ArrowRight, Cross, Church, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import pastorPhoto from '@/assets/pastor-photo.jpg';
import solag_logo from '@/assets/solag_logo.mp4';
import homepage from '@/assets/homepage.mp4';
import youthlogo from '@/assets/youthlogo.jpg';
import womenlogo from '@/assets/womenlogo.png';
import childrenlogo from '@/assets/childrenlogo.jpg';
import menlogo from '@/assets/menlogo.jpg';


const Homepage = () => {
  return (
    <Layout>
      {/* Fullscreen Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Fullscreen Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src={homepage} type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Semi-transparent Overlay Box - Warm Elegant Design */}
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl shadow-elegant max-w-6xl w-full max-h-[85vh] overflow-hidden animate-fade-in-up">
            <div className="grid lg:grid-cols-5 min-h-[65vh]">
              
              {/* Pastor's Picture - Left Side with Warm Overlay */}
              <div className="lg:col-span-2 relative overflow-hidden rounded-l-3xl">
                <div className="absolute inset-0 bg-gradient-elegant opacity-20"></div>
                <img
                  src={pastorPhoto}
                  alt="Rev. Dr. Gideon Namyela Panka"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <p className="font-serif text-lg font-semibold">Rev. Dr. Gideon Namyela Panka</p>
                    <p className="text-sm opacity-90">Senior Pastor</p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content - Right Side */}
              <div className="lg:col-span-3 p-8 md:p-12 max-h-[80vh] lg:max-h-[80vh] overflow-y-scroll no-scrollbar">
                <div className="text-white space-y-6">
                  
                  {/* Welcome Header with Faith Icons */}
                  <div className="text-center lg:text-left">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                      <span className="text-primary-glow">Welcome</span> to<br />
                      Spring of Life AG
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto lg:mx-0 mb-6"></div>
                  </div>

                  {/* Pastor's Welcome Message - Elegant Typography */}
                  <div className="space-y-6 text-lg leading-relaxed font-body">
                    <p className="text-white/95">
                      <strong className="bg-gradient-warm bg-clip-text text-transparent text-xl">Dear Friends,</strong>
                    </p>
                    <p className="text-white/90">
                      Whether you're searching for a church home, seeking to deepen your faith, 
                      or simply curious about God's love, we're honored to welcome you to Spring of Life Assemblies of God Church.
                    </p>
                  
                    <p className="text-white/90">
                      Come as you are, and discover the joy of belonging to a family that celebrates 
                      God's grace together. Your journey of faith matters to us, and we're excited 
                      to walk alongside you.
                    </p>
                    <p className="text-primary-glow font-medium italic">
                      "For where two or three gather in my name, there am I with them." - Matthew 18:20
                    </p>
                    <p className="text-white/90">
                      <strong>Blessings,</strong><br />
                      <span className="text-primary-glow font-semibold">Rev. Dr Gideon Namyela Panka</span>
                    </p>
                  </div>

                  {/* Action Buttons - Warm Gradients with Rounded Edges */}
                  <div className="pt-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Link to="/about">
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-warm hover:shadow-elegant text-white rounded-2xl h-14 text-base font-medium transition-all duration-500 hover:-translate-y-1"
                        >
                          <Users className="mr-3 h-5 w-5" />
                          Learn About Us
                        </Button>
                      </Link>
                      <Link to="/sermons">
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="w-full bg-white/15 text-white border-white/40 hover:bg-white/25 backdrop-blur-lg rounded-2xl h-14 text-base font-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
                        >
                          <Play className="mr-3 h-5 w-5" />
                          Watch Sermons
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Link to="/events">
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="w-full bg-gradient-elegant/20 text-white border-primary/50 hover:bg-gradient-elegant/30 backdrop-blur-lg rounded-2xl h-14 text-base font-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-warm"
                        >
                          <Calendar className="mr-3 h-5 w-5" />
                          Upcoming Events
                        </Button>
                      </Link>
                      <Link to="/donate">
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-elegant hover:shadow-warm text-secondary rounded-2xl h-14 text-base font-semibold transition-all duration-500 hover:-translate-y-1"
                        >
                          <Heart className="mr-3 h-5 w-5" />
                          Give & Support
                        </Button>
                      </Link>
                    </div>

                    {/* Service Times */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mt-8 border border-white/10">
                      <h3 className="font-serif text-xl font-semibold text-primary-glow mb-3">
                        Join Us This Sunday
                      </h3>
                      <div className="space-y-2 text-white/90">
                        <p className="flex justify-between">
                          <span>Abundant Life Sunday School:</span>
                          <span className="font-medium">9:00 AM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Abundant Life Service:</span>
                          <span className="font-medium">10:00 AM</span>
                        </p>
                        {/* <p className="flex justify-between">
                          <span>Abundant Prayer hour:</span>
                          <span className="font-medium">7:00 PM</span>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              About Spring of Life AG
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision for authentic community and meaningful worship, we are a vibrant church family 
              committed to creating a welcoming environment where people can explore faith, build relationships, 
              and discover their purpose in God's kingdom.
            </p>
          </div>
          <div className="text-center">
            <Link to="/about">
              <Button 
                size="lg" 
                className="bg-gradient-warm hover:shadow-elegant text-white rounded-2xl px-8 font-medium transition-all duration-300 hover:-translate-y-1"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Our Ministries
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a community that cares. Find your place in one of our ministry groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Youth Ministry",
                description: "Teens building faith together through worship, fellowship, and fun activities.",
                image: youthlogo,
                link: "/youth"
              },
              {
                title: "Women's Ministry",
                description: "Women growing in faith through Bible study, prayer, and meaningful relationships.",
                image: womenlogo,
                link: "/women"
              },
              {
                title: "Men's Ministry",
                description: "Men strengthening their walk with God through fellowship and service projects.",
                image: menlogo,
                link: "/men"
              },
              {
                title: "Children's Ministry",
                description: "Kids discovering God's love through engaging lessons, crafts, and activities.",
                image: childrenlogo,
                link: "/children"
              }
            ].map((ministry, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-warm transition-all duration-300 group animate-fade-in hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-elegant/20 flex items-center justify-center">
                      {/* <Users className="h-12 w-12 text-primary/60" /> */}
                      <img src= {ministry.image} className=" w-36 text-primary/60"/>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {ministry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {ministry.description}
                    </p>
                    <Link to={ministry.link}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Visit Page
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Messages & Sermons
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience God's Word through inspiring messages that encourage spiritual growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow animate-pulse mb-6"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Watch Live Stream
                </Button>
                <p className="text-muted-foreground">
                  Join our live stream every Sunday at 9:00 AM
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-foreground">Recent Messages</h3>
                {[
                  { title: "Walking in Faith, Not Fear", date: "Nov 3, 2024", series: "Overcoming Life's Challenges" },
                  { title: "The Power of Community", date: "Oct 27, 2024", series: "Life Together" }
                ].map((sermon, index) => (
                  <Card key={index} className="shadow-card hover:shadow-warm transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Play className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground truncate">{sermon.title}</h4>
                          <p className="text-sm text-muted-foreground">{sermon.series}</p>
                          <p className="text-xs text-muted-foreground">{sermon.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Link to="/sermons">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full lg:w-auto"
                >
                  View All Sermons
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, index) => (
                <Card key={index} className="aspect-video shadow-card hover:shadow-warm transition-smooth group">
                  <CardContent className="p-0 h-full">
                    <div className="w-full h-full bg-gradient-elegant/20 rounded-lg flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for worship, fellowship, and community events throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Annual Harvest",
                date: "November 02, 2025",
                time: "9:00 AM & 12:30 PM",
                description: "Join us for a beautiful candlelight service celebrating the birth of our Savior.",
                featured: true
              },
              {
                title: "New Year Prayer & Fasting",
                date: "January 1-7, 2025",
                time: "Various Times",
                description: "Start the new year seeking God's direction through prayer and fasting.",
                featured: false
              }
            ].map((event, index) => (
              <Card 
                key={index}
                className={`shadow-card hover:shadow-warm transition-smooth animate-fade-in ${
                  event.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {event.featured && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Featured Event
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <Button 
                size="lg" 
                className="bg-gradient-warm hover:shadow-elegant text-white rounded-2xl px-8 font-medium transition-all duration-300 hover:-translate-y-1"
              >
                See All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Donate Call-to-Action Section */}
      <section className="py-20 bg-gradient-elegant text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Give with a Joyful Heart
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your generosity helps us share God's love and make a difference in our community. 
            Every gift, no matter the size, makes an impact.
          </p>
          <blockquote className="text-lg italic opacity-90 mb-8">
            "Each of you should give what you have decided in your heart to give, 
            not reluctantly or under compulsion, for God loves a cheerful giver."
            <cite className="block text-sm mt-2 opacity-75">2 Corinthians 9:7</cite>
          </blockquote>
          <Link to="/donate">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-2xl px-8 py-4 font-semibold text-lg shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <Heart className="mr-3 h-6 w-6" />
              Give Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>123 Faith Street</p>
                <p>Anytown, ST 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@springoflifeag.org</p>
              </div>
            </div>

            {/* Service Times */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">Service Times</h3>
              <div className="space-y-2 text-sm">
                <p>Abundant Sunday Service: 9:00 AM</p>
                <p>Abundant Word Hour: 7:00 PM</p>
                <p>Abundant Prayer Hour: 7:00 PM</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-primary transition-colors">About Us</Link>
                <Link to="/sermons" className="block hover:text-primary transition-colors">Sermons</Link>
                <Link to="/events" className="block hover:text-primary transition-colors">Events</Link>
                <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Users className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Book className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 Spring of Life Assemblies of God. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Homepage;