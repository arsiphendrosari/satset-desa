/**
 * Master citizen domain.
 *
 * Contains only data currently approved in DATA_SCOPE.md.
 * Database access is forbidden in this layer.
 */

export type CitizenId = string;

export type GenderCode = number;
export type ReligionCode = number;
export type NationalityCode = number;
export type OccupationCode = number;
export type MaritalStatusCode = number;

export interface Citizen {
  id: CitizenId;

  nik: string;
  fullName: string;

  birthPlace?: string;
  birthDate?: Date;

  genderCode: GenderCode;
  religionCode?: ReligionCode;
  nationalityCode?: NationalityCode;
  occupationCode?: OccupationCode;
  maritalStatusCode?: MaritalStatusCode;

  familyId?: string;

  whatsAppNumber?: string;

  isActive: boolean;
}
