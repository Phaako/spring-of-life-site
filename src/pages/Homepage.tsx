import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Heart, Book, Users, ArrowRight, Cross, Church } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import pastorPhoto from '@/assets/pastor-photo.jpg';
import solag_logo from '@/assets/solag_logo.mp4';
import homepage from '@/assets/homepage.mp4';

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
                          <span>Abundant Sunday Service:</span>
                          <span className="font-medium">9:00 AM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Abundant Word Hour:</span>
                          <span className="font-medium">7:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Abundant Prayer hour:</span>
                          <span className="font-medium">7:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div> */}
      </section>
    </Layout>
  );
};

export default Homepage;