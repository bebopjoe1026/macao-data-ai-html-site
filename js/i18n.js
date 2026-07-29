// js/i18n.js
// 多语言核心系统

let currentLang = localStorage.getItem('lang') || 'zh-CN';

// ==================== 翻译数据（后续逐步填充） ====================
const translations = {
    'zh-CN': {
        // 导航
        'nav.home': '首页',
        'nav.capabilities': '核心能力',
        'nav.partners': '生态伙伴',
        'nav.demo': '服务体验',
        'nav.dynamics': '平台动态',
        'nav.contact': '联系专属顾问',

        // ==================== Contact Modal ====================
        'contactModal.title': '联系专属顾问',
        'contactModal.subtitle': '我们的团队将尽快与您取得联系',
        'contactModal.name': '姓名',
        'contactModal.namePlaceholder': '请输入您的姓名',
        'contactModal.company': '公司 / 职位',
        'contactModal.companyPlaceholder': '请输入公司名称或职位',
        'contactModal.contact': '联系方式',
        'contactModal.contactPlaceholder': '手机号 / 微信 / 邮箱',
        'contactModal.service': '您希望咨询的服务',
        'contactModal.servicePlaceholder': '请简要描述您的需求',
        'contactModal.submit': '提交咨询请求',

        // Hero 区域
        "hero.title": "数据跨境与人工智能<br>国际合作服务中心",
        'hero.subtitle': '一站式跨境数据与AI能力聚合平台',
        'hero.tagline': '政策友好枢纽 · 多区域算力 · 合规专家网络',
        'hero.cta.assessment': '免费启动数据合规自助评估',
        'hero.cta.explore': '探索五大核心能力',

        // 语言切换按钮
        'lang.zhCN': '简',
        'lang.zhTW': '繁',
        'lang.en': 'EN',

        // === 解决核心痛点 ===
        'value.sectionTitle': '澳门枢纽优势，解决您的核心痛点',
        'value.solvePainPoints.title': '解决核心痛点',
        'value.solvePainPoints.item1.left': '数据出境合规难 → ',
        'value.solvePainPoints.item1.right': '免费评估 + 风险报告 + 合规建议',
        'value.solvePainPoints.item2.left': '算力获取贵、跨区域难 → ',
        'value.solvePainPoints.item2.right': '中国境内+东南亚双算力池，按需调度',
        'value.solvePainPoints.item3.left': '出海数据与本地支持不足 → ',
        'value.solvePainPoints.item3.right': '一站式数据合规方案 + 国际本地化支持',

        // === 平台核心优势 ===
        'value.platformAdvantage.title': '平台核心优势',
        'value.platformAdvantage.item1.left': '澳门枢纽 + 国际专线 → ',
        'value.platformAdvantage.item1.right': '监管友好，高速跨境网络',
        'value.platformAdvantage.item2.left': '聚合顶尖伙伴 → ',
        'value.platformAdvantage.item2.right': '数据集团、火山引擎、邓白氏等一站式能力资源',
        'value.platformAdvantage.item3.left': '政策协调 + 高可用网络 → ',
        'value.platformAdvantage.item3.right': '国际业务连续性双保障',

        // === 五大核心能力 ===
        'capability.section.title': '五大核心能力',
        'capability.section.cta': '进入数据合规预评估',

        'capability.dataCrossBorder.title': '数据跨境',
        'capability.dataCrossBorder.desc': '数据交易、跨境可信数据空间、离岸数据中心及合规服务。依托中信国际电讯全球网络与多地合作伙伴资源。',

        'capability.computingScheduling.title': '算力调度',
        'capability.computingScheduling.desc': '聚合国产与国际算力集群，支持模型智能路由与数据聚合平台，实现跨境低成本、高性能算力调度。',

        'capability.enterpriseGoingGlobal.title': '企业出海',
        'capability.enterpriseGoingGlobal.desc': '一站式DICT出海服务，结合东南亚本地支撑团队、跨境金融赋能及海外征信认证，助力中资企业全球化布局。',

        'capability.infrastructure.title': '基础设施',
        'capability.infrastructure.desc': '低时延网络 + 横琴/国内/东南亚智算中心 + 桂澳跨境数据专线，为数据跨境与算力调度提供高可用底座。',

        'capability.standardsPolicy.title': '标准及政策',
        'capability.standardsPolicy.desc': '对接国家及国际标准，释放两岸三地政策红利，推动产学研生态合作与合规路径优化。',

        // 通用
        'capability.common.learnMore': '了解详情',
        // 各卡片按钮
        'capability.dataCrossBorder.action': '立即评估',
        'capability.computingScheduling.action': '快速匹配',
        'capability.enterpriseGoingGlobal.action': '规划出海',
        'capability.infrastructure.action': '资源地图',
        'capability.standardsPolicy.action': '政策问答',

        // === 生态伙伴 ===
        'partners.section.label': 'ECOSYSTEM',
        'partners.section.title': '顶尖生态伙伴，聚合全球能力',
        'partners.governmentSupport': '政府支持',
        'partners.cooperationPartners': '合作机构',

        // ==================== Demo / 评估向导 ====================
        'demo.section.title': '数据跨境合规智能评估',
        'demo.section.subtitle': '快速完成初步风险评估，获取个性化合规建议与服务推荐',

        'demo.progress.step1': '企业画像',
        'demo.progress.step2': '数据与场景',
        'demo.progress.step3': '跨境方向',
        'demo.progress.step4': '生成报告',

        'demo.step1.title': '企业画像',
        'demo.step1.desc': '帮助我们快速了解您的业务背景，生成更精准的评估结果',
        'demo.step1.companyName': '公司名称',
        'demo.step1.industry': '所属行业',
        'demo.step1.scale': '企业规模',
        'demo.step1.scale.small': '小型 (&lt;100人)',
        'demo.step1.scale.medium': '中型 (100-1000人)',
        'demo.step1.scale.large': '大型 (&gt;1000人)',
        'demo.step1.industry.ai': '人工智能 / 科技',
        'demo.step1.industry.finance': '金融服务',
        'demo.step1.industry.manufacturing': '制造业',
        'demo.step1.industry.retail': '零售与电商',
        'demo.step1.industry.healthcare': '医疗健康',
        'demo.step1.industry.other': '其他行业',

        'demo.step2.title': '数据与业务场景',
        'demo.step2.desc': '请如实选择您计划跨境的数据类型与主要应用场景',
        'demo.step2.upload': '数据上传',
        'demo.step2.dataType': '数据类型（可多选）',
        'demo.step2.dataType.pii': '个人身份信息 (PII)',
        'demo.step2.dataType.business': '商业机密 / 财务数据',
        'demo.step2.dataType.ai': 'AI训练 / 推理数据集',
        'demo.step2.dataType.model': '模型参数 / 权重',
        'demo.step2.dataType.transaction': '交易记录 / 用户行为',
        'demo.step2.dataVolume': '预计数据规模',
        'demo.step2.businessScenario': '主要业务场景',
        'demo.step2.scenario.crossBorder': '跨境业务运营',
        'demo.step2.scenario.aiInference': 'AI模型部署与推理',
        'demo.step2.scenario.supplyChain': '供应链数据协同',
        'demo.step2.scenario.remoteWork': '远程协作与办公',
        'demo.step2.scenario.customerAnalysis': '客户数据分析与营销',
        'demo.step2.scenario.other': '其他场景',

        // ==================== Upload Modal ====================
        'uploadModal.title': '数据上传提示',
        'uploadModal.desc': '请上传数据样品，合规智能体分析后，数据将于平台彻底删除。',
        'uploadModal.dropHint': '点击选择或拖拽数据样品文件到此处 (.csv, .json, .xlsx)',
        'uploadModal.ready': '已就绪',
        'uploadModal.uploaded': '数据已上传',
        'common.cancel': '取消',
        'common.confirm': '确定',

        'demo.step3.title': '跨境数据流动方向',
        'demo.step3.desc': '选择主要数据流向及合规敏感度',
        'demo.step3.destination': '主要流动方向（可多选）',
        'demo.step3.dest.cn': '中国内地',
        'demo.step3.dest.macao': '中国澳门特别行政区',
        'demo.step3.dest.sg': '新加坡',
        'demo.step3.dest.id': '印尼',
        'demo.step3.dest.vn': '越南',
        'demo.step3.dest.us': '美国',
        'demo.step3.dest.eu': '欧盟成员国',
        'demo.step3.dest.jp': '日本 / 韩国',

        // 敏感數據與脫敏
        'demo.step3.sensitive.label': '是否涉及敏感/受限数据？',
        'demo.step3.sensitive.yes': '是（医疗、生物识别、金融核心等）',
        'demo.step3.sensitive.no': '否',
        'demo.step3.anonymized.label': '是否已进行脱敏或匿名化处理？',
        'demo.step3.anonymized.yes': '是',
        'demo.step3.anonymized.no': '否',

        // Step 3 -> Step 4 加载动画
        'demo.loading.initial': '正在初始化智能合规分析引擎...',
        'demo.loading.aiThinking': '智能体正在进行跨境合规风险评估...',
        'demo.loading.step1': '智能体正在深度解析数据样本与业务场景...',
        'demo.loading.step2': '智能体正在交叉匹配多区域（澳门/东南亚/欧盟）数据出境法规...',
        'demo.loading.step3': '智能体正在评估 PII 敏感度与数据规模风险权重...',
        'demo.loading.step4': '智能体正在比对《粤港澳大湾区标准合同》与最新合规模板...',
        'demo.loading.step5': '智能体正在生成个性化合规路径与推荐服务组合...',
        'demo.loading.step6': '智能体正在完成最终风险评级与报告生成...',

        // ==================== Step 4 最终报告 ====================
        'demo.report.title': '智能合规评估报告',
        'demo.report.reportNumber': '报告编号',
        'demo.report.generateTime': '生成时间',
        'demo.report.riskLevel': '您的合规风险等级',
        'demo.report.mediumRisk': '中度风险 (Medium)',
        'demo.report.needFiling': '需履行备案程序',
        'demo.report.riskDesc': '检测到您出境的数据包含个人身份信息 (PII)，且规模处于 10-500GB 区间。根据相关法规，此场景不属于强制国家安全评估范畴，但需在数据出境前完成标准合同签署并向网信部门备案。',
        'demo.report.suggestionPath': '建议合规路径',
        'demo.report.gbaContract': '大湾区标准合同',
        'demo.report.followUpSuggestions': '后续合规优化建议',
        'demo.report.dataDeidentify': '数据去标识化',
        'demo.report.dataDeidentifyDesc': '建议在数据离境前，对 PII（如身份证号、电话）进行去标识化或加密，可使合规风险降至低度。',
        'demo.report.localCompute': '算力本地化',
        'demo.report.localComputeDesc': '涉及 AI 推理场景，可考虑租用中心提供的「横琴/澳门高可用智算中心」进行数据预处理。',
        'demo.report.contactExpert': '联系专家协助备案',
        'demo.report.downloadReport': '下载评估报告',
        'demo.report.applyExpert': '申请专家深度评估（免费）',

        'demo.wizard.prev': '上一步',
        'demo.wizard.next': '下一步',
        'demo.wizard.note': '本评估为演示模拟，实际服务以正式评估为准。评估结果将用于匹配最优服务资源。',

        // ==================== 平台动态 ====================
        'dynamics.section.title': '平台动态',
        'dynamics.section.subtitle': '聚焦数据跨境、AI算力、政策标准、企业出海的最新资讯与行业洞察',
        'dynamics.search.placeholder': '搜索标题或关键词...',
        'dynamics.loadMore': '加载更多动态',
        'dynamics.collapse': '收起更多动态',

        // 平台动态相关翻译
        'dynamics.readMore': '阅读全文',
        'dynamics.noResult': '暂无匹配的动态，请尝试其他关键词',
        'dynamics.milestone': '重要里程碑',
        'dynamics.milestoneDesc': '广西书记10月访澳<br>中心门户正式亮相',
        'dynamics.relatedServices': '相关服务',
        'dynamics.applyService': '申请相关服务',
        'common.close': '关闭',
        // ==================== 相关服务标签 ====================
        'service.dataCrossBorder': '数据跨境合规',
        'service.computingScheduling': '算力调度',
        'service.enterpriseGoingGlobal': '企业出海支持',
        'service.standardsPolicy': '标准及政策',

        // ==================== Lead Modal ====================
        'leadModal.title': '申请服务 / 预约专属顾问',
        'leadModal.subtitle': '提交后，专属顾问将在24小时内与您联系',
        'leadModal.serviceModules': '申请的服务模块',
        'leadModal.description': '简要需求描述',
        'leadModal.descriptionPlaceholder': '例如：我们计划将AI训练数据迁移至东南亚节点，需要完整合规方案与算力报价...',
        'leadModal.contactPerson': '联系人',
        'leadModal.phone': '联系电话 / 微信',
        'leadModal.privacy': '我们承诺严格保密您的信息',
        'leadModal.submit': '提交申请',


        // ==================== Footer ====================
        'footer.logo': '数据跨境与人工智能国际合作服务中心',
        'footer.description': '以澳门为枢纽，聚合境内与境外数据及算力资源，<br>为中资企业提供跨境合规与出海一站式服务。',
        'footer.copyright': '© 2026 数据跨境与人工智能国际合作服务中心<br>保留所有权利',
        'footer.contact': '联系方式',
        'footer.contact.location': '澳门特别行政区',
        'footer.quickLinks': '快速链接',
        'footer.milestone': '里程碑',
        'footer.complianceAssessment': '合规自助评估',
        'footer.terms': '服务条款',
        'footer.privacy': '隐私政策',
        'footer.whitepaper': '数据跨境白皮书',
        'footer.milestoneText': '2026年10月<br>门户Demo + 能力展示',

        // ==================== Chatbox ====================
        'chatbox.title': '智能顾问',
        'chatbox.status': '在线 · 实时响应',
        'chatbox.welcome': '您好！我是澳门数据跨境与人工智能合作服务中心的智能顾问，有什么可以帮您的吗？',
        'chatbox.placeholder': '输入您的问题...',
    },

    'zh-TW': {
        // 导航
        'nav.home': '首頁',
        'nav.capabilities': '核心能力',
        'nav.partners': '生態夥伴',
        'nav.demo': '服務體驗',
        'nav.dynamics': '平台動態',
        'nav.contact': '聯絡專屬顧問',

        // ==================== Contact Modal ====================
        'contactModal.title': '聯絡專屬顧問',
        'contactModal.subtitle': '我們的團隊將盡快與您取得聯絡',
        'contactModal.name': '姓名',
        'contactModal.namePlaceholder': '請輸入您的姓名',
        'contactModal.company': '公司 / 職位',
        'contactModal.companyPlaceholder': '請輸入公司名稱或職位',
        'contactModal.contact': '聯絡方式',
        'contactModal.contactPlaceholder': '手機號 / 微信 / 郵箱',
        'contactModal.service': '您希望諮詢的服務',
        'contactModal.servicePlaceholder': '請簡要描述您的需求',
        'contactModal.submit': '提交諮詢請求',

        // Hero 区域
        "hero.title": "數據跨境與人工智能<br>國際合作服務中心",
        'hero.subtitle': '一站式跨境數據與AI能力聚合平台',
        'hero.tagline': '政策友好樞紐 · 多區域算力 · 合規專家網絡',
        'hero.cta.assessment': '免費啟動數據合規自助評估',
        'hero.cta.explore': '探索五大核心能力',
        'lang.zhCN': '簡',
        'lang.zhTW': '繁',
        'lang.en': 'EN',

        // === 解决核心痛点 ===
        'value.sectionTitle': '澳門樞紐優勢，解決您的核心痛點',
        'value.solvePainPoints.title': '解決核心痛點',
        'value.solvePainPoints.item1.left': '數據出境合規難 → ',
        'value.solvePainPoints.item1.right': '免費評估 + 風險報告 + 合規建議',
        'value.solvePainPoints.item2.left': '算力獲取貴、跨區域難 → ',
        'value.solvePainPoints.item2.right': '中國境內+東南亞雙算力池，按需調度',
        'value.solvePainPoints.item3.left': '出海數據與本地支持不足 → ',
        'value.solvePainPoints.item3.right': '一站式數據合規方案 + 國際本地化支持',

        // === 平台核心优势 ===
        'value.platformAdvantage.title': '平台核心優勢',
        'value.platformAdvantage.item1.left': '澳門樞紐 + 國際專線 → ',
        'value.platformAdvantage.item1.right': '監管友好，高速跨境網絡',
        'value.platformAdvantage.item2.left': '聚合頂尖夥伴 → ',
        'value.platformAdvantage.item2.right': '數據集團、火山引擎、鄧白氏等一站式能力資源',
        'value.platformAdvantage.item3.left': '政策協調 + 高可用網絡 → ',
        'value.platformAdvantage.item3.right': '國際業務連續性雙保障',

        // === 五大核心能力 ===
        'capability.section.title': '五大核心能力',
        'capability.section.cta': '進入數據合規預評估',

        'capability.dataCrossBorder.title': '數據跨境',
        'capability.dataCrossBorder.desc': '數據交易、跨境可信數據空間、離岸數據中心及合規服務。依托中信國際電訊全球網絡與多地合作夥伴資源。',

        'capability.computingScheduling.title': '算力調度',
        'capability.computingScheduling.desc': '聚合國產與國際算力集群，支持模型智能路由與數據聚合平台，實現跨境低成本、高性能算力調度。',

        'capability.enterpriseGoingGlobal.title': '企業出海',
        'capability.enterpriseGoingGlobal.desc': '一站式DICT出海服務，結合東南亞本地支撐團隊、跨境金融賦能及海外徵信認證，助力中資企業全球化布局。',

        'capability.infrastructure.title': '基礎設施',
        'capability.infrastructure.desc': '低時延網絡 + 橫琴/國內/東南亞智算中心 + 桂澳跨境數據專線，為數據跨境與算力調度提供高可用底座。',

        'capability.standardsPolicy.title': '標準及政策',
        'capability.standardsPolicy.desc': '對接國家及國際標準，釋放兩岸三地政策紅利，推動產學研生態合作與合規路徑優化。',

        // 通用
        // 各卡片按钮
        'capability.common.learnMore': '了解詳情',
        'capability.dataCrossBorder.action': '立即評估',
        'capability.computingScheduling.action': '快速匹配',
        'capability.enterpriseGoingGlobal.action': '規劃出海',
        'capability.infrastructure.action': '資源地圖',
        'capability.standardsPolicy.action': '政策問答',

        // === 生态伙伴 ===
        'partners.section.label': 'ECOSYSTEM',
        'partners.section.title': '頂尖生態夥伴，聚合全球能力',
        'partners.governmentSupport': '政府支持',
        'partners.cooperationPartners': '合作機構',

        // ==================== Demo / 评估向导 ====================
        'demo.section.title': '數據跨境合規智能評估',
        'demo.section.subtitle': '快速完成初步風險評估，獲取個性化合規建議與服務推薦',

        // 進度條
        'demo.progress.step1': '企業畫像',
        'demo.progress.step2': '數據與場景',
        'demo.progress.step3': '跨境方向',
        'demo.progress.step4': '生成報告',

        // Step 1：企業畫像
        'demo.step1.title': '企業畫像',
        'demo.step1.desc': '幫助我們快速了解您的業務背景，生成更精準的評估結果',
        'demo.step1.companyName': '公司名稱',
        'demo.step1.industry': '所屬行業',
        'demo.step1.scale': '企業規模',
        'demo.step1.scale.small': '小型 (&lt;100人)',
        'demo.step1.scale.medium': '中型 (100-1000人)',
        'demo.step1.scale.large': '大型 (&gt;1000人)',
        'demo.step1.industry.ai': '人工智能 / 科技',
        'demo.step1.industry.finance': '金融服務',
        'demo.step1.industry.manufacturing': '製造業',
        'demo.step1.industry.retail': '零售與電商',
        'demo.step1.industry.healthcare': '醫療健康',
        'demo.step1.industry.other': '其他行業',

        // Step 2：數據與業務場景
        'demo.step2.title': '數據與業務場景',
        'demo.step2.desc': '請如實選擇您計劃跨境的數據類型與主要應用場景',
        'demo.step2.upload': '數據上傳',
        'demo.step2.dataType': '數據類型（可多選）',
        'demo.step2.dataType.pii': '個人身份信息 (PII)',
        'demo.step2.dataType.business': '商業機密 / 財務數據',
        'demo.step2.dataType.ai': 'AI訓練 / 推理數據集',
        'demo.step2.dataType.model': '模型參數 / 權重',
        'demo.step2.dataType.transaction': '交易記錄 / 用戶行為',
        'demo.step2.dataVolume': '預計數據規模',
        'demo.step2.businessScenario': '主要業務場景',
        'demo.step2.scenario.crossBorder': '跨境業務運營',
        'demo.step2.scenario.aiInference': 'AI模型部署與推理',
        'demo.step2.scenario.supplyChain': '供應鏈數據協同',
        'demo.step2.scenario.remoteWork': '遠程協作與辦公',
        'demo.step2.scenario.customerAnalysis': '客戶數據分析與營銷',
        'demo.step2.scenario.other': '其他場景',

        // ==================== Upload Modal ====================
        'uploadModal.title': '數據上傳提示',
        'uploadModal.desc': '請上傳數據樣品，合規智能體分析後，數據將於平台徹底刪除。',
        'uploadModal.dropHint': '點擊選擇或拖拽數據樣品文件到此處 (.csv, .json, .xlsx)',
        'uploadModal.ready': '已就緒',
        'uploadModal.uploaded': '數據已上傳',
        'common.cancel': '取消',
        'common.confirm': '確定',

        // Step 3：跨境數據流動方向
        'demo.step3.title': '跨境數據流動方向',
        'demo.step3.desc': '選擇主要數據流向及合規敏感度',
        'demo.step3.destination': '主要流動方向（可多選）',
        'demo.step3.dest.cn': '中國內地',
        'demo.step3.dest.macao': '中國澳門特別行政區',
        'demo.step3.dest.sg': '新加坡',
        'demo.step3.dest.id': '印尼',
        'demo.step3.dest.vn': '越南',
        'demo.step3.dest.us': '美國',
        'demo.step3.dest.eu': '歐盟成員國',
        'demo.step3.dest.jp': '日本 / 韓國',

        // 敏感數據與脫敏
        'demo.step3.sensitive.label': '是否涉及敏感/受限數據？',
        'demo.step3.sensitive.yes': '是（醫療、生物識別、金融核心等）',
        'demo.step3.sensitive.no': '否',
        'demo.step3.anonymized.label': '是否已進行脫敏或匿名化處理？',
        'demo.step3.anonymized.yes': '是',
        'demo.step3.anonymized.no': '否',

        // Step 3 -> Step 4 加载动画
        'demo.loading.initial': '正在初始化智能合規分析引擎...',
        'demo.loading.aiThinking': '智能體正在進行跨境合規風險評估...',
        'demo.loading.step1': '智能體正在深度解析數據樣本與業務場景...',
        'demo.loading.step2': '智能體正在交叉匹配多區域（澳門/東南亞/歐盟）數據出境法規...',
        'demo.loading.step3': '智能體正在評估 PII 敏感度與數據規模風險權重...',
        'demo.loading.step4': '智能體正在比對《粵港澳大灣區標準合同》與最新合規模板...',
        'demo.loading.step5': '智能體正在生成個性化合規路徑與推薦服務組合...',
        'demo.loading.step6': '智能體正在完成最終風險評級與報告生成...',

        // zh-TW
        'demo.report.title': '智能合規評估報告',
        'demo.report.reportNumber': '報告編號',
        'demo.report.generateTime': '生成時間',
        'demo.report.riskLevel': '您的合規風險等級',
        'demo.report.mediumRisk': '中度風險 (Medium)',
        'demo.report.needFiling': '需履行備案程序',
        'demo.report.riskDesc': '檢測到您出境的數據包含個人身份信息 (PII)，且規模處於 10-500GB 區間。根據相關法規，此場景不屬於強制國家安全評估範疇，但需在數據出境前完成標準合同簽署並向網信部門備案。',
        'demo.report.suggestionPath': '建議合規路徑',
        'demo.report.gbaContract': '大灣區標準合同',
        'demo.report.followUpSuggestions': '後續合規優化建議',
        'demo.report.dataDeidentify': '數據去標識化',
        'demo.report.dataDeidentifyDesc': '建議在數據離境前，對 PII（如身份證號、電話）進行去標識化或加密，可使合規風險降至低度。',
        'demo.report.localCompute': '算力本地化',
        'demo.report.localComputeDesc': '涉及 AI 推理場景，可考慮租用中心提供的「橫琴/澳門高可用智算中心」進行數據預處理。',
        'demo.report.contactExpert': '聯絡專家協助備案',
        'demo.report.downloadReport': '下載評估報告',
        'demo.report.applyExpert': '申請專家深度評估（免費）',

        // Wizard 底部
        'demo.wizard.prev': '上一步',
        'demo.wizard.next': '下一步',
        'demo.wizard.note': '本評估為演示模擬，實際服務以正式評估為準。評估結果將用於匹配最優服務資源。',

        // ==================== 平台动态 ====================
        'dynamics.section.title': '平台動態',
        'dynamics.section.subtitle': '聚焦數據跨境、AI算力、政策標準、企業出海的最新資訊與行業洞察',
        'dynamics.search.placeholder': '搜索標題或關鍵詞...',
        'dynamics.loadMore': '加載更多動態',
        'dynamics.collapse': '收起更多動態',

        // 平台动态相关翻译
        'dynamics.readMore': '閱讀全文',
        'dynamics.noResult': '暫無匹配的動態，請嘗試其他關鍵詞',
        'dynamics.milestone': '重要里程碑',
        'dynamics.milestoneDesc': '廣西書記10月訪澳<br>中心門戶正式亮相',
        'dynamics.relatedServices': '相關服務',
        'dynamics.applyService': '申請相關服務',
        'common.close': '關閉',
        // ==================== 相关服务标签 ====================
        'service.dataCrossBorder': '數據跨境合規',
        'service.computingScheduling': '算力調度',
        'service.enterpriseGoingGlobal': '企業出海支持',
        'service.standardsPolicy': '標準及政策',

        // ==================== Lead Modal ====================
        'leadModal.title': '申請服務 / 預約專屬顧問',
        'leadModal.subtitle': '提交後，專屬顧問將在24小時內與您聯絡',
        'leadModal.serviceModules': '申請的服務模組',
        'leadModal.description': '簡要需求描述',
        'leadModal.descriptionPlaceholder': '例如：我們計劃將AI訓練數據遷移至東南亞節點，需要完整合規方案與算力報價...',
        'leadModal.contactPerson': '聯絡人',
        'leadModal.phone': '聯絡電話 / 微信',
        'leadModal.privacy': '我們承諾嚴格保密您的信息',
        'leadModal.submit': '提交申請',

        // ==================== Footer ====================
        'footer.logo': '數據跨境與人工智能國際合作服務中心',
        'footer.description': '以澳門為樞紐，聚合境內與境外數據及算力資源，<br>為中資企業提供跨境合規與出海一站式服務。',
        'footer.copyright': '© 2026 數據跨境與人工智能國際合作服務中心<br>保留所有權利',
        'footer.contact': '聯絡方式',
        'footer.contact.location': '澳門特別行政區',
        'footer.quickLinks': '快速連結',
        'footer.milestone': '里程碑',
        'footer.complianceAssessment': '合規自助評估',
        'footer.terms': '服務條款',
        'footer.privacy': '隱私政策',
        'footer.whitepaper': '數據跨境白皮書',
        'footer.milestoneText': '2026年10月<br>門戶Demo + 能力展示',

        // ==================== Chatbox ====================
        'chatbox.title': '智能顧問',
        'chatbox.status': '在線 · 實時響應',
        'chatbox.welcome': '您好！我是澳門數據跨境與人工智能合作服務中心的智能顧問，有什麼可以幫您的嗎？',
        'chatbox.placeholder': '輸入您的問題...',
    },

    'en': {
        // 导航
        'nav.home': 'Home',
        'nav.capabilities': 'Core Capabilities',
        'nav.partners': 'Ecosystem Partners',
        'nav.demo': 'Service Experience',
        'nav.dynamics': 'Platform Updates',
        'nav.contact': 'Contact Advisor',

        // ==================== Contact Modal ====================
        'contactModal.title': 'Contact Dedicated Advisor',
        'contactModal.subtitle': 'Our team will contact you as soon as possible',
        'contactModal.name': 'Name',
        'contactModal.namePlaceholder': 'Please enter your name',
        'contactModal.company': 'Company / Position',
        'contactModal.companyPlaceholder': 'Please enter company name or position',
        'contactModal.contact': 'Contact Information',
        'contactModal.contactPlaceholder': 'Phone / WeChat / Email',
        'contactModal.service': 'Service You Wish to Inquire About',
        'contactModal.servicePlaceholder': 'Please briefly describe your needs',
        'contactModal.submit': 'Submit Inquiry',

        // Hero 区域
        // Hero 区域
        "hero.title": `<span class="block whitespace-nowrap">International Cooperation Hub</span><span class="block whitespace-nowrap">on Cross-Border Data & AI</span>`,
        'hero.subtitle': 'One-stop platform for cross-border data and AI capabilities',
        'hero.tagline': 'Policy-friendly hub · Multi-region computing power · Compliance expert network',
        'hero.cta.assessment': 'Start Free Compliance Self-Assessment',
        'hero.cta.explore': 'Explore Five Core Capabilities',

        'lang.zhCN': '简',
        'lang.zhTW': '繁',
        'lang.en': 'EN',

        // === 解决核心痛点 ===
        'value.sectionTitle': 'Macao Hub Advantages — Solving Your Core Challenges',
        'value.solvePainPoints.title': 'Solve Core Pain Points',
        'value.solvePainPoints.item1.left': 'Cross-border data compliance difficulties → ',
        'value.solvePainPoints.item1.right': 'Free assessment + Risk report + Compliance recommendations',
        'value.solvePainPoints.item2.left': 'Expensive and fragmented computing resources → ',
        'value.solvePainPoints.item2.right': 'Dual computing pools in China + Southeast Asia with on-demand scheduling',
        'value.solvePainPoints.item3.left': 'Insufficient overseas data and local support → ',
        'value.solvePainPoints.item3.right': 'One-stop compliance solutions + International localization support',

        // === 平台核心优势 ===
        'value.platformAdvantage.title': 'Platform Core Advantages',
        'value.platformAdvantage.item1.left': 'Macao hub + International dedicated lines → ',
        'value.platformAdvantage.item1.right': 'Regulatory-friendly with high-speed cross-border network',
        'value.platformAdvantage.item2.left': 'Aggregating top-tier partners → ',
        'value.platformAdvantage.item2.right': 'One-stop resources from Data Groups, Volcano Engine, Dun & Bradstreet, etc.',
        'value.platformAdvantage.item3.left': 'Policy coordination + High-availability network → ',
        'value.platformAdvantage.item3.right': 'Dual guarantee for international business continuity',

        // === 五大核心能力 ===
        'capability.section.title': 'Five Core Capabilities',
        'capability.section.cta': 'Start Data Compliance Pre-Assessment',

        'capability.dataCrossBorder.title': 'Data Cross-Border',
        'capability.dataCrossBorder.desc': 'Data trading, cross-border trusted data spaces, offshore data centers, and compliance services. Powered by CITIC International Telecom’s global network and multi-regional partners.',

        'capability.computingScheduling.title': 'Computing Power Scheduling',
        'capability.computingScheduling.desc': 'Aggregates domestic and international computing clusters, supports intelligent model routing and data aggregation platforms for low-cost, high-performance cross-border computing.',

        'capability.enterpriseGoingGlobal.title': 'Enterprise Going Global',
        'capability.enterpriseGoingGlobal.desc': 'One-stop DICT overseas services, combined with Southeast Asia local support teams, cross-border financial empowerment, and overseas credit certification to help Chinese enterprises expand globally.',

        'capability.infrastructure.title': 'Infrastructure',
        'capability.infrastructure.desc': 'Low-latency networks + Hengqin/Domestic/Southeast Asia intelligent computing centers + Guangxi-Macao cross-border data dedicated lines, providing a high-availability foundation for data cross-border and computing scheduling.',

        'capability.standardsPolicy.title': 'Standards & Policy',
        'capability.standardsPolicy.desc': 'Connects with national and international standards, releases policy dividends across the Greater Bay Area, and promotes industry-academia-research collaboration and compliance path optimization.',

        // 通用
        // 各卡片按钮
        'capability.common.learnMore': 'Learn More',
        'capability.dataCrossBorder.action': 'Start Assessment',
        'capability.computingScheduling.action': 'Quick Match',
        'capability.enterpriseGoingGlobal.action': 'Plan Going Global',
        'capability.infrastructure.action': 'Resource Map',
        'capability.standardsPolicy.action': 'Policy Q&A',

        // === 生态伙伴 ===
        'partners.section.label': 'ECOSYSTEM',
        'partners.section.title': 'Top Ecosystem Partners, Aggregating Global Capabilities',
        'partners.governmentSupport': 'Government Support',
        'partners.cooperationPartners': 'Cooperation Partners',

        // ==================== Demo / 评估向导 ====================
        'demo.section.title': 'Data Cross-Border Compliance Intelligent Assessment',
        'demo.section.subtitle': 'Complete preliminary risk assessment quickly and receive customized compliance recommendations and service suggestions',

        'demo.progress.step1': 'Company Profile',
        'demo.progress.step2': 'Data & Scenario',
        'demo.progress.step3': 'Cross-Border Direction',
        'demo.progress.step4': 'Generate Report',

        'demo.step1.title': 'Company Profile',
        'demo.step1.desc': 'Help us quickly understand your business background to generate more accurate assessment results',
        'demo.step1.companyName': 'Company Name',
        'demo.step1.industry': 'Industry',
        'demo.step1.scale': 'Company Size',
        'demo.step1.scale.small': 'Small (&lt;100 people)',
        'demo.step1.scale.medium': 'Medium (100-1000 people)',
        'demo.step1.scale.large': 'Large (&gt;1000 people)',
        'demo.step1.industry.ai': 'Artificial Intelligence / Technology',
        'demo.step1.industry.finance': 'Financial Services',
        'demo.step1.industry.manufacturing': 'Manufacturing',
        'demo.step1.industry.retail': 'Retail and E-commerce',
        'demo.step1.industry.healthcare': 'Healthcare',
        'demo.step1.industry.other': 'Other Industries',

        'demo.step2.title': 'Data & Business Scenario',
        'demo.step2.desc': 'Please accurately select the data types you plan to transfer across borders and the main application scenarios',
        'demo.step2.upload': 'Data Upload',
        'demo.step2.dataType': 'Data Type (Multiple selection allowed)',
        'demo.step2.dataType.pii': 'Personal Identifiable Information (PII)',
        'demo.step2.dataType.business': 'Business Secrets / Financial Data',
        'demo.step2.dataType.ai': 'AI Training / Inference Dataset',
        'demo.step2.dataType.model': 'Model Parameters / Weights',
        'demo.step2.dataType.transaction': 'Transaction Records / User Behavior',
        'demo.step2.dataVolume': 'Estimated Data Volume',
        'demo.step2.businessScenario': 'Main Business Scenario',
        'demo.step2.scenario.crossBorder': 'Cross-border Business Operations',
        'demo.step2.scenario.aiInference': 'AI Model Deployment and Inference',
        'demo.step2.scenario.supplyChain': 'Supply Chain Data Collaboration',
        'demo.step2.scenario.remoteWork': 'Remote Collaboration and Office Work',
        'demo.step2.scenario.customerAnalysis': 'Customer Data Analysis and Marketing',
        'demo.step2.scenario.other': 'Other Scenarios',

        // ==================== Upload Modal ====================
        'uploadModal.title': 'Data Upload Notice',
        'uploadModal.desc': 'Please upload a data sample. After analysis by the compliance agent, the data will be permanently deleted from the platform.',
        'uploadModal.dropHint': 'Click to select or drag and drop data sample files here (.csv, .json, .xlsx)',
        'uploadModal.ready': 'Ready',
        'uploadModal.uploaded': 'Data uploaded successfully',
        'common.cancel': 'Cancel',
        'common.confirm': 'Confirm',

        'demo.step3.title': 'Cross-Border Data Flow Direction',
        'demo.step3.desc': 'Select the main data flow direction and compliance sensitivity',
        'demo.step3.destination': 'Main Flow Direction (Multiple selection allowed)',
        'demo.step3.dest.cn': 'Mainland China',
        'demo.step3.dest.macao': 'Macao SAR, China',
        'demo.step3.dest.sg': 'Singapore',
        'demo.step3.dest.id': 'Indonesia',
        'demo.step3.dest.vn': 'Vietnam',
        'demo.step3.dest.us': 'United States',
        'demo.step3.dest.eu': 'EU Member States',
        'demo.step3.dest.jp': 'Japan / Korea',

        // 敏感數據與脫敏
        'demo.step3.sensitive.label': 'Is sensitive/restricted data involved?',
        'demo.step3.sensitive.yes': 'Yes (Medical, Biometric, Financial Core Data, etc.)',
        'demo.step3.sensitive.no': 'No',
        'demo.step3.anonymized.label': 'Has the data been anonymized or de-identified?',
        'demo.step3.anonymized.yes': 'Yes',
        'demo.step3.anonymized.no': 'No',

        // Step 3 -> Step 4 加载动画
        'demo.loading.initial': 'Initializing intelligent compliance analysis engine...',
        'demo.loading.aiThinking': 'The agent is conducting a cross-border compliance risk assessment...',
        'demo.loading.step1': 'The agent is deeply analyzing data samples and business scenarios...',
        'demo.loading.step2': 'The agent is cross-matching data export regulations across multiple regions (Macau / Southeast Asia / EU)...',
        'demo.loading.step3': 'The agent is evaluating PII sensitivity and data scale risk weights...',
        'demo.loading.step4': 'The agent is comparing the "Guangdong-Hong Kong-Macao Greater Bay Area Standard Contract" with the latest compliance templates...',
        'demo.loading.step5': 'The agent is generating personalized compliance paths and recommended service combinations...',
        'demo.loading.step6': 'The agent is finalizing risk rating and report generation...',

        // en
        'demo.report.title': 'Intelligent Compliance Assessment Report',
        'demo.report.reportNumber': 'Report Number',
        'demo.report.generateTime': 'Generate Time',
        'demo.report.riskLevel': 'Your Compliance Risk Level',
        'demo.report.mediumRisk': 'Medium Risk (Medium)',
        'demo.report.needFiling': 'Filing Required',
        'demo.report.riskDesc': 'We have detected that your outbound data contains personally identifiable information (PII) and is in the range of 10-500GB. According to relevant laws and regulations, this scenario does not fall within the scope of mandatory national security assessment, but it is necessary to complete the signing of a standard contract before the data leaves the country and file it with the Internet information department.',
        'demo.report.suggestionPath': 'Recommended Compliance Path',
        'demo.report.gbaContract': 'Greater Bay Area Standard Contract',
        'demo.report.followUpSuggestions': 'Follow-up Compliance Optimization Suggestions',
        'demo.report.dataDeidentify': 'Data De-identification',
        'demo.report.dataDeidentifyDesc': 'Suggesting that PII (e.g., ID numbers, phone numbers) be de-identified or encrypted before the data is removed from the country will reduce compliance risk to a minimum.',
        'demo.report.localCompute': 'Local Computing Power',
        'demo.report.localComputeDesc': 'For AI inference scenarios, you may consider renting the "Hengqin/Macau High Availability Computing Center" provided by the Center for data pre-processing.',
        'demo.report.contactExpert': 'Contact Expert for Filing Assistance',
        'demo.report.downloadReport': 'Download Assessment Report',
        'demo.report.applyExpert': 'Apply for Expert In-depth Assessment (Free)',

        'demo.wizard.prev': 'Previous',
        'demo.wizard.next': 'Next',
        'demo.wizard.note': 'This assessment is a demo simulation. Actual services are subject to formal assessment. Results will be used to match optimal service resources.',

        // ==================== 平台动态 ====================
        'dynamics.section.title': 'Platform Updates',
        'dynamics.section.subtitle': 'Focusing on the latest information and industry insights on cross-border data, AI computing power, policies and standards, and enterprises going overseas.',
        'dynamics.search.placeholder': 'Search by title or keyword...',
        'dynamics.loadMore': 'Load More Updates',
        'dynamics.collapse': 'Collapse Updates',

        // 平台动态相关翻译-en
        'dynamics.readMore': 'Read More',
        'dynamics.noResult': 'No matching updates found. Please try other keywords.',
        'dynamics.milestone': 'Key Milestone',
        'dynamics.milestoneDesc': 'Guangxi Party Secretary visits Macao in October<br>Center portal officially launched',
        'dynamics.relatedServices': 'Related Services',
        'dynamics.applyService': 'Apply for Related Services',
        'common.close': 'Close',
        // ==================== 相关服务标签 ====================
        'service.dataCrossBorder': 'Data Cross-Border Compliance',
        'service.computingScheduling': 'Computing Power Scheduling',
        'service.enterpriseGoingGlobal': 'Enterprise Going Global Support',
        'service.standardsPolicy': 'Standards & Policy',

        // ==================== Lead Modal ====================
        'leadModal.title': 'Apply for Service / Book Dedicated Advisor',
        'leadModal.subtitle': 'After submission, a dedicated advisor will contact you within 24 hours',
        'leadModal.serviceModules': 'Service Modules Applied For',
        'leadModal.description': 'Brief Requirement Description',
        'leadModal.descriptionPlaceholder': 'Example: We plan to migrate AI training data to a Southeast Asia node and need a complete compliance solution and computing power quotation...',
        'leadModal.contactPerson': 'Contact Person',
        'leadModal.phone': 'Phone / WeChat',
        'leadModal.privacy': 'We strictly protect your information',
        'leadModal.submit': 'Submit Application',

        // ==================== Footer ====================
        'footer.logo': '',
        'footer.description': `<span class="block">With Macao as the hub, we aggregate domestic and international data and computing resources,</span><span class="block">providing Chinese enterprises with one-stop cross-border compliance and global expansion services.</span>`,
        'footer.copyright': '© 2026 International Cooperation Hub on Cross-Border Data & AI<br>All Rights Reserved',
        'footer.contact': 'Contact Information',
        'footer.contact.location': 'Macao SAR, China',
        'footer.quickLinks': 'Quick Links',
        'footer.milestone': 'Milestones',
        'footer.complianceAssessment': 'Compliance Self-Assessment',
        'footer.terms': 'Terms of Service',
        'footer.privacy': 'Privacy Policy',
        'footer.whitepaper': 'Cross-Border Data White Paper',
        'footer.milestoneText': 'October 2026<br>Portal Demo + Capability Showcase',

        // ==================== Chatbox ====================
        'chatbox.title': 'AI Advisor',
        'chatbox.status': 'Online · Real-time',
        'chatbox.welcome': 'Hello! I am the AI Advisor of the Macao Cross-Border Data & AI Collaboration Hub. How can I help you?',
        'chatbox.placeholder': 'Type your question...',
    }
};

// ==================== 核心函数 ====================

/**
 * 获取翻译文本
 * @param {string} key - 翻译键
 * @returns {string}
 */
function t(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    // 回退到简体中文
    if (translations['zh-CN'] && translations['zh-CN'][key]) {
        return translations['zh-CN'][key];
    }
    return key; // 如果没有翻译，返回 key 本身
}

/**
 * 应用语言到页面
 * @param {string} lang - 语言代码 ('zh-CN', 'zh-TW', 'en')
 */
function applyLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not found, fallback to zh-CN`);
        lang = 'zh-CN';
    }

    currentLang = lang;
    localStorage.setItem('lang', lang);

    // 更新 HTML lang 属性
    document.documentElement.lang = lang === 'zh-TW' ? 'zh-Hant' : (lang === 'en' ? 'en' : 'zh-CN');

    // 替换所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translatedText = t(key);

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translatedText;
        } else {
            el.innerHTML = translatedText;
        }
    });

    // 更新语言切换按钮的激活状态
    updateLanguageButtons(lang);

    console.log(`[i18n] Language switched to: ${lang}`);

    // 在 applyLanguage 函数末尾添加
    if (typeof renderFilterButtons === 'function') {
        renderFilterButtons();
    }
    if (typeof renderFeaturedNews === 'function') {
        renderFeaturedNews();
    }
    if (typeof renderDynamicsGrid === 'function') {
        renderDynamicsGrid();
    }
}

/**
 * 更新语言按钮的激活状态
 */
function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('bg-white', 'shadow-sm', 'text-teal-700');
            btn.classList.remove('text-slate-500');
        } else {
            btn.classList.remove('bg-white', 'shadow-sm', 'text-teal-700');
            btn.classList.add('text-slate-500');
        }
    });
}

/**
 * 切换语言（供 HTML 调用）
 */
function switchLanguage(lang) {
    applyLanguage(lang);
}

// ==================== 页面加载时自动应用语言 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 如果 localStorage 没有语言记录，则默认使用简体中文
    if (!localStorage.getItem('lang')) {
        currentLang = 'zh-CN';
        localStorage.setItem('lang', 'zh-CN');
    } else {
        currentLang = localStorage.getItem('lang');
    }

    // 应用当前语言
    applyLanguage(currentLang);
});

// 导出到全局，方便其他地方调用
window.t = t;
window.switchLanguage = switchLanguage;
window.applyLanguage = applyLanguage;