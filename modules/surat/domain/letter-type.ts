/**
 * Definition of an administrative letter type.
 * Templates are intentionally separated from business logic.
 */

export type LetterTypeId = string;

export interface LetterType {
  id: LetterTypeId;
  code: string;
  name: string;
  active: boolean;
}
