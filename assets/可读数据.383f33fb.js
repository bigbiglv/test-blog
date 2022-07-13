import{u as a,o as n,c as l,d as e}from"./index.c061a822.js";const t={class:"markdown-body"},p=e(`<h4 id="%E6%95%B0%E6%8D%AE%E8%BD%AC%E4%B8%BA%E5%8F%AF%E8%AF%BB" tabindex="-1"><a class="header-anchor" href="#%E6%95%B0%E6%8D%AE%E8%BD%AC%E4%B8%BA%E5%8F%AF%E8%AF%BB"><span aria-hidden="true">#</span></a> \u6570\u636E\u8F6C\u4E3A\u53EF\u8BFB</h4><hr><h5 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly"><span aria-hidden="true">#</span></a> readonly</h5><ul><li>\u4FDD\u62A4\u6570\u636E\u4E0D\u88AB\u6539\u53D8</li></ul><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { ref, reactive, readonly } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
...
<span class="hljs-keyword">let</span> num = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
<span class="hljs-keyword">let</span> obj =\xA0<span class="hljs-title function_">reactive</span>({
\xA0 <span class="hljs-attr">a</span>:<span class="hljs-number">1</span>,
\xA0\xA0<span class="hljs-attr">b</span>:{
\xA0 \xA0 <span class="hljs-attr">bb</span>:<span class="hljs-number">2</span>
\xA0 }
})
<span class="hljs-comment">//\u63A7\u5236\u53F0\u4F1A\u663E\u793A\u65E0\u6CD5\u4FEE\u6539\u7684\u8B66\u544A</span>
<span class="hljs-title function_">readonly</span>(num)
<span class="hljs-title function_">readonly</span>(obj)
</code></pre><hr><h5 id="shallowreayonly" tabindex="-1"><a class="header-anchor" href="#shallowreayonly"><span aria-hidden="true">#</span></a> shallowReayonly</h5><ul><li>\u4FDD\u62A4\u5BF9\u8C61\u7C7B\u578B\u7684\u6570\u636E\u7B2C\u4E00\u5C42\uFF0C\u7B2C\u4E8C\u5C42\u4EE5\u53CA\u4E4B\u540E\u7684\u6570\u636E\u4F9D\u65E7\u53EF\u4EE5\u4FEE\u6539</li><li>\u57FA\u7840\u6570\u636E\u7C7B\u578B\u5EFA\u8BAE\u4F7F\u7528 <code>readyonly</code></li></ul><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { ref, reactive, shallowReadonly } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
...
<span class="hljs-keyword">let</span> num = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
<span class="hljs-keyword">let</span> obj = <span class="hljs-title function_">reactive</span>({
\xA0\xA0<span class="hljs-attr">a</span>:<span class="hljs-number">1</span>,
\xA0\xA0<span class="hljs-attr">b</span>:{
\xA0\xA0\xA0\xA0<span class="hljs-attr">bb</span>:<span class="hljs-number">2</span>
\xA0\xA0}
})
<span class="hljs-comment">//\u63A7\u5236\u53F0\u4F1A\u663E\u793A\u65E0\u6CD5\u4FEE\u6539\u7684\u8B66\u544A</span>
<span class="hljs-title function_">shallowReadonly</span>(num) <span class="hljs-comment">//\u6548\u679C\u548Creadonly\u4E00\u6837 \u5EFA\u8BAE\u4F7F\u7528readyonly</span>
<span class="hljs-title function_">shallowReadonly</span>(obj) <span class="hljs-comment">//\u53EA\u80FD\u4FEE\u6539 obj.b.bb</span>
</code></pre>`,9),c=[p],u=[],m={__name:"\u53EF\u8BFB\u6570\u636E",setup(o,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(d,i)=>(n(),l("div",t,c))}};export{m as default,u as meta};
