/**
 * Administrative letter request.
 */

export type LetterRequestId = string;

export type LetterRequestStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "RT_REVIEW"
  | "RW_REVIEW"
  | "VILLAGE_REVIEW"
  | "APPROVED"
  | "REJECTED"
  | "COMPLETED"
  | "CANCELLED";

export interface LetterRequest {
  id: LetterRequestId;
  citizenId: string;
  letterTypeId: string;
  status: LetterRequestStatus;
}
