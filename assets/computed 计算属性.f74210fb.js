import{u as a,o as n,c as e,d as t}from"./index.fcfeccfd.js";const l={class:"markdown-body"},p=t(`<h4 id="computed-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="header-anchor" href="#computed-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7"><span aria-hidden="true">#</span></a> computed \u8BA1\u7B97\u5C5E\u6027</h4><hr><ul><li>\u901A\u8FC7hooks\u7684\u5F62\u5F0F\u5F15\u5165\uFF0C\u51FD\u6570\u76F4\u63A5\u8FD4\u56DE\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u503C</li></ul><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> {ref,computed} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">let</span> num2=<span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
<span class="hljs-keyword">let</span> num1=<span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
<span class="hljs-keyword">let</span> sum = <span class="hljs-title function_">computed</span>(<span class="hljs-function">()=&gt;</span>{
\xA0 <span class="hljs-keyword">return</span> num1.<span class="hljs-property">value</span>+num2.<span class="hljs-property">value</span>
})
<span class="hljs-keyword">let</span> sum=<span class="hljs-title function_">computed</span>({
  <span class="hljs-title function_">get</span>(<span class="hljs-params"></span>){},
  <span class="hljs-title function_">set</span>(<span class="hljs-params">value</span>){}
})
</code></pre>`,4),c=[p],i=[],j={__name:"computed \u8BA1\u7B97\u5C5E\u6027",setup(o,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(h,d)=>(n(),e("div",l,c))}};export{j as default,i as meta};
