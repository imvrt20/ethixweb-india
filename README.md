# Ethixweb India 🇮🇳
### A Digital Experience Built for Indian Businesses

Ethixweb India is a responsive, full-stack website redesign created as part of the Ethixweb Full Stack Developer Assessment.

The goal is to reimagine the Ethixweb website for Indian businesses and audiences while maintaining a premium, modern, and world-class digital presence.

The project combines a polished user interface with a functional enquiry management system, database integration, and a protected administrator dashboard.

---

## 📌 Project Overview

The website is designed to help businesses explore digital services, understand the company's approach, and submit project enquiries.

The redesign focuses on:

- Creating an India-specific brand experience.
- Delivering a premium and responsive user interface.
- Presenting services and business information clearly.
- Collecting enquiries through a working contact form.
- Storing leads in a real database.
- Providing an authenticated dashboard to manage enquiries.
- Following secure development practices.

---

## ✨ Features

### 1. Homepage
- Clear value proposition and prominent calls to action.
- Overview of digital services.
- Presentation of the project process.
- Featured work and business-focused messaging.
- A consistent Ethixweb India brand identity.

### 2. Services Page
- Dedicated page presenting the company's digital services.
- Clear content hierarchy and navigation.
- Calls to action that encourage potential clients to make enquiries.

### 3. About Page
- Introduces the company's approach.
- Communicates the India-focused brand positioning.
- Maintains the same visual identity as the other pages.

### 4. Contact Page
- Functional project enquiry form.
- Input validation for required fields.
- Collects contact and project information.
- Saves submitted enquiries to Supabase.
- Displays feedback when submissions succeed or fail.

### 5. Admin Dashboard
- Protected administrator area.
- Supabase authentication.
- Displays enquiries stored in the database.
- Allows authorized administrators to review leads.
- Supports enquiry status management:
  - New
  - Contacted
  - Closed

### 6. Database and Security
- PostgreSQL database through Supabase.
- Server-side enquiry validation.
- Row Level Security (RLS) policies.
- Restricted access to enquiry records.
- Environment variables for application configuration.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework and routing |
| React | UI components |
| TypeScript | Type-safe development |
| CSS | Website styling and responsive layouts |
| Next.js Route Handlers | Enquiry API |
| Supabase | Backend services and database integration |
| PostgreSQL | Persistent enquiry storage |
| Supabase Auth | Administrator authentication |
| Supabase RLS | Database access control |
| Zod | Data validation |
| React Hook Form | Form handling |
| Lucide React | Interface icons |
| Git and GitHub | Version control and source hosting |

---

## 🎨 Design Rationale

### What Makes This Website India-Specific?

The redesign positions Ethixweb for Indian businesses and audiences while preserving a premium digital-studio aesthetic.

The India-specific approach includes:

- **Brand positioning:** The name "Ethixweb India" makes the intended market clear.
- **Visual identity:** A distinctive red brand accent is combined with a restrained, premium visual style.
- **Business-focused messaging:** Content is written around project goals, business challenges, and digital growth.
- **Accessible communication:** Clear headings, straightforward language, and prominent calls to action help visitors understand the services.
- **Local context:** The website communicates an approach focused on working with ambitious teams across India.

The objective is to make the website feel relevant to Indian businesses without relying on stereotypical visual elements.

### Why This Design Approach?

A clean layout, consistent typography, restrained colours, and clear content hierarchy help the brand communicate professionalism.

The design prioritizes clarity and usability so visitors can understand the services and submit an enquiry without unnecessary friction.

### What Was Improved?

The redesign focuses on:

- Establishing a distinct India-focused brand identity.
- Organizing the homepage around services, process, featured work, and calls to action.
- Providing dedicated Services, About, and Contact pages.
- Maintaining a consistent design system across pages.
- Integrating the contact form with a real database.
- Adding an administrator dashboard for enquiry management.
- Introducing authenticated access and database-level access controls.
- Supporting responsive layouts across different screen sizes.

---

## 📁 Project Structure

```text
ethixweb-india/
├── app/
│   ├── about/
│   ├── admin/
│   │   └── login/
│   ├── api/
│   │   └── enquiries/
│   ├── contact/
│   ├── services/
│   ├── lib/
│   │   └── supabase.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .gitignore
├── package.json
├── package-lock.json
├── proxy.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Git
- A Supabase project

### 1. Clone the Repository

```bash
git clone https://github.com/imvrt20/ethixweb-india.git
```

### 2. Open the Project Directory

```bash
cd ethixweb-india
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root.

Add your Supabase project configuration:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Replace the example values with the corresponding values from your own Supabase project.

**Security:** Never commit `.env.local`, database passwords, or secret API keys to GitHub.

### 5. Configure Supabase

The application requires the following database tables:

- `enquiries` — stores contact form submissions.
- `admin_users` — identifies authorized administrator accounts.

Configure the necessary PostgreSQL columns, constraints, RLS policies, and Supabase Auth account before using the application.

Administrator access should be granted only to explicitly authorized accounts.

### 6. Start the Development Server

```bash
npm run dev
```

Open:

http://localhost:3000

---

## 🌐 Application Routes

| Page | Route |
|---|---|
| Homepage | `/` |
| Services | `/services` |
| About | `/about` |
| Contact | `/contact` |
| Admin Login | `/admin/login` |
| Admin Dashboard | `/admin` |
| Enquiry API | `/api/enquiries` |

---

## 🔐 Security Considerations

The project incorporates the following security measures:

- Server-side validation of submitted enquiry data.
- Supabase authentication for administrator sign-in.
- Row Level Security policies for database access.
- Restricted enquiry viewing and status updates.
- Environment variables for application configuration.
- Git exclusions for local environment files.

Production readiness also requires testing authentication, access control, spam protection, error handling, and database policies in the deployed environment.

---

## 🚀 Deployment

The application can be deployed to a Next.js-compatible hosting platform, such as Vercel.

Deployment checklist:

1. Push the project to GitHub.
2. Import the repository into the hosting platform.
3. Configure the required environment variables.
4. Verify the Supabase database schema and security policies.
5. Deploy the application.
6. Test the website on desktop and mobile.
7. Verify contact form submissions.
8. Verify administrator login and enquiry management.
9. Run PageSpeed Insights on mobile and desktop.

### Project Links

- **GitHub Repository:** https://github.com/imvrt20/ethixweb-india
-- **Live Website:** https://your-actual-deployment-url.vercel.app
- **PageSpeed Insights — Mobile:** Add screenshot or report link.
- **PageSpeed Insights — Desktop:** Add screenshot or report link.

---

## 🧪 Testing Checklist

- [ ] Homepage loads correctly.
- [ ] Services, About, and Contact pages work.
- [ ] Navigation links work correctly.
- [ ] Contact form validates user input.
- [ ] Valid enquiries are saved to Supabase.
- [ ] Invalid submissions are rejected.
- [ ] Spam protection is tested.
- [ ] Unauthenticated visitors cannot access the admin dashboard.
- [ ] Non-admin users cannot view or manage enquiries.
- [ ] Authorized administrators can view enquiries.
- [ ] Enquiry statuses can be updated.
- [ ] Changes persist after refreshing the dashboard.
- [ ] Layout works on mobile, tablet, and desktop.
- [ ] No broken links or browser console errors.
- [ ] Production build succeeds.
- [ ] PageSpeed Insights is checked on mobile and desktop.

---

## 📊 Assessment Evaluation Areas

The project assessment evaluates:

| Area | Weight |
|---|---:|
| Design and India fit | 30% |
| UI and UX | 20% |
| Backend and code quality | 20% |
| PageSpeed Insights | 20% |
| Detail and polish | 10% |

---

## 📦 Submission Checklist

- [ ] Live website URL
- [ ] Public GitHub repository
- [ ] README with technology stack and design rationale
- [ ] PageSpeed Insights screenshots for mobile and desktop
- [ ] Demo administrator login details shared securely
- [ ] Optional 1–2 minute walkthrough video

**Important:** Do not publish administrator passwords, Supabase secrets, or other private credentials in this README or in the public GitHub repository. Share demo login details only through the assessment's intended submission process.

---

## 👨‍💻 Developer

GitHub: [@imvrt20](https://github.com/imvrt20)

---

*Developed as part of the Ethixweb Full Stack Developer Assessment.*
