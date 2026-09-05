"use client";

import { CheckCircle, ClipboardList, Play, Shield } from "lucide-react";
import { C } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/dashboard/page-header";

export function DashAssessments() {
  const tests = [
    { name: "Java Fundamentals", questions: 20, time: "30 min", difficulty: "Medium", status: "completed", score: 78 },
    { name: "SQL Queries & Optimization", questions: 15, time: "25 min", difficulty: "Hard", status: "completed", score: 82 },
    { name: "Data Structures", questions: 20, time: "35 min", difficulty: "Hard", status: "completed", score: 65 },
    { name: "React & Frontend", questions: 18, time: "30 min", difficulty: "Medium", status: "pending", score: null },
    { name: "System Design Basics", questions: 10, time: "20 min", difficulty: "Hard", status: "locked", score: null },
  ];

  return (
    <div>
      <PageHeader title="Assessments" subtitle="AI-adaptive tests to measure and verify your skills" />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {tests.map(t => (
          <Card key={t.name} style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: t.status === "completed" ? C.greenL : t.status === "pending" ? C.purpleXL : C.divider, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {t.status === "completed" ? <CheckCircle size={20} color={C.green} /> : t.status === "pending" ? <ClipboardList size={20} color={C.purple} /> : <Shield size={20} color={C.muted} />}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{t.questions} questions · {t.time} · {t.difficulty}</div>
            </div>
            {t.score !== null && (
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: t.score >= 75 ? C.green : C.amber, letterSpacing: "-0.03em" }}>{t.score}%</div>
                <div style={{ fontSize: 11, color: C.muted }}>Score</div>
              </div>
            )}
            {t.status === "pending" && (
              <Button onClick={() => { window.location.href = "/assessment/java"; }} size="sm">
                <Play size={13} /> Start
              </Button>
            )}
            {t.status === "completed" && (
              <Button variant="ghost" size="sm">View Report</Button>
            )}
            {t.status === "locked" && (
              <Button variant="ghost" size="sm" style={{ opacity: 0.5, cursor: "not-allowed" }}>
                <Shield size={13} /> Locked
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

