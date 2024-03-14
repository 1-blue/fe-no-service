export * from "./auth";
export * from "./users";

/**
 * API 요청 타입 형식
 * `Params`, `Queries`, `Body` 순서
 **/
export interface ApiRuquestType<Params = {}, Queries = {}, Body = {}> {
  params?: Params;
  queries?: Queries;
  body?: Body;
}
