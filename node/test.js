var fs = require('fs');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var i=0;
function aa(){
	i++;
	var requrl = 'http://www.hui100.com/Photo/';
	request(requrl, function (error, response, body) {
	if (!error && response.statusCode == 200) {
	// console.log(body);    //返回请求页面的HTML
	acquireData(body);
	fs.writeFile('bb.js', body);
	}
	})

	function acquireData(data) {
	var $ = cheerio.load(data);  //cheerio解析data

	var meizi = $('.main_tdbg_575 img').toArray();  //将所有的img放到一个数组中
	//console.log(meizi.length);
	var len = meizi.length;
	for (var i=0; i<len; i++) {
	    var imgsrc = meizi[i].attribs.src;  //用循环读出数组中每个src地址
	    //imgsrc=imgsrc.replace(/toolTip\(\'\<img src\=/,'').replace(/\>\'\)/,'');
	   console.log(imgsrc);                //输出地址
	    var filename = parseUrlForFileName(imgsrc);  //生成文件名
	    //filename=filename.replace(/\?\w*(\=\w)?/,'');
	    downloadImg(imgsrc,filename,function() {
	        console.log(filename + ' done');
	    });
	}
	}

	function parseUrlForFileName(address) {
	var filename = path.basename(address);
	return filename;
	}

	var downloadImg = function(uri, filename, callback){
	request.head(uri, function(err, res, body){
	// console.log('content-type:', res.headers['content-type']);  //这里返回图片的类型
	// console.log('content-length:', res.headers['content-length']);  //图片大小
	if (err) {
	    console.log('err: '+ err);
	    console.log(11111);
	    return false;
	}
	console.log('res: '+ res);
	request(uri).pipe(fs.createWriteStream('image/'+filename)).on('close', callback);  //调用request的管道来下载到 images文件夹下
	});
	};
	if (i>10) return;
	//else aa();
}
aa();