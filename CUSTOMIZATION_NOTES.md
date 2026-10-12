# Nicole's personalized BSE Vanilla portfolio

## Run locally

1. Open this folder in VS Code.
2. Run `npm install` (first time only).
3. Run `npm run dev`.
4. Open http://localhost:3000.

## What changed

- `config/portfolio.ts`: personal bio, GitHub/LinkedIn, skills, experience, and four featured projects from the supplied resume.
- `app/page.tsx`: sections reordered to Bio → Projects → Experience → Tech Stack.
- `public/Nicole_Soltsov_Resume.pdf`: local copy of the supplied resume, linked by the Resume button.

## Things to review before publishing

- Add verified project repository or live-demo URLs to `config/portfolio.ts` (currently empty intentionally).
- Review all bio text for your preferred tone and update as desired.
- Replace the local resume PDF if you revise your resume. Consider removing personal phone information from a publicly hosted resume if preferred.
- GitHub activity requires internet access and may be unavailable offline.
