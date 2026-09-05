import { C } from "@/lib/theme";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PageHeader } from "@/components/dashboard/page-header";

export function DashSkills() {
  const skills = [
    { name: "Data Structures", level: 78, color: C.purple },
    { name: "Java", level: 65, color: C.blue },
    { name: "SQL", level: 82, color: C.green },
    { name: "JavaScript", level: 71, color: C.amber },
    { name: "React", level: 55, color: C.rose },
    { name: "Python", level: 48, color: "#8B5CF6" },
  ];

  return (
    <div>
      <PageHeader title="My Skills" subtitle="Track and improve your technical competencies" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
        {skills.map(s => (
          <Card key={s.name} style={{ padding: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{s.name}</div>
              <span style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.level}%</span>
            </div>
            <ProgressBar value={s.level} color={s.color} height={8} />
            <div style={{ marginTop: 12, fontSize: 12, color: C.muted }}>
              {s.level >= 75 ? "Proficient" : s.level >= 55 ? "Developing" : "Beginner"} · Last assessed 3 days ago
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

