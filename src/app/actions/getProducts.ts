import prisma from "@/lib/prismadb";

export interface ProductParams {
  latitude?: number;
  longitude?: number;
  category?: string;
}

export default async function getProducts(params: ProductParams) {
  try {
    const {latitude, longitude, category} = params;

    let query: any = {};

    if(category) {
      query.category = category;
    }

    if(latitude) {
      query.latitude = {
        gte: Number(latitude) - 0.01,
        lte: Number(latitude) + 0.01
      }
    }

    if(longitude) {
      query.longitude = {
        gte: Number(longitude) - 0.01,
        lte: Number(longitude) + 0.01
      }
    }

    const products = await prisma.product.findMany({
      where: query,
      orderBy: {
        createdAt: "desc"
      }
    })

    return {
      data: products
    }
  } catch (error: any) {
      throw new Error(error);
  }
}
