"use client";

import { TEAM_MEMBERS } from "@/lib/data";
import { MemberCard } from "./MemberCard";

export function WorkflowTab() {
  return (
    <div className="animate-fade-in">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#18181B]">Team workflow mix</h2>
          <p className="text-sm text-[#71717A]">
            Per-role activity categories — product, sales, marketing, growth, CS and design.
          </p>
        </div>
        <span className="rounded-full bg-[#f4f4f5] px-3 py-1 text-xs font-medium text-[#71717A]">
          {TEAM_MEMBERS.length} roles
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
