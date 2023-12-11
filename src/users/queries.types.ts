/** Types generated for queries found in "src/users/queries.ts" */

/** 'SelectUserIds' parameters type */
export interface ISelectUserIdsParams {
  age?: number | null | void;
  id?: number | null | void;
}

/** 'SelectUserIds' return type */
export interface ISelectUserIdsResult {
  /** Age (in years) */
  age: number | null;
  id: number;
}

/** 'SelectUserIds' query type */
export interface ISelectUserIdsQuery {
  params: ISelectUserIdsParams;
  result: ISelectUserIdsResult;
}

