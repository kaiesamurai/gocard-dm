"use client";

import React, { useEffect } from 'react'
import { Address } from './scaffold-eth'
import { useScaffoldReadContract } from '~~/hooks/scaffold-eth';
import { useAccount } from 'wagmi';
import ChallengePlayer from './ChallengePlayer';

const PlayersComponent = () => {



  const { data: players } = useScaffoldReadContract({
    contractName: "MarketClash",
    functionName: "getPlayersWithDeck"
  });

  useEffect(() => {
    console.log(players)
  }, [players])


  return (
    <div className="mt-8">
      {players ? (
        players.map((address, index) => (
          <div className='flex justify-center'>
            <ChallengePlayer address={address} index={index} />
          </div>
        ))
      ) : (
        <div>loading...</div>
      )}

    </div>
  )
}

export default PlayersComponent