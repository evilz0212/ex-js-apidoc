var gaze = require("gaze")
var exec = require("child_process").exec
var fs = require("fs")

function init() {
	fs.mkdirSync("./api")
	fs.mkdirSync("./doc")
	createConfigureFile()
	beginWatch()
}

function createConfigureFile() {
	var configure = {
		name: "測試",
		version: "0.0.1",
		description: "API文件測試",
		title: "API文件測試",
		url: "http://localhost:8787/",
		sampleUrl: "http://apidoc-sample.com/",
		template: {
			forceLanguage: "zh-cn",
		},
	}
	fs.writeFileSync("./api/apidoc.json", JSON.stringify(configure))
}

function beginWatch() {
	// @ts-ignore
	gaze("./api/*.*", function (error, watcher) {
		this.on("all", function (event, filepath) {
			console.log(filepath + " was " + event)
			runGeneartion()
		})
	})
}

function runGeneartion() {
	var com = exec("apidoc -i ./api -o ./doc ")
	com.stdout.on("data", function (data) {
		console.log("Build success ->" + data)
	})

	com.stderr.on("data", function (data) {
		console.log("Build error ->" + data)
	})
}

if (fs.existsSync("./api") && fs.existsSync("./doc")) {
	beginWatch()
} else {
	init()
}
