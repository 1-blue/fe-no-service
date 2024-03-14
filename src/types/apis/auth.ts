import type { ApiRuquestType } from ".";
import type { UserEntity } from "#/types/entities";

/** 로그인 요청 타입 */
export interface PostLoginApiRequest
  extends ApiRuquestType<{}, {}, Pick<UserEntity, "email" | "password">> {}
/** 로그인 응답 타입 */
export interface PostLoginApiResponse extends Omit<UserEntity, "password"> {}
/** 로그인 요청 & 응답 핸들러 타입 */
export type PostLoginApiHandler = (
  body: PostLoginApiRequest
) => Promise<PostLoginApiResponse>;
