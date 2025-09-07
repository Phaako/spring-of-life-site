import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, CreditCard, Smartphone, DollarSign, Users, Building, Globe } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [donationType, setDonationType] = useState<'one-time' | 'recurring'>('one-time');

  const suggestedAmounts = [25, 50, 100, 250, 500];

  const givingOptions = [
    {
      icon: Heart,
      title: "General Fund",
      description: "Support the overall ministry and operations of Grace Community Church."
    },
    {
      icon: Building,
      title: "Building Fund",
      description: "Help us expand our facilities to better serve our growing congregation."
    },
    {
      icon: Globe,
      title: "Missions",
      description: "Support our global mission efforts and local community outreach programs."
    },
    {
      icon: Users,
      title: "Youth Ministry",
      description: "Invest in the next generation through our youth programs and activities."
    }
  ];

  const impactStats = [
    {
      amount: "$25",
      impact: "Provides meals for a family in need through our food pantry"
    },
    {
      amount: "$50",
      impact: "Sponsors a child for Vacation Bible School including materials and snacks"
    },
    {
      amount: "$100",
      impact: "Helps fund a youth retreat scholarship for a teenager"
    },
    {
      amount: "$250",
      impact: "Supports a week of community outreach programming"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-accent to-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Give with Joy
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in">
            Your generosity helps us share God's love and make a difference in our community
          </p>
        </div>
      </section>

      {/* Giving Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-warm animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Make a Donation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose your donation type and amount below
                </p>
              </div>

              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-muted p-1 rounded-lg">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-2 rounded-md font-medium transition-smooth ${
                      donationType === 'one-time'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    onClick={() => setDonationType('recurring')}
                    className={`px-6 py-2 rounded-md font-medium transition-smooth ${
                      donationType === 'recurring'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Monthly Giving
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  Select Amount
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-4 rounded-lg border-2 font-semibold transition-smooth ${
                        selectedAmount === amount
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary hover:bg-primary/5'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-foreground text-center">
                  Choose Payment Method
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button 
                    size="lg" 
                    className="h-16 shadow-warm"
                    disabled
                  >
                    <CreditCard className="mr-3 h-6 w-6" />
                    <div>
                      <div className="font-semibold">Credit/Debit Card</div>
                      <div className="text-sm opacity-75">Secure online payment</div>
                    </div>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-16"
                    disabled
                  >
                    <Smartphone className="mr-3 h-6 w-6" />
                    <div>
                      <div className="font-semibold">Mobile Payment</div>
                      <div className="text-sm opacity-75">Apple Pay, Google Pay</div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="px-12 shadow-glow" disabled>
                  Complete Donation
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Secure donation processing powered by industry-leading encryption
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Ways to Give
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the area where you'd like to make the greatest impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {givingOptions.map((option, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-warm transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <option.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                        {option.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Your Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how your generosity creates real change in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-card rounded-lg shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-4">{stat.amount}</div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {stat.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bible Verse & Other Ways to Give */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card animate-fade-in">
            <CardContent className="p-12 text-center">
              <blockquote className="text-2xl font-medium text-foreground mb-6 italic">
                "Each of you should give what you have decided in your heart to give, 
                not reluctantly or under compulsion, for God loves a cheerful giver."
              </blockquote>
              <cite className="text-lg text-muted-foreground">2 Corinthians 9:7</cite>
            </CardContent>
          </Card>

          <div className="mt-16 text-center">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8">
              Other Ways to Give
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold text-foreground mb-2">By Mail</h4>
                <p className="text-sm text-muted-foreground">
                  Grace Community Church<br />
                  123 Faith Street<br />
                  Anytown, ST 12345
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">In Person</h4>
                <p className="text-sm text-muted-foreground">
                  Place your gift in the offering box<br />
                  during any Sunday service<br />
                  or visit the church office
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Bank Transfer</h4>
                <p className="text-sm text-muted-foreground">
                  Set up automatic giving<br />
                  through your bank's<br />
                  online bill pay system
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Questions About Giving?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help you with any questions about donations, tax receipts, or giving options.
          </p>
          <Button variant="outline" size="lg">
            Contact Our Finance Team
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;