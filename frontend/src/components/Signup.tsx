
import { UserPlus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Create Account
          </h1>
          <p className="text-slate-500 mt-1 font-medium">Join the drawing party!</p>
        </div>

        {/* Form Section */}
        <div className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Username</label>
            <input 
              type="text" 
              placeholder="Enter User Name" 
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-purple-400 focus:bg-white outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-purple-400 focus:bg-white outline-none transition-all"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Re-Type Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-purple-400 focus:bg-white outline-none transition-all"
            />
          </div>

          {/* Signup Button */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-200 active:scale-[0.98] mt-4">
            Create My Account
          </button>

          {/* Back to Login Link */}
          <div className="text-center pt-4">
            <Link 
    to="/" 
    className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors">
    <ArrowLeft size={16} />
    Already have an account? Login
  </Link>
          </div>
        </div>
      </div>
    </div>
  );
}