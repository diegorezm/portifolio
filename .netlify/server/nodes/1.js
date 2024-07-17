

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CGfx3y1U.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.D-6wIv67.js","_app/immutable/chunks/entry.C3YhQoyo.js"];
export const stylesheets = [];
export const fonts = [];
