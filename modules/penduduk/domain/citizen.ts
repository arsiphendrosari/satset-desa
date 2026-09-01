/**
 * Master citizen domain.
 * Do not access database from this file.
 */

export type CitizenId = string;

export interface Citizen {
  id: CitizenId;
}
