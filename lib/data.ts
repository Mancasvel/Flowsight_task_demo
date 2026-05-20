export type ActivityCategory =
  | "Focused work"
  | "Iteration"
  | "Meeting"
  | "Research & admin";

export type ViewId =
  | "workflow"
  | "time-per-ticket"
  | "sprints"
  | "insights";

export interface CategorySlice {
  label: ActivityCategory;
  percent: number;
  hours: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  categories: CategorySlice[];
  hint: string;
  hints: string[];
  avgTaskHours: number;
  capacityRemaining: number;
  specialties: string[];
}

export interface TopTicket {
  key: string;
  hours: number;
  area: string;
}

export interface WorkerTicketRow {
  ticket: string;
  worker: string;
  role: string;
  time: string;
  topCategory: ActivityCategory;
}

export interface SprintRow {
  sprint: string;
  committed: number;
  suggestedNext: number;
  note: string;
}

export interface ClosedTicketRow {
  ticket: string;
  worker: string;
  role: string;
  adjusted: string;
  closed: string;
}

export interface SprintInsight {
  id: string;
  type: "warning" | "opportunity" | "action";
  title: string;
  body: string;
  impact: string;
}

export const TEAM_NAME = "Acme GTM Squad";

export const PM_INSIGHT =
  "Sprint 24 committed 96h across product, sales, marketing & growth; team logged 78h (81% fill-rate). Top initiative: MKT-1847 launch campaign (14.2h).";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "ana",
    name: "Ana Ruiz",
    role: "Product",
    initials: "AR",
    avatarColor: "#00B8A9",
    categories: [
      { label: "Focused work", percent: 38, hours: 60.8 },
      { label: "Iteration", percent: 14, hours: 22.4 },
      { label: "Meeting", percent: 32, hours: 51.2 },
      { label: "Research & admin", percent: 16, hours: 25.6 },
    ],
    hint: "Meeting load is high — protect roadmap deep-work blocks",
    hints: [
      "32% in syncs; batch stakeholder reviews into one weekly slot.",
      "Strong track record on PROD tickets (~4.2h avg).",
    ],
    avgTaskHours: 4.2,
    capacityRemaining: 12,
    specialties: ["roadmap", "spec", "feature", "priorit", "backlog", "user story", "prd"],
  },
  {
    id: "marco",
    name: "Marco Silva",
    role: "Sales",
    initials: "MS",
    avatarColor: "#38bdf8",
    categories: [
      { label: "Focused work", percent: 34, hours: 54.4 },
      { label: "Iteration", percent: 12, hours: 19.2 },
      { label: "Meeting", percent: 38, hours: 60.8 },
      { label: "Research & admin", percent: 16, hours: 25.6 },
    ],
    hint: "Pipeline work balanced; demo prep spikes before quarter-end",
    hints: [
      "Demo + outreach mix looks healthy for a sales lead.",
      "Consider pairing with Laura on enterprise deck refresh.",
    ],
    avgTaskHours: 3.8,
    capacityRemaining: 8,
    specialties: ["demo", "pipeline", "prospect", "deal", "outreach", "crm", "quota", "enterprise"],
  },
  {
    id: "laura",
    name: "Laura Chen",
    role: "Marketing",
    initials: "LC",
    avatarColor: "#6366f1",
    categories: [
      { label: "Focused work", percent: 44, hours: 70.4 },
      { label: "Iteration", percent: 18, hours: 28.8 },
      { label: "Meeting", percent: 22, hours: 35.2 },
      { label: "Research & admin", percent: 16, hours: 25.6 },
    ],
    hint: "Campaign production throughput is strong",
    hints: [
      "Highest focused-work ratio on the squad — good for launch tasks.",
      "Watch iteration creep on multi-stakeholder assets.",
    ],
    avgTaskHours: 5.1,
    capacityRemaining: 14,
    specialties: ["campaign", "landing", "email", "content", "blog", "seo", "brand", "launch"],
  },
  {
    id: "diego",
    name: "Diego Ortiz",
    role: "Growth",
    initials: "DO",
    avatarColor: "#10b981",
    categories: [
      { label: "Focused work", percent: 40, hours: 64 },
      { label: "Iteration", percent: 22, hours: 35.2 },
      { label: "Meeting", percent: 18, hours: 28.8 },
      { label: "Research & admin", percent: 20, hours: 32 },
    ],
    hint: "Experiment iteration is elevated — normal for growth sprints",
    hints: [
      "A/B test cycles drive iteration time; plan buffer in estimates.",
      "Best fit for funnel and activation work.",
    ],
    avgTaskHours: 4.6,
    capacityRemaining: 10,
    specialties: ["experiment", "funnel", "activation", "conversion", "a/b", "analytics", "retention"],
  },
  {
    id: "sofia",
    name: "Sofia Núñez",
    role: "Customer Success",
    initials: "SN",
    avatarColor: "#f59e0b",
    categories: [
      { label: "Focused work", percent: 28, hours: 44.8 },
      { label: "Iteration", percent: 10, hours: 16 },
      { label: "Meeting", percent: 42, hours: 67.2 },
      { label: "Research & admin", percent: 20, hours: 32 },
    ],
    hint: "Client-facing load is high — defer internal docs where possible",
    hints: [
      "42% meetings reflects account coverage; batch QBR prep.",
      "Strong on onboarding playbooks and health-score reviews.",
    ],
    avgTaskHours: 3.4,
    capacityRemaining: 6,
    specialties: ["onboarding", "customer", "support", "qbr", "health", "churn", "success plan"],
  },
  {
    id: "elena",
    name: "Elena Varga",
    role: "Design & Brand",
    initials: "EV",
    avatarColor: "#ec4899",
    categories: [
      { label: "Focused work", percent: 46, hours: 73.6 },
      { label: "Iteration", percent: 24, hours: 38.4 },
      { label: "Meeting", percent: 16, hours: 25.6 },
      { label: "Research & admin", percent: 14, hours: 22.4 },
    ],
    hint: "Revision cycles are expected — scope design reviews early",
    hints: [
      "Iteration time aligns with brand + UI deliverables.",
      "Pair with Laura on campaign visuals; with Ana on product UX.",
    ],
    avgTaskHours: 5.8,
    capacityRemaining: 11,
    specialties: ["design", "ui", "ux", "brand", "visual", "figma", "deck", "illustration"],
  },
];

export const TOP_TICKETS: TopTicket[] = [
  { key: "MKT-1847", hours: 14.2, area: "Marketing" },
  { key: "GRO-1821", hours: 9.8, area: "Growth" },
  { key: "PROD-1799", hours: 7.1, area: "Product" },
  { key: "SAL-1802", hours: 6.5, area: "Sales" },
  { key: "DES-1774", hours: 5.9, area: "Design" },
  { key: "CS-1768", hours: 5.2, area: "Customer Success" },
  { key: "MKT-1755", hours: 4.8, area: "Marketing" },
  { key: "GRO-1742", hours: 4.1, area: "Growth" },
  { key: "PROD-1738", hours: 3.7, area: "Product" },
  { key: "SAL-1729", hours: 3.2, area: "Sales" },
  { key: "DES-1715", hours: 2.9, area: "Design" },
  { key: "CS-1708", hours: 2.4, area: "Customer Success" },
];

export const WORKER_TICKET_ROWS: WorkerTicketRow[] = [
  { ticket: "MKT-1847", worker: "Laura Chen", role: "Marketing", time: "8.4h", topCategory: "Focused work" },
  { ticket: "MKT-1847", worker: "Elena Varga", role: "Design & Brand", time: "5.8h", topCategory: "Iteration" },
  { ticket: "GRO-1821", worker: "Diego Ortiz", role: "Growth", time: "6.2h", topCategory: "Iteration" },
  { ticket: "GRO-1821", worker: "Ana Ruiz", role: "Product", time: "3.6h", topCategory: "Meeting" },
  { ticket: "PROD-1799", worker: "Ana Ruiz", role: "Product", time: "4.5h", topCategory: "Focused work" },
  { ticket: "PROD-1799", worker: "Diego Ortiz", role: "Growth", time: "2.6h", topCategory: "Research & admin" },
  { ticket: "SAL-1802", worker: "Marco Silva", role: "Sales", time: "6.5h", topCategory: "Meeting" },
  { ticket: "DES-1774", worker: "Elena Varga", role: "Design & Brand", time: "5.9h", topCategory: "Focused work" },
  { ticket: "CS-1768", worker: "Sofia Núñez", role: "Customer Success", time: "5.2h", topCategory: "Meeting" },
  { ticket: "MKT-1755", worker: "Laura Chen", role: "Marketing", time: "4.8h", topCategory: "Focused work" },
  { ticket: "GRO-1742", worker: "Diego Ortiz", role: "Growth", time: "4.1h", topCategory: "Iteration" },
  { ticket: "SAL-1729", worker: "Marco Silva", role: "Sales", time: "3.2h", topCategory: "Focused work" },
];

export const SPRINT_ROWS: SprintRow[] = [
  { sprint: "Sprint 24", committed: 96, suggestedNext: 82, note: "Uses recent fill-rate ~81%" },
  { sprint: "Sprint 23", committed: 88, suggestedNext: 78, note: "Actual fill-rate 79%; slight over-commit" },
  { sprint: "Sprint 22", committed: 92, suggestedNext: 85, note: "Default 85% buffer applied" },
  { sprint: "Sprint 21", committed: 84, suggestedNext: 76, note: "Holiday week adjusted" },
];

export const CLOSED_TICKETS: ClosedTicketRow[] = [
  { ticket: "SAL-1802", worker: "Marco Silva", role: "Sales", adjusted: "6.5h", closed: "May 18, 2026" },
  { ticket: "DES-1774", worker: "Elena Varga", role: "Design & Brand", adjusted: "5.9h", closed: "May 17, 2026" },
  { ticket: "CS-1768", worker: "Sofia Núñez", role: "Customer Success", adjusted: "5.2h", closed: "May 16, 2026" },
  { ticket: "MKT-1755", worker: "Laura Chen", role: "Marketing", adjusted: "4.8h", closed: "May 15, 2026" },
  { ticket: "GRO-1742", worker: "Diego Ortiz", role: "Growth", adjusted: "4.1h", closed: "May 14, 2026" },
  { ticket: "PROD-1738", worker: "Ana Ruiz", role: "Product", adjusted: "3.7h", closed: "May 13, 2026" },
  { ticket: "PROD-1729", worker: "Ana Ruiz", role: "Product", adjusted: "3.2h", closed: "May 12, 2026" },
  { ticket: "SAL-1715", worker: "Marco Silva", role: "Sales", adjusted: "2.9h", closed: "May 11, 2026" },
];

export const SPRINT_INSIGHTS: SprintInsight[] = [
  {
    id: "1",
    type: "warning",
    title: "Customer Success at 94% capacity",
    body: "Sofia has only ~6h slack next sprint. Defer internal playbook updates or redistribute one QBR prep block.",
    impact: "Reduces risk of missed renewals",
  },
  {
    id: "2",
    type: "opportunity",
    title: "Marketing has headroom for launch work",
    body: "Laura logged 14h remaining capacity with strong focused-work ratio. Good window for MKT-1900 campaign kickoff.",
    impact: "Aligns with Q2 pipeline goals",
  },
  {
    id: "3",
    type: "action",
    title: "Cross-functional dependency: GRO × MKT",
    body: "Diego's funnel experiment (GRO-1821) needs landing assets from Laura. Sequence design review before sprint commit.",
    impact: "Prevents mid-sprint blocking",
  },
  {
    id: "4",
    type: "action",
    title: "Suggested next sprint commit: 82h",
    body: "Based on 81% fill-rate across product, sales, marketing, growth, CS and design — a planning aid, not a guarantee.",
    impact: "Defensible rollup for leadership",
  },
  {
    id: "5",
    type: "opportunity",
    title: "Sales demo assets aging",
    body: "Marco's deck refresh (SAL-1802) closed under estimate. Consider a follow-up iteration ticket with Elena for visuals.",
    impact: "Improves enterprise win rate",
  },
];

export const TOUR_STEPS = [
  {
    step: 1,
    title: "Where did sprint time go?",
    body: "Drill into tickets and people across every role — defensible rollups, not surveillance.",
    view: "time-per-ticket" as ViewId,
  },
  {
    step: 2,
    title: "Who is overloaded or fragmented?",
    body: "Workflow mix per role shows flow signals for product, sales, marketing and more.",
    view: "workflow" as ViewId,
  },
  {
    step: 3,
    title: "What to plan next sprint?",
    body: "Insights and task assignment use historical pace — a planning aid, not a guarantee.",
    view: "insights" as ViewId,
  },
];

export const FLOW_SCORE = {
  value: 68,
  label: "Stable",
  status: "amber" as const,
};
