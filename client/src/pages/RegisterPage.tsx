import { useForm, type SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import api from "../api/api";
import type { RegisterResponsePayload } from "@/lib/types";
import axios from "axios";

type RegisterFormFields = {
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormFields>();

  const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    try {
      const res = await api.post("/user/register", data);
      const resPayload = res.data as RegisterResponsePayload;
      setUser({
        id: resPayload.user.id,
        email: resPayload.user.email,
        accessToken: resPayload.accessToken,
      });
    } catch (error) {
      console.log("error", error);
      console.log("axios.isAxiosError(error)", axios.isAxiosError(error));
      if (axios.isAxiosError(error)) {
        let message;

        if (error.response?.data.message.email)
          message = error.response.data.message.email;
        else if (error.response?.data.message.password)
          message = error.response.data.message.password;
        else if (error.response?.data.message)
          message = error.response.data.message;
        else message = "Something went wrong";

        setError("root", {
          type: "manual",
          message,
        });
      }
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen w-11/12 items-center justify-center md:max-w-fit">
      <div className={cn("flex flex-col gap-6")}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                {errors.root && (
                  <p className="text-sm text-red-500">
                    {errors.root.message || "Something went wrong"}
                  </p>
                )}
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      autoComplete="off"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message || "Something went wrong"}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      {...register("password", {
                        required: true,
                      })}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message || "Something went wrong"}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="w-full">
                    Sign up
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="text-center text-xs text-balance text-muted-foreground *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
