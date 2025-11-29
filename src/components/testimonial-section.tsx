"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Product at TechFlow",
    avatar: "/professional-woman-headshot.png",
    content:
      "NexusAI has completely transformed how our team operates. We've cut meeting time by 40% and our productivity has skyrocketed. The AI suggestions are incredibly accurate.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO at StartupLab",
    avatar: "/professional-man-headshot.png",
    content:
      "The ROI we've seen from NexusAI is phenomenal. Within the first month, we automated over 200 hours of repetitive work. It's like having an extra team member.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director at ScaleUp",
    avatar: "/professional-latina-woman-headshot.png",
    content:
      "I was skeptical about AI tools, but NexusAI won me over. The analytics insights alone have helped us identify $2M in cost savings. Absolutely game-changing.",
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Trusted by industry leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            See why thousands of teams choose NexusAI to power their productivity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-chart-4 text-chart-4" />
                ))}
              </div>

              <p className="text-card-foreground leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50"
        >
          {["TechCorp", "InnovateLab", "CloudScale", "DataSync", "AIVentures"].map((company) => (
            <div key={company} className="text-xl font-bold text-muted-foreground tracking-tight">
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
