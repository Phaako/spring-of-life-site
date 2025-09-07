import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "123 Faith Street",
        "Anytown, ST 12345"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: (555) 123-4567",
        "Prayer Line: (555) 123-PRAY"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@gracecommunity.org",
        "pastor@gracecommunity.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9 AM - 5 PM",
        "Saturday: 9 AM - 12 PM"
      ]
    }
  ];

  const staff = [
    {
      name: "Pastor John Smith",
      role: "Senior Pastor",
      email: "pastor@gracecommunity.org",
      phone: "(555) 123-4567"
    },
    {
      name: "Pastor Sarah Johnson",
      role: "Youth Pastor",
      email: "youth@gracecommunity.org",
      phone: "(555) 123-4568"
    },
    {
      name: "Lisa Thompson",
      role: "Women's Ministry Director",
      email: "women@gracecommunity.org",
      phone: "(555) 123-4569"
    },
    {
      name: "Michael Davis",
      role: "Men's Ministry Director",
      email: "men@gracecommunity.org",
      phone: "(555) 123-4570"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in">
            We'd love to hear from you. Reach out with questions, prayer requests, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card animate-fade-in">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-32"
                      placeholder="How can we help you today?"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full shadow-warm">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're new to the area, looking for a church home, or have questions 
                  about our ministries, we're here to help. Don't hesitate to reach out!
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="shadow-card hover:shadow-warm transition-smooth"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Visit Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're located in the heart of our community and easy to find
            </p>
          </div>

          <Card className="shadow-card animate-fade-in">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Interactive map would be embedded here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Faith Street, Anytown, ST 12345
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Our Staff
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect directly with our pastoral staff and ministry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {staff.map((member, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-warm transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        {member.email}
                      </div>
                      <div className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2" />
                        {member.phone}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Need Prayer or Pastoral Care?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                If you have an urgent prayer request or need immediate pastoral care, 
                please don't hesitate to call our prayer line.
              </p>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-primary">
                  Prayer Line: (555) 123-PRAY
                </div>
                <p className="text-muted-foreground">
                  Available 24/7 for emergencies and urgent prayer requests
                </p>
                <Button size="lg" className="shadow-warm">
                  Submit Prayer Request Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;