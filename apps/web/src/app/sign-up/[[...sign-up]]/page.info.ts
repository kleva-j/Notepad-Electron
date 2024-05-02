import { z } from "zod";

export const Route = {
  name: "Signup",
  params: z.object({
    signup: z.string().array().optional(),
  })
};

