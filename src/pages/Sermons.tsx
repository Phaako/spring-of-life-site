import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Download, Calendar, Clock, Tv } from 'lucide-react';

const Sermons = () => {
  const recentSermons = [
    {
      title: "Walking in Faith, Not Fear",
      speaker: "Pastor John Smith",
      date: "November 3, 2024",
      duration: "35 minutes",
      series: "Overcoming Life's Challenges",
      description: "Discover how to trust God's plan even when we can't see the full picture.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "The Power of Community",
      speaker: "Pastor Sarah Johnson",
      date: "October 27, 2024",
      duration: "28 minutes",
      series: "Life Together",
      description: "Exploring God's design for authentic Christian community and fellowship.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Generous Hearts, Generous Lives",
      speaker: "Pastor John Smith",
      date: "October 20, 2024",
      duration: "32 minutes",
      series: "Kingdom Living",
      description: "Understanding biblical principles of generosity and stewardship.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Finding Purpose in Every Season",
      speaker: "Guest Speaker - Dr. Maria Rodriguez",
      date: "October 13, 2024",
      duration: "40 minutes",
      series: "Seasons of Life",
      description: "How to discern God's purpose for your life in every stage and season.",
      thumbnail: "/placeholder.svg"
    }
  ];

  const sermonSeries = [
    {
      title: "Overcoming Life's Challenges",
      sermonCount: 6,
      description: "A practical series on facing difficulties with faith and courage.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Life Together",
      sermonCount: 4,
      description: "Exploring God's design for Christian community and relationships.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Kingdom Living",
      sermonCount: 8,
      description: "What it means to live as citizens of God's kingdom today.",
      thumbnail: "/placeholder.svg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Sermons
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in mb-8">
            Listen to God's Word preached with passion and practical application
          </p>
          
          {/* Live Stream Button */}
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow animate-pulse"
          >
            <Tv className="mr-2 h-6 w-6" />
            Watch Live Stream
          </Button>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-12 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Join Us Live Online
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Can't make it to church? Join our live stream every Sunday at 9:00 AM and 11:00 AM
            </p>
          </div>
          
          <Card className="shadow-card mb-8">
            <CardContent className="p-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fyourchurch%2Fvideos%2F12345%2F&show_text=false&width=560&t=0"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Live Stream"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-warm">
                <Tv className="mr-2 h-5 w-5" />
                Watch Live Now
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Set Reminder
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Sermon Videos */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Past Sermon Videos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch previous sermons and be blessed by God's word
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facebook Video Embed 1 */}
            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fyourchurch%2Fvideos%2F67890%2F&show_text=false&width=560&t=0"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Walking in Faith, Not Fear"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Walking in Faith, Not Fear
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Pastor John Smith • Nov 3, 2024
                </p>
              </CardContent>
            </Card>

            {/* YouTube Video Embed 1 */}
            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="The Power of Community"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  The Power of Community
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Pastor Sarah Johnson • Oct 27, 2024
                </p>
              </CardContent>
            </Card>

            {/* Facebook Video Embed 2 */}
            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fyourchurch%2Fvideos%2F54321%2F&show_text=false&width=560&t=0"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Generous Hearts, Generous Lives"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Generous Hearts, Generous Lives
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Pastor John Smith • Oct 20, 2024
                </p>
              </CardContent>
            </Card>

            {/* YouTube Video Embed 2 */}
            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Finding Purpose in Every Season"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Finding Purpose in Every Season
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dr. Maria Rodriguez • Oct 13, 2024
                </p>
              </CardContent>
            </Card>

            {/* Facebook Video Embed 3 */}
            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fyourchurch%2Fvideos%2F98765%2F&show_text=false&width=560&t=0"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Living in God's Grace"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Living in God's Grace
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Pastor John Smith • Oct 6, 2024
                </p>
              </CardContent>
            </Card>

            {/* YouTube Video Embed 3 */}
            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Hope in Difficult Times"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Hope in Difficult Times
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Pastor Sarah Johnson • Sep 29, 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Recent Sermons
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Catch up on recent messages and continue growing in your faith
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentSermons.map((sermon, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-warm transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Play className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {sermon.series}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{sermon.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {sermon.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {sermon.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="font-medium text-foreground text-sm">{sermon.speaker}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {sermon.duration}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Play className="h-4 w-4 mr-1" />
                          Listen
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Sermon Series
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our sermon series for deeper study and spiritual growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sermonSeries.map((series, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-warm transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-muted-foreground mb-2">
                        {series.sermonCount}
                      </div>
                      <div className="text-sm text-muted-foreground">Sermons</div>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {series.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {series.description}
                  </p>
                  
                  <Button variant="outline" className="w-full">
                    View Series
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast & Resources */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Take God's Word With You
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our podcast and get sermon notes to continue growing throughout the week
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Grace Community Podcast
                </h3>
                <p className="text-muted-foreground mb-6">
                  Never miss a sermon. Subscribe to our podcast and listen anywhere.
                </p>
                <Button>Subscribe Now</Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Sermon Notes & Resources
                </h3>
                <p className="text-muted-foreground mb-6">
                  Download study guides and sermon notes for personal reflection.
                </p>
                <Button variant="outline">Get Resources</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;