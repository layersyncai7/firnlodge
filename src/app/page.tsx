'use client';

import { useState } from 'react';
import { Menu, X, Wifi, Tv, Wind, Car, Shield, Coffee, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-serif font-bold">FIRN LODGE</h1>
          </div>
          <a href="#contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              BOOK NOW
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-6">
              <ul className="space-y-4">
                <li><a href="#overview" onClick={() => setMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Overview</a></li>
                <li><a href="#rooms" onClick={() => setMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Rooms & Amenities</a></li>
                <li><a href="#dining" onClick={() => setMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Dining</a></li>
                <li><a href="#location" onClick={() => setMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Location</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
            alt="FIRN Lodge Pool"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6">
              Welcome to FIRN Lodge
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-8">
              Your home away from home in the heart of Harare
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">
              A quietly luxurious Bed & Breakfast in Belvedere, offering halal-certified dining,
              modern comforts, and warm Zimbabwean hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary flex items-center justify-center bg-card">
              <span className="font-serif text-3xl font-light">FL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Your Harare Sanctuary
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Firn Lodge is a quietly luxurious Bed & Breakfast tucked in Belvedere — a short drive from
              Harare's CBD. With seven fully en-suite rooms, halal-certified dining, modern in-room comforts
              and secure on-site parking, Firn blends business-friendly convenience with calm, private gardens
              and a refreshing pool. Ideal for business travelers, families visiting local attractions, and
              guests who prioritize a clean, secure, halal-sensitive stay.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Capacity</div>
              <div className="text-2xl font-light">14 Guests</div>
            </div>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Bedrooms</div>
              <div className="text-2xl font-light">7 En-Suite</div>
            </div>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Location</div>
              <div className="text-2xl font-light">Belvedere</div>
            </div>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Dining</div>
              <div className="text-2xl font-light">Halal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Highlights */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16">
            Experience FIRN Lodge
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 md:h-96 overflow-hidden rounded-sm group">
              <img
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop"
                alt="Pool Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-serif mb-2">Refreshing Pool</h3>
                <p className="text-sm opacity-90">Relax by our pristine swimming pool in peaceful gardens</p>
              </div>
            </div>

            <div className="relative h-80 md:h-96 overflow-hidden rounded-sm group">
              <img
                src="/api/placeholder/800/600"
                alt="Comfortable Rooms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-serif mb-2">Modern Comfort</h3>
                <p className="text-sm opacity-90">En-suite rooms with air conditioning and smart TVs</p>
              </div>
            </div>

            <div className="relative h-80 md:h-96 overflow-hidden rounded-sm group">
              <img
                src="/api/placeholder/800/600"
                alt="Halal Breakfast"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-serif mb-2">Halal Dining</h3>
                <p className="text-sm opacity-90">Enjoy delicious halal-certified breakfast and meals</p>
              </div>
            </div>

            <div className="relative h-80 md:h-96 overflow-hidden rounded-sm group">
              <img
                src="/api/placeholder/800/600"
                alt="En-suite Bathroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-serif mb-2">Private Bathrooms</h3>
                <p className="text-sm opacity-90">Every room features a fully equipped en-suite bathroom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Amenities */}
      <section id="rooms" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-6">
            Rooms & Amenities
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Each of our seven en-suite rooms is thoughtfully designed with your comfort in mind,
            featuring modern amenities for both business and leisure travelers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-card rounded-sm">
              <Wifi className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-serif mb-2">High-Speed Wi-Fi</h3>
              <p className="text-sm text-muted-foreground">Stay connected in all rooms and common areas</p>
            </div>

            <div className="text-center p-6 bg-card rounded-sm">
              <Tv className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-serif mb-2">Smart TVs</h3>
              <p className="text-sm text-muted-foreground">Entertainment at your fingertips</p>
            </div>

            <div className="text-center p-6 bg-card rounded-sm">
              <Wind className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-serif mb-2">Air Conditioning</h3>
              <p className="text-sm text-muted-foreground">Climate control for your comfort</p>
            </div>

            <div className="text-center p-6 bg-card rounded-sm">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-serif mb-2">24/7 Security</h3>
              <p className="text-sm text-muted-foreground">Safe and secure premises</p>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-sm">
            <h3 className="text-2xl font-serif mb-6">Additional Amenities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Swimming pool with loungers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure on-site parking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Private gardens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Laundry service (additional charge)</span>
                </li>
              </ul>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Taxi and transport assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Local recommendations and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Business and small event hosting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Strictly halal-certified kitchen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Halal Dining Section */}
      <section id="dining" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
                Halal-Certified Dining
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Start your day with a delicious breakfast featuring fresh fruits, pastries,
                cereals, and hot options — all prepared in our strictly halal-certified kitchen.
                We take pride in catering to our guests' dietary requirements with care and authenticity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our dining experience reflects warm Zimbabwean hospitality, ensuring every meal
                is both nourishing and memorable. Please note: we maintain a halal environment
                with no alcohol served in public areas.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden rounded-sm">
              <img
                src="/api/placeholder/600/800"
                alt="Breakfast Spread"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-2 mb-6">
              Perfectly Located in Belvedere
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-4">
              Just a short drive from Harare's CBD, FIRN Lodge offers convenient access to business
              districts while maintaining a peaceful residential setting. We're ideally positioned
              for exploring nearby attractions.
            </p>
            <div className="text-muted-foreground">
              <p className="mb-2"><strong>Nearby Attractions:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Lion & Cheetah Park</li>
                <li>Lake Chivero</li>
                <li>Harare City Centre</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted rounded-sm overflow-hidden" style={{ height: '450px' }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1!2d31.009718!3d-17.825935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMzLjQiUyAzMcKwMDAnMzUuMCJF!5e0!3m2!1sen!2s!4v1234567890"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Book Your Stay
          </h2>
          <p className="text-muted-foreground mb-12">
            Ready to experience warm Zimbabwean hospitality? Get in touch with us to make a reservation
            or inquire about our rooms and services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-2 uppercase text-sm tracking-wider">Phone / WhatsApp</h3>
              <a href="tel:+263786368322" className="text-muted-foreground hover:text-foreground transition-colors">
                +263 78 636 8322
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2 uppercase text-sm tracking-wider">Email</h3>
              <a href="mailto:firnlodge22@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                firnlodge22@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2 uppercase text-sm tracking-wider">Address</h3>
              <p className="text-muted-foreground">
                5 Charles Bullock Avenue<br />
                Belvedere, Harare, Zimbabwe
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/263786368322" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                WhatsApp Us
              </Button>
            </a>
            <a href="mailto:firnlodge22@gmail.com">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">FIRN LODGE</h3>
              <p className="text-sm opacity-80">Belvedere, Harare</p>
              <p className="text-sm opacity-80">Zimbabwe</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Explore</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#overview" className="hover:opacity-100 transition-opacity">Overview</a></li>
                <li><a href="#rooms" className="hover:opacity-100 transition-opacity">Rooms & Amenities</a></li>
                <li><a href="#dining" className="hover:opacity-100 transition-opacity">Dining</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Information</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#location" className="hover:opacity-100 transition-opacity">Location</a></li>
                <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
                <li><a href="https://www.facebook.com/FIRNlodge/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Get in Touch</h4>
              <p className="text-sm opacity-80 mb-2">Phone / WhatsApp:</p>
              <p className="text-sm opacity-80 mb-3">+263 78 636 8322</p>
              <p className="text-sm opacity-80">Email:</p>
              <p className="text-sm opacity-80">firnlodge22@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2025 FIRN Lodge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
