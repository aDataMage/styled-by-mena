"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// Mock data for comments
const initialComments = [
  {
    id: "1",
    author: "Julia Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "May 12, 2025",
    content:
      "This article resonated with me deeply. I've been trying to build a more sustainable wardrobe for the past year, and the cost-per-wear calculation has been eye-opening. Thank you for the thoughtful insights!",
  },
  {
    id: "2",
    author: "Michael Torres",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "May 11, 2025",
    content:
      "I appreciate the practical advice here. Would love to see a follow-up article about how to transition from a fast fashion wardrobe to a more sustainable one without creating more waste in the process.",
  },
]

interface ArticleCommentsProps {
  articleId: string
}

export function ArticleComments({ articleId }: ArticleCommentsProps) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const comment = {
        id: `comment-${Date.now()}`,
        author: "You",
        avatar: "/placeholder.svg?height=100&width=100",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        content: newComment,
      }

      setComments([...comments, comment])
      setNewComment("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div>
      <h2 className="font-serif text-2xl mb-8">Comments ({comments.length})</h2>

      <div className="space-y-8 mb-12">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src={comment.avatar || "/placeholder.svg"} alt={comment.author} fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{comment.author}</span>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-medium mb-4">Leave a Comment</h3>
        <Textarea
          placeholder="Share your thoughts..."
          className="min-h-[120px] mb-4"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleSubmitComment} disabled={isSubmitting || !newComment.trim()}>
          {isSubmitting ? "Submitting..." : "Post Comment"}
        </Button>
        <p className="text-xs text-gray-500 mt-3">
          All comments are moderated and will appear once approved. Please be respectful and constructive.
        </p>
      </div>
    </div>
  )
}
