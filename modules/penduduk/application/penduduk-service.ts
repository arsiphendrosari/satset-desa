import type {
  Address,
  Citizen,
  Family,
  CitizenId,
  FamilyId,
} from "../domain";

export interface PendudukService {
  getCitizenById(id: CitizenId): Promise<Citizen | null>;

  getFamilyById(id: FamilyId): Promise<Family | null>;

  getCitizenAddress(
    citizenId: CitizenId,
  ): Promise<Address | null>;
}
