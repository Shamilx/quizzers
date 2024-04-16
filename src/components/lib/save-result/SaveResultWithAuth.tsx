'use client';

import LoadingSpinner from "@/app/loading";
import { useSessionAuth } from "@/firebase/components/auth-provider";
import Link from "next/link";

export default function SaveResultWithAuth() {
  const auth = useSessionAuth();

  if(!(auth?.status === 'fetched'))
    return <LoadingSpinner />

  if(!auth.user)
    return <div className="flex justify-center">Do you want to save your results? <Link className="ps-2 text-sky-500" href={'/signin'}>Login</Link></div>

  if(auth.user)
    return <div className="flex justify-center">Your results are saved</div>
}
