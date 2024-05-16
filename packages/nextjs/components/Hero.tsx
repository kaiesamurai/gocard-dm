import React from 'react'
import { BentoGridComponent } from './BentoGrid'
import BuiltWithComponent from './BuiltWithComponent'
import Link from 'next/link'

const Hero = () => {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-2xl">
      <h1 className="text-5xl font-bold">The Crypto Currency Card Game</h1>
      <p className="py-6">Crypto prices affect the stats of your cards, are the markets in your favour?</p>
      <Link href="/open-pack" className="btn btn-primary">Open a pack of cards</Link>
      <BuiltWithComponent />
    </div>
  </div>
</div>
  )
}

export default Hero


