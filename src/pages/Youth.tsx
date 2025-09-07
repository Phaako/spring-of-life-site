import React from 'react';
import Layout from '@/components/Layout';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Music, Heart } from 'lucide-react';
import youthActivity from '@/assets/youth-activity.jpg';

const Youth = () => {
  const carouselImages = [
    {
      src: youthActivity,
      alt: "Youth Group Activities",
      caption: "Youth fellowship and games night"
    },
    {
      src: "/placeholder.svg",
      alt: "Youth Worship",
      caption: "Sunday youth worship service"
    },
    {
      src: "/placeholder.svg",
      alt: "Youth Retreat",
      caption: "Annual youth retreat in the mountains"
    },
    {
      src: "/placeholder.svg",
      alt: "Community Service",
      caption: "Youth community service project"
    }
  ];

  const programs = [
    {
      icon: Users,
      title: "Weekly Youth Group",
      time: "Wednesdays 7:00 PM",
      description: "Games, fellowship, and biblical discussions for teens aged 13-18."
    },
    {
      icon: Music,
      title: "Youth Worship Team",
      time: "Sundays 9:00 AM",
      description: "Join our youth worship band and lead praise during services."
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
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Youth Ministry
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in">
            A place for teens to grow in faith, build friendships, and discover their purpose
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Youth in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Take a look at some of our recent youth activities and events
            </p>
          </div>
          <ImageCarousel images={carouselImages} className="animate-fade-in" />
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
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

      {/* About Youth Ministry */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card animate-fade-in">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-8">
                About Our Youth Ministry
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our Youth Ministry is designed to create a safe and fun environment where 
                  teenagers can explore their faith, ask questions, and build lasting friendships. 
                  We believe that every teen has unique gifts and potential that God wants to use.
                </p>
                <p>
                  Through interactive Bible studies, engaging activities, and meaningful service 
                  opportunities, we help young people develop a personal relationship with Jesus 
                  Christ and equip them to make a positive impact in their schools and communities.
                </p>
                <p>
                  Our youth leaders are passionate about walking alongside teenagers during these 
                  formative years, providing mentorship, guidance, and support as they navigate 
                  the challenges and opportunities of adolescence.
                </p>
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="shadow-warm">
                  Join Our Youth Group
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Youth Pastor */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Questions About Youth Ministry?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our youth pastor would love to connect with you and answer any questions about our programs.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Pastor Sarah Johnson</strong> - Youth Pastor
            </p>
            <p className="text-muted-foreground">
              Email: youth@gracecommunity.org | Phone: (555) 123-4567
            </p>
            <Button variant="outline" size="lg">
              Contact Youth Pastor
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Youth;