import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const serviceCategories = [
    { name: 'Homam Services', href: '/services/homam' },
    { name: 'Pooja Services', href: '/services/pooja' },
    { name: 'Pariharam Services', href: '/services/pariharam' },
    { name: 'Japam Services', href: '/services/japam' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl text-primary-foreground font-bold">🕉️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SubhaLabh</h3>
                <p className="text-sm text-muted">Pooja Services</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Traditional Hindu religious services performed by experienced priests. 
              Bringing divine blessings and spiritual harmony to your life through 
              authentic Vedic rituals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {serviceCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <p className="text-sm">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <p className="text-sm">info@subhalabhpooja.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-sm text-muted">Service Area</p>
                  <p className="text-sm">Serving across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted">
              © 2024 SubhaLabh Pooja Services. All rights reserved.
            </p>
            <p className="text-sm text-muted mt-2 md:mt-0">
              Bringing divine blessings to your doorstep
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

