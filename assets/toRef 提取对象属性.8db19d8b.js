import{u as a,o as n,c as e,d as t}from"./index.fcfeccfd.js";const l={class:"markdown-body"},o=t(`<h4 id="toref-%E6%8F%90%E5%8F%96%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="header-anchor" href="#toref-%E6%8F%90%E5%8F%96%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7"><span aria-hidden="true">#</span></a> toRef \u63D0\u53D6\u5BF9\u8C61\u5C5E\u6027</h4><hr><ul><li>\u4F7F\u7528 <code>toRef</code>\u53EF\u4EE5\u5C06\u5BF9\u8C61\u7684\u5C5E\u6027\u63D0\u53D6\u6210\u4E00\u4E2A\u53D8\u91CF\u5E76\u4FDD\u6301<strong>\u6570\u636E\u540C\u6B65</strong></li><li>\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF0C\u5BF9\u8C61\u540D\u548C\u5C5E\u6027\u540D</li><li>\u76F4\u63A5\u4F7F\u7528 <code>ref</code>\u7684\u8BDD\u4F1A\u4F7F\u5F97\u6570\u636E\u65E0\u6CD5\u540C\u6B65</li><li>\u53EF\u4EE5\u4F7F\u6A21\u677F\u8BED\u6CD5\u4E2D\u7684\u5BF9\u8C61\u6570\u636E\u53D8\u5F97\u66F4\u5E72\u51C0</li></ul><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { reactive,toRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">let</span> obj = <span class="hljs-title function_">reactive</span>({
\xA0\xA0<span class="hljs-attr">a</span>:<span class="hljs-number">1</span>,
\xA0\xA0<span class="hljs-attr">b</span>:<span class="hljs-number">2</span>,
\xA0\xA0<span class="hljs-attr">c</span>:<span class="hljs-number">3</span>
})
<span class="hljs-comment">// \u4F7F\u7528toRef\u5C06\u5C5E\u6027a\u63D0\u53D6\u6210\u4E00\u4E2A\u53D8\u91CF</span>
<span class="hljs-keyword">const</span> a = <span class="hljs-title function_">toRef</span>(obj, <span class="hljs-string">&#39;a&#39;</span>)

<span class="hljs-comment">// \uFF01\u5982\u679C\u5728setup\u51FD\u6570\u4E2D\u53EF\u4EE5\u914D\u5408\u5C55\u5F00\u8FD0\u7B97\u7B26</span>
<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span>{
       ...<span class="hljs-title function_">toRef</span>(obj)
    }
}
</code></pre>`,4),c=[o],f=[],m={__name:"toRef \u63D0\u53D6\u5BF9\u8C61\u5C5E\u6027",setup(p,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(i,d)=>(n(),e("div",l,c))}};export{m as default,f as meta};
