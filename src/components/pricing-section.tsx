"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out NexusAI",
    features: [
      "Up to 100 AI tasks per month",
      "Basic analytics dashboard",
      "Email support",
      "1 team member",
      "Community access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing teams and businesses",
    features: [
      "Unlimited AI tasks",
      "Advanced analytics & insights",
      "Priority support",
      "Up to 10 team members",
      "Custom integrations",
      "API access",
      "Advanced security",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom AI model training",
      "SLA guarantee",
      "On-premise deployment",
      "SSO & SAML",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-accent/20 scale-105"
                  : "bg-card border-border/50 hover:border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-card-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      plan.highlighted ? "text-primary-foreground" : "text-card-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 ${plan.highlighted ? "text-accent" : "text-chart-2"}`} />
                    <span
                      className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  plan.highlighted ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
