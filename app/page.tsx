export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">
          Cyborg Landing Page
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Welcome to the future of technology
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
