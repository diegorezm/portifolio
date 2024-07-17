

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bz8EXrKW.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.D-6wIv67.js"];
export const stylesheets = [];
export const fonts = [];
