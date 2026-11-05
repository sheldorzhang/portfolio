/* 完整简历阅读层：正文与下载 PDF 使用同一版中文内容。 */
(function(){
var PDF='assets/张耕-产品体验设计师-文字简历.pdf?v=20261105-business-data-v1';
var d=document.createElement('div');d.id='resume';d.className='sheet';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','rs-title');d.hidden=true;
var resumeMarkup=`
  <header class="sheet-head">
    <h2 id="rs-title">张耕</h2>
    <p>产品体验设计师｜10 年经验</p>
    <ul class="hero-tags"><li>AI Agent 体验</li><li>复杂 B 端业务</li><li>设计系统</li><li>AI Coding</li></ul>
    <p class="sheet-contact"><button class="sheet-copy" type="button" data-resume-copy="18602806752" data-copy-label="电话" data-copy-hint="点击复制" aria-label="复制电话">18602806752</button> ｜ 微信 <button class="sheet-copy" type="button" data-resume-copy="coda0415" data-copy-label="微信号" data-copy-hint="点击复制" aria-label="复制微信号">coda0415</button> ｜ <button class="sheet-copy" type="button" data-resume-copy="sheldorzhang@gmail.com" data-copy-label="邮箱地址" data-copy-hint="点击复制" aria-label="复制邮箱地址">sheldorzhang@gmail.com</button><span class="vh sheet-copy-status" role="status" aria-live="polite"></span></p>
    <img class="sheet-photo" src="assets/resume-photo.jpg?v=20261028-v1" alt="张耕职业头像" width="600" height="600" loading="lazy" decoding="async">
  </header>
  <section class="sheet-sec sheet-core"><h3>核心能力</h3><ul>
    <li><b>AI Agent 产品体验与人机协作</b>：负责企点营销云 MAGIC AI 的 Agent 任务协作体验，设计了意图澄清、计划确认、执行反馈和结构化产物四类协作机制，用于行业客户交付。推动 AI 能力融入业务流程，兼顾任务效率、可靠性与用户控制权。</li>
    <li><b>复杂 B 端与行业业务</b>：具备企业 SaaS、B2B 行业 IM 与零售电商 B/C 双端设计经验，擅长从业务目标和用户任务出发，梳理多角色、长流程及跨系统问题，平衡用户、业务与技术约束，推动方案落地验证。</li>
    <li><b>设计系统与工程交付</b>：主导营销云 AI 设计体系建设，参与 TDesign 电商组件库共建；完成设计系统 AI-ready 化，将组件规则和页面范式整理成 AI 可读取的设计上下文与 Skill，推动协作使用并参与工程联调。</li>
  </ul></section>
  <section class="sheet-sec"><h3>工作经历</h3>
    <div class="sheet-row"><h4>腾讯｜CSIG｜产品体验设计师</h4><span>2021.04 – 至今</span></div>
    <ul><li><b>AI 产品交付与体验演进</b>：主导营销云 AI 设计体系，沉淀「表达、协作、产物」组件规范并推动关键能力上线；依据客户反馈、行为数据与竞品分析维护问题方案清单，跟进采纳落地，以 AI Coding 与工程联调推动实现。</li><li><b>行业协作与业务效率</b>：在电子采配有库存场景中，通过 NLP 识别与业务系统集成优化信息获取和响应流程，支持业务人员在 IM 侧边栏查询询价信息并一键回复。</li><li><b>产品线经历</b>：先后负责 4 条产品线的体验设计：腾讯云 Mall / 鹅享团（2021–2022）→ 营销云 SCRM（2022）→ 企点商通 IM（2023–）→ 企点营销云 MAGIC AI（2024–），覆盖零售电商、企业营销和行业交易。</li></ul>
    <div class="sheet-row"><h4>喜马拉雅｜主播生态事业部｜UI 设计师</h4><span>2018.08 – 2021.04</span></div>
    <ul><li><b>平台重构与协作效率</b>：主导有声节目制作平台重构，理顺版权方、主播和运营之间的协作流程：撮合效率提升 20%，运营成本降低 70%，支撑 2000+ 节目上线。</li><li><b>设计规范与分享裂变</b>：统一多端设计规范并推进代码化，组件复用率提升 40%；负责「万物声」有声明信片的分享裂变设计，任务完成率提升 50%。</li></ul>
    <div class="sheet-row"><h4>更早</h4><span>2016.09 – 2018.08</span></div>
    <ul><li>言几又书店（UI 设计师）：品牌电商小程序、会员与 O2O 体验，会员转化 100 万+。</li><li>AIUX 设计咨询（产品设计师）：鲁大师、PandaPia、芒果云的体验方案与高保真原型。</li></ul>
  </section>
  <section class="sheet-sec"><h3>核心项目</h3>
    <div class="sheet-row"><h4>01｜腾讯企点营销云 MAGIC AI</h4><span>2024 – 至今</span></div>
    <p>面向企业增长的 AI Agent 营销平台，负责 Agent 基础设定和任务协作体验，主导营销云 AI 设计体系。团队交付口径下，活动搭建从 2–3 天缩短到约 0.5 天，相关环节准确率 90%+；营销云产品线签约金额增速 +35%，KA 客户 160+ 家。</p>
    <ul><li><b>体验策略</b>：结合营销任务及其复杂度、意图清晰度与执行风险，设计内嵌式 AI、Copilot、Multi-Agent 三类模式；通过过程分层、问题澄清与计划确认，支持用户判断与决策。</li><li><b>设计系统与工作流</b>：针对多角色 AI Coding 产出质量不一，结构化设计规范、页面范式与知识库，沉淀 AI 可用资产与 Skill，完善生成、走查和迭代流程，推动跨角色规范化交付。</li></ul>
    <div class="sheet-row"><h4>02｜腾讯企点商通</h4><span>2023.04 – 至今</span></div>
    <p>基于 QQ B2B 生态的企业 IM，服务 800+ 金融机构、1.5 万+ 固收交易员。我负责 IM 客户端和行业应用的体验设计。电子采配报价时间从约 20 分钟缩短至 30 秒（上线实测），人均每日处理单证量提升至原来的 4 倍。</p>
    <ul><li><b>行业场景与任务整合</b>：针对行业关系和业务沟通集中于 IM、独立系统难以建联的问题，将库存查询、计算与询报价能力融入会话侧边栏，支持业务人员在沟通中获取信息并快速响应。</li><li><b>AI 驱动的交易辅助</b>：结合 NLP 与 Agent 能力，设计面向电子行业的「电子通」及询报价机器人，帮助业务人员从会话中识别交易线索，再自主判断与跟进。</li></ul>
    <div class="sheet-row"><h4>03｜腾讯云 Mall / 鹅享团</h4><span>2021 – 2022</span></div>
    <p>零售电商 SaaS 和社群团购，服务沃尔玛等 KA 客户，打造 4+ 行业方案。后台操作效率提升 40%，营销链路转化率提升 28%，参与活动商家 GMV +20%；鹅享团上线 6 个月内 GMV 突破 200 万+，注册用户 60 万+。</p>
    <ul><li><b>商家端｜营销配置与运营效率</b>：围绕复杂营销规则与活动搭建成本，优化营销模板、批量操作、所见即所得配置及会员成长机制，降低商家运营负担。</li><li><b>消费端｜购买决策与交易转化</b>：优化商品、购物车及结算链路的优惠规则、适用条件与收益表达；结合微信社群场景设计团长开团、帮卖与参团流程，衔接营销参与、购买决策与交易转化。</li></ul>
  </section>
  <section class="sheet-sec"><h3>其他项目</h3><div class="sheet-row"><h4>企点营销云 企微互动 SCRM</h4><span>2022</span></div><p>负责导购获客、客户运营和营销触达的跨端 MVP 设计。通过后台配置端与企微侧边栏的协同设计，配置效率提升 30%，MVP 获得 6+ 家客户付费验证。</p></section>
  <section class="sheet-sec"><h3>实践与探索</h3><div class="sheet-row"><h4>Be4D｜设计系统 × AI Coding</h4></div><p>探索 AI Coding 前置设计约束的方法，将 Design Token、组件规范与交互范式应用于可运行原型，研究标准化复用与创造性探索的平衡。</p><div class="sheet-row"><h4>Intent UI｜意图驱动的生成式体验</h4></div><p>探索自然语言、动态表单与结构化产物的组合方式，构建 Generative UI 概念原型，研究用户意图变化下的动态界面与人机协作体验。</p></section>
  <section class="sheet-sec"><h3>技能与工具</h3><ul><li><b>研究与定义</b>：用户研究、复杂工作流、信息架构、用户旅程、服务蓝图、可用性测试。</li><li><b>AI 产品体验</b>：AI 产品设计、Chat / Copilot / Multi-Agent 选型、Human-in-the-loop、Generative UI。</li><li><b>设计系统与实现</b>：Design Systems、Design Tokens、Figma、TDesign、AI Coding（Cursor、Codex）；React、Next.js、Tailwind CSS（可运行原型与工程协作）。</li></ul></section>
  <section class="sheet-sec"><h3>荣誉与教育</h3><p>腾讯 OUTSTANDING CONTRIBUTOR｜2022 年上半年</p><p>成都理工大学｜工业设计｜本科（学士）｜2016</p></section>
`;
var resumeMarkupEn=`
  <header class="sheet-head">
    <h2 id="rs-title">Geng Zhang</h2>
    <p>Product Experience Designer | 10 Years of Experience</p>
    <ul class="hero-tags"><li>AI Agent Experience</li><li>Complex B2B Experiences</li><li>Design Systems</li><li>AI Coding</li></ul>
    <p class="sheet-contact"><button class="sheet-copy" type="button" data-resume-copy="18602806752" data-copy-label="Phone" data-copy-hint="Click to copy" aria-label="Copy phone number">18602806752</button> ｜ WeChat <button class="sheet-copy" type="button" data-resume-copy="coda0415" data-copy-label="WeChat ID" data-copy-hint="Click to copy" aria-label="Copy WeChat ID">coda0415</button> ｜ <button class="sheet-copy" type="button" data-resume-copy="sheldorzhang@gmail.com" data-copy-label="Email" data-copy-hint="Click to copy" aria-label="Copy email address">sheldorzhang@gmail.com</button><span class="vh sheet-copy-status" role="status" aria-live="polite"></span></p>
    <img class="sheet-photo" src="assets/resume-photo.jpg?v=20261028-v1" alt="Portrait of Geng Zhang" width="600" height="600" loading="lazy" decoding="async">
  </header>
  <section class="sheet-sec sheet-core"><h3>Core Capabilities</h3><ul>
    <li><b>AI Agent Product Experience and Human-AI Collaboration</b>: Led Agent task collaboration for Qidian Marketing Cloud MAGIC AI. Designed four collaboration mechanisms—intent clarification, plan confirmation, execution feedback, and structured outputs—for delivery to industry clients. Integrated AI into business workflows while balancing task efficiency, reliability, and user control.</li>
    <li><b>Complex B2B and Industry Workflows</b>: Experience across enterprise SaaS, industry B2B IM, and B2C/B2B retail e-commerce. Start from business goals and user tasks to untangle multi-role, long-running, cross-system workflows; balance user needs, business goals, and technical constraints to deliver and validate solutions.</li>
    <li><b>Design Systems and Engineering Delivery</b>: Led the Marketing Cloud AI design system and contributed to the TDesign e-commerce component library. Made the design system AI-ready by organizing component rules and page patterns into AI-readable design context and Skills, supporting team adoption and engineering collaboration.</li>
  </ul></section>
  <section class="sheet-sec"><h3>Experience</h3>
    <div class="sheet-row"><h4>Tencent | CSIG | Product Experience Designer</h4><span>Apr 2021 – Present</span></div>
    <ul><li><b>AI Product Delivery and Experience Evolution</b>: Led the Marketing Cloud AI design system, codified component patterns for expression, collaboration, and deliverables, and drove key capabilities to launch. Maintained a prioritized problem-solution backlog using customer feedback, behavioral data, and competitive analysis; followed through on adoption and delivery with AI coding and engineering collaboration.</li><li><b>Industry Collaboration and Business Efficiency</b>: In electronic procurement scenarios with available inventory, used NLP and business-system integrations to improve information access and response workflows, enabling teams to view inquiries and reply with one click from the IM sidebar.</li><li><b>Product Line Experience</b>: Led experience design across four product lines: Tencent Cloud Mall / E-Xiang Tuan (2021–2022) → Marketing Cloud SCRM (2022) → Qidian Merchant IM (2023–Present) → Qidian Marketing Cloud MAGIC AI (2024–Present), spanning retail e-commerce, enterprise marketing, and industry transactions.</li></ul>
    <div class="sheet-row"><h4>Himalaya | Creator Ecosystem | UI Designer</h4><span>Aug 2018 – Apr 2021</span></div>
    <ul><li><b>Platform Rebuild and Collaboration Efficiency</b>: Led the rebuild of an audio program production platform and streamlined collaboration among rights holders, hosts, and operations, improving matching efficiency by 20% and reducing operating costs by 70%, while supporting 2,000+ program launches.</li><li><b>Design Standards and Sharing Growth</b>: Unified cross-platform design standards and translated them into code, increasing component reuse by 40%. Designed the sharing loop for “Wan Wu Sheng” audio message cards, improving task completion by 50%.</li></ul>
    <div class="sheet-row"><h4>Earlier Experience</h4><span>Sep 2016 – Aug 2018</span></div>
    <ul><li>Yanji You Bookstore (UI Designer): Brand e-commerce mini program, membership, and O2O experience; membership conversion exceeded 1 million.</li><li>AIUX Design Consultancy (Product Designer): Experience concepts and high-fidelity prototypes for Lu Master, PandaPia, and Mango Cloud.</li></ul>
  </section>
  <section class="sheet-sec"><h3>Selected Projects</h3>
    <div class="sheet-row"><h4>01 | Tencent Qidian Marketing Cloud MAGIC AI</h4><span>2024 – Present</span></div>
    <p>An AI Agent marketing platform for enterprise growth. Owned Agent foundational setup and task collaboration, and led the Marketing Cloud AI design system. Based on team delivery reporting, campaign setup time fell from 2–3 days to about half a day, with 90%+ accuracy in related steps. Marketing Cloud contract value grew by 35%, serving 160+ key accounts.</p>
    <ul><li><b>Experience Strategy</b>: Designed embedded AI, Copilot, and Multi-Agent modes around marketing-task complexity, intent clarity, and execution risk. Used progressive process disclosure, clarification, and plan confirmation to support user judgment and decisions.</li><li><b>Design System and Workflow</b>: Addressed inconsistent AI coding outputs across roles by structuring design guidelines, page patterns, and a knowledge base. Created AI-ready assets and Skills, improved generation, review, and iteration workflows, and enabled consistent cross-functional delivery.</li></ul>
    <div class="sheet-row"><h4>02 | Tencent Qidian Merchant IM</h4><span>Apr 2023 – Present</span></div>
    <p>An enterprise IM built on QQ's B2B ecosystem, serving 800+ financial institutions and 15,000+ fixed-income traders. I designed the IM client and industry applications. In electronic procurement, quote turnaround fell from about 20 minutes to 30 seconds in live production, and daily document processing per employee increased to four times the previous level.</p>
    <ul><li><b>Industry Scenarios and Task Integration</b>: Addressed fragmented industry relationships and business conversations by bringing inventory lookup, calculations, and quote requests into the conversation sidebar—so teams can find information and respond without leaving the conversation.</li><li><b>AI-assisted Transactions</b>: Combined NLP and Agent capabilities to design “Dianzi Tong” and quote-request bots for the electronics industry, helping teams identify transaction leads in conversations and decide how to follow up.</li></ul>
    <div class="sheet-row"><h4>03 | Tencent Cloud Mall / E-Xiang Tuan</h4><span>2021 – 2022</span></div>
    <p>Retail e-commerce SaaS and community group-buying products serving key accounts including Walmart, with 4+ industry solutions. Back-office task efficiency improved by 40%, marketing funnel conversion increased by 28%, and GMV among participating merchants grew by 20%+. Within six months of launch, E-Xiang Tuan exceeded RMB 2M GMV and reached 600K+ registered users.</p>
    <ul><li><b>Merchant Experience | Campaign Setup and Operations</b>: Simplified complex campaign rules and setup through reusable templates, bulk actions, WYSIWYG configuration, and membership-growth features—reducing merchants' operational workload.</li><li><b>Customer Experience | Purchase Decisions and Conversion</b>: Clarified promotions, eligibility, and savings across product, cart, and checkout flows. Designed group-leader launch, assisted-selling, and participation flows for WeChat communities, connecting campaign engagement to purchase and conversion.</li></ul>
  </section>
  <section class="sheet-sec"><h3>Additional Project</h3><div class="sheet-row"><h4>Qidian Marketing Cloud | WeCom Engagement SCRM</h4><span>2022</span></div><p>Designed a cross-platform MVP for store-associate acquisition, customer operations, and marketing outreach. Coordinated the admin console and WeCom sidebar experiences to improve configuration efficiency by 30%; the MVP was validated through paid adoption by 6+ customers.</p></section>
  <section class="sheet-sec"><h3>Practice and Exploration</h3><div class="sheet-row"><h4>Be4D | Design Systems × AI Coding</h4></div><p>Explored how to bring design constraints earlier into AI coding by applying Design Tokens, component guidelines, and interaction patterns to runnable prototypes—balancing standardization and creative exploration.</p><div class="sheet-row"><h4>Intent UI | Intent-driven Generative Experiences</h4></div><p>Explored combinations of natural language, dynamic forms, and structured outputs through a Generative UI concept prototype, studying adaptive interfaces and human-AI collaboration as user intent changes.</p></section>
  <section class="sheet-sec"><h3>Skills and Tools</h3><ul><li><b>Research and Definition</b>: User research, complex workflows, information architecture, user journeys, service blueprint, usability testing.</li><li><b>AI Product Experience</b>: AI product design, Chat / Copilot / Multi-Agent selection, human-in-the-loop, Generative UI.</li><li><b>Design Systems and Implementation</b>: Design systems, design tokens, Figma, TDesign, AI coding (Cursor, Codex); React, Next.js, and Tailwind CSS for runnable prototypes and engineering collaboration.</li></ul></section>
  <section class="sheet-sec"><h3>Recognition and Education</h3><p>Tencent Outstanding Contributor | H1 2022</p><p>Chengdu University of Technology | Industrial Design | Bachelor's Degree | 2016</p></section>
`;
d.innerHTML='<div class="sheet-scroll"><article class="sheet-paper">'+resumeMarkup+'</article></div><div class="sheet-bar"><button type="button" class="btn-close sheet-close" aria-label="关闭简历（Esc）"><svg class="icon icon-16" aria-hidden="true"><use href="#i-x"/></svg><span class="sheet-close-label">关闭</span></button><button type="button" class="sheet-lang" aria-label="Switch resume to English" aria-pressed="false">EN</button><a class="sheet-dl" href="'+PDF+'" download="张耕-产品体验设计师-文字简历.pdf" aria-label="下载中文 PDF"><svg class="icon icon-16" aria-hidden="true"><use href="#i-download"/></svg><span class="sheet-dl-label">下载 PDF</span></a></div>';
document.body.appendChild(d);
var last=null,sc=d.querySelector('.sheet-scroll'),paper=d.querySelector('.sheet-paper'),langBtn=d.querySelector('.sheet-lang'),closeLabel=d.querySelector('.sheet-close-label'),dlLabel=d.querySelector('.sheet-dl-label'),dlLink=d.querySelector('.sheet-dl');
var isEnglish=false;
function setLanguage(english){var scrollTop=sc.scrollTop;isEnglish=english;paper.innerHTML=english?resumeMarkupEn:resumeMarkup;paper.lang=english?'en':'zh-CN';langBtn.textContent=english?'中文':'EN';langBtn.setAttribute('aria-pressed',String(english));langBtn.setAttribute('aria-label',english?'Switch resume to Chinese':'Switch resume to English');closeLabel.textContent=english?'Close':'关闭';d.querySelector('.sheet-close').setAttribute('aria-label',english?'Close resume (Esc)':'关闭简历（Esc）');dlLabel.textContent=english?'Download Chinese PDF':'下载 PDF';dlLink.setAttribute('aria-label',english?'Download Chinese PDF':'下载中文 PDF');requestAnimationFrame(function(){sc.scrollTop=scrollTop})}
langBtn.addEventListener('click',function(){setLanguage(!isEnglish)});
var copyResetTimers=new WeakMap();
function legacyCopy(value){var field=document.createElement('textarea');field.value=value;field.setAttribute('readonly','');field.style.position='fixed';field.style.opacity='0';document.body.appendChild(field);field.select();var ok=false;try{ok=document.execCommand('copy')}catch(e){}field.remove();return ok}
paper.addEventListener('click',async function(event){
 var button=event.target.closest('.sheet-copy');if(!button)return;
 var english=isEnglish,value=button.dataset.resumeCopy,ok=false,originalLabel=button.dataset.copyOriginalLabel||(button.dataset.copyOriginalLabel=button.getAttribute('aria-label'));
 try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);ok=true}}catch(e){}
 if(!ok)ok=legacyCopy(value);
 var kind=button.dataset.copyLabel;
 button.dataset.copyHint=ok?(english?'Copied':'已复制'):(english?'Copy failed':'复制失败');
 button.setAttribute('aria-label',ok?(english?kind+' copied':kind+'已复制'):(english?'Could not copy '+kind:'复制'+kind+'失败'));
 var status=paper.querySelector('.sheet-copy-status');if(status)status.textContent=ok?(english?kind+' copied to clipboard':kind+'已复制到剪贴板'):(english?'Copy failed. Select the text to copy it.':'复制失败，请手动选择并复制');
 clearTimeout(copyResetTimers.get(button));copyResetTimers.set(button,setTimeout(function(){button.dataset.copyHint=english?'Click to copy':'点击复制';button.setAttribute('aria-label',originalLabel)},2200));
});
function focusables(){return [].slice.call(d.querySelectorAll('a[href],button'))}
function open(push){if(!d.hidden)return;setLanguage(false);last=document.activeElement;d.hidden=false;document.documentElement.classList.add('sheet-lock');sc.scrollTop=0;requestAnimationFrame(function(){d.classList.add('on')});d.querySelector('.sheet-close').focus({preventScroll:true});if(location.hash!=='#resume')history.replaceState(null,'',location.pathname+location.search+'#resume')}
function close(){if(d.hidden)return;d.classList.remove('on');d.hidden=true;document.documentElement.classList.remove('sheet-lock');if(location.hash==='#resume')history.replaceState(null,'',location.pathname+location.search);if(last&&last.focus)last.focus({preventScroll:true})}
window.__resume={open:open,close:close};
document.addEventListener('click',function(e){var t=e.target.closest('[data-resume],a[href="#resume"]');if(t){e.preventDefault();e.stopPropagation();open()}},true);
d.querySelector('.sheet-close').addEventListener('click',close);
sc.addEventListener('click',function(e){if(!paper.contains(e.target))close()});
document.addEventListener('keydown',function(e){if(d.hidden)return;if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();close();return}
 if(e.key==='Tab'){var f=focusables(),a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}else if(!d.contains(document.activeElement)){e.preventDefault();a.focus()}}},true);
addEventListener('hashchange',function(){location.hash==='#resume'?open():close()});
if(location.hash==='#resume')open();
})();
