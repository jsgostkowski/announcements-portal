import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const GenericStringContraint = z.string().min(1).max(18);

const RegistrationSchema = z.object({
  firstName: GenericStringContraint,
  surName: GenericStringContraint,
  password: z.string().min(6),
  email: z.string().email().trim(),
});

export type RegistrationSchema = z.infer<typeof RegistrationSchema>;

export const useRegisterUser = () => {
  return <div>useRegisterUser</div>;
};
