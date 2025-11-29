"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, Shield, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 mb-8"
          >
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Now powered by GPT-5 and Claude 4</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance"
          >
            The AI platform that{" "}
            <span className="bg-gradient-to-r from-accent via-chart-2 to-accent bg-clip-text text-transparent animate-gradient">
              supercharges
            </span>{" "}
            your productivity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            Automate repetitive tasks, gain actionable insights from your data, and collaborate seamlessly with your
            team — all powered by cutting-edge AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-medium bg-transparent">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-chart-2" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-chart-2" />
              <span>99.9% Uptime</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />

          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl shadow-accent/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                  <div className="w-3 h-3 rounded-full bg-chart-2/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">NexusAI Dashboard</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    className="p-4 rounded-xl bg-secondary/50 border border-border/30"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-medium text-card-foreground">AI Tasks</span>
                    </div>
                    <div className="text-3xl font-bold text-card-foreground">2,847</div>
                    <div className="text-sm text-chart-2">+23% this week</div>
                  </motion.div>

                  <motion.div
                    className="p-4 rounded-xl bg-secondary/50 border border-border/30"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-chart-2" />
                      </div>
                      <span className="font-medium text-card-foreground">Time Saved</span>
                    </div>
                    <div className="text-3xl font-bold text-card-foreground">156h</div>
                    <div className="text-sm text-chart-2">This month</div>
                  </motion.div>

                  <motion.div
                    className="p-4 rounded-xl bg-secondary/50 border border-border/30"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-chart-4/20 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-chart-4" />
                      </div>
                      <span className="font-medium text-card-foreground">Accuracy</span>
                    </div>
                    <div className="text-3xl font-bold text-card-foreground">99.2%</div>
                    <div className="text-sm text-chart-2">AI predictions</div>
                  </motion.div>
                </div>

                <div className="h-32 rounded-xl bg-gradient-to-r from-accent/10 via-chart-2/10 to-accent/10 border border-border/30 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    {[...Array(7)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-8 bg-accent/40 rounded-full"
                        animate={{ height: [20, 40 + Math.random() * 60, 20] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
