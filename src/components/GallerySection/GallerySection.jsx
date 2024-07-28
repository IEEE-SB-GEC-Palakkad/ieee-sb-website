import React from "react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { cn } from "@/lib/utils";


function GallerySection() {
  return (
    <section className="text-black py-4">
      <div className="container mx-auto grid md:grid-cols-[30%_30%_20%_20%] md:grid-rows-[300px_100px_240px] grid-cols-2 grid-rows-[130px_170px_100px_100px] gap-2.5 md:gap-4">
        <GalleryItem imgSrc="/images/gallery/gallery_item_1.jpg" />
        <GalleryItem imgSrc="/images/gallery/gallery_item_2.jpg" />
        <GalleryItem
          imgSrc="/images/gallery/gallery_item_3.jpg"
          className="col-span-2 md:row-span-2"
        />
        <GalleryItem
          imgSrc="/images/gallery/gallery_item_4.jpg"
          className="md:col-span-2 row-span-2"
        />
        <GalleryItem imgSrc="/images/gallery/gallery_item_5.jpg" />
        <GalleryItem imgSrc="/images/gallery/gallery_item_6.jpg" />
      </div>
    </section>
  );
}

function GalleryItem({ className, imgSrc }) {
  return (
    <div
      className={cn(
        "bg-red-300 rounded-sm md:rounded-lg overflow-hidden relative",
        className
      )}
    >
      <img
        className="h-full w-full object-cover"
        src={imgSrc ?? "https://via.placeholder.com/150"}
        alt="image"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
}

export default GallerySection;
