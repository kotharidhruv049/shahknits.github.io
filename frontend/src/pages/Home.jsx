import React, { useState } from 'react';
import { Instagram, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { productCategories, getProductsByCategory, getAllProducts } from '../data/mockProducts';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const displayProducts = selectedCategory === 'all' 
    ? getAllProducts() 
    : getProductsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-lavender-50 to-cream-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">shah.knits</h1>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors">
              Products
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">
              Contact
            </a>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
              onClick={() => window.open('https://instagram.com/shah.knits', '_blank')}
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-pink-600 bg-pink-100 px-4 py-2 rounded-full">
                  Handmade with Love
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Handcrafted Crochet
                <span className="block text-pink-500">Accessories</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each piece is lovingly handcrafted with premium yarn, bringing unique charm 
                and artisanal quality to your everyday style. Discover our collection of crochet 
                clips, pouches, and accessories.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                  onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                >
                  Shop Collection
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50"
                  onClick={() => window.open('https://instagram.com/shah.knits', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649680603092-b0edd0e5e2f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHx5YXJuJTIwYmFsbHMlMjBwYXN0ZWx8ZW58MHx8fHwxNzc2MzY2MDA1fDA&ixlib=rb-4.1.0&q=85"
                  alt="Pastel yarn balls"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender-200 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handcrafted crochet accessories, each piece uniquely designed 
              to add a touch of handmade charm to your look
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-12 bg-pink-100/50">
              <TabsTrigger value="all" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                All
              </TabsTrigger>
              {productCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Products Grid */}
            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayProducts.map(product => (
                  <Card 
                    key={product.id} 
                    className="group overflow-hidden border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden bg-gray-50 aspect-square">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.description}</p>
                      <div className="pt-2">
                        <span className="text-2xl font-bold text-pink-600">₹{product.price}/-</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instagram CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <Instagram className="w-16 h-16 mx-auto" />
            <h3 className="text-4xl font-bold">Follow Us on Instagram</h3>
            <p className="text-xl text-pink-50">
              Stay updated with our latest creations, behind-the-scenes content, 
              and exclusive designs. Join our growing community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-pink-600 hover:bg-pink-50 font-semibold"
                onClick={() => window.open('https://instagram.com/shah.knits', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                @shah.knits
              </Button>
            </div>
            {/* Image Gallery Preview */}
            <div className="pt-12">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-2">
                      <img 
                        src="https://images.unsplash.com/photo-1728393287642-13bee7126ae8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBjcm9jaGV0fGVufDB8fHx8MTc3NjM2NTk5OXww&ixlib=rb-4.1.0&q=85"
                        alt="Crochet work"
                        className="rounded-lg shadow-lg w-full aspect-square object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-2">
                      <img 
                        src="https://images.unsplash.com/photo-1649680579917-4cc253d7761b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHx5YXJuJTIwYmFsbHMlMjBwYXN0ZWx8ZW58MHx8fHwxNzc2MzY2MDA1fDA&ixlib=rb-4.1.0&q=85"
                        alt="Pastel yarns"
                        className="rounded-lg shadow-lg w-full aspect-square object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-2">
                      <img 
                        src="https://images.unsplash.com/photo-1649680603092-b0edd0e5e2f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHx5YXJuJTIwYmFsbHMlMjBwYXN0ZWx8ZW58MHx8fHwxNzc2MzY2MDA1fDA&ixlib=rb-4.1.0&q=85"
                        alt="Colorful yarns"
                        className="rounded-lg shadow-lg w-full aspect-square object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="text-white border-white hover:bg-white/20" />
                <CarouselNext className="text-white border-white hover:bg-white/20" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold text-gray-900">Get in Touch</h3>
            <p className="text-lg text-gray-600">
              Have questions or want to place a custom order? We'd love to hear from you!
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <Card className="border-pink-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <Instagram className="w-8 h-8 text-pink-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Instagram</h4>
                  <p className="text-gray-600">DM us for orders and inquiries</p>
                  <Button 
                    className="bg-pink-500 hover:bg-pink-600 text-white w-full"
                    onClick={() => window.open('https://instagram.com/shah.knits', '_blank')}
                  >
                    Message Us
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-pink-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="w-8 h-8 text-pink-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">Call us for quick inquiries</p>
                  <Button 
                    className="bg-pink-500 hover:bg-pink-600 text-white w-full"
                    onClick={() => window.location.href = 'tel:9160188322'}
                  >
                    9160188322
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">shah.knits</h4>
              <p className="text-gray-400">
                Handcrafted crochet accessories made with love and care
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#products" className="hover:text-pink-400 transition-colors">Products</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-gray-700 hover:bg-pink-500 hover:border-pink-500"
                  onClick={() => window.open('https://instagram.com/shah.knits', '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 shah.knits. All rights reserved. Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
