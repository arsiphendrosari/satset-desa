import type {
  LetterRequest,
  LetterRequestId,
} from "../domain";

export interface SuratRepository {
  findById(
    id: LetterRequestId,
  ): Promise<LetterRequest | null>;

  save(
    request: LetterRequest,
  ): Promise<LetterRequest>;
}
