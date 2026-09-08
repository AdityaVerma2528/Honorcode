"use client";

import {
  BarChart3,
  Briefcase,
  ChevronRight,
  ClipboardList,
  Code2,
  Database,
  GitBranch,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { C } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconBox } from "@/components/ui/icon-box";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StatCard } from "@/components/dashboard/stat-card";

export function DashHome() {
  const learningCards = [
    {
      title: "Data Structures & Algorithms",
      topic: "DSA",
      progress: 65,
      color: C.purple,
      bg: C.purpleXL,
      icon: GitBranch,
    },
    {
      title: "Java — Core to Advanced",
      topic: "Java",
      progress: 42,
      color: C.blue,
      bg: C.blueL,
      icon: Code2,
    },
    {
      title: "SQL & Databases",
      topic: "SQL",
      progress: 80,
      color: C.green,
      bg: C.greenL,
      icon: Database,
    },
  ];

  const opportunities = [
    {
      role: "Frontend Developer Intern",
      company: "Razorpay",
      type: "Internship",
      match: 94,
      stipend: "₹25K/mo",
      location: "Bangalore",
      logo: "R",
    },
    {
      role: "SDE Intern",
      company: "Swiggy",
      type: "Internship",
      match: 88,
      stipend: "₹30K/mo",
      location: "Remote",
      logo: "S",
    },
    {
      role: "Data Analyst Intern",
      company: "Meesho",
      type: "Part-time",
      match: 76,
      stipend: "₹18K/mo",
      location: "Bangalore",
      logo: "M",
    },
  ];

  return (
    <div>
      {/* Welcome */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: C.text,
                letterSpacing: "-0.03em",
                marginBottom: 4,
              }}
            >
              Welcome back, Soumya 👋
            </h1>
            <p style={{ fontSize: 14, color: C.muted }}>
              Monday, 25 August 2026 · 2 assessments pending
            </p>
          </div>
          <Button
            onClick={() => {
              window.location.href = "/assessment/java";
            }}
            style={{ background: `linear-gradient(135deg, ${C.purple}, ${C.green})` }}
          >
            <Zap size={14} /> Start Assessment
          </Button>
        </div>
      </div>

      {/* Stat cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
          marginBottom: 28,
        }}
      >
        <StatCard
          icon={BarChart3}
          label="Skill Score"
          value="78%"
          sub="Top 15% in your batch"
          color={C.purple}
          bg={C.purpleXL}
        />
        <StatCard
          icon={ClipboardList}
          label="Assessment Progress"
          value="3 / 5"
          sub="2 remaining"
          color={C.blue}
          bg={C.blueL}
        />
        <StatCard
          icon={Target}
          label="Profile Strength"
          value="82%"
          sub="Add 2 projects to reach 90%"
          color={C.green}
          bg={C.greenL}
        />
        <StatCard
          icon={Briefcase}
          label="Matched Opportunities"
          value="12"
          sub="3 new this week"
          color={C.amber}
          bg={C.amberL}
        />
      </div>

      {/* Continue Learning */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h2 style={{ fontSize: 17, fontWeight: 700, color: C.text }}>
            Continue Learning
          </h2>
          <button
            onClick={() => {
              window.location.href = "/dashboard/roadmap";
            }}
            style={{
              background: "none",
              border: "none",
              color: C.purple,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            View roadmap <ChevronRight size={14} />
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {learningCards.map((c) => (
            <Card
              key={c.title}
              style={{ padding: 20 }}
              onClick={() => {
                window.location.href = "/dashboard/roadmap";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: c.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <c.icon size={18} color={c.color} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: c.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.topic}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>
                    {c.title}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 12, color: C.muted }}>Progress</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: c.color }}>
                  {c.progress}%
                </span>
              </div>
              <ProgressBar value={c.progress} color={c.color} height={5} />
              <button
                style={{
                  marginTop: 14,
                  background: "none",
                  border: "none",
                  color: c.color,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                }}
              >
                Continue <ChevronRight size={13} />
              </button>
            </Card>
          ))}
        </div>
      </div>

      {/* Opportunities */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h2 style={{ fontSize: 17, fontWeight: 700, color: C.text }}>
            Recommended for You
          </h2>
          <button
            onClick={() => {
              window.location.href = "/dashboard/jobs";
            }}
            style={{
              background: "none",
              border: "none",
              color: C.purple,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            View all <ChevronRight size={14} />
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {opportunities.map((o) => (
            <Card
              key={o.role}
              style={{
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
              onClick={() => {
                window.location.href = "/dashboard/jobs";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${C.purple}22, ${C.green}22)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 18,
                  color: C.purple,
                  flexShrink: 0,
                }}
              >
                {o.logo}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
                  {o.role}
                </div>
                <div style={{ fontSize: 12, color: C.muted }}>
                  {o.company} · {o.location} · {o.stipend}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Badge color={C.green} bg={C.greenL}>
                  {o.match}% match
                </Badge>
                <Badge color={C.blue} bg={C.blueL}>
                  {o.type}
                </Badge>
              </div>
              <ChevronRight size={16} color={C.muted} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
