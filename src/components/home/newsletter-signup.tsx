"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type NewsletterFormValues = z.infer<typeof newsletterSchema>

export function NewsletterSignup() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Newsletter signup:", data)
    setIsSubmitted(true)
    reset()
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for exclusive updates, styling tips, and early access to new collections.
        </p>

        {isSubmitted ? (
          <div className="bg-gray-50 p-6 rounded-md">
            <p className="text-lg font-medium mb-2">Thank you for subscribing!</p>
            <p className="text-gray-600">
              We've sent a confirmation email to your inbox. Please check your email to complete the subscription
              process.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className={`h-12 ${errors.email ? "border-red-500" : ""}`}
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="h-12">
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
