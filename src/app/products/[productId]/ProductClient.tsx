"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { categories } from "@/components/categories/Categories";
import ProductHead from "@/components/products/ProductHead";
import ProductInfo from "@/components/products/ProductInfo";
import { Product, User } from "@prisma/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductClientProps {
  product: Product & { user: User };
  currentUser?: User | null;
}

const ProductClient = ({ product, currentUser }: ProductClientProps) => {
  let router = useRouter();
  const KakaoMap = dynamic(() => import("../../../components/KakaoMap"), {
    ssr: false,
  }); // KakaoMap은 dynamic import로 가져와야함, 안그러면 제대로 안뜸

  const category = categories.find((item) => item.path === product.category);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ProductHead
            title={product.title}
            imageSrc={product.imageSrc}
            id={product.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 mt-6 md:grid-cols-2 md:gap-10">
            <ProductInfo
              user={product.user}
              category={category}
              createdAt={product.createdAt}
              description={product.description}
            />
            <div>
              <KakaoMap
                detailPage
                latitude={product.latitude}
                longitude={product.longitude}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            label="이 유저와 채팅하기"
            onClick={() => router.push("/chat")}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductClient;
