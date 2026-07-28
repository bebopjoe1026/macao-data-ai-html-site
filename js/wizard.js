// js/wizard.js
// 数据跨境合规智能评估向导逻辑

// Wizard State
let currentStep = 1;
let assessmentData = {};
let uploadedFile = null; // 声明上传的文件变量（原来是隐式全局变量）

function updateProgressBar() {
    const progress = document.getElementById('progress-bar');
    const percent = ((currentStep - 1) / 3) * 100;
    progress.style.width = `${percent}%`;

    // Update dots
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById(`step-dot-${i}`);
        if (!dot) continue;

        dot.classList.remove('step-active', 'step-completed', 'bg-teal-600', 'border-teal-600', 'text-white');
        dot.classList.add('bg-white', 'border-slate-300', 'text-slate-400');

        if (i < currentStep) {
            dot.classList.add('step-completed', 'bg-teal-600', 'border-teal-600', 'text-white');
            dot.classList.remove('bg-white', 'border-slate-300', 'text-slate-400');
        } else if (i === currentStep) {
            dot.classList.add('step-active', 'bg-teal-600', 'border-teal-600', 'text-white');
            dot.classList.remove('bg-white', 'border-slate-300', 'text-slate-400');
        }
    }
}

// 啟動 0% 到 100% 的進度條載入動畫
function startReportLoadingAnimation() {
    const reportContent = document.getElementById('report-content');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

    // 進入第四步時，鎖定底部導航，防止干擾動畫
    btnNext.style.display = "none";
    btnPrev.setAttribute('disabled', 'true');

    // 注入進度條 HTML 結構（第三步後的AI智能分析视觉强化）
    reportContent.innerHTML = `
                <div id="loading-zone" class="py-12 flex flex-col items-center justify-center max-w-md mx-auto text-center">
                    <div class="relative w-20 h-20 bg-teal-50 text-teal-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                        <i class="fa-solid fa-brain text-4xl"></i>
                        <div class="absolute inset-0 border-2 border-teal-500 border-t-transparent rounded-3xl animate-spin"></div>
                        <div class="absolute -top-1 -right-1 px-1.5 py-0.5 bg-teal-600 text-white text-[9px] font-bold rounded-full">AI</div>
                    </div>
                    
                    <div class="w-full justify-between flex items-baseline mb-2 px-1">
                        <span id="loading-status" class="text-sm font-medium text-slate-700 transition-all">
                            ${t('demo.loading.initial') || '智能体正在进行跨境合规风险评估...'}
                        </span>
                        <span id="loading-percentage" class="font-mono text-xl font-bold text-teal-600 tracking-tight">0%</span>
                    </div>

                    <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 p-[2px]">
                        <div id="loading-bar-inner" class="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 rounded-full transition-all duration-200" style="width: 0%"></div>
                    </div>
                    
                    <p class="text-xs text-slate-400 mt-4 flex items-center gap-x-1.5">
                        <i class="fa-solid fa-robot text-teal-400"></i>
                        <span>${t('demo.loading.aiThinking') || '智能体正在进行跨境合规风险评估'}</span>
                    </p>
                </div>
            `;

    let progress = 0;
    const loadingBarInner = document.getElementById('loading-bar-inner');
    const loadingPercentage = document.getElementById('loading-percentage');
    const loadingStatus = document.getElementById('loading-status');

    // 動態變更的提示文案（强化AI智能分析描述）
    const statusMessages = [
        { p: 12, m: t('demo.loading.step1') || "智能体正在深度解析数据样本与业务场景..." },
        { p: 28, m: t('demo.loading.step2') || "智能体正在交叉匹配多区域（澳门/东南亚/欧盟）数据出境法规..." },
        { p: 48, m: t('demo.loading.step3') || "智能体正在评估 PII 敏感度与数据规模风险权重..." },
        { p: 68, m: t('demo.loading.step4') || "智能体正在比对《粤港澳大湾区标准合同》与最新合规模板..." },
        { p: 85, m: t('demo.loading.step5') || "智能体正在生成个性化合规路径与推荐服务组合..." },
        { p: 96, m: t('demo.loading.step6') || "智能体正在完成最终风险评级与报告生成..." }
    ];

    // 计时器定时推进进度（调慢速度，增强AI“思考”真实感）
    const interval = setInterval(() => {
        // 每次隨機前進 1% ~ 4%，速度更慢，更像AI深度分析过程
        progress += Math.floor(Math.random() * 4) + 1;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            // 進度抵達 100% 後，觸發平滑淡出並渲染最終結果
            setTimeout(() => {
                // 平滑淡出進度條區域
                const loadingZone = document.getElementById('loading-zone');
                if (loadingZone) {
                    loadingZone.style.transition = "all 0.35s ease";
                    loadingZone.style.opacity = "0";
                    loadingZone.style.transform = "scale(0.96)";
                }

                // 延时 350 毫秒完成淡出后，渲染真实报告
                setTimeout(() => {
                    reportContent.innerHTML = getFinalReportHTML();
                    btnPrev.removeAttribute('disabled'); // 恢復上一步按鈕
                }, 350);

            }, 450);
        }

        // 更新進度條寬度與數字百分比
        if (loadingBarInner) loadingBarInner.style.width = progress + '%';
        if (loadingPercentage) loadingPercentage.innerText = progress + '%';

        // 根據目前百分比更新文案描述（AI智能分析风格）
        const matchedMessage = statusMessages.find(item => progress <= item.p);
        if (matchedMessage && loadingStatus) {
            loadingStatus.innerText = matchedMessage.m;
        }
    }, 160); // 每160毫秒推进一次，整体时长约8-10秒，更像AI深度分析
}

function showStep(step) {
    // Hide all steps
    for (let i = 1; i <= 4; i++) {
        const el = document.getElementById(`step-${i}`);
        if (el) el.classList.add('hidden');
    }

    // Show current
    const currentEl = document.getElementById(`step-${step}`);
    if (currentEl) currentEl.classList.remove('hidden');

    // Update buttons
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnNextText = document.getElementById('btn-next-text');

    btnPrev.disabled = (step === 1);

    // 关键修复：控制“下一步”按钮的可见性
    // 第4步（报告页）隐藏底部导航按钮（报告内部已有操作按钮）
    // 从第4步返回时必须恢复显示，否则按钮会永久消失
    if (btnNext) {
        btnNext.style.display = (step === 4) ? 'none' : 'flex';
    }

    if (step === 4) {
        startReportLoadingAnimation();
    }

    updateProgressBar();
}

function nextStep() {
    if (currentStep < 4) {
        // Collect data before moving
        if (currentStep === 1) collectStep1Data();
        if (currentStep === 2) collectStep2Data();
        if (currentStep === 3) collectStep3Data();

        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function goToStep(step) {
    const loadingZone = document.getElementById('loading-zone');
    if (currentStep === 4 && loadingZone && !document.querySelector('.report-section')) {
        return;
    } else if (step < currentStep || step === currentStep) {
        currentStep = step;
        showStep(currentStep);
    } else {
        // Only allow going forward if previous steps completed (simple validation)
        showToast('请按顺序完成评估步骤', 'info');
    }
}

function collectStep1Data() {
    assessmentData.companyName = document.getElementById('company-name').value || '未提供';
    assessmentData.industry = document.getElementById('industry').value;
    const scaleRadio = document.querySelector('input[name="scale"]:checked');
    assessmentData.scale = scaleRadio ? scaleRadio.value : '中型 (100-1000人)';
}

function collectStep2Data() {
    assessmentData.dataTypes = [];
    if (document.getElementById('data-pii').checked) assessmentData.dataTypes.push('个人身份信息 (PII)');
    if (document.getElementById('data-business').checked) assessmentData.dataTypes.push('商业机密 / 财务数据');
    if (document.getElementById('data-ai').checked) assessmentData.dataTypes.push('AI训练 / 推理数据集');
    if (document.getElementById('data-model').checked) assessmentData.dataTypes.push('模型参数 / 权重');
    if (document.getElementById('data-transaction').checked) assessmentData.dataTypes.push('交易记录 / 用户行为');

    assessmentData.dataVolume = document.getElementById('data-volume').value;
    assessmentData.businessScenario = document.getElementById('business-scenario').value;
}

function collectStep3Data() {
    assessmentData.destinations = [];
    if (document.getElementById('dest-hk').checked) assessmentData.destinations.push('香港特别行政区');
    if (document.getElementById('dest-macau').checked) assessmentData.destinations.push('澳门特别行政区');
    if (document.getElementById('dest-sg').checked) assessmentData.destinations.push('新加坡');
    if (document.getElementById('dest-id').checked) assessmentData.destinations.push('印尼');
    if (document.getElementById('dest-vn').checked) assessmentData.destinations.push('越南');
    if (document.getElementById('dest-us').checked) assessmentData.destinations.push('美国');
    if (document.getElementById('dest-eu').checked) assessmentData.destinations.push('欧盟成员国');
    if (document.getElementById('dest-jp').checked) assessmentData.destinations.push('日本/韩国');

    const sensitive = document.querySelector('input[name="sensitive"]:checked');
    assessmentData.sensitiveData = sensitive ? sensitive.value : 'no';

    const anonymized = document.querySelector('input[name="anonymized"]:checked');
    assessmentData.anonymized = anonymized ? anonymized.value : 'no';
}

function generateAssessmentReport() {
    const container = document.getElementById('report-content');

    // Simple heuristic risk scoring
    let riskScore = 0;
    let riskLevel = '低';
    let riskClass = 'risk-low';
    let riskIcon = 'fa-check-circle';

    const hasPII = assessmentData.dataTypes && assessmentData.dataTypes.some(d => d.includes('PII'));
    const hasSensitive = assessmentData.sensitiveData === 'yes';
    const notAnonymized = assessmentData.anonymized === 'no';
    const toRegulated = assessmentData.destinations && assessmentData.destinations.some(d => ['美国', '欧盟成员国'].includes(d));
    const toFriendly = assessmentData.destinations && assessmentData.destinations.some(d => ['香港特别行政区', '澳门特别行政区', '新加坡', '印尼', '越南'].includes(d));

    if (hasPII && notAnonymized) riskScore += 2;
    if (hasSensitive && notAnonymized) riskScore += 3;
    if (toRegulated && notAnonymized) riskScore += 3;
    if (assessmentData.dataVolume === '>500GB') riskScore += 1;
    if (toFriendly) riskScore = Math.max(0, riskScore += 1);

    if (riskScore >= 5) {
        riskLevel = '高';
        riskClass = 'risk-high';
        riskIcon = 'fa-exclamation-triangle';
    } else if (riskScore >= 2) {
        riskLevel = '中';
        riskClass = 'risk-medium';
        riskIcon = 'fa-exclamation-circle';
    }

    // Generate dynamic recommendations
    let recommendations = [];
    let suggestedServices = [];

    if (riskLevel === '高') {
        recommendations.push('建议优先进行数据脱敏/匿名化处理');
        recommendations.push('推荐申请律师出具正式法律意见书');
        recommendations.push('考虑通过澳门可信数据空间进行中转');
        suggestedServices = ['数据跨境合规', '标准及政策', '算力调度'];
    } else if (riskLevel === '中') {
        recommendations.push('可通过中心标准模板快速完成合规申报');
        recommendations.push('建议结合脱敏方案降低整体风险等级');
        suggestedServices = ['数据跨境合规', '企业出海支持'];
    } else {
        recommendations.push('当前配置风险较低，可直接进入快速通道');
        recommendations.push('推荐使用中心标准合规协议模板');
        suggestedServices = ['数据跨境合规', '算力调度'];
    }

    if (assessmentData.businessScenario && assessmentData.businessScenario.includes('AI')) {
        suggestedServices.push('算力调度');
    }
    if (assessmentData.destinations && assessmentData.destinations.some(d => ['新加坡', '印尼', '越南'].includes(d))) {
        suggestedServices.push('企业出海支持');
    }

    // Remove duplicates
    suggestedServices = [...new Set(suggestedServices)];

    let html = `
                <div class="report-section">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <div class="text-sm text-slate-500">评估完成时间：${new Date().toLocaleString('zh-CN')}</div>
                            <div class="font-bold text-3xl tracking-tighter mt-1">您的合规风险等级</div>
                        </div>
                        <div class="px-8 py-3 rounded-3xl border text-center ${riskClass}">
                            <i class="fa-solid ${riskIcon} text-3xl mb-1 block"></i>
                            <div class="font-black text-4xl tracking-tighter">${riskLevel}</div>
                            <div class="text-xs font-medium tracking-widest -mt-1">RISK LEVEL</div>
                        </div>
                    </div>
                    
                    <div class="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-6">
                        <div class="font-semibold mb-2 flex items-center gap-x-2 text-sm">
                            <i class="fa-solid fa-building text-teal-600"></i> 
                            <span>${assessmentData.companyName} • ${assessmentData.industry}</span>
                        </div>
                        <div class="text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
                            <span>规模：${assessmentData.scale}</span>
                            <span>数据量：${assessmentData.dataVolume}</span>
                            <span>场景：${assessmentData.businessScenario}</span>
                        </div>
                    </div>
                    
                    <div class="mb-5">
                        <div class="font-semibold text-sm mb-3 flex items-center gap-x-2">
                            <i class="fa-solid fa-lightbulb text-amber-500"></i>
                            <span>初步合规建议</span>
                        </div>
                        <ul class="space-y-2 text-sm pl-1">
                            ${recommendations.map(r => `<li class="flex gap-x-2"><i class="fa-solid fa-check text-teal-500 mt-1 text-xs"></i> <span>${r}</span></li>`).join('')}
                        </ul>
                    </div>
                    
                    <div>
                        <div class="font-semibold text-sm mb-3">推荐中心服务组合</div>
                        <div class="flex flex-wrap gap-2">
                            ${suggestedServices.map(s => {
        let color = 'bg-teal-100 text-teal-700';
        if (s.includes('算力')) color = 'bg-sky-100 text-sky-700';
        if (s.includes('出海')) color = 'bg-violet-100 text-violet-700';
        if (s.includes('政策')) color = 'bg-emerald-100 text-emerald-700';
        return `<span class="px-4 py-1 text-xs font-medium ${color} rounded-2xl">${s}</span>`;
    }).join('')}
                        </div>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-3">
                        <button onclick="downloadReport()" 
                                class="flex-1 flex items-center justify-center gap-x-2 px-5 py-3 border border-slate-300 hover:bg-slate-50 font-medium text-sm rounded-2xl transition">
                            <i class="fa-solid fa-download"></i>
                            <span>下载评估报告（模拟PDF）</span>
                        </button>
                        
                        <button onclick="showLeadModal()" 
                                class="flex-1 flex items-center justify-center gap-x-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-2xl transition">
                            <span>申请专家深度评估（免费）</span>
                        </button>
                    </div>
                    
                    <div class="mt-4 text-center">
                        <button onclick="continueToOtherServices()" class="text-xs text-teal-600 hover:underline flex items-center gap-x-1 mx-auto">
                            继续探索算力匹配 / 出海支持方案 <i class="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                    </div>
                </div>
            `;

    container.innerHTML = html;
}

function getFinalReportHTML() {
    const now = new Date();
    const generateTime = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    return `
        <div class="report-section">
            <div class="mb-6 flex items-center justify-between pb-4 border-b">
                <div>
                    <h3 class="font-bold text-2xl text-slate-900 tracking-tight flex items-center gap-x-2">
                        <i class="fa-solid fa-file-shield text-teal-600"></i>
                        <span>${t('demo.report.title')}</span>
                    </h3>
                    <p class="text-xs text-slate-500 mt-0.5">
                        ${t('demo.report.reportNumber') || '报告编号'}：MDC-${Math.floor(Math.random() * 900000 + 100000)} | 
                        ${t('demo.report.generateTime') || '生成时间'}：${generateTime}
                    </p>
                </div>
                <button onclick="downloadReport()" 
                        class="flex items-center justify-center gap-x-2 px-4 py-2.5 border border-slate-300 hover:bg-slate-50 font-medium text-sm rounded-2xl transition whitespace-nowrap">
                    <i class="fa-solid fa-download"></i>
                    <span>${t('demo.report.downloadReport')}</span>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                <div class="md:col-span-2 bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <div class="text-sm font-medium text-slate-500">${t('demo.report.riskLevel')}</div>
                        <div class="flex items-baseline gap-x-3 mt-2">
                            <span class="text-4xl font-extrabold text-amber-600 tracking-tight">${t('demo.report.mediumRisk')}</span>
                            <span class="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 font-semibold rounded-full border border-amber-200">
                                ${t('demo.report.needFiling')}
                            </span>
                        </div>
                        <p class="text-xs text-slate-600 mt-3 leading-relaxed">
                            ${t('demo.report.riskDesc') || '检测到您出境的数据包含<b class="text-slate-900">个人身份信息 (PII)</b>，且规模处于 10-500GB 区间。根据相关法规，此场景不属于强制国家安全评估范畴，但需在数据出境前完成<b class="text-teal-600">标准合同签署并向网信部门备案</b>。'}
                        </p>
                    </div>
                </div>
                
                <div class="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-lg flex flex-col justify-between">
                    <div>
                        <div class="text-xs text-slate-400 font-medium">${t('demo.report.suggestionPath')}</div>
                        <div class="text-xl font-bold mt-2 text-teal-400">${t('demo.report.gbaContract')}</div>
                        <p class="text-[11px] text-slate-300 mt-2 leading-normal">
                            ${t('demo.report.gbaDesc') || '因涉及中国澳门特别行政区流动，推荐采用《粤港澳大湾区（内地、澳门）个人信息跨境流动标准合同》，审批流程缩短约 50%。'}
                        </p>
                    </div>
                    <button onclick="showContactModal()" 
                            class="w-full text-center py-2 bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs rounded-xl transition mt-4">
                        ${t('demo.report.contactExpert')}
                    </button>
                </div>
            </div>

            <div class="border rounded-2xl p-5 bg-white shadow-sm">
                <div class="text-sm font-bold text-slate-800 mb-3 flex items-center gap-x-2">
                    <i class="fa-solid fa-list-check text-teal-600"></i>
                    <span>${t('demo.report.followUpSuggestions')}</span>
                </div>
                <ul class="space-y-2.5 text-xs text-slate-600">
                    <li class="flex items-start gap-x-2">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                        <span><b>${t('demo.report.dataDeidentify')}：</b> ${t('demo.report.dataDeidentifyDesc') || '建议在数据离境前，对 PII（如身份证号、电话）进行去标识化或加密，可使合规风险降至低度。'}</span>
                    </li>
                    <li class="flex items-start gap-x-2">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                        <span><b>${t('demo.report.localCompute')}：</b> ${t('demo.report.localComputeDesc') || '涉及 AI 推理场景，可考虑租用中心提供的「横琴/澳门高可用智算中心」进行数据预处理。'}</span>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

function downloadReport() {
    const reportText = `澳门数据跨境与人工智能合作服务中心
数据跨境合规评估报告（演示版）

评估时间：${new Date().toLocaleString('zh-CN')}
企业名称：${assessmentData.companyName}
行业：${assessmentData.industry}
规模：${assessmentData.scale}

数据类型：${assessmentData.dataTypes ? assessmentData.dataTypes.join('、') : '未填写'}
数据规模：${assessmentData.dataVolume}
业务场景：${assessmentData.businessScenario}

流动方向：${assessmentData.destinations ? assessmentData.destinations.join('、') : '未填写'}
敏感数据：${assessmentData.sensitiveData === 'yes' ? '是' : '否'}
已脱敏：${assessmentData.anonymized === 'yes' ? '是' : '否'}

风险等级：${document.querySelector('#report-content .risk-high, #report-content .risk-medium, #report-content .risk-low') ?
            (document.querySelector('.risk-high') ? '高' : document.querySelector('.risk-medium') ? '中' : '低') : '中'}

本报告为演示模拟版本，实际服务请以正式评估结果为准。
联系专属顾问：service@macau-data-ai.gov.mo
`;

    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `合规评估报告_${assessmentData.companyName || 'Demo'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('模拟报告已下载（实际系统将生成正式PDF）', 'success');
}

function continueToOtherServices() {
    // Scroll to other quick demos
    document.getElementById('demo').scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
        showToast('您可以点击下方「其他能力快速模拟」卡片继续体验', 'info');
    }, 800);
}

function scrollToDemoAndStartWizard() {
    const demoSection = document.getElementById('demo');
    demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
        currentStep = 1;
        showStep(1);
        // Reset form if needed
        document.getElementById('report-content').innerHTML = '';
    }, 650);
}

// 新增：数据上传弹窗控制逻辑
function openUploadModal() {
    const modal = document.getElementById('upload-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeUploadModal() {
    const modal = document.getElementById('upload-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function confirmUpload() {
    closeUploadModal();
    // 优先调用系统自带的 Toast 提示通知，如果没有则回退使用标准的 alert
    if (typeof showToast === 'function') {
        showToast(t('uploadModal.uploaded') || '数据已上传');
    } else {
        alert('数据已上传');
    }
}

// 当页面元素完全加载后，初始化拖拽与点击事件监听器
function initUploadDropZone() {
    const dropZone = document.getElementById("drop-zone");
    if (!dropZone) return;

    // 1. 阻止浏览器默认的拖放文件打开动作
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
        }, false);
    });

    // 2. 文件悬停上方时，切换高亮状态
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('border-slate-200', 'bg-slate-50/50');
            dropZone.classList.add('border-teal-500', 'bg-teal-50/60');
        }, false);
    });

    // 3. 文件离开或被释放时，还原初始设计
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('border-teal-500', 'bg-teal-50/60');
            dropZone.classList.add('border-slate-200', 'bg-slate-50/50');
        }, false);
    });

    // 4. 捕捉真正松开鼠标拖入的文件对象
    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;

        if (files.length > 0) {
            uploadedFile = files[0];

            // 动态更新文本，渲染已准备就绪的文件名与尺寸大小
            const textSpan = dropZone.querySelector('span');
            if (textSpan) {
                textSpan.innerHTML = `<b class="text-teal-600">${t('uploadModal.ready')}:</b> ${uploadedFile.name} (${(uploadedFile.size / 1024).toFixed(1)} KB)`;
            }

            // 变换小图标表示成功接收
            const icon = dropZone.querySelector('i');
            if (icon) {
                icon.className = "fa-solid fa-file-circle-check text-teal-500 text-3xl mb-2";
            }
        }
    }, false);

    // 5. 点击拖拽方框区域也可直接触发原生文件管理器选择
    dropZone.addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv, .json, .xlsx';
        fileInput.onchange = (e) => {
            if (e.target.files.length > 0) {
                uploadedFile = e.target.files[0];
                const textSpan = dropZone.querySelector('span');
                if (textSpan) {
                    textSpan.innerHTML = `<b class="text-teal-600">${t('uploadModal.ready')}:</b> ${uploadedFile.name}`;
                }
                const icon = dropZone.querySelector('i');
                if (icon) {
                    icon.className = "fa-solid fa-file-circle-check text-teal-500 text-3xl mb-2";
                }
            }
        };
        fileInput.click();
    });
}