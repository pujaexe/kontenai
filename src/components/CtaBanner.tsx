import { SITE } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { CheckCircle, Sparkles, CalendarDays } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-32 px-6 md:px-14 relative z-10 flex justify-center overflow-hidden">
      
      {/* Background Grid & Glowing Orbs */}
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-p1/20 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-rose/15 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] left-[60%] w-[350px] h-[350px] bg-blue-300/20 rounded-full blur-[90px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="w-full max-w-[1080px] bg-white rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden ring-1 ring-slate-900/5">
        
        {/* Soft Background Gradient for the card */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[40px]">
          <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-p1/5 rounded-full blur-[80px]" />
          <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-rose/5 rounded-full blur-[100px]" />
        </div>

        {/* Left Content */}
        <div className="flex-1 relative z-10 max-w-[480px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white ring-1 ring-slate-900/5 shadow-sm text-[11px] font-bold text-slate-500 mb-8">
            Start automating today
          </div>
          
          <h2 className="text-[40px] md:text-[48px] font-extrabold text-ink leading-[1.05] tracking-tight mb-6">
            Content runs itself.<br />You focus on business.
          </h2>
          
          <p className="text-[16px] text-muted leading-relaxed mb-10">
            Join properties and businesses across Bali that have trusted their content to our AI system.
          </p>
          
          <Button 
            asChild 
            className="rounded-full h-12 px-8 text-[14px] font-bold bg-[#6B72FF] hover:bg-[#5A63FF] text-white shadow-glow-p1"
          >
            <a href={SITE.wa}>
              Start Free Consultation →
            </a>
          </Button>
        </div>

        {/* Right Graphics */}
        <div className="flex-1 relative w-full max-w-[500px] h-[350px] flex items-center justify-center">
          
          {/* Back Card (Tilted) - Content Calendar */}
          <div className="absolute top-8 left-6 w-[280px] bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-sm ring-1 ring-slate-900/5 -rotate-6 transform transition-transform hover:-rotate-12 duration-500">
            <div className="flex items-center gap-2 mb-4">
              <CalendarDays size={14} className="text-p1" />
              <h4 className="text-[12px] font-bold text-slate-500">Content Calendar</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-rose-100 flex items-center justify-center text-[10px]">IG</div>
                <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                <div className="w-12 h-2 bg-emerald-100 rounded-full" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-[10px] text-white">TK</div>
                <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                <div className="w-12 h-2 bg-emerald-100 rounded-full" />
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center text-[10px]">FB</div>
                <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
              </div>
            </div>
          </div>

          {/* Front Card (Main) - AI Agent UI */}
          <div className="relative z-10 w-[360px] bg-white rounded-3xl p-6 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-900/5 transform transition-transform hover:-translate-y-2 duration-500">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-[13px] font-extrabold text-ink">AI Agent Active</h4>
            </div>
            
            <div className="space-y-4">
              {/* Message from AI */}
              <div className="bg-slate-50 rounded-2xl p-4 text-[12px] text-slate-600 border border-slate-100 relative">
                <Sparkles size={16} className="absolute -top-2 -right-2 text-p1 bg-white rounded-full" />
                <div className="font-semibold text-p1 mb-1">Content Agent</div>
                Drafting a carousel post based on today's local trending topic...
              </div>
              
              {/* Status List */}
              <div className="flex flex-col gap-2.5 px-2">
                <div className="flex items-center gap-2.5 text-[12px] text-slate-600 font-medium">
                  <CheckCircle size={15} className="text-emerald-500" /> Topic research complete
                </div>
                <div className="flex items-center gap-2.5 text-[12px] text-slate-600 font-medium">
                  <CheckCircle size={15} className="text-emerald-500" /> Caption written
                </div>
                <div className="flex items-center gap-2.5 text-[12px] text-slate-400 font-medium">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-200 border-t-p1 animate-spin" /> Designing graphics...
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
