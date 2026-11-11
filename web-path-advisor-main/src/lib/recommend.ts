import { EnrichedCourse } from "@/data/courses";

export interface UserPreferences {
  track: string;
  experience: number;
  timeCommitment: number;
  goals: string[];
}

export interface RankedCourse extends EnrichedCourse {
  computedMatch: number;
  matchReasons: string[];
}

const EXPERIENCE_LABELS: Record<number, string> = {
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced",
};

/**
 * Computes a deterministic match score and human-readable reasons
 * from a user's selected experience level, weekly study hours, and goals.
 */
export function rankCourses(
  courses: EnrichedCourse[],
  preferences: UserPreferences
): RankedCourse[] {
  const experience = preferences.experience || 1;
  const timeCommitment = preferences.timeCommitment || 8;
  const goals = Array.isArray(preferences.goals) ? preferences.goals : [];

  return courses
    .map((course) => {
      let score = 70;
      const reasons: string[] = [];

      const expDiff = Math.abs(course.experienceLevel - experience);
      if (expDiff === 0) {
        score += 18;
        reasons.push(`Matches ${EXPERIENCE_LABELS[experience] ?? "your"} experience level`);
      } else if (expDiff === 1) {
        score += 8;
        reasons.push("Accessible step from your current level");
      }

      if (timeCommitment >= course.recommendedWeeklyHours) {
        score += 6;
        reasons.push(`Fits your ${timeCommitment} hrs/week pace`);
      } else {
        score += 2;
      }

      const overlappingGoals = goals.filter((g) => course.goalTags.includes(g));
      if (overlappingGoals.length > 0) {
        score += Math.min(6, overlappingGoals.length * 3);
        reasons.push("Aligned with your selected career goals");
      }

      const computedMatch = Math.min(99, Math.max(72, score));
      return {
        ...course,
        matchPercentage: computedMatch,
        computedMatch,
        matchReasons: reasons.length > 0 ? reasons : ["Core curriculum for your track"],
      };
    })
    .sort((a, b) => b.computedMatch - a.computedMatch);
}
