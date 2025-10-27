import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

interface ChangelogEntry {
  slug: string;
  title: string;
  date: string;
}

async function getChangelogEntries(): Promise<ChangelogEntry[]> {
  const changelogDir = path.join(process.cwd(), "src/content/changelog");
  
  try {
    const files = await fs.readdir(changelogDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));
    
    const entries = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(".mdx", "");
        const content = await fs.readFile(
          path.join(changelogDir, file),
          "utf8"
        );
        
        const titleMatch = content.match(/export const title = "(.+)"/);
        const dateMatch = content.match(/export const date = "(.+)"/);
        
        return {
          slug,
          title: titleMatch ? titleMatch[1] : slug,
          date: dateMatch ? dateMatch[1] : "Unknown date",
        };
      })
    );
    
    return entries.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    return [];
  }
}

export default async function Changelog() {
  const entries = await getChangelogEntries();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl text-amber-cream">changelog</h1>
        <p className="text-lg text-amber-warm">
          a living build log — short reflections on what i&apos;m making
        </p>
      </div>

      <div className="space-y-4">
        {entries.length === 0 ? (
          <p className="text-amber-warm">
            no entries yet — check back soon!
          </p>
        ) : (
          entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/changelog/${entry.slug}`}
              className="block rounded-lg border border-forest-medium bg-forest-dark/30 p-6 backdrop-blur-sm transition-all hover:border-terminal-green/50 hover:bg-forest-dark/50"
            >
              <div className="space-y-2">
                <h2 className="font-mono text-xl text-amber-cream">
                  {entry.title}
                </h2>
                <p className="font-mono text-sm text-brown-accent">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

