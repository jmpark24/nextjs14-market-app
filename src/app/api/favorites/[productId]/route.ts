import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

interface Params {
  productId?: string;
}

export async function POST(request: Request, {params}: { params: Params }) {

  const currentUser = await getCurrentUser();

  if(!currentUser) {
    return NextResponse.error();
  }

  const {productId} = params;

  if(!productId || typeof productId !== "string") {
    throw new Error(`Invalid ID`);
  }

  let favoriteIds = [...currentUser.favoriteIds || []];

  favoriteIds.push(productId);

  await prisma?.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      favoriteIds: favoriteIds
    }

  })
  return NextResponse.json(favoriteIds);

}
