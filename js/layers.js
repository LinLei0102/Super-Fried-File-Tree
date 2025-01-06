addLayer("z", {
    name: "炸档层1", // This is optional, only used in a few无 places, If absent it just uses the layer id.
    symbol: "炸", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "#e0e1cc",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "炸档点", // Name of prestige currency
    baseResource: "反物质", // Name of resource prestige is based on
    baseAmount() { return player.points }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.95, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('z', 14)) mult = mult.mul(player.points.pow(0.3))
        if (hasUpgrade('h', 12)) mult = mult.mul(100000)
        if (hasUpgrade('h', 21)) mult = mult.mul(player.h.points.min(100000000).add(1).pow(100000))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        expont = new Decimal(1)

        if (hasUpgrade('h', 17)) expont = expont.add(0.02)
        return expont
    },
    passiveGeneration() {
        mult = new Decimal(0)
        if (hasUpgrade('z', 15))
            mult = new Decimal(2);
        if (hasUpgrade('h', 15))
            mult = mult.add(2);
        return mult
    },
    autoUpgrade() {
        upg = false
        if (hasUpgrade('h', 15)) upg = true
        return upg
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [],

    upgrades: {
        11: {
            title: "这是反物质维度？",
            description: "开始反物质生产，每秒生产1e307反物质",
            cost: new Decimal(1),
        },
        12: {
            title: "所以你设置个无限又有什么用",
            description: "打破无限",
            cost: new Decimal("2e292"),
            unlocked() { return (hasUpgrade('z', 11)) },
        },
        13: {
            title: "是时间墙，我们没救了",
            description: "炸档点增加反物质获取，效果为炸档点^0.7",
            cost: new Decimal("1e293"),
            unlocked() { return (hasUpgrade('z', 12)) },
        },
        14: {
            title: "？？你这样很快就炸档了",
            description: "反物质增加炸档点获取，效果为反物质^0.3",
            cost: new Decimal("1e872"),
            unlocked() { return (hasUpgrade('z', 13)) },
        },
        15: {
            title: "ok了终于不用一直点了",
            description: "每秒获得200%重置时可获得的炸档点",
            cost: new Decimal("5e3071"),
            unlocked() { return (hasUpgrade('z', 14)) },
        },
        16: {
            title: "这游戏没救了",
            description: "反物质增加自身获取，效果为反物质^0.1",
            cost: new Decimal("1e3083"),
            unlocked() { return (hasUpgrade('z', 15)) },
        },
        17: {
            title: "炸档不如咬打火机",
            description: "反物质获取为原来的1.05次方（在乘数之后）",
            cost: new Decimal("1e15325"),
            unlocked() { return (hasUpgrade('z', 16)) },
        },
    },
    layerShown() { return true }
});
addLayer("h", {
    name: "炸档层2", // This is optional, only used in a few无 places, If absent it just uses the layer id.
    symbol: "档", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "#66ccff",
    requires: new Decimal("1e8436900"), // Can be a function that takes requirement increases into account
    resource: "炸档点2", // Name of prestige currency
    baseResource: "反物质", // Name of resource prestige is based on
    baseAmount() { return player.points }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.000001, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('h', 16)) mult = mult.div(0.34)
        if (hasUpgrade('h', 23)) mult = mult.mul(player.h.points.add(1).pow(0.3))
        if (hasUpgrade('h', 24)) mult = mult.mul(player.points.add(10).log(10))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() {
        mult = new Decimal(0)
        if (hasUpgrade('h', 22))
            mult = new Decimal(2);
        return mult
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [],

    upgrades: {
        11: {
            title: "不是我炸的档怎么没了",
            description: "基于反物质超过1e8436900的部分增益反物质，效果是((反物质-1e8436900)/1e8436900)^0.2，在1.05次方之后",
            cost: new Decimal(1),
        },
        12: {
            title: "还是去掉时间墙吧",
            description: "炸档点获取*1e5",
            cost: new Decimal(1),
            unlocked() { return (hasUpgrade('h', 11)) },
        },
        13: {
            title: "档要炸了",
            description: "升级11的所有“1e8436900”改为“1e8436800”",
            cost: new Decimal(2),
            unlocked() { return (hasUpgrade('h', 12)) },
        },
        14: {
            title: "还没炸？",
            description: "升级11的所有“1e8436800”改为“1e8350000”",
            cost: new Decimal(3),
            unlocked() { return (hasUpgrade('h', 13)) },
        },
        15: {
            title: "挂机了",
            description: "每秒获得200%重置时可获得的炸档点，自动购买炸层升级",
            cost: new Decimal(0),
            unlocked() { return (hasUpgrade('h', 14)) },
        },
        16: {
            title: "快炸",
            description: "炸档点2除以0.34",
            cost: new Decimal(3),
            unlocked() { return (hasUpgrade('h', 15)) },
        },
        17: {
            title: "炸",
            description: "炸档点指数+0.02",
            cost: new Decimal(10),
            unlocked() { return (hasUpgrade('h', 16)) },
        },
        21: {
            title: "炸不了",
            description: "炸档点2增加炸档点获取，效果为(炸档点2)^100000，最多计入1亿炸档点2",
            cost: new Decimal(10),
            unlocked() { return (hasUpgrade('h', 17)) },
        },
        22: {
            title: "就要炸",
            description: "每秒获得200%重置时可获得的炸档点2",
            cost: new Decimal(100),
            unlocked() { return (hasUpgrade('h', 21)) },
        },
        23: {
            title: "？？？",
            description: "炸档点2增加自身获取，效果为(炸档点2)^0.3",
            cost: new Decimal(10000),
            unlocked() { return (hasUpgrade('h', 22)) },
        },
        24: {
            title: "给我炸",
            description: "反物质增加炸档点2获取，效果为log10(反物质)",
            cost: new Decimal(1000000),
            unlocked() { return (hasUpgrade('h', 23)) },
        },
        25: {
            title: "软上限了？",
            description: "反物质获取为原来的1.05次方（在所有乘数之后）",
            cost: new Decimal(1e17),
            unlocked() { return (hasUpgrade('h', 24)) },
        },
    },
    layerShown() { return true }
})
