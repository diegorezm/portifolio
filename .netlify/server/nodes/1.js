

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.r8UfHyk3.js","_app/immutable/chunks/scheduler.C1_rUp2Q.js","_app/immutable/chunks/index.CU7g5CuQ.js","_app/immutable/chunks/entry.CLK6dbZR.js"];
export const stylesheets = [];
export const fonts = [];
