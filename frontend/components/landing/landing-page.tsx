"use client";

import { useState } from "react";
import { ArrowRight, Brain, Briefcase, ChevronRight, Map, Play, Rocket, User, Zap } from "lucide-react";
import { C } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconBox } from "@/components/ui/icon-box";
import { Logo } from "@/components/landing/logo";

export function LandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const features = [
    { icon: Brain, title: "AI Skill Assessment", desc: "Adaptive tests that map your exact capability level across 50+ technical domains.", color: C.purple, bg: C.purpleXL },
    { icon: Map, title: "Personalized Roadmap", desc: "Get a custom learning path built from your current skills and career goals.", color: C.green, bg: C.greenL },
    { icon: Briefcase, title: "Internship & Job Matching", desc: "Verified opportunities from 500+ companies matched to your verified skill profile.", color: C.blue, bg: C.blueL },
  ];

  const stats = [
    { value: "50K+", label: "Students Assessed" },
    { value: "200+", label: "Partner Colleges" },
    { value: "500+", label: "Industry Partners" },
    { value: "94%", label: "Placement Rate" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#FAFBFF" }}>
      {/* Navbar */}
      <nav style={{ background: "#fff", borderBottom: `1px solid ${C.border}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo />
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["Home", "How It Works", "For Students", "For Industry", "About"].map(l => (
              <button key={l} style={{ background: "none", border: "none", fontSize: 14, fontWeight: 500, color: C.textMid, cursor: "pointer", padding: "4px 0" }}>
                {l}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button onClick={() => window.location.href = "/register"} size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 64px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 99, background: C.purpleXL, color: C.purple, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
          <Zap size={13} /> Smart India Hackathon 2026 — HonorCode
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, color: C.text, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 24, maxWidth: 800, margin: "0 auto 24px" }}>
          Turn Your Skills Into{" "}
          <span style={{ background: `linear-gradient(135deg, ${C.purple}, ${C.green})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Opportunities
          </span>
        </h1>
        <p style={{ fontSize: 18, color: C.muted, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
          AI-powered skill assessment, personalized learning paths and verified career opportunities — all in one platform.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Button onClick={() => window.location.href = "/register"} size="lg">
            Get Started <ArrowRight size={16} />
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.location.href = "/dashboard"}>
            <Play size={16} /> Explore Platform
          </Button>
        </div>

        {/* Stats strip */}
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px, 5vw, 64px)", marginTop: 64, flexWrap: "wrap" }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: C.text, letterSpacing: "-0.03em" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature cards */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {features.map(f => (
            <Card key={f.title} style={{ padding: 28 }}>
              <IconBox icon={f.icon} color={f.color} bg={f.bg} size={48} />
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: "16px 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              <div style={{ marginTop: 20 }}>
                <button style={{ background: "none", border: "none", color: f.color, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: 0 }}>
                  Learn more <ChevronRight size={14} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "#fff", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, letterSpacing: "-0.03em", marginBottom: 12 }}>How HonorCode AI Works</h2>
            <p style={{ fontSize: 16, color: C.muted }}>Four steps from skill gap to career opportunity</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { n: "01", icon: User, label: "Create Profile", desc: "Set up your academic background, skills and career goals.", color: C.purple },
              { n: "02", icon: Brain, label: "Take AI Assessment", desc: "Adaptive tests powered by AI identify your real skill level.", color: C.blue },
              { n: "03", icon: Map, label: "Get Your Roadmap", desc: "Receive a curated, personalized learning path.", color: C.green },
              { n: "04", icon: Rocket, label: "Land Opportunities", desc: "Match with verified internships and placements.", color: C.amber },
            ].map(s => (
              <div key={s.n} style={{ textAlign: "center", padding: "28px 20px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: "0.08em", marginBottom: 14 }}>{s.n}</div>
                <IconBox icon={s.icon} color={s.color} bg={s.color + "18"} size={52} style={{ margin: "0 auto 16px" }} />
                <h4 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{s.label}</h4>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ background: `linear-gradient(135deg, ${C.purple}, #2A8C72)`, borderRadius: 24, padding: "60px 40px", color: "#fff" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16, letterSpacing: "-0.03em" }}>Ready to bridge the gap?</h2>
          <p style={{ fontSize: 16, opacity: 0.85, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Join thousands of students who have transformed their careers with HonorCode AI.
          </p>
          <Button onClick={() => window.location.href = "/register"} size="lg" style={{ background: "#fff", color: C.purple }}>
            Start for Free <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}

