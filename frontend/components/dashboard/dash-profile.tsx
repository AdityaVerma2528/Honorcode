"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Check, User } from "lucide-react";

import { C } from "@/lib/theme";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PageHeader } from "@/components/dashboard/page-header";

interface DeveloperProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string | null;
  location?: string | null;
  bio?: string | null;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  portfolioUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

interface UserData {
  id: string;
  email: string;
  role: "DEVELOPER" | "INDUSTRY" | "ADMIN";
  status: "PENDING" | "ACTIVE" | "SUSPENDED";
  emailVerified: boolean;
  lastLoginAt?: string | null;
  developerProfile?: DeveloperProfile | null;
  industryProfile?: unknown | null;
}

interface MeResponse {
  user: UserData;
}

export function DashProfile() {
  const router = useRouter();

  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const fetchProfile = async () => {
      const token = localStorage.getItem("honorcode_token");

      if (!token) {
        router.replace("/signin");
        return;
      }

      try {
        const response = await axios.get<MeResponse>(
          "http://localhost:5000/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!mounted) return;

        const fetchedUser = response.data.user;

        console.log("Authenticated user:", fetchedUser);

        if (!fetchedUser) {
          throw new Error("User data was not returned by the server.");
        }

        if (fetchedUser.role !== "DEVELOPER") {
          setError("This page is only available for developers.");
          return;
        }

        setUser(fetchedUser);
      } catch (error) {
        if (!mounted) return;

        console.error("Profile request failed:", error);

        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            localStorage.removeItem("honorcode_token");
            localStorage.removeItem("honorcode_user");

            router.replace("/signin");
            return;
          }

          setError(
            error.response?.data?.message ||
              "Failed to load your profile.",
          );

          return;
        }

        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Failed to load your profile.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProfile();

    return () => {
      mounted = false;
    };
  }, [router]);

  if (loading) {
    return (
      <div>
        <PageHeader
          title="My Profile"
          subtitle="Your public skill profile visible to recruiters"
        />

        <Card style={{ padding: 24 }}>
          <div
            style={{
              color: C.muted,
              fontSize: 14,
            }}
          >
            Loading your profile...
          </div>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageHeader
          title="My Profile"
          subtitle="Your public skill profile visible to recruiters"
        />

        <Card style={{ padding: 24 }}>
          <div
            style={{
              color: "#DC2626",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {error}
          </div>
        </Card>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const profile = user.developerProfile;

  if (!profile) {
    return (
      <div>
        <PageHeader
          title="My Profile"
          subtitle="Your public skill profile visible to recruiters"
        />

        <Card style={{ padding: 24 }}>
          <div
            style={{
              color: C.muted,
              fontSize: 14,
            }}
          >
            Your developer profile has not been created yet.
          </div>
        </Card>
      </div>
    );
  }

  const fullName =
    `${profile.firstName} ${profile.lastName}`.trim();

  const profileFields = [
    {
      label: "Full Name",
      value: fullName || "Not provided",
    },
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Phone Number",
      value: profile.phoneNumber || "Not provided",
    },
    {
      label: "Location",
      value: profile.location || "Not provided",
    },
    {
      label: "GitHub",
      value: profile.githubUrl || "Not provided",
    },
    {
      label: "LinkedIn",
      value: profile.linkedinUrl || "Not provided",
    },
    {
      label: "Portfolio",
      value: profile.portfolioUrl || "Not provided",
    },
  ];

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
        {/* PROFILE SUMMARY */}

        <Card
          style={{
            padding: 24,
            textAlign: "center",
          }}
        >
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

          <div
            style={{
              fontWeight: 800,
              fontSize: 18,
              color: C.text,
              marginBottom: 4,
            }}
          >
            {fullName}
          </div>

          <div
            style={{
              fontSize: 13,
              color: C.muted,
              marginBottom: 16,
            }}
          >
            {profile.location || "Location not provided"}
          </div>

          <Badge color={C.purple} bg={C.purpleXL}>
            Developer
          </Badge>

          <div
            style={{
              marginTop: 20,
              paddingTop: 20,
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: C.muted,
                  }}
                >
                  Profile Strength
                </span>

                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: C.green,
                  }}
                >
                  82%
                </span>
              </div>

              <ProgressBar
                value={82}
                color={C.green}
                height={6}
              />
            </div>
          </div>
        </Card>

        {/* PROFILE DETAILS */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <Card style={{ padding: 22 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: C.text,
                marginBottom: 16,
              }}
            >
              Personal Information
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {profileFields.map((field) => (
                <div key={field.label}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: C.muted,
                      letterSpacing: "0.05em",
                      marginBottom: 4,
                    }}
                  >
                    {field.label.toUpperCase()}
                  </div>

                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: C.text,
                      wordBreak: "break-word",
                    }}
                  >
                    {field.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{ padding: 22 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: C.text,
                marginBottom: 14,
              }}
            >
              About Me
            </h3>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: profile.bio ? C.text : C.muted,
              }}
            >
              {profile.bio || "No bio added yet."}
            </p>
          </Card>

          <Card style={{ padding: 22 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: C.text,
                marginBottom: 14,
              }}
            >
              Verified Skills
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <div
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
                <Check size={12} />
                No verified skills yet
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}