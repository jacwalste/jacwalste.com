import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";

export async function generateStaticParams() {
  const changelogDir = path.join(process.cwd(), "src/content/changelog");
  
  try {
    const files = await fs.readdir(changelogDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));
    
    return mdxFiles.map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
  } catch {
    return [];
  }
}

export default async function ChangelogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  try {
    const { default: Content, title, date } = await import(
      `@/content/changelog/${slug}.mdx`
    );
    
    return (
      <article className="space-y-8">
        <div className="space-y-4 border-b border-forest-medium pb-6">
          <h1 className="font-mono text-3xl text-amber-cream">{title}</h1>
          <time className="font-mono text-sm text-brown-accent">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <Content />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}

