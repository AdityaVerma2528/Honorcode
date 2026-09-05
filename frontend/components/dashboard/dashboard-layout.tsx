"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Briefcase, ClipboardList, LayoutDashboard, LogOut, Map, Menu, Search, Star, Trophy, User } from "lucide-react";
import { C } from "@/lib/theme";
import { Logo } from "@/components/landing/logo";

type DashTab = "home" | "skills" | "assessments" | "roadmap" | "jobs" | "achievements" | "profile";

const SIDEBAR_ITEMS: { id: DashTab; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: "home", label: "Dashboard", icon: LayoutDashboard },
  { id: "skills", label: "My Skills", icon: Star },
  { id: "assessments", label: "Assessments", icon: ClipboardList },
  { id: "roadmap", label: "Learning Roadmap", icon: Map },
  { id: "jobs", label: "Jobs & Internships", icon: Briefcase },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "profile", label: "Profile", icon: User },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: C.bg }}>
      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? 240 : 0, flexShrink: 0, background: C.nav,
        display: "flex", flexDirection: "column", transition: "width 0.25s", overflow: "hidden",
      }}>
        <div style={{ padding: "20px 18px 16px", borderBottom: "1px solid #ffffff14" }}>
          <Logo dark />
        </div>
        <nav style={{ flex: 1, padding: "12px 10px" }}>
          {SIDEBAR_ITEMS.map(item => {
            const itemPath = item.id === "home" ? "/dashboard" : `/dashboard/${item.id}`;
            const active = pathname === itemPath;
            return (
              <button
                key={item.id} onClick={() => router.push(itemPath)}
                style={{
                  display: "flex", alignItems: "center", gap: 11, width: "100%",
                  padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer",
                  marginBottom: 2, transition: "all 0.15s", textAlign: "left",
                  background: active ? C.purple : "transparent",
                  color: active ? "#fff" : "#94A3C0",
                  fontWeight: active ? 600 : 500, fontSize: 13.5,
                }}
              >
                <item.icon size={17} />
                <span style={{ whiteSpace: "nowrap" }}>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div style={{ padding: "14px 10px", borderTop: "1px solid #ffffff14" }}>
          <button
            onClick={() => { window.location.href = "/"; }}
            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, border: "none", background: "transparent", color: "#94A3C0", cursor: "pointer", fontSize: 13.5, fontWeight: 500 }}
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top bar */}
        <header style={{ background: "#fff", borderBottom: `1px solid ${C.border}`, height: 60, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, position: "sticky", top: 0, zIndex: 50 }}>
          <button onClick={() => setSidebarOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex" }}>
            <Menu size={20} />
          </button>
          <div style={{ flex: 1, maxWidth: 400, position: "relative" }}>
            <Search size={15} color={C.muted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
            <input placeholder="Search skills, jobs, courses..." style={{ width: "100%", padding: "8px 12px 8px 36px", borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 13, background: C.bg, color: C.text, outline: "none" }} />
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
            <button style={{ position: "relative", background: "none", border: "none", cursor: "pointer", color: C.muted }}>
              <Bell size={20} />
              <span style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: C.rose, border: "2px solid #fff" }} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingLeft: 12, borderLeft: `1px solid ${C.border}`, cursor: "pointer" }} onClick={() => { window.location.href = "/dashboard/profile"; }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg, ${C.purple}, ${C.green})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <User size={16} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Soumya Singh</div>
                <div style={{ fontSize: 11, color: C.muted }}>B.Tech CSE · Year 3</div>
              </div>
            </div>
          </div>
        </header>

        <main style={{ flex: 1, padding: "28px 28px", overflowY: "auto" }}>
          {children}
        </main>
      </div>
    </div>
  );
}

