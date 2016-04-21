jsondata = {
    "title": "保险理赔流程图",
    "nodes": {
        "demo_node_1": {
            "name": "24小时接报案",
            "left": 242,
            "top": 8,
            "type": "start round",
            "width": 24,
            "height": 24,
            "alt": true
        },
        "demo_node_48": {
            "name": "赔案受理，查勘调度",
            "left": 180,
            "top": 76,
            "type": "chat",
            "width": 144,
            "height": 36,
            "alt": true
        },
        "demo_node_53": {
            "name": "重大案件快速响应",
            "left": 52,
            "top": 155,
            "type": "state",
            "width": 143,
            "height": 36,
            "alt": true
        },
        "demo_node_57": {
            "name": "现场查勘",
            "left": 192,
            "top": 225,
            "type": "chat",
            "width": 144,
            "height": 33,
            "alt": true
        },
        "demo_node_61": {
            "name": "委托代查勘",
            "left": 410,
            "top": 164,
            "type": "task round",
            "width": 24,
            "height": 24,
            "alt": true
        },
        "demo_node_65": {
            "name": "理赔资料收集，审核",
            "left": 186,
            "top": 343,
            "type": "chat",
            "width": 148,
            "height": 32,
            "alt": true
        },
        "demo_node_70": {
            "name": "责任判定",
            "left": 209,
            "top": 442,
            "type": "fork",
            "width": 100,
            "height": 24,
            "alt": true
        },
        "demo_node_74": {
            "name": "诉讼",
            "left": 29,
            "top": 440,
            "type": "node",
            "width": 100,
            "height": 24,
            "alt": true
        },
        "demo_node_77": {
            "name": "拒赔",
            "left": 64,
            "top": 677,
            "type": "node",
            "width": 100,
            "height": 24,
            "alt": true
        },
        "demo_node_78": {
            "name": "理算，审核",
            "left": 375,
            "top": 581,
            "type": "node",
            "width": 100,
            "height": 24,
            "alt": true
        },
        "demo_node_81": {
            "name": "不属于保险责任",
            "left": 164,
            "top": 496,
            "type": "task round",
            "width": 24,
            "height": 24,
            "alt": true
        },
        "demo_node_84": {
            "name": "属于保险责任",
            "left": 325,
            "top": 496,
            "type": "task round",
            "width": 24,
            "height": 24,
            "alt": true
        },
        "demo_node_85": {
            "name": "预付赔款审批",
            "left": 357,
            "top": 678,
            "type": "chat",
            "width": 122,
            "height": 24,
            "alt": true
        }
    },
    "lines": {
        "demo_line_51": {
            "type": "sl",
            "from": "demo_node_1",
            "to": "demo_node_48",
            "name": ""
        },
        "demo_line_55": {
            "type": "lr",
            "M": 136.25,
            "from": "demo_node_48",
            "to": "demo_node_53",
            "name": ""
        },
        "demo_line_59": {
            "type": "sl",
            "from": "demo_node_48",
            "to": "demo_node_57",
            "name": ""
        },
        "demo_line_60": {
            "type": "lr",
            "M": 133.25,
            "from": "demo_node_53",
            "to": "demo_node_57",
            "name": ""
        },
        "demo_line_62": {
            "type": "lr",
            "M": 423.5,
            "from": "demo_node_48",
            "to": "demo_node_61",
            "name": ""
        },
        "demo_line_68": {
            "type": "sl",
            "from": "demo_node_57",
            "to": "demo_node_65",
            "name": ""
        },
        "demo_line_69": {
            "type": "lr",
            "M": 422,
            "from": "demo_node_61",
            "to": "demo_node_65",
            "name": ""
        },
        "demo_line_72": {
            "type": "sl",
            "from": "demo_node_65",
            "to": "demo_node_70",
            "name": ""
        },
        "demo_line_75": {
            "type": "sl",
            "from": "demo_node_70",
            "to": "demo_node_74",
            "name": ""
        },
        "demo_line_79": {
            "type": "tb",
            "M": 510.5,
            "from": "demo_node_70",
            "to": "demo_node_77",
            "name": ""
        },
        "demo_line_80": {
            "type": "tb",
            "M": 510.5,
            "from": "demo_node_70",
            "to": "demo_node_78",
            "name": ""
        },
        "demo_line_87": {
            "type": "lr",
            "M": 418.5,
            "from": "demo_node_78",
            "to": "demo_node_85",
            "name": "",
            "alt": true
        }
    },
    "areas": {},
    "initNum": 89
}