import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Book, Globe, HandHelpingIcon} from 'lucide-react';
import { HandsPrayingIcon } from '@phosphor-icons/react';
import churchInterior from '@/assets/church-interior.jpg';
import pastor from '@/assets/pastor-photo.jpg';
import musah from '@/assets/musah.jpg';
import titus from '@/assets/titus.jpg';


const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We believe in showing God's love through our actions and relationships with one another."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building authentic relationships and supporting each other through life's journey."
    },
    {
      icon: Book,
      title: "Truth",
      description: "Committed to teaching and living according to biblical principles and values."
    },
    {
      icon: Globe,
      title: "Service",
      description: "Making a positive impact in our local community and around the world."
    },
    {
      icon: HandHelpingIcon,
      title: "Giving",
      description: "Giving"
    },
    {
     icon: HandsPrayingIcon,
     title: "Prayer",
     description: "Pray without ceasing. 1 Thessalonians 5:17."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About Spring of Life Assemblies of God
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in">
            Discover our story, mission, and the heart behind our church family
          </p>
        </div>
      </section>

      {/* Church Interior Image */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-warm animate-fade-in">
            <img
              src={churchInterior}
              alt="Grace Community Church Interior"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 1995, Grace Community Church began as a small gathering of families 
                who shared a vision for authentic community and meaningful worship. What started 
                in a living room has grown into a vibrant church family of over 500 members.
              </p>
              <p>
                Through the years, we've remained committed to our founding principles: creating 
                a welcoming environment where people can explore faith, build relationships, and 
                discover their purpose in God's kingdom.
              </p>
              <p>
                Today, we continue to grow not just in numbers, but in our impact on the community 
                around us, always striving to be a beacon of hope and love in our neighborhood and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-card animate-fade-in">
              <CardContent className="p-8">
                <h3 className="font-serif text-3xl font-bold text-primary mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a community where people can encounter God's love, grow in their faith, 
                  and discover their unique calling to serve others. We are committed to reaching 
                  our community with the Gospel through authentic relationships and practical service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="font-serif text-3xl font-bold text-accent mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a church that transforms lives and communities through the power of God's 
                  love. We envision a place where every person feels valued, equipped, and empowered 
                  to make a positive difference in the world around them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do as a church community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center shadow-card hover:shadow-warm transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership (Optional - can be expanded later) */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Our Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Grace Community Church is led by a dedicated team of pastors and leaders 
            who are passionate about serving God and caring for our church family.
          </p>
          <div className="mt-12 space-y-10">
            <Card className="max-w-md mx-auto shadow-card transform transition duration-300 hover:scale-105 hover:shadow-xl ">
              <CardContent className="p-8 text-center space-y-5 flex flex-col justify-center items-center">
                <img src={pastor} className='w-60 h-80 rounded-lg shadow-lg shadow-black flex justify-center items-center '/>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Rev. Dr. Gideon Namyela Panka
                </h3>
                <p className="text-primary font-medium mb-4">Senior Pastor</p>
                <p className="text-muted-foreground">
                  Serving Spring of  life since 2015, Rev. Dr. Gideon Namyela Panka brings wisdom, 
                  compassion, and a heart for discipleship to our church family.
                </p>
              </CardContent>
            </Card>
            
            <div className='flex '> 
              <Card className="max-w-md mx-auto shadow-card transform transition duration-300 hover:scale-105 hover:shadow-xl ">
              <CardContent className="p-8 text-center space-y-5 flex flex-col justify-center items-center">
                <img src={musah} className='  rounded-lg shadow-lg shadow-black flex justify-center items-center '/>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Rev. Musah Salifu Taylor
                </h3>
                <p className="text-primary font-medium mb-4">Senior Pastor</p>
                <p className="text-muted-foreground">
                  Serving Spring of  life since 2015, Rev. Dr. Gideon Namyela Panka brings wisdom, 
                  compassion, and a heart for discipleship to our church family.
                </p>
              </CardContent>
            </Card>
            <Card className="max-w-md mx-auto shadow-card transform transition duration-300 hover:scale-105 hover:shadow-xl ">
              <CardContent className="p-8 text-center space-y-5 flex flex-col justify-center items-center">
                <img src={titus} className='  rounded-lg shadow-lg shadow-black flex justify-center items-center '/>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Ps. Titus Abaah
                </h3>
                <p className="text-primary font-medium mb-4">Senior Pastor</p>
                <p className="text-muted-foreground">
                  Serving Spring of  life since 2015, Rev. Dr. Gideon Namyela Panka brings wisdom, 
                  compassion, and a heart for discipleship to our church family.
                </p>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;