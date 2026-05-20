"use client";

import {
  GitBranch,
  Lightbulb,
  Timer,
  Users,
} from "lucide-react";
import type { ViewId } from "@/lib/data";

const NAV_ITEMS: {
  id: ViewId;
  label: string;
  description: string;
  icon: typeof Timer;
}[] = [
  {
    id: "workflow",
    label: "Workflow",
    description: "Category mix by role",
    icon: Users,
  },
  {
    id: "time-per-ticket",
    label: "Time per ticket",
    description: "Ticket & worker drill-down",
    icon: Timer,
  },
  {
    id: "sprints",
    label: "Sprints & estimates",
    description: "Commit vs. suggested hours",
    icon: GitBranch,
  },
  {
    id: "insights",
    label: "Insights & assignment",
    description: "Sprint recommendations",
    icon: Lightbulb,
  },
];

interface SidebarProps {
  activeView: ViewId;
  onViewChange: (view: ViewId) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="flex h-full w-[248px] shrink-0 flex-col border-r border-[#f4f4f5] bg-[#fafafa]/60">
      <div className="border-b border-[#f4f4f5] px-5 py-5">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-[#0f172a]">
            Flow<span className="text-[#00B8A9]">Sight</span>
          </span>
          <span className="rounded-md bg-[#00B8A9]/10 px-2 py-0.5 text-[10px] font-semibold text-[#00B8A9]">
            Tasks
          </span>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-[#71717A]">
          Cross-functional squad workspace
        </p>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-[#71717A]">
          Views
        </p>
        {NAV_ITEMS.map(({ id, label, description, icon: Icon }) => {
          const isActive = activeView === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onViewChange(id)}
              className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                isActive
                  ? "bg-[#00B8A9] text-white shadow-sm shadow-[#00B8A9]/20"
                  : "text-[#18181B] hover:bg-white hover:shadow-sm"
              }`}
            >
              <Icon
                className={`mt-0.5 h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-[#71717A]"}`}
              />
              <span>
                <span className="block text-sm font-medium">{label}</span>
                <span
                  className={`block text-[11px] ${isActive ? "text-white/80" : "text-[#71717A]"}`}
                >
                  {description}
                </span>
              </span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-[#f4f4f5] p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#71717A]">
          Analysis window
        </p>
        <p className="mt-1 text-sm font-medium text-[#18181B]">Last 30 days</p>
        <span className="mt-2 inline-flex rounded-full bg-[#00B8A9]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#00B8A9]">
          Auto rollup
        </span>
      </div>
    </aside>
  );
}

export { NAV_ITEMS };
