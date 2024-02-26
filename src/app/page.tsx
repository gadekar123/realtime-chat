import Button from "@/components/ui/Button";
import Link from "next/link";
import { db } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  
  return (
    <>
    <Button variant={"ghost"} className="m-3">Hello</Button>
    <Link href='/login'
    className="bg-black text-white px-3 py-2 hover:bg-gray-600 hover:scale-50 m-3 rounded-md"
    >Login to Chat</Link>
    </>
  );
}
