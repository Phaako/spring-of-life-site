import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Music, Heart, Zap, Target, Star } from 'lucide-react';
import youthActivity from '@/assets/youth-activity.jpg';
import youthAdventure from '@/assets/youth-adventure.jpg';
import youthWorship from '@/assets/youth-worship.jpg';
import youth from '@/assets/youth.jpg';
import { Link } from 'react-router-dom';

const Youth = () => {
  const [activeTab, setActiveTab] = useState('');
   const toggleTab = () => {
    setActiveTab(activeTab === "youth" ? null : "youth");
  };
  const carouselImages = [
    {
      src: youthActivity,
      alt: "Youth Group Fellowship",
      caption: "Youth fellowship and games night - Building friendships that last"
    },
    {
      src: youthAdventure,
      alt: "Youth Adventure Trip",
      caption: "Annual adventure retreat - Growing in faith through outdoor challenges"
    },
    {
      src: youthWorship,
      alt: "Youth Worship Team",
      caption: "Youth leading worship - Using their gifts to serve God and others"
    },
    {
      src: youth,
      alt: "victory at bible quiz 2025",
      caption: "SoLAG youth emerge 2nd at the Tamale West district bible Quiz Competition"
    }
  ];

  const programs = [
    {
      icon: Users,
      title: "Weekly Youth Group",
      time: "Mondays 7:00 PM",
      description: "Games, fellowship, and biblical discussions for teens aged 13-18.",
      color: "youth-emerald"
    },
    {
      icon: Music,
      title: "Youth Drama Team",
      time: "Sundays 9:00 AM",
      description: "Join our youth drama band and tell stories, deliver messages through plays and choreography.",
      color: "youth-yellow"
    },
    {
      icon: Calendar,
      title: "Youth Events",
      time: "Monthly",
      description: "Special events, retreats, and community service opportunities.",
      color: "youth-emerald"
    },
    {
      icon: Heart,
      title: "Mentorship Program",
      time: "Ongoing",
      description: "Connect with adult mentors for guidance and spiritual growth.",
      color: "youth-yellow"
    }
  ];

  return (
    <Layout>
      {/* Full-width Photo Carousel */}
      <ImageCarousel 
        images={carouselImages} 
        fullWidth={true}
        height="lg"
        className="animate-fade-in"
      />

      {/* Hero Section with Geometric Shapes */}
      <section className="relative py-24 bg-gradient-youth overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 bg-youth-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-youth-yellow rounded-full -translate-x-32 -translate-y-32 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-youth-emerald rounded-full translate-x-48 translate-y-48 opacity-15"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-youth text-6xl md:text-7xl font-black text-youth-white mb-6 tracking-tight">
              Youth Ministry - Christ Ambassadors (C.A.)
            </h1>
            <div className="w-32 h-2 bg-youth-yellow rounded-full mx-auto mb-8 animate-pulse"></div>
            <p className="font-youth text-xl md:text-2xl text-youth-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              We are the youth wing of Assemblies of God, passionate about knowing Christ and making Him known. As Christ Ambassadors (2 Corinthians 5:20),
               we are committed to living as His representatives everywhere we go.🔥
            </p>
          </div>
        </div>
      </section>

      {/* Ministry Description with Vibrant Cards */}
      <section className="py-20 bg-youth-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="shadow-youth border-0 bg-gradient-to-br from-youth-white to-youth-emerald/5">
                <CardContent className="p-10">
                  <div className="space-y-8 font-youth">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-youth-accent rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-youth-white" />
                      </div>
                      <h2 className="font-youth text-3xl font-bold text-youth-navy">Our Mission</h2>
                    </div>
                    
                    <p className="text-lg text-youth-navy/80 leading-relaxed font-medium">
                                          To nurture and disciple young people in the Word of God.
                      , equip them with spiritual, moral, and leadership values,
                     mobilize the youth for evangelism, missions, and community service and 
                      to provide a safe and empowering space for growth, fellowship, and creativity.
                    </p>
                    
                    <p className="text-lg text-youth-navy/80 leading-relaxed font-medium">
                      Through mind-blowing Bible studies, adrenaline-pumping activities, and life-changing service 
                      opportunities, we help young people build an unshakeable relationship with Jesus 
                      and equip them to be world-changers in their schools and communities.
                    </p>
                    
                    <div className="bg-gradient-youth-accent p-6 rounded-2xl">
                      <p className="text-youth-white font-semibold text-lg text-center">
                        "As Christ Ambassadors, we are committed to living as true representatives of Christ—bold in our faith, passionate in service, and united in purpose." 🌟
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Side Stats */}
            <div className="space-y-6">
              <Card className="bg-youth-navy text-youth-white border-0 shadow-youth">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-youth-yellow mx-auto mb-4" />
                  <h3 className="font-youth text-2xl font-bold mb-2">20+</h3>
                  <p className="font-youth text-youth-white/80 font-medium">Active Youth Members</p>
                </CardContent>
              </Card>
              
              <Card className="bg-youth-emerald text-youth-white border-0 shadow-youth">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-youth-yellow mx-auto mb-4" />
                  <h3 className="font-youth text-2xl font-bold mb-2">12</h3>
                  <p className="font-youth text-youth-white/80 font-medium">Annual Events</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="h-16 bg-gradient-to-r from-youth-yellow via-youth-emerald to-youth-navy"></div>

      {/* Programs Section */}
      <section className="py-20 bg-youth-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-youth text-5xl font-black text-youth-navy mb-6 tracking-tight">
              THE YOUTH ALIVE!
            </h2>
            <p className="font-youth text-xl text-youth-navy/70 max-w-2xl mx-auto font-semibold">
              We invite every young person to join us, grow with us, and become a shining light for Jesus in this generation! 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className={`border-0 shadow-youth hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group animate-slide-in-up bg-gradient-to-br from-youth-white to-${program.color}/10`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-youth-pattern opacity-5 transform rotate-12"></div>
                  
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-${program.color} text-youth-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <program.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-youth text-2xl font-bold text-youth-navy mb-3 group-hover:text-youth-emerald transition-colors">
                        {program.title}
                      </h3>
                      <p className={`text-${program.color} font-youth font-bold text-lg mb-4 uppercase tracking-wider`}>
                        {program.time}
                      </p>
                      <p className="text-youth-navy/70 leading-relaxed font-youth font-medium">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-youth relative overflow-hidden">
        {/* Geometric Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-youth-pattern opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-youth-yellow rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-youth-emerald rounded-full opacity-15 animate-bounce"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 bg-youth-white/95 backdrop-blur shadow-2xl">
            <CardContent className="p-12">
              <h2 className="font-youth text-4xl font-black text-youth-navy mb-6 tracking-tight">
                READY TO JOIN THE ADVENTURE? 🎯
              </h2>
              <p className="font-youth text-xl text-youth-navy/70 mb-10 max-w-2xl mx-auto font-semibold">
                Come hang with an incredible community of teens who are leveling up their faith together!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to={"https://forms.gle/L8ntEPv2ZFZpeSCp9"}
                   
                  className="font-youth font-bold text-lg px-10  py-3 bg-gradient-youth-accent hover:bg-youth-emerald rounded-lg text-youth-white border-0 shadow-youth hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  JOIN YOUTH GROUP 🚀
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={toggleTab}
                  className="font-youth font-bold text-lg px-10 py-4 border-2 border-youth-navy text-youth-navy hover:bg-youth-navy hover:text-youth-white transition-all duration-300"
                >
                 {activeTab === "youth" ? "HIDE TEAM 🙈" : "MEET THE TEAM 👥"}
                </Button>
              </div>
              {activeTab === 'youth' && (
                 <div className="mt-10 pt-8 border-t border-youth-navy/20">
                <div className="bg-gradient-to-r from-youth-emerald to-youth-navy p-6 rounded-2xl text-youth-white">
                  <p className="font-youth text-lg font-bold mb-2">
                     Daniel Sule - Youth President 🌟
                  </p>
                  <p className="font-youth font-medium">
                    📧 solag1685@gmail.com | 📱 020 057 1027
                  </p>
                </div>
              </div>
              )}
             
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Youth;