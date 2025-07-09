import { useState } from "react";
import {
  TrendingUp,
  Users,
  Zap,
  Shield,
  BarChart3,
  Target,
  CheckCircle,
  Plus,
  Minus,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Navbar from "./components/navbar";
import Plane from "./assets/plane.webp"; // Assuming you have a plane image in your assets

// Import client logos
import Client1 from "./assets/clients/1.png";
import Client2 from "./assets/clients/2.png";
import Client3 from "./assets/clients/3.png";
import Client4 from "./assets/clients/4.png";
import Client5 from "./assets/clients/5.png";
import Client6 from "./assets/clients/6.png";
import Client7 from "./assets/clients/7.png";
import Client8 from "./assets/clients/8.png";

export default function LandingPage2() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: Target,
      title: "Smart Lead Generation",
      description:
        "AI-powered lead identification and qualification that finds your ideal customers automatically.",
      features: [
        "Automated prospect research",
        "Lead scoring and prioritization",
        "Real-time contact enrichment",
      ],
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description:
        "Advanced analytics and A/B testing tools to maximize your conversion rates at every stage.",
      features: [
        "Funnel analysis and optimization",
        "Automated A/B testing",
        "Personalized customer journeys",
      ],
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description:
        "Comprehensive reporting and insights to track performance and identify growth opportunities.",
      features: [
        "Real-time sales dashboards",
        "Predictive revenue forecasting",
        "Team performance metrics",
      ],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Powerful collaboration tools that keep your entire sales team aligned and productive.",
      features: [
        "Shared lead management",
        "Activity tracking and notes",
        "Automated task assignments",
      ],
    },
    {
      icon: Zap,
      title: "Automation Engine",
      description:
        "Intelligent automation workflows that handle repetitive tasks and nurture leads 24/7.",
      features: [
        "Email sequence automation",
        "Follow-up reminders",
        "Custom workflow triggers",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security and compliance features to protect your sensitive sales data.",
      features: [
        "End-to-end encryption",
        "GDPR & SOC-2 compliance",
        "Role-based access control",
      ],
    },
  ];
  const productPrices = [
    {
      name: "STARTER",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      yearlyPrice: 23,
      features: [
        "Up to 1,000 leads",
        "Basic analytics",
        "Email support",
        "2 team members",
        "Standard integrations",
      ],
      popular: false,
    },
    {
      name: "PROFESSIONAL",
      description: "Best for growing sales teams",
      monthlyPrice: 79,
      yearlyPrice: 63,
      features: [
        "Up to 10,000 leads",
        "Advanced analytics",
        "Priority support",
        "10 team members",
        "All integrations",
        "A/B testing",
        "Custom workflows",
      ],
      popular: true,
    },
    {
      name: "ENTERPRISE",
      description: "For large organizations",
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        "Unlimited leads",
        "Custom analytics",
        "24/7 phone support",
        "Unlimited team members",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];
  const faqs = [
    {
      question: "How quickly can I get started with Slerate?",
      answer:
        "You can get started in minutes! Simply sign up for your free trial, connect your existing tools, and our AI will begin analyzing your data immediately. Most customers see initial insights within 24 hours.",
    },
    {
      question: "Do I need technical expertise to use Slerate?",
      answer:
        "Not at all! Slerate is designed for sales professionals, not developers. Our intuitive interface and automated setup process make it easy for anyone to start boosting their sales performance.",
    },
    {
      question: "What integrations does Slerate support?",
      answer:
        "Slerate integrates with all major CRM platforms (Salesforce, HubSpot, Pipedrive), email tools (Gmail, Outlook), marketing platforms, and communication tools like Slack and Teams. We're constantly adding new integrations.",
    },
    {
      question: "Is my data secure with Slerate?",
      answer:
        "Absolutely. We use bank-level encryption, are SOC-2 compliant, and follow GDPR guidelines. Your data is stored securely and never shared with third parties. We take data security very seriously.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no penalties. We believe in earning your business every month, not locking you into long-term contracts.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

	  {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-80 h-screen relative bg-fixed bg-center bg-cover grid place-items-center">
          <img
            src={Plane}
            alt=""
            className="absolute top-0 w-full h-full left-0 object-cover object-center"
          />
          {/* Gray overlay */}
          <div className="absolute inset-0 bg-gray-900 bg-opacity-30 pointer-events-none" />
          <div className="px-4 md:px-6 relative z-10">
            <div>
              <div className="flex flex-col justify-center space-y-4">
                <motion.div
                  className="space-y-2 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.h1
                    className="text-6xl font-bold sm:text-5xl xl:text-[6rem] uppercase text-slate-100 tracking-normal font-teko italic"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  >
                    Close More, Sell Faster
                  </motion.h1>
                  <motion.p
                    className="text-slate-50 md:text-2xl lg:max-w-[66ch] mx-auto "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    Transform your sales process with AI-powered insights,
                    automated lead generation, and conversion optimization tools
                    that deliver real results.
                  </motion.p>
                </motion.div>
                <motion.div
                  className="flex gap-2 w-full justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <button className="h-11 w-fit px-8 bg-white text-black rounded-md hover:bg-gray-50 hover:text-black transition-colors font-medium">
                    Start Free Trial
                  </button>
                  <button className="h-11 w-fit px-8 bg-transparent border border-gray-300 text-white rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium">
                    Watch Demo
                  </button>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center space-x-4 text-sm text-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    14-day free trial
                  </div>
                  <div>No credit card required</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-20 md:py-32 px-2">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                className="text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-8 leading-tight font-teko italic">
                  ACCELERATE
                  <br />
                  SALES EXCELLENCE
                </h2>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-blue-100">
                  Slerate Sales Boost transforms your sales operations with
                  AI-powered lead generation, intelligent automation, and
                  real-time analytics. Our platform eliminates manual
                  bottlenecks, accelerates deal closure, and delivers measurable
                  ROI increases through automated email sequences, predictive
                  forecasting, and optimized conversion funnels.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl uppercase font-teko">
                Everything you need to boost sales
              </h2>
              <p className="text-lg text-gray-600 px-6">
                Our comprehensive suite of tools helps you identify
                opportunities, optimize conversions, and close more deals faster
                than ever before.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 custom-container ">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl uppercase font-teko">
                Pricing Plans
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Choose the plan that's right for your team. All plans include a
                14-day free trial.
              </p>

              {/* Pricing Toggle */}
              <motion.div
                className="inline-flex items-center bg-white rounded-lg p-1 border"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <button
                  onClick={() => setSelectedPlan("monthly")}
                  className={`px-6 py-3 rounded-md text-sm font-bold transition-colors uppercase tracking-wide ${
                    selectedPlan === "monthly"
                      ? "bg-gradient-to-br from-blue-900 to-blue-500 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedPlan("yearly")}
                  className={`px-6 py-3 rounded-md text-sm font-bold transition-colors uppercase tracking-wide ${
                    selectedPlan === "yearly"
                      ? "bg-gradient-to-br from-blue-900 to-blue-500 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Yearly
                  <span className="ml-2 text-xs bg-blue-600 text-slate-50 px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </motion.div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {productPrices.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 bg-white rounded-lg ${
                    plan.popular
                      ? "ring-4 ring-blue-600 shadow-2xl transform scale-105"
                      : "shadow-lg"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-slate-50 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-gray-900">
                        $
                        {selectedPlan === "monthly"
                          ? plan.monthlyPrice
                          : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 text-lg">
                        /{selectedPlan === "monthly" ? "month" : "month"}
                      </span>
                    </div>
                    {selectedPlan === "yearly" && (
                      <p className="text-sm text-green-600 font-bold">
                        Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 px-6 rounded-lg font-bold transition-colors uppercase tracking-wide ${
                      plan.popular
                        ? "bg-gradient-to-br from-blue-900 to-blue-500 text-white hover:bg-gradient-to-tr transition-all"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Free Trial
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl uppercase font-teko">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about Slerate
              </p>
            </motion.div>

            <div className="mx-auto max-w-4xl">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.button
                    className="w-full py-8 text-left flex items-center justify-between hover:text-blue-900 transition-colors"
                    onClick={() => toggleFaq(index)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openFaq === index ? (
                        <Minus className="h-6 w-6 text-gray-500 flex-shrink-0" />
                      ) : (
                        <Plus className="h-6 w-6 text-gray-500 flex-shrink-0" />
                      )}
                    </motion.div>
                  </motion.button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="pb-8">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                className="space-y-2 mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl uppercase font-teko">
                  Trusted by sales teams worldwide
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of companies that have already boosted their
                  sales with Slerate.
                </p>
              </motion.div>

              {/* Company Logos Marquee */}
              <motion.div
                className="w-full mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative overflow-hidden bg-gray-50 py-8 rounded-lg">
                  <motion.div
                    className="flex items-center whitespace-nowrap"
                    animate={{
                      x: ["-50%", "0%"],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                      },
                    }}
                  >
                    {/* First set of logos */}
                    <div className="flex items-center space-x-16 px-8 shrink-0">
                      <img src={Client1} alt="Client 1" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client2} alt="Client 2" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client3} alt="Client 3" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client4} alt="Client 4" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client5} alt="Client 5" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client6} alt="Client 6" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client7} alt="Client 7" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client8} alt="Client 8" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                    </div>
                    {/* Exact duplicate for seamless loop */}
                    <div className="flex items-center space-x-16 px-8 shrink-0">
                      <img src={Client1} alt="Client 1" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client2} alt="Client 2" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client3} alt="Client 3" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client4} alt="Client 4" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client5} alt="Client 5" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client6} alt="Client 6" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client7} alt="Client 7" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                      <img src={Client8} alt="Client 8" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl uppercase font-teko">
                  Ready to boost your sales?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your free trial today and see how Slerate Sales Boost
                  can transform your sales process in just 14 days.
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-sm space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <form className="flex gap-2">
                  <input
                    className="max-w-lg flex-1 bg-white text-gray-900 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-br from-blue-800 to-blue-500 border border-slate-50/25 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors font-medium"
                  >
                    Start Free Trial
                  </button>
                </form>
                <p className="text-xs text-blue-200">
                  No credit card required. Cancel anytime.
                </p>
              </motion.div>
              {/* <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <motion.button 
                  className="px-8 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors font-medium inline-flex items-center"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                </motion.button>
                <motion.button 
                  className="px-8 py-3 border-2 border-blue-200 text-white hover:bg-blue-500 bg-transparent rounded-md transition-colors font-medium"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </motion.div> */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">
          © 2024 Slerate Sales Boost. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Support
          </a>
        </nav>
      </footer>
    </div>
  );
}
