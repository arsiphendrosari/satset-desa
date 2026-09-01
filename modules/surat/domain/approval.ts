/**
 * Approval workflow domain.
 */

export type ApprovalRole =
  | "RT"
  | "RW"
  | "ADMIN_DESA"
  | "KEPALA_DESA";

export type ApprovalDecision =
  | "APPROVED"
  | "REJECTED";

export interface Approval {
  id: string;
  requestId: string;
  role: ApprovalRole;
  decision: ApprovalDecision;
  decidedAt: Date;
}
