interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

export default function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
      <div className="flex items-center mb-4">
        <svg className="h-8 w-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-slate-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <img src={avatar || "/placeholder.svg"} alt={author} className="h-10 w-10 rounded-full mr-3" />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
