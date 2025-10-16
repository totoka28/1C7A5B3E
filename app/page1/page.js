import Link from "next/link";

export default function Page1() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-red-200">
      <div className="max-w-lg w-full p-8 rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm border border-white/40 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-rose-600 tracking-tight">
          🌸 Oldal 1
        </h2>
        <p className="mb-6 text-gray-700 text-lg">
          Ez az első oldal. Innen továbbléphetsz a főoldalra vagy a második oldalra.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-5 py-2 rounded-full border border-rose-400 text-rose-600 font-medium transition-all duration-300 hover:bg-rose-100 hover:shadow-md"
          >
            Főoldal
          </Link>
          <Link
            href="/page2"
            className="px-5 py-2 rounded-full bg-rose-500 text-white font-medium shadow-md transition-all duration-300 hover:bg-rose-600 hover:shadow-lg"
          >
            2. oldal →
          </Link>
        </div>
      </div>
    </main>
  );
}
