import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/kibo-ui/contributions-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const getGitHubContributions = unstable_cache(async () => {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/nadianadeem?y=last`,
  );
  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions;
}, ["github-contributions"]);
