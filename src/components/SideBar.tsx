"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import ChatRow from "./ChatRow";
import ModelSelecetion from "./ModelSelecetion";
import NewChat from "./NewChat";
import Image from 'next/image'

const SideBar = () => {
  const { data: session } = useSession();

  const [chat, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <div className="hidden sm:inline">
            <NewChat />
            <ModelSelecetion />
          </div>
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}

            {chat?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
       <Image
          onClick={() => signOut()}
          src={session.user?.image!}
          width={100}
          height={100}
          alt="profile-pic"
          className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer"
        />
      )}
    </div>
  );
};

export default SideBar;