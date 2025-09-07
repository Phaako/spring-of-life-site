import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Heart, Book, Users, ArrowRight } from 'lucide-react';
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

        {/* Semi-transparent Overlay Box */}
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[80vh] overflow-hidden animate-fade-in-up">
            <div className="grid lg:grid-cols-5 min-h-[60vh]">
              
              {/* Pastor's Picture - Left Side */}
              <div className="lg:col-span-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <img
                  src={pastorPhoto}
                  alt="Pastor John Smith"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <p className="font-serif text-lg font-semibold">Pastor John Smith</p>
                    <p className="text-sm opacity-90">Senior Pastor</p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content - Right Side */}
              <div className="lg:col-span-3 p-8 md:p-12 overflow-y-auto max-h-[80vh] lg:max-h-none">
                <div className="text-white space-y-6">
                  
                  {/* Welcome Header */}
                  <div className="text-center lg:text-left">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                      <span className="text-primary-glow">Welcome</span> to<br />
                      Grace Community
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto lg:mx-0 mb-6"></div>
                  </div>

                  {/* Pastor's Welcome Message */}
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p className="text-white/90">
                      <strong className="text-primary-glow">Dear Friends,</strong>
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
                    <p className="text-primary-glow font-medium italic">
                      "For where two or three gather in my name, there am I with them." - Matthew 18:20
                    </p>
                    <p className="text-white/90">
                      <strong>Blessings,</strong><br />
                      <span className="text-primary-glow font-semibold">Pastor John Smith</span>
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Link to="/about">
                        <Button 
                          size="lg" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-slow"
                        >
                          <Users className="mr-2 h-5 w-5" />
                          Learn About Us
                        </Button>
                      </Link>
                      <Link to="/sermons">
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-slow"
                        >
                          <Play className="mr-2 h-5 w-5" />
                          Watch Sermons
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Link to="/events">
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="w-full bg-accent/20 text-white border-accent/50 hover:bg-accent/30 backdrop-blur-sm transition-slow"
                        >
                          <Calendar className="mr-2 h-5 w-5" />
                          Upcoming Events
                        </Button>
                      </Link>
                      <Link to="/donate">
                        <Button 
                          size="lg" 
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm transition-slow"
                        >
                          <Heart className="mr-2 h-5 w-5" />
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
                          <span>Sunday Worship:</span>
                          <span className="font-medium">9:00 AM & 11:00 AM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sunday School:</span>
                          <span className="font-medium">10:00 AM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Wednesday Prayer:</span>
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
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;