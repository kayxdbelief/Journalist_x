import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

type FormValues = {
  username: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: FormValues) => {
    setError("");
    try {
      const res = await axios.post("/api/auth/login", data);
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (err: any) {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">
        <input {...register("username")} placeholder="Username" className="p-2 border rounded" required />
        <input {...register("password")} type="password" placeholder="Password" className="p-2 border rounded" required />
        {error && <span className="text-red-600">{error}</span>}
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </main>
  );
}