(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{280:function(a,e,s){"use strict";s.r(e);var t=s(13),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[a._v("#")]),a._v(" 入门")]),a._v(" "),e("p",[a._v("软件包")]),a._v(" "),e("p",[a._v("https://github.com/thefunpower/app")]),a._v(" "),e("p",[a._v("仅限购买商业授权许可用户使用，非免费软件！")]),a._v(" "),e("p",[a._v("内部开发者composer.json")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"thefunpower/installer": "dev-main"\n')])])]),e("p",[a._v("发版")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"thefunpower/installer": "^1.0"\n')])])]),e("p",[a._v("联系 sunkangchina@163.com")]),a._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("p",[a._v("环境依赖")]),a._v(" "),e("p",[a._v("● PHP 8.1\n● MySQL 5.7\n● Ngnix\n● Redis")]),a._v(" "),e("p",[a._v("执行")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("composer install\nyarn\nvim config.ini.php #内容不用写为空就可以\nchmod -R 777 config.ini.php\n")])])]),e("p",[a._v("修改目录权限")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir uploads\nmkdir data/uploads\nmkdir data/log\nmkdir data/cache\nchmod -R 777 data\nchmod -R 777 cache\nchmod -R 777 uploads\n")])])]),e("p",[a._v("Ngnix重写")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("location ~.*\\.(sql|pem) {\n  deny all;\n}  \nlocation / {\n    if (!-e $request_filename){\n        rewrite ^(.*)$ /index.php last;\n    }  \n}\n")])])]),e("h2",{attrs:{id:"基他配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基他配置"}},[a._v("#")]),a._v(" 基他配置")]),a._v(" "),e("p",[a._v("跨域，如出现跨域问题可在ngnix中配置，一般不需要配置。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("add_header Access-Control-Allow-Origin *;\nadd_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';\nadd_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';\n")])])]),e("h2",{attrs:{id:"上传文件限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传文件限制"}},[a._v("#")]),a._v(" 上传文件限制")]),a._v(" "),e("p",[a._v("请根据实际情况确认修改具体参数\n在Ngnix中的http{}中加")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("client_max_body_size 1000m\n")])])]),e("p",[a._v("php.ini中修改")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("post_max_size = 1000M\nupload_max_filesize = 1000M\nmax_file_uploads = 500\n")])])]),e("h2",{attrs:{id:"max-input-vars"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-input-vars"}},[a._v("#")]),a._v(" max_input_vars")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("max_input_vars = 6000\n")])])]),e("h2",{attrs:{id:"限制uploads访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#限制uploads访问"}},[a._v("#")]),a._v(" 限制uploads访问")]),a._v(" "),e("p",[a._v("请根据需要media.php修改相应代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("location ^~ /uploads {\n    internal; \n} \nlocation ~* \\.(png|jpg|jpeg|gif|pdf|mp4|docx|doc|xls|xlsx|webp|webm)$ { \n    if (!-f $request_filename) {\n        rewrite ^/.*$ /media.php;\n    } \n    if ( -f $request_filename ) {\n        expires 1d;\n    }\n}\n")])])]),e("h2",{attrs:{id:"git自动同步代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git自动同步代码"}},[a._v("#")]),a._v(" GIT自动同步代码")]),a._v(" "),e("p",[a._v("查看密钥")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cat ~/.ssh/id_rsa.pub\n")])])]),e("p",[a._v("生成秘钥")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ssh-keygen -t rsa -C "邮件地址"\n')])])]),e("p",[a._v("本地开发ca证书")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("wget http://curl.haxx.se/ca/cacert.pem\nmkdir -p /usr/local/openssl/ssl/certs/ \nmv cacert.pem /usr/local/openssl/ssl/certs/cacert.pem\n")])])]),e("p",[a._v("修改php.ini")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("openssl.cafile=/usr/local/openssl/ssl/certs/cacert.pem\n")])])]),e("h2",{attrs:{id:"核心包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心包"}},[a._v("#")]),a._v(" 核心包")]),a._v(" "),e("p",[a._v("thefunpower开发包是一套简洁的PHP底层代码。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("composer require thefunpower/core     #核心包\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("composer require thefunpower/db_medoo #数据库\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("composer require thefunpower/auth     #权限\n")])])]),e("h2",{attrs:{id:"依赖包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖包"}},[a._v("#")]),a._v(" 依赖包")]),a._v(" "),e("p",[a._v("Database https://medoo.in/api/select")]),a._v(" "),e("p",[a._v("路由 https://github.com/bramus/router")]),a._v(" "),e("p",[a._v("CURL guzzlephp7 https://docs.guzzlephp.org/en/stable/")]),a._v(" "),e("p",[a._v("csv https://csv.thephpleague.com/")]),a._v(" "),e("p",[a._v("qr https://github.com/endroid/qr-code")]),a._v(" "),e("p",[a._v("微信接口 https://easywechat.com/6.x/")]),a._v(" "),e("p",[a._v("http curl https://github.com/guzzle/guzzle/")]),a._v(" "),e("p",[a._v("layui http://www.uimaker.com/layui/doc/modules/layer.html")])])}),[],!1,null,null,null);e.default=r.exports}}]);