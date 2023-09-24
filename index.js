/**
 * 修复 微信小程序中使用一些公共库（比如lodash-es）时，global没有指向window的问题
 */
global.Object = Object;
global.Array = Array;
global.DataView = DataView;
global.Date = Date;
global.Error = Error;
global.Float32Array = Float32Array;
global.Float64Array = Float64Array;
global.Function = Function;
global.Int8Array = Int8Array;
global.Int16Array = Int16Array;
global.Int32Array = Int32Array;
global.Map = Map;
global.Math = Math;
global.Promise = Promise;
global.RegExp = RegExp;
global.Set = Set;
global.String = String;
global.Symbol = Symbol;
global.TypeError = TypeError;
global.Uint8Array = Uint8Array;
global.Uint8ClampedArray = Uint8ClampedArray;
global.Uint16Array = Uint16Array;
global.Uint32Array = Uint32Array;
global.WeakMap = WeakMap;
global.clearTimeout = clearTimeout;
global.isFinite = isFinite;
global.parseInt = parseInt;
global.setTimeout = setTimeout;

// 这里设置导出，防止像vite这样的工具在编译是把global转成其他变量
export default global;