export default function Resume() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold text-center text-primary mb-12">
        Resume
      </h1>
      <div className="flex justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          View Resume
        </a>
      </div>
    </div>
  )
} 