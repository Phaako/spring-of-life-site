import React from 'react';
import Layout from '@/components/Layout';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Music, Heart } from 'lucide-react';
import youthActivity from '@/assets/youth-activity.jpg';
import youthAdventure from '@/assets/youth-adventure.jpg';
import youthWorship from '@/assets/youth-worship.jpg';
import youth from '@/assets/youth.jpg';

const Youth = () => {
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
      description: "Games, fellowship, and biblical discussions for teens aged 13-18."
    },
    {
      icon: Music,
      title: "Youth Drama Team",
      time: "Sundays 9:00 AM",
      description: "Join our youth drama band and tell stories, deliver messages through plays and choreography."
    },
    {
      icon: Calendar,
      title: "Youth Events",
      time: "Monthly",
      description: "Special events, retreats, and community service opportunities."
    },
    {
      icon: Heart,
      title: "Mentorship Program",
      time: "Ongoing",
      description: "Connect with adult mentors for guidance and spiritual growth."
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
              Youth Ministry – Christ Ambassadors (C.A.)
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are the youth wing of Assemblies of God, passionate about knowing Christ and making Him known. As Christ Ambassadors (2 Corinthians 5:20), 
              we are committed to living as His representatives everywhere we go.
            </p>
          </div>
          
          <Card className="shadow-card">
            <CardContent className="p-12">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                 Our Mission:
                  To raise a generation of Spirit-filled, Christ-centered leaders who shine as lights in their world.
                              
                </p>
                <p>
                  What We Do:
                  
                </p>
                <p>
                  Weekly Youth Services & Bible Studies- building a strong foundation in God's Word.
                    Camps, Retreats & Rallies- moments of encounter, fellowship, and revival.
                    Evangelism & Outreach- taking the gospel to schools, communities, and beyond.
                    Leadership & Mentorship Programs- grooming tomorrow's church and national leaders.
                    Talent Development- music, drama, arts, and media to glorify God.
                    Community Service- impacting lives through projects that show Christ's love.
                </p>
                <p>
                  Our youth leaders are passionate about walking alongside teenagers during these 
                  formative years, providing mentorship, guidance, and support as they navigate 
                  the challenges and opportunities of adolescence.
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
              Youth Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the various ways teens can get involved and grow in their faith journey
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
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <program.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                        {program.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">{program.time}</p>
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
                Join Our Youth Group
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us – Grow with us – Shine for Christ!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-warm">
                  Join Youth Group
                </Button>
                <Button variant="outline" size="lg">
                  Contact Youth President
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Daniel Sule - Youth President
                </p>
                <p className="text-muted-foreground">
                   Phone: (+233) 020-057-4232
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Youth;