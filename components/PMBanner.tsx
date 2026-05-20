"use client";

import { Lightbulb, TrendingUp } from "lucide-react";
import { PM_INSIGHT } from "@/lib/data";

export function PMBanner() {
  return (
    <div className="dashboard-card mb-5 border-l-4 border-l-[#38bdf8] p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#38bdf8]/10">
          <TrendingUp className="h-4 w-4 text-[#38bdf8]" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#71717A]">
            PM weekly review
          </p>
          <p className="mt-1 text-sm font-medium leading-relaxed text-[#18181B]">{PM_INSIGHT}</p>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-[#71717A]">
            <Lightbulb className="h-3.5 w-3.5 text-[#00B8A9]" />
            Defensible rollups for stakeholder updates — no screen captures or keystroke data.
          </p>
        </div>
      </div>
    </div>
  );
}
