# SATSET DESA — AI & DEVELOPMENT RULES
# Version: 1.0.0

## 1. PROJECT IDENTITY

Project name: SATSET Desa

SATSET Desa is a modular village service platform.

The system must remain modular, maintainable, secure, testable, and easy to extend.

The following applications are currently part of the project:

- apps/web     = public website
- apps/warga   = citizen portal
- apps/admin   = administrative portal

---

## 2. ARCHITECTURE PRINCIPLE

Use this dependency direction:

UI
→ Application / Service
→ Domain Module
→ Repository
→ Database

Do NOT allow UI components to directly access the database.

Do NOT put business logic directly inside page.tsx or UI components.

Business rules belong inside the appropriate module/service layer.

---

## 3. APPLICATIONS

### apps/web

Public-facing website.

Responsibilities:

- public information
- village profile
- news
- agenda
- UMKM
- tourism
- public information
- public navigation

Do not place administrative business logic here.

### apps/warga

Citizen-facing application.

Responsibilities:

- citizen access
- citizen profile
- service requests
- application tracking
- complaints
- citizen notifications

### apps/admin

Administrative application.

Responsibilities:

- dashboard
- citizen administration
- service processing
- document management
- complaints
- content management
- system administration

---

## 4. MODULE BOUNDARIES

Current domain modules:

- penduduk
- surat
- pengaduan
- berita
- agenda
- umkm
- wisata

Each module must have clear ownership of its own domain logic.

A module must NOT directly manipulate another module's internal implementation.

Cross-module communication must use defined services/interfaces.

---

## 5. PENDUDUK

The penduduk module is the master citizen-data domain.

It may contain:

- citizen identity
- family relationships
- address
- administrative status
- household information

Other modules may READ required citizen information through defined services.

Other modules must NOT duplicate the master citizen database.

---

## 6. SURAT

The surat module handles village administrative correspondence.

Examples may include:

- RT/RW introduction
- domicile letters
- business certificates
- poverty certificates
- birth-related letters
- death-related letters
- other village administrative documents

Letter templates must be separated from business logic.

Letter generation must use validated data.

---

## 7. DATABASE

All database access must be centralized.

Database infrastructure belongs in:

packages/db

Do NOT create independent database clients inside individual applications.

Do NOT create a second database system without explicit architectural approval.

Database schema changes must be documented.

Destructive database changes require explicit approval.

---

## 8. AUTHENTICATION

Authentication belongs in:

packages/auth

Do NOT implement independent authentication systems inside individual modules.

Authentication and authorization are different concerns.

Authentication identifies the user.

Authorization determines what the user is allowed to do.

---

## 9. AUTHORIZATION / RBAC

The system must support role-based access control.

Potential roles include:

- SUPER_ADMIN
- ADMIN_DESA
- OPERATOR
- KEPALA_DESA
- RT
- RW
- WARGA

Do not hard-code authorization rules throughout UI components.

Authorization must be enforced server-side.

UI hiding alone is NOT security.

---

## 10. VALIDATION

Shared validation belongs in:

packages/validation

All user-controlled input must be validated.

Validation must occur at the server boundary.

Never trust:

- browser input
- query parameters
- form data
- headers
- cookies
- uploaded files

---

## 11. STORAGE

File and document storage belongs in:

packages/storage

Do not upload files directly from arbitrary modules without passing through the storage abstraction.

Storage must support:

- validation
- file type restrictions
- file size restrictions
- secure naming
- access control

---

## 12. NOTIFICATION

Notification infrastructure belongs in:

packages/notification

Possible channels:

- WhatsApp
- email
- in-app notification

Modules should request notifications through the notification abstraction rather than implementing provider-specific logic directly.

---

## 13. UI

Shared UI components belong in:

packages/ui

Avoid duplicating the same component across apps.

Application-specific UI may remain inside the application when it is not reusable.

---

## 14. API

API contracts must be explicit.

Validate input.

Authorize access.

Handle errors consistently.

Never expose:

- passwords
- tokens
- secrets
- internal database credentials
- private files

---

## 15. SECURITY

Never commit secrets.

Never hard-code:

- database passwords
- API keys
- authentication secrets
- provider credentials

Use environment variables.

Sensitive operations must be authorized server-side.

Use least-privilege principles.

---

## 16. ERROR HANDLING

Never silently ignore errors.

Errors must be:

- logged appropriately
- understandable to developers
- safe for users

Do not expose stack traces or internal implementation details to end users in production.

---

## 17. TESTING

New business-critical functionality should include tests.

Critical domains include:

- authentication
- authorization
- penduduk
- surat
- document generation
- data validation

Existing functionality must continue to pass after changes.

---

## 18. GIT WORKFLOW

Before making significant changes:

1. Check git status.
2. Check current branch.
3. Review recent commits.
4. Make focused changes.
5. Run validation/build/tests.
6. Commit with a meaningful message.

Do not mix unrelated changes in one commit.

Do not rewrite Git history unless explicitly requested.

---

## 19. CHANGE CONTROL

Do NOT change the architecture merely to make a feature work.

If a requested feature conflicts with the architecture:

1. Explain the conflict.
2. Propose the smallest safe architectural change.
3. Wait for approval before changing the architecture.

Never silently introduce:

- a second database
- a second authentication system
- duplicate master data
- random shared utilities
- hidden global state
- undocumented external services

---

## 20. MODULE ISOLATION

Adding a new module must not require rewriting unrelated modules.

A module should expose a small, clear public interface.

Internal implementation details should remain private.

---

## 21. BACKWARD COMPATIBILITY

Existing applications must remain buildable after changes.

At minimum verify:

- apps/web
- apps/warga
- apps/admin

before merging significant changes.

---

## 22. DOCUMENTATION

Important architectural decisions must be documented in:

docs/

Keep these documents synchronized with the actual implementation:

- ARCHITECTURE.md
- DATABASE.md
- SECURITY.md
- API.md
- PROJECT_STATUS.md
- ROADMAP.md
- CHANGELOG.md

---

## 23. AI / COPILOT RULES

AI assistants must inspect the repository before making architectural changes.

AI must not assume files exist.

AI must not invent database fields.

AI must not invent APIs.

AI must not overwrite working code blindly.

AI must preserve existing functionality.

AI must prefer small, reversible changes.

AI must report:

- files changed
- reason for changes
- validation performed
- build/test result

When uncertain about architecture, STOP and ask for approval.

---

## 24. CURRENT SCOPE

Current priority:

1. Foundation
2. Architecture
3. Database
4. Authentication
5. Authorization
6. Master citizen data
7. Village correspondence
8. Complaints
9. Content
10. Other modules

Do not implement unrelated systems prematurely.

---

## 25. ABSOLUTE RULE

Correctness and maintainability are more important than speed.

Never sacrifice architecture, security, or data integrity merely to make a feature work quickly.

SATSET Desa must remain modular and extensible.
