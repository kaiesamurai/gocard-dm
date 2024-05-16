"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from "next/link";
 
export function ThreeDCardDemo({titletext, cardImage }: any) {
  return (
    <CardContainer className="inter-var w-72">
      <CardBody className="bg-none relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-auto sm:w-[30rem] h-auto rounded-xl p-6   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {titletext}
        </CardItem>
      
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={cardImage}
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
  
      </CardBody>
    </CardContainer>
  );
}