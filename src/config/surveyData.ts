// 栖海澐颂小区电动自行车充电设施民意调查问卷数据配置

export const surveyConfig = {
  title: "栖海澐颂小区电动自行车充电设施",
  subtitle: "民意调查问卷数据分析报告",
  version: "V1.0",
  surveyDate: "2026年4月14日",
  totalResponses: 213,
  
  summary: {
    opposeRate: "83.1%",
    supportRate: "97.2%",
    ownershipRate: "80.8%",
    agreementRate: "99.53%",
    keyMessage: "超99%业主支持红线外建设充电桩",
  },
};

// 核心问题数据 - 红线内建设态度
export const insideConstructionAttitude = [
  { name: "反对", value: 177, percentage: 83.1, color: "#ef4444" },
  { name: "中立", value: 26, percentage: 12.2, color: "#94a3b8" },
  { name: "支持", value: 10, percentage: 4.7, color: "#22c55e" },
];

// 红线外建设态度
export const outsideConstructionAttitude = [
  { name: "支持", value: 207, percentage: 97.2, color: "#22c55e" },
  { name: "中立", value: 6, percentage: 2.8, color: "#94a3b8" },
  { name: "反对", value: 0, percentage: 0, color: "#ef4444" },
];

// 电动自行车保有量
export const bikeOwnership = [
  { name: "拥有1辆及以上", value: 172, percentage: 80.8, color: "#3b82f6" },
  { name: "无电动自行车", value: 41, percentage: 19.2, color: "#94a3b8" },
];

// 红线内建设反对原因
export const opposeReasons = [
  { reason: "火灾安全隐患", count: 177, percentage: 83.1 },
  { reason: "占用绿地/休闲空间", count: 139, percentage: 65.3 },
  { reason: "挤占步行/消防通道", count: 136, percentage: 63.8 },
  { reason: "影响小区景观与房价", count: 126, percentage: 59.2 },
  { reason: "引发邻里矛盾", count: 79, percentage: 37.1 },
  { reason: "充电噪音、气味影响", count: 75, percentage: 35.2 },
];

// 红线外建设支持原因
export const supportReasons = [
  { reason: "远离住宅楼，更安全", count: 172, percentage: 80.8 },
  { reason: "不占用小区公共资源", count: 156, percentage: 73.2 },
  { reason: "符合消防独立设置要求", count: 141, percentage: 66.2 },
  { reason: "不影响小区环境", count: 132, percentage: 62.0 },
  { reason: "避免邻里矛盾", count: 95, percentage: 44.6 },
];

// 步行可达性接受度
export const walkabilityAcceptance = [
  { name: "接受或无所谓", value: 206, percentage: 96.7, color: "#22c55e" },
  { name: "不接受", value: 7, percentage: 3.3, color: "#ef4444" },
];

// 核心诉求
export const coreRequirements = [
  { requirement: "安全合规", count: 197, percentage: 92.5 },
  { requirement: "带棚防雨防晒", count: 175, percentage: 82.2 },
  { requirement: "电价为居民用电价格", count: 173, percentage: 81.2 },
  { requirement: "监控全覆盖", count: 158, percentage: 74.2 },
  { requirement: "24小时开放", count: 152, percentage: 71.4 },
];

// 项目同意度
export const projectApproval = [
  { name: "同意/中立", value: 212, percentage: 99.53, color: "#22c55e" },
  { name: "反对", value: 1, percentage: 0.47, color: "#ef4444" },
];

// 居民建议分类
export const residentSuggestions = {
  quantity: [
    "尽量多一些充电桩，避免争抢",
    "充电位要多，要多，要有遮挡",
    "数量尽量能有限保证本小区电动车数",
  ],
  price: [
    "电价为居民用电价格",
    "价格合适、收费合理",
    "电动车充电必须民电，且有监控系统",
  ],
  safety: [
    "安全第一，符合国家标准",
    "一定要带防雨棚，不然漏电太危险",
    "保障消防安全的前提下建设充电设施",
  ],
  monitoring: [
    "监控全覆盖",
    "建议像周边小区一样可以刷卡进出车棚",
    "希望设置门禁",
  ],
  location: [
    "强烈建议大力推进小区红线外建设",
    "红线外的湿地公园或商业用地",
    "小区外附近建设，便捷安全",
  ],
  management: [
    "需要带电动车棚，考虑刮风下雨下雪等天气",
    "不准停放自行车，电动车和自行车分开管理",
    "物业统一管理",
  ],
};

// 结论
export const conclusion = {
  main: "本小区民意高度一致：坚决反对红线内、全力支持红线外建设充电桩",
  sub: "数据真实、诉求合理、配合度高，恳请尽快予以支持落地",
  nextStep: "由琚琚等几位业主邻居代表栖海澐颂小区联合物业与社区、政府等相关单位推动在小区红线外建设电动自行车充电桩",
};