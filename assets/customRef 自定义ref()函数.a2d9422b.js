import{u as a,o as n,c as e,d as l}from"./index.c061a822.js";const t={class:"markdown-body"},c=l(`<h4 id="customref-%E8%87%AA%E5%AE%9A%E4%B9%89ref()%E5%87%BD%E6%95%B0" tabindex="-1"><a class="header-anchor" href="#customref-%E8%87%AA%E5%AE%9A%E4%B9%89ref()%E5%87%BD%E6%95%B0"><span aria-hidden="true">#</span></a> customRef \u81EA\u5B9A\u4E49ref()\u51FD\u6570</h4><hr><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { customRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">myRef</span>(<span class="hljs-params">value</span>){
\xA0\xA0<span class="hljs-keyword">let</span> timer
\xA0\xA0<span class="hljs-keyword">return</span> <span class="hljs-title function_">customRef</span>(<span class="hljs-function">(<span class="hljs-params">track, tragger</span>)=&gt;</span>{
\xA0\xA0\xA0\xA0<span class="hljs-keyword">return</span>{
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-title function_">get</span>(<span class="hljs-params"></span>){
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;myRef\u89E6\u53D1get&quot;</span>)
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-title function_">track</span>() <span class="hljs-comment">//\u8FFD\u8E2A\u6570\u636E\u53D8\u5316</span>
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-keyword">return</span> value
\xA0\xA0\xA0\xA0\xA0\xA0},
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-title function_">set</span>(<span class="hljs-params">newval</span>){
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;myRef\u89E6\u53D1set&quot;</span>,newval)
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-comment">//\u5EF6\u8FDF1s\u66F4\u65B0 \u9632\u6296</span>
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-built_in">clearTimeout</span>(timer)
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0value = newval
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-title function_">tragger</span>()\xA0\xA0<span class="hljs-comment">//\u901A\u77E5vue\u89E3\u6790\u6A21\u677F</span>
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}, <span class="hljs-number">1000</span>);
\xA0\xA0\xA0\xA0\xA0\xA0},
\xA0\xA0\xA0\xA0}
\xA0\xA0})
}
</code></pre>`,3),p=[c],j=[],f={__name:"customRef \u81EA\u5B9A\u4E49ref()\u51FD\u6570",setup(o,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(i,u)=>(n(),e("div",t,p))}};export{f as default,j as meta};
