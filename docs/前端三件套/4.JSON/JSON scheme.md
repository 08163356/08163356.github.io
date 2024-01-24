---
title: JSON scheme
date: 2024-01-21 03:32:46
permalink: /pages/693cdf/
categories:
  - 技术
  - 前端
  - 前端三件套
  - JSON
tags:
  - 
author: 
  name: aXing
  link: https://github.com/08163356
---
JSON Schema  通过JSON定义了一套JSON数据需要满足的规范，包含成员、结构、类型、约束等。通过一个JSON Schmea，可以校验指定的JSON是否满足其要求。







1. 简介
什么是Json Schema？ 以一个例子来说明

假设有一个web api，接受一个json请求，返回某个用户在某个城市关系最近的若干个好友。一个请求的例子如下：

{
        "city" : "chicago", 
        "number": 20, 
        "user" : {
            "name":"Alex", 
            "age":20
            }
    }



在上面的例子中，web api要求提供city，number，user三个成员，其中city是字符串，number是数值，user是一个对象，又包含了name和age两个成员。

对于api来说，需要定义什么样的请求合法，即什么样的Json对于api来说是合法的输入。这个规范可以通过Json Schema来描述，对应的Json Schema如下。

 {
        "type": "object",
        "properties": {
            "city": { "type": "string" },
            "number": { "type": "number" },
            "user": { 
                "type": "object",
                "properties": {
                    "name" : {"type": "string"},
                    "age" : {"type": "number"}
                }                       
            }
        }
    }



例子可以通过Json Schema Validator来验证。

Json Schema定义
Json Schema定义了一套词汇和规则，这套词汇和规则用来定义Json元数据，且元数据也是通过Json数据形式表达的。Json元数据定义了Json数据需要满足的规范，规范包括成员、结构、类型、约束等。

本文后面的部分是简要介绍Json Schema定义的这些规则，以及如何用这些规则描述规范。

Json Schema定义了一系列关键字，元数据通过这些关键字来描述Json数据的规范。其中有些关键字是通用的；有些关键字是针对特定类型的；还有些关键字是描述型的，不影响合法性校验。本文的主要内容就是介绍这些关键字的应用。

2. 类型关键字
首先需要了解的是"type"关键字，这个关键字定义了Json数据需要满足的类型要求。"type"关键字的用法如下面几个例子：

{"type":"string"}。规定了Json数据必须是一个字符串，符合要求的数据可以是
"Today is a good day." "I love you"

{"type" : "object"}。规定了Json数据必须是一个对象，符合要求的数据可以是
{"name" : "Alexander", "age" : 98} {}

{"type" : "number"}。规定了Json数据必须是一个数值，符合要求的数据可以是。Java Script不区分整数、浮点数，但是Json Schema可以区分。
2 0.5

{"type": "integer"}。要求数据必须是整数。
2

{"type" : "array"}。规定了Json数据必须是一个数组，符合要求的数据可以是
["abc", "cdf"] [1, 2, 3] ["abc", 25, {"name": "Alexander"} ] []

{"type" : "boolean"}。这个Json Schema规定了Json数据必须是一个布尔，只有两个合法值
true false

{"type" : "null"}。null类型只有一个合法值
null

3. 简单类型
这部分介绍类型特定的关键，包括字符串、数值、布尔、空值几种基本类型。

3.1 字符串
Json合法的字符串

"Today is a good day."

对应的Json Schema

{"type": "string"}

可以进一步对字符串做规范要求。字符串长度、匹配正则表达式、字符串格式。

3.1.1 字符串长度
关键字： minLength, maxLength

可以对字符串的最小长度、最大长度做规范。

{
        "type" : "string",
        "minLength" : 2,
        "maxLength" : 3,
    }
3.1.2 正则表达式
关键字： pattern

可以对字符串应满足的Pattern做规范，Pattern通过正则表达式描述。

{
        "type" : "string",
        "pattern" : "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$",
    }
3.1.3 字符串Format
关键字： format

可以通过Json Schema内建的一些类型，对字符串的格式做规范，例如电子邮件、日期、域名等。

 {
       "type" : "string",
       "format" : "date",
    }



Json Schema支持的format包括"date", "time", "date-time", "email", "hostname"等。具体可以参考文档。

3.2 数值
Json Schema数值类型包括"number"和"integer"。number合法的数值可以是

2 0.1

对应的Json Schema为

{"type": "number"}

如果是integer则只能是整数。"number"和"integer"的类型特定参数相同，可以限制倍数、范围。

3.2.1 数值满足倍数
关键字： multipleOf

可以要求数值必须某个特定值的整数倍。例如要求数值必须是10的整数倍。


{
        "type" : "number",
        "multipleOf" : 10,
    }


3.2.2 数值范围
关键字： minimum, maximum, exclusiveMinimum, exclusiveMaximum

可以限制数值的方位，包括最大值、最小值、开区间最大值、开区间最小值。

要求数值在[0, 100)范围内。


{
        "type" : "number",
        "minimum": 0,
        "exclusiveMaximum": 100
    }



3.3 布尔
布尔类型没有额外的类型特定参数。

3.4 空值
null类型没有额外的类型特定参数。

4. 复合类型
复合类型可以通过Nest的方式构建复杂的数据结构。包括数组、对象。

4.1 数组
Json数组合法数据的例子

[1, 2, 3] [1, "abc", {"name" : "alex"}] []

Json Schema为

{"type": "array"}

数组的类型特定参数，可以用来限制成员类型、是否允许额外成员、最小元素个数、最大元素个数、是否允许元素重复。

4.1.1 数组成员类型
关键字： items

可以要求数组内每个成员都是某种类型，通过关键字items实现。下面的Schema要求数组内所有元素都是数值，这时关键字"items"对应一个嵌套的Json Schema，这个Json Schema定义了每个元素应该满足的规范。


{
        "type": "array",
        "items": {
            "type": "number"
        }
    }


[1, 2, 3]

关键字items还可以对应一个数组，这时Json数组内的元素必须与Json Schema内items数组内的每个Schema按位置一一匹配。


{
        "type": "array",
        "items": [
        {
            "type": "number"
        },
        {
            "type": "string"
        }]
    }


[1, "abc"]

4.1.2 数组是否允许额外成员
关键字： additionalItems

当使用了items关键字，并且items关键字对应的是Schema数组，这个限制才起作用。关键字additionalItems规定Json数组内的元素，除了一一匹配items数组内的Schema外，是否还允许多余的元组。当additionalItems为true时，允许额外元素。


{
        "type": "array",
        "items": [
        {
            "type": "number"
        },
        {
            "type": "string"
        }],
        "additionalItems" : true
    }


[1, "abc", "x"]

4.1.3 数组元素个数
关键字： minItems, maxItems

可以限制数组内元素的个数。


{
        "type": "array",
        "items": {
            "type": "number"
        },
        "minItems" : 5,
        "maxItems" : 10
    }


[1,2,3,4,5,6]

4.1.4 数组内元素是否必须唯一
关键字： uniqueItems

规定数组内的元素是否必须唯一。


{
        "type": "array",
        "items": {
            "type": "number"
        },
        "uniqueItems" : true
    }


[1,2,3,4,5]

4.2 对象
Json对象是最常见的Json数据类型，合法的数据可以是

 {

        "name": "Froid",
        "age" : 26,
        "address" : {
            "city" : "New York",
            "country" : "USA"
        }
    }

就对象类型而言，最基本的类型限制Schema是

{"type" : "object"}

然而，除了类型外，我们通常需要对其成员做进一步约定。对象的类型特定关键字，大多是为此目的服务的。

4.2.1 成员的Schema
关键字：properties

规定对象各成原所应遵循的Schema。

 {
        "type": "object",     
        "properties": {      
            "name": {"type" : "string"},
            "age" : {"type" : "integer"},
            "address" : {
                "type" : "object",
                "properties" : {
                    "city" : {"type" : "string"},
                    "country" : {"type" : "string"}
                }
            }
        }
    }


对于上例中的Schema，合法的data是

 {
        "name": "Froid",
        "age" : 26,
        "address" : {
            "city" : "New York",
            "country" : "USA"
        }
    }

properties关键字的内容是一个key/value结构的字典，其key对应Json数据中的key，其value是一个嵌套的Json Schema。表示Json数据中key对应的值所应遵守的Json Schema。在上面的例子中，"name"对应的Schema是{"type" : "string"}，表示"name"的值必须是一个字符串。在Json数据中，对象可以嵌套，同样在Json Schema中也可以嵌套。如"address"字段，在Json Schema中它的内容是一个嵌套的object类型的Json Schema。

4.2.2 批量定义成员Schema
关键字：patternProperties

与properties一样，但是key通过正则表达式匹配属性名。

 {
        "type": "object",
        "patternProperties": {
            "^S_": { "type": "string" },
            "^I_": { "type": "integer" }
        }
    }

{"S_1" : "abc"} {"S_1" : "abc", "I_3" : 1}

4.2.3 必须出现的成员
关键字：required

规定哪些对象成员是必须的。

 {
        "type": "object",     
        "properties": {      
            "name": {"type" : "string"},
            "age" : {"type" : "integer"},
        },
        "required" : ["name"]
    }

上例中"name"成员是必须的，因此合法的数据可以是

{"name" : "mary", "age" : 26} {"name" ： "mary"}

但缺少"name"则是非法的

{"age" : 26}

4.2.4 成员依赖关系
关键字：dependencies

规定某些成员的依赖成员，不能在依赖成员缺席的情况下单独出现，属于数据完整性方面的约束。

 {
        "type": "object",
        "dependencies": {
            "credit_card": ["billing_address"]
        }
    }

dependencies也是一个字典结构，key是Json数据的属性名，value是一个数组，数组内也是Json数据的属性名，表示key必须依赖的其他属性。

上面Json Schema合法的数据可以是

{} {"billing_address" : "abc"}

但如果有"credit_card"属性，则"billing_address" 属性不能缺席。下面的数据是非法的

{"credit_card": "7389301761239089"}

4.2.5 是否允许额外属性
关键字：additionaProperties

规定object类型是否允许出现不在properties中规定的属性，只能取true/false。

 {
        "type": "object",     
        "properties": {      
            "name": {"type" : "string"},
            "age" : {"type" : "integer"},
        },
        "required" : ["name"],
        "additionalProperties" : false
    }

上例中规定对象不能有"name"和"age"之外的成员。合法的数据

{"name" : "mary"} {"name" : "mary", "age" : 26}

非法的数据

{"name" : "mary", "phone" : ""84893948}

4.2.6 属性个数的限制
关键字：minProperties, maxProperties

规定最少、最多有几个属性成员。

 {
        "type": "object",
        "minProperties": 2,
        "maxProperties": 3
    }

{"name" : "mary", "age" : 26} {"name" : "mary", "age" : 26, "phone" : "37839233"}

5. 逻辑组合
关键字：allOf, anyOf, oneOf, not

从关键字名字可以看出其含义，满足所有、满足任意、满足一个。前三个关键字的使用形式是一致的，以allOf为例说明其形式。

 {
        "allOf" : [
            Schema1,
            Schema2,
            ...
        ]
    }

其中，"allOf"的内容是一个数组，数组内的成员都是内嵌的Json Schema。上例Schema1、Schema2都是内嵌的Json Schema。整个Schema表示当前Json数据，需要同时满足Schema1、Schema2,。

5.1 allOf
满足allOf数组中的所有Json Schema。

 {
        "allOf" : [
            Schema1,
            Schema2,
            ...
        ]
    }


需要注意，不论在内嵌的Schema里还是外部的Schema里，都不应该使"additionalProperties"为false。否则可能会生成任何数据都无法满足的矛盾Schema。

可以用来实现类似“继承”的关系，例如我们定义了一个Schema_base，如果想要对其进行进一步修饰，可以这样来实现。

 {
        "allOf" : [
            Schema_base
        ]
        "properties" : {
            "other_pro1" : {"type" : "string"},
            "other_pro2" : {"type" : "string"}
        },
        "required" : ["other_pro1", "other_pro2"]
    }

Json数据既需要满足Schema_base，又要具备属性"other_pro1"、"other_pro2"。

5.2 anyOf
满足anyOf数组中的任意个Schema。

 {
        "anyOf" : [
            Schema1,
            Schema2,
            ...
        ]
    }

Json数据需要满足Schema1、Schema2中的一个或多个。

5.3 oneOf
满足且进满足oneOf数组中的一个Schema，这也是与anyOf的区别。

 {
        "oneOf" : [
            Schema1,
            Schema2,
            ...
        ]
    }

5.4 not
这个关键字不严格规定Json数据应满足什么要求，它告诉Json不能满足not所对应的Schema。

 {
        "not" : {"type" : "string"}
    }

只要不是string类型的都Json数据都可以。

6. 复杂结构
对复杂结构的支持包括定义和引用。可以将相同的结构定义成一个“类型”，需要使用该“类型”时，可以通过其路径或id来引用。

6.1 定义
关键字：无

定义一个类型，并不需要特殊的关键字。通常的习惯是在root节点的definations下面，定义需要多次引用的schema。definations是一个json对象，key是想要定义的“类型”的名称，value是一个json schema。

 { "definitions": { "address": { "type": "object", "properties": { "street_address": { "type": "string" }, "city": { "type": "string" }, "state": { "type": "string" } }, "required": ["street_address", "city", "state"] } }， "type": "object", "properties": { "billing_address": { "$ref": "#/definitions/address" }, "shipping_address": { "$ref": "#/definitions/address" } } }


上例中定义了一个address的schema，并且在两个地方引用了它，#/definitions/address表示从根节点开始的路径。
6.2 $id
关键字：$id

可以在上面的定义中加入id属性，这样可以通过id属性，这样可以通过id属性的值对该schema进行引用，而不需要完整的路径。

 ...
        "address": {
                "type": "object",
                "$id" : "address",
                "properties": {
                    "street_address": { "type": "string" },
                    "city":           { "type": "string" },
                    "state":          { "type": "string" }
                },
                "required": ["street_address", "city", "state"]
            }
    ...

6.3 引用
关键字：$ref

关键字$ref可以用在任何需要使用json schema的地方。如上例中，billing_address的value应该是一个json schema，通过一个$ref替代了。

$ref的value，是该schema的定义在json中的路径，以#开头代表根节点。

 { "properties": { "billing_address": { "$ref": "#/definitions/address" }, "shipping_address": { "$ref": "#/definitions/address" } } }


如果schema定义了$id属性，也可以通过该属性的值进行引用。

 { "properties": { "billing_address": { "$ref": "#address" }, "shipping_address": { "$ref": "#address" } } }

7. 通用关键字
通用关键字可以在任何json schema中出现，有些影响合法性校验，有些只是描述作用，不影响合法性校验。

7.1 enum
关键字：enum

可以在任何json schema中出现，其value是一个list，表示json数据的取值只能是list中的某个。

 {
        "type": "string",
        "enum": ["red", "amber", "green"]
    }


上例的schema规定数据只能是一个string，且只能是"red"、"amber"、"green"之一。
7.2 metadata
关键字：title，description，default，example


{ "title" : "Match anything", "description" : "This is a schema that matches anything.", "default" : "Default value", "examples" : [ "Anything", 4035 ] }


只作为描述作用，不影响对数据的校验。