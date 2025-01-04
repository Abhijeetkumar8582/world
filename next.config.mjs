/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com',"theskinstory.in","www.ozhairandbeauty.com","shop.lakmesalon.in","discoverpilgrim.com","images.mamaearth.in","images-static.nykaa.com","m.media-amazon.com","innovist.com","www.bigbasket.com","cdn.kindlife.in","rukminim2.flixcart.com","images.unsplash.com"], // Add this line to allow the external domain
  },
};

export default nextConfig;
