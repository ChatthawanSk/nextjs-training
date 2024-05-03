import React from "react";
import Image from "next/image";
import rickroll from "../../public/rickroll-roll.gif";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="container">
        <Image
          src={rickroll}
          alt="never gonna give you up"
          height={500}
          width={500}
        />
        <h1>Name : Chatthawan Sakhon</h1>
        <h1>Email : chatthawan_s@protossgroup.com</h1>
        <h1>Tel : 0955355447</h1>
      </div>
    </>
  );
}
