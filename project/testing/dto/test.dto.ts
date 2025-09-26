import z from "zod";

export const testDto = {
	dto: z.object({
		id: z.number(),
		name: z.string(),
		isActive: z.boolean(),
	}),

	errors: z.object({
		code: z.number(),
		message: z.string(),
	}),
};
