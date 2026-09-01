import type {
  LetterRequest,
  LetterRequestId,
  LetterType,
  LetterTypeId,
} from "../domain";

export interface SuratService {
  getLetterType(
    id: LetterTypeId,
  ): Promise<LetterType | null>;

  createRequest(
    input: CreateLetterRequestInput,
  ): Promise<LetterRequest>;

  getRequestById(
    id: LetterRequestId,
  ): Promise<LetterRequest | null>;

  submitRequest(
    id: LetterRequestId,
  ): Promise<LetterRequest>;

  approveRequest(
    id: LetterRequestId,
    role: "RT" | "RW" | "ADMIN_DESA" | "KEPALA_DESA",
  ): Promise<LetterRequest>;

  rejectRequest(
    id: LetterRequestId,
    role: "RT" | "RW" | "ADMIN_DESA" | "KEPALA_DESA",
    reason: string,
  ): Promise<LetterRequest>;
}

export interface CreateLetterRequestInput {
  citizenId: string;
  letterTypeId: LetterTypeId;
}
