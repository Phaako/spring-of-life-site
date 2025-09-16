// import React from 'react';
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Hammer, Users, Trophy } from 'lucide-react';
import menMinistry from '@/assets/men3.jpg';
import menConstruction from '@/assets/men.jpg';
import menRetreat from '@/assets/men2.jpg';
import men4 from '@/assets/men4.jpg';
import { Link } from 'react-router-dom';

const Men = () => {
   const [activeTab, setActiveTab] = useState('');
     const toggleTab = () => {
      setActiveTab(activeTab === "men" ? null : "men");
    };
  const carouselImages = [
    {
      src: menMinistry,
      alt: "Men's Fellowship BBQ",
      caption: "Building brotherhood over good conversation"
    },
    {
      src: menConstruction,
      alt: "Men's Service Project",
      caption: "Building homes for families in need - Serving our community together"
    },
    {
      src: menRetreat,
      alt: "Men's Wilderness Retreat", 
      caption: "Growing closer to God and each other in nature"
    },
    {
      src: men4,
      alt: "Short meeting after a sunday service",
      caption:"Short meeting after a sunday service"
    }
  ];

  const programs = [
    {
      icon: Shield,
      title: "Iron Sharpens Iron",
      time: "Saturday 7:00 AM",
      description: "Men's accountability groups focused on spiritual growth and biblical manhood."
    },
    {
      icon: Hammer,
      title: "Hands-On Ministry",
      time: "Second Saturday",
      description: "Service projects and community outreach through practical skills and labor."
    },
    {
      icon: Users,
      title: "Men's Fellowship",
      time: "Monthly",
      description: "Regular gatherings for food, fellowship, and encouragement in faith and life."
    },
    {
      icon: Trophy,
      title: "Sports & Recreation",
      time: "Weekly",
      description: "Basketball, softball, and other recreational activities that build community."
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

      {/* Ministry Description */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Men's Ministry
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building godly men who lead with integrity, serve with purpose, and love unconditionally
            </p>
          </div>
          
          <Card className="shadow-card">
            <CardContent className="p-12">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Men's Ministry of Spring of Life Assemblies of God is a fellowship of men committed to spiritual growth,
                 brotherhood, and service. We seek to raise strong men of faith who lead their families, church, 
                 and communities with integrity and courage.
                </p>
                <p>
                What We Do:
                
                </p>
                <p>
                  Bible Studies & Prayer Meetings – building strong foundations in Christ.
                Fellowship & Support – creating a brotherhood of encouragement and accountability.
                Community Outreach – serving through projects that meet real needs.
                Leadership Development – equipping men to lead in church and society.
                </p>
                <p>
                  Men! ....... Action! Action! ....... Now!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Ministry Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Together, we grow as Christ-like men who make a lasting impact! 
              
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-warm transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
                      <program.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                        {program.title}
                      </h3>
                      <p className="text-secondary font-medium mb-3">{program.time}</p>
                      <p className="text-muted-foreground leading-relaxed">
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

      {/* Get Connected */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-card">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Join the Brotherhood
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to connect with other men and grow in your walk with God? We'd love to have you join us!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-warm">
                  Join Men's Ministry
                </Button>
                <Button variant="outline" size="lg">
                  Contact Men's Director
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Michael Davis - Men's Ministry Director
                </p>
                <p className="text-muted-foreground">
                  Email: men@gracecommunity.org | Phone: (555) 123-4569
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Men;