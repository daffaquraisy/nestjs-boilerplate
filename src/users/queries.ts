import { sql } from '@pgtyped/runtime';
import { ISelectUserIdsQuery } from './queries.types.ts';

export const selectUserIds = sql<
  ISelectUserIdsQuery
>`select id, age from users where id = $id and age = $age`;