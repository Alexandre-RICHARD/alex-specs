import type { Endpoint } from "../type/Endpoint.type.ts";
import type { Schema } from "../type/Schema.type.ts";

export type InferSuccess<E extends Endpoint> = E["responses"] extends infer R
	? {
			status: Extract<keyof R, number>;
			body: R extends Partial<Record<number, Schema<infer T>>> ? T : unknown;
		}
	: { status: number; body: unknown };
