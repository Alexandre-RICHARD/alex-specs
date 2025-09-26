import type { Endpoint } from "../type/Endpoint.type.ts";
import type { Schema } from "../type/Schema.type.ts";

export type InferEndpointInput<E extends Endpoint> = E["params"] extends infer P
	? {
			path?: P extends { path: Schema<infer T> } ? T : undefined;
			query?: P extends { query: Schema<infer T> } ? T : undefined;
			headers?: P extends { headers: Schema<infer T> } ? T : undefined;
			body?: P extends { body: Schema<infer T> } ? T : undefined;
		}
	: never;
