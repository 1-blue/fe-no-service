import type { PostLoginApiHandler } from "#/types/apis";

/** 로그인 함수 */
export const postLoginApi: PostLoginApiHandler = async ({ body }) => {
  return fetch(
    process.env.NEXT_PUBLIC_SERVER_END_POINT + "/api/v1/auth/login",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  ).then((res) => res.json());
};
