import React from 'react';
import Layout from '@/components/Layout';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Coffee, Heart, Calendar } from 'lucide-react';
import womenMinistry from '@/assets/women-ministry.jpg';

const Women = () => {
  const carouselImages = [
    {
      src: womenMinistry,
      alt: "Women's Bible Study",
      caption: "Weekly women's bible study and fellowship"
    },
    {
      src: "/placeholder.svg",
      alt: "Women's Retreat",
      caption: "Annual women's retreat weekend"
    },
    {
      src: "/placeholder.svg",
      alt: "Mother's Day Event",
      caption: "Special Mother's Day celebration"
    },
    {
      src: "/placeholder.svg",
      alt: "Community Service",
      caption: "Women serving in the community"
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
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-accent to-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Women's Ministry
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in">
            Empowering women to grow in faith, build community, and discover God's purpose
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Women Growing Together
            </h2>
            <p className="text-xl text-muted-foreground">
              See how God is working through our women's ministry programs
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

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card animate-fade-in">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-8">
                Our Heart for Women
              </h2>
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
              <div className="text-center mt-8">
                <Button size="lg" className="shadow-warm">
                  Get Connected
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Women's Ministry Leadership
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our ministry is led by passionate women who love Jesus and desire to see other women flourish.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Lisa Thompson</strong> - Women's Ministry Director
            </p>
            <p className="text-muted-foreground">
              Email: women@gracecommunity.org | Phone: (555) 123-4568
            </p>
            <Button variant="outline" size="lg">
              Contact Women's Ministry
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Women;