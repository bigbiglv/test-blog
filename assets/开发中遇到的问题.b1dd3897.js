import{u as a,o as n,c as t,d as l}from"./index.c061a822.js";const p={class:"markdown-body"},e=l(`<h4 id="%E5%BC%80%E5%8F%91%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98" tabindex="-1"><a class="header-anchor" href="#%E5%BC%80%E5%8F%91%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98"><span aria-hidden="true">#</span></a> \u5F00\u53D1\u4E2D\u9047\u5230\u7684\u95EE\u9898</h4><hr><h5 id="keepalive%E6%A0%87%E7%AD%BE%E9%97%AE%E9%A2%98" tabindex="-1"><a class="header-anchor" href="#keepalive%E6%A0%87%E7%AD%BE%E9%97%AE%E9%A2%98"><span aria-hidden="true">#</span></a> keepalive\u6807\u7B7E\u95EE\u9898</h5><ul><li>vue3<code>keep-alive</code>\u6807\u7B7E\u4F7F\u7528\u65B9\u5F0F\u6709\u70B9\u4E0D\u540C</li></ul><p>vue2</p><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">keep-alive</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">keep-alive</span>&gt;</span>
</code></pre><p>vue3</p><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;{ Component }&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">keep-alive</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">component</span> <span class="hljs-attr">:is</span>=<span class="hljs-string">&quot;Component&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">keep-alive</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
</code></pre><h4 id="router-view-%E6%A0%87%E7%AD%BE%E5%8F%98%E5%8C%96" tabindex="-1"><a class="header-anchor" href="#router-view-%E6%A0%87%E7%AD%BE%E5%8F%98%E5%8C%96"><span aria-hidden="true">#</span></a> router-view \u6807\u7B7E\u53D8\u5316</h4><p>\u4F7F\u7528<code>&lt;transtion/&gt;</code>\u548C<code>&lt;keep-alive/&gt;</code>\u5305\u88F9<code>&lt;router-view/&gt;</code>\u65F6\u73B0\u5728\u5FC5\u987B\u901A\u8FC7<code>v-solt</code>\u548C<code>&lt;component&gt;</code>\u8BA9\u5176\u5728<code>router-view</code>\u6807\u7B7E\u5185\u90E8\u4F7F\u7528</p><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;{ Component }&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">transition</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">keep-alive</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">component</span> <span class="hljs-attr">:is</span>=<span class="hljs-string">&quot;Component&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">keep-alive</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
</code></pre><h5 id="transition%E5%8A%A8%E7%94%BB%E5%A4%B1%E6%95%88%E9%97%AE%E9%A2%98" tabindex="-1"><a class="header-anchor" href="#transition%E5%8A%A8%E7%94%BB%E5%A4%B1%E6%95%88%E9%97%AE%E9%A2%98"><span aria-hidden="true">#</span></a> transition\u52A8\u753B\u5931\u6548\u95EE\u9898</h5><ul><li>view\u9875\u9762\u9700\u8981\u7528div\u628A\u6839\u5143\u7D20\u5305\u8D77\u6765</li></ul><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-view</span>&gt;</span>
\xA0 <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;{ Component, route }&quot;</span>&gt;</span>
\xA0 \xA0 <span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fade-slide&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;out-in&quot;</span> <span class="hljs-attr">appear</span>&gt;</span>
\xA0 \xA0 \xA0 <span class="hljs-tag">&lt;<span class="hljs-name">keep-alive</span>&gt;</span>
\xA0 \xA0 \xA0 \xA0 <span class="hljs-tag">&lt;<span class="hljs-name">component</span> <span class="hljs-attr">:is</span>=<span class="hljs-string">&quot;Component&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;route.fullPath&quot;</span>/&gt;</span>
\xA0 \xA0 \xA0 <span class="hljs-tag">&lt;/<span class="hljs-name">keep-alive</span>&gt;</span>
\xA0 \xA0 <span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
\xA0 <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
</code></pre><h5 id="404%E9%A1%B5%E9%9D%A2%E6%8D%95%E8%8E%B7" tabindex="-1"><a class="header-anchor" href="#404%E9%A1%B5%E9%9D%A2%E6%8D%95%E8%8E%B7"><span aria-hidden="true">#</span></a> 404\u9875\u9762\u6355\u83B7</h5><pre><code class="hljs language-js">{
  <span class="hljs-attr">path</span>: <span class="hljs-string">&quot;/:catchAll(.*)&quot;</span>,
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;NotFound&quot;</span>,
  <span class="hljs-attr">meta</span>:{
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u9519\u8BEF\u9875&#39;</span>,
    <span class="hljs-attr">isHidden</span>: <span class="hljs-literal">true</span>
  },
  <span class="hljs-attr">component</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">import</span>(<span class="hljs-string">&#39;@/view/NotFound.vue&#39;</span>)
},
</code></pre>`,16),c=[e],d=[],u={__name:"\u5F00\u53D1\u4E2D\u9047\u5230\u7684\u95EE\u9898",setup(o,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(i,j)=>(n(),t("div",p,c))}};export{u as default,d as meta};
