# SATSET Desa - Legacy Data Mapping

## Source

Legacy source:

HENDROSARI SIAP.xlsx

Legacy data is treated as:

- source data
- migration reference
- business reference

Legacy structure is NOT automatically copied into SATSET Desa.

---

# 1. PENDUDUK

## Selected Fields

| Legacy Field | Target Domain | Target Purpose |
|---|---|---|
| NIK | Penduduk | Identitas unik warga |
| NAMA | Penduduk | Nama warga |
| TEMPAT LAHIR | Penduduk | Tempat lahir |
| TANGGAL LAHIR | Penduduk | Tanggal lahir |
| JENIS KELAMIN | Penduduk | Referensi jenis kelamin |
| AGAMA | Penduduk | Referensi agama |
| KEWARGANEGARAAN | Penduduk | Referensi kewarganegaraan |
| PEKERJAAN | Penduduk | Referensi pekerjaan |
| STATUS PERKAWINAN | Penduduk | Referensi status perkawinan |
| NO KK | Keluarga | Nomor keluarga |
| DUSUN | Alamat | Wilayah dusun |
| RT | Alamat | Wilayah RT |
| RW | Alamat | Wilayah RW |
| NO_WA | Penduduk | Nomor kontak |
| SOFT_DELETE | Penduduk | Status aktif/nonaktif |

---

# 2. REFERENCE DATA

## MASTER_JK

Used for:

- gender reference

## MASTER_AGAMA

Used for:

- religion reference

## MASTER_PEKERJAAN

Used for:

- occupation reference

## MASTER_STATUS_PERKAWINAN

Used for:

- marital status reference

## MASTER_KEWARGANEGARAAN

Used for:

- nationality reference

---

# 3. CONFIG

Only selected village configuration will be migrated.

Potential configuration:

- village name
- district
- regency
- province
- postal code
- address
- phone
- email
- letter numbering
- signer
- signer position

Google Apps Script specific configuration must not become a core dependency.

---

# 4. SURAT

Legacy surat data is used as business reference.

SATSET Desa will independently define:

- letter type
- request
- workflow status
- approval
- document
- history

Legacy column layout must not be copied directly without validation.

---

# 5. USER

Legacy user records require security review before migration.

Passwords must never be copied blindly.

If legacy passwords are plaintext:

- do not migrate passwords
- create a secure authentication process
- require password setup or reset

---

# 6. AUDIT AND LOGS

Legacy audit and log sheets are not automatically migrated into the core database.

SATSET Desa will define its own audit strategy.

---

# 7. LEGACY FIELDS NOT IN INITIAL SCOPE

Fields outside the initial scope remain in the legacy source.

They may be reconsidered when a real business requirement appears.

Do not create database columns merely because they exist in the legacy spreadsheet.
