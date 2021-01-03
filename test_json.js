var Html = require('./index.js');

/**
 * 测试html转为json
 * @param {String} file html文件
 */
async function test(file) {
	var html = new Html();
	var text = file.loadText(__dirname + '/');
	// var text = `<body><script src="assets/js/owl.carousel.js"></script></body>`;
	
// 	var text = `
// <div class="breadcrum-bg py-sm-5 py-4">bbbbb
// 				<div class="container py-lg-3">
// 					<h2>About Us</h2>
// 					<p><a href="index.html">Home</a> &nbsp; / &nbsp; About</p>
// 				</div>
// 				<div v-model="form.think"><p>ccc</p>123123</div>
// 			</div>`;
	var ret = html.toJson(text);
	'./test.json'.saveJson(ret, true);
	
	var str = html.toHtml(ret);
	'./test2.html'.saveText(str);
	console.log(ret);
}

test('./test.html');
