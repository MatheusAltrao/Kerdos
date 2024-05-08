<h1 align="center"> Holiday Plan </h1> <br>
<p align="center">
    <img src="https://i.pinimg.com/originals/2c/1d/27/2c1d2765695234ee48c45809ed033bc1.png" alt="Kerdos">
</p>

<p align="center">
 Built with Next JS.
</p>

## Kerdos Financial Dashboard Project

## Introduction

Welcome to the "Kerdos Financial Dashboard" project repository, a state-of-the-art tool designed to assist users in managing and tracking their finances. Developed by the Kerdos development team for 2024, this application focuses on providing a user-friendly and responsive interface for financial management. It incorporates modern technologies to offer functionalities such as financial tracking, investment monitoring, and plan management.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies Used

<p>To meet the project's requirements and ensure a high-quality user experience, we chose a modern and efficient technological stack:</p>

-   Next.js: Chosen for its efficiency in server-side rendering and static site generation, Next.js serves as the backbone of our project, providing a fast and secure user experience.<br />

-   Supabase: Serves as the backend, integrating database and authentication services.<br />

-   Tailwind CSS: For a responsive and customizable design, we utilized Tailwind CSS, which allows us to build an elegant and adaptable user interface without sacrificing performance.<br />

-   React Hook Form: To optimize form validation and data handling, React Hook Form was integrated to manage forms efficiently, enhancing the user interaction experience.<br />

-   Axios: Handles API requests, ensuring smooth and efficient data transfer.

-   Prisma: As our ORM (Object-Relational Mapping), Prisma allows us to interact with the MongoDB database in a more intuitive and safe manner, simplifying database operations with its schema definition model and high-level queries.<br />

-   Stripe: Implements subscription management and payment processing.<br />

-   HGAPIBrasil: Integrates external APIs for real-time financial data like foreign exchange rates.<br />

-   NextAuth: Manages authentication with robust security features, including Google credentials.<br />

-   Shadcn UI: Employs a UI library for consistent styling across components, including buttons, cards, and dialogs.<br />


<p>Each technological choice was made with the goal of creating a robust, efficient, and user-friendly application capable of meeting our users' vacation planning management needs, while offering the flexibility to evolve and expand in the future.</p>

# Features

-   Financial Management: Create, view, and delete financial records with ease.<br />

-   Dashboard Analytics: Visual representations of financial data, including entry, exit, and balance, with bar and pie charts to illustrate transaction types and volumes.<br />

-   Form Validation: With React Hook Form, we implemented client-side validations to ensure all required fields are correctly filled and the date formats are correct before submitting a vacation plan.<br />

-   Investment Tracking: Access real-time data on global currency rates and financial indicators via HGAPIBrasil, beneficial for investors.<br />

-   Recurring Subscriptions: Use Stripe for managing recurring payment plans, enhancing user convenience.<br />

-   CRUD Operations with Supabase: For backend services, the "Kerdos Financial Dashboard" utilizes Supabase, an open-source Firebase alternative, to handle a variety of backend operations. Supabase offers a comprehensive suite of features including database management, authentication, and real-time subscriptions, which we leverage to implement robust CRUD functionalities in our application. <br />

-   Asynchronous Requests with Axios: For a smooth and dynamic user experience, we used Axios to perform asynchronous HTTP requests, interacting with our API effectively. <br />

# Design

<p>
The interface design is minimalist, employing a straightforward approach with Shadcn UI, focusing on usability and aesthetics. The design uses a neutral color palette with blue accents to highlight interactive elements, ensuring a user-friendly environment that reduces visual clutter.
 </p>

# Back-end

<p>This project implements a RESTful API using Next.js, leveraging Prisma for database interactions and Axios for external API communications. It supports comprehensive financial management functionalities, including CRUD operations, all secured with NextAuth authentication.</p>

### User Authentication

<p>Users can securely access the system using NextAuth for authentication, providing a reliable and secure login mechanism.</p>

# Financial Record Management

-   Create Records: Users can add new financial records by submitting relevant details. <br />
-   View Records: Users can view details of their financial activities. <br />
-   Delete Records: Secure deletion of records is possible, with authentication checks to ensure data integrity. <br />


# Conclusion

The "Kerdos Financial Dashboard" offers an advanced platform for managing personal finances, providing tools for monitoring and analyzing financial health effectively. It stands out as a comprehensive solution for financial management in the digital age.

# Contact

Owner: Matheus Altrão
Email: matheusaltrao2@gmail.com
linkedin:[linkedin.com/matheus-altrao](https://www.linkedin.com/in/matheus-altrao/)
Portfolio:[www.matheusaltrao.dev](https://www.matheusaltrao.dev/)
