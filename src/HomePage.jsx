import { Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Star, Users, Calendar, Shield, Heart, Sparkles } from 'lucide-react'
import { serviceCategories, services } from './services'


const HomePage = () => {

  const featuredServices = services.slice(0, 6)

  const templeHeroImage = "/temple-hero.jpg"

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Expert Priests',
      description: 'Experienced and knowledgeable priests well-versed in Vedic traditions'
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: 'Flexible Scheduling',
      description: 'Book services at your convenience with flexible timing options'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Authentic Rituals',
      description: 'Traditional ceremonies performed according to ancient scriptures'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Personal Touch',
      description: 'Customized services tailored to your specific needs and preferences'
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Excellent service! The priest was very knowledgeable and performed the Satyanarayan Pooja beautifully. Highly recommended!'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'Very professional and authentic. The Varalakshmi Pooja was conducted with great devotion and attention to detail.'
    },
    {
      name: 'Arun Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'Amazing experience with the Ganapathi Homam. The priest explained everything clearly and the ritual was very powerful.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="w-fit">Traditional Hindu Services</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Divine Blessings at Your{' '}
                  <span className="text-primary">Doorstep</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience authentic Vedic rituals and ceremonies performed by expert priests. 
                  Bring spiritual harmony and divine blessings to your life with our traditional 
                  Hindu religious services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">32</div>
                  <div className="text-sm text-muted-foreground">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">9</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={templeHeroImage}
                alt="Hindu Temple"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="w-fit mx-auto">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Sacred Service Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of traditional Hindu religious services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <Link to={`/services/${category.id}`}>
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary">
                      {category.serviceCount} Services
                    </Badge>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="w-fit mx-auto">Popular Choices</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most requested services by our devotees
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow group">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      ₹{service.price.toLocaleString()}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Duration: {service.duration}
                    </span>
                    <Button asChild size="sm">
                      <Link to={`/services/${service.category}/${service.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="w-fit mx-auto">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Experience the Divine Difference</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes our services special and trusted by hundreds of families
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="w-fit mx-auto">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Devotees Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from families who have experienced our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <Sparkles className="h-12 w-12 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Invite Divine Blessings?
            </h2>
            <p className="text-xl opacity-90">
              Book your preferred service today and experience the power of authentic Vedic rituals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/services">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

