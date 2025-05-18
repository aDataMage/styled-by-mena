"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])

  const categories = [
    { id: "tops", label: "Tops" },
    { id: "bottoms", label: "Bottoms" },
    { id: "dresses", label: "Dresses" },
    { id: "outerwear", label: "Outerwear" },
    { id: "accessories", label: "Accessories" },
  ]

  const colors = [
    { id: "black", label: "Black", value: "#000000" },
    { id: "white", label: "White", value: "#FFFFFF" },
    { id: "beige", label: "Beige", value: "#F5F5DC" },
    { id: "gray", label: "Gray", value: "#D3D3D3" },
  ]

  const sizes = [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
  ]

  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["categories", "price", "colors", "sizes"]} className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-medium">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category.id}`} />
                  <Label htmlFor={`category-${category.id}`} className="text-sm">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0, 500]}
                max={500}
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger className="text-sm font-medium">Colors</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-3 pt-2">
              {colors.map((color) => (
                <div key={color.id} className="flex flex-col items-center space-y-1">
                  <button
                    className="h-6 w-6 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    style={{ backgroundColor: color.value }}
                    aria-label={`Filter by ${color.label}`}
                  />
                  <span className="text-xs">{color.label}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sizes">
          <AccordionTrigger className="text-sm font-medium">Sizes</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {sizes.map((size) => (
                <div key={size.id} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size.id}`} />
                  <Label htmlFor={`size-${size.id}`} className="text-sm">
                    {size.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
