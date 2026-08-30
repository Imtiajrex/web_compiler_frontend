/* eslint-disable import/no-anonymous-default-export */

import NCCModule from "./ncc";

let result = "";

let compile = async (code, file_name) => {
	let instance = await NCCModule({
		noInitialRun: true,
		// noExitRuntime: true,
		print: (function () {
			return function (text) {
				if (arguments.length > 1)
					text = Array.prototype.slice.call(arguments).join(" ");
				// console.log(text);
				result = result + "<br/><a  style='color:white'>" + text + "</a>";
			};
		})(),
		printErr: function (text) {
			if (arguments.length > 1)
				text = Array.prototype.slice.call(arguments).join(" ");
			// console.log(("Error:", text));
			result = result + "<br/><a style='color:#fc516b'>" + text + "</a>";
		},
	});

	// console.log(code);
	var blob = new Blob([code], { type: "text/plain" });
	var newBlob = await new Response(blob).arrayBuffer();
	let data = new Uint8Array(newBlob);

	instance.FS_createDataFile("", file_name, data, true, true, true);
	instance.ccall("web_main", "number", ["string"], [file_name]);
	instance.FS_unlink("./" + file_name);
	let res = result;
	result = "";
	return res;
};
export default compile;
