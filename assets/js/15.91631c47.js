(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{286:function(t,a,e){"use strict";e.r(a);var n=e(13),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[t._v("#")]),t._v(" 数据库")]),t._v(" "),a("p",[t._v("数据库操作是对Medoo Version: 2.1.7进行再封装，让操作更方便。")]),t._v(" "),a("p",[t._v("https://medoo.in/")]),t._v(" "),a("p",[t._v("在使用前需要对Medoo 数据库类有足够的了解，否则有可能无法理解参数传递等问题。")]),t._v(" "),a("h2",{attrs:{id:"输出sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出sql"}},[t._v("#")]),t._v(" 输出SQL")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db()->last()\n")])])]),a("h2",{attrs:{id:"sql查寻"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql查寻"}},[t._v("#")]),t._v(" SQL查寻")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db_query($sql, $raw = null)\n")])])]),a("h2",{attrs:{id:"取最小值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取最小值"}},[t._v("#")]),t._v(" 取最小值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db_get_min($table, $join  = "*", $column = null, $where = null)\n')])])]),a("h2",{attrs:{id:"取最大值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取最大值"}},[t._v("#")]),t._v(" 取最大值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db_get_max($table, $join =  "*", $column = null, $where = null)\n')])])]),a("h2",{attrs:{id:"总数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总数"}},[t._v("#")]),t._v(" 总数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db_get_count($table, $join =  "*", $column = null, $where = null)\n')])])]),a("h2",{attrs:{id:"是否有记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否有记录"}},[t._v("#")]),t._v(" 是否有记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db_get_has($table, $join = null, $where = null)\n")])])]),a("h2",{attrs:{id:"随机取多条记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机取多条记录"}},[t._v("#")]),t._v(" 随机取多条记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db_get_rand($table, $join = "*", $column = null, $where = null)\n')])])]),a("h2",{attrs:{id:"取总和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取总和"}},[t._v("#")]),t._v(" 取总和")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db_get_sum($table, $join = "*", $column = null, $where = null)\n')])])]),a("h2",{attrs:{id:"取平均值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取平均值"}},[t._v("#")]),t._v(" 取平均值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db_get_avg($table, $join = "*", $column = null, $where = null)\n')])])]),a("h2",{attrs:{id:"返回数据库允许的数据-传入其他字段自动忽略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回数据库允许的数据-传入其他字段自动忽略"}},[t._v("#")]),t._v(" 返回数据库允许的数据，传入其他字段自动忽略")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db_allow($table, $data)\n")])])]),a("h2",{attrs:{id:"查寻多条记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查寻多条记录"}},[t._v("#")]),t._v(" 查寻多条记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$data = db()->select("account", [\n\t"user_name",\n\t"email"\n\t], [\n\t"user_id[>]" => 100\n]);\n')])])]),a("p",[a("code",[t._v("db()->select")]),t._v(" 等价于 "),a("code",[t._v("db_get()")])]),t._v(" "),a("h2",{attrs:{id:"查一条数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查一条数据"}},[t._v("#")]),t._v(" 查一条数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$res = db_get_one("drop_account","*",[\'id\'=>$id]);  \n')])])]),a("h2",{attrs:{id:"更新记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新记录"}},[t._v("#")]),t._v(" 更新记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db_update(\"drop_account\",[\n          'status'=>$status,\n          'updated_at'=>now(),\n          'admin_user_id'=>get_admin_id(),\n],['id'=>$id]); \n")])])]),a("h2",{attrs:{id:"删除记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除记录"}},[t._v("#")]),t._v(" 删除记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db_del($table, $where)\n")])])]),a("h2",{attrs:{id:"动作事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动作事件"}},[t._v("#")]),t._v(" 动作事件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('do_action("db_insert.$table.before", $data);\t添加数据前\t\ndo_action("db_insert.$table.after", $action_data);\t添加数据后 db_insert时触发\t$action_data = [];\n$action_data[\'id\'] = $id;\n$action_data[\'data\'] = $data;\ndo_action("db_update.$table.before", $data);\t更新数据前 db_insert时触发\t \ndo_action("db_update.$table.after", $action_data);\t更新数据后  db_update时触发\t$action_data = [];\n$action_data[\'where\'] = $where;\n$action_data[\'data\'] = $data;\ndo_action("db_get_one.$table", $one);\t查寻一条记录 db_get_one时触发\t\ndo_action("db_get.$table", $all);\t查寻多条记录 db_get时触发\t\ndo_action("db_insert.$table.del", $where);\t删除记录 db_del($table, $where)时触发\t\ndo_action("db_query", $all);\tdb_query时触发\t\n')])])]),a("h2",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db_action(function(){\n   //如果有return false;就会回滚\n});\n")])])]),a("h2",{attrs:{id:"分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页"}},[t._v("#")]),t._v(" 分页")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db_pager("drop_account","*",$where); \n')])])]),a("h2",{attrs:{id:"连接其他数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接其他数据库"}},[t._v("#")]),t._v(" 连接其他数据库")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("new_db([\n    'db_host'=>$config['db_host'],\n    'db_name'=>\"数据库名\",\n    'db_user'=>$config['db_user'],\n    'db_pwd'=>$config['db_pwd'],\n    'db_port'=>$config['db_port'],\n],$active_db);\ndb_active($active_db);  \n")])])]),a("h2",{attrs:{id:"激活默认数据库连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#激活默认数据库连接"}},[t._v("#")]),t._v(" 激活默认数据库连接")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db_active_default()\n")])])]),a("h2",{attrs:{id:"激活读数据库连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#激活读数据库连接"}},[t._v("#")]),t._v(" 激活读数据库连接")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db_active_read()\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/thefunpower/db_medoo/blob/main/test/db_config_main_slave.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看主从配置"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("更多可查看"),a("a",{attrs:{href:"https://github.com/thefunpower/db_medoo/blob/main/inc/db/function.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"完整演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整演示"}},[t._v("#")]),t._v(" 完整演示")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("include __DIR__.'/../../../../app.php'; \n//注销帐号.管理\naccess('drop_account.admin');\n\n$wq = g(\"wq\");\n$where = [\n  'ORDER'=>[\n    'id'=>'DESC'\n  ], \n];  \nif($wq){\n  $where[\"phone[~]\"] = $wq;\n}   \n$where['status'] = $input['status']?:0; \n$data = db_pager(\"drop_account\",\"*\",$where); \n$list = [];\nforeach($data['data'] as &$v){   \n} \njson($data);\n")])])]),a("p",[t._v("分页table")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<?php   \n/*\n\tCopyright (c) 2021-2050 FatPlug, All rights reserved.\n\tThis file is part of the FatPlug Framework (http://fatplug.cn).\n\tThis is not free software.\n\tyou can redistribute it and/or modify it under the\n\tterms of the License after purchased commercial license. \n\tmail: sunkangchina@163.com\n\tweb: http://fatplug.cn\n*/\nglobal $config; \n$config[\'title\'] = "注销帐号";\ninclude __DIR__.\'/../../app.php\';      \nadmin_header(); \ncheck_admin_login();\n$vue = new Vue;  \n$vue->opt = [\n    \'is_page\'  => true,\n    \'is_reset\' => false,\n    \'is_add\'   => false,\n    \'is_edit\'  => false, \n];\n$vue->page_url = "/plugins/drop_account/api/admin/drop_account.php";  \n$vue->data("activeName","0"); \n$vue->data("height",""); \n$vue->created(["start()"]);\n$vue->method("start()","js: \n\tthis.fn();\n\tif (window.addEventListener) {\n\t    window.addEventListener(\'resize\', function() {\n\t      app.fn();\n\t    });\n\t} else if (window.attachEvent) {\n\t    window.attachEvent(\'onresize\', function() {\n\t      app.fn();\n\t    });\n\t} \n");\n$vue->method("fn()","js:\nthis.height = window.innerHeight-180;\n");\n\n\n$vue->data("ch","js:[]");\n$vue->method("handleClick()","js: \n\tthis.where.status = this.activeName; \n\tthis.where.page = 1;\n\tthis.load();\n");\n\n$vue->method("confirm(row,status)","js: \n\tlet id = row.id;\n\tlet txt = \'确认拒绝该操作吗？\';\n\tlet by = \'拒绝后用户还可以再次发起注销申请,<br>此操作不会注销用户，可放心操作\';\n\tlet cf = \'确认拒绝\';\n\tif(status==1){\n\t\ttxt = \'确认注销该帐号吗？\';\n\t\tby = \'<span style=\\"color:red;\\">该操作次注销用户所有相关数据包含但不限：<br>用户基础信息（头像、昵称、手机号等）、订单信息、会员信息等。<br>请确认好再操作，该操作不可逆！！！</span>\';\n\t\tcf = \'确认注销帐号\';\n\t}\n\tlayer.confirm(txt, {\n\t  title:\'操作提醒\',\n\t  content:\'帐号：\'+row.phone+\'<br>\'+by,\n\t  btn: [cf,\'取消\'] //按钮\n\t}, function(){\n\t\tlayer.load();\n\t  \tajax(\'/plugins/drop_account/api/admin/drop_account_confirm.php\',{\n\t  \t\tid:id,\n\t  \t\tstatus:status\n\t  \t},function(){\n\t  \t\tlayer.closeAll();\n\t  \t\t_this.load();\n\t  \t\t_this.\\$message({\n\t  \t\t\ttype:res.type,\n\t  \t\t\tmessage:res.msg, \n\t  \t\t});\n\t  \t});\n\t}, function(){\n\t   layer.closeAll();\n\t});\n\t \n");\n\n\n \n\n$js  = $vue->run(); \n?>\n \n<div id="app"  v-cloak>   \n\t  <div class="main_body"> \n\t\t  <el-tabs v-model="activeName" @tab-click="handleClick" >\n\t\t    <el-tab-pane label="待审核" name="0"> \n\t\t    \t<?php include __DIR__.\'/_table.php\';?>\n\t\t    </el-tab-pane>\n\t\t    <el-tab-pane label="已注销" name="1" >\n\t\t    \t <?php include __DIR__.\'/_table.php\';?>\n\t\t    </el-tab-pane> \n\t\t    <el-tab-pane label="已拒绝" name="-1" >\n\t\t    \t <?php include __DIR__.\'/_table.php\';?>\n\t\t    </el-tab-pane> \n\t\t  </el-tabs>  \n\t      <p>\n\t    \t<el-pagination background class="mt10"  \n\t\t      @size-change="page_size_change"\n\t\t      @current-change="page_change"\n\t\t      :current-page="page"\n\t\t      :page-sizes="[20,50,100,500,1000]"\n\t\t      :page_size="where.pre_page"\n\t\t      layout="total, sizes, prev, pager, next, jumper"\n\t\t      :total="total">\n\t\t    </el-pagination> \n\t\t</p>\n    </div> \n     \n\n\n</div>\n\n<script type="text/javascript">\n\t<?= $js?> \n<\/script>\n<?php \nadmin_footer();\n?>\n')])])]),a("p",[t._v("_table.php 内容")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<?php if(!defined("PATH")){exit();}?>\n<el-table  border    :height="height"\n  :data="lists"\n  style="width: 100%"> \n  <el-table-column \n    prop="phone"\n    label="帐号"\n    width="">\n  </el-table-column>  \n  <el-table-column \n    prop="user_id"\n    label="用户ID"\n    width="100">\n  </el-table-column> \n  <el-table-column \n    prop="created_at"\n    label="申请时间"\n    width="180">\n  </el-table-column> \n  <el-table-column\n    prop="updated_at"\n    label="审核时间"\n    width="180">\n  </el-table-column> \n  <el-table-column v-if="activeName == 0"\n    prop="comment"\n    label="操作"\n    width="180">\n    <template slot-scope="scope"> \n      <div v-if="scope.row.status==0">\n         <a href="javascript:void(0);"  @click="confirm(scope.row,1)" class="link hand"  >确认注销</a>\n         <a href="javascript:void(0);"  @click="confirm(scope.row,-1)" class="link hand ml20">拒绝注销</a>\n      </div> \n    </template>  \n  </el-table-column>   \n</el-table>  \n')])])]),a("h2",{attrs:{id:"获取数据库结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取数据库结构"}},[t._v("#")]),t._v(" 获取数据库结构")]),t._v(" "),a("p",[t._v("数组")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("database_tables()\n")])])]),a("h2",{attrs:{id:"非当前数据库结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非当前数据库结构"}},[t._v("#")]),t._v(" 非当前数据库结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("database_tables($database_name)\n")])])]),a("h2",{attrs:{id:"markdown格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown格式"}},[t._v("#")]),t._v(" markdown格式")]),t._v(" "),a("p",[t._v("在config.ini.php中配置的数据库链接信息必须同时拥有$database_name权限\nmarkdown格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pr(database_tables(null,true));\n")])])]),a("p",[t._v("返回结果：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("upload 上传文件\n\n| 字段  |  类型 | 备注|\n| ------------ | ------------ |------------ |\n|  id |  int(11) |主键|\n|  url |  varchar(255) |URL|\n|  hash |  varchar(255) |唯一值|\n|  user_id |  int(11) |用户ID|\n|  mime |  varchar(255) |类型|\n|  size |  decimal(20,2) |大小|\n|  ext |  varchar(10) |后缀|\n|  created_at |  datetime |创建时间|\n|  name |  varchar(255) |文件名|\n")])])]),a("h2",{attrs:{id:"markdown转html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown转html"}},[t._v("#")]),t._v(" markdown转html")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("echo Parsedown::instance()\n  ->setMarkupEscaped(true)\n  ->text(database_tables(null,true)); \n")])])]),a("h2",{attrs:{id:"数据表及字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据表及字段"}},[t._v("#")]),t._v(" 数据表及字段")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$all = database_tables();\n$table = [];\nforeach($all as $v){\n  $table_name = $v['Name'];\n  $table[$table_name] = get_table_fields($table_name);\n}\npr($table);\n")])])]),a("p",[t._v("返回")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Array\n(\n     \n    [config] => Array\n        (\n            [id] => id\n            [title] => title\n            [body] => body\n        )\n)\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);