import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Heart, Book, Users, ArrowRight, Cross, Church } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import pastorPhoto from '@/assets/pastor-photo.jpg';

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
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
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
                  alt="Pastor John Smith"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-gradient-warm/80 backdrop-blur-md rounded-xl p-4 shadow-warm">
                    <div className="flex items-center gap-2 mb-1">
                      <Cross className="h-4 w-4 text-white/90" />
                      <p className="font-serif text-lg font-semibold">Pastor John Smith</p>
                    </div>
                    <p className="text-sm opacity-90 font-body">Senior Pastor</p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content - Right Side with Warm Elegance */}
              <div className="lg:col-span-3 p-10 md:p-16 overflow-y-auto max-h-[85vh] lg:max-h-none">
                <div className="text-white space-y-8">
                  
                  {/* Welcome Header with Faith Icons */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <Heart className="h-8 w-8 text-primary-glow" />
                      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="bg-gradient-warm bg-clip-text text-transparent">Welcome</span> to<br />
                        <span className="text-white">Grace Community</span>
                      </h1>
                    </div>
                    <div className="w-24 h-1.5 bg-gradient-warm rounded-full mx-auto lg:mx-0 mb-8 shadow-glow"></div>
                  </div>

                  {/* Pastor's Welcome Message - Elegant Typography */}
                  <div className="space-y-6 text-lg leading-relaxed font-body">
                    <p className="text-white/95">
                      <strong className="bg-gradient-warm bg-clip-text text-transparent text-xl">Dear Friends,</strong>
                    </p>
                    <p className="text-white/90">
                      Whether you're searching for a church home, seeking to deepen your faith, 
                      or simply curious about God's love, we're honored to welcome you to Grace Community Church.
                    </p>
                    <p className="text-white/90">
                      For over 25 years, our church family has been a place where authentic relationships 
                      are built, lives are transformed, and the community is served with compassion. 
                      We believe that everyone has a story worth sharing and a purpose worth discovering.
                    </p>
                    <p className="text-white/90">
                      Come as you are, and discover the joy of belonging to a family that celebrates 
                      God's grace together. Your journey of faith matters to us, and we're excited 
                      to walk alongside you.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 my-6">
                      <div className="flex items-start gap-3">
                        <Book className="h-6 w-6 text-primary-glow mt-1 flex-shrink-0" />
                        <p className="bg-gradient-warm bg-clip-text text-transparent font-serif text-lg italic leading-relaxed">
                          "For where two or three gather in my name, there am I with them."
                          <span className="block text-white/80 text-base font-body not-italic mt-2">- Matthew 18:20</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-white/95">
                      <strong className="font-body">Blessings,</strong><br />
                      <span className="bg-gradient-warm bg-clip-text text-transparent font-serif text-xl font-semibold">Pastor John Smith</span>
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

                    {/* Service Times - Elegant Card */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mt-10 border border-white/20 shadow-card">
                      <div className="flex items-center gap-3 mb-6">
                        <Church className="h-6 w-6 text-primary-glow" />
                        <h3 className="font-serif text-2xl font-semibold bg-gradient-warm bg-clip-text text-transparent">
                          Join Us This Sunday
                        </h3>
                      </div>
                      <div className="space-y-4 text-white/95 font-body">
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="text-white/80">Sunday Worship:</span>
                          <span className="font-semibold text-primary-glow">9:00 AM & 11:00 AM</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="text-white/80">Sunday School:</span>
                          <span className="font-semibold text-primary-glow">10:00 AM</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-white/80">Wednesday Prayer:</span>
                          <span className="font-semibold text-primary-glow">7:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;