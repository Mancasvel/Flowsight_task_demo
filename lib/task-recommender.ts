import { TEAM_MEMBERS, type TeamMember } from "./data";

export interface TaskRecommendation {
  assignee: TeamMember;
  estimatedHours: number;
  confidence: "high" | "medium" | "low";
  rationale: string;
  alternate?: TeamMember;
}

const COMPLEXITY_MARKERS = [
  "enterprise",
  "multi",
  "full",
  "complete",
  "end-to-end",
  "launch",
  "strategy",
  "roadmap",
];

const URGENCY_MARKERS = ["urgent", "asap", "quick", "small", "minor", "fix"];

function scoreMember(member: TeamMember, text: string): number {
  const lower = text.toLowerCase();
  let score = 0;

  for (const keyword of member.specialties) {
    if (lower.includes(keyword)) score += 3;
  }

  if (lower.includes(member.role.toLowerCase())) score += 2;

  return score;
}

function estimateHours(text: string, member: TeamMember): number {
  const lower = text.toLowerCase();
  let base = member.avgTaskHours;

  if (COMPLEXITY_MARKERS.some((m) => lower.includes(m))) base *= 1.4;
  if (URGENCY_MARKERS.some((m) => lower.includes(m))) base *= 0.65;
  if (lower.length > 180) base *= 1.15;
  if (lower.length < 60) base *= 0.85;

  return Math.round(base * 2) / 2;
}

function confidenceFromScore(score: number): "high" | "medium" | "low" {
  if (score >= 6) return "high";
  if (score >= 3) return "medium";
  return "low";
}

function buildRationale(member: TeamMember, score: number, hours: number): string {
  if (score >= 6) {
    return `${member.name} (${member.role}) has the strongest specialty match and ~${member.avgTaskHours}h avg on similar work. Estimated ${hours}h based on recent ticket pace.`;
  }
  if (score >= 3) {
    return `${member.name} fits this work by role and has ${member.capacityRemaining}h capacity remaining. Estimate uses their ${member.avgTaskHours}h average task duration.`;
  }
  return `${member.name} has the most available capacity (${member.capacityRemaining}h) on the squad. Estimate is a baseline — refine after scoping.`;
}

export function recommendTaskAssignment(description: string): TaskRecommendation | null {
  const trimmed = description.trim();
  if (trimmed.length < 12) return null;

  const scored = TEAM_MEMBERS.map((member) => ({
    member,
    score: scoreMember(member, trimmed),
  })).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.member.capacityRemaining - a.member.capacityRemaining;
  });

  const primary = scored[0].member;
  const alternate = scored[1]?.score > 0 ? scored[1].member : undefined;
  const hours = estimateHours(trimmed, primary);
  const confidence = confidenceFromScore(scored[0].score);

  return {
    assignee: primary,
    estimatedHours: hours,
    confidence,
    rationale: buildRationale(primary, scored[0].score, hours),
    alternate: alternate && alternate.id !== primary.id ? alternate : undefined,
  };
}
