export default function ReproLogs() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold">复现日志（Repro Logs）</h1>
      <p className="text-slate-500 dark:text-slate-400 mt-2">
        记录各模型的训练/评测要点，支持一键复制命令。
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {[
          { model: 'OpenVLA-7B', cmd: 'accelerate launch finetune.py --model openvla-7b --dataset LIBERO --method lora --lr 2e-5 --bs 32 --epochs 3' },
          { model: 'π₀ baseline', cmd: 'python train.py --exp p0-libero --lr 1e-4 --epochs 10 --seed 42' },
        ].map(item => (
          <div key={item.model} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5">
            <div className="font-semibold">{item.model}</div>
            <pre className="mt-3 text-sm overflow-x-auto rounded-xl border border-black/5 dark:border-white/10 p-3 bg-black/5 dark:bg-white/5">
{item.cmd}
            </pre>
            <button
              onClick={() => navigator.clipboard.writeText(item.cmd)}
              className="mt-3 inline-flex items-center rounded-xl px-3 py-1.5 text-sm border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20"
            >
              复制命令
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
