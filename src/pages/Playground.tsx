export default function Playground() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold">实验 Playground</h1>
      <p className="text-slate-500 dark:text-slate-400 mt-2">
        交互式可视化：Loss/Acc、成功率曲线、超参敏感性（占位，后续接入真实数据）。
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5">
          <div className="text-sm text-slate-600 dark:text-slate-300">训练曲线</div>
          <div className="mt-3 h-48 rounded-xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
        </div>
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5">
          <div className="text-sm text-slate-600 dark:text-slate-300">成功率对比</div>
          <div className="mt-3 h-48 rounded-xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10" />
        </div>
      </div>
    </div>
  )
}
