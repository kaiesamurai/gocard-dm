import React from 'react'
import TradingCardView from './TradingCardView'
import { useScaffoldWriteContract } from '~~/hooks/scaffold-eth';
import { notification } from '~~/utils/scaffold-eth';

const CardRevealComponent = ({arrayOfIds} : any) => {
  const { writeContractAsync: writeYourContractAsync, data } = useScaffoldWriteContract("MarketClash");

  const handleCreateDeck = async () => {
    try {
      await writeYourContractAsync(
        {
          functionName: "createDeck",
          //@ts-ignore
          args: [[parseInt(arrayOfIds[0]), parseInt(arrayOfIds[1]), parseInt(arrayOfIds[2])]],
        },
        {
          //Get mapping of most recent pack on block confirmation
          //change state, display cards
          onBlockConfirmation: txnReceipt => {
   
            console.log("📦 Transaction blockHash", txnReceipt);
            notification.success("Deck Created");
          },
          onSuccess: data => {
            console.log("📦 Transaction success", data);
          },
        },
      );
    } catch (e) {
      console.error("Error setting greeting", e);
    }
  };

  return (
    <div>
        <h2 className='text-center font-bold text-2xl my-8'>Congratulations 🎉🎉🎉</h2>
    <div className='flex justify-center items-center h-full'>
   
    {
      arrayOfIds.map((id: any, index: any) => (
        <div className='mx-2'>
        <TradingCardView id={parseInt(id)} index={index} />
        </div>
      ))
    }

  </div>
   <div className='flex justify-center'>
   <button className='btn btn-primary flex justify-center mt-8' onClick={() => handleCreateDeck()}>Create Deck</button>
   </div>
  </div>
  
  )
}

export default CardRevealComponent