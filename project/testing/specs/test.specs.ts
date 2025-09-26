import { makeApi } from "@zodios/core";
import z from "zod";

import { testDto } from "../dto/test.dto.ts";

export const testSpecs = makeApi([
	{
		method: "get",
		path: "/test/all",
		response: z.array(testDto.dto),
		status: 200,
		alias: "getTests",
		description: "Get all test datas",
		errors: [
			{
				status: 500,
				description: "Servor error",
				schema: testDto.errors,
			},
		],
	},
	{
		method: "get",
		path: "/test/unique",
		response: testDto.dto,
		status: 200,
		alias: "getTest",
		description: "Get one test data",
		errors: [
			{
				status: 500,
				description: "Servor error",
				schema: testDto.errors,
			},
		],
	},
] as const);
