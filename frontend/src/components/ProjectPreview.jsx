import React from 'react'

export default function ProjectPreview({ project, compact = false }){
  const category = project.category || 'Full Stack'
  const bars = project.techStack || ['React', 'Node', 'MongoDB']

  return (
    <div className={`project-preview ${compact ? 'compact' : ''}`} aria-hidden="true">
      <div className="preview-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-body">
        <div className="preview-sidebar">
          <i />
          <i />
          <i />
        </div>
        <div className="preview-main">
          <div className="preview-chip">{category}</div>
          <div className="preview-title" />
          <div className="preview-grid">
            {bars.slice(0, 4).map((bar, index) => (
              <div key={`${bar}-${index}`} style={{ '--fill': `${54 + index * 10}%` }}>
                <span />
              </div>
            ))}
          </div>
          <div className="preview-footer">
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}
