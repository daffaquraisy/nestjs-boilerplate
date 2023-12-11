/** Types generated for queries found in "src/books/books.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

import type { Category } from '../customTypes.js';

export type categoryArray = (Category)[];

/** 'FindBookById' parameters type */
export interface IFindBookByIdParams {
  bookId?: number | null | void;
}

/** 'FindBookById' return type */
export interface IFindBookByIdResult {
  author_id: number | null;
  categories: categoryArray | null;
  id: number;
  name: string | null;
  rank: number | null;
}

/** 'FindBookById' query type */
export interface IFindBookByIdQuery {
  params: IFindBookByIdParams;
  result: IFindBookByIdResult;
}

const findBookByIdIR: any = {"usedParamSet":{"bookId":true},"params":[{"name":"bookId","required":false,"transform":{"type":"scalar"},"locs":[{"a":31,"b":37}]}],"statement":"SELECT * FROM books WHERE id = :bookId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM books WHERE id = :bookId
 * ```
 */
export const findBookById = new PreparedQuery<IFindBookByIdParams,IFindBookByIdResult>(findBookByIdIR);


