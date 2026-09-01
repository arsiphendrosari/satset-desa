import type {
  Address,
  Citizen,
  CitizenId,
  Family,
  FamilyId,
} from "../domain";

/**
 * Application-facing Penduduk contract.
 *
 * UI and other modules must use this boundary instead of
 * accessing repositories or database infrastructure directly.
 */
export interface PendudukService {
  getCitizenById(
    id: CitizenId,
  ): Promise<Citizen | null>;

  getFamilyById(
    id: FamilyId,
  ): Promise<Family | null>;

  getCitizenAddress(
    citizenId: CitizenId,
  ): Promise<Address | null>;
}
