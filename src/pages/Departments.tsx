import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Music, Video, Handshake } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';
import churchInterior from '@/assets/church-interior.jpg';
import outreach from '@/assets/outreach.jpg';

const Departments = () => {
  const departments = [
    {
      id: 'ushering',
      name: 'Ushering Department',
      icon: <Handshake className="h-12 w-12 text-primary" />,
      description: 'Our ushering team serves as the welcoming face of our church, greeting members and visitors with warmth and hospitality. They assist with seating arrangements, collection of offerings, and maintaining order during services, ensuring everyone feels welcomed and comfortable in God\'s house.',
      images: [
        { src: churchInterior, alt: 'Church interior with ushers', caption: 'Ushers serving during Sunday service' },
        { src: outreach, alt: 'Ushering team', caption: 'Our dedicated ushering team' }
      ]
    },
    {
      id: 'music',
      name: 'Music Department (Alith)',
      icon: <Music className="h-12 w-12 text-primary" />,
      description: 'The Alith music ministry leads our congregation in worship through song, creating an atmosphere of praise and reverence. Our talented musicians and vocalists work together to glorify God through music, touching hearts and lifting spirits during worship services and special events.',
      images: [
        { src: churchInterior, alt: 'Music team worship', caption: 'Alith worship team in action' },
        { src: outreach, alt: 'Music practice', caption: 'Music practice and preparation' }
      ]
    },
    {
      id: 'sound-media',
      name: 'Sound & Media Department',
      icon: <Video className="h-12 w-12 text-primary" />,
      description: 'Our sound and media team ensures that every word of God\'s message is heard clearly and every moment is captured beautifully. They handle audio systems, video production, live streaming, and multimedia presentations, making our services accessible to both in-person and online congregants.',
      images: [
        { src: churchInterior, alt: 'Sound equipment', caption: 'Professional sound and media setup' },
        { src: outreach, alt: 'Media team', caption: 'Media team recording church service' }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-home text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Our Departments
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 animate-fade-in">
            Serving together in God's house
          </p>
        </div>
      </section>

      {/* Departments Sections */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {departments.map((department, index) => (
            <Card key={department.id} className="overflow-hidden shadow-elegant animate-fade-in">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  {department.icon}
                </div>
                <CardTitle className="text-3xl font-serif text-primary mb-4">
                  {department.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Text Content */}
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {department.description}
                    </p>
                    <Button 
                      variant="default" 
                      size="lg"
                      className="bg-gradient-warm hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                    >
                      Learn More About {department.name.split(' ')[0]}
                    </Button>
                  </div>
                  
                  {/* Image Carousel */}
                  <div className="w-full">
                    <ImageCarousel 
                      images={department.images}
                      className="rounded-lg overflow-hidden"
                      height="md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Join a Department Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use your gifts and talents to serve God and His people. Contact us to learn how you can get involved in any of our departments.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-warm hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Get Involved
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Departments;