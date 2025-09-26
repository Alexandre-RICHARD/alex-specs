import type { Schema } from "./Schema.type.ts";

export type Response<Body> = Partial<Record<number, Schema<Body>>>;
