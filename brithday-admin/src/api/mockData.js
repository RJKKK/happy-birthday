import {Random} from 'mockjs'
export default {
    usersData:{
        "err": 0,
        "data":{
            "list|8": [
                {
                    "account": "@id()",
                    "name": "@name()",
                    "logo":Random.image(),
                    "birthday": Random.date('yyyy-MM-dd'),
                    "email":Random.email(),
                    "createTime": Random.datetime(),
                    "updateTime": Random.datetime()
                }
            ],
            "total": 30,
        },
        "msg": "请求成功"
    },
    userDetail:{
        "err": 0,
        "data":{
            "account": "@id()",
            "name": "@name()",
            "logo":Random.image(),
            "birthday": Random.date('yyyy-MM-dd'),
            "email":Random.email(),
            "createTime": Random.datetime(),
            "updateTime": Random.datetime(),
            "gender|1":[0,1,2]
        },
        "msg": "请求成功"
    }
}
