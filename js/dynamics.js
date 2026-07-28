// js/dynamics.js


// ==================== 多语言辅助函数 ====================
/**
 * 从多语言对象中获取当前语言的文本
 * 兼容旧的字符串结构
 */
function getLocalizedText(obj, lang = currentLang) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj; // 兼容旧数据
    return obj[lang] || obj['zh-CN'] || obj['en'] || '';
}

// ==================== 分类多语言映射 ====================
const categoryTranslations = {
    '全部': {
        'zh-CN': '全部',
        'zh-TW': '全部',
        'en': 'All'
    },
    '政策法规': {
        'zh-CN': '政策法规',
        'zh-TW': '政策法規',
        'en': 'Policy & Regulations'
    },
    '合作动态': {
        'zh-CN': '合作动态',
        'zh-TW': '合作動態',
        'en': 'Cooperation Updates'
    },
    '技术洞察': {
        'zh-CN': '技术洞察',
        'zh-TW': '技術洞察',
        'en': 'Tech Insights'
    },
    '活动预告': {
        'zh-CN': '活动预告',
        'zh-TW': '活動預告',
        'en': 'Event Preview'
    },
    '成功案例': {
        'zh-CN': '成功案例',
        'zh-TW': '成功案例',
        'en': 'Success Stories'
    }
};

/**
 * 获取分类的当前语言显示文字
 */
function getCategoryLabel(categoryKey) {
    const lang = currentLang || 'zh-CN';
    if (categoryTranslations[categoryKey] && categoryTranslations[categoryKey][lang]) {
        return categoryTranslations[categoryKey][lang];
    }
    return categoryKey; // 回退
}

// 平台动态页逻辑

let currentFilter = '全部';
let displayedCount = 6; // 初始显示数量

// 初始化平台动态页
function initDynamicsPage() {
    renderFilterButtons();
    renderFeaturedNews();
    renderDynamicsGrid();
    updateLoadMoreButton();

    // 绑定搜索框（已在HTML中通过onkeyup调用filterDynamics）
    const searchInput = document.getElementById('dynamics-search');
    if (searchInput) {
        searchInput.addEventListener('input', filterDynamics);
    }
}

// 渲染分类筛选按钮
function renderFilterButtons() {
    const container = document.getElementById('dynamics-filter-buttons');
    if (!container) return;

    // 分类列表（内部仍然使用中文作为 key，方便与 dynamicsData 匹配）
    const categories = ['全部', '政策法规', '合作动态', '技术洞察', '活动预告', '成功案例'];

    container.innerHTML = '';

    categories.forEach(cat => {
        const btn = document.createElement('button');

        // 显示文字使用多语言
        const displayText = getCategoryLabel(cat);

        // 当前是否为选中状态
        const isActive = (cat === currentFilter);

        btn.className = `px-4 py-1.5 text-xs font-medium rounded-2xl border transition-all whitespace-nowrap ${isActive
            ? 'bg-teal-600 text-white border-teal-600'
            : 'bg-white text-slate-600 border-slate-300 hover:border-teal-300'
            }`;

        btn.textContent = displayText;

        // 点击时仍然使用原始中文 key 进行过滤
        btn.onclick = () => {
            currentFilter = cat;

            // 更新所有按钮样式
            container.querySelectorAll('button').forEach((b, index) => {
                const thisCat = categories[index];
                if (thisCat === cat) {
                    b.className = 'px-4 py-1.5 text-xs font-medium rounded-2xl border transition-all whitespace-nowrap bg-teal-600 text-white border-teal-600';
                } else {
                    b.className = 'px-4 py-1.5 text-xs font-medium rounded-2xl border transition-all whitespace-nowrap bg-white text-slate-600 border-slate-300 hover:border-teal-300';
                }
            });

            filterDynamics();
        };

        container.appendChild(btn);
    });
}

// 渲染精选动态（大卡片）
function renderFeaturedNews() {
    const container = document.getElementById('dynamics-featured');
    if (!container) return;

    const featuredItems = dynamicsData.filter(item => item.featured).slice(0, 1);
    if (featuredItems.length === 0) {
        container.style.display = 'none';
        return;
    }

    const item = featuredItems[0];
    const title = getLocalizedText(item.title);
    const excerpt = getLocalizedText(item.excerpt);

    container.innerHTML = `
        <div onclick="showNewsDetail(${item.id})" 
             class="group relative bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-10 cursor-pointer overflow-hidden modern-shadow hover:shadow-2xl transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
                <div class="flex-1">
                    <div class="flex items-center gap-x-3 mb-4">
                        <span class="px-3 py-1 text-xs font-semibold bg-white/20 text-white rounded-2xl">${item.date}</span>
                        <span class="px-3 py-1 text-xs font-semibold bg-teal-500 text-white rounded-2xl">${getCategoryLabel(item.category)}</span>
                    </div>
                    <h3 class="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-teal-300 transition">${title}</h3>
                    <p class="text-slate-300 text-[15px] line-clamp-2 max-w-3xl">${excerpt}</p>
                    <div class="mt-5 inline-flex items-center text-sm font-medium text-teal-400 group-hover:text-teal-300">
                        ${t('dynamics.readMore') || '阅读全文'} <i class="fa-solid fa-arrow-right ml-2 transition group-hover:translate-x-0.5"></i>
                    </div>
                </div>
                <div class="hidden md:block w-px h-20 bg-white/20"></div>
                <div class="md:w-48 text-sm text-slate-300">
                    <div class="font-semibold text-white mb-1">${t('dynamics.milestone') || '重要里程碑'}</div>
                    <div>${t('dynamics.milestoneDesc') || '广西书记10月访澳<br>中心门户正式亮相'}</div>
                </div>
            </div>
        </div>
    `;
}

// 渲染动态网格
function renderDynamicsGrid(filteredData = null) {
    const container = document.getElementById('dynamics-grid');
    if (!container) return;

    let dataToShow = filteredData || dynamicsData;
    const toShow = dataToShow.slice(0, displayedCount);

    container.innerHTML = '';

    if (toShow.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-500">
                <i class="fa-solid fa-search text-3xl mb-3"></i>
                <p>${t('dynamics.noResult') || '暂无匹配的动态，请尝试其他关键词'}</p>
            </div>
        `;
        return;
    }

    toShow.forEach(item => {
        const card = document.createElement('div');
        card.className = `capability-card group bg-white border border-slate-200 hover:border-teal-200 rounded-3xl p-6 flex flex-col modern-shadow cursor-pointer`;
        card.onclick = () => showNewsDetail(item.id);

        const colorClass = {
            'teal': 'bg-teal-100 text-teal-700',
            'emerald': 'bg-emerald-100 text-emerald-700',
            'sky': 'bg-sky-100 text-sky-700',
            'violet': 'bg-violet-100 text-violet-700',
            'amber': 'bg-amber-100 text-amber-700'
        }[item.categoryColor] || 'bg-slate-100 text-slate-700';

        // 多语言获取
        const title = getLocalizedText(item.title);
        const excerpt = getLocalizedText(item.excerpt);
        const imageCaption = getLocalizedText(item.imageCaption);

        card.innerHTML = `
            ${item.image ? `
                <img src="${item.image}" 
                     class="w-full max-h-[480px] object-contain rounded-2xl mb-6 shadow-sm bg-slate-100" 
                     alt="${title}">
                ${imageCaption ? `<div class="text-xs text-slate-500 text-center -mt-1 mb-4">${imageCaption}</div>` : ''}
            ` : ''}
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-2xl">${item.date}</span>
                <span class="text-xs px-3 py-1 ${colorClass} rounded-2xl font-medium">${getCategoryLabel(item.category)}</span>
            </div>
            <h4 class="font-bold text-xl tracking-tight mb-3 group-hover:text-teal-600 transition line-clamp-2">${title}</h4>
            <p class="text-sm text-slate-600 flex-1 line-clamp-3">${excerpt}</p>
            <div class="mt-4 pt-4 border-t flex items-center justify-between text-sm">
                <span class="font-medium text-teal-600 group-hover:underline">${t('dynamics.readMore') || '阅读全文'}</span>
                <i class="fa-solid fa-arrow-right text-teal-500 group-hover:translate-x-0.5 transition"></i>
            </div>
        `;
        container.appendChild(card);
    });

    updateLoadMoreButton(filteredData);
}

// 过滤动态
function filterDynamics() {
    const searchTerm = document.getElementById('dynamics-search').value.toLowerCase().trim();
    const container = document.getElementById('dynamics-grid');

    let filtered = dynamicsData;

    // 分类过滤
    if (currentFilter !== '全部') {
        filtered = filtered.filter(item => item.category === currentFilter);
    }

    // 搜索过滤
    if (searchTerm) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.excerpt.toLowerCase().includes(searchTerm) ||
            item.content.toLowerCase().includes(searchTerm)
        );
    }

    // 重置显示数量并重新渲染
    displayedCount = 6;
    renderDynamicsGrid(filtered);
    updateLoadMoreButton(filtered);
}

// 加载更多 / 收起
function loadMoreDynamics() {
    const searchTerm = document.getElementById('dynamics-search').value.toLowerCase().trim();

    let filtered = dynamicsData;
    if (currentFilter !== '全部') {
        filtered = filtered.filter(item => item.category === currentFilter);
    }
    if (searchTerm) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.excerpt.toLowerCase().includes(searchTerm)
        );
    }

    const total = filtered.length;
    const isExpanded = displayedCount >= total;

    if (isExpanded) {
        // 当前已展开全部 → 收起
        displayedCount = 6;
    } else {
        // 继续展开
        displayedCount = Math.min(displayedCount + 6, total);
    }

    renderDynamicsGrid(filtered);
    updateLoadMoreButton(filtered);
}

// 动态更新“加载更多 / 收起”按钮文字和状态
function updateLoadMoreButton(filteredData = null) {
    const btn = document.getElementById('load-more-dynamics');
    if (!btn) return;

    let data = filteredData || dynamicsData;

    // 根据当前筛选条件过滤数据
    if (currentFilter !== '全部') {
        data = data.filter(item => item.category === currentFilter);
    }

    const searchTerm = document.getElementById('dynamics-search')?.value.toLowerCase().trim() || '';
    if (searchTerm) {
        data = data.filter(item => {
            const title = getLocalizedText(item.title).toLowerCase();
            const excerpt = getLocalizedText(item.excerpt).toLowerCase();
            return title.includes(searchTerm) || excerpt.includes(searchTerm);
        });
    }

    const total = data.length;

    // 如果总数不超过初始显示数量，隐藏按钮
    if (total <= 6) {
        btn.style.display = 'none';
        return;
    }

    btn.style.display = 'flex';

    // 获取按钮内的 span 和图标
    const textSpan = btn.querySelector('span');
    const icon = btn.querySelector('i');

    if (displayedCount >= total) {
        // 当前已展开全部 → 显示「收起」
        if (textSpan) {
            textSpan.setAttribute('data-i18n', 'dynamics.collapse');
            textSpan.textContent = t('dynamics.collapse');
        }
        if (icon) {
            icon.className = 'fa-solid fa-chevron-up';
        }
    } else {
        // 还可以继续加载 → 显示「加载更多」
        if (textSpan) {
            textSpan.setAttribute('data-i18n', 'dynamics.loadMore');
            textSpan.textContent = t('dynamics.loadMore');
        }
        if (icon) {
            icon.className = 'fa-solid fa-chevron-down';
        }
    }
}

// 显示新闻详情 Modal
function showNewsDetail(id) {
    const item = dynamicsData.find(d => d.id === id);
    if (!item) return;

    const title = getLocalizedText(item.title);
    const content = getLocalizedText(item.content);
    const imageCaption = getLocalizedText(item.imageCaption);

    // 创建 Modal
    const modal = document.createElement('div');
    modal.className = `fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4`;
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    const colorClass = {
        'teal': 'bg-teal-100 text-teal-700',
        'emerald': 'bg-emerald-100 text-emerald-700',
        'sky': 'bg-sky-100 text-sky-700',
        'violet': 'bg-violet-100 text-violet-700',
        'amber': 'bg-amber-100 text-amber-700'
    }[item.categoryColor] || 'bg-slate-100 text-slate-700';

    modal.innerHTML = `
        <div onclick="event.stopImmediatePropagation()" 
             class="bg-white w-full max-w-3xl rounded-3xl overflow-hidden modal max-h-[90vh] flex flex-col">
            
            <!-- Header -->
            <div class="px-8 py-6 border-b flex items-start justify-between bg-slate-50">
                <div>
                    <div class="flex items-center gap-x-3 mb-2">
                        <span class="px-3 py-1 text-xs font-semibold bg-slate-200 text-slate-600 rounded-2xl">${item.date}</span>
                        <span class="px-3 py-1 text-xs font-semibold ${colorClass} rounded-2xl">${getCategoryLabel(item.category)}</span>
                    </div>
                    <h3 class="font-bold text-2xl tracking-tight pr-8">${title}</h3>
                </div>
                <button onclick="this.closest('.fixed').remove()" 
                        class="text-3xl text-slate-400 hover:text-slate-600 leading-none mt-1">×</button>
            </div>

            <!-- Content -->
            <div class="p-8 overflow-y-auto flex-1 text-[15px] leading-relaxed text-slate-700">
                ${item.image ? `
                    <img src="${item.image}" 
                         class="w-full max-h-[480px] object-contain rounded-2xl mb-6 shadow-sm bg-slate-100" 
                         alt="${title}">
                    ${imageCaption ? `
                        <div class="text-xs text-slate-500 text-center -mt-1 mb-6">
                            ${imageCaption}
                        </div>
                    ` : ''}
                ` : ''}

                <p>${content}</p>
                
                <div class="mt-8 p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm">
                    <div class="font-semibold text-slate-800 mb-2">${t('dynamics.relatedServices') || '相关服务'}</div>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-2xl text-xs">${t('service.dataCrossBorder')}</span>
        <span class="px-3 py-1 bg-sky-100 text-sky-700 rounded-2xl text-xs">${t('service.computingScheduling')}</span>
        <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-2xl text-xs">${t('service.enterpriseGoingGlobal')}</span>
        <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-2xl text-xs">${t('service.standardsPolicy')}</span>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="px-8 py-5 bg-slate-50 border-t flex flex-col sm:flex-row gap-3 justify-end">
                <button onclick="this.closest('.fixed').remove()" 
                        class="px-6 py-2.5 text-sm font-medium border border-slate-300 rounded-2xl hover:bg-white">
                    ${t('common.close') || '关闭'}
                </button>
                <button onclick="this.closest('.fixed').remove(); showLeadModal(['数据跨境合规', '专家咨询'])" 
                        class="px-7 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-2xl">
                    ${t('dynamics.applyService') || '申请相关服务'}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}