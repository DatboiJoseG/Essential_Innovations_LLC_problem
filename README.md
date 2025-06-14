# Essential Innovations LLC

## Project Overview
Kentucky's immigrant and refugee communities face significant challenges in navigating workforce entry and participation, often complicated by language barriers and complex bureaucratic systems.

**AICommunityMobile** is an AI-powered multilingual application designed to help immigrants and refugees in Kentucky access and understand workforce-related information, requirements, and opportunities in their primary language.
[Project Slide Deck](https://docs.google.com/presentation/d/1lBD3rA1fe3HMjcErkoJn9TU1xg3NRMg_ezplriQT3wU/edit#slide=id.g339184218ca_0_17)

## Key Features & Requirements
- Multilingual support for both text and voice interactions
- Web scraping system for government and advocacy websites
- AI-powered Q&A system with source citations (similar to Perplexity)
- Web and mobile applications with offline capabilities
- Real-time translation for user interactions
- Simple admin interface for non-technical staff
- Document processing for form completion assistance
- Notification system for policy updates
- Integration with relevant government APIs where available
- Data privacy and security compliance
- Comprehensive documentation for non-technical administrators

## Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/your-org/your-repo.git
   ```
2. **Install backend dependencies:**
   ```
   cd Backend
   pip install -r requirements.txt
   ```
3. **Install frontend dependencies:**
   ```
   cd ../Front_end
   npm install
   ```

## Usage

- Create an account on https://developer.adzuna.com/, then when logged in: in dashboard, find API Access Details and copy the Application ID and Application Keys to "example.env". Rename "example.env" to ".env"
- Start the Backend Server with -> cd ../Backend -> python backend
- Start the Frontend Server with -> cd ../Front_end -> npm run dev
- Visit https://aistudio.google.com/apikey and create an API Key to use for translation. Put this key into the ".env" file
- Visit the local address (usually 'http://localhost:5173/') provided in the terminal by Vite to access the web app.
- Use the search bar to find jobs, select your language
- Admins can access the admin interface for management tasks.

## Acknowledgments

- Google Gemini API
- Adzuna Job Search API
- BeautifulSoup
- Vite + React
- Other open-source libraries and resources

## Team Members
- **Keenrruy Murillo** (keenrruyjr@gmail.com) – Python, backend, algorithms, data structures
- **Jose Gonzalez** (jose37871@gmail.com) – HTML, CSS, JavaScript/React
- **Annika Chadha** (annikachadha8@gmail.com) – Java, Python
- **Dalton Powell** (dalton@getswell.app) – Web development, React
- **Nghia Truong** (nghiatruong281202@gmail.com) – Backend, algorithms, data structures

## Responsibilities
### Group Wide
- Provide comprehensive documentation for non-technical administrators
- Implement multilingual support for both text and voice interactions (prioritizing text)
- Google Translate API integration
- Allow transcription and voice interaction (audio file upload)
- Real-time translation for user interactions (WebSocket)
- Document processing for form completion assistance (image/file upload, scanning, autofill)
- Notification system for policy updates (in-app, email)

### Backend Team (Keenrruy & Nick)
- Integrate with relevant government APIs
- Ensure no hallucination (Guardrails AI, NeMo Guardrails)
- Connection management (Python Socket Library)
- API key privacy
- Data privacy and security (encryption, hashing, validation)
- User and admin databases (MySQL)
- AI-powered Q&A with source citations (Perplexity API)
- Web scraping (BeautifulSoup)

### Frontend Team (Jose, Annika, Dalton)
- Search bar functionality
- Language selection and translation logic
- Display job descriptions in English and selected language

## Backlog & Stretch Goals
- Voice recognition and response system
- Automated form filling assistance
- Community feedback integration

## Shared Resources
- [Job APIs Open Source](https://jobapis.github.io/open-source/)
---

*For more details, see the project slide deck or contact a team member above.* 
