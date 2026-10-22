import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600">
        The page you are looking for does not exist.
      </p>
      <Link
        className="mt-6 rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700"
        to="/"
      >
        Return home
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
