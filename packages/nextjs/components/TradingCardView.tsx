"use client";

import Image from 'next/image';
import React, { useEffect } from 'react'
import { useScaffoldReadContract } from '~~/hooks/scaffold-eth';

const TradingCardView = ({id} : any) => {

    const { data: image } = useScaffoldReadContract({
        contractName: "MarketClash",
        functionName: "imageMapping",
        args: [id],
      });

      const { data: attackPoints } = useScaffoldReadContract({
        contractName: "MarketClash",
        functionName: "tokenIdAttack",
        args: [id],
      });
      
      const { data: defensePoints } = useScaffoldReadContract({
        contractName: "MarketClash",
        functionName: "tokenIdDefense",
        args: [id],
      });    
    

      useEffect(() => {
       console.log(image, attackPoints, defensePoints);
      },[image, attackPoints, defensePoints])
    

  return (
    <div>
{image && attackPoints && defensePoints ?

<>
  <div className="relative w-auto h-auto inline-block">
    <Image src={image} alt="Trading Card" width={200} height={200} className="static" />
    <p className="absolute bottom-3 right-8 text-black text-xl font-bold ">
      {attackPoints.toString()}
    </p>
    <p className="absolute bottom-3 left-8 text-black text-xl font-bold ">
      {defensePoints.toString()}
    </p>
  </div>
</>




  : <div>Loading</div>
}
       
    </div>
  )
}

export default TradingCardView