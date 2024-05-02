export type UserProps = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  created_at: Date;
  isPlanActive: boolean;
  planStartDate: Date | null;
  phone: string | null;
} | null;
