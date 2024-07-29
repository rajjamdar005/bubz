// lib/auth.ts
export const login = async (email: string): Promise<boolean> => {
    // Replace with your girlfriend's email
    const validEmail = process.env.NEXT_PUBLIC_GIRLFRIEND_EMAIL || 'yashadajawalge@gmail.com'; // Use an environment variable for security
    return email === validEmail;
  };