import Image from "next/image"

interface ArticleAuthorProps {
  author: {
    name: string
    role: string
    image: string
    bio?: string
  }
  showBio?: boolean
}

export function ArticleAuthor({ author, showBio = false }: ArticleAuthorProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <Image src={author.image || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
      </div>
      <div>
        <p className="font-medium">{author.name}</p>
        <p className="text-gray-600 text-sm">{author.role}</p>
        {showBio && author.bio && <p className="text-gray-600 mt-2 text-sm">{author.bio}</p>}
      </div>
    </div>
  )
}
