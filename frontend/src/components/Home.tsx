import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-[1.01]">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-tight italic">
            SKRIBBLE!
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Draw, Guess, Win!</p>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Username</label>
            <input 
              type="text" 
              placeholder="Enter User Name!" 
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-purple-400 focus:bg-white outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-purple-400 focus:bg-white outline-none transition-all"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-200 active:scale-95">
              Login
            </button>
            <Link 
  to="/signup" 
  className="flex-1 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-all active:scale-95 text-center"
>
  Sign Up
</Link>
          </div>

          {/* Divider */}
          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">OR</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 py-3 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-95">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}