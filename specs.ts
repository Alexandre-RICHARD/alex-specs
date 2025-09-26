import { makeApi } from "@zodios/core";

import { testSpecs } from "./project/testing/specs/test.specs.ts";

const apiSpecs = makeApi([...testSpecs] as const);

export default apiSpecs;
