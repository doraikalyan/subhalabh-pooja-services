import { useParams, Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './components/ui/breadcrumb'
import { Clock, MapPin, Star, ArrowLeft } from 'lucide-react'
import { serviceCategories, getServicesByCategory, getCategoryById } from './services'

const ServiceCategoryPage = () => {
  const { category } = useParams()
  const categoryData = getCategoryById(category)
  const services = getServicesByCategory(category)

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{categoryData.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/services">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Services
          </Link>
        </Button>

        {/* Category Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="text-6xl">{categoryData.icon}</div>
          <Badge className="w-fit mx-auto">{categoryData.title}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">{categoryData.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {categoryData.description}
          </p>
          <div className="flex justify-center">
            <Badge variant="secondary">
              {services.length} Services Available
            </Badge>
          </div>
        </div>

        {/* Services Grid */}
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {service.deity}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{service.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button asChild className="flex-1">
                      <Link to={`/services/${service.category}/${service.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to={`/booking/${service.id}`}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No services available</h3>
            <p className="text-muted-foreground mb-4">
              Services in this category are coming soon
            </p>
            <Button asChild>
              <Link to="/services">Browse All Services</Link>
            </Button>
          </div>
        )}

        {/* Other Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Explore Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCategories
              .filter(cat => cat.id !== category)
              .slice(0, 4)
              .map((cat) => (
                <Link
                  key={cat.id}
                  to={`/services/${cat.id}`}
                  className="group"
                >
                  <Card className="hover:shadow-md transition-shadow text-center p-4">
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cat.serviceCount} services
                    </p>
                  </Card>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg opacity-90 mb-6">
            Our experts can guide you to the perfect service for your needs
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCategoryPage

