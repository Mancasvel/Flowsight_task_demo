"use client";

import type { ViewId } from "@/lib/data";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { TeamFlowScore } from "./TeamFlowScore";
import { PMBanner } from "./PMBanner";
import { WorkflowTab } from "./WorkflowTab";
import { TimePerTicketTab } from "./TimePerTicketTab";
import { ClosedTicketsTab } from "./ClosedTicketsTab";
import { SprintsTab } from "./SprintsTab";
import { InsightsTab } from "./InsightsTab";

function ArtboardFrame({
  label,
  activeView,
  children,
  showWidgets = true,
}: {
  label: string;
  activeView: ViewId;
  children: React.ReactNode;
  showWidgets?: boolean;
}) {
  return (
    <div className="w-[1440px] shrink-0">
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-[#71717A]">
        {label}
      </p>
      <div className="flex min-h-[860px] overflow-hidden rounded-2xl border border-[#d4d4d8] bg-white shadow-lg">
        <Sidebar activeView={activeView} onViewChange={() => {}} />
        <div className="flex-1 p-8">
          <Header />
          {showWidgets && (
            <>
              <TeamFlowScore onExport={() => {}} />
              <PMBanner />
            </>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export function TaskFocusArtboards() {
  return (
    <div className="overflow-x-auto px-6">
      <div className="mb-6 text-center">
        <h1 className="text-xl font-semibold text-[#0f172a]">FlowSight Tasks — Artboard variants</h1>
        <p className="mt-1 text-sm text-[#71717A]">
          All five workspace views · 1440×900 frames · cross-functional GTM squad
        </p>
      </div>
      <div className="flex gap-8 pb-8">
        <ArtboardFrame label="Workflow" activeView="workflow">
          <WorkflowTab />
        </ArtboardFrame>
        <ArtboardFrame label="Time per ticket" activeView="time-per-ticket">
          <TimePerTicketTab />
        </ArtboardFrame>
        <ArtboardFrame label="Closed tickets" activeView="closed-tickets">
          <ClosedTicketsTab />
        </ArtboardFrame>
        <ArtboardFrame label="Sprints & estimates" activeView="sprints">
          <SprintsTab />
        </ArtboardFrame>
        <ArtboardFrame label="Insights & assignment" activeView="insights" showWidgets={false}>
          <InsightsTab />
        </ArtboardFrame>
      </div>
    </div>
  );
}
