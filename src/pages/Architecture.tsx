import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, Maximize2 } from "lucide-react";
import Header from "@/components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import archProduction from "@/assets/img/Architecture/ProductionGrade.jpeg";
import archEcommerce from "@/assets/img/Architecture/ecommerce.svg";
import archNotification from "@/assets/img/Architecture/Notification.svg";
import archDeepAgents from "@/assets/img/Architecture/Deepagents.svg";
import archKafka from "@/assets/img/Kafka.png";
import archRedis from "@/assets/img/Redis.png";
import archSecurity from "@/assets/img/Securoty.png";

gsap.registerPlugin(ScrollTrigger);

type Slide = {
  src: string;
  title: string;
  caption: string;
  description: string;
};

const slides: Slide[] = [
  {
    src: archProduction,
    title: "Production-Grade Architecture",
    caption: "Go Gateway · Python Orchestrator · Java Resolver · pgvector",
    description:
      "Four purpose-built layers: a Go gateway for concurrent ingress, a Python LangGraph orchestrator, a Java RAG resolver backed by pgvector, and gRPC stitching it all together.",
  },
  {
    src: archEcommerce,
    title: "E-commerce Platform with Microservices",
    caption: "Istio · gRPC · Kafka · Redis · Elasticsearch",
    description:
      "Polyglot microservices for catalog, cart, pricing, inventory, orders and notifications — wired through Istio, with gRPC for sync and Kafka for async eventing.",
  },
  {
    src: archDeepAgents,
    title: "Deep Learning Agents for Intelligent Decision-Making",
    caption: "Neural Networks · Reinforcement Learning · Decision Trees",
    description:
      "Advanced AI agents utilizing deep neural networks, reinforcement learning algorithms, and decision tree models for autonomous and intelligent decision-making processes.",
  },
  {
    src: archNotification,
    title: "Notification Microservice with SSE, Redis, and Kafka",
    caption: "Streams · Consumer Groups · SSE · WebSockets",
    description:
      "Persistent message streams feed a consumer group of replicas. Cache stores connection metadata so messages are routed to the exact SSE/WebSocket consumer that owns the user.",
  },
  {
    src: archKafka,
    title: "Event Streaming with Kafka",
    caption: "Topics · Partitions · Consumer Groups · Exactly-Once",
    description:
      "How I model topics, partitions and consumer groups for high-throughput event streaming with replay safety and exactly-once semantics.",
  },
  {
    src: archRedis,
    title: "Distributed Caching with Redis",
    caption: "Cluster · Sharding · Pub/Sub · Streams",
    description:
      "Redis as the hot path — sharded clusters for cache, pub/sub for fan-out, and streams for durable consumer-group semantics.",
  },
  {
    src: archSecurity,
    title: "Zero-Trust Security Framework",
    caption: "mTLS · OAuth2 · Policy · Secrets Rotation",
    description:
      "Every service authenticates every request. mTLS between pods, OAuth2 at the edge, policy via OPA, and short-lived rotated secrets.",
  },
];

const Architecture = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Slide | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const setup = () => {
        const distance = track.scrollWidth - window.innerWidth;
        if (distance <= 0) return;

        gsap.to(track, {
          x: -distance,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1.5,
            start: "top top",
            end: () => `+=${distance}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });
      };

      setup();
      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, section);

    return () => ctx.revert();
  }, []);

  // Disable horizontal pin on small screens — use natural vertical stack instead
  const isSmall = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      {/* progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
        <div
          ref={progressRef}
          className="h-full w-0 bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)]"
        />
      </div>

      {/* Intro */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
          System Design
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
          Modern System Designs,{" "}
          <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent italic font-serif">
            built for scale
          </span>{" "}
          & speed.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Scroll horizontally to explore the core infrastructures I've designed — from agentic AI gateways to real-time notification meshes. Click any diagram to zoom in.
        </p>
      </section>

      {/* Horizontal pinned scroll (desktop) */}
      {!isSmall && (
        <section
          ref={sectionRef}
          className="hidden md:block relative h-screen overflow-hidden bg-gradient-to-b from-background via-background to-slate-900/20"
        >
          <div
            ref={trackRef}
            className="flex items-center h-full pl-[10vw] pr-[5vw] gap-[5vw] will-change-transform"
          >
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(s)}
                className="group relative shrink-0 rounded-3xl border border-border bg-card overflow-hidden cursor-zoom-in hover:border-[hsl(38,92%,55%)]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_hsl(262,83%,58%,0.4)]"
                style={{ width: "min(90vw, 1100px)", height: "78vh" }}
              >
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-medium tracking-wide">
                    {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute top-5 right-5 z-10 p-2 rounded-full bg-background/70 backdrop-blur border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <img
                  src={s.src}
                  alt={s.title}
                  className="w-full h-full object-contain bg-[hsl(220,15%,8%)] p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/95 to-transparent">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1.5">{s.title}</h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-[hsl(38,92%,55%)] font-semibold mb-2">
                    {s.caption}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {s.description}
                  </p>
                </div>
              </button>
            ))}

            {/* Outro card */}
            <div
              className="shrink-0 flex flex-col justify-center gap-5 px-8"
              style={{ width: "min(70vw, 600px)" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Want the{" "}
                <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent">
                  full story
                </span>
                ?
              </h2>
              <p className="text-muted-foreground">
                Each diagram has a deep-dive blog post — Kafka, Redis Pub/Sub, SSE notifications and more. Head over to the blog floor.
              </p>
              <Link
                to="/blogs"
                className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Read the blogs
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Mobile vertical fallback */}
      <section className="md:hidden max-w-7xl mx-auto px-4 pb-16 space-y-6">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActive(s)}
            className="block w-full text-left rounded-2xl border border-border bg-card overflow-hidden"
          >
            <div className="bg-[hsl(220,15%,8%)] p-3">
              <img src={s.src} alt={s.title} className="w-full h-auto object-contain rounded-xl" />
            </div>
            <div className="p-5">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold mt-1">{s.title}</h3>
              <p className="text-xs text-[hsl(38,92%,55%)] font-semibold tracking-wider mt-1">{s.caption}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.description}</p>
            </div>
          </button>
        ))}
      </section>

      {/* Fullscreen modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-7xl w-full max-h-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.title} className="max-w-full max-h-[80vh] object-contain rounded-xl" />
            <div className="text-center">
              <h3 className="text-xl font-bold">{active.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Architecture;