/* 完整简历阅读层：正文与下载 PDF 使用同一版中文内容。 */
(function(){
var PDF='assets/张耕-产品体验设计师-文字简历.pdf?v=20261116-formal-v1';
var d=document.createElement('div');d.id='resume';d.className='sheet';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','rs-title');d.hidden=true;
var resumeMarkup=`
  <header class="sheet-head">
    <h2 id="rs-title">张耕</h2>
    <p>产品体验设计师｜10 年经验</p>
    <ul class="hero-tags"><li>AI Agent 体验</li><li>复杂 B 端业务</li><li>设计系统</li><li>AI Coding</li></ul>
    <p class="sheet-contact"><button class="sheet-copy" type="button" data-resume-copy="coda0415" data-copy-label="微信" data-copy-hint="点击复制" aria-label="复制微信号">微信 coda0415</button> ｜ <button class="sheet-copy" type="button" data-resume-copy="sheldorzhang@gmail.com" data-copy-label="邮箱" data-copy-hint="点击复制" aria-label="复制邮箱">sheldorzhang@gmail.com</button></p>
    <img class="sheet-photo" src="assets/resume-photo.jpg?v=20261116-v1" alt="张耕职业头像" width="600" height="600" loading="lazy" decoding="async">
  </header>

  <section class="sheet-sec sheet-core"><h3>核心能力</h3><ul><li><b>复杂业务与 AI-native 产品设计</b>：具备企业级营销、B2B 行业协作及零售电商产品经验。擅长从用户目标与真实业务场景出发，重构复杂任务流程及人机分工。客户交付中，借助 Agent 的营销策划由传统 2–3 天缩短至约 10 分钟产出可执行方案。</li><li><b>Agent 交互与人机协作设计</b>：负责企业级 AI 产品（MAGIC AI）的配置与任务协作体验，围绕任务发起、执行协作和结果验收设计交互机制并推动落地，兼顾执行效率、用户控制和业务可靠性。客户交付验收中，圈人及活动编排准确率均超过 90%。</li><li><b>设计系统与工程落地</b>：主导营销云 AI 体验设计体系建设，将交互模式、组件规范和页面范式沉淀为 AI 可理解和复用的设计资产；结合 Figma、Cursor 与 AI Coding 交付可运行原型，并实践由设计师修复前端问题、提交研发审核的协作方式。单次设计交付周期由 2–3 天缩短至 5–7 小时，沟通与走查耗时由 120 分钟缩短至 20 分钟。</li></ul></section>
  <section class="sheet-sec"><h3>工作经历</h3>
    <p>负责企业级 AI、B2B 行业协作及零售电商产品的体验设计，覆盖营销云 MAGIC AI、企点商通、云 Mall、鹅享团等产品线。</p>
    <div class="sheet-row"><h4>腾讯｜CSIG｜产品设计师</h4><span>2021.04 – 至今</span></div>
  </section>
    <div class="sheet-row"><h4>喜马拉雅｜主播生态事业部｜UI 设计师</h4><span>2018.08 – 2021.04</span></div>
    <ul><li><b>平台重构</b>：版权方、主播和运营在节目制作中协作链路长。主导有声节目制作平台重构，理顺三方协作流程；撮合效率提升 20%，运营成本降低 70%，支撑 2000+ 节目上线。</li><li><b>设计规范与分享裂变</b>：统一多端设计规范并推进代码化，组件复用率提升 40%；负责「万物声」有声明信片的分享裂变设计，任务完成率提升 50%。</li></ul>
    <div class="sheet-row"><h4>言几又（书店）｜UI 设计师</h4><span>2017.06 – 2018.08</span></div>
    <ul><li><b>新零售与品牌体验</b>：负责品牌电商小程序、会员体系及 O2O 消费体验设计，建立门店运营物料规范，推动线上线下品牌体验统一。</li></ul>
    <div class="sheet-row"><h4>AIUX 设计咨询公司｜产品设计师</h4><span>2016.09 – 2017.06</span></div>
    <ul><li><b>多客户产品设计</b>：参与鲁大师、PandaPia、芒果云等客户项目，负责产品体验方案与高保真原型设计，协同推进方案评审与交付。</li></ul>
  </section>
  <section class="sheet-sec"><h3>核心项目</h3>
    <div class="sheet-row"><h4>01｜腾讯企点营销云 MAGIC AI</h4><span>2024 – 至今</span></div>
    <p>面向企业增长的 AI Agent 营销平台，结合 Agent 能力与 CDP（客户数据）、MA（营销自动化）等业务系统，运营以营销目标发起任务，由 Agent 生成可直接使用的业务产物。负责 Agent 基础配置与任务协作体验，主导营销云 AI 设计体系。</p>
    <ul><li><b>AI-native 任务体验重构</b>：围绕传统营销 SaaS 跨模块配置、复杂业务决策和多角色协作问题，参与重构目标驱动的营销任务体验，支持内嵌式 AI、Copilot 和 Multi-Agent 等场景的体验设计。</li><li><b>人机协作与成果应用</b>：围绕任务发起、理解与执行协作、结果验收与业务应用，设计意图澄清、计划确认、执行反馈、关键操作控制及任务成果工作区，帮助用户理解任务、核对生成结果并继续使用业务产物。</li><li><b>设计体系与工程交付</b>：主导 AI 体验设计体系建设，沉淀通用交互机制和可复用组件，结合 AI Coding、可运行原型及前端联调推动设计落地。</li><li><b>业务成果</b>：营销策划、圈人和活动编排能力已在鞋服行业客户的真实业务中应用，并通过客户交付验收；营销云产品线签约金额增速约 40%。</li></ul>
    <div class="sheet-row"><h4>02｜腾讯企点商通</h4><span>2023.04 – 至今</span></div>
    <p>基于 QQ B2B 生态的企业 IM，服务 800+ 金融机构、1.5 万+ 固收交易员。负责 IM 客户端和行业应用的体验设计。</p>
    <ul><li><b>IM 基础体验与易用性提升</b>：围绕企业 IM 的高频沟通场景，负责客户端基础交互、信息组织设计，优化消息沟通、操作效率与界面可读性，提升复杂行业环境下的产品易用性。</li><li><b>行业应用与任务效率提升</b>：针对业务沟通与交易操作分散的问题，将库存查询、询报价及业务计算能力整合至 IM 会话侧边栏行业应用，结合 NLP 识别减少系统切换和人工处理成本。</li><li><b>业务成果</b>：金融 OTC、电子采配、货代询报价场景中，原人工查询库存并按需报价约需 20 分钟，优化后商机回复最快约 30 秒。</li></ul>
    <div class="sheet-row"><h4>03｜腾讯云 Mall / 鹅享团</h4><span>2021 – 2022</span></div>
    <p>零售电商 SaaS 与社群团购，服务沃尔玛等 KA 客户。负责商家端营销配置和消费端交易链路的体验设计。</p>
    <ul><li><b>商家运营与营销配置效率</b>：针对营销活动规则复杂、配置步骤繁琐等问题，优化营销模板、规则配置、条件校验与活动预览，降低商家运营配置成本，提高活动管理的稳定性与效率。</li><li><b>消费端购买决策与转化体验</b>：围绕优惠规则理解、活动参与和购买决策，优化商品、会员成长、促销及社群团购体验，清晰表达优惠条件与用户收益，提升营销参与和购买转化。</li><li><b>业务成果</b>：营销转化链路（浏览 → 加购 → 下单）转化率提升 28%；鹅享团上线 6 个月内 GMV 突破 200 万+。</li></ul>
    <div class="sheet-row"><h4>04｜企点营销云 企微互动 SCRM</h4><span>2022</span></div>
    <ul><li><b>0–1 MVP 与跨端客户运营设计</b>：围绕导购获客、客户管理及营销触达，设计后台运营配置与企微侧边栏的协作体验，推动 MVP 落地，支持 6+ 付费客户使用。</li></ul>
  </section>
  <section class="sheet-sec"><h3>实践与探索</h3>
    <div class="sheet-row"><h4>Be4D｜设计系统 × AI Coding</h4></div>
    <p>探索 AI Coding 前置设计约束的方法，将 Design Token、组件规范与交互范式应用于可运行原型，研究标准化复用与创造性探索之间的平衡。</p>
    <div class="sheet-row"><h4>Intent UI｜意图驱动的生成式体验</h4></div>
    <p>探索自然语言、动态表单与结构化产物的组合方式，构建 Generative UI 概念原型，研究用户意图变化下的动态界面与人机协作体验。</p>
  </section>
  <section class="sheet-sec"><h3>技能与工具</h3>
    <ul><li><b>产品与体验设计</b>：UX Research、Information Architecture、User Journey、Service Blueprint、Usability Testing。</li><li><b>AI 产品体验</b>：AI Agent UX、Multi-Agent、Human-AI Interaction、Generative UI、Human-in-the-loop、Agent Workflow。</li><li><b>设计系统与实现</b>：Design Systems、Design Tokens、Figma、TDesign、AI Coding（Cursor、CodeBuddy）；React、Next.js、Tailwind CSS（可运行原型与工程协作）。</li></ul>
  </section>
  <section class="sheet-sec"><h3>荣誉与教育</h3>
    <p>腾讯 OUTSTANDING CONTRIBUTOR｜2022 年上半年</p>
    <p>成都理工大学｜工业设计｜本科（学士）｜2016</p>
  </section>
`;
var resumeMarkupEn=`
  <header class="sheet-head">
    <h2 id="rs-title">Geng Zhang</h2>
    <p>Product Experience Designer | 10 Years of Experience</p>
    <ul class="hero-tags"><li>AI Agent Experience</li><li>Complex B2B Experiences</li><li>Design Systems</li><li>AI Coding</li></ul>
    <p class="sheet-contact"><button class="sheet-copy" type="button" data-resume-copy="coda0415" data-copy-label="WeChat" data-copy-hint="Click to copy" aria-label="Copy WeChat ID">WeChat coda0415</button> | <button class="sheet-copy" type="button" data-resume-copy="sheldorzhang@gmail.com" data-copy-label="Email" data-copy-hint="Click to copy" aria-label="Copy email">sheldorzhang@gmail.com</button></p>
    <img class="sheet-photo" src="assets/resume-photo.jpg?v=20261116-v1" alt="Portrait of Geng Zhang" width="600" height="600" loading="lazy" decoding="async">
  </header>

  <section class="sheet-sec sheet-core"><h3>Core Capabilities</h3><ul>
    <li><b>Complex Business and AI-native Product Design</b>: Experience in enterprise marketing, B2B industry collaboration, and retail e-commerce. Starts from user goals and real business scenarios to reshape complex task flows and the division of work between people and AI. In client delivery, Agent-assisted campaign planning moved from 2–3 days to about 10 minutes for an executable plan.</li>
    <li><b>Agent Interaction and Human-AI Collaboration Design</b>: Owns the configuration and task collaboration experience of an enterprise AI product (MAGIC AI). Designs interaction mechanisms across task initiation, execution collaboration, and result acceptance, and drives them into the product, balancing execution efficiency, user control, and business reliability. In client acceptance, audience selection and campaign orchestration accuracy both exceed 90%.</li>
    <li><b>Design Systems and Engineering Delivery</b>: Leads the Marketing Cloud AI design system, turning interaction patterns, component specifications, and page patterns into design assets that AI can understand and reuse. Delivers runnable prototypes with Figma, Cursor, and AI Coding, and practices a collaboration model where designers fix front-end issues and submit them for engineering review. Single design delivery cycle shortened from 2–3 days to 5–7 hours; communication and review time reduced from 120 minutes to 20 minutes.</li>
  </ul></section>

  <section class="sheet-sec"><h3>Experience</h3>
    <div class="sheet-row"><h4>Tencent | CSIG | Product Experience Designer</h4><span>Apr 2021 – Present</span></div>
    <p>Responsible for experience design for enterprise AI, B2B industry collaboration, and retail e-commerce products, covering Marketing Cloud MAGIC AI, Qidian IM, Cloud Mall, and Ezhantuan.</p>
    <div class="sheet-row"><h4>Ximalaya | Anchor Ecosystem Division | UI Designer</h4><span>Aug 2018 – Apr 2021</span></div>
    <ul><li><b>Platform Rebuild</b>: Led the rebuild of the audio content production platform and streamlined the three-party workflow across rights holders, anchors, and operations. Matching efficiency up 20%, operating cost down 70%, supporting 2,000+ programs.</li><li><b>Design System and Sharing Growth</b>: Unified multi-platform design specifications and pushed them into code; component reuse up 40%. Designed the sharing mechanism for "Wan Wu Sheng" audio postcards; task completion up 50%.</li></ul>
    <div class="sheet-row"><h4>Yanjiyou (Bookstore) | UI Designer</h4><span>Jun 2017 – Aug 2018</span></div>
    <ul><li><b>New Retail and Brand Experience</b>: Designed the brand e-commerce mini program, membership system, and O2O experience, and established store operation material guidelines.</li></ul>
    <div class="sheet-row"><h4>AIUX Design Consultancy | Product Designer</h4><span>Sep 2016 – Jun 2017</span></div>
    <ul><li><b>Multi-client Product Design</b>: Worked on projects for LuDashi, PandaPia, and Mango Cloud, delivering experience proposals and high-fidelity prototypes.</li></ul>
  </section>

  <section class="sheet-sec"><h3>Selected Projects</h3>
    <div class="sheet-row"><h4>01 | Tencent Qidian Marketing Cloud MAGIC AI</h4><span>2024 – Present</span></div>
    <p>An AI Agent marketing platform for enterprise growth. Operators launch tasks from marketing goals, and the Agent produces business outputs they can use directly. Owned Agent foundational setup and task collaboration, and led the Marketing Cloud AI design system.</p>
    <ul><li><b>AI-native Task Experience Redesign</b>: Reworked goal-driven marketing task experiences around cross-module configuration in traditional marketing SaaS, complex business decisions, and multi-role collaboration; covered embedded AI, Copilot, and Multi-Agent scenarios.</li><li><b>Human-AI Collaboration and Outcome Use</b>: Designed intent clarification, plan confirmation, execution feedback, key-action controls, and a task output workspace, so users understand tasks, verify generated results, and keep using the business outputs.</li><li><b>Design System and Engineering Delivery</b>: Built reusable interaction mechanisms and components, and drove delivery with AI Coding, runnable prototypes, and front-end integration.</li><li><b>Business Results</b>: Campaign planning, audience selection, and campaign orchestration capabilities are in use with footwear and apparel clients and passed client acceptance. Marketing Cloud product line contract value growth of about 40%.</li></ul>
    <div class="sheet-row"><h4>02 | Tencent Qidian IM</h4><span>Apr 2023 – Present</span></div>
    <p>An enterprise IM built on the QQ B2B ecosystem, serving 800+ financial institutions and 15,000+ fixed-income traders. Responsible for the IM client and industry app experience.</p>
    <ul><li><b>IM Core Experience and Usability</b>: Improved client interaction, information organization, message efficiency, and readability for high-frequency communication in complex industry settings.</li><li><b>Industry Apps and Task Efficiency</b>: Integrated inventory lookup, quoting, and business calculation into an IM sidebar app, using NLP to reduce system switching and manual work.</li><li><b>Business Results</b>: In OTC, electronics procurement, and freight quoting, inventory checks and quotes that took about 20 minutes manually now reach the customer in about 30 seconds at best.</li></ul>
    <div class="sheet-row"><h4>03 | Tencent Cloud Mall / Ezhantuan</h4><span>2021 – 2022</span></div>
    <p>Retail e-commerce SaaS and social group buying, serving KA clients including Walmart. Responsible for merchant-side campaign configuration and consumer-side transaction flow.</p>
    <ul><li><b>Merchant Operations and Campaign Setup</b>: Reduced the cost and complexity of merchant campaign setup through templates, rule configuration, validation, and campaign preview.</li><li><b>Consumer Decision and Conversion</b>: Made offer conditions and benefits clear before purchase, improving participation and conversion across product, membership, promotion, and group buying flows.</li><li><b>Business Results</b>: Conversion from browse to add-to-cart to order up 28%; Ezhantuan GMV surpassed 2 million+ within six months of launch.</li></ul>
    <div class="sheet-row"><h4>04 | Qidian Marketing Cloud WeCom Engagement SCRM</h4><span>2022</span></div>
    <ul><li><b>0–1 MVP and Cross-platform Client Operations</b>: Designed the admin configuration and WeCom sidebar collaboration for shopping guide acquisition, customer management, and marketing outreach. Drove the MVP to launch, with 6+ paying clients.</li></ul>
  </section>

  <section class="sheet-sec"><h3>Practice and Exploration</h3>
    <div class="sheet-row"><h4>Be4D | Design Systems × AI Coding</h4></div>
    <p>Exploring how to bring design constraints earlier into AI coding, applying Design Tokens, component specifications, and interaction patterns to runnable prototypes, and balancing standardized reuse with creative exploration.</p>
    <div class="sheet-row"><h4>Intent UI | Intent-driven Generative Experiences</h4></div>
    <p>Exploring how natural language, dynamic forms, and structured outputs combine. Built a Generative UI concept prototype to study dynamic interfaces and human-AI collaboration as user intent changes.</p>
  </section>

  <section class="sheet-sec"><h3>Skills and Tools</h3><ul><li><b>Product and Experience Design</b>: UX Research, Information Architecture, User Journey, Service Blueprint, Usability Testing.</li><li><b>AI Product Experience</b>: AI Agent UX, Multi-Agent, Human-AI Interaction, Generative UI, Human-in-the-loop, Agent Workflow.</li><li><b>Design Systems and Implementation</b>: Design Systems, Design Tokens, Figma, TDesign, AI Coding (Cursor, CodeBuddy); React, Next.js, Tailwind CSS (runnable prototypes and engineering collaboration).</li></ul></section>

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
