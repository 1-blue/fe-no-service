"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

/** 2023/07/09 - OAuth 로그인 성공 페이지 ( 백엔드에서 리다이렉트 ) - by 1-blue */
const OAuthSuccess = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <>
      <h1>OAuth 로그인</h1>
    </>
  );
};

export default OAuthSuccess;
