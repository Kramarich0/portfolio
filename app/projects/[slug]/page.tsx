import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    slug: string;
  };
};

type GitHubRepoData = {
  stars: number;
  forks: number;
  lastUpdated: string;
} | null;

async function getGitHubRepoData(repository: string): Promise<GitHubRepoData> {
  if (!repository) return null;

  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`, {
      headers: {
        Authorization: process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : "",
        "User-Agent": "Kramarich-Portfolio",
      },
      next: { revalidate: 3600 }, // Кэшируем данные на 1 час
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      lastUpdated: data.updated_at ? new Date(data.updated_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }) : "",
    };
  } catch (error) {
    console.error(`Error fetching repo data for ${repository}:`, error);
    return null;
  }
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const redis = Redis.fromEnv();
  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  const githubData = project.repository ? await getGitHubRepoData(project.repository) : null;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} githubData={githubData} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}