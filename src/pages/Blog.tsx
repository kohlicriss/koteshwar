import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import { getBlog, blogs } from "@/data/blogs";

const imageModules = import.meta.glob("../assets/blogs/img/**/*.{png,jpg,jpeg,gif,svg}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const imageUrlMap = Object.fromEntries(
  Object.entries(imageModules).flatMap(([key, url]) => {
    const normalized = key.replace(/^\.{1,2}\//, "");
    const entries: Array<[string, string]> = [[normalized, url]];

    if (!normalized.startsWith("/")) {
      entries.push([`/${normalized}`, url]);
    }

    if (normalized.startsWith("assets/")) {
      entries.push([normalized.replace(/^assets\//, ""), url]);
    }

    if (normalized.startsWith("src/")) {
      entries.push([normalized.replace(/^src\//, ""), url]);
    }

    return entries;
  })
);

const resolveBlogImagePath = (src: string) => {
  const normalized = src.replace(/^\.{1,2}\//, "").replace(/^\//, "");
  return (
    imageUrlMap[src] || imageUrlMap[`/${normalized}`] || imageUrlMap[normalized] || imageUrlMap[`assets/${normalized}`] || imageUrlMap[`src/${normalized}`]
  );
};

const renderBlogHtml = (html: string) =>
  html.replace(/<div\s+class="image-placeholder"\s+data-src="([^"]+)"[^>]*>[\s\S]*?<\/div>/gi, (_, src) => {
    const resolved = resolveBlogImagePath(src);
    if (!resolved) {
      return "";
    }
    return `<img src="${resolved}" alt="Blog image" loading="lazy" class="blog-prose-image" />`;
  });

const Blog = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlog(slug) : undefined;

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blogs" className="text-accent underline">Back to all posts</Link>
        </main>
      </div>
    );
  }

  // pick a related post (next in the list, wrapping)
  const idx = blogs.findIndex((b) => b.slug === blog.slug);
  const next = blogs[(idx + 1) % blogs.length];

  const htmlBody = useMemo(() => {
    return blog?.body ? renderBlogHtml(blog.body) : "";
  }, [blog]);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all posts
        </Link>

        {/* Hero */}
        <header className="mb-10 md:mb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            <BookOpen className="w-3.5 h-3.5 text-[hsl(38,92%,55%)]" />
            {blog.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            {blog.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {blog.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {blog.readTime}
            </span>
            <span className="text-border">•</span>
            <span>by Chinnolla Koteshwar</span>
          </div>
        </header>

        {/* Body */}
        <article
          className="blog-prose max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: htmlBody }}
        />

        {/* Up next */}
        <section className="mt-20 pt-10 border-t border-border max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Up next</p>
          <Link
            to={next.status === "external" ? "/blogs" : `/blogs/${next.slug}`}
            className="block group"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[hsl(38,92%,55%)] transition-colors">
              {next.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{next.excerpt}</p>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Blog;