export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","profile_image.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CtOlc2yM.js","app":"_app/immutable/entry/app.BH5sG04W.js","imports":["_app/immutable/entry/start.CtOlc2yM.js","_app/immutable/chunks/entry.CLK6dbZR.js","_app/immutable/chunks/scheduler.C1_rUp2Q.js","_app/immutable/entry/app.BH5sG04W.js","_app/immutable/chunks/scheduler.C1_rUp2Q.js","_app/immutable/chunks/index.CU7g5CuQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
