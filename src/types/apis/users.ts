import type { ApiRuquestType } from ".";
import type { UserWithImage } from "#/types/models";

/** 로그인된 유저 정보 요청 타입 */
export interface GetMeApiRequest extends ApiRuquestType {}
/** 로그인된 유저 정보 응답 타입 */
export interface GetMeApiResponse extends UserWithImage {}
/** 로그인된 유저 정보 요청 & 응답 핸들러 타입 */
export type GetMeApiHandler = (
  body: GetMeApiRequest
) => Promise<GetMeApiResponse>;
