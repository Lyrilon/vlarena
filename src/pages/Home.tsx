import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Cpu, LineChart, Blocks, FlaskConical, Newspaper } from "lucide-react";

export default function Home() {
  const [query, setQuery] = useState("");

  const features = [
    {
      title: "VLA Benchmark 联合榜单",
      desc: "综合对比各类 VLA 模型在多项基准（LIBERO / BRIDGE / CALVIN / RT-X 等）上的成功率表现，点击进入查看详细榜单与分析。",
      to: "/benchmark",
      icon: <LineChart className="w-6 h-6" />,
      cta: "查看榜单",
    },
    {
      title: "论文地图（Paper Atlas）",
      desc: "按主题浏览：Policy Learning、Grounding、Planning、RAG for VLA、Preference Alignment、Open-World Generalization。",
      to: "/paper-map",
      icon: <BookOpen className="w-6 h-6" />,
      cta: "开始浏览",
    },
    {
      title: "数据与任务（Datasets & Tasks）",
      desc: "LIBERO / BRIDGE / CALVIN / RT-X / Open-X 等常用套件的梳理与链接，附带下载与复现实用建议。",
      to: "/data-task",
      icon: <Blocks className="w-6 h-6" />,
      cta: "查看清单",
    },
    {
      title: "复现日志（Repro Logs）",
      desc: "OpenVLA / π₀ / SpatialVLA / CoT-VLA 等模型的训练与评测记录，可一键复制命令与配置。",
      to: "/repro-logs",
      icon: <Cpu className="w-6 h-6" />,
      cta: "打开日志",
    },
    {
      title: "实验 Playground",
      desc: "交互式可视化：Loss/Acc 曲线、成功率曲线、超参敏感性；支持快速对比与导出。",
      to: "/playground",
      icon: <FlaskConical className="w-6 h-6" />,
      cta: "进入实验台",
    },
    {
      title: "领域快讯",
      desc: "收集 VLA / 机器人学习 方向近期论文与项目动态（可选接入 RSS / GitHub Trending）。",
      to: "/quick-news",
      icon: <Newspaper className="w-6 h-6" />,
      cta: "看看最新",
    },
  ];

  const quickLinks = [
    { name: "OpenVLA", href: "https://github.com/openvla/openvla" },
    { name: "π₀ (pi-zero)", href: "https://pi0.cs.berkeley.edu/" },
    { name: "LIBERO", href: "https://lifelong-robot-learning.github.io/libero/" },
    { name: "BRIDGE", href: "https://rail-berkeley.github.io/bridge_data/" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.20),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(129,140,248,0.20),transparent_45%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                交互式 VLA 学习与探索平台
              </h1>
              <p className="mt-4 text-slate-300 text-lg">
                聚焦 Vision-Language-Action 模型的系统化学习与复现：
                榜单、论文、数据、实验与可视化，一站式集成。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/benchmark"
                  className="group inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 hover:bg-cyan-400/25 transition"
                >
                  <span>Benchmark 联合榜单</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="#papers"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <span>论文地图</span>
                </a>
              </div>

              {/* Search */}
              <div className="mt-8">
                <label className="text-sm text-slate-400">站内搜索（模型 / 论文 / 实验）</label>
                <div className="mt-2 flex gap-2">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="例如：OpenVLA、π₀、SpatialVLA、RAG"
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400/40"
                  />
                  <button
                    onClick={() => alert(`搜索：${query || "（空）"}`)}
                    className="rounded-2xl px-4 py-2 bg-indigo-500/20 border border-indigo-400/40 hover:bg-indigo-400/25"
                  >
                    搜索
                  </button>
                </div>
              </div>
            </div>

            {/* Right showcase */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                <div className="text-sm text-slate-300">快速入口</div>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {features.map((f) => (
                    <Link
                      key={f.title}
                      to={f.to}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10">{f.icon}</div>
                        <div className="font-semibold leading-tight">{f.title}</div>
                      </div>
                      <p className="mt-2 text-xs text-slate-400 line-clamp-2">{f.desc}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300">
                        {f.cta} <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="opacity-80">常用直达：</span>
            {quickLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Papers */}
      <section id="papers" className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">论文地图</h2>
            <p className="text-slate-400 mt-1">按主题分区，点击进入子页（可后续补全）。</p>
          </div>
          <Link to="/paper-map" className="text-sm text-cyan-300 hover:underline">
            全部文章
          </Link>
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Policy Learning",
            "Grounding & Segmentation",
            "Planning & CoT",
            "RAG for VLA",
            "Preference Alignment",
            "Open-World Generalization",
          ].map((t) => (
            <a
              key={t}
              href="#"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <div className="font-semibold">{t}</div>
              </div>
              <p className="text-sm text-slate-400 mt-2">精选论文与要点速览、复现建议与开源代码链接。</p>
            </a>
          ))}
        </div>
      </section>

      {/* Datasets */}
      <section id="datasets" className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">数据与任务</h2>
        <p className="text-slate-400 mt-1">常见基准与套件一览，附复现建议。</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "LIBERO",
            "BRIDGE",
            "CALVIN",
            "RT-X",
            "Open-X",
            "RLAIF / Human Data",
          ].map((d) => (
            <div key={d} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">{d}</div>
              <p className="text-sm text-slate-400 mt-2">
                数据概况、下载链接、训练脚本与常见坑位记录（待完善）。
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Repro logs */}
      <section id="repro" className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">复现日志</h2>
        <p className="text-slate-400 mt-1">记录训练与评测过程的关键细节，支持命令拷贝。</p>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <code className="block text-sm text-slate-200 whitespace-pre-wrap">
            $ accelerate launch finetune.py --model openvla-7b --dataset LIBERO --method lora --lr 2e-5 --bs 32 --epochs 3
          </code>
        </div>
      </section>

      {/* Tools & Playground */}
      <section id="tools" className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">实验 Playground</h2>
        <p className="text-slate-400 mt-1">曲线可视化、对比、导出（后续接入）。</p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-slate-300">训练曲线</div>
            <div className="mt-2 h-40 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-white/10" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-slate-300">成功率对比</div>
            <div className="mt-2 h-40 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-white/10" />
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">领域快讯</h2>
        <p className="text-slate-400 mt-1">近期值得关注的论文 / 项目（可接入 RSS/爬虫）。</p>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li>· 提示：此处可自动抓取 arXiv / GitHub Trending / 会议公告。</li>
          <li>· 支持关键词过滤与一键收藏到“复现日志”。</li>
        </ul>
      </section>
    </div>
  );
}

