module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend/app/dashboard/roadmap/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Roadmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$dashboard$2f$dash$2d$roadmap$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/dashboard/dash-roadmap.tsx [app-rsc] (ecmascript)");
;
;
function Roadmap() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$dashboard$2f$dash$2d$roadmap$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DashRoadmap"], {}, void 0, false, {
        fileName: "[project]/frontend/app/dashboard/roadmap/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/frontend/app/dashboard/roadmap/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/dashboard/roadmap/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/components/dashboard/dash-roadmap.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashRoadmap",
    ()=>DashRoadmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/check.mjs [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/theme.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$dashboard$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/dashboard/page-header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function DashRoadmap() {
    const phases = [
        {
            title: "Foundation",
            weeks: "Weeks 1-4",
            items: [
                "Big-O Notation",
                "Arrays & Strings",
                "Linked Lists",
                "Stacks & Queues"
            ],
            done: true
        },
        {
            title: "Intermediate DSA",
            weeks: "Weeks 5-10",
            items: [
                "Trees & Graphs",
                "Dynamic Programming",
                "Backtracking",
                "Sorting Algorithms"
            ],
            done: false,
            active: true
        },
        {
            title: "System Design",
            weeks: "Weeks 11-14",
            items: [
                "Scalability Basics",
                "Load Balancing",
                "Caching",
                "Microservices"
            ],
            done: false
        },
        {
            title: "Interview Prep",
            weeks: "Weeks 15-16",
            items: [
                "Mock Interviews",
                "Behavioral Questions",
                "Resume Polish",
                "Offer Negotiation"
            ],
            done: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$dashboard$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Learning Roadmap",
                subtitle: "Your personalized path from skill gap to career readiness"
            }, void 0, false, {
                fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 16
                },
                children: phases.map((phase, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        style: {
                            padding: 24,
                            borderLeft: `4px solid ${phase.done ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].green : phase.active ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].purple : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].border}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    marginBottom: 16,
                                    flexWrap: "wrap",
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    letterSpacing: "0.07em",
                                                    color: phase.done ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].green : phase.active ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].purple : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].muted,
                                                    marginBottom: 4
                                                },
                                                children: [
                                                    "PHASE ",
                                                    i + 1,
                                                    " · ",
                                                    phase.weeks
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                                                lineNumber: 23,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: 17,
                                                    fontWeight: 700,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].text
                                                },
                                                children: phase.title
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                                                lineNumber: 26,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: phase.done ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].green : phase.active ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].purple : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].muted,
                                        bg: phase.done ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].greenL : phase.active ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].purpleXL : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].divider,
                                        children: phase.done ? "Completed ✓" : phase.active ? "In Progress" : "Upcoming"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 10
                                },
                                children: phase.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            padding: "6px 12px",
                                            borderRadius: 8,
                                            background: phase.done ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].greenL : phase.active ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].purpleXL : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].divider,
                                            fontSize: 13,
                                            color: phase.done ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].green : phase.active ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].purple : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$theme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].muted
                                        },
                                        children: [
                                            phase.done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                                                lineNumber: 35,
                                                columnNumber: 34
                                            }, this),
                                            " ",
                                            item
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, phase.title, true, {
                        fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/dashboard/dash-roadmap.tsx",
        lineNumber: 16,
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
"[project]/frontend/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Badge({ children, color, bg, style = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "3px 10px",
            borderRadius: 99,
            fontSize: 12,
            fontWeight: 600,
            color,
            background: bg,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/badge.tsx",
        lineNumber: 12,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__20k8uo0._.js.map