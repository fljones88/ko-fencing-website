import { Fence, Mail, MapPin, Phone, Clock, ChevronRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"
import { TestimonialCard } from "@/components/testimonial-card"
import { Gallery } from "@/components/gallery"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Fence className="h-6 w-6" />
            <span className="text-xl font-bold">KO Fencing L.L.C.</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button>Get a Quote</Button>
            </Link>
            <button className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Fencing installation"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Quality Fencing Solutions for Your Property
              </h1>
              <p className="text-lg md:text-xl">
                Professional fence installation, repair, and maintenance services for residential and commercial
                properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Free Quote
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Fencing Services</h2>
              <p className="text-muted-foreground max-w-3xl">
                We offer a wide range of fencing solutions to meet your specific needs and preferences. All our services
                come with professional installation and quality materials.
              </p>
            </div>
            <Tabs defaultValue="residential" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
              </TabsList>
              <TabsContent value="residential" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Wood Fencing",
                      description:
                        "Classic, natural look with various styles including privacy, picket, and split rail options.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Vinyl Fencing",
                      description: "Low-maintenance, durable option available in multiple colors and styles.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Chain Link",
                      description: "Affordable, secure option ideal for defining boundaries and containing pets.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Aluminum/Steel",
                      description: "Elegant, long-lasting metal fencing with minimal maintenance requirements.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Privacy Screens",
                      description: "Custom solutions to enhance privacy in specific areas of your property.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Fence Repair",
                      description: "Professional repair services to fix damaged sections and extend fence life.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                  ].map((service, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="commercial" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Security Fencing",
                      description: "Heavy-duty fencing solutions designed to protect commercial properties and assets.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Industrial Fencing",
                      description: "Robust fencing for industrial sites, warehouses, and manufacturing facilities.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Athletic Fields",
                      description: "Specialized fencing for sports fields, courts, and recreational areas.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Temporary Fencing",
                      description: "Portable fencing solutions for construction sites and temporary events.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Automatic Gates",
                      description:
                        "Secure entry systems with various access control options for commercial properties.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Custom Solutions",
                      description: "Tailored fencing designs to meet specific commercial property requirements.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                  ].map((service, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-12">
              <Link href="#contact">
                <Button size="lg" className="gap-2">
                  Get Started <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="KO Fencing team"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About KO Fencing L.L.C.</h2>
                <p className="text-lg text-muted-foreground">
                  With over 15 years of experience in the fencing industry, KO Fencing L.L.C. has established itself as
                  a trusted provider of high-quality fencing solutions throughout the region.
                </p>
                <div className="space-y-4">
                  {[
                    "Licensed and insured professionals",
                    "Premium materials and craftsmanship",
                    "Customized solutions for every property",
                    "Transparent pricing with no hidden fees",
                    "Timely project completion",
                    "Comprehensive warranties on all installations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Our mission is to provide exceptional fencing services that enhance the security, privacy, and
                  aesthetic appeal of your property. We take pride in our attention to detail and commitment to customer
                  satisfaction.
                </p>
                <div className="pt-4">
                  <Link href="#contact">
                    <Button>Contact Our Team</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Recent Projects</h2>
              <p className="text-muted-foreground max-w-3xl">
                Browse through our gallery of completed fencing projects to see the quality of our work and get
                inspiration for your own property.
              </p>
            </div>
            <Gallery />
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-3xl">
                Don't just take our word for it. Here's what our satisfied customers have to say about our fencing
                services.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Michael Johnson"
                location="Residential Client"
                quote="KO Fencing installed a beautiful cedar privacy fence for our backyard. The team was professional, efficient, and the quality of work exceeded our expectations. Highly recommend!"
                rating={5}
              />
              <TestimonialCard
                name="Sarah Williams"
                location="Commercial Property Manager"
                quote="We hired KO Fencing for a large commercial project, and they delivered exceptional results. Their attention to detail and ability to work within our timeline made the process smooth and stress-free."
                rating={5}
              />
              <TestimonialCard
                name="David Thompson"
                location="Residential Client"
                quote="After getting quotes from several companies, we chose KO Fencing for our vinyl fence installation. Their pricing was competitive, and the finished product looks fantastic. Great customer service too!"
                rating={4}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to start your fencing project? Contact us today for a free consultation and estimate. Our team
                  is ready to help you find the perfect fencing solution for your property.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@kofencing.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">123 Fence Avenue, Anytown, USA 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Request a Free Quote</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Fence className="h-5 w-5" />
            <span className="text-lg font-semibold">KO Fencing L.L.C.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KO Fencing L.L.C. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

