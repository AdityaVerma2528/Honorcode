import { Award, Brain, Flame, Star, Target, Trophy } from "lucide-react";
import { C } from "@/lib/theme";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/dashboard/page-header";

export function DashAchievements() {
  const badges = [
    {
      icon: Award,
      label: "Fast Learner",
      desc: "Completed 3 modules in a week",
      color: C.amber,
      earned: true,
    },
    {
      icon: Flame,
      label: "7-Day Streak",
      desc: "Logged in 7 days in a row",
      color: C.rose,
      earned: true,
    },
    {
      icon: Star,
      label: "Top Scorer",
      desc: "Scored 80%+ in an assessment",
      color: C.purple,
      earned: true,
    },
    {
      icon: Target,
      label: "Goal Setter",
      desc: "Set your first career goal",
      color: C.green,
      earned: true,
    },
    {
      icon: Brain,
      label: "AI Expert",
      desc: "Complete the ML assessment",
      color: C.blue,
      earned: false,
    },
    {
      icon: Trophy,
      label: "Placement Ready",
      desc: "Reach 90% profile strength",
      color: C.amber,
      earned: false,
    },
  ];

  return (
    <div>
      <PageHeader title="Achievements" subtitle="Milestones and badges you have earned" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {badges.map((b) => (
          <Card
            key={b.label}
            style={{ padding: 24, textAlign: "center", opacity: b.earned ? 1 : 0.45 }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background: b.color + "18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 14px",
              }}
            >
              <b.icon size={28} color={b.color} />
            </div>
            <div
              style={{ fontWeight: 700, fontSize: 15, color: C.text, marginBottom: 6 }}
            >
              {b.label}
            </div>
            <div style={{ fontSize: 12, color: C.muted }}>{b.desc}</div>
            {b.earned && (
              <Badge color={C.green} bg={C.greenL} style={{ marginTop: 12 }}>
                Earned ✓
              </Badge>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
