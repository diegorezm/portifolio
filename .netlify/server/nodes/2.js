

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DmJOmekc.js","_app/immutable/chunks/scheduler.C1_rUp2Q.js","_app/immutable/chunks/index.CU7g5CuQ.js"];
export const stylesheets = [];
export const fonts = [];
