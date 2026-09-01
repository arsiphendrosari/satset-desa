import type {
  Address,
  Citizen,
  CitizenId,
  Family,
  FamilyId,
} from "../domain";

/**
 * Persistence contract for the Penduduk domain.
 *
 * Database-specific implementation must remain behind this interface.
 */
export interface PendudukRepository {
  findCitizenById(
    id: CitizenId,
  ): Promise<Citizen | null>;

  findFamilyById(
    id: FamilyId,
  ): Promise<Family | null>;

  findCitizenAddress(
    citizenId: CitizenId,
  ): Promise<Address | null>;
}
