import React from 'react';
import Layout from '@/components/Layout';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Star, Gift, Heart, Shield } from 'lucide-react';
import childrenSundaySchool from '@/assets/children-sunday-school.jpg';
import childrenVbs from '@/assets/children-vbs.jpg';
import childrenChristmas from '@/assets/children-christmas.jpg';

const Children = () => {
  const carouselImages = [
    {
      src: childrenSundaySchool,
      alt: "Children's Sunday School",
      caption: "Sunday school fun - Learning about God's love through engaging Bible stories"
    },
    {
      src: childrenVbs,
      alt: "Vacation Bible School",
      caption: "VBS summer fun - Games, crafts, and adventures in faith"
    },
    {
      src: childrenChristmas,
      alt: "Children's Christmas Program",
      caption: "Christmas pageant - Children sharing the joy of Jesus' birth"
    }
  ];

  const programs = [
    {
      icon: Book,
      title: "Sunday School",
      time: "Sundays 10:00 AM",
      description: "Age-appropriate Bible lessons and activities for children ages 3-12."
    },
    {
      icon: Star,
      title: "Children's Worship",
      time: "Sundays during 11 AM service",
      description: "Special worship experience designed just for kids with songs, stories, and fun."
    },
    {
      icon: Gift,
      title: "Vacation Bible School",
      time: "Summer - One Week",
      description: "Week-long summer program filled with Bible stories, crafts, games, and snacks."
    },
    {
      icon: Heart,
      title: "Special Events",
      time: "Monthly",
      description: "Holiday programs, service projects, and seasonal celebrations for families."
    }
  ];

  const ageGroups = [
    {
      title: "Toddlers (Ages 2-3)",
      description: "Gentle introduction to Bible stories through songs, simple crafts, and play.",
      color: "bg-yellow-50 border-yellow-200 text-yellow-800"
    },
    {
      title: "Preschool (Ages 4-5)",
      description: "Interactive Bible lessons with games, crafts, and beginning prayer time.",
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      title: "Elementary (Ages 6-8)",
      description: "Deeper Bible study with application to daily life, service projects, and Scripture memory.",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      title: "Tweens (Ages 9-12)",
      description: "Pre-teen focused studies on identity, friendship, and growing in faith.",
      color: "bg-purple-50 border-purple-200 text-purple-800"
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
              Children's Ministry
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Helping children discover God's love and grow in faith through fun, engaging, and age-appropriate activities
            </p>
          </div>
          
          <Card className="shadow-card">
            <CardContent className="p-12">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Grace Community, we believe that children are a gift from God and that their 
                  spiritual formation is one of our most important responsibilities. Our Children's 
                  Ministry creates a safe, loving environment where kids can learn about Jesus 
                  in age-appropriate and engaging ways.
                </p>
                <p>
                  Through creative Bible lessons, interactive worship, hands-on activities, and 
                  meaningful relationships with caring adults, we help children develop a foundation 
                  of faith that will last a lifetime. We partner with parents to nurture each 
                  child's spiritual growth and development.
                </p>
                <p>
                  Our dedicated volunteers are background-checked, trained, and passionate about 
                  investing in the lives of children. Every program is designed to be both fun 
                  and formative, helping kids discover that following Jesus is the greatest adventure of all.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Age Groups
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We have programs tailored for every stage of your child's development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ageGroups.map((group, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-warm transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${group.color}`}>
                    {group.title}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {group.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Children's Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the various ways your child can grow in faith and have fun
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

      {/* Safety & Care */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card">
            <CardContent className="p-12 text-center">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Your Child's Safety Matters
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We take the safety and security of your children seriously. All our volunteers 
                  undergo background checks and safety training to ensure a secure environment.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Background Checks</h4>
                    <p className="text-sm">All volunteers screened</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Trained Leaders</h4>
                    <p className="text-sm">Child safety certified</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Star className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Secure Check-in</h4>
                    <p className="text-sm">Safe pickup procedures</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Get Connected */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-card">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Bring Your Children!
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We'd love to welcome your family and help your children discover God's amazing love for them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-warm">
                  Visit Children's Ministry
                </Button>
                <Button variant="outline" size="lg">
                  Contact Children's Director
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Jennifer Martinez - Children's Ministry Director
                </p>
                <p className="text-muted-foreground">
                  Email: children@gracecommunity.org | Phone: (555) 123-4571
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Children;