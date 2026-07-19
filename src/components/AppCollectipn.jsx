import React, { useState } from "react"
import { projects } from "../data/projects"

const AppCollection = () => {
  const [filter, setFilter] = useState("all")

  return (
    <section id="projects" className="app-collection">
      <h2 className="section-title">App Collection</h2>
      <p className="section-subtitle">
        {projects.length}+ production-style apps built for practice & showcase
      </p>

      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            {p.isNew && <span className="badge-new">NEW</span>}
            <div className="project-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a href={p.repo} target="_blank" rel="noreferrer" className="repo-link">
              View on GitHub ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AppCollection
