"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";
import {
  useScaffoldReadContract,
  useScaffoldWatchContractEvent,
  useScaffoldWriteContract,
} from "~~/hooks/scaffold-eth";
import CardRevealComponent from "./CardRevealComponent";

const OpenRandomPack = () => {
  const { address } = useAccount();
  const { writeContractAsync: writeYourContractAsync, data } = useScaffoldWriteContract("MarketClash");
  const { data: recentPackOpenedByUser, isLoading } = useScaffoldReadContract({
    contractName: "MarketClash",
    functionName: "getRecentPackOpenedByUser",
    args: [address],
    watch: true,
  });




  const [openedTokenIds, setOpenedTokenIds] = useState([""]);
  const [freshOpen, setFreshOpen] = useState(false); 
  const [opened, setOpened] = useState(false);

  const handleOpenPack = async () => {
    try {
      await writeYourContractAsync(
        {
          functionName: "openPack",
          args: [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]
        },
        {
          //Get mapping of most recent pack on block confirmation
          //change state, display cards
          onBlockConfirmation: txnReceipt => {
            setFreshOpen(true)
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

  useEffect(() => {
    if(freshOpen === true && recentPackOpenedByUser !== undefined && recentPackOpenedByUser.length > 1){
    console.log(recentPackOpenedByUser);

    const arrayIds = recentPackOpenedByUser
      ? [
          recentPackOpenedByUser[0].toString(),
          recentPackOpenedByUser[1].toString(),
          recentPackOpenedByUser[2].toString(),
        ]
      : [""];

    console.log(arrayIds);
    setOpenedTokenIds(arrayIds);
    setOpened(true);
      }
  }, [recentPackOpenedByUser, isLoading, freshOpen]);

  return (
    <div>
      {opened === false ? (
        <div className="grid grid-cols-1 justify-center justify-items-center items-center mt-12">
          <Image
            src={"/mystery.png"}
            width={"200"}
            height={"200"}
            alt="open pack"
            className="shadow-2xl rounded-lg animate-pulse-slow"
          />
          <button className="btn btn-primary mt-8 text-xl btn-md" onClick={() => handleOpenPack()}>
            Open Pack
          </button>
        </div>
      ) : (
        <div><CardRevealComponent arrayOfIds={openedTokenIds} /></div>
      )}
    </div>
  );
};

export default OpenRandomPack;
