import React from "react";


const PsychologicalTracePage = () => {
    const data={
        nodes:[
            {
                id:"社会属性空间->互联网社交空间",
                label:"社会属性空间->互联网社交空间",
                socialAttributes:[

                ]
            },
            {
                id:"社会属性空间->互联网工作空间",
                label:"社会属性空间->互联网社交空间",
                socialAttributes:[
                    {
                        key: "社会属性空间-github主页-职业",
                        value: "全栈工程师",
                        url: "https://aaronesau.com/"
                    },
                    {
                        key: "互联网社交空间-社交言论分析-领域",
                        value: "计算机",
                        url: "https://twitter.com/arinerron/status/1448107828846026754"
                    }
                
                ]
            },
            {
                id:"性格特质空间->互联网学习空间",
                label:"性格特质空间->互联网学习空间",
                socialAttributes:[
                    {
                        id: "github.com/jaywcjlove",
                        label: "github.com/jaywcjlove",
                        socialAttributes: [
                            {
                                key: "总结",
                                value: "宜人性和外倾性较高"
                            }
                        ],
                        // 为分析节点单独设置颜色,覆盖 default 配置
                        style: {
                            fill: "#32E0C4"
                        },
                        labelCfg: {
                            style: {
                                fill: "#32E0C4"
                            }
                        }
                    },
                    {
                        key: "互联网学习空间-提交数",
                        value: "407提交(今年来)",
                    },
                    {
                        key:"备忘清单",
                        value:"快速参考备忘清单（速查表）"
                    },
                    {
                        key: "来源",
                        value: "github",
                        url: "https://github.com/jaywcjlove"
                    }
                ]
            },
            {
                id:"性格特质空间->互联网工作空间",
                label:"性格特质空间->互联网工作空间",
                socialAttributes:[
                    {
                        id: "github.com/hartescout",
                        label: "github.com/hartescout",
                        socialAttributes: [
                            {
                                key: "总结",
                                value: "开放性较高，神经质(情绪稳定性)较低"
                            }
                        ],
                        // 为分析节点单独设置颜色,覆盖 default 配置
                        style: {
                            fill: "#32E0C4"
                        },
                        labelCfg: {
                            style: {
                                fill: "#32E0C4"
                            }
                        }
                    },
                    {
                        key: "互联网工作空间-提交数",
                        value: "154提交(今年来)",
                    },
                    {
                        key: "互联网工作空间-公开仓库数量",
                        value: "176 高",
                        url: ["https://github.com/hartescout?tab=repositories"],
                    },
                    {
                        key: "互联网工作空间-标星数量",
                        value: "151 高",
                        url: ["https://github.com/hartescout?tab=stars"],
                    }
                ]
            },
            {
                id:"互联网娱乐空间->互联网社交空间",
                label:"互联网娱乐空间->互联网社交空间",
                socialAttributes:[
                        {
                            key: "娱乐方式-互联网娱乐空间",
                            value: "摄影",
                        },
                        {
                            key: "来源-互联网社交空间",
                            value: "mastodon社交平台",
                            url: "https://mastodon.social/@acedrew"
                        },
                        
                    ]
                },
            ]
            }            
    return (
        <></>
    )
}

export default PsychologicalTracePage