import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  related: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("course design contracts", () => {
  it("sums assessment weights to exactly 100 across the whole course", () => {
    const assessments = byType("assessments");
    expect(assessments.length, "no assessments found").toBeGreaterThan(0);
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total, "assessment weights must sum to 100 across the course").toBe(100);
  });

  it("gives every lecture a unique concept", () => {
    const lectures = byType("lectures");
    expect(lectures.length, "no lectures found").toBeGreaterThan(0);
    const concepts = lectures.map((node) => {
      const concept = node.meta?.concept;
      expect(typeof concept, `${node.id} has no concept`).toBe("string");
      expect(String(concept).trim().length, `${node.id} has an empty concept`).toBeGreaterThan(0);
      return concept as string;
    });
    expect(new Set(concepts).size, "two or more lectures share a concept").toBe(concepts.length);
  });

  it("links every case-review session back to its week's lecture", () => {
    const sessions = byType("sessions");
    expect(sessions.length, "no sessions found").toBeGreaterThan(0);
    for (const session of sessions) {
      const week = Number(session.meta?.week);
      expect(Number.isInteger(week), `${session.id} has no numeric week`).toBe(true);
      const lectureId = `lectures/week-${String(week).padStart(2, "0")}`;
      expect(
        session.related,
        `${session.id} does not link back to ${lectureId}`,
      ).toContain(lectureId);
    }
  });
});
