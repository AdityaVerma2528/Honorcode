module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend/app/dashboard/skills/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$dashboard$2f$dash$2d$skills$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/dashboard/dash-skills.tsx [app-rsc] (ecmascript)");
;
;
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$dashboard$2f$dash$2d$skills$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DashSkills"], {}, void 0, false, {
        fileName: "[project]/frontend/app/dashboard/skills/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/frontend/app/dashboard/skills/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/dashboard/skills/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/components/dashboard/dash-skills.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashSkills",
    ()=>DashSkills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/theme.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$progress$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/progress-bar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$dashboard$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/dashboard/page-header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function DashSkills() {
    const skills = [
        {
            name: "Data Structures",
            level: 78,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].purple
        },
        {
            name: "Java",
            level: 65,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].blue
        },
        {
            name: "SQL",
            level: 82,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].green
        },
        {
            name: "JavaScript",
            level: 71,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].amber
        },
        {
            name: "React",
            level: 55,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].rose
        },
        {
            name: "Python",
            level: 48,
            color: "#8B5CF6"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$dashboard$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "My Skills",
                subtitle: "Track and improve your technical competencies"
            }, void 0, false, {
                fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: 16
                },
                children: skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        style: {
                            padding: 22
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 15,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].text
                                        },
                                        children: s.name
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 18,
                                            fontWeight: 800,
                                            color: s.color
                                        },
                                        children: [
                                            s.level,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$progress$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProgressBar"], {
                                value: s.level,
                                color: s.color,
                                height: 8
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    fontSize: 12,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].muted
                                },
                                children: [
                                    s.level >= 75 ? "Proficient" : s.level >= 55 ? "Developing" : "Beginner",
                                    " · Last assessed 3 days ago"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.name, true, {
                        fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/dashboard/dash-skills.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/components/dashboard/page-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/theme.ts [app-rsc] (ecmascript)");
;
;
function PageHeader({ title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: 22,
                    fontWeight: 800,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].text,
                    letterSpacing: "-0.03em",
                    marginBottom: 4
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/frontend/components/dashboard/page-header.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 14,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].muted
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/frontend/components/dashboard/page-header.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/dashboard/page-header.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/theme.ts [app-rsc] (ecmascript)");
;
;
function Card({ children, style = {}, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].card,
            borderRadius: 16,
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].border}`,
            boxShadow: "0 1px 8px #0F172A08",
            ...onClick ? {
                cursor: "pointer"
            } : {},
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/card.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/components/ui/progress-bar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressBar",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/theme.ts [app-rsc] (ecmascript)");
;
;
function ProgressBar({ value, color = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].purple, height = 6 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height,
            borderRadius: 99,
            background: "#E2E8F0",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: `${value}%`,
                height: "100%",
                background: color,
                borderRadius: 99,
                transition: "width 0.5s ease"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/progress-bar.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/progress-bar.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/lib/theme.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>C
]);
const C = {
    purple: "#4A7DB0",
    purpleL: "#7BA8C9",
    purpleXL: "#E4EFF8",
    purpleDark: "#2A5491",
    green: "#4AAF97",
    greenL: "#DDF3EE",
    blue: "#2A5491",
    blueL: "#D4E4F5",
    amber: "#E8A838",
    amberL: "#FEF3C7",
    rose: "#E05A5A",
    roseL: "#FDEAEA",
    nav: "#022038",
    navHover: "#0A3050",
    navActive: "#4A7DB0",
    bg: "#F4F8FB",
    card: "#FFFFFF",
    border: "#DDE8F0",
    text: "#0D1F2D",
    textMid: "#2D4A5E",
    muted: "#6B8499",
    divider: "#F0F6FA"
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1fr98in._.js.map