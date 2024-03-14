export * from "./user";
export * from "./image";

/** 공용 `entity` */
export interface CommonEntity {
  /** 식별자 */
  id: string;
  /** 생성된 시간 */
  createdAt: Date | string;
  /** 수정된 시간 */
  updatedAt: Date | string;
  /** 삭제된 시간 */
  deletedAt?: Date | string | undefined;
}
