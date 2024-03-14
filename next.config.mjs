/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com', // secure_url 에 들어오는 url 앞에 domain을 넣어주었다.
      'via.placeholder.com'
    ]
  }
};

export default nextConfig;
