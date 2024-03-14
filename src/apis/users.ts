import type { GetMeApiHandler } from "#/types/apis";

/** 로그인된 유저 정보 가져오기 함수 */
export const getMeApi: GetMeApiHandler = async () => {
  return await fetch(
    process.env.NEXT_PUBLIC_SERVER_END_POINT + "/api/v1/users/me",
    {
      method: "GET",
      credentials: "include",
    }
  ).then((res) => res.json());
};
