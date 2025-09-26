export type PathParamsOf<Path extends string> =
	Path extends `${string}:${infer Param}/${infer Rest}`
		? Record<Param | keyof PathParamsOf<`/${Rest}`>, string>
		: Path extends `${string}:${infer Param}`
			? Record<Param, string>
			: Record<string, never>;
