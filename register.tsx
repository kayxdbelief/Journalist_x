import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

type FormValues = {
  username: string;
  password: string;
  organization: string;
  pressId: string;
};

export default function Register() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: FormValues) => {
    setError("");
    try {
      await axios.post("/api/auth/register", data);
      router.push("/auth/login");
    } catch (err: any) {
      setError("Registration failed");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">
        <input {...register("username")} placeholder="Username" className="p-2 border rounded" required />
        <input {...register("password")} type="password" placeholder="Password" className="p-2 border rounded" required />
        <input {...register("organization")} placeholder="Organization" className="p-2 border rounded" required />
        <input {...register("pressId")} placeholder="Press ID" className="p-2 border rounded" required />
        {error && <span className="text-red-600">{error}</span>}
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Register</button>
      </form>
    </main>
  );
}