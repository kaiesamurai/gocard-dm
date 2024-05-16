"use client";

import Image from 'next/image';
import React, { useEffect } from 'react'
import { useScaffoldReadContract } from '~~/hooks/scaffold-eth';

const TradingCardInMatch = ({matchId, tokenId, setSelectedAttacker, selectedAttacker, setSelectedAttacked, selectedAttacked} : any) => {

    const { data: image } = useScaffoldReadContract({
        contractName: "MarketClash",
        functionName: "imageMapping",
        args: [tokenId],
      });

      const { data: attackPoints } = useScaffoldReadContract({
        contractName: "MarketClash",
        functionName: "tokenIdAttack",
        args: [tokenId],
      });

      const { data: defensePoints } = useScaffoldReadContract({
        contractName: "MarketClash",
        functionName: "tokenIdDefensePointsInMatch",
        args: [matchId,tokenId],
      });    
    

      useEffect(() => {
       console.log(image, attackPoints, defensePoints);
      },[image, attackPoints, defensePoints])
    

    return (
        <div>
    {image && attackPoints && parseInt(defensePoints?.toString() ?? '') > 0  &&
    
    <>
      <div className="relative w-auto h-auto inline-block">
        <Image src={image} alt="Trading Card" width={200} height={200}
        
        className={selectedAttacker === tokenId ? "static border-4 border-green-500 rounded-lg" : selectedAttacked === tokenId ? "static border-4 border-red-500 rounded-lg" : "static"} onClick={() => 
        {
        setSelectedAttacked(tokenId)  
        setSelectedAttacker(tokenId)
        }} />
        <p className="absolute bottom-3 right-8 text-black text-xl font-bold ">
          {attackPoints.toString()}
        </p>
        <p className="absolute bottom-3 left-8 text-black text-xl font-bold ">
          {defensePoints && defensePoints.toString()}
        </p>
      </div>
    </>
    
    

    }

{image && attackPoints && parseInt(defensePoints?.toString() ?? '') < 1  &&
    
    <>
      <div className="relative w-auto h-auto inline-block">
        <Image src={image} alt="Trading Card" width={200} height={200}
        
        className={"static border-4 grayscale " } />
        <p className="absolute bottom-3 right-8 text-black text-xl font-bold ">
          {attackPoints.toString()}
        </p>
        <p className="absolute bottom-3 left-8 text-black text-xl font-bold ">
          0
        </p>
      </div>
    </>
    
    
  
    }
        
           
        </div>
      )
}

export default TradingCardInMatch