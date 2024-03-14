/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // 카카오 프로필 이미지
      { protocol: "http", hostname: "k.kakaocdn.net" },
      // 구글 프로필 이미지
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
