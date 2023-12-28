# Dashboard Project

## Introduction

Welcome to the Dashboard Project! This project is designed to serve as a dashboard for showcasing your projects in an organized and visually appealing manner. It includes features for managing, updating, and exploring various projects easily.

## Features

1. **Project Cards:** Display your projects as interactive cards, providing a snapshot of essential information.

2. **Project Form:** Add new projects to the dashboard using a user-friendly form.

3. **Project Updates:** Update and edit existing projects seamlessly.

4. **Responsive Design:** Ensures a consistent and user-friendly experience across different devices.

5. **Sidebar Navigation:** Navigate through different sections of the dashboard effortlessly using the sidebar.

6. **Active Links:** Highlight active links in the sidebar to provide visual feedback to users.

7. **Collapsible Sidebar:** Maximize screen space by collapsing the sidebar when not in use.

8. **Routing:** Implement routing for easy navigation between different sections of the dashboard.

9. **RESTful API Integration:** Communicate with a server-side API to fetch and update project data.

## Getting Started

Follow these steps to set up and run the Dashboard Project locally:

### Prerequisites

1. Node.js and npm installed on your machine.

### Installation

**1. Clone the repository.**

   ```bash
   git clone 
   ```

**2. Install dependencies.**

  - **For client:**

   ```bash
   cd client
   npm install
   ```
  - **For server:**
   ```bash
   cd server
   npm install
   ```
**3. Some Requisites**

  1. **In the Server:**

     - Add a `.env` file in the server-side with the following configurations:

       ```dotenv
       PORT=5000
       MONGO_URI=your_mongodb_uri
       ```

     - Make necessary changes in the CORS settings based on your requirements.

  2. **In the Client:**

     - Open the `api.js` file in the client and update the API endpoint to the appropriate localhost or the server's address where you are running your server.

**4. Start the development server.**
  - **For Client**
    
     ```bash
     npm run dev
     ```

  - **For server**
    
     ```bash
     npm start
     ```

## Acknowledgements

- React.js for the frontend framework.
- MongoDB for server-side data storage.
- React Router for client-side routing.
- Vercel for deployment.

---
