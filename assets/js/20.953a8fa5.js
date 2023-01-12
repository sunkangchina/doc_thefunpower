(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{291:function(a,t,e){"use strict";e.r(t);var s=e(13),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"数据验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据验证"}},[a._v("#")]),a._v(" 数据验证")]),a._v(" "),t("h2",{attrs:{id:"调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用"}},[a._v("#")]),a._v(" 调用")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n$vali    = validate([\n    'company_title'   => '客户名',\n    'email'   => '邮件地址',\n    'active_plugins'  => '系统',\n    'exp_time' => '过期时间',\n],$input,[\n    'required' => [\n        ['company_title'],\n        ['email'],\n        ['active_plugins'],\n        ['exp_time'],\n    ],\n    'email'=>[\n        ['email']\n    ]\n]);\nif($vali){\n    json($vali);\n} \n\n")])])]),t("p",[a._v("其中 "),t("code",[a._v("$input")]),a._v(" 在包含 boot/app.php文件后即可使用")]),a._v(" "),t("h2",{attrs:{id:"语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语言"}},[a._v("#")]),a._v(" 语言")]),a._v(" "),t("p",[a._v("在"),t("code",[a._v("boot/helper.php")]),a._v("设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$lang = 'zh-cn';\nlib\\Validate::lang($lang);\n")])])]),t("p",[a._v("支持的语言 https://github.com/vlucas/valitron/tree/master/lang")]),a._v(" "),t("h2",{attrs:{id:"lengthmin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lengthmin"}},[a._v("#")]),a._v(" lengthMin")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'lengthMin' => [\n    ['username', 5]\n]\n")])])]),t("h2",{attrs:{id:"lengthbetween"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lengthbetween"}},[a._v("#")]),a._v(" lengthBetween")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'lengthBetween' => [\n        ['username', 1, 10]\n]\n")])])]),t("h2",{attrs:{id:"length"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#length"}},[a._v("#")]),a._v(" length")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'length' => [\n        ['username', 10]\n]\n")])])]),t("h2",{attrs:{id:"lengthmax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lengthmax"}},[a._v("#")]),a._v(" lengthMax")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'lengthMax' => [\n        ['username', 10]\n]\n")])])]),t("h2",{attrs:{id:"min"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#min"}},[a._v("#")]),a._v(" min")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'min' => [\n        ['age', 18]\n]\n")])])]),t("h2",{attrs:{id:"max"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max"}},[a._v("#")]),a._v(" max")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'max' => [\n        ['age', 12]\n ]\n")])])]),t("h2",{attrs:{id:"listcontains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listcontains"}},[a._v("#")]),a._v(" listContains")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'listContains' => [\n        ['color', 'yellow']\n]\n")])])]),t("h2",{attrs:{id:"in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in"}},[a._v("#")]),a._v(" in")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'in' => [\n        ['color', ['blue', 'green', 'red', 'purple']]\n]\n")])])]),t("h2",{attrs:{id:"not-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#not-in"}},[a._v("#")]),a._v(" not in")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'notIn' => [\n        ['color', ['blue', 'green', 'red', 'yellow']]\n]\n")])])]),t("h2",{attrs:{id:"ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[a._v("#")]),a._v(" ip")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'ip' => [\n        ['user_ip']\n ]\n")])])]),t("h2",{attrs:{id:"ipv4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipv4"}},[a._v("#")]),a._v(" ipv4")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'ipv4' => [\n     ['user_ip']\n ]\n")])])]),t("h2",{attrs:{id:"ipv6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipv6"}},[a._v("#")]),a._v(" ipv6")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'ipv6' => [\n        ['user_ip']\n]\n")])])]),t("h2",{attrs:{id:"email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email"}},[a._v("#")]),a._v(" email")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'email' => [\n        ['user_email']\n]\n")])])]),t("h2",{attrs:{id:"emaildns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emaildns"}},[a._v("#")]),a._v(" emailDns")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'emailDNS' => [\n        ['user_email']\n ]\n")])])]),t("h2",{attrs:{id:"url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[a._v("#")]),a._v(" url")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'url' => [\n        ['website']\n]\n")])])]),t("h2",{attrs:{id:"urlactive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#urlactive"}},[a._v("#")]),a._v(" urlActive")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'urlActive' => [\n        ['website']\n]\n")])])]),t("h2",{attrs:{id:"alpha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alpha"}},[a._v("#")]),a._v(" alpha")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'alpha' => [\n        ['username']\n ]\n")])])]),t("h2",{attrs:{id:"alphanum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alphanum"}},[a._v("#")]),a._v(" alphaNum")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'alphaNum' => [\n        ['username']\n    ]\n")])])]),t("h2",{attrs:{id:"regex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regex"}},[a._v("#")]),a._v(" regex")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'regex' => [\n        ['username', '/^[a-zA-Z0-9]{5,10}$/']\n]\n")])])]),t("h2",{attrs:{id:"date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[a._v("#")]),a._v(" date")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'date' => [\n        ['created_at']\n]\n")])])]),t("h2",{attrs:{id:"dateformat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dateformat"}},[a._v("#")]),a._v(" dateFormat")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'dateFormat' => [\n        ['created_at', 'Y-m-d']\n]\n")])])]),t("h2",{attrs:{id:"datebefore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datebefore"}},[a._v("#")]),a._v(" dateBefore")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'dateBefore' => [\n        ['created_at', '2018-10-13']\n]\n")])])]),t("h2",{attrs:{id:"dateafter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dateafter"}},[a._v("#")]),a._v(" dateAfter")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'dateAfter' => [\n        ['created_at', '2018-01-01']\n]\n")])])]),t("h2",{attrs:{id:"contains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contains"}},[a._v("#")]),a._v(" contains")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'contains' => [\n        ['username', 'man']\n]\n")])])]),t("h2",{attrs:{id:"更多规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多规则"}},[a._v("#")]),a._v(" 更多规则")]),a._v(" "),t("p",[a._v("https://github.com/vlucas/valitron")])])}),[],!1,null,null,null);t.default=r.exports}}]);