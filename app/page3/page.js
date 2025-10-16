import Link from "next/link";

export default function Page3() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-sky-200">
      <div className="max-w-lg w-full p-8 rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm border border-white/40 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-indigo-600 tracking-tight">
          🌊 Oldal 3
        </h2>
        <p className="mb-6 text-gray-700 text-lg">
          Ez a harmadik oldal. Innen visszaléphetsz a másodikra vagy a főoldalra.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/page2"
            className="px-5 py-2 rounded-full border border-indigo-400 text-indigo-600 font-medium transition-all duration-300 hover:bg-indigo-100 hover:shadow-md"
          >
            ← 2. oldal
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-full bg-indigo-500 text-white font-medium shadow-md transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg"
          >
            🏡 Főoldal
          </Link>
        </div>
      </div>
    </main>
  );
}
