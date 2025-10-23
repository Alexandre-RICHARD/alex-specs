import type { HttpStatutCodeEnum } from "./httpStatutCode.enum.ts";

export type ResponseStatusMap = Partial<Record<HttpStatutCodeEnum, unknown>>;
