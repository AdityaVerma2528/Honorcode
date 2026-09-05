import { Check } from "lucide-react";
import { C } from "@/lib/theme";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/dashboard/page-header";

export function DashRoadmap() {
  const phases = [
    { title: "Foundation", weeks: "Weeks 1-4", items: ["Big-O Notation", "Arrays & Strings", "Linked Lists", "Stacks & Queues"], done: true },
    { title: "Intermediate DSA", weeks: "Weeks 5-10", items: ["Trees & Graphs", "Dynamic Programming", "Backtracking", "Sorting Algorithms"], done: false, active: true },
    { title: "System Design", weeks: "Weeks 11-14", items: ["Scalability Basics", "Load Balancing", "Caching", "Microservices"], done: false },
    { title: "Interview Prep", weeks: "Weeks 15-16", items: ["Mock Interviews", "Behavioral Questions", "Resume Polish", "Offer Negotiation"], done: false },
  ];

  return (
    <div>
      <PageHeader title="Learning Roadmap" subtitle="Your personalized path from skill gap to career readiness" />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {phases.map((phase, i) => (
          <Card key={phase.title} style={{ padding: 24, borderLeft: `4px solid ${phase.done ? C.green : phase.active ? C.purple : C.border}` }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", color: phase.done ? C.green : phase.active ? C.purple : C.muted, marginBottom: 4 }}>
                  PHASE {i + 1} · {phase.weeks}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text }}>{phase.title}</h3>
              </div>
              <Badge color={phase.done ? C.green : phase.active ? C.purple : C.muted} bg={phase.done ? C.greenL : phase.active ? C.purpleXL : C.divider}>
                {phase.done ? "Completed ✓" : phase.active ? "In Progress" : "Upcoming"}
              </Badge>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {phase.items.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, background: phase.done ? C.greenL : phase.active ? C.purpleXL : C.divider, fontSize: 13, color: phase.done ? C.green : phase.active ? C.purple : C.muted }}>
                  {phase.done && <Check size={12} />} {item}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

