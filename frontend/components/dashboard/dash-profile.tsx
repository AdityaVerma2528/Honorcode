import { Check, User } from "lucide-react";
import { C } from "@/lib/theme";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PageHeader } from "@/components/dashboard/page-header";

export function DashProfile() {
  return (
    <div>
      <PageHeader
        title="My Profile"
        subtitle="Your public skill profile visible to recruiters"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: 20,
          alignItems: "start",
        }}
      >
        <Card style={{ padding: 24, textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.purple}, ${C.green})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px",
            }}
          >
            <User size={36} color="#fff" />
          </div>
          <div style={{ fontWeight: 800, fontSize: 18, color: C.text, marginBottom: 4 }}>
            Soumya Singh
          </div>
          <div style={{ fontSize: 13, color: C.muted, marginBottom: 16 }}>
            B.Tech CSE · Galgotias University
          </div>
          <Badge color={C.purple} bg={C.purpleXL}>
            Intermediate Developer
          </Badge>
          <div
            style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${C.border}` }}
          >
            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 12, color: C.muted }}>Profile Strength</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.green }}>82%</span>
              </div>
              <ProgressBar value={82} color={C.green} height={6} />
            </div>
          </div>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card style={{ padding: 22 }}>
            <h3
              style={{ fontWeight: 700, fontSize: 15, color: C.text, marginBottom: 16 }}
            >
              Personal Information
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { label: "Full Name", value: "Soumya Singh" },
                { label: "Email", value: "soumya@iitd.ac.in" },
                { label: "College", value: "Galgotias University" },
                { label: "Course", value: "B.Tech Computer Science" },
                { label: "Year", value: "2nd Year" },
                { label: "Career Goal", value: "Software Development" },
              ].map((f) => (
                <div key={f.label}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: C.muted,
                      letterSpacing: "0.05em",
                      marginBottom: 4,
                    }}
                  >
                    {f.label.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: C.text }}>
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: 22 }}>
            <h3
              style={{ fontWeight: 700, fontSize: 15, color: C.text, marginBottom: 14 }}
            >
              Verified Skills
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Java", "JavaScript", "React", "SQL", "Data Structures", "Python"].map(
                (s) => (
                  <div
                    key={s}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 14px",
                      borderRadius: 8,
                      background: C.greenL,
                      color: C.green,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    <Check size={12} /> {s}
                  </div>
                ),
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
