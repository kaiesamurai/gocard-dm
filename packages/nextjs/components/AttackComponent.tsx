import React from 'react'
import { useScaffoldWriteContract } from '~~/hooks/scaffold-eth';

const AttackComponent = ({selectedAttacker, selectedAttacked, challenger, challenged, setResetSelectedState} : any) => {

    const { writeContractAsync: writeYourContractAsync, data } = useScaffoldWriteContract("MarketClash");

    const handleAttack = async () => {
        try {
          await writeYourContractAsync(
            {
              functionName: "attackInMatch",
              args: [challenger, challenged, selectedAttacker, selectedAttacked]
            },
            {
              //Get mapping of most recent pack on block confirmation
              //change state, display cards
              onBlockConfirmation: txnReceipt => {
                setResetSelectedState(true);
                console.log("📦 Transaction blockHash", txnReceipt);
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
    <div className='flex justify-center items-center h-full my-0'>
    <button className='btn btn-primary ' onClick={() => handleAttack()}>Attack</button>
  </div>
  )
}

export default AttackComponent