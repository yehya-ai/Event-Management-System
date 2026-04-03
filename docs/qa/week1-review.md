# Week 1 QA Review

This report summarizes the review and verification of the project status at the end of Week 1.

---

## Build Verification

- [ ] Cloned fresh ✅ / ❌  
- [ ] `dotnet build` passed ✅ / ❌  
- [ ] Home page loaded ✅ / ❌  
- Notes: Backend scaffold verification depends on the uploaded ASP.NET Core MVC project.

---

## README Review

- Issues found: README is clear and organized, and includes the project overview, tech stack, documentation links, team members, and getting started instructions.

---

## Documentation Review (docs/)

| File | Status | Issues / Notes |
|------|--------|----------------|
| 01-introduction.md | ✅ OK | Covers problem statement, objectives, scope, assumptions, and constraints clearly |
| 02-stakeholder-analysis.md | ✅ OK | Includes identified stakeholders, roles, and analysis in a structured format |
| 03-use-cases.md | ✅ OK | Lists system actors and their main use cases clearly |

---

## Wireframe Review

- Issues found: Site journey is available and clear.
- Landing page wireframe is available and linked with its image.
- Login page wireframe is available and linked with its image.
- Register page wireframe is available and linked with its image.
- Wireframe images are organized inside the `images` folder.

---

## Cross-Check: Stakeholders vs Wireframes

- Mismatches found: No major mismatches were found between the stakeholder analysis, use cases, and wireframes.
- The Admin role is reflected in the login page and dashboard-related flow.
- The Participant role is reflected in event browsing and registration flow.

---

## Summary

- Blocker issues (must fix before Week 2): The ASP.NET Core MVC backend scaffold must be uploaded and verified on the `develop` branch.
- Minor issues (can fix during Week 2): GitHub usernames can be added in the README team table, and wireframes can be improved with more visual details if needed.
