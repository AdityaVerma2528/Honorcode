"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  ChevronRight,
  Code2,
  Globe,
  Palette,
  Shield,
  Star,
  User,
} from "lucide-react";
import { C } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/landing/logo";

export function ProfileSetupPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = useState("");

  const skills = [
    "Java",
    "Python",
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "Data Structures",
    "Machine Learning",
    "UI/UX",
    "Go",
    "TypeScript",
    "Docker",
    "Git",
    "AWS",
  ];
  const goals = [
    { label: "Software Development", icon: Code2 },
    { label: "Data Science", icon: BarChart3 },
    { label: "AI / ML", icon: Brain },
    { label: "Cybersecurity", icon: Shield },
    { label: "UI / UX Design", icon: Palette },
    { label: "Other", icon: Globe },
  ];

  const toggleSkill = (s: string) =>
    setSelectedSkills((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <nav
        style={{
          background: "#fff",
          borderBottom: `1px solid ${C.border}`,
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {["Account", "Skills", "Goal"].map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: i === 0 ? C.green : i === 1 ? C.purple : C.border,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i === 0 ? (
                    <Check size={12} color="#fff" />
                  ) : (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: i === 1 ? "#fff" : C.muted,
                      }}
                    >
                      {i + 1}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: i === 1 ? C.purple : i === 0 ? C.green : C.muted,
                  }}
                >
                  {s}
                </span>
              </div>
              {i < 2 && <ChevronRight size={14} color={C.border} />}
            </div>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 18,
              background: `linear-gradient(135deg, ${C.purple}, ${C.green})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <Star size={28} color="#fff" />
          </div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: C.text,
              letterSpacing: "-0.03em",
              marginBottom: 8,
            }}
          >
            Build Your Skill Profile
          </h1>
          <p style={{ fontSize: 15, color: C.muted }}>
            Help us personalize your experience
          </p>
        </div>

        {/* Profile preview */}
        <Card
          style={{
            padding: 20,
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.purple}, ${C.green})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <User size={24} color="#fff" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: C.text }}>
              Soumya Singh
            </div>
            <div style={{ fontSize: 13, color: C.muted }}>
              B.Tech CSE · 2nd Year · Galgotias University
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <Badge color={C.green} bg={C.greenL}>
              Account created ✓
            </Badge>
          </div>
        </Card>

        {/* Skills */}
        <Card style={{ padding: 24, marginBottom: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 6 }}>
            Select Your Skills
          </h3>
          <p style={{ fontSize: 13, color: C.muted, marginBottom: 18 }}>
            Choose all that apply — be honest, the AI will assess you accurately.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {skills.map((s) => {
              const on = selectedSkills.includes(s);
              return (
                <button
                  key={s}
                  onClick={() => toggleSkill(s)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 8,
                    border: `1.5px solid ${on ? C.purple : C.border}`,
                    background: on ? C.purpleXL : "#fff",
                    color: on ? C.purple : C.textMid,
                    fontSize: 13,
                    fontWeight: on ? 600 : 500,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {on && <Check size={12} />} {s}
                </button>
              );
            })}
          </div>
          {selectedSkills.length > 0 && (
            <div style={{ marginTop: 14, fontSize: 13, color: C.green, fontWeight: 600 }}>
              ✓ {selectedSkills.length} skills selected
            </div>
          )}
        </Card>

        {/* Career goal */}
        <Card style={{ padding: 24, marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 6 }}>
            Career Goal
          </h3>
          <p style={{ fontSize: 13, color: C.muted, marginBottom: 18 }}>
            Select your primary career direction
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: 12,
            }}
          >
            {goals.map((g) => {
              const on = selectedGoal === g.label;
              return (
                <button
                  key={g.label}
                  onClick={() => setSelectedGoal(g.label)}
                  style={{
                    padding: "16px 12px",
                    borderRadius: 12,
                    textAlign: "center",
                    border: `1.5px solid ${on ? C.purple : C.border}`,
                    background: on ? C.purpleXL : "#fff",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <g.icon
                    size={22}
                    color={on ? C.purple : C.muted}
                    style={{ margin: "0 auto 8px" }}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: on ? C.purple : C.textMid,
                    }}
                  >
                    {g.label}
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        <Button
          full
          size="lg"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Continue to Assessment <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}
