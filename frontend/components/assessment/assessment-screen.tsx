"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, ClipboardList, Timer, Trophy, X } from "lucide-react";
import { C } from "@/lib/theme";
import { JAVA_QUESTIONS } from "@/data/assessments";
import { Logo } from "@/components/landing/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconBox } from "@/components/ui/icon-box";
import { ProgressBar } from "@/components/ui/progress-bar";

export function AssessmentScreen() {
  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(JAVA_QUESTIONS.length).fill(null)
  );

  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [showConfirm, setShowConfirm] = useState(false);
  const [done, setDone] = useState(false);
  const [violationMessage, setViolationMessage] = useState<string | null>(null);

  /*
   * Prevent the browser from accidentally restoring
   * the assessment after the user leaves the page.
   */
  useEffect(() => {
    if (done) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [done]);

  /*
   * Assessment timer
   */
  useEffect(() => {
    if (done) return;

    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setDone(true);
          return 0;
        }

        return s - 1;
      });
    }, 1000);

    return () => clearInterval(t);
  }, [done]);

  /*
   * TAB SWITCH DETECTION
   *
   * If the user switches tabs, minimizes the browser,
   * or moves away from the assessment window,
   * the assessment is automatically submitted.
   */
  useEffect(() => {
    if (done) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setViolationMessage(
          "Assessment submitted because you left the assessment window."
        );

        setDone(true);
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, [done]);

  /*
   * COPY / CUT / RIGHT CLICK / DRAG PREVENTION
   *
   * These controls make copying questions harder.
   */
  useEffect(() => {
    if (done) return;

    const preventCopy = (event: ClipboardEvent) => {
      event.preventDefault();
    };

    const preventContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const preventDrag = (event: DragEvent) => {
      event.preventDefault();
    };

    const preventKeyboardCopy = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      /*
       * Prevent:
       * Ctrl/Cmd + C
       * Ctrl/Cmd + X
       */
      if (
        (event.ctrlKey || event.metaKey) &&
        (key === "c" || key === "x")
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("copy", preventCopy);
    document.addEventListener("cut", preventCopy);
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("dragstart", preventDrag);
    document.addEventListener("keydown", preventKeyboardCopy);

    return () => {
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("cut", preventCopy);
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("dragstart", preventDrag);
      document.removeEventListener("keydown", preventKeyboardCopy);
    };
  }, [done]);
  /*
   * SCREEN CAPTURE DETERRENTS
   *
   * Browsers cannot reliably prevent OS-level screenshots.
   * This simply adds a visual deterrent when the page
   * loses focus.
   */
  useEffect(() => {
    if (done) return;

    const handleBlur = () => {
      document.title = "⚠️ Assessment Active";

      setTimeout(() => {
        document.title = "HonorCode Assessment";
      }, 1500);
    };

    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("blur", handleBlur);
    };
  }, [done]);
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");
  const q = JAVA_QUESTIONS[current];
  const isLast = current === JAVA_QUESTIONS.length - 1;
  const score = done
    ? Math.round(
      (answers.filter(
        (a, i) => a === JAVA_QUESTIONS[i].ans
      ).length /
        JAVA_QUESTIONS.length) *
      100
    )
    : 0;

  /*
   * Assessment completed
   */
  if (done) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: 480,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 24,
              background: score >= 70 ? C.greenL : C.amberL,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Trophy
              size={36}
              color={score >= 70 ? C.green : C.amber}
            />
          </div>

          <h1
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: C.text,
              marginBottom: 8,
            }}
          >
            Assessment Complete!
          </h1>

          {violationMessage ? (
            <div
              style={{
                marginBottom: 20,
                padding: "12px 16px",
                borderRadius: 12,
                background: C.roseL,
                color: C.rose,
                fontSize: 14,
                lineHeight: 1.5,
                fontWeight: 600,
              }}
            >
              {violationMessage}
            </div>
          ) : (
            <p
              style={{
                fontSize: 15,
                color: C.muted,
                marginBottom: 32,
              }}
            >
              Java — Adaptive Assessment
            </p>
          )}

          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: score >= 70 ? C.green : C.amber,
              letterSpacing: "-0.04em",
              marginBottom: 8,
            }}
          >
            {score}%
          </div>

          <p
            style={{
              fontSize: 14,
              color: C.muted,
              marginBottom: 32,
            }}
          >
            {
              answers.filter(
                (a, i) => a === JAVA_QUESTIONS[i].ans
              ).length
            }{" "}
            of {JAVA_QUESTIONS.length} correct
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              Go to Dashboard <ArrowRight size={15} />
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setDone(false);
                setCurrent(0);
                setAnswers(
                  Array(JAVA_QUESTIONS.length).fill(null)
                );
                setTimeLeft(25 * 60);
                setViolationMessage(null);
              }}
            >
              Retake
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {/* Header */}

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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Badge color={C.purple} bg={C.purpleXL}>
            Java
          </Badge>

          <Badge color={C.blue} bg={C.blueL}>
            Adaptive
          </Badge>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 10,
              background:
                timeLeft < 300 ? C.roseL : C.amberL,
              color:
                timeLeft < 300 ? C.rose : C.amber,
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <Timer size={15} />

            {mins}:{secs}
          </div>

          <button
            onClick={() => {
              setShowConfirm(true);
            }}
            style={{
              background: "none",
              border: "none",
              color: C.muted,
              cursor: "pointer",
              display: "flex",
            }}
          >
            <X size={20} />
          </button>
        </div>
      </nav>

      {/* Security Notice */}

      <div
        style={{
          background: C.purpleXL,
          borderBottom: `1px solid ${C.border}`,
          padding: "10px 24px",
          textAlign: "center",
          fontSize: 12,
          color: C.purple,
          fontWeight: 600,
        }}
      >
        Focus Mode is active • Do not leave this assessment window
      </div>

      {/* Confirm dialog */}

      {showConfirm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#00000050",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <Card
            style={{
              maxWidth: 400,
              width: "100%",
              padding: 32,
            }}
          >
            <IconBox
              icon={ClipboardList}
              color={C.purple}
              bg={C.purpleXL}
              size={48}
            />

            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: C.text,
                margin: "16px 0 8px",
              }}
            >
              Submit Assessment?
            </h3>

            <p
              style={{
                fontSize: 14,
                color: C.muted,
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              You have answered{" "}
              {answers.filter((a) => a !== null).length}{" "}
              of {JAVA_QUESTIONS.length} questions. Submit now?
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
              }}
            >
              <Button
                variant="ghost"
                full
                onClick={() => setShowConfirm(false)}
              >
                Go Back
              </Button>

              <Button
                full
                onClick={() => {
                  setShowConfirm(false);
                  setDone(true);
                }}
              >
                Submit
              </Button>
            </div>
          </Card>
        </div>
      )}

      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "36px 24px 80px",
        }}
      >
        {/* Progress */}

        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: C.purple,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Question {current + 1} of{" "}
              {JAVA_QUESTIONS.length}
            </span>

            <span
              style={{
                fontSize: 12,
                color: C.muted,
              }}
            >
              {answers.filter((a) => a !== null).length}{" "}
              answered
            </span>
          </div>

          <ProgressBar
            value={
              ((current + 1) / JAVA_QUESTIONS.length) * 100
            }
            color={C.purple}
            height={4}
          />
        </div>

        {/* Dot progress */}

        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 28,
            flexWrap: "wrap",
          }}
        >
          {JAVA_QUESTIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                border: `1.5px solid ${i === current
                    ? C.purple
                    : answers[i] !== null
                      ? C.green
                      : C.border
                  }`,
                background:
                  i === current
                    ? C.purple
                    : answers[i] !== null
                      ? C.greenL
                      : "#fff",
                color:
                  i === current
                    ? "#fff"
                    : answers[i] !== null
                      ? C.green
                      : C.muted,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Question */}

        <Card
          style={{
            padding: "32px",
            marginBottom: 20,
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.blue,
                marginBottom: 12,
              }}
            >
              Java · Object-Oriented Programming
            </span>

            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {q.q}
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {q.opts.map((opt, idx) => {
              const sel = answers[current] === idx;

              const labels = ["A", "B", "C", "D"];

              return (
                <button
                  key={idx}
                  onClick={() => {
                    const a = [...answers];

                    a[current] = idx;

                    setAnswers(a);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    borderRadius: 12,
                    border: `1.5px solid ${sel ? C.purple : C.border
                      }`,
                    background: sel
                      ? C.purpleXL
                      : "#FAFBFE",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      border: `1.5px solid ${sel ? C.purple : C.border
                        }`,
                      background: sel
                        ? C.purple
                        : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: sel ? "#fff" : C.muted,
                      fontSize: 12,
                      fontWeight: 700,
                      transition: "all 0.15s",
                    }}
                  >
                    {labels[idx]}
                  </div>

                  <span
                    style={{
                      fontSize: 15,
                      color: sel ? C.text : C.textMid,
                      fontWeight: sel ? 600 : 400,
                    }}
                  >
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Navigation */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="ghost"
            onClick={() =>
              setCurrent((c) => Math.max(0, c - 1))
            }
            style={{
              opacity: current === 0 ? 0.4 : 1,
            }}
          >
            <ChevronLeft size={16} /> Previous
          </Button>

          {isLast ? (
            <Button onClick={() => setShowConfirm(true)}>
              Submit Assessment <CheckCircle size={15} />
            </Button>
          ) : (
            <Button
              onClick={() =>
                setCurrent((c) =>
                  Math.min(
                    JAVA_QUESTIONS.length - 1,
                    c + 1
                  )
                )
              }
            >
              Next <ChevronRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}