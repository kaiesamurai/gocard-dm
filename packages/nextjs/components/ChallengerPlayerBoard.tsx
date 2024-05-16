import React from 'react'
import TradingCardInMatch from './TradingCardInMatch'
import { Address } from './scaffold-eth'

const ChallengerPlayerBoard = ({tokenIds, matchId, setSelectedAttacker, selectedAttacker,  setSelectedAttacked, selectedAttacked, challenger, addressOfUser} : any) => {
  return (
    <div>
  
    <div className='flex justify-center items-center h-full space-x-48 m-6'>
       {
        tokenIds.map((tokenId: any, index: any) => (
          <TradingCardInMatch matchId={matchId} tokenId={parseInt(tokenId.toString())} index={index} setSelectedAttacker={setSelectedAttacker} selectedAttacker={selectedAttacker}  setSelectedAttacked={setSelectedAttacked} selectedAttacked={selectedAttacked} />
        ))
       }

    </div>
    <div className='flex justify-center items-center h-full mt-8'>
    <Address address={challenger} size="lg" />
    </div>
    </div>
  )
}

export default ChallengerPlayerBoard