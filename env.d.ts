declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string;
        SUPABASE_PASSWORD: string;
        NODE_ENV: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        NEXTAUTH_URL: string;
        NEXT_PUBLIC_URL: string;
        HOST_URL: string;
        NEXTAUTH_SECRET: string;
        JWT_SECRET: string;
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
        STRIPE_SECRET_KEY: string;
    }
}