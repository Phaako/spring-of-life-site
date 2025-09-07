import React from 'react';
import Layout from '@/components/Layout';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Coffee, Heart, Calendar } from 'lucide-react';
import womenMinistry from '@/assets/women-ministry.jpg';
import womenRetreat from '@/assets/women-retreat.jpg';
import womenConference from '@/assets/women-conference.jpg';
import womenService from '@/assets/women-service.jpg';

const Women = () => {
  const carouselImages = [
    {
      src: womenMinistry,
      alt: "Women's Bible Study",
      caption: "Weekly women's bible study and fellowship - Growing together in God's Word"
    },
    {
      src: womenRetreat,
      alt: "Women's Retreat",
      caption: "Annual women's retreat - A time of renewal and spiritual refreshment"
    },
    {
      src: womenConference,
      alt: "Women's Conference", 
      caption: "Inspiring conferences with guest speakers and worship"
    },
    {
      src: womenService,
      alt: "Community Service",
      caption: "Women serving in the community - Making a difference together"
    }
  ];

  const programs = [
    {
      icon: Book,
      title: "Women's Bible Study",
      time: "Thursdays 10:00 AM",
      description: "Deep dive into God's Word with discussion and prayer in a supportive environment."
    },
    {
      icon: Coffee,
      title: "Coffee & Connection",
      time: "First Saturday 9:00 AM",
      description: "Casual fellowship time for women to connect and build friendships."
    },
    {
      icon: Heart,
      title: "Mentorship Ministry",
      time: "Ongoing",
      description: "Connecting older and younger women for spiritual growth and life guidance."
    },
    {
      icon: Calendar,
      title: "Special Events",
      time: "Monthly",
      description: "Retreats, conferences, and seasonal celebrations designed for women."
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
              Women's Ministry
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering women to grow in faith, build authentic community, and discover God's unique purpose for their lives
            </p>
          </div>
          
          <Card className="shadow-card">
            <CardContent className="p-12">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Grace Community's Women's Ministry exists to help women of all ages and life stages 
                  develop a deeper relationship with Jesus Christ. We believe that when women are 
                  spiritually strong, families and communities are transformed.
                </p>
                <p>
                  Whether you're a new believer seeking to understand your faith, a seasoned Christian 
                  looking to grow deeper, or someone exploring Christianity for the first time, 
                  you'll find a welcoming place in our women's ministry.
                </p>
                <p>
                  Through Bible study, fellowship, service opportunities, and mentoring relationships, 
                  we encourage one another to live out God's calling on our lives with joy, 
                  authenticity, and purpose.
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
              Join us in one of our programs designed to help women grow spiritually and relationally
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
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <program.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                        {program.title}
                      </h3>
                      <p className="text-accent font-medium mb-3">{program.time}</p>
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
                Join Our Women's Ministry
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to connect with other women and grow in your faith journey? We'd love to have you join us!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-warm">
                  Get Connected
                </Button>
                <Button variant="outline" size="lg">
                  Contact Women's Ministry
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Lisa Thompson - Women's Ministry Director
                </p>
                <p className="text-muted-foreground">
                  Email: women@gracecommunity.org | Phone: (555) 123-4568
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Women;