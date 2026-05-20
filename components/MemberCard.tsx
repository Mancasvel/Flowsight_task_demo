"use client";

import type { TeamMember } from "@/lib/data";

const BAR_COLORS: Record<string, string> = {
  "Focused work": "#00B8A9",
  Iteration: "#38bdf8",
  Meeting: "#6366f1",
  "Research & admin": "#d4d4d8",
};

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  const totalHours = member.categories.reduce((sum, c) => sum + c.hours, 0);

  return (
    <div className="dashboard-card p-4 transition hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: member.avatarColor }}
        >
          {member.initials}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-[#18181B]">{member.name}</h3>
            <span className="rounded-full bg-[#f4f4f5] px-2 py-0.5 text-[10px] font-medium text-[#71717A]">
              {member.role}
            </span>
          </div>
          <p className="text-xs text-[#71717A]">
            {totalHours.toFixed(0)}h logged · {member.capacityRemaining}h capacity left
          </p>
        </div>
      </div>

      <div className="mb-4 space-y-2.5">
        <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
          Category mix
        </p>
        {member.categories.map((cat) => (
          <div key={cat.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-medium text-[#18181B]">{cat.label}</span>
              <span className="text-[#71717A]">
                {cat.percent}% · {cat.hours.toFixed(1)}h
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#f4f4f5]">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${cat.percent}%`,
                  backgroundColor: BAR_COLORS[cat.label] ?? "#00B8A9",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#f4f4f5] bg-[#fafafa]/80 p-3">
        <p className="mb-2 text-xs font-semibold text-[#00B8A9]">How to improve</p>
        <ul className="space-y-1.5">
          <li className="flex gap-2 text-xs leading-relaxed text-[#71717A]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00B8A9]" />
            {member.hint}
          </li>
          {member.hints.map((hint) => (
            <li key={hint} className="flex gap-2 text-xs leading-relaxed text-[#71717A]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d4d4d8]" />
              {hint}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
