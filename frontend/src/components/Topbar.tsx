
import { Settings, LogOut, Users, Trophy } from 'lucide-react'; // Optional: npm install lucide-react

export function TopBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between">
      
      {/* Left: Brand & Room Info */}
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 italic cursor-pointer">
          SKRIBBL!
        </h1>
        
        <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
            Room: #GX-99
          </span>
        </div>
      </div>

      {/* Center: Game Stats (Score/Players) */}
      <div className="hidden sm:flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="font-bold text-slate-700">1,240 pts</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-500" />
          <span className="font-bold text-slate-700">5/8 Players</span>
        </div>
      </div>

      {/* Right: User Actions */}
      <div className="flex items-center gap-4">
        {/* User Profile */}
        <div className="flex items-center gap-3 bg-slate-50 p-1 pr-4 rounded-full border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold border-2 border-white shadow-sm">
            C
          </div>
          <span className="text-sm font-bold text-slate-700">Cypher</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 border-l pl-4 border-slate-200">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors" title="Settings">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Leave Game">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}