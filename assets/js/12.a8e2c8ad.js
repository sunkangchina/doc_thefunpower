(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{280:function(a,s,t){"use strict";t.r(s);var e=t(13),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"加密解密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密解密"}},[a._v("#")]),a._v(" 加密解密")]),a._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("p",[s("code",[a._v("config.ini.php")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$config['aes_key'] = md5('');\n$config['aes_iv'] = md5(''); \n")])])]),s("h2",{attrs:{id:"加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[a._v("#")]),a._v(" 加密")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$sign = urlencode(aes_encode(json_encode([ \n   //一些数据                                        \n  'time' => time()\n]), $ak, $sk));\n")])])]),s("h2",{attrs:{id:"解密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解密"}},[a._v("#")]),a._v(" 解密")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$arr = json_decode(aes_decode($sign,$ak,$sk),true);\n//10秒内有效\nif($arr && $arr['time'] > time()-10){\n  \t    \n} \n")])])]),s("h2",{attrs:{id:"生成签名链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成签名链接"}},[a._v("#")]),a._v(" 生成签名链接")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("create_sample_sign_url($arr = [])  \n")])])]),s("p",[a._v("验证签名链接是否可用,60秒内")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("verify_sample_sign_url($exp_time = 60);\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);