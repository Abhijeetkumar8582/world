/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rukminim1.flixcart.com","articles-1mg.gumlet.io","","makeover-bucket-testing.s3.ap-southeast-1.amazonaws.com","marscosmetics.in","www.dailylifeforever52.in",'encrypted-tbn0.gstatic.com',"foxtale.in","www.justherbs.in","theskinstory.in","www.ozhairandbeauty.com","shop.lakmesalon.in","discoverpilgrim.com","images.mamaearth.in","images-static.nykaa.com","m.media-amazon.com","innovist.com","www.bigbasket.com","cdn.kindlife.in","rukminim2.flixcart.com","images.unsplash.com"], // Add this line to allow the external domain
  },
};

export default nextConfig;
