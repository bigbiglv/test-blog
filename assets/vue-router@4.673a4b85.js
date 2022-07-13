import{u as a,o as n,c as e,d as t}from"./index.c061a822.js";const l={class:"markdown-body"},p=t(`<h4 id="vue-router%404%EF%BC%88%E8%B7%AF%E7%94%B1%EF%BC%89" tabindex="-1"><a class="header-anchor" href="#vue-router%404%EF%BC%88%E8%B7%AF%E7%94%B1%EF%BC%89"><span aria-hidden="true">#</span></a> vue-router@4\uFF08\u8DEF\u7531\uFF09</h4><hr><h5 id="%E5%AE%89%E8%A3%85" tabindex="-1"><a class="header-anchor" href="#%E5%AE%89%E8%A3%85"><span aria-hidden="true">#</span></a> \u5B89\u88C5</h5><pre><code class="hljs language-npm">npm i vue-router@4
</code></pre><h5 id="%E5%BC%95%E5%85%A5" tabindex="-1"><a class="header-anchor" href="#%E5%BC%95%E5%85%A5"><span aria-hidden="true">#</span></a> \u5F15\u5165</h5><p><code>createWebHashHistory</code>\u548C<code>createWebHistory</code>\u5BF9\u5E94<code>hash</code>\u548C<code>history</code>\u6A21\u5F0F \u65B0\u5EFA\u8DEF\u7531\u8868 src/router/index.ts</p><pre><code class="hljs language-ts"><span class="hljs-comment">//\u5F15\u5165\u8DEF\u7531</span>
<span class="hljs-keyword">import</span> { createRouter, createWebHashHistory,<span class="hljs-title class_">RouteRecordRaw</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>
<span class="hljs-comment">//\u5F15\u5165\u9996\u9875\u548Cuser\u9875</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Home</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../views/Home/index.vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">User</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../views/User/index.vue&#39;</span>
<span class="hljs-keyword">const</span> routes : <span class="hljs-title class_">Array</span>&lt;<span class="hljs-title class_">RouteRecordRaw</span>&gt; = [
\xA0 {
\xA0 \xA0 <span class="hljs-attr">path</span>:<span class="hljs-string">&#39;/&#39;</span>,
\xA0 \xA0 <span class="hljs-attr">name</span>:<span class="hljs-string">&#39;home&#39;</span>,
\xA0 \xA0 <span class="hljs-attr">meta</span>:{
\xA0 \xA0 \xA0 <span class="hljs-attr">keepAlive</span>:<span class="hljs-literal">true</span>,
\xA0 \xA0 \xA0 <span class="hljs-attr">tabbar</span>:<span class="hljs-literal">true</span>
\xA0 \xA0 },
\xA0 \xA0 <span class="hljs-attr">component</span>:<span class="hljs-title class_">Home</span>
\xA0 },
\xA0 {
\xA0 \xA0 <span class="hljs-attr">path</span>:<span class="hljs-string">&#39;/user&#39;</span>,
\xA0 \xA0 <span class="hljs-attr">name</span>:<span class="hljs-string">&#39;user&#39;</span>,
\xA0 \xA0 <span class="hljs-attr">meta</span>:{
\xA0 \xA0 \xA0 <span class="hljs-attr">keepAlive</span>:<span class="hljs-literal">true</span>,
\xA0 \xA0 \xA0 <span class="hljs-attr">tabbar</span>:<span class="hljs-literal">true</span>
\xA0 \xA0 },
\xA0 \xA0 <span class="hljs-attr">component</span>:<span class="hljs-title class_">User</span>
\xA0 }
]
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">createRouter</span>({
\xA0 <span class="hljs-attr">history</span>: <span class="hljs-title function_">createWebHashHistory</span>(),
\xA0 routes
})
</code></pre><p>\u5728main.ts\u4E2D\u4F7F\u7528</p><pre><code class="hljs language-ts"><span class="hljs-keyword">import</span> router <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./router&#39;</span>
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>)
app.<span class="hljs-title function_">use</span>(router)
app.<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#app&#39;</span>)
</code></pre><h5 id="%E7%BC%96%E7%A8%8B%E5%BC%8F%E8%B7%B3%E8%BD%AC" tabindex="-1"><a class="header-anchor" href="#%E7%BC%96%E7%A8%8B%E5%BC%8F%E8%B7%B3%E8%BD%AC"><span aria-hidden="true">#</span></a> \u7F16\u7A0B\u5F0F\u8DF3\u8F6C</h5><p>\u9875\u9762\u4E2D\u5F15\u5165\u5BF9\u5E94\u7684\u8DEF\u7531hooks <code>useRoute useRouter</code></p><pre><code class="hljs language-ts"><span class="hljs-keyword">import</span> { useRouter } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>
<span class="hljs-keyword">const</span> router = <span class="hljs-title function_">useRouter</span>()
router.<span class="hljs-title function_">push</span>(<span class="hljs-string">&#39;/home&#39;</span>)
</code></pre>`,12),r=[p],j=[],m={__name:"vue-router@4",setup(c,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(i,d)=>(n(),e("div",l,r))}};export{m as default,j as meta};
