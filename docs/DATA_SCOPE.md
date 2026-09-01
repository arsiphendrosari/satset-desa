# SATSET Desa - Data Scope

## Purpose

Dokumen ini menentukan data minimum yang digunakan oleh SATSET Desa.

File legacy hanya digunakan sebagai sumber data dan referensi.

Struktur file legacy tidak otomatis menjadi struktur database SATSET Desa.

---

# 1. DATA PENDUDUK

Data inti yang digunakan pada tahap awal:

- NIK
- Nama
- Tempat Lahir
- Tanggal Lahir
- Jenis Kelamin
- Agama
- Kewarganegaraan
- Pekerjaan
- Status Perkawinan
- Nomor KK
- Dusun
- RT
- RW
- Nomor WhatsApp
- Status Aktif

Data ini menjadi fondasi untuk:

- master penduduk
- pencarian warga
- administrasi warga
- pengajuan surat
- surat pengantar RT/RW
- surat administrasi desa

---

# 2. DATA KELUARGA

Tahap awal menggunakan data minimum:

- Nomor KK
- Kepala Keluarga
- Status Aktif

Hubungan anggota keluarga dapat dikembangkan kemudian.

Tidak perlu membangun struktur silsilah kompleks pada tahap awal.

---

# 3. DATA REFERENSI

Master data yang digunakan:

- Jenis Kelamin
- Agama
- Pekerjaan
- Status Perkawinan
- Kewarganegaraan

Master harus digunakan sebagai referensi.

Jangan menduplikasi nilai referensi secara bebas di setiap tabel.

---

# 4. DATA SURAT

Tahap awal modul surat mencakup:

- Jenis Surat
- Pengajuan Surat
- Pemohon
- Status Pengajuan
- Approval
- Dokumen Surat
- Riwayat Surat

Tidak semua struktur legacy surat akan dimigrasikan.

---

# 5. DATA KONFIGURASI DESA

Data minimum:

- Nama Desa
- Kecamatan
- Kabupaten
- Provinsi
- Kode Pos
- Alamat
- Nomor Telepon
- Email
- Penandatangan Surat
- Jabatan Penandatangan
- Format Nomor Surat

Konfigurasi khusus Google Apps Script tidak menjadi bagian dari core configuration SATSET Desa.

---

# 6. DATA YANG TIDAK DIGUNAKAN PADA TAHAP AWAL

Data berikut tidak dimasukkan ke core database tahap pertama kecuali kebutuhan bisnis muncul:

- pendidikan_kk_id
- pendidikan_sedang_id
- kk_level
- ayah_nik
- nama_ayah
- ibu_nik
- nama_ibu
- golongan_darah_id
- akta_lahir
- dokumen_pasport
- tanggal_akhir_paspor
- dokumen_kitas
- akta_perkawinan
- tanggalperkawinan
- akta_perceraian
- tanggalperceraian
- cacat_id
- cara_kb_id
- hamil
- ktp_el
- status_rekam
- alamat_sekarang
- status_dasar
- suku
- tag_id_card
- id_asuransi
- no_asuransi
- lat
- lng

Data legacy tetap dapat disimpan sebagai arsip sumber.

Data tersebut tidak otomatis dibuang dari sumber legacy.

---

# 7. PRINCIPLE

SATSET Desa menggunakan prinsip:

Legacy Data
    ↓
Select Required Data
    ↓
Validate
    ↓
Normalize
    ↓
SATSET Desa Database

Bukan:

Legacy Spreadsheet
    ↓
Copy All Columns
    ↓
Database

Database SATSET Desa dibangun berdasarkan kebutuhan sistem.

Bukan berdasarkan seluruh struktur aplikasi legacy.
