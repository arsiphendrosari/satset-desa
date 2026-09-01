/**
 * Citizen administrative address.
 *
 * Initial scope only contains the location fields currently required.
 */

import type { CitizenId } from "./citizen";

export type AddressId = string;

export interface Address {
  id: AddressId;

  citizenId: CitizenId;

  hamlet: string;

  rt: string;

  rw: string;
}
