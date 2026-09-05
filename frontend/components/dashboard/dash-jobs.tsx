import { C } from "@/lib/theme";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/dashboard/page-header";

export function DashJobs() {
  const jobs = [
    { role: "Frontend Developer Intern", company: "Razorpay", type: "Internship", match: 94, stipend: "₹25,000/mo", location: "Bangalore", logo: "R", skills: ["React", "JavaScript", "CSS"], deadline: "Sep 10" },
    { role: "SDE Intern", company: "Swiggy", type: "Internship", match: 88, stipend: "₹30,000/mo", location: "Remote", logo: "S", skills: ["Java", "DSA", "System Design"], deadline: "Sep 15" },
    { role: "Data Analyst Intern", company: "Meesho", type: "Part-time", match: 76, stipend: "₹18,000/mo", location: "Bangalore", logo: "M", skills: ["SQL", "Python", "Excel"], deadline: "Sep 20" },
    { role: "Backend Engineer Intern", company: "PhonePe", type: "Internship", match: 71, stipend: "₹35,000/mo", location: "Bangalore", logo: "P", skills: ["Node.js", "Java", "SQL"], deadline: "Sep 25" },
  ];

  return (
    <div>
      <PageHeader title="Jobs & Internships" subtitle="Verified opportunities matched to your skill profile" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
        {jobs.map(j => (
          <Card key={j.role} style={{ padding: 22 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `linear-gradient(135deg, ${C.purple}18, ${C.green}18)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 20, color: C.purple, flexShrink: 0 }}>
                {j.logo}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 2 }}>{j.role}</div>
                <div style={{ fontSize: 13, color: C.muted }}>{j.company} · {j.location}</div>
              </div>
              <Badge color={C.green} bg={C.greenL}>{j.match}%</Badge>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
              {j.skills.map(s => (
                <span key={s} style={{ padding: "3px 10px", borderRadius: 6, background: C.purpleXL, color: C.purple, fontSize: 12, fontWeight: 600 }}>{s}</span>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{j.stipend}</div>
                <div style={{ fontSize: 11, color: C.muted }}>Apply by {j.deadline}</div>
              </div>
              <Button size="sm">Apply Now</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

