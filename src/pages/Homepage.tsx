import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import pastorPhoto from '@/assets/pastor-photo.jpg';

const Homepage = () => {
  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Welcome to
              <span className="block text-gradient">Grace Community</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              A place where faith meets community, and every person is valued and loved
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hero-gradient text-white shadow-glow hover:shadow-warm transition-slow"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Join Our Services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Live
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Pastor's Welcome Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pastor Image */}
            <div className="animate-fade-in">
              <div className="relative">
                <img
                  src={pastorPhoto}
                  alt="Pastor John Smith"
                  className="w-full max-w-md mx-auto rounded-lg shadow-warm"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-card">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="animate-slide-in-right">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                A Message from Pastor John
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Welcome to Grace Community Church! Whether you're new to faith or have been 
                  walking with God for years, we're honored to have you as part of our church family.
                </p>
                <p>
                  Our mission is simple: to love God, love people, and serve our community with 
                  the grace and compassion of Jesus Christ. We believe that church is not just 
                  a place you go, but a family you belong to.
                </p>
                <p>
                  I invite you to explore all that God has in store for you here at Grace Community. 
                  Come as you are, and discover the joy of authentic community and genuine faith.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-foreground">Pastor John Smith</p>
                <p className="text-muted-foreground">Senior Pastor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your place in our church community through various ministries and programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sunday Services",
                description: "Join us every Sunday at 9:00 AM and 11:00 AM for inspiring worship and biblical teaching.",
                icon: "🙏",
                link: "/about"
              },
              {
                title: "Connect Groups",
                description: "Build meaningful relationships through our small group ministries for all ages.",
                icon: "👥",
                link: "/about"
              },
              {
                title: "Community Outreach",
                description: "Make a difference in our community through service projects and volunteer opportunities.",
                icon: "❤️",
                link: "/events"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-warm transition-smooth group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;