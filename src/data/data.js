const data = [
    { name: '沟对', scenario: '这个方案需要和老板沟对一下', meaning: '沟通对齐，讨论', origin: 'Align', rankingCommunication: 5, rankingUnderstanding: 3, rankingLikeable: 4, hasSource: false },
    { name: 'Re', scenario: '昨天讨论的方案我们再re一下', meaning: '来自单词review，审核，复查。', origin: 'Review', rankingCommunication: 4, rankingUnderstanding: 3, rankingLikeable: 3, hasSource: false },
    { name: '沉淀', scenario: '¹把这个放到库里沉淀一下 ²把这个方案沉淀一下 ³这个想法我们再沉淀一下。', meaning: '¹保存，²落实，³计划', origin: '万能动词，在不同语境下有不同的意思，等同于东北话中的“整”。', rankingCommunication: 2, rankingUnderstanding: 5, rankingLikeable: 2, hasSource: false },
    { name: '互联网思维', scenario: '建筑业数字化转型：用互联网思维、数字化理念重新定义建筑产品', meaning: '收集用户反馈，快速迭代', origin: '雷布斯', rankingCommunication: 2, rankingUnderstanding: 1, rankingLikeable: 1, hasSource: false },
    { name: '组合拳', scenario: '打好数字乡村建设“组合拳”', meaning: '有大于一种以上的手段', origin: '本意是在拳法当中利用各种单一拳法的组合连续攻击', rankingCommunication: 3, rankingUnderstanding: 4, rankingLikeable: 2, hasSource: false },
    { name: '击穿', scenario: '击穿互联网重疾险地板价!', meaning: '夸张修辞表示效果明显', origin: '从获取 - 占领 到击穿，下一步可能就是粉碎', rankingCommunication: 4, rankingUnderstanding: 4, rankingLikeable: 1, hasSource: false },
    { name: '结构化', scenario: '互联网企业估值水平出现结构化差异', meaning: '没有任何意义的虚词', origin: '而、 何、乎、乃、其、且、若 、所、为、 焉、也、以、因、 于、与、则、者、之', rankingCommunication: 0, rankingUnderstanding: 0, rankingLikeable: 5, hasSource: false },
    { name: '生态化反', scenario: '到底什么是生态化反', meaning: '在多个生态系统中产生化学反应', origin: '贾跃亭', rankingCommunication: 0, rankingUnderstanding: 0, rankingLikeable: 1, hasSource: false },
    { name: '顶层设计', scenario: '数字经济基础设施——数据中心能源系统的顶层设计', meaning: '从全局的角度统筹计划', origin: '2010年10月，“顶层设计”在中共中央关于“十二五”规划的建议中首次出现。', rankingCommunication: 2, rankingUnderstanding: 3, rankingLikeable: 1, hasSource: false },
    { name: '底层逻辑', scenario: '一个人职场想要混的好，这几条底层逻辑要上心', meaning: '问题的根本原因', origin: 'root cause', rankingCommunication: 2, rankingUnderstanding: 3, rankingLikeable: 1, hasSource: true, source: '领英工友提供', sourceProfile: 'source-linkedin' },
    { name: '颗粒度', scenario: '这个方案颗粒度不够细', meaning: '详细程度', origin: 'granularity', rankingCommunication: 3, rankingUnderstanding: 3, rankingLikeable: 3, hasSource: false },
    { name: '调性', scenario: '这样设计不符合品牌调性', meaning: '特点，风格', origin: '音乐学术语，是调的主音和调式类别的总称', rankingCommunication: 3, rankingUnderstanding: 3, rankingLikeable: 3, hasSource: false },
    { name: '抓手', scenario: '互联网大厂过冬,ToB成重要抓手', meaning: '手段', origin: '¹handle，²官话 - 抓工作的手段', rankingCommunication: 3, rankingUnderstanding: 1, rankingLikeable: 1, hasSource: false },
    { name: '负优化', scenario: '会不会故意负优化系统,故意更新搞卡手机让我们换手机?', meaning: '优化的反方向，把产品做的更差', origin: '把“负”前缀到“增长”，“优化”等表示反义，放弃原有的反义词倒退，退化。有可能是从negative growth翻译模式而来。', rankingCommunication: 2, rankingUnderstanding: 5, rankingLikeable: 4, hasSource: true, source: 'Keep工友提供', sourceProfile: 'source-keep' },
    { name: '透传', scenario: '这个方案的优惠信息透传力度不够。', meaning: '透明地传递信息', origin: '透传，即透明传输(pass-through)，指的是在通讯中不管传输的业务内容如何，只负责将传输的内容由源地址传输到目的地址，而不对业务数据内容做任何改变。', rankingCommunication: 3, rankingUnderstanding: 2, rankingLikeable: 2, hasSource: true, source: '美团工友提供', sourceProfile: 'source-meituan' },
    { name: '分层渐进', scenario: '用分层渐进法攻克O2O行业设计。', meaning: '一种设计项目的流程方法', origin: '分层渐进设计法的理论主要是依据 Jesse James Garrett的《用户体验要素》这本书。- 腾讯新闻', rankingCommunication: 1, rankingUnderstanding: 0, rankingLikeable: 1, hasSource: true, source: '美团工友提供', sourceProfile: 'source-meituan' },
    { name: '复盘', scenario: '复盘世界互联网大会后，我们整理了这份知识套餐。', meaning: '项目总结会。可庆功宴，可拉清单。', origin: '围棋术语，指对局完毕后，按原先的走法把棋再摆一遍，总结优劣与得失。', rankingCommunication: 3, rankingUnderstanding: 3, rankingLikeable: 3, hasSource: true, source: 'Vivo工友提供', sourceProfile: 'source-vivo' },
    { name: '赋能', scenario: '赋能,人生最好的激励方法!', meaning: '赋予能量。（因为它会显得对方很“无能”）', origin: 'empowerment', rankingCommunication: 3, rankingUnderstanding: 3, rankingLikeable: 4, hasSource: true, source: '建行工友提供', sourceProfile: 'source-ccb' },

]
export default data