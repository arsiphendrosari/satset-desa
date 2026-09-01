/**
 * Family / household domain.
 *
 * Initial scope intentionally remains minimal.
 */

import type { CitizenId } from "./citizen";

export type FamilyId = string;

export interface Family {
  id: FamilyId;

  familyCardNumber: string;

  headOfFamilyCitizenId?: CitizenId;

  isActive: boolean;
}
