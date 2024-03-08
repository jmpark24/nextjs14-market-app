import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { toast } from "react-toastify";

interface useFavorite {
  productId: string;
  currentUser?: User | null;
}

const useFavorite = ({productId, currentUser} :useFavorite) => {
  const router = useRouter();
  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(productId);
  },[productId, currentUser])

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // event 버블링 방지

    if(!currentUser) {
      toast.warn('먼저 로그인을 해주세요.')
      return;
    }

    try {
      let request;

      if(hasFavorite) {
        request = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        request = () => axios.post(`/api/favorites/${productId}`);
      }
      await request();
      router.refresh();
      toast.success('성공했습니다.')
    } catch (error) {
      toast.error('실패했습니다.')
    }
  }
  console.log('hasFavorite',hasFavorite);
  return {
    hasFavorite,
    toggleFavorite
  }
}

export default useFavorite;