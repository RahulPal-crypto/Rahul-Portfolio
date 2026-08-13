import React from 'react'

export default function ProjectPreview({ project }){
  const [firstTech = 'React', secondTech = 'Node.js', thirdTech = 'MongoDB'] = project.techStack || []

  return (
    <div className="group overflow-hidden rounded-xl border border-slate-800 bg-[#0b0f14] transition-all duration-500 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
      <style>{`
        @keyframes slideInImage {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideInImage 0.8s ease-out forwards;
        }
      `}</style>
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#0b0f14] px-5 py-4">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">{project.category || 'Project'}</span>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-slate-600 transition-all duration-300 group-hover:bg-blue-400" />
          <span className="h-2 w-2 rounded-full bg-slate-600 transition-all duration-300 group-hover:bg-blue-400" />
          <span className="h-2 w-2 rounded-full bg-slate-600 transition-all duration-300 group-hover:bg-blue-400" />
        </div>
      </div>
      {project.image ? (
        <div className="w-full bg-slate-900 relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 animate-slide-in"
          />
        </div>
      ) : (
        <div className="p-5 py-8">
          <div className="h-2 w-24 rounded-full bg-blue-500/60" />
          <div className="mt-4 h-6 max-w-[75%] rounded bg-slate-700/80" />
          <div className="mt-3 h-3 max-w-full rounded bg-slate-800" />
          <div className="mt-2 h-3 w-4/5 rounded bg-slate-800" />
        </div>
      )}
    </div>
  )
}
