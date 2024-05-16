import React from 'react'
import { useAccount } from 'wagmi'
import { Address } from './scaffold-eth';
import { useScaffoldWriteContract } from '~~/hooks/scaffold-eth';
import { notification } from '~~/utils/scaffold-eth';
import {useRouter} from 'next/navigation';

const ChallengePlayer = ({address} : any) => {

    const {address: addressOfUser} = useAccount();
    
    const router = useRouter();


    const { writeContractAsync: writeYourContractAsync, data } = useScaffoldWriteContract("MarketClash");

    const handleCreateMatch = async () => {
      try {
        await writeYourContractAsync(
          {
            functionName: "initializeMatch",
            //@ts-ignore
            args: [address],
          },
          {
            //Get mapping of most recent pack on block confirmation
            //change state, display cards
            onBlockConfirmation: txnReceipt => {
     
              console.log("📦 Transaction blockHash", txnReceipt);
              notification.success("MatchCreated");
              router.push(`/match?challenger=${addressOfUser}&challenged=${address}`)
              
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

    const handleSamePlayerCreateMatch = async () => {
        notification.info("Can't create a match with yourself")
    }

    return (
        <div className='m-4 flex justify-center'>
            <Address  address={address} size="xl" />
            <button 
            className={addressOfUser === address ? "btn btn-accent btn-sm ml-2 min-w-36" : "btn btn-primary btn-sm ml-2 min-w-36"}
            onClick={addressOfUser === address ? () => handleSamePlayerCreateMatch()  : () => handleCreateMatch()}
            >{addressOfUser === address ? "You" : "Challenge"}</button>
        </div>

    )
}

export default ChallengePlayer