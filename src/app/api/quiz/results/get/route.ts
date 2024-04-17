import { NextRequest, NextResponse } from "next/server";

import { db } from "@/firebase/server";
import { doc, getDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  const { userUID } = await req.json();

  if (userUID === undefined) {
    return NextResponse.json({ msg: "Not Found." });
  }

  const refToUserDoc = doc(db, "users", userUID);

  const results = (await getDoc(refToUserDoc)).get("results");

  if (results === undefined) return NextResponse.json({ msg: "Not Found." });

  return NextResponse.json(results);
}
