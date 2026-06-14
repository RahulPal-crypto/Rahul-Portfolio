import { useEffect } from 'react'

export default function Seo({
  title = 'Rahul Pal - Full Stack Developer',
  description = 'Full stack developer portfolio with MERN projects, case studies, skills, achievements, and contact.',
}){
  useEffect(() => {
    document.title = title

    const setMeta = (name, content, attr = 'name') => {
      let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
  }, [title, description])

  return null
}
