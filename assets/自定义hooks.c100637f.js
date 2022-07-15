import{u as a,o as n,c as l,d as p}from"./index.fa8f2c01.js";const e={class:"markdown-body"},o=p(`<h4 id="%E8%87%AA%E5%AE%9A%E4%B9%89hooks" tabindex="-1"><a class="header-anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89hooks"><span aria-hidden="true">#</span></a> \u81EA\u5B9A\u4E49hooks</h4><hr><ul><li>\u5C06\u72EC\u7ACB\u7684\u529F\u80FD\u62BD\u79BB\u51FA\u6765\uFF0C\u4F7F\u4EE3\u7801\u66F4\u7B80\u5355</li><li>hooks\u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F7F\u7528\u89E3\u6784\u7684\u65B9\u5F0F\u63A5\u6536\u6570\u636E</li></ul><p>\u65B0\u5EFA useXxx.js</p><pre><code class="hljs language-js"><span class="hljs-comment">// \u67D0\u4E2A\u529F\u80FD\u7684hook</span>
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">useXxx</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">fn</span>(<span class="hljs-params"></span>){}
}
<span class="hljs-comment">//\u4F7F\u7528setup\u51FD\u6570</span>
<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
\xA0 <span class="hljs-comment">//\u4EE3\u7801</span>
\xA0 <span class="hljs-keyword">let</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
\xA0 <span class="hljs-keyword">function</span> <span class="hljs-title function_">fn</span>(<span class="hljs-params"></span>){
\xA0 \xA0 ...
\xA0 }
\xA0 <span class="hljs-keyword">return</span> {
    fn,
    value
  }
}
</code></pre><p>\u4F7F\u7528</p><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { useXxx } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;&#39;</span>
<span class="hljs-keyword">const</span> { value, fn } = <span class="hljs-title function_">useXxx</span>()
</code></pre>`,7),c=[o],u=[],m={__name:"\u81EA\u5B9A\u4E49hooks",setup(t,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(j,d)=>(n(),l("div",e,c))}};export{m as default,u as meta};
