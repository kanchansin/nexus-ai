"use client"

import { Zap, BarChart3, Users, Cpu, Lock, Globe } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Automate complex workflows with intelligent AI that learns from your patterns and optimizes processes in real-time.",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Get actionable insights from your data with AI-driven analytics that surface trends and opportunities you'd otherwise miss.",
    color: "chart-2",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Work together effortlessly with AI-assisted features that enhance team communication and project coordination.",
    color: "chart-4",
  },
  {
    icon: Cpu,
    title: "Advanced AI Models",
    description:
      "Access state-of-the-art language models including GPT-5, Claude 4, and custom fine-tuned models for your specific needs.",
    color: "chart-5",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and advanced access controls keep your data safe and private.",
    color: "chart-3",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description:
      "Lightning-fast performance worldwide with our distributed edge network and intelligent request routing.",
    color: "accent",
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

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Features</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Everything you need to work smarter
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Powerful features designed to transform how you work, powered by the latest advances in artificial
            intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                style={{
                  backgroundColor: `var(--${feature.color})`,
                  opacity: 0.15,
                }}
              >
                <feature.icon className="h-6 w-6" style={{ color: `var(--${feature.color})` }} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
