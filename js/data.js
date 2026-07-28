// js/data.js
// 所有静态数据集中管理

// Capability Modal Data
const capabilityData = [
    {
        title: "数据跨境",
        icon: "fa-globe",
        color: "teal",
        desc: "提供数据交易、跨境可信数据空间、离岸数据中心、数据跨境合规服务等。依托中信国际电讯全球网络与多地合作伙伴资源。",
        value: "解决数据出境合规难、流程不清痛点，帮助企业快速对接可信数据空间与全球合规通道。",
        highlights: ["数据交易与跨境可信数据空间", "离岸数据中心服务", "数据跨境合规评估与法律意见", "全球多地云托管与安全服务"],
        internal: "深数所、国数集团、中信集团、横琴智算中心、火山引擎、邓白氏、广西数据集团、南一智能科技"
    },
    {
        title: "算力调度",
        icon: "fa-microchip",
        color: "sky",
        desc: "聚合国产与国际算力集群，支持模型智能路由，提供智信模型聚合平台，实现跨境低成本、高性能算力调度。",
        value: "解决算力获取贵、跨区域难痛点，提供灵活、低成本、高性能的算力供给与模型安全隔离。",
        highlights: ["跨境算力调度与智能路由", "国产/国际算力集群聚合", "智信模型聚合平台", "模型及数据安全隔离"],
        internal: "广西数据集团、横琴智算中心、南一智能科技、中信国际电讯"
    },
    {
        title: "企业出海",
        icon: "fa-plane-departure",
        color: "violet",
        desc: "一站式DICT出海服务，结合东南亚本地支撑团队、跨境金融赋能及海外征信认证，助力中资企业全球化布局。",
        value: "解决出海数据链路断、当地法规陌生痛点，加速中资企业东南亚及全球布局。",
        highlights: ["一站式DICT出海服务", "东南亚本地支撑团队", "跨境金融赋能与海外征信认证", "Token出海与应用软件出海支持"],
        internal: "中信国际电讯及其东南亚子公司、广西数据集团、澳门电讯、中信银行等"
    },
    {
        title: "基础设施",
        icon: "fa-network-wired",
        color: "amber",
        desc: "构建低时延网络 + 横琴/国内/东南亚智算中心 + 桂澳跨境数据专线，为上层服务提供高可用底座。",
        value: "为数据跨境、算力调度、企业出海提供稳定、安全、低时延的基础设施与网络支撑。",
        highlights: ["低时延网络与桂澳跨境数据专线", "横琴/国内/东南亚智算中心", "金融数据互通能力", "高可用云资源与专线服务"],
        internal: "澳门电讯、广西数据集团、南一智能科技、国数集团、中信集团"
    },
    {
        title: "标准及政策",
        icon: "fa-gavel",
        color: "emerald",
        desc: "对接国家及国际标准，释放两岸三地政策红利，推动产学研生态合作与合规路径优化。",
        value: "帮助企业快速对接国家/国际标准，享受两岸三地政策红利，降低合规不确定性。",
        highlights: ["国家及国际标准对接", "两岸三地政策红利释放", "产学研生态合作支持", "合规路径优化与政策解读"],
        internal: "国数集团、中信集团、深圳数据要素研究院、中信国际电讯"
    }
];

// 平台动态数据（Demo用，8条示例，基于会议内容）
let dynamicsData = [
    {
        id: 1,
        date: "2026-06-20",
        category: "活动预告",
        categoryColor: "violet",
        excerpt: "广西壮族自治区党委书记陈刚将于2026年10月率团访问澳门特别行政区，期间中心门户网站及核心能力展示将作为重要里程碑正式对外发布。",
        content: "根据双方会谈安排，广西壮族自治区党委书记陈刚将于10月访澳，见证澳门数据跨境及人工智能合作服务中心门户的正式上线。服务中心将以此为契机，集中展示数据跨境、算力调度、企业出海、基础设施、标准及政策五大核心能力，并发布首批合作案例与服务产品。",
        featured: true,
        image: "./images/guiao_ai_1.jpg",
        imageCaption: "2026年2月26日，「桂奥人中智能合作」座谈会，人工智能合作备忘录签约仪式",

        // 多语言内容
        title: {
            'zh-CN': '广西壮族自治区党委书记陈刚10月将率团访问澳门，中心门户将正式亮相',
            'zh-TW': '廣西壯族自治區黨委書記陳剛10月將率團訪問澳門，中心門戶將正式亮相',
            'en': 'Guangxi Party Secretary Chen Gang to Lead Delegation to Macao in October; Portal to be officially unveiled'
        },
        excerpt: {
            'zh-CN': '广西壮族自治区党委书记陈刚将于2026年10月率团访问澳门特别行政区，期间中心门户网站及核心能力展示将作为重要里程碑正式对外发布。',
            'zh-TW': '廣西壯族自治區黨委書記陳剛將於2026年10月率團訪問澳門特別行政區，期間中心門戶網站及核心能力展示將作為重要里程碑正式對外發布。',
            'en': 'Guangxi Zhuang Autonomous Region Party Secretary Chen Gang will lead a delegation to visit the Macao SAR in October 2026. The center’s portal and core capability showcase will be officially launched as a major milestone.'
        },
        content: {
            'zh-CN': '根据双方会谈安排，广西壮族自治区党委书记陈刚将于10月访澳，见证澳门数据跨境及人工智能合作服务中心门户的正式上线。服务中心将以此为契机，集中展示数据跨境、算力调度、企业出海、基础设施、标准及政策五大核心能力，并发布首批合作案例与服务产品。',
            'zh-TW': '根據雙方會談安排，廣西壯族自治區黨委書記陳剛將於10月訪澳，見證澳門數據跨境及人工智能合作服務中心門戶的正式上線。服務中心將以此為契機，集中展示數據跨境、算力調度、企業出海、基礎設施、標準及政策五大核心能力，並發布首批合作案例與服務產品。',
            'en': 'According to the arrangements from bilateral talks, Guangxi Zhuang Autonomous Region Party Secretary Chen Gang will visit Macao in October to witness the official launch of the Macao Cross-Border Data & AI Collaboration Hub portal. The center will take this opportunity to showcase its five core capabilities and release its first batch of cooperation cases and service products.'
        }
    },
    {
        id: 2,
        date: "2026-06-28",
        category: "政策法规",
        categoryColor: "emerald",
        featured: false,
        image: "",
        imageCaption: "",
        title: {
            'zh-CN': '邓白氏数据跨境合规方案正式交付，7月起对外服务',
            'zh-TW': '鄧白氏數據跨境合規方案正式交付，7月起對外服務',
            'en': 'Dun & Bradstreet Cross-Border Data Compliance Solution Officially Delivered; Services Available from July'
        },
        excerpt: {
            'zh-CN': '邓白氏为本中心量身定制的数据跨境合规评估与法律意见服务方案已于6月底正式交付，7月1日起面向企业开放初步评估与深度咨询服务。',
            'zh-TW': '鄧白氏為本中心量身定制的數據跨境合規評估與法律意見服務方案已於6月底正式交付，7月1日起面向企業開放初步評估與深度諮詢服務。',
            'en': 'The customized cross-border data compliance assessment and legal opinion service solution tailored by Dun & Bradstreet for the center was officially delivered at the end of June. Starting July 1, preliminary assessments and in-depth consulting services will be available to enterprises.'
        },
        content: {
            'zh-CN': '邓白氏中国团队与中心联合开发的「数据跨境合规智能评估系统」已完成内部验收。该方案结合D&B全球企业数据库与本地法规知识库，可为企业提供快速风险评级、标准合同模板及律师意见对接服务，大幅降低企业出境合规成本与时间。',
            'zh-TW': '鄧白氏中國團隊與中心聯合開發的「數據跨境合規智能評估系統」已完成內部驗收。該方案結合D&B全球企業數據庫與本地法規知識庫，可為企業提供快速風險評級、標準合同模板及律師意見對接服務，大幅降低企業出境合規成本與時間。',
            'en': 'The “Cross-Border Data Compliance Intelligent Assessment System” jointly developed by Dun & Bradstreet China and the center has completed internal acceptance. Combining D&B’s global enterprise database with local regulatory knowledge bases, the solution provides enterprises with rapid risk rating, standard contract templates, and lawyer opinion matching services, significantly reducing compliance costs and time for outbound data transfers.'
        }
    },
    {
        id: 3,
        date: "2026-06-25",
        category: "技术洞察",
        categoryColor: "sky",
        featured: false,
        image: "",
        imageCaption: "",
        title: {
            'zh-CN': '火山引擎数据发现平台与中心聚合服务完成对接测试',
            'zh-TW': '火山引擎數據發現平台與中心聚合服務完成對接測試',
            'en': 'Volcano Engine Data Discovery Platform Successfully Integrated with Center Aggregation Services'
        },
        excerpt: {
            'zh-CN': '火山引擎数据发现与治理平台已成功接入中心服务门户，企业可通过中心一站式调用火山引擎的数据发现、清洗与跨境传输能力。',
            'zh-TW': '火山引擎數據發現與治理平台已成功接入中心服務門戶，企業可通過中心一站式調用火山引擎的數據發現、清洗與跨境傳輸能力。',
            'en': 'Volcano Engine’s data discovery and governance platform has been successfully connected to the center’s service portal. Enterprises can now call Volcano Engine’s data discovery, cleaning, and cross-border transfer capabilities through a single interface.'
        },
        content: {
            'zh-CN': '经过多轮联调测试，火山引擎数据发现平台现已深度集成至中心聚合服务。企业用户在完成初步合规评估后，可直接申请调用火山引擎的数据发现、敏感数据识别、跨境传输等能力，实现从评估到落地的闭环体验。',
            'zh-TW': '經過多輪聯調測試，火山引擎數據發現平台現已深度集成至中心聚合服務。企業用戶在完成初步合規評估後，可直接申請調用火山引擎的數據發現、敏感數據識別、跨境傳輸等能力，實現從評估到落地的閉環體驗。',
            'en': 'After multiple rounds of joint debugging, the Volcano Engine data discovery platform has been deeply integrated into the center’s aggregation services. After completing the preliminary compliance assessment, enterprise users can directly apply for Volcano Engine capabilities such as data discovery, sensitive data identification, and cross-border transmission, achieving a closed-loop experience from assessment to implementation.'
        }
    },
    {
        id: 4,
        date: "2026-07-02",
        category: "合作动态",
        categoryColor: "teal",
        featured: false,
        image: "",
        imageCaption: "",
        title: {
            'zh-CN': '国家数据集团正式挂牌，中信集团战略合作协议同步签署',
            'zh-TW': '國家數據集團正式掛牌，中信集團戰略合作協議同步簽署',
            'en': 'National Data Group Officially Established; Strategic Cooperation Agreement with CITIC Group Signed Simultaneously'
        },
        excerpt: {
            'zh-CN': '国家数据集团于6月底完成挂牌仪式，中信集团作为重要战略合作伙伴同步签署全面合作协议，标志着中心在数据要素流通与跨境服务领域迈出关键一步。',
            'zh-TW': '國家數據集團於6月底完成掛牌儀式，中信集團作為重要戰略合作夥伴同步簽署全面合作協議，標誌著中心在數據要素流通與跨境服務領域邁出關鍵一步。',
            'en': 'The National Data Group completed its establishment ceremony at the end of June. CITIC Group, as a key strategic partner, signed a comprehensive cooperation agreement at the same time, marking a critical step for the center in data element circulation and cross-border services.'
        },
        content: {
            'zh-CN': '国家数据集团正式挂牌成立，这是落实国家数据战略的重要举措。中信集团作为战略合作伙伴，将在数据跨境基础设施、算力调度、国际业务拓展等方面与中心深度协同。未来双方将在澳门、横琴、东南亚等多地开展联合项目，为中资企业提供更高效的数据出境与合规服务。',
            'zh-TW': '國家數據集團正式掛牌成立，這是落實國家數據戰略的重要舉措。中信集團作為戰略合作夥伴，將在數據跨境基礎設施、算力調度、國際業務拓展等方面與中心深度協同。未來雙方將在澳門、橫琴、東南亞等多地開展聯合項目，為中資企業提供更高效的數據出境與合規服務。',
            'en': 'The formal establishment of the National Data Group is an important measure to implement the national data strategy. As a strategic partner, CITIC Group will deeply collaborate with the center in cross-border data infrastructure, computing power scheduling, and international business expansion. In the future, both parties will carry out joint projects in Macao, Hengqin, Southeast Asia and other regions to provide more efficient outbound data and compliance services for Chinese enterprises.'
        }
    },
    {
        id: 5,
        date: "2026-06-18",
        category: "合作动态",
        categoryColor: "teal",
        featured: false,
        image: "",
        imageCaption: "",
        title: {
            'zh-CN': '南一智能科技与印尼吉利计算中心合作项目启动，东南亚算力节点落地',
            'zh-TW': '南一智能科技與印尼吉利計算中心合作項目啟動，東南亞算力節點落地',
            'en': 'Nanyi Intelligent Technology and Indonesia Geely Computing Center Cooperation Project Launched; Southeast Asia Computing Node Established'
        },
        excerpt: {
            'zh-CN': '南一智能科技与印尼当地合作伙伴签署算力中心运营协议，中心将作为运营主体之一，正式接入东南亚低成本、高性能算力资源池。',
            'zh-TW': '南一智能科技與印尼當地合作夥伴簽署算力中心運營協議，中心將作為運營主體之一，正式接入東南亞低成本、高性能算力資源池。',
            'en': 'Nanyi Intelligent Technology signed an operation agreement for a computing center with local Indonesian partners. The center will serve as one of the operating entities and formally access the low-cost, high-performance computing resource pool in Southeast Asia.'
        },
        content: {
            'zh-CN': '南一智能科技与印尼吉利集团旗下计算中心达成战略合作，中心将协助运营印尼本地算力节点。该节点初期提供超过800 TFLOPS算力，主要服务于AI训练、推理及数据处理场景，有效降低中资企业出海算力成本。',
            'zh-TW': '南一智能科技與印尼吉利集團旗下計算中心達成戰略合作，中心將協助運營印尼本地算力節點。該節點初期提供超過800 TFLOPS算力，主要服務於AI訓練、推理及數據處理場景，有效降低中資企業出海算力成本。',
            'en': 'Nanyi Intelligent Technology has reached a strategic cooperation with the computing center under Indonesia’s Geely Group. The center will assist in operating the local Indonesian computing node. The node will initially provide more than 800 TFLOPS of computing power, mainly serving AI training, inference, and data processing scenarios, effectively reducing the computing costs for Chinese enterprises going global.'
        }
    },
    {
        id: 6,
        date: "2026-06-15",
        category: "技术洞察",
        categoryColor: "sky",
        featured: false,
        image: "",
        imageCaption: "",
        title: {
            'zh-CN': '中心可信数据空间架构设计完成评审，即将进入试点阶段',
            'zh-TW': '中心可信數據空間架構設計完成評審，即將進入試點階段',
            'en': 'Center’s Trusted Data Space Architecture Design Passes Review and Enters Pilot Phase'
        },
        excerpt: {
            'zh-CN': '中心可信数据空间（Trusted Data Space）整体架构已通过多方专家评审，计划于2026年Q3启动澳门-横琴-广西三地试点，探索跨境数据安全有序流动新模式。',
            'zh-TW': '中心可信數據空間（Trusted Data Space）整體架構已通過多方專家評審，計劃於2026年Q3啟動澳門-橫琴-廣西三地試點，探索跨境數據安全有序流動新模式。',
            'en': 'The overall architecture of the center’s Trusted Data Space has passed multi-party expert review. A pilot project in Macao-Hengqin-Guangxi is planned to start in Q3 2026 to explore new models for secure and orderly cross-border data flow.'
        },
        content: {
            'zh-CN': '可信数据空间是中心核心技术底座之一。架构设计融合了国家数据要素标准、国际可信数据空间框架及澳门本地监管要求，支持数据主权可控、用途可追溯、价值可计量。首批试点将围绕跨境电商、AI模型训练等场景展开。',
            'zh-TW': '可信數據空間是中心核心技術底座之一。架構設計融合了國家數據要素標準、國際可信數據空間框架及澳門本地監管要求，支持數據主權可控、用途可追溯、價值可計量。首批試點將圍繞跨境電商、AI模型訓練等場景展開。',
            'en': 'The Trusted Data Space is one of the core technical foundations of the center. The architecture design integrates national data element standards, international trusted data space frameworks, and Macao’s local regulatory requirements. It supports controllable data sovereignty, traceable usage, and measurable value. The first batch of pilots will focus on scenarios such as cross-border e-commerce and AI model training.'
        }
    },
    {
        id: 7,
        date: "2026-06-10",
        category: "政策法规",
        categoryColor: "emerald",
        featured: false,
        image: "",
        imageCaption: "",
        title: {
            'zh-CN': '《粤港澳大湾区数据跨境流动标准合同》模板在中心开放试用',
            'zh-TW': '《粵港澳大灣區數據跨境流動標準合同》模板在中心開放試用',
            'en': '“Greater Bay Area Cross-Border Data Flow Standard Contract” Template Now Available for Trial at the Center'
        },
        excerpt: {
            'zh-CN': '中心现已开放《粤港澳大湾区（内地、澳门）个人信息跨境流动标准合同》模板免费试用，并提供在线填写与合规检查辅助工具。',
            'zh-TW': '中心現已開放《粵港澳大灣區（內地、澳門）個人信息跨境流動標準合同》模板免費試用，並提供在線填寫與合規檢查輔助工具。',
            'en': 'The center has now opened the “Greater Bay Area (Mainland China, Macao) Personal Information Cross-Border Flow Standard Contract” template for free trial use, and provides online filling and compliance checking auxiliary tools.'
        },
        content: {
            'zh-CN': '为落实《粤港澳大湾区数据跨境流动规则》，中心联合相关机构推出标准合同模板。企业可通过中心门户在线填写、签署并提交备案，大幅简化粤港澳数据跨境流程。目前已有超过20家企业完成模板试用。',
            'zh-TW': '為落實《粵港澳大灣區數據跨境流動規則》，中心聯合相關機構推出標準合同模板。企業可通過中心門戶在線填寫、簽署並提交備案，大幅簡化粵港澳數據跨境流程。目前已有超過20家企業完成模板試用。',
            'en': 'To implement the “Greater Bay Area Cross-Border Data Flow Rules”, the center has jointly launched a standard contract template with relevant institutions. Enterprises can fill in, sign, and submit for filing online through the center’s portal, greatly simplifying the cross-border data process in the Greater Bay Area. More than 20 enterprises have already completed the template trial.'
        }
    },
    {
        id: 8,
        date: "2026-06-05",
        category: "成功案例",
        categoryColor: "amber",
        featured: false,
        image: "",
        imageCaption: "",
        title: {
            'zh-CN': '首家通过中心完成东南亚数据出境的中资AI企业案例落地',
            'zh-TW': '首家通過中心完成東南亞數據出境的中資AI企業案例落地',
            'en': 'First Chinese AI Enterprise Completes Southeast Asia Data Outbound Through the Center'
        },
        excerpt: {
            'zh-CN': '某头部AI大模型企业借助中心完成印尼用户数据出境全流程合规，成功在当地部署推理服务，标志中心“评估+算力+出海”闭环服务能力正式验证。',
            'zh-TW': '某頭部AI大模型企業借助中心完成印尼用戶數據出境全流程合規，成功在當地部署推理服務，標誌中心「評估+算力+出海」閉環服務能力正式驗證。',
            'en': 'A leading AI large-model enterprise completed the full compliance process for Indonesian user data outbound through the center and successfully deployed inference services locally, marking the formal verification of the center’s closed-loop service capability of “Assessment + Computing Power + Going Global”.'
        },
        content: {
            'zh-CN': '该AI企业原计划将东南亚用户数据直接出境至境外服务器，面临合规与算力双重挑战。通过中心，企业在3周内完成数据分类、风险评估、标准合同签署，并租用中心推荐的印尼本地算力节点，实现数据本地化存储+推理，整体成本降低约35%。',
            'zh-TW': '該AI企業原計劃將東南亞用戶數據直接出境至境外服務器，面臨合規與算力雙重挑戰。通過中心，企業在3週內完成數據分類、風險評估、標準合同簽署，並租用中心推薦的印尼本地算力節點，實現數據本地化存儲+推理，整體成本降低約35%。',
            'en': 'The AI enterprise originally planned to transfer Southeast Asian user data directly to overseas servers, facing dual challenges of compliance and computing power. Through the center, the enterprise completed data classification, risk assessment, and standard contract signing within three weeks, and rented the Indonesia local computing node recommended by the center, achieving localized data storage + inference and reducing overall costs by approximately 35%.'
        }
    }
];