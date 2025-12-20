import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  ChevronRight,
  Shield,
  TrendingUp,
  Zap,
  Users,
  Lock,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    iconComponent: Zap,
    questions: [
      {
        q: "How do I create an account with Diverse Capital?",
        a: "Creating an account is simple and takes just 5 minutes. Click 'Get Started' on our homepage, provide your basic information, and verify your email. Once verified, you can browse all investment opportunities and set up your investor profile.",
      },
      {
        q: "What documents do I need to provide?",
        a: "We require valid government-issued ID, proof of address (utility bill or bank statement), and for certain investment amounts, we may request source of funds documentation for compliance purposes. All documents are encrypted and securely stored.",
      },
      {
        q: "Is there a minimum investment amount?",
        a: "Our minimum investment varies by opportunity but typically starts at $1,000. Some premium opportunities have higher minimums. You can filter investment opportunities by minimum investment amount on our platform.",
      },
      {
        q: "How long does account verification take?",
        a: "Standard verification typically completes within 24-48 hours. We process applications Monday through Friday. Expedited verification may be available upon request with additional documentation.",
      },
    ],
  },
  {
    id: "investments",
    title: "Investment Questions",
    iconComponent: TrendingUp,
    questions: [
      {
        q: "How do I choose which investments to make?",
        a: "Our platform provides detailed information on each opportunity including risk profile, expected returns, investment terms, and market analysis. We recommend starting with lower-risk opportunities and diversifying your portfolio across different sectors and geographies.",
      },
      {
        q: "What are the expected returns?",
        a: "Returns vary significantly by investment type. Crypto mining typically offers 15-25% annual returns, real estate 8-12%, and gold investments 6-9%. Past performance doesn't guarantee future results, and all investments carry inherent risks.",
      },
      {
        q: "When will I receive my returns?",
        a: "Distribution frequency depends on the specific investment. Most opportunities provide quarterly distributions, though some may offer monthly or annual payouts. You can view the exact distribution schedule before investing.",
      },
      {
        q: "Can I withdraw my investment early?",
        a: "Early withdrawal terms vary by investment. Most opportunities allow early exit with a small penalty (typically 2-5%), or you can use our secondary marketplace to sell your stakes to other investors at current market rates.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Compliance",
    iconComponent: Shield,
    questions: [
      {
        q: "How is my money protected?",
        a: "Your funds are held in segregated accounts with tier-1 banks. Each investment is held in its own Special Purpose Vehicle (SPV) ensuring complete separation of assets. We maintain full insurance coverage for digital assets.",
      },
      {
        q: "Is Diverse Capital regulated?",
        a: "Yes, we operate under full compliance with FCA (UK Financial Conduct Authority) and SEC regulations. All our advisors are certified and our platform undergoes regular independent audits.",
      },
      {
        q: "What security measures protect my account?",
        a: "We use industry-standard 256-bit SSL encryption, two-factor authentication (2FA), and biometric login options. Your personal data is encrypted and complies with GDPR standards.",
      },
      {
        q: "What happens to my investments if Diverse Capital closes?",
        a: "Your investments are legally separate from Diverse Capital. If our company were to cease operations, your assets remain in the SPVs and would be transferred to a qualified custodian or returned to you.",
      },
    ],
  },
  {
    id: "account",
    title: "Account Management",
    iconComponent: Users,
    questions: [
      {
        q: "How do I update my profile information?",
        a: "You can update your profile anytime in the Account Settings section. Changes to sensitive information (name, ID) may require verification. We'll notify you via email of any updates.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, credit cards, debit cards, and cryptocurrency (Bitcoin, Ethereum). All transactions are processed securely and typically appear in your account within 1-2 business days.",
      },
      {
        q: "Can I set up automatic recurring investments?",
        a: "Yes, you can set up automatic monthly, quarterly, or annual investments. This is a great way to build wealth consistently. You can pause or modify recurring investments anytime.",
      },
      {
        q: "How do I download tax documents?",
        a: "Tax statements and 1099 forms are available in your Dashboard under 'Documents' after the tax year ends. These are provided automatically and can be downloaded as PDF.",
      },
    ],
  },
  {
    id: "support",
    title: "Support & Assistance",
    iconComponent: Clock,
    questions: [
      {
        q: "What are your customer support hours?",
        a: "We offer 24/7 support via email and live chat. Phone support is available Monday-Friday 9 AM to 6 PM GMT. For urgent matters, our emergency line is available 24/7.",
      },
      {
        q: "How quickly will I hear back from support?",
        a: "We aim to respond to all inquiries within 2 hours during business hours and within 6 hours outside business hours. Urgent issues flagged in your message get priority handling.",
      },
      {
        q: "Do you offer investment advisory services?",
        a: "Yes, all registered investors can book a free consultation with one of our certified financial advisors. We can help with portfolio planning, risk assessment, and investment strategy tailored to your goals.",
      },
      {
        q: "Is there a referral program?",
        a: "Yes! Refer a friend and earn 1% of their first investment plus exclusive rewards. There's no limit to how many people you can refer or how much you can earn.",
      },
    ],
  },
];

const advisors = [
  {
    name: "Sarah Mitchell",
    role: "Lead Investment Advisor",
    bio: "15+ years in wealth management and institutional investments",
    image: "https://images.pexels.com/photos/7736038/pexels-photo-7736038.jpeg",
  },
  {
    name: "Michael Chen",
    role: "Customer Support Specialist",
    bio: "Expert in client relations and portfolio optimization",
    image: "https://images.pexels.com/photos/7681362/pexels-photo-7681362.jpeg",
  },
  {
    name: "Emma Johnson",
    role: "Compliance Officer",
    bio: "Ensuring regulatory excellence and investor protection",
    image: "https://images.pexels.com/photos/7681362/pexels-photo-7681362.jpeg",
  },
];

export default function FaqPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-bold uppercase tracking-widest">
                Help & Support
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Find answers to common questions about investing with Diverse
              Capital. Can't find what you're looking for? Our team is here to
              help.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-8"
              >
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 px-8"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main FAQ Content */}
            <div className="lg:col-span-2 space-y-8">
              {faqCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
                      <category.iconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">
                      {category.title}
                    </h2>
                  </div>

                  <Card className="border-none shadow-sm rounded-[32px] overflow-hidden">
                    <CardContent className="p-8">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-2"
                      >
                        {category.questions.map((item, idx) => (
                          <AccordionItem
                            key={idx}
                            value={`${category.id}-${idx}`}
                          >
                            <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary transition-colors py-4">
                              {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                              {item.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Links */}
              <Card className="border-none shadow-sm rounded-[32px] overflow-hidden bg-slate-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    {faqCategories.map((cat) => (
                      <a
                        key={cat.id}
                        href={`#${cat.id}`}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-white transition-colors group cursor-pointer"
                      >
                        <span className="text-primary group-hover:text-secondary transition-colors font-medium">
                          {cat.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="border-none shadow-sm rounded-[32px] overflow-hidden bg-primary text-white">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Still need help?
                    </h3>
                    <p className="text-white/80 text-sm">
                      Our support team is ready to assist you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="mailto:support@diverse-capital.com"
                      className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-secondary" />
                      <div className="text-sm">
                        <p className="font-bold">Email Us</p>
                        <p className="text-white/70 text-xs">
                          support@diverse-capital.com
                        </p>
                      </div>
                    </a>
                    <a
                      href="tel:+442012345678"
                      className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors group"
                    >
                      <Phone className="w-5 h-5 text-secondary" />
                      <div className="text-sm">
                        <p className="font-bold">Call Us</p>
                        <p className="text-white/70 text-xs">
                          +44 (20) 1234 5678
                        </p>
                      </div>
                    </a>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-bold">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Meet Our <span className="text-secondary">Expert Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced advisors are dedicated to helping you make
              informed investment decisions. With decades of combined expertise,
              we're here to support your financial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <Card
                key={advisor.name}
                className="border-none shadow-sm rounded-[32px] overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white"
              >
                <div className="relative h-80 overflow-hidden bg-slate-100">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">
                    {advisor.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {advisor.bio}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl font-bold border-slate-200 hover:border-secondary hover:text-secondary"
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-[60px] p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
              <HelpCircle className="w-full h-full text-secondary" />
            </div>

            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to start investing?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join thousands of investors who are building wealth with Diverse
                Capital. Our platform makes it easy to diversify your portfolio
                and achieve your financial goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white px-10"
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10 px-10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
