import { Routes, Route, Link } from "react-router-dom";
import { Sparkles, Settings } from "lucide-react";
import Home from "./pages/Home";
import Benchmark from "./pages/Benchmark";
import PaperMap from "./pages/PaperMap";
import DataTask from "./pages/DataTask";
import ReproLogs from "./pages/ReproLogs";
import Playground from "./pages/Playground";
import QuickNews from "./pages/QuickNews";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const nav = [
  { name: "首页", to: "/" },
  { name: "Benchmark 榜单", to: "/benchmark" },
  { name: "论文地图", to: "/paper-map" },
  { name: "数据与任务", to: "/data-task" },
  { name: "复现日志", to: "/repro-logs" },
  { name: "工具与Playground", to: "/playground" },
  { name: "领域快讯", to: "/quick-news" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute -inset-1 rounded-xl bg-cyan-500/30 blur-sm" />
              <div className="relative rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-400 p-2 shadow-lg">
                <Sparkles className="w-5 h-5 text-slate-950" />
              </div>
            </div>
            <span className="font-bold tracking-tight text-lg">VLArena</span>
            <span className="text-xs text-slate-400 hidden sm:inline">Vision · Language · Action Lab</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.name} to={n.to} className="text-slate-300 hover:text-white transition-colors">
                {n.name}
              </Link>
            ))}
            <a
              href="#settings"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="设置"
            >
              <Settings className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benchmark" element={<Benchmark />} />
        <Route path="/paper-map" element={<PaperMap />} />
        <Route path="/data-task" element={<DataTask />} />
        <Route path="/repro-logs" element={<ReproLogs />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/quick-news" element={<QuickNews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="border-t border-white/10 py-8 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-400 text-sm">
          <div>© {new Date().getFullYear()} VLArena · Vision · Language · Action Lab</div>
          <div className="flex items-center gap-3">
            <Link className="hover:text-slate-200" to="/benchmark">
              Benchmark 联合榜单
            </Link>
            <a className="hover:text-slate-200" href="#">
              关于
            </a>
            <a className="hover:text-slate-200" href="#">
              反馈
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

