"use client";

import { useState } from "react";
import type { ViewId } from "@/lib/data";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { TeamFlowScore } from "./TeamFlowScore";
import { PMBanner } from "./PMBanner";
import { WorkflowTab } from "./WorkflowTab";
import { TimePerTicketTab } from "./TimePerTicketTab";
import { SprintsTab } from "./SprintsTab";
import { InsightsTab } from "./InsightsTab";
import { TourCallout } from "./TourCallout";
import { ExportModal } from "./ExportModal";

export function TaskFocusDashboard() {
  const [activeView, setActiveView] = useState<ViewId>("workflow");
  const [tourStep, setTourStep] = useState(0);
  const [showTour, setShowTour] = useState(true);
  const [exportOpen, setExportOpen] = useState(false);

  const showSummaryWidgets = activeView !== "insights";

  return (
    <>
      <div className="flex h-full w-full overflow-hidden bg-white">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto px-6 py-6 lg:px-10 lg:py-8">
          <Header />
          {showSummaryWidgets && (
            <>
              <TeamFlowScore onExport={() => setExportOpen(true)} />
              <PMBanner />
            </>
          )}

          <div className="flex-1">
            {activeView === "workflow" && <WorkflowTab />}
            {activeView === "time-per-ticket" && <TimePerTicketTab />}
            {activeView === "sprints" && <SprintsTab />}
            {activeView === "insights" && <InsightsTab />}
          </div>
        </div>
      </div>

      {showTour && (
        <TourCallout
          currentStep={tourStep}
          onStepChange={setTourStep}
          onNavigate={setActiveView}
          onDismiss={() => setShowTour(false)}
        />
      )}

      <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} />
    </>
  );
}
