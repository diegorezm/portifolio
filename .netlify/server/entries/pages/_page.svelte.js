import { c as create_ssr_component, d as add_attribute, e as escape, o as onDestroy, f as spread, h as escape_object, i as createEventDispatcher, v as validate_component, j as each } from "../../chunks/ssr.js";
import { z } from "zod";
const Nav_logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-svelte-h="svelte-1tgj4ok"><a href="/#home"><span class="bg-pink-gradient inline-block text-transparent bg-clip-text">D</span>iego</a></div>`;
});
const Nav_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { path } = $$props;
  let { isMobile = false } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0) $$bindings.isMobile(isMobile);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  return `<a${add_attribute("href", path, 0)}${add_attribute("class", `text-cls-foreground-secondary hover:text-cls-foreground ${isMobile && "text-center h-full w-full p-3 hover:bg-cls-grey"}`, 0)}>${escape(title)}</a>`;
});
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage2, icon.name, data);
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount(storage2, value) {
  return setStoredItem(storage2, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage2) {
  return parseInt(getStoredItem(storage2, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && // Valid item: run callback
      callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage2 = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage2, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage2.lastModifiedCached = storage2.lastModifiedCached ? Math.min(storage2.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
const commonProps = {
  display: "inline-block"
};
const monotoneProps = {
  "background-color": "currentColor"
};
const coloredProps = {
  "background-color": "transparent"
};
const propsToAdd = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
const propsToAddTo = {
  "-webkit-mask": monotoneProps,
  "mask": monotoneProps,
  "background": coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + "-" + prop] = propsToAdd[prop];
  }
}
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(icon, props) {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const mode = props.mode || "svg";
  const componentProps = mode === "svg" ? { ...svgDefaults } : {};
  if (icon.body.indexOf("xlink:") === -1) {
    delete componentProps["xmlns:xlink"];
  }
  let style = typeof props.style === "string" ? props.style : "";
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "color":
        style = style + (style.length > 0 && style.trim().slice(-1) !== ";" ? ";" : "") + "color: " + value + "; ";
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (key.slice(0, 3) === "on:") {
          break;
        }
        if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style = "vertical-align: -0.125em; " + style;
  }
  if (mode === "svg") {
    Object.assign(componentProps, renderAttribs);
    if (style !== "") {
      componentProps.style = style;
    }
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    return {
      svg: true,
      attributes: componentProps,
      body: replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifySvelte")
    };
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  const url = svgToURL(html);
  const styles = {
    "--svg": url
  };
  const size = (prop) => {
    const value = renderAttribs[prop];
    if (value) {
      styles[prop] = fixSize(value);
    }
  };
  size("width");
  size("height");
  Object.assign(styles, commonProps, useMask ? monotoneProps : coloredProps);
  let customStyle = "";
  for (const key in styles) {
    customStyle += key + ": " + styles[key] + ";";
  }
  componentProps.style = customStyle + style;
  return {
    svg: false,
    attributes: componentProps
  };
}
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  initBrowserStorage();
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
function checkIconState(icon, state, mounted, callback, onload) {
  if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
    state.name = "";
    return { data: { ...defaultIconProps, ...icon } };
  }
  let iconName;
  if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
    return null;
  }
  const data = getIconData(iconName);
  if (!data) {
    return null;
  }
  if (state.name !== icon) {
    state.name = icon;
    if (onload && !state.destroyed) {
      onload(icon);
    }
  }
  const classes = ["iconify"];
  if (iconName.prefix !== "") {
    classes.push("iconify--" + iconName.prefix);
  }
  if (iconName.provider !== "") {
    classes.push("iconify--" + iconName.provider);
  }
  return { data, classes };
}
function generateIcon(icon, props) {
  return icon ? render({
    ...defaultIconProps,
    ...icon
  }, props) : null;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let atTop = true;
  return `<div${add_attribute("data-at-top", atTop, 0)}><nav${add_attribute("class", `fixed w-full flex justify-between px-4 md:px-8 py-2 items-center text-xl font-bold ${"bg-transparent"}`, 0)}>${validate_component(Nav_logo, "NavLogo").$$render($$result, {}, {}, {})} <div class="hidden lg:flex space-x-12">${validate_component(Nav_item, "NavItem").$$render($$result, { path: "/#about", title: "About" }, {}, {})} ${validate_component(Nav_item, "NavItem").$$render($$result, { path: "/#projects", title: "Projects" }, {}, {})} ${validate_component(Nav_item, "NavItem").$$render($$result, { path: "/#contact", title: "Contact" }, {}, {})}</div> <button class="text-center lg:hidden rounded-lg bg-transparent hover:cursor-pointer text-2xl">${validate_component(Icon, "Icon").$$render($$result, { icon: "ion:menu" }, {}, {})}</button></nav> ${``}</div>`;
});
const Container_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "to_bottom" } = $$props;
  let { isFullscreen = false } = $$props;
  let { containerId } = $$props;
  const heightClass = isFullscreen ? "min-h-screen" : "min-h-full";
  const variantClass = {
    hero: "bg-hero-gradient",
    to_top: "bg-bt-gradient",
    to_bottom: "bg-tb-gradient"
  }[variant];
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.isFullscreen === void 0 && $$bindings.isFullscreen && isFullscreen !== void 0) $$bindings.isFullscreen(isFullscreen);
  if ($$props.containerId === void 0 && $$bindings.containerId && containerId !== void 0) $$bindings.containerId(containerId);
  return `<section${add_attribute("id", containerId, 0)}${add_attribute("class", `flex flex-col justify-center items-center w-full ${heightClass} ${variantClass}`, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Container_body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<div${add_attribute("class", `w-full px-4 md:px-8 ${className}`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Purple_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="bg-pink-gradient inline-block text-transparent bg-clip-text">${slots.default ? slots.default({}) : ``}</span>`;
});
const Container_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-fit px-8 font-semibold text-4xl mb-2">${validate_component(Purple_text, "PurpleText").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>`;
});
const Container = {
  Root: Container_root,
  Body: Container_body,
  Title: Container_title
};
const About_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container.Root, "Container.Root").$$render(
    $$result,
    {
      containerId: "about",
      variant: "to_bottom",
      isFullscreen: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Container.Body, "Container.Body").$$render(
          $$result,
          {
            className: "flex flex-col gap-8 md:gap-0 justify-center items-center  md:flex-row h-full w-full"
          },
          {},
          {
            default: () => {
              return `<div class="flex justify-center md:w-1/2 2xl:w-1/3" data-svelte-h="svelte-pybkaw"> <img src="/profile_image.png" alt="A picture of me in a suit." class="rounded-lg w-3/4 shadow-pink-shadow"></div> <div class="md:w-1/2 space-y-4"><h1 class="font-primary font-semibold text-4xl text-center">${validate_component(Purple_text, "PurpleText").$$render($$result, {}, {}, {
                default: () => {
                  return `About me`;
                }
              })}</h1> <p class="font-secondary text-2xl text-cls-foreground-secondary" data-svelte-h="svelte-17zuue3">I am a Full Stack Developer from Brazil, currently studying Systems
        Analysis and Development at UNITAU. I have hands-on experience with
        Java and TypeScript, specializing in frameworks like Spring Boot and
        Next.js. My skill set includes certifications in English
        proficiency, web development, data structures and algorithms, and
        Excel. I primarily use Linux as my operating system. I am eager to
        apply my knowledge and grow professionally in new opportunities.</p> <div class="flex space-x-4 text-5xl text-cls-foreground-secondary"><a href="https://www.linkedin.com/in/diegorezm/" class="hover:text-cls-foreground" target="_blank">${validate_component(Icon, "Icon").$$render($$result, { icon: "ion:logo-linkedin" }, {}, {})}</a> <a href="https://github.com/diegorezm" class="hover:text-cls-foreground" target="_blank">${validate_component(Icon, "Icon").$$render($$result, { icon: "ion:logo-github" }, {}, {})}</a></div></div>`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const inpClass = "bg-[#1F2430] rounded-lg p-2 shadow-default focus:outline-none border-2 border-cls-grey focus:border-2 focus:border-cls-light-green ";
const Contact_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { type = "text" } = $$props;
  let { placeholder } = $$props;
  let { error = null } = $$props;
  let { isTextArea = false } = $$props;
  const label = name.charAt(0).toUpperCase() + name.slice(1);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.isTextArea === void 0 && $$bindings.isTextArea && isTextArea !== void 0) $$bindings.isTextArea(isTextArea);
  return `<div class="flex flex-col w-full space-y-1 2xl:space-y-2 2xl:text-lg"><label${add_attribute("for", name, 0)} class="text-cls-light-green">${escape(label)}</label> ${isTextArea ? `<textarea${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("class", inpClass + " h-24 2xl:h-28", 0)}></textarea>` : `<input${add_attribute("type", type, 0)}${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("class", inpClass, 0)}>`} ${error ? `<p class="text-cls-red font-secondary text-md 2xl:text-lg">${escape(error)}</p>` : ``}</div>`;
});
const Button_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "outline" } = $$props;
  let { className = "" } = $$props;
  const variantClass = {
    pink: "bg-pink-gradient text-cls-foreground",
    dark: "bg-dark-gradient text-cls-foreground",
    outline: "border border-cls-background text-cls-foreground hover:border-cls-foreground"
  }[variant];
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<div${add_attribute("class", `flex justify-center items-center font-secondary font-semibold shadow-default rounded-lg ${variantClass} ${className}`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Button_anchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { href } = $$props;
  let { icon = null } = $$props;
  let { toBlank = true } = $$props;
  let className = "w-full text-center";
  if (icon) {
    className = "flex items-center justify-center gap-2 text-center w-full";
  }
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.toBlank === void 0 && $$bindings.toBlank && toBlank !== void 0) $$bindings.toBlank(toBlank);
  return `<a${add_attribute("class", className, 0)}${add_attribute("href", href, 0)}${add_attribute("target", toBlank ? "_blank" : "_self", 0)}><span>${escape(label)}</span> ${icon ? `${validate_component(Icon, "Icon").$$render($$result, { icon }, {}, {})}` : ``}</a>`;
});
const Button_spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div role="status" data-svelte-h="svelte-1c2sgll"><svg aria-hidden="true" class="w-6 h-12 text-cls-background animate-spin fill-cls-light-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg></div>`;
});
const Button_normal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "button" } = $$props;
  let { disabled = false } = $$props;
  let { isLoading = false } = $$props;
  let { label } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0) $$bindings.isLoading(isLoading);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  return `<button class="flex flex-row items-center justify-center w-full gap-2 px-2"${add_attribute("type", type, 0)} ${disabled ? "disabled" : ""}>${isLoading ? `${validate_component(Button_spinner, "ButtonSpinner").$$render($$result, {}, {}, {})}` : ``} ${escape(label)}</button>`;
});
const Button = {
  Root: Button_root,
  Anchor: Button_anchor,
  Normal: Button_normal
};
const Contact_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoading = false;
  let zodErrors = {};
  z.object({
    email: z.string().email().min(6, "Email must be at least 6 characters"),
    name: z.string().min(3, "Name must be at least 3 characters"),
    message: z.string().min(12, "Message must be at least 12 characters").max(256, "Message must be at most 256 characters")
  }).strict();
  return `<form class="w-full md:w-1/2 font-secondary min-h-full bg-light-card shadow-default-card p-4 rounded-xl space-y-6 2xl:space-y-8"><h1 class="font-primary text-3xl 2xl:text-4xl font-bold text-center text-cls-foreground w-full" data-svelte-h="svelte-1dobws9">Let&#39;s talk!</h1> ${validate_component(Contact_input, "ContactInput").$$render(
    $$result,
    {
      name: "name",
      placeholder: "your name...",
      type: "text",
      error: zodErrors.name
    },
    {},
    {}
  )} ${validate_component(Contact_input, "ContactInput").$$render(
    $$result,
    {
      name: "email",
      placeholder: "your email...",
      type: "email",
      error: zodErrors.email
    },
    {},
    {}
  )} <input type="text" name="hidden" id="hidden" hidden> ${validate_component(Contact_input, "ContactInput").$$render(
    $$result,
    {
      name: "message",
      placeholder: "your message...",
      type: "text",
      error: zodErrors.message,
      isTextArea: true
    },
    {},
    {}
  )} ${validate_component(Button.Root, "Button.Root").$$render(
    $$result,
    {
      variant: "pink",
      className: "w-1/2 md:w-1/5 h-10 2xl:h-10 2xl:text-l"
    },
    {},
    {
      default: () => {
        return `${validate_component(Button.Normal, "Button.Normal").$$render(
          $$result,
          {
            label: "Submit",
            type: "submit",
            isLoading,
            disabled: isLoading
          },
          {},
          {}
        )}`;
      }
    }
  )} ${``}</form>`;
});
const Contact_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container.Root, "Container.Root").$$render(
    $$result,
    {
      variant: "to_top",
      containerId: "contact"
    },
    {},
    {
      default: () => {
        return `${validate_component(Container.Title, "Container.Title").$$render($$result, {}, {}, {
          default: () => {
            return `Contact`;
          }
        })} ${validate_component(Container.Body, "Container.Body").$$render($$result, { className: "flex justify-center mb-2" }, {}, {
          default: () => {
            return `${validate_component(Contact_form, "ContactForm").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    }
  )}`;
});
const Home_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container.Root, "Container.Root").$$render(
    $$result,
    {
      variant: "hero",
      containerId: "home",
      isFullscreen: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Container.Body, "Container.Body").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="flex flex-col gap-8 md:gap-12 justify-center items-center w-fit m-auto h-full"><h1 class="block text-center text-6xl lg:text-7xl font-bold font-primary">Hello!
        <br> My name is ${validate_component(Purple_text, "PurpleText").$$render($$result, {}, {}, {
              default: () => {
                return `Diego`;
              }
            })},<br>
        i&#39;m a ${validate_component(Purple_text, "PurpleText").$$render($$result, {}, {}, {
              default: () => {
                return `fullstack`;
              }
            })} developer!</h1> <div class="flex justify-center md:justify-start w-full gap-8 text-lg">${validate_component(Button.Root, "Button.Root").$$render(
              $$result,
              {
                variant: "pink",
                className: "w-fit px-1 md:w-1/4 h-12"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Button.Anchor, "Button.Anchor").$$render(
                    $$result,
                    {
                      label: "See my resume!",
                      href: "https://diegorezm.github.io/curriculum/cv_fullstack_en.pdf",
                      toBlank: true
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} ${validate_component(Button.Root, "Button.Root").$$render(
              $$result,
              {
                variant: "dark",
                className: "w-fit px-1 md:w-1/4 h-12"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Button.Anchor, "Button.Anchor").$$render($$result, { label: "Contact me!", href: "/#contact" }, {}, {})}`;
                }
              }
            )}</div></div>`;
          }
        })}`;
      }
    }
  )}`;
});
const projects = [
  {
    id: 1,
    name: "Convenience Store",
    sourceCode: "https://github.com/diegorezm/convenience.store.api",
    description: "Full-stack application consisting of a Spring Boot API that interacts with a SQL database. It includes authentication, tests using JUnit and MockMvc, and utilizes Docker for easy deployment. The frontend is built with Next.js",
    tech: ["Java", "Docker", "Spring Boot", "Nextjs", "Typescript"],
    details: "https://www.youtube.com/watch?v=Qd2bRPsiaZE"
  },
  {
    id: 2,
    name: "Start page",
    sourceCode: "https://github.com/diegorezm/start_page",
    description: "Simple and customizable browser start page built with Svelte. The application uses TypeScript and allows users to manage bookmarks and other customization options.",
    tech: ["Typescript", "Svelte"],
    details: "https://diegorezm.github.io/start_page/"
  },
  {
    id: 3,
    name: "Agenda app",
    sourceCode: "https://github.com/diegorezm/agenda-app",
    description: "A Next.js application that allows users to interact with MongoDB and manage their contacts. It also includes an authentication system.",
    tech: ["Node", "Tailwind", "Nextjs", "Typescript", "Mongodb"],
    details: "https://www.youtube.com/watch?v=iH5q3USLrf0"
  },
  {
    id: 4,
    name: "School app",
    sourceCode: "https://github.com/diegorezm/school_go",
    description: "A Go web app that interacts with a PostgreSQL database and allows users to manage student data. This app is built using the default Go net/http package and htmx.",
    tech: ["Go", "PostgreSQL", "Docker", "Htmx"],
    details: "https://www.youtube.com/watch?v=T2mdSxnGhgY"
  }
];
const Project_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  const techStr = project.tech.join(", ");
  if ($$props.project === void 0 && $$bindings.project && project !== void 0) $$bindings.project(project);
  return `<div class="w-full h-full bg-light-card shadow-default-card rounded-lg p-2 space-y-1 2xl:p-4 2xl:space-y-3"><p class="text-cls-light-green text-md 2xl:text-lg">${escape(techStr)}</p> <h1 class="text-xl 2xl:text-2xl">${escape(project.name)}</h1> <p class="font-secondary text-lg 2xl:text-xl text-cls-foreground-secondary">${escape(project.description)}</p> <div class="flex gap-2">${validate_component(Button.Root, "Button.Root").$$render(
    $$result,
    {
      variant: "outline",
      className: "w-1/4 2xl:w-1/3 h-10"
    },
    {},
    {
      default: () => {
        return `${validate_component(Button.Anchor, "Button.Anchor").$$render(
          $$result,
          {
            label: "code",
            href: project.sourceCode,
            icon: "lucide:code",
            toBlank: true
          },
          {},
          {}
        )}`;
      }
    }
  )} ${validate_component(Button.Root, "Button.Root").$$render(
    $$result,
    {
      variant: "outline",
      className: "w-1/4 2xl:w-1/3 h-10"
    },
    {},
    {
      default: () => {
        return `${validate_component(Button.Anchor, "Button.Anchor").$$render(
          $$result,
          {
            label: "details",
            href: project.details,
            icon: "lucide:square-arrow-out-up-right",
            toBlank: true
          },
          {},
          {}
        )}`;
      }
    }
  )}</div></div>`;
});
const Project_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container.Root, "Container.Root").$$render(
    $$result,
    {
      containerId: "projects",
      variant: "to_top"
    },
    {},
    {
      default: () => {
        return `${validate_component(Container.Title, "Container.Title").$$render($$result, {}, {}, {
          default: () => {
            return `Projects`;
          }
        })} ${validate_component(Container.Body, "Container.Body").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-2">${each(projects, (project) => {
              return `${validate_component(Project_item, "ProjectItem").$$render($$result, { project }, {}, {})}`;
            })}</div>`;
          }
        })}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div>${validate_component(Home_section, "HomeSection").$$render($$result, {}, {}, {})} ${validate_component(About_section, "AboutSection").$$render($$result, {}, {}, {})} ${validate_component(Project_section, "ProjectSection").$$render($$result, {}, {}, {})} ${validate_component(Contact_section, "ContactSection").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
