'use client';

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import MatchComponent from '~~/components/MatchComponent';
import { useScaffoldReadContract } from '~~/hooks/scaffold-eth';


const Match = () => {

    const searchParams = useSearchParams()
 
    const challenger = searchParams.get('challenger')
    const challenged = searchParams.get('challenged')

    const { data: matchId } = useScaffoldReadContract({
        contractName: "MarketClash",
        functionName: "matchId",
        args: [challenger as any, challenged as any],
      });

    useEffect(() => {

    
    console.log(challenger, challenged, matchId?.toString())
    }, [challenger, challenged, matchId])

  return (
    <div>
       {matchId ? <MatchComponent challenger={challenger} challenged={challenged} matchId={parseInt(matchId.toString())} /> : <div>loading...</div>}
    </div>
  )
}

export default Match