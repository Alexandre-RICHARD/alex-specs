import type { Error } from "./Error.type.ts";
import type { Schema } from "./Schema.type.ts";

export type ErrorResponse = Partial<Record<number, Schema<Error>>>;
