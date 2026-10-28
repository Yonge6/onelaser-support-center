/* Customer chrome only: original technical titles and article bodies are retained. */
(() => {
  'use strict';
  const base=new URL('../',document.currentScript.src).pathname.replace(/\/$/,'');
  const publicMode=document.querySelector('meta[name="onelaser-mode"]')?.content==='public';
  let language='en';
  try{language=new URLSearchParams(location.search).get('lang')||localStorage.getItem('onelaser-support-language')||(navigator.language.startsWith('zh')?'zh':'en');}catch{}
  if(!['zh','en'].includes(language))language='en';
  const zh={
    'SUPPORT':'支持','CENTER':'中心','All guides':'全部指南','Downloads':'下载中心','Community':'用户社区','Contact support':'联系支持',
    'Main navigation':'主导航','Footer':'页脚导航','Search documentation':'搜索技术文档','Search your machine, a question, or an issue…':'搜索机型、问题或关键词…','Find a guide':'搜索指南',
    'Local preview · Source content under review':'本机预览 · 来源内容待审核','Public preview · Source content under review':'公开预览 · 来源内容待审核','Review workspace ↗':'进入审核台 ↗','GitHub source ↗':'GitHub 源码 ↗',
    'OneLaser knowledge center':'OneLaser 知识中心','The right guide.':'找到对的指南。','Right when you':'在需要时，','need it.':'就在这里。',
    'Get to know your machine. Work through an issue. Find the details that keep your next project moving.':'了解你的设备，找到问题的解答，让下一个创作顺利开始。',
    'Made for makers. Built for clarity.':'为创作者而生，让每一步更清楚。','POPULAR SEARCHES':'常用搜索','Firmware update':'固件更新','Air assist':'气辅系统','Autofocus':'自动对焦',
    'Start with the essentials':'从基础开始','Setup and getting started':'安装与入门','Work through an issue':'解决使用问题','Find a troubleshooting guide':'查找故障排查指南','Get the right resources':'找到所需资源','Software, firmware and manuals':'软件、固件与说明书',
    'Start with your machine':'从你的机型开始','Built for your OneLaser.':'为你的 OneLaser 而准备。','All documentation':'全部文档',
    'Your desktop workshop, documented.':'桌面工作室所需的使用指南。','Guides for your next big project.':'为下一个创作准备好指南。','From your first setup to daily work.':'从首次安装到日常使用。','Find your way around a new perspective.':'从新的视角了解你的设备。',
    'Software & firmware':'软件与固件','Accessories':'配件','Materials':'材料','General help':'通用帮助',
    'A few useful starting points':'从这些指南开始','From question to next step.':'从问题，到下一步。',
    'A little help goes a long way.':'有需要，我们来帮你。','Can’t find what you need? Let’s get you to the right people.':'没有找到需要的内容？联系支持团队。','Talk to OneLaser':'联系 OneLaser','Documentation':'技术文档','Visit OneLaser ↗':'访问 OneLaser 官网 ↗','ONE LASER. ENDLESS POSSIBILITIES.':'一束激光，无限可能。',
    'Support Center':'支持中心','Getting started':'快速入门','Troubleshooting':'故障排查','Software & downloads':'软件与下载','Guides & everyday use':'使用指南','Guide':'指南',
    'Your machine. Your documentation.':'为你的机型找到文档','One place for the essentials':'常用资源，都在这里','OneLaser documentation':'OneLaser 技术文档','Software, firmware & manuals.':'软件、固件与说明书。','Find your next step.':'找到下一步。',
    'Find resource pages for your model. Check model and version compatibility in the original guide before using a download.':'查找对应机型的资源。下载前请在原文中核对机型和版本兼容性。','Search the documentation or choose a product family to narrow things down.':'搜索技术文档，或选择产品系列缩小范围。',
    'All products':'全部产品','All topics':'全部主题','Original Wiki sources · review in progress':'保留 Wiki 原始来源 · 内容审核中',
    'No matching guides yet.':'暂未找到匹配指南。','Try a shorter phrase, a model name, or another topic.':'尝试更短的关键词、机型名称或其他主题。','Browse all guides':'浏览全部指南',
    'Original Wiki ↗':'查看 Wiki 原文 ↗','PREVIEW · Existing Wiki content, awaiting review. Check model and firmware applicability in the original source.':'预览内容仍待审核。请在原文核对适用机型与固件版本。','View source':'核对来源','On this page':'本页目录','Still need help? Contact support ↗':'仍需帮助？联系支持 ↗',
    'Technical text is shown in the English original. Chinese translations will be added after review.':'技术正文保留英文原文；中文译稿将逐篇审核后补充。','Interface language':'界面语言','Open navigation':'展开导航','Close navigation':'收起导航','Skip to content':'跳到正文',
    'This page couldn’t be opened.':'暂时无法打开此页面。','Please return to the documentation and try again.':'请返回文档中心后重试。','Back to Support Center':'返回支持中心','Local preview unavailable.':'暂时无法打开预览。','Please check that the local service is running.':'请确认本机服务正在运行。',
  };
  function translate(value){
    if(language!=='zh')return value;
    const clean=value.trim();let result=zh[clean];
    if(!result){
      let m;
      if((m=clean.match(/^Explore all (\d+) guides$/)))result=`浏览全部 ${m[1]} 篇指南`;
      else if((m=clean.match(/^(\d+) GUIDES$/)))result=`${m[1]} 篇指南`;
      else if((m=clean.match(/^(\d+) min read$/)))result=`约 ${m[1]} 分钟阅读`;
      else if((m=clean.match(/^(\d+) guides(?: matching “(.*)”)?$/)))result=m[2]?`找到 ${m[1]} 篇与“${m[2]}”相关的指南`:`${m[1]} 篇指南`;
      else if((m=clean.match(/^Browse (\d+) source guides for (.*), from everyday use to troubleshooting\.$/)))result=`浏览 ${m[2]} 的 ${m[1]} 篇原始指南，涵盖日常使用与故障排查。`;
      else if((m=clean.match(/^Source updated (.*)$/)))result=`来源更新：${m[1]}`;
      else if((m=clean.match(/^← All (.*) guides$/)))result=`← ${m[1]} 全部指南`;
      else if((m=clean.match(/^← Back to (.*)$/)))result=`← 返回 ${m[1]}`;
      else if((m=clean.match(/^(.*) documentation$/i)))result=`${zh[m[1]]||m[1]} 技术文档`;
      else if(clean.includes(' · '))result=clean.split(' · ').map(x=>zh[x]||x).join(' · ');
    }
    return result?value.replace(clean,result):value;
  }
  const path=value=>value.startsWith('/')&&!value.startsWith('//')?base+value:value;
  function markup(html,admin=false){
    const t=document.createElement('template');t.innerHTML=html;
    for(const el of t.content.querySelectorAll('[href],[src]'))for(const attr of ['href','src']){const v=el.getAttribute(attr);if(v)el.setAttribute(attr,path(v));}
    if(!admin){
      const walker=document.createTreeWalker(t.content,NodeFilter.SHOW_TEXT);let node;
      while((node=walker.nextNode()))if(!node.parentElement?.closest('[data-source-content],.article-body,.guide-card h3,.article-main>h1,.toc a'))node.textContent=translate(node.textContent);
      for(const el of t.content.querySelectorAll('[placeholder],[aria-label]'))for(const a of ['placeholder','aria-label'])if(el.hasAttribute(a))el.setAttribute(a,translate(el.getAttribute(a)));
      document.documentElement.lang=language==='zh'?'zh-CN':'en';
      const skip=document.querySelector('.skip-link');if(skip)skip.textContent=translate('Skip to content');
    }
    return t.innerHTML;
  }
  function setLanguage(next){
    if(!['zh','en'].includes(next))return;language=next;
    try{localStorage.setItem('onelaser-support-language',next);}catch{}
    const u=new URL(location.href);u.searchParams.set('lang',next);history.replaceState(null,'',u);document.documentElement.lang=next==='zh'?'zh-CN':'en';
  }
  const searchQuery=q=>q.replace(/自动对焦/g,'autofocus').replace(/固件/g,'firmware').replace(/气辅/g,'air assist').replace(/连接/g,'connect');
  let searchIndex;
  async function publicApi(raw){
    const u=new URL(raw,location.origin);let file;
    if(u.pathname==='/api/library')file='/data/library.json';
    else if(/^\/api\/articles\/en-\d+$/.test(u.pathname))file='/data/articles/'+u.pathname.split('/').pop()+'.json';
    else if(u.pathname==='/api/search'){
      searchIndex ||= fetch(path('/data/search-index.json')).then(r=>{if(!r.ok)throw new Error('search_unavailable');return r.json();});
      const rows=await searchIndex,terms=searchQuery(u.searchParams.get('q')||'').toLowerCase().split(/\s+/).filter(Boolean).slice(0,10),f=u.searchParams.get('family'),topic=u.searchParams.get('topic');
      return {items:rows.filter(x=>(!f||x.family===f)&&(!topic||x.topic===topic)&&terms.every(w=>(x.title+' '+x.body_text).toLowerCase().includes(w))).map(x=>({...x,_score:terms.reduce((n,w)=>n+(x.title.toLowerCase().includes(w)?10:0)+(x.body_text.toLowerCase().split(w).length-1),0)})).sort((a,b)=>b._score-a._score||a.title.localeCompare(b.title)).map(({body_text,_score,...rest})=>rest)};
    }else throw new Error('route_not_in_public_preview');
    const r=await fetch(path(file));if(!r.ok)throw new Error('content_unavailable');return r.json();
  }
  window.OneLaserView={get language(){return language;},publicMode,path,markup,setLanguage,searchQuery,publicApi};
})();
