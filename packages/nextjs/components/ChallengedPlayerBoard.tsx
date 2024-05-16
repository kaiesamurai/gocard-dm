import React from 'react'
import TradingCardView from './TradingCardView'
import TradingCardInMatch from './TradingCardInMatch'
import { Address } from './scaffold-eth'

const ChallengedPlayerBoard = ({ tokenIds, setSelectedAttacker, matchId, selectedAttacker, setSelectedAttacked, selectedAttacked, challenged }: any) => {

  return(
    <div>
      <div className='flex justify-center items-center h-full mt-8 '>
      <Address address={challenged} size="lg" />
      </div>
    <div className='flex justify-center items-center h-full space-x-48 m-6'>
    {
      tokenIds.map((tokenId: any, index: any) => (
        <TradingCardInMatch matchId={matchId} tokenId={parseInt(tokenId.toString())} index={index} setSelectedAttacker={setSelectedAttacker} selectedAttacker={selectedAttacker} setSelectedAttacked={setSelectedAttacked} selectedAttacked={selectedAttacked} />
      ))
    }

  </div>
  </div>
  )

}

export default ChallengedPlayerBoard