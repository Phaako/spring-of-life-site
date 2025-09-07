import React from 'react';
import Layout from '@/components/Layout';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Hammer, Users, Trophy } from 'lucide-react';
import menMinistry from '@/assets/men-ministry.jpg';

const Men = () => {
  const carouselImages = [
    {
      src: menMinistry,
      alt: "Men's Fellowship",
      caption: "Men's BBQ fellowship and discussion"
    },
    {
      src: "/placeholder.svg",
      alt: "Men's Retreat",
      caption: "Annual men's retreat in the wilderness"
    },
    {
      src: "/placeholder.svg",
      alt: "Service Project",
      caption: "Men building homes for the community"
    },
    {
      src: "/placeholder.svg",
      alt: "Sports Ministry",
      caption: "Men's basketball league championship"
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
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-secondary to-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Men's Ministry
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in">
            Building godly men who lead with integrity, serve with purpose, and love unconditionally
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Men Making a Difference
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our men are growing together and impacting the community
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
              Join other men in growing spiritually and making a lasting impact
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

      {/* Vision Statement */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card animate-fade-in">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-8">
                Raising Up Godly Men
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Men's Ministry at Grace Community is committed to challenging and equipping 
                  men to be spiritual leaders in their homes, workplaces, and communities. We believe 
                  that God has called men to be men of character, courage, and compassion.
                </p>
                <p>
                  Through authentic relationships, biblical teaching, and practical service opportunities, 
                  we help men develop the tools they need to navigate life's challenges with wisdom 
                  and strength that comes from God.
                </p>
                <p>
                  Whether you're single, married, a father, or somewhere in between, you'll find a 
                  brotherhood here that will encourage you to become the man God designed you to be.
                </p>
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="shadow-warm">
                  Join the Brotherhood
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
            Men's Ministry Leadership
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our men's ministry is led by dedicated men who are passionate about developing other men.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Michael Davis</strong> - Men's Ministry Director
            </p>
            <p className="text-muted-foreground">
              Email: men@gracecommunity.org | Phone: (555) 123-4569
            </p>
            <Button variant="outline" size="lg">
              Contact Men's Ministry
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Men;