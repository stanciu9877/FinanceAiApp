import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  TrendingUp,
  LineChart,
  Bell,
  Star,
  ArrowRight,
} from "lucide-react";
import TestimonialCard from "@/components/testimonial-card";
import PricingCard from "@/components/pricing-card";
import FeatureCard from "@/components/feature-card";
import FAQAccordion from "@/components/faq-accordion";
import StockDemo from "@/components/stock-demo";

export default function LandingPagePrototype() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 py-20 md:py-32">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <div className="inline-block rounded-lg bg-slate-800/60 px-3 py-1 text-sm text-emerald-400 mb-4">
              AI-Powered Stock Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Your Personal AI Stock Market Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-[600px]">
              Get real-time insights, personalized recommendations, and track
              your favorite stocks with our AI assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-slate-400">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <StockDemo />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            <img
              src="/placeholder.svg?height=30&width=120"
              alt="TechCrunch"
              className="h-8"
            />
            <img
              src="/placeholder.svg?height=30&width=120"
              alt="Forbes"
              className="h-8"
            />
            <img
              src="/placeholder.svg?height=30&width=120"
              alt="Bloomberg"
              className="h-8"
            />
            <img
              src="/placeholder.svg?height=30&width=120"
              alt="CNBC"
              className="h-8"
            />
            <img
              src="/placeholder.svg?height=30&width=120"
              alt="Yahoo Finance"
              className="h-8"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Smart Investing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI assistant provides everything you need to make informed
              investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<TrendingUp />}
              title="Real-Time Market Analysis"
              description="Get instant insights on market trends and stock movements as they happen."
            />
            <FeatureCard
              icon={<LineChart />}
              title="Personalized Stock Tracking"
              description="Follow your favorite stocks with custom alerts and detailed performance metrics."
            />
            <FeatureCard
              icon={<Bell />}
              title="Smart Notifications"
              description="Receive timely alerts about significant market changes affecting your portfolio."
            />
            <FeatureCard
              icon={<Star />}
              title="Favorite Stocks Dashboard"
              description="Easily monitor all your preferred stocks in one customizable dashboard."
            />
            <FeatureCard
              icon={<CheckCircle />}
              title="Investment Recommendations"
              description="Get AI-powered suggestions based on your investment goals and risk tolerance."
            />
            <FeatureCard
              icon={<LineChart />}
              title="Historical Performance"
              description="Analyze past performance with interactive charts and predictive trends."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Getting started with our AI stock assistant is simple and
              straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
              <p className="text-slate-600">
                Sign up in seconds and tell us about your investment
                preferences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Select Your Stocks</h3>
              <p className="text-slate-600">
                Choose the stocks you want to follow or let our AI recommend
                some.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Get Personalized Insights
              </h3>
              <p className="text-slate-600">
                Receive tailored analysis and recommendations based on your
                portfolio.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join thousands of investors who have transformed their trading
              strategy with our AI assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="This AI assistant has completely changed how I approach the stock market. The personalized recommendations have increased my returns by 22%."
              author="Sarah J."
              role="Retail Investor"
              avatar="/placeholder.svg?height=60&width=60"
            />
            <TestimonialCard
              quote="I love how it tracks my favorite stocks and alerts me at just the right moments. It's like having a financial advisor in my pocket."
              author="Michael T."
              role="Day Trader"
              avatar="/placeholder.svg?height=60&width=60"
            />
            <TestimonialCard
              quote="As someone new to investing, this tool has been invaluable. It explains market trends in simple terms and helps me make confident decisions."
              author="Emma R."
              role="Beginner Investor"
              avatar="/placeholder.svg?height=60&width=60"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your investment strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price="$9"
              period="per month"
              description="Perfect for beginners"
              features={[
                "Track up to 5 stocks",
                "Daily market summaries",
                "Basic AI recommendations",
                "Email alerts",
              ]}
              buttonText="Start Free Trial"
              popular={false}
            />
            <PricingCard
              title="Pro"
              price="$29"
              period="per month"
              description="For serious investors"
              features={[
                "Track up to 20 stocks",
                "Real-time market analysis",
                "Advanced AI recommendations",
                "Custom alerts",
                "Portfolio performance tracking",
              ]}
              buttonText="Start Free Trial"
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$99"
              period="per month"
              description="For professional traders"
              features={[
                "Unlimited stock tracking",
                "Advanced technical analysis",
                "Priority AI recommendations",
                "Custom reporting",
                "API access",
                "Dedicated support",
              ]}
              buttonText="Contact Sales"
              popular={false}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our AI stock assistant.
            </p>
          </div>

          <FAQAccordion />

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <Button
              variant="outline"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-50"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join thousands of investors who are making smarter decisions with
            our AI assistant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">StockAI</h3>
              <p className="mb-4">
                Your AI-powered stock market assistant for smarter investing.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Market News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} StockAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
