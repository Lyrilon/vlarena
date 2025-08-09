import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 text-center">
      <h1 className="text-3xl font-bold">页面未找到</h1>
      <p className="text-slate-500 dark:text-slate-400 mt-2">你访问的页面不存在。</p>
      <Link to="/" className="text-cyan-400 hover:underline mt-4 inline-block">
        返回首页
      </Link>
    </div>
  );
}
