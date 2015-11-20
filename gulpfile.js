var gulp = require ('gulp'),
       webpack = require ('webpack'),
       gutil = require ('gulp-util'),
       path = require ('path');

gulp.task('webpack',function(){
	webpack({
		//configuration
		entry:[path.resolve(__dirname,'react/main.js')],
		module: {
		  	 loaders: [{
		     		test: /\.js[x]?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
		    		 loader: 'jsx-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
		   	}]
		   }
	},function(err,stats){
		if (err) throw new gutil.PluginError('webpack',err);
		gutil.log(['webpack'],stats.toString({
			//output configuration
			output:{
				path:path.resolve(__dirname,'gulp_webpack_react/build'),
				filename:'build22.js'
			}
		}))
	})
})