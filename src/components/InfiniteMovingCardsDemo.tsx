'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function InfiniteMovingCardsDemo() {
    return (
        <div 
        className="items-center justify-center flex flex-col relative rounded-md antialiased overflow-hidden bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-[40rem] ">
            <div>
                <h1 className="mt-10 mb-10 font-normal from-neutral-30 to-neutral-400 text-4xl">Hear Our Harmoney: Voices of Success</h1>
            </div>
            <div className="w-full max-w-full">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    className="w-screen"
                />
            </div>
        </div>
    )
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

export default InfiniteMovingCardsDemo