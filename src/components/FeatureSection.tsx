"use client";

import { motion } from "framer-motion";
import { History, Cloud, Bell, Image as ImageIcon, Shield, Users } from "lucide-react";

const features = [
  {
    title: "Visual Timelines",
    description: "Your life story, beautifully rendered in a scrollable, interactive vertical timeline.",
    icon: History,
    color: "bg-indigo-500",
    shadow: "shadow-indigo-500/10",
  },
  {
    title: "Cloud Vault",
    description: "Securely backup your precious media to Google Drive with end-to-end integration.",
    icon: Cloud,
    color: "bg-sky-500",
    shadow: "shadow-sky-500/10",
  },
  {
    title: "Memory Prompts",
    description: "Intelligent notifications that remind you to capture life's most meaningful moments.",
    icon: Bell,
    color: "bg-amber-500",
    shadow: "shadow-amber-500/10",
  },
  {
    title: "Rich Media Support",
    description: "Attach photos, videos, and voice notes to every memory for a full sensory experience.",
    icon: ImageIcon,
    color: "bg-purple-500",
    shadow: "shadow-purple-500/10",
  },
  {
    title: "Privacy Center",
    description: "You own your data. Our Privacy Center gives you full control over your digital archive.",
    icon: Shield,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/10",
  },
  {
    title: "Multiple Profiles",
    description: "Manage separate journeys for family members and keep everyone's story alive.",
    icon: Users,
    color: "bg-rose-500",
    shadow: "shadow-rose-500/10",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Everything you need to <br />
            <span className="text-primary">capture your life</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-lg max-w-2xl mx-auto"
          >
            LifeTracks is more than just a journal. It's a living archive of your
            existence, designed to be as vibrant and dynamic as you are.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl glass hover:bg-background/80 transition-all group cursor-default"
            >
              <div className={`w-12 h-12 ${feature.color} ${feature.shadow} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
