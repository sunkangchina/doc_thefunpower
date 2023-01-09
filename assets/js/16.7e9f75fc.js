(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{286:function(a,t,s){"use strict";s.r(t);var e=s(13),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[a._v("#")]),a._v(" 函数")]),a._v(" "),t("h2",{attrs:{id:"数组或字符输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组或字符输出"}},[a._v("#")]),a._v(" 数组或字符输出")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pr($str);\n")])])]),t("h2",{attrs:{id:"版本号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本号"}},[a._v("#")]),a._v(" 版本号")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_version()\n")])])]),t("p",[a._v("对应 https://github.com/thefunpower/core 的"),t("code",[a._v("version.php")])]),a._v(" "),t("h2",{attrs:{id:"获取本地include文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取本地include文件内容"}},[a._v("#")]),a._v(" 获取本地include文件内容")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_include_content($local_file)\n")])])]),t("h2",{attrs:{id:"添加动作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加动作"}},[a._v("#")]),a._v(" 添加动作")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("add_action($name, $call,$level = 20)\n")])])]),t("h2",{attrs:{id:"执行动作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行动作"}},[a._v("#")]),a._v(" 执行动作")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("do_action($name, &$par = null);\n")])])]),t("h2",{attrs:{id:"自动加载主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动加载主题"}},[a._v("#")]),a._v(" 自动加载主题")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('autoload_theme($name = "front")\n')])])]),t("h2",{attrs:{id:"跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳转"}},[a._v("#")]),a._v(" 跳转")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("jump($url)\n")])])]),t("h2",{attrs:{id:"cdn地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn地址"}},[a._v("#")]),a._v(" CDN地址")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("static_url()\n")])])]),t("p",[a._v("需要配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$config['cdn_url'] = [\n\t'',\n];\n")])])]),t("p",[a._v("如果没有配置将返回本地host地址")]),a._v(" "),t("h2",{attrs:{id:"输出json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出json"}},[a._v("#")]),a._v(" 输出json")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("json($data)\n")])])]),t("p",[a._v("JSON输出前")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("do_action('end.data', $data);\n")])])]),t("p",[a._v("JSON输出后或页面渲染后")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('do_action("end");\n')])])]),t("h2",{attrs:{id:"当前域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前域名"}},[a._v("#")]),a._v(" 当前域名")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("host()\n")])])]),t("h2",{attrs:{id:"判断是命令行下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断是命令行下"}},[a._v("#")]),a._v(" 判断是命令行下")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("is_cli()\n")])])]),t("h2",{attrs:{id:"是否是post请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否是post请求"}},[a._v("#")]),a._v(" 是否是POST请求")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("is_post()\n")])])]),t("h2",{attrs:{id:"是否是json格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否是json格式"}},[a._v("#")]),a._v(" 是否是json格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("is_json($data)\n")])])]),t("h2",{attrs:{id:"加载css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载css"}},[a._v("#")]),a._v(" 加载css")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("css($file, $is_output = true)\n")])])]),t("h2",{attrs:{id:"加载-js文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载-js文件"}},[a._v("#")]),a._v(" 加载 JS文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("js($file, $is_output = true)\n")])])]),t("h2",{attrs:{id:"数组转对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组转对象"}},[a._v("#")]),a._v(" 数组转对象")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("array_to_object($arr)\n")])])]),t("h2",{attrs:{id:"对象转数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象转数组"}},[a._v("#")]),a._v(" 对象转数组")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("object_to_array($obj)\n")])])]),t("h2",{attrs:{id:"取目录名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取目录名"}},[a._v("#")]),a._v(" 取目录名")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_dir($name)\n")])])]),t("h2",{attrs:{id:"取后缀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取后缀"}},[a._v("#")]),a._v(" 取后缀")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_ext($name)\n")])])]),t("p",[a._v("返回全小写且不包含.")]),a._v(" "),t("h2",{attrs:{id:"取文件名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取文件名"}},[a._v("#")]),a._v(" 取文件名")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_name($name)\n")])])]),t("h2",{attrs:{id:"创建目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[a._v("#")]),a._v(" 创建目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("create_dir_if_not_exists($arr = [])\n")])])]),t("p",[a._v("支持数组或字符串，传入完整的本地路径")]),a._v(" "),t("h2",{attrs:{id:"是否是本地环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否是本地环境"}},[a._v("#")]),a._v(" 是否是本地环境")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("is_local()\n")])])]),t("h2",{attrs:{id:"取ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取ip"}},[a._v("#")]),a._v(" 取IP")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_ip()\n")])])]),t("h2",{attrs:{id:"当前时间datetime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前时间datetime"}},[a._v("#")]),a._v(" 当前时间datetime")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("now()\n")])])]),t("h2",{attrs:{id:"计算两点地理坐标之间的距离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算两点地理坐标之间的距离"}},[a._v("#")]),a._v(" 计算两点地理坐标之间的距离")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_distance($longitude1, $latitude1, $longitude2, $latitude2, $unit = 2, $decimal = 2)\n")])])]),t("p",[t("code",[a._v("$unit")]),a._v(" 单位 1:米 2:公里")]),a._v(" "),t("p",[t("code",[a._v("$decimal")]),a._v("\t精度 保留小数位数")]),a._v(" "),t("h2",{attrs:{id:"判断是否是ssl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断是否是ssl"}},[a._v("#")]),a._v(" 判断是否是ssl")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("is_ssl()\n")])])]),t("h2",{attrs:{id:"设置、获取cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置、获取cookie"}},[a._v("#")]),a._v(" 设置、获取cookie")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cookie($name, $value = NULL, $expire = 0)\n")])])]),t("p",[a._v("例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//设置三年cookie\ncookie('id',1,time()+86400*365*3);\n//获取cookie\ncookie('id')\n")])])]),t("h2",{attrs:{id:"删除cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除cookie"}},[a._v("#")]),a._v(" 删除cookie")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("remove_cookie($name)\n")])])]),t("h2",{attrs:{id:"时间区间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间区间"}},[a._v("#")]),a._v(" 时间区间")]),a._v(" "),t("p",[a._v("一般用不到")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("date_limit()\n")])])]),t("p",[a._v("返回")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' min="1900-01-01" max="\'.$max.\'-12-31"\n')])])]),t("h2",{attrs:{id:"路径列表-支持文件夹下的子所有文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径列表-支持文件夹下的子所有文件夹"}},[a._v("#")]),a._v(" 路径列表，支持文件夹下的子所有文件夹")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_deep_dir($path)\n")])])]),t("h2",{attrs:{id:"显示2位小数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示2位小数"}},[a._v("#")]),a._v(" 显示2位小数")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("price_format($yuan,$dot = 2)\n")])])]),t("h2",{attrs:{id:"返回错误信息-json格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回错误信息-json格式"}},[a._v("#")]),a._v(" 返回错误信息，JSON格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("json_error($arr = [])\n")])])]),t("h2",{attrs:{id:"返回成功信息-json格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回成功信息-json格式"}},[a._v("#")]),a._v(" 返回成功信息，JSON格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("json_success($arr = [])\n")])])]),t("h2",{attrs:{id:"yaml转数组-数组转yaml格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yaml转数组-数组转yaml格式"}},[a._v("#")]),a._v(" yaml转数组，数组转yaml格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yaml($str)\n")])])]),t("h2",{attrs:{id:"加载theme下文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载theme下文件"}},[a._v("#")]),a._v(" 加载theme下文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("view($name, $params = [])\n")])])]),t("h2",{attrs:{id:"前台当前主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前台当前主题"}},[a._v("#")]),a._v(" 前台当前主题")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_theme()\n")])])]),t("h2",{attrs:{id:"前台主题url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前台主题url"}},[a._v("#")]),a._v(" 前台主题url")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("theme_url()\n")])])]),t("h2",{attrs:{id:"设置前台主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置前台主题"}},[a._v("#")]),a._v(" 设置前台主题")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set_theme($name)\n")])])]),t("h2",{attrs:{id:"设置后台主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置后台主题"}},[a._v("#")]),a._v(" 设置后台主题")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set_admin_theme($name)\n")])])]),t("h2",{attrs:{id:"后台主题url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后台主题url"}},[a._v("#")]),a._v(" 后台主题url")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("admin_theme_url()\n")])])]),t("h2",{attrs:{id:"设置配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置配置"}},[a._v("#")]),a._v(" 设置配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set_config($title, $body)\n")])])]),t("h2",{attrs:{id:"获取配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取配置"}},[a._v("#")]),a._v(" 获取配置")]),a._v(" "),t("p",[a._v("优先取数据库，未找到后取配置文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_config($title)\n")])])]),t("h2",{attrs:{id:"elementui-table序号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elementui-table序号"}},[a._v("#")]),a._v(" elementui table序号")]),a._v(" "),t("p",[a._v("在vue method中添加")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<?= element_index_method() ?>,\n")])])]),t("p",[a._v("生成indexMethod(index)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<el-table-column type="index" label="序号" :index="indexMethod" width="50">\n</el-table-column>\n')])])]),t("h2",{attrs:{id:"每页显示多少条记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每页显示多少条记录"}},[a._v("#")]),a._v(" 每页显示多少条记录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("page_size($name)\n")])])]),t("h2",{attrs:{id:"显示下拉选择分页每页显示多少条"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示下拉选择分页每页显示多少条"}},[a._v("#")]),a._v(" 显示下拉选择分页每页显示多少条")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("page_size_array()\n")])])]),t("h2",{attrs:{id:"aes加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aes加密"}},[a._v("#")]),a._v(" AES加密")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$token = urlencode(aes_encode($d)); \n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("aes_encode($data, $key = '', $iv = '', $type = 'AES-128-CBC', $options = '')\n")])])]),t("p",[t("code",[a._v("$data")]),a._v("如果是数组需"),t("code",[a._v("json_encode")])]),a._v(" "),t("p",[a._v("配置config.ini.php")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$config['aes_key'] = \"\";\n$config['aes_iv']  = \"\";\n")])])]),t("h2",{attrs:{id:"aes解密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aes解密"}},[a._v("#")]),a._v(" AES解密")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$token = $_GET['token']; \n$token = aes_decode($token);\npr($token);\n")])])]),t("h2",{attrs:{id:"翻译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#翻译"}},[a._v("#")]),a._v(" 翻译")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lang($name, $val = [], $pre = 'app')\n")])])]),t("p",[a._v("配置"),t("code",[a._v("lang/app.php")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("return [\n    'welcome' => '你好{name}', \n]; \n")])])]),t("p",[a._v("调用")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<?= lang('welcome',['name'=>'test'])?>\n")])])]),t("h2",{attrs:{id:"搜索替换-n-空格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索替换-n-空格"}},[a._v("#")]),a._v(" 搜索替换\\n , ，空格")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("string_to_array($name,$array = '')\n")])])]),t("p",[a._v("已替换")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"\\n",\n"，",\n"、",\n"|",\n",",\nchr(10),\n')])])]),t("h2",{attrs:{id:"返回两个时间点间的日期数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回两个时间点间的日期数组"}},[a._v("#")]),a._v(" 返回两个时间点间的日期数组")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_dates($start, $end)\n")])])]),t("p",[a._v("时间格式 Y-m-d")]),a._v(" "),t("h2",{attrs:{id:"当前时间是周几"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前时间是周几"}},[a._v("#")]),a._v(" 当前时间是周几")]),a._v(" "),t("p",[a._v("时间格式 Y-m-d")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_date_china($date)\n")])])]),t("h2",{attrs:{id:"多少时间之前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多少时间之前"}},[a._v("#")]),a._v(" 多少时间之前")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("timeago($time)\n")])])]),t("h2",{attrs:{id:"请求是否是ajax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求是否是ajax"}},[a._v("#")]),a._v(" 请求是否是AJAX")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("is_ajax()\n")])])]),t("h2",{attrs:{id:"防止重复执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防止重复执行"}},[a._v("#")]),a._v(" 防止重复执行")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cli_prevent_duplication($argv, $cmd = 'php cmd.php')\n")])])]),t("h2",{attrs:{id:"包含文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包含文件"}},[a._v("#")]),a._v(" 包含文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("import($file)\n")])])]),t("h2",{attrs:{id:"生成表单token-防止重复提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成表单token-防止重复提交"}},[a._v("#")]),a._v(" 生成表单TOKEN，防止重复提交")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<input type="hidden" name="form_token" value="<?=create_form_token()?>">\n')])])]),t("h2",{attrs:{id:"检测表单token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测表单token"}},[a._v("#")]),a._v(" 检测表单TOKEN")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("check_form_token(g('form_token'));\n")])])]),t("h2",{attrs:{id:"检测reffer是否正常-如异常返回json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测reffer是否正常-如异常返回json"}},[a._v("#")]),a._v(" 检测reffer是否正常，如异常返回JSON")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("check_reffer_with_json($allow_domain = [], $is_root = true)\n")])])]),t("h2",{attrs:{id:"检测reffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测reffer"}},[a._v("#")]),a._v(" 检测reffer")]),a._v(" "),t("p",[a._v("返回true或false")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("check_reffer($allow_domain = [], $is_root = true)\n")])])]),t("h2",{attrs:{id:"取reffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取reffer"}},[a._v("#")]),a._v(" 取reffer")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_reffer($refer = '')\n")])])]),t("h2",{attrs:{id:"取主域名-如-admin-baidu-com返回baidu-com"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取主域名-如-admin-baidu-com返回baidu-com"}},[a._v("#")]),a._v(" 取主域名，如 admin.baidu.com返回baidu.com")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_root_domain($host = '')\n")])])]),t("h2",{attrs:{id:"取子域名-如admin-baidu-com返回admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取子域名-如admin-baidu-com返回admin"}},[a._v("#")]),a._v(" 取子域名，如admin.baidu.com返回admin")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_sub_domain($host = '')\n")])])]),t("h2",{attrs:{id:"admin-header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-header"}},[a._v("#")]),a._v(" admin header")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("admin_header()\n")])])]),t("h2",{attrs:{id:"admin-footer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-footer"}},[a._v("#")]),a._v(" admin footer")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("admin_footer()\n")])])]),t("h2",{attrs:{id:"格式化金额"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#格式化金额"}},[a._v("#")]),a._v(" 格式化金额")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("format_money($money, $len = 2, $sign = '￥')\n")])])]),t("h2",{attrs:{id:"生成签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成签名"}},[a._v("#")]),a._v(" 生成签名")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sign_by_secret($params,$secret='',$array_encode = false)\n")])])]),t("h2",{attrs:{id:"设置当前语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置当前语言"}},[a._v("#")]),a._v(" 设置当前语言")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set_lang($lang = 'zh-cn')\n")])])]),t("h2",{attrs:{id:"生成url包含host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成url包含host"}},[a._v("#")]),a._v(" 生成URL包含host")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("create_url($url)\n")])])]),t("h2",{attrs:{id:"block"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#block"}},[a._v("#")]),a._v(" block")]),a._v(" "),t("p",[a._v("BLOCK开始")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("block_start($name)\nblock_end()\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("get_block($name)\n")])])]),t("h2",{attrs:{id:"zip解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zip解压"}},[a._v("#")]),a._v(" ZIP解压")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("zip_extract($local_file,$extract_local_dir)\n")])])]),t("h2",{attrs:{id:"生成zip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成zip"}},[a._v("#")]),a._v(" 生成ZIP")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("zip_create($local_zip_file,$files = [])\n")])])]),t("h2",{attrs:{id:"pdf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pdf"}},[a._v("#")]),a._v(" PDF")]),a._v(" "),t("p",[a._v("加载pdf，自动判断是否使用了背景文字水印")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pdf_auto($text = null)\n")])])]),t("p",[a._v("无水印")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pdf($font_size = 9,$default_config_option=[])\n")])])]),t("p",[a._v("文字水印")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pdf_watermark($text = null)\n")])])]),t("p",[a._v("https://mpdf.github.io/")]),a._v(" "),t("h2",{attrs:{id:"生成签名链接-实验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成签名链接-实验"}},[a._v("#")]),a._v(" 生成签名链接 [实验]")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("create_sample_sign_url($arr = [])\n")])])]),t("h2",{attrs:{id:"验证签名链接是否可用-实验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证签名链接是否可用-实验"}},[a._v("#")]),a._v(" 验证签名链接是否可用 [实验]")]),a._v(" "),t("p",[t("code",[a._v("$exp_time")]),a._v(" 秒")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("verify_sample_sign_url($exp_time = 60)\n")])])]),t("h2",{attrs:{id:"检查签名防止篡改-实验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查签名防止篡改-实验"}},[a._v("#")]),a._v(" 检查签名防止篡改 [实验]")]),a._v(" "),t("p",[a._v("错误时返回 签名错误")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("signature_checker()\n")])])]),t("p",[a._v("签名生成的通用步骤如下：\n第一步：将参与签名的参数按照键值(key)进行字典排序\n第二步：将排序过后的参数，进行key和value字符串拼接\n第三步：将拼接后的字符串首尾加上app_secret秘钥，合成签名字符串\n第四步：对签名字符串进行MD5加密，生成32位的字符串\n第五步：将签名生成的32位字符串转换为大写")]),a._v(" "),t("h2",{attrs:{id:"数组转tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组转tree"}},[a._v("#")]),a._v(" 数组转tree")]),a._v(" "),t("p",[a._v("array_to_tree")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("array_to_tree($list, $pk = 'id', $pid = 'pid', $child = 'children', $root = 0, $my_id = '')\n")])])]),t("p",[a._v("输入$list")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[\n  {id:1,pid:0,其他字段},\n  {id:2,pid:1,其他字段},\n  {id:3,pid:1,其他字段},\n]\n")])])]),t("p",[a._v("输出")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[\n  [\n     id:1,\n     pid:0,\n     其他字段,\n     children:[\n          {id:2,pid:1,其他字段},\n          {id:3,pid:1,其他字段},\n     ]\n  ]\n]\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);