import type {
  Address,
  Citizen,
  CitizenId,
  Family,
  FamilyId,
} from "../domain";

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
