declare namespace NodeJS {
  interface ProcessEnv {
    /** 서버 엔드포인트 */
    readonly NEXT_PUBLIC_SERVER_END_POINT: string;
  }
}
