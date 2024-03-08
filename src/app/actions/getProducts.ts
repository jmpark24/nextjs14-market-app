import { PRODUCTS_PER_PAGE } from "@/constants";
import prisma from "@/lib/prismadb";

export interface ProductParams {
  latitude?: number;
  longitude?: number;
  category?: string;
  page?: number;
  skip?: number;
}

export default async function getProducts(params: ProductParams) {
  try {
    const {latitude, longitude, category, skip } = params;

    let query: any = {};

    if(category) {
      query.category = category;
    };

    if(latitude) {
      query.latitude = {
        gte: Number(latitude) - 0.01,
        lte: Number(latitude) + 0.01
      }
    };

    if(longitude) {
      query.longitude = {
        gte: Number(longitude) - 0.01,
        lte: Number(longitude) + 0.01
      }
    };
    
    const totalItems = await prisma.product.count({where: query});
    const products = await prisma.product.findMany({
      where: query,
      orderBy: {
        createdAt: "desc"
      },
      skip: skip ? Number(skip): 0,
      take: PRODUCTS_PER_PAGE
    });

    return {
      data: products,
      totalItems : totalItems
    }
  } catch (error: any) {
      throw new Error(error);
  }
}
