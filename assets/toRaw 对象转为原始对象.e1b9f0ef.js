import{u as a,o as n,c as t,d as e}from"./index.fa8f2c01.js";const o={class:"markdown-body"},c=e(`<h4 id="toraw-%E5%AF%B9%E8%B1%A1%E8%BD%AC%E4%B8%BA%E5%8E%9F%E5%A7%8B%E5%AF%B9%E8%B1%A1" tabindex="-1"><a class="header-anchor" href="#toraw-%E5%AF%B9%E8%B1%A1%E8%BD%AC%E4%B8%BA%E5%8E%9F%E5%A7%8B%E5%AF%B9%E8%B1%A1"><span aria-hidden="true">#</span></a> toRaw \u5BF9\u8C61\u8F6C\u4E3A\u539F\u59CB\u5BF9\u8C61</h4><hr><ul><li>\u7ECF\u8FC7reactive\u5305\u88C5\u8FC7\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u8F6C\u4E3A\u539F\u59CB\u7684obj\uFF0C\u53EF\u7528\u4E8E\u63D0\u4EA4\u63A5\u53E3\u6570\u636E</li></ul><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { reactive, toRaw } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
...
<span class="hljs-keyword">let</span> obj = <span class="hljs-title function_">reactive</span>({
\xA0 <span class="hljs-attr">id</span>:<span class="hljs-number">1</span>
})\xA0
<span class="hljs-comment">//\u6B64\u65F6\u7684obj\u4E0D\u662F\u7EAF\u7CB9\u7684\u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2Aproxy\u5BF9\u8C61</span>
<span class="hljs-comment">//\u4F7F\u7528toRaw\u53D8\u6210\u666E\u901A\u5BF9\u8C61</span>
obj = <span class="hljs-title function_">toRaw</span>(obj)
</code></pre>`,4),r=[c],m=[],B={__name:"toRaw \u5BF9\u8C61\u8F6C\u4E3A\u539F\u59CB\u5BF9\u8C61",setup(l,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(d,i)=>(n(),t("div",o,r))}};export{B as default,m as meta};
