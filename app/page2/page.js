import Link from "next/link";

export default function Page2() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-green-100 to-teal-200">
      <div className="max-w-lg w-full p-8 rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm border border-white/40 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-emerald-600 tracking-tight">
          🍃 Oldal 2
        </h2>
        <p className="mb-6 text-gray-700 text-lg">
          Ez a második oldal. Innen visszaléphetsz az elsőre, vagy továbbléphetsz a harmadikra.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/page1"
            className="px-5 py-2 rounded-full border border-emerald-400 text-emerald-600 font-medium transition-all duration-300 hover:bg-emerald-100 hover:shadow-md"
          >
            ← 1. oldal
          </Link>
          <Link
            href="/page3"
            className="px-5 py-2 rounded-full bg-emerald-500 text-white font-medium shadow-md transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg"
          >
            3. oldal →
          </Link>
        </div>
      </div>
    </main>
  );
}
