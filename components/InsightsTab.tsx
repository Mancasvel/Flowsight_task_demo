"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Clock,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { SPRINT_INSIGHTS } from "@/lib/data";
import { recommendTaskAssignment } from "@/lib/task-recommender";

const INSIGHT_ICONS = {
  warning: AlertTriangle,
  opportunity: TrendingUp,
  action: Target,
};

const INSIGHT_STYLES = {
  warning: "border-amber-200 bg-amber-50/80 text-amber-900",
  opportunity: "border-emerald-200 bg-emerald-50/80 text-emerald-900",
  action: "border-[#00B8A9]/30 bg-[#00B8A9]/5 text-[#0f172a]",
};

const CONFIDENCE_STYLES = {
  high: "bg-[#00B8A9]/10 text-[#00B8A9]",
  medium: "bg-[#38bdf8]/10 text-[#38bdf8]",
  low: "bg-[#f4f4f5] text-[#71717A]",
};

export function InsightsTab() {
  const [taskDescription, setTaskDescription] = useState("");
  const [submitted, setSubmitted] = useState("");

  const recommendation = useMemo(
    () => (submitted ? recommendTaskAssignment(submitted) : null),
    [submitted],
  );

  const handleRecommend = () => {
    setSubmitted(taskDescription.trim());
  };

  return (
    <div className="animate-fade-in space-y-6">
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-[#18181B]">
            Sprint insights & recommendations
          </h2>
          <p className="text-sm text-[#71717A]">
            Cross-role signals for the next sprint — planning aid, not a guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {SPRINT_INSIGHTS.map((insight) => {
            const Icon = INSIGHT_ICONS[insight.type];
            return (
              <div
                key={insight.id}
                className={`dashboard-card border p-4 ${INSIGHT_STYLES[insight.type]}`}
              >
                <div className="mb-2 flex items-start gap-2">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0" />
                  <h3 className="text-sm font-semibold">{insight.title}</h3>
                </div>
                <p className="text-xs leading-relaxed opacity-90">{insight.body}</p>
                <p className="mt-3 flex items-center gap-1 text-[11px] font-medium opacity-75">
                  <ArrowRight className="h-3 w-3" />
                  {insight.impact}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="dashboard-card p-5">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00B8A9]/10">
            <Sparkles className="h-4 w-4 text-[#00B8A9]" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#18181B]">Assign next task</h2>
            <p className="text-sm text-[#71717A]">
              Describe the upcoming work — we&apos;ll suggest who to assign and how long it should
              take based on role fit and historical pace.
            </p>
          </div>
        </div>

        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="e.g. Prepare a Q2 enterprise launch email campaign with landing page assets and A/B test setup for the signup funnel..."
          rows={4}
          className="w-full resize-none rounded-xl border border-[#e4e4e7] bg-white px-4 py-3 text-sm text-[#18181B] placeholder:text-[#a1a1aa] focus:border-[#00B8A9] focus:outline-none focus:ring-2 focus:ring-[#00B8A9]/20"
        />

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-[#71717A]">
            Uses role specialties, capacity, and avg task duration — not keystroke data.
          </p>
          <button
            type="button"
            onClick={handleRecommend}
            disabled={taskDescription.trim().length < 12}
            className="rounded-lg bg-[#00B8A9] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#00a396] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Get recommendation
          </button>
        </div>

        {submitted && !recommendation && (
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Add a bit more detail (at least a sentence) so we can match role and estimate duration.
          </p>
        )}

        {recommendation && (
          <div className="mt-5 rounded-xl border border-[#00B8A9]/20 bg-gradient-to-br from-[#00B8A9]/5 to-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: recommendation.assignee.avatarColor }}
                >
                  {recommendation.assignee.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                    Recommended assignee
                  </p>
                  <p className="text-lg font-semibold text-[#18181B]">
                    {recommendation.assignee.name}
                  </p>
                  <p className="text-sm text-[#71717A]">{recommendation.assignee.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${CONFIDENCE_STYLES[recommendation.confidence]}`}
                >
                  <UserCheck className="h-3.5 w-3.5" />
                  {recommendation.confidence} confidence
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0f172a]/5 px-3 py-1 text-xs font-semibold text-[#0f172a]">
                  <Clock className="h-3.5 w-3.5" />
                  ~{recommendation.estimatedHours}h estimated
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#71717A]">
              {recommendation.rationale}
            </p>

            {recommendation.alternate && (
              <p className="mt-3 rounded-lg bg-[#fafafa] px-3 py-2 text-xs text-[#71717A]">
                <strong className="text-[#18181B]">Alternate:</strong>{" "}
                {recommendation.alternate.name} ({recommendation.alternate.role}) —{" "}
                {recommendation.alternate.capacityRemaining}h capacity remaining.
              </p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
