import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSesstion() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSesstion();
    if(!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session.user.email
      }
    });
    if(!currentUser) {
      return null;
    }
    return currentUser;
  } catch (error) {
    return null;
  }
};