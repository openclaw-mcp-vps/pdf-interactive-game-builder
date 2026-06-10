export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Creative Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Create Interactive Games<br />
          <span className="text-[#58a6ff]">Inside PDF Documents</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Build fully playable games and interactive apps that run entirely within any PDF viewer — no plugins, no installs. Just open and play.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
        >
          Start Building — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: "Visual Game Builder", desc: "Drag-and-drop interface to design game scenes, logic, and interactions without writing raw PDF code." },
            { title: "Embedded JavaScript Engine", desc: "Games run via Acrobat-compatible JS embedded directly in the PDF — works in Adobe Reader and compatible viewers." },
            { title: "Export & Share Instantly", desc: "Download a single .pdf file. Share by email, upload anywhere. No server required to play." },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited PDF game projects",
              "Full JavaScript game logic editor",
              "Pre-built game templates (quiz, puzzle, adventure)",
              "Custom fonts, images & form fields",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do players need special software to play the games?",
              a: "Players only need a PDF viewer that supports JavaScript, such as Adobe Acrobat Reader (free). No plugins or installs beyond that.",
            },
            {
              q: "What kinds of games can I build?",
              a: "Quizzes, puzzles, text adventures, simple arcade games, interactive stories, and educational simulations — anything achievable with PDF form fields and JS.",
            },
            {
              q: "Can I use this for commercial projects?",
              a: "Yes. Your subscription includes a commercial license. Sell or distribute the PDFs you create however you like.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} PDF Interactive Game Builder. All rights reserved.
      </footer>
    </main>
  );
}
