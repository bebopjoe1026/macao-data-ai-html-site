// ==================== 初始化与导航 ====================
// Tailwind script configuration
function initializeTailwind() {
    document.documentElement.style.setProperty('--accent', '#14B8A6');

    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    'sans': ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif']
                }
            }
        }
    };
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-scrolled', 'bg-white/95', 'backdrop-blur-lg');
        } else {
            navbar.classList.remove('nav-scrolled', 'bg-white/95', 'backdrop-blur-lg');
        }
    });
}

// Mobile menu (simple)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = `fixed inset-0 bg-black/70 z-[100] md:hidden`;
    mobileMenu.innerHTML = `
                <div class="bg-white w-4/5 max-w-xs h-full p-6">
                    <div class="flex justify-between items-center mb-8">
                        <div class="font-bold text-xl">澳门数据跨境与人工智能合作服务中心</div>
                        <button class="text-3xl text-slate-400" onclick="this.closest('.fixed').remove()">×</button>
                    </div>
                    <div class="flex flex-col text-lg gap-y-2 font-medium">
                        <a href="#home" class="py-3 px-1 border-b" onclick="document.getElementById('home').scrollIntoView({behavior:'smooth'}); this.closest('.fixed').remove()">首页</a>
                        <a href="#capabilities" class="py-3 px-1 border-b" onclick="document.getElementById('capabilities').scrollIntoView({behavior:'smooth'}); this.closest('.fixed').remove()">核心能力</a>
                        <a href="#partners" class="py-3 px-1 border-b" onclick="document.getElementById('partners').scrollIntoView({behavior:'smooth'}); this.closest('.fixed').remove()">生态伙伴</a>
                        <a href="#demo" class="py-3 px-1 border-b" onclick="document.getElementById('demo').scrollIntoView({behavior:'smooth'}); this.closest('.fixed').remove()">服务体验</a>
                        <a href="#dynamics" class="py-3 px-1 border-b" onclick="document.getElementById('dynamics').scrollIntoView({behavior:'smooth'}); this.closest('.fixed').remove()">平台动态</a>
                    </div>
                    
                    <div class="mt-auto pt-8">
                        <button onclick="showContactModal(); this.closest('.fixed').remove()" 
                                class="w-full py-3 bg-teal-600 text-white font-semibold rounded-3xl">联系专属顾问</button>
                    </div>
                </div>
            `;
    document.body.appendChild(mobileMenu);
}


// ==================== Modal 相关 ====================
function showCapabilityModal(index) {
    const modal = document.getElementById('capability-modal');
    const titleEl = document.getElementById('modal-capability-title');
    const bodyEl = document.getElementById('modal-capability-body');
    const data = capabilityData[index];

    titleEl.innerHTML = `<i class="fa-solid ${data.icon} text-${data.color}-500 mr-3"></i>${data.title}`;

    bodyEl.innerHTML = `
                <div class="prose prose-sm max-w-none">
                    <p class="text-base text-slate-700">${data.desc}</p>
                    
                    <div class="my-5 p-4 bg-slate-50 border-l-4 border-${data.color}-500 rounded-r-2xl">
                        <div class="font-semibold text-sm mb-1 text-slate-600">核心客户价值</div>
                        <div class="text-slate-700">${data.value}</div>
                    </div>
                    
                    <div class="mb-5">
                        <div class="font-semibold text-sm mb-2">服务亮点</div>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-slate-600">
                            ${data.highlights.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="text-xs bg-white border px-3 py-2 rounded-2xl text-slate-500">
                        <strong class="text-slate-600">相关支持：</strong> ${data.internal}
                    </div>
                </div>
            `;

    // Show modal
    modal.style.display = 'flex';

    // Special case for first capability - change experience button text
    const expBtn = document.getElementById('modal-experience-btn');
    if (index === 0) {
        expBtn.innerHTML = '立即启动免费评估';
        expBtn.onclick = () => {
            hideCapabilityModal();
            setTimeout(() => scrollToDemoAndStartWizard(), 300);
        };
    } else {
        expBtn.innerHTML = '立即体验此能力';
        expBtn.onclick = () => {
            hideCapabilityModal();
            setTimeout(() => {
                if (index === 1) showMiniDemo(1);
                else if (index === 2) showMiniDemo(2);
                else if (index === 3) showMiniDemo(3);
                else if (index === 4) showMiniDemo(4);
            }, 350);
        };
    }
}

function hideCapabilityModal() {
    document.getElementById('capability-modal').style.display = 'none';
}

// Mini Demos
function showMiniDemo(type) {
    const modal = document.createElement('div');
    modal.className = `fixed inset-0 bg-black/60 z-[65] flex items-center justify-center p-4`;

    let content = '';

    if (type === 1) { // 算力调度
        content = `
                    <div class="bg-white w-full max-w-xl rounded-3xl overflow-hidden modal">
                        <div class="px-7 py-5 border-b flex justify-between items-center bg-sky-50">
                            <div class="font-bold text-xl flex items-center gap-x-2"><i class="fa-solid fa-microchip text-sky-600"></i> 算力资源智能匹配器</div>
                            <button class="text-2xl text-slate-400 hover:text-slate-600" onclick="this.closest('.fixed').remove()">×</button>
                        </div>
                        <div class="p-7 space-y-5 text-sm">
                            <div>
                                <label class="font-medium text-xs text-slate-600">Workload 类型</label>
                                <select id="workload-type" class="mt-1 w-full border border-slate-300 px-4 py-3 rounded-2xl">
                                    <option>LLM 模型训练</option>
                                    <option>AI 推理服务</option>
                                    <option>数据处理与ETL</option>
                                    <option>高性能计算 (HPC)</option>
                                </select>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="font-medium text-xs text-slate-600">区域偏好</label>
                                    <select id="region-pref" class="mt-1 w-full border border-slate-300 px-4 py-3 rounded-2xl">
                                        <option>境内优先（广西/横琴）</option>
                                        <option>东南亚优先（印尼/新加坡）</option>
                                        <option>混合调度（成本优化）</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="font-medium text-xs text-slate-600">预算范围（人民币/月）</label>
                                    <input id="budget" type="text" value="8万 - 25万" class="mt-1 w-full border border-slate-300 px-4 py-3 rounded-2xl">
                                </div>
                            </div>
                            
                            <div>
                                <label class="font-medium text-xs text-slate-600">最大可接受时延</label>
                                <div class="flex items-center gap-x-3 mt-2 text-xs">
                                    <div class="flex-1"><input type="range" min="10" max="200" value="50" class="w-full accent-sky-600"> <div class="flex justify-between text-[10px] text-slate-500"><div>10ms</div><div>200ms</div></div></div>
                                    <div class="font-mono w-12 text-right text-sky-600 font-semibold">50ms</div>
                                </div>
                            </div>
                            
                            <div id="compute-result" class="hidden mt-4 p-4 bg-sky-50 border border-sky-100 rounded-2xl text-xs">
                                <!-- Populated by JS -->
                            </div>
                        </div>
                        
                        <div class="px-7 py-5 border-t bg-slate-50 flex justify-end gap-x-3">
                            <button onclick="this.closest('.fixed').remove()" class="px-5 py-2 text-sm">关闭</button>
                            <button onclick="runComputeMatch(this)" class="px-6 py-2 bg-sky-600 text-white text-sm font-semibold rounded-2xl">开始匹配推荐资源</button>
                        </div>
                    </div>
                `;
    } else if (type === 2) { // 出海
        content = `
                    <div class="bg-white w-full max-w-xl rounded-3xl overflow-hidden modal">
                        <div class="px-7 py-5 border-b flex justify-between items-center bg-violet-50">
                            <div class="font-bold text-xl flex items-center gap-x-2"><i class="fa-solid fa-globe text-violet-600"></i> 企业出海数据规划器</div>
                            <button class="text-2xl text-slate-400 hover:text-slate-600" onclick="this.closest('.fixed').remove()">×</button>
                        </div>
                        <div class="p-7 space-y-5 text-sm">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="font-medium text-xs text-slate-600">目标国家/地区</label>
                                    <select id="target-country" class="mt-1 w-full border border-slate-300 px-4 py-3 rounded-2xl">
                                        <option>新加坡</option>
                                        <option>印尼</option>
                                        <option>越南</option>
                                        <option>马来西亚</option>
                                        <option>泰国</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="font-medium text-xs text-slate-600">行业类型</label>
                                    <select id="target-industry" class="mt-1 w-full border border-slate-300 px-4 py-3 rounded-2xl">
                                        <option>人工智能 / 大模型</option>
                                        <option>电商与零售</option>
                                        <option>金融科技</option>
                                        <option>制造业供应链</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div id="outbound-result" class="hidden p-4 bg-violet-50 border border-violet-100 rounded-2xl text-xs"></div>
                        </div>
                        
                        <div class="px-7 py-5 border-t bg-slate-50 flex justify-end gap-x-3">
                            <button onclick="this.closest('.fixed').remove()" class="px-5 py-2 text-sm">关闭</button>
                            <button onclick="runOutboundPlan(this)" class="px-6 py-2 bg-violet-600 text-white text-sm font-semibold rounded-2xl">生成出海数据方案</button>
                        </div>
                    </div>
                `;
    } else if (type === 3) { // 基础设施
        content = `
                    <div class="bg-white w-full max-w-2xl rounded-3xl overflow-hidden modal">
                        <div class="px-7 py-5 border-b flex justify-between items-center bg-amber-50">
                            <div class="font-bold text-xl flex items-center gap-x-2"><i class="fa-solid fa-network-wired text-amber-600"></i> 基础设施资源地图</div>
                            <button class="text-2xl text-slate-400 hover:text-slate-600" onclick="this.closest('.fixed').remove()">×</button>
                        </div>
                        <div class="p-7 max-h-[65vh] overflow-y-auto pr-2">
                            <div class="text-xs text-slate-500 mb-3">澳门作为枢纽连接多区域资源</div>

                            <!-- 基础设施资源地图图片 -->
                            <img src="./images/infrastructure_resource_map.png" 
                                class="w-full rounded-2xl mb-5 shadow-sm border border-slate-200" 
                                alt="基础设施资源地图">

                            <div class="border border-slate-200 rounded-3xl p-6 bg-slate-50 text-center">
                                <div class="mx-auto w-fit">
                                    <div class="flex justify-center items-center gap-x-8 text-xs">
                                        <div class="text-center">
                                            <div class="font-bold text-emerald-600">澳门 / 横琴</div>
                                            <div class="text-[10px]">枢纽节点 • CTM专线</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="font-bold text-sky-600">广西数据集团</div>
                                            <div class="text-[10px]">算力枢纽</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="font-bold text-violet-600">深圳数据交易所</div>
                                        </div>
                                    </div>
                                    
                                    <div class="my-4 text-xs text-teal-600 font-medium">━━━━━━━━━━ 低时延专线网络 ━━━━━━━━━━</div>
                                    
                                    <div class="flex justify-center items-center gap-x-6 text-xs">
                                        <div class="text-center">
                                            <div class="font-bold">新加坡</div>
                                            <div class="text-emerald-600 text-[10px]">东南亚算力节点</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="font-bold">印尼</div>
                                            <div class="text-emerald-600 text-[10px]">低成本算力池</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="font-bold">香港</div>
                                            <div class="text-emerald-600 text-[10px]">国际金融枢纽</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mt-5 text-xs px-4 py-3 bg-white border rounded-2xl">
                                <strong>资源申请模拟：</strong> 当前可用算力池 <span class="font-mono text-emerald-600">1420 TFLOPS</span> • 
                                平均调度成功率 <span class="font-mono text-emerald-600">98.7%</span>
                            </div>
                        </div>
                        <div class="px-7 py-4 border-t bg-slate-50 text-right">
                            <button onclick="this.closest('.fixed').remove()" class="px-6 py-2 text-sm font-medium bg-amber-600 text-white rounded-2xl">申请资源配额（模拟）</button>
                        </div>
                    </div>
                `;
    } else if (type === 4) { // 政策问答
        content = `
                    <div class="bg-white w-full max-w-lg rounded-3xl overflow-hidden modal">
                        <div class="px-7 py-5 border-b flex justify-between items-center bg-emerald-50">
                            <div class="font-bold text-xl flex items-center gap-x-2"><i class="fa-solid fa-comments text-emerald-600"></i> 政策智能问答助手</div>
                            <button class="text-2xl text-slate-400 hover:text-slate-600" onclick="this.closest('.fixed').remove()">×</button>
                        </div>
                        <div class="p-7">
                            <div class="text-xs text-slate-500 mb-3">输入您的业务场景，获取相关政策解读与协调路径</div>
                            
                            <input id="policy-query" type="text" value="我们计划将东南亚用户数据存储在印尼节点，需要哪些合规准备？" 
                                   class="w-full border border-slate-300 px-4 py-3 text-sm rounded-2xl">
                            
                            <div id="policy-answer" class="hidden mt-4 p-4 bg-emerald-50 border border-emerald-100 text-xs rounded-2xl leading-relaxed"></div>
                        </div>
                        
                        <div class="px-7 py-5 border-t bg-slate-50 flex justify-end gap-x-3">
                            <button onclick="this.closest('.fixed').remove()" class="px-5 py-2 text-sm">关闭</button>
                            <button onclick="runPolicyQuery(this)" class="px-6 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-2xl">获取政策解读</button>
                        </div>
                    </div>
                `;
    }

    modal.innerHTML = content;

    // === 新增：点击外部遮罩关闭 Modal ===
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };

    document.body.appendChild(modal);
}

// Lead form
function showLeadModal(services = []) {
    const modal = document.getElementById('lead-modal');
    const tagsContainer = document.getElementById('lead-services-tags');

    tagsContainer.innerHTML = '';

    const defaultServices = services.length > 0 ? services : ['数据跨境合规', '专家深度评估'];

    defaultServices.forEach(svc => {
        const tag = document.createElement('div');
        tag.className = `px-3 py-1 text-xs bg-teal-100 text-teal-700 rounded-2xl flex items-center gap-x-1`;
        tag.innerHTML = `${svc} <span onclick="event.target.parentElement.remove()" class="cursor-pointer ml-1 text-teal-500">×</span>`;
        tagsContainer.appendChild(tag);
    });

    modal.style.display = 'flex';
}

function hideLeadModal() {
    document.getElementById('lead-modal').style.display = 'none';
}

function submitLeadForm() {
    const modal = document.getElementById('lead-modal');
    const desc = document.getElementById('lead-description').value || '（未填写具体需求）';
    const contact = document.getElementById('lead-contact').value;

    modal.innerHTML = `
                <div class="bg-white w-full max-w-lg rounded-3xl p-8 text-center modal">
                    <div class="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-5">
                        <i class="fa-solid fa-check text-4xl"></i>
                    </div>
                    <div class="font-bold text-2xl tracking-tight">申请已成功提交！</div>
                    <div class="mt-2 text-slate-600">您的服务单号：<span class="font-mono font-semibold text-emerald-600">MAC-20260630-${Math.floor(100000 + Math.random() * 900000)}</span></div>
                    
                    <div class="my-6 text-sm px-8 text-slate-600 leading-relaxed">
                        感谢您对澳门数据跨境与人工智能合作服务中心的信任。<br>
                        专属顾问将在 <span class="font-semibold">24小时内</span> 与您联系，协助推进后续服务。
                    </div>
                    
                    <button onclick="document.getElementById('lead-modal').remove(); showToast('感谢您的申请！', 'success')" 
                            class="px-10 py-3 bg-emerald-600 text-white font-semibold rounded-2xl">返回首页</button>
                </div>
            `;

    // Auto close after some time? Optional.
}

function showContactModal() {
    const modal = document.createElement('div');
    modal.className = `fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4`;
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };

    modal.innerHTML = `
        <div class="bg-white w-full max-w-md rounded-3xl overflow-hidden modal">
            <div class="px-7 py-6">
                <div class="font-bold text-2xl">${t('contactModal.title')}</div>
                <div class="text-sm text-slate-500 mt-1">${t('contactModal.subtitle')}</div>
                
                <div class="mt-6 space-y-4 text-sm">
                    <div>
                        <div class="text-xs font-medium text-slate-600">${t('contactModal.name')}</div>
                        <input type="text" class="mt-1 w-full border px-4 py-3 rounded-2xl text-sm" 
                               placeholder="${t('contactModal.namePlaceholder') || ''}">
                    </div>
                    <div>
                        <div class="text-xs font-medium text-slate-600">${t('contactModal.company')}</div>
                        <input type="text" class="mt-1 w-full border px-4 py-3 rounded-2xl text-sm"
                               placeholder="${t('contactModal.companyPlaceholder') || ''}">
                    </div>
                    <div>
                        <div class="text-xs font-medium text-slate-600">${t('contactModal.contact')}</div>
                        <input type="text" class="mt-1 w-full border px-4 py-3 rounded-2xl text-sm"
                               placeholder="${t('contactModal.contactPlaceholder') || ''}">
                    </div>
                    <div>
                        <div class="text-xs font-medium text-slate-600">${t('contactModal.service')}</div>
                        <textarea class="mt-1 w-full border px-4 py-3 rounded-2xl text-sm h-20"
                                  placeholder="${t('contactModal.servicePlaceholder') || ''}"></textarea>
                    </div>
                </div>
            </div>
            
            <div class="px-7 py-5 bg-slate-50 border-t flex justify-end gap-x-3">
                <button onclick="this.closest('.fixed').remove()" 
                        class="px-6 py-2 text-sm">
                    ${t('common.cancel')}
                </button>
                <button onclick="submitContactForm(this)" 
                        class="px-7 py-2 bg-teal-600 text-white text-sm font-semibold rounded-2xl">
                    ${t('contactModal.submit')}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function submitContactForm(btn) {
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i>提交中...`;
    setTimeout(() => {
        btn.closest('.fixed').remove();
        showToast('咨询请求已提交，顾问将在1小时内联系您', 'success');
    }, 900);
}

// ==================== 工具函数 ====================
// Toast
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');

    let icon = 'fa-check-circle';
    let color = 'bg-emerald-600';

    if (type === 'info') { icon = 'fa-info-circle'; color = 'bg-sky-600'; }
    if (type === 'warning') { icon = 'fa-exclamation-triangle'; color = 'bg-amber-500'; }

    toast.className = `flex items-center gap-x-3 px-5 py-3.5 ${color} text-white text-sm rounded-2xl shadow-xl max-w-xs`;
    toast.innerHTML = `
                <i class="fa-solid ${icon}"></i>
                <span>${message}</span>
            `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'all 0.3s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 200);
    }, 3200);
}

// ==================== 算力/出海/政策模拟功能 ====================
function runComputeMatch(btn) {
    const resultDiv = document.getElementById('compute-result');
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i>匹配中...`;

    setTimeout(() => {
        resultDiv.innerHTML = `
                    <div class="font-semibold mb-2 text-sky-700">推荐资源池（模拟）</div>
                    <div class="space-y-3 text-xs">
                        <div class="flex justify-between items-center bg-white px-3 py-2 rounded-xl border">
                            <div><span class="font-medium">广西-横琴智算节点A</span><br><span class="text-[10px] text-slate-500">时延：18ms | 可用：320 TFLOPS</span></div>
                            <div class="text-right"><span class="font-mono font-semibold">¥14.8万/月</span><br><span class="text-emerald-600 text-xs">推荐</span></div>
                        </div>
                        <div class="flex justify-between items-center bg-white px-3 py-2 rounded-xl border">
                            <div><span class="font-medium">印尼雅加达节点B</span><br><span class="text-[10px] text-slate-500">时延：62ms | 可用：890 TFLOPS</span></div>
                            <div class="text-right"><span class="font-mono font-semibold">¥9.2万/月</span><br><span class="text-emerald-600 text-xs">成本最优</span></div>
                        </div>
                    </div>
                    <div class="text-center mt-3 text-xs text-sky-600 cursor-pointer" onclick="this.closest('.fixed').remove(); showLeadModal()">→ 申请正式资源调度与报价</div>
                `;
        resultDiv.classList.remove('hidden');
        btn.innerHTML = `重新匹配`;
        btn.disabled = false;
    }, 1350);
}

function runOutboundPlan(btn) {
    const resultDiv = document.getElementById('outbound-result');
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i>生成方案...`;

    setTimeout(() => {
        const country = document.getElementById('target-country').value;
        resultDiv.innerHTML = `
                    <div class="font-semibold text-violet-700 mb-1">为${country}出海推荐方案</div>
                    <div class="text-xs leading-relaxed">
                        • 数据流路径：澳门枢纽 → ${country}本地节点（推荐CTM专线）<br>
                        • 合规要点：${country === '新加坡' ? 'PDPA合规 + 数据本地化要求较低' : '需完成本地数据保护 impact assessment'}<br>
                        • 推荐套餐：数据跨境评估 + 本地算力包 + 法律意见（预估 ¥28,000 起）<br>
                        • 成功案例：同行业3家中资企业已通过中心落地
                    </div>
                    <div class="mt-3 text-xs text-violet-600 cursor-pointer" onclick="this.closest('.fixed').remove(); showLeadModal()">→ 申请完整出海支持方案</div>
                `;
        resultDiv.classList.remove('hidden');
        btn.innerHTML = `重新生成`;
        btn.disabled = false;
    }, 1200);
}

function runPolicyQuery(btn) {
    const query = document.getElementById('policy-query').value;
    const answerDiv = document.getElementById('policy-answer');
    btn.disabled = true;

    setTimeout(() => {
        answerDiv.innerHTML = `
                    <strong>政策解读（模拟）：</strong><br>
                    根据《中华人民共和国数据安全法》及《个人信息保护法》，向印尼传输个人数据需完成安全评估或标准合同。<br><br>
                    <strong>推荐路径：</strong><br>
                    1. 通过澳门数据跨境与人工智能合作服务中心进行初步评估<br>
                    2. 申请使用中心标准合同模板 + 印尼本地法律意见<br>
                    3. 协调广西数据局与印尼相关监管机构对接<br><br>
                    <span class="text-emerald-600">建议立即启动「数据跨境合规评估」获取个性化方案。</span>
                `;
        answerDiv.classList.remove('hidden');
        btn.innerHTML = `重新提问`;
        btn.disabled = false;
    }, 900);
}

// ==================== Chatbox ====================
function initChatbox() {
    const toggleBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const closeBtn = document.getElementById('chat-close-btn');
    const messagesContainer = document.getElementById('chat-messages');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send-btn');

    if (!toggleBtn || !chatWindow) return;

    // 打开/关闭聊天窗口
    toggleBtn.onclick = () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            input.focus();
        }
    };

    closeBtn.onclick = () => {
        chatWindow.classList.add('hidden');
    };

    // 发送消息
    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        // 添加用户消息
        addMessage(text, 'user');
        input.value = '';

        // 模拟 AI 回复
        setTimeout(() => {
            const reply = getSimulatedReply(text);
            addMessage(reply, 'bot');
        }, 800);
    }

    sendBtn.onclick = sendMessage;
    input.onkeypress = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    // 添加消息到聊天窗口
    function addMessage(text, type) {
        const div = document.createElement('div');

        if (type === 'user') {
            div.className = 'flex justify-end';
            div.innerHTML = `
                <div class="bg-teal-600 text-white px-3 py-2 rounded-2xl rounded-tr-none max-w-[75%]">
                    ${text}
                </div>
            `;
        } else {
            div.className = 'flex gap-x-2';
            div.innerHTML = `
                <div class="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex-shrink-0 flex items-center justify-center text-xs">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div class="bg-white px-3 py-2 rounded-2xl rounded-tl-none max-w-[75%] shadow-sm">
                    ${text}
                </div>
            `;
        }

        messagesContainer.appendChild(div);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // 简单的模拟回复逻辑
    function getSimulatedReply(userMessage) {
        const msg = userMessage.toLowerCase();

        if (msg.includes('数据出境') || msg.includes('合规')) {
            return '您可以先使用我们的「数据跨境合规智能评估」工具进行初步评估，需要我帮您跳转吗？';
        }
        else if (msg.includes('算力') || msg.includes('gpu')) {
            return '我们目前可提供广西、横琴、印尼等多地算力资源。您需要了解具体报价还是资源匹配服务？';
        }
        else if (msg.includes('出海')) {
            return '我们支持东南亚（新加坡、印尼、越南）的数据出海与本地化服务，需要了解具体方案吗？';
        }
        else {
            return '感谢您的咨询！建议您可以先尝试使用页面上的「数据跨境合规智能评估」功能，或直接联系我们的专属顾问。';
        }
    }

    // 初始欢迎（可选）
    console.log('%c[Chatbox] 聊天组件已初始化', 'color:#14b8a6');
}

// ==================== 主初始化 ====================
function initializeDemo() {
    initializeTailwind();
    initNavbar();
    initChatbox();

    // 启动评估向导
    if (typeof showStep === 'function') {
        showStep(1);
    }
    if (typeof updateProgressBar === 'function') {
        updateProgressBar();
    }

    // 初始化上传拖拽区域（Wizard功能）
    if (typeof initUploadDropZone === 'function') {
        initUploadDropZone();
    }

    // 初始化平台动态页
    if (document.getElementById('dynamics') && typeof initDynamicsPage === 'function') {
        initDynamicsPage();
    }

    console.log('%c[Demo] Macau Data & AI Cooperation Center portal initialized successfully.', 'color:#14b8a6');
}

// 页面加载完成后执行初始化
window.onload = initializeDemo;