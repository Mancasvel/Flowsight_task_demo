"use client";

import { Info } from "lucide-react";
import { SPRINT_ROWS } from "@/lib/data";

export function SprintsTab() {
  return (
    <div className="animate-fade-in">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#18181B]">Sprints & estimates</h2>
          <p className="text-sm text-[#71717A]">
            Committed vs. suggested next hours — a planning aid, not a guarantee.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-[#f4f4f5] bg-[#fafafa] px-3 py-2 text-xs text-[#71717A]">
          <Info className="h-3.5 w-3.5 shrink-0 text-[#00B8A9]" />
          Based on 30-day fill-rate trends
        </div>
      </div>

      <div className="dashboard-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#f4f4f5] bg-[#fafafa]/80 text-left">
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Sprint
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Committed
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Suggested next
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {SPRINT_ROWS.map((row, i) => {
              const fillRate = Math.round((row.suggestedNext / row.committed) * 100);
              const isCurrent = i === 0;
              return (
                <tr
                  key={row.sprint}
                  className={`border-b border-[#f4f4f5] transition hover:bg-[#fafafa] ${
                    isCurrent ? "bg-[#00B8A9]/5" : i % 2 === 0 ? "bg-white" : "bg-[#fafafa]/30"
                  }`}
                >
                  <td className="px-5 py-3.5">
                    <span className="font-semibold text-[#18181B]">{row.sprint}</span>
                    {isCurrent && (
                      <span className="ml-2 rounded-full bg-[#00B8A9]/10 px-2 py-0.5 text-xs font-medium text-[#00B8A9]">
                        Current
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3.5 font-medium text-[#18181B]">{row.committed}h</td>
                  <td className="px-5 py-3.5">
                    <span className="font-semibold text-[#00B8A9]">{row.suggestedNext}h</span>
                    <span className="ml-2 text-xs text-[#71717A]">(~{fillRate}% buffer)</span>
                  </td>
                  <td className="px-5 py-3.5 text-[#71717A]">{row.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
