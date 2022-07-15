import{u as a,o as n,c as e,d as t}from"./index.fa8f2c01.js";const p={class:"markdown-body"},l=t(`<h4 id="setup()-%E5%92%8C-script-setup" tabindex="-1"><a class="header-anchor" href="#setup()-%E5%92%8C-script-setup"><span aria-hidden="true">#</span></a> setup() \u548C script setup</h4><hr><h4 id="script-setup" tabindex="-1"><a class="header-anchor" href="#script-setup"><span aria-hidden="true">#</span></a> script setup</h4><ul><li>\u6570\u636E\u548C\u65B9\u6CD5\u4E0D\u9700\u8981return\u51FA\u53BB</li><li>\u7EC4\u4EF6\u53EA\u9700\u8981\u5F15\u5165\u4E0D\u9700\u8981\u58F0\u660E</li><li>defineProps\u548CdefineEmits\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165</li></ul><hr><h4 id="setup()" tabindex="-1"><a class="header-anchor" href="#setup()"><span aria-hidden="true">#</span></a> setup()</h4><ul><li>\u4EE3\u7801\u90FD\u5199\u5728setup()\u91CC\u9762</li><li>\u6700\u540E\u628A\u6570\u636E\u548C\u65B9\u6CD5return\u51FA\u53BB</li><li>setup\u4E0D\u80FD\u4F7F\u7528async\u8BED\u6CD5\u7CD6 \u56E0\u4E3A\u6700\u540E\u8981\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF08\u5F02\u6B65\u7EC4\u4EF6\u548Csuspense\u53EF\u4EE5\u8FD4\u56DEpromise\uFF09</li><li>\u6CA1\u6709this</li></ul><pre><code class="hljs language-js"><span class="hljs-comment">//\u6309\u9700\u5F15\u5165\u65B9\u6CD5</span>
<span class="hljs-keyword">import</span> {ref,reactive} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
\xA0 <span class="hljs-attr">compontents</span>:{...},
\xA0 <span class="hljs-attr">props</span>:{...},
\xA0 <span class="hljs-attr">emits</span>:{...},
\xA0 ...
\xA0\xA0<span class="hljs-title function_">setup</span>(<span class="hljs-params">props,contetext</span>){
\xA0\xA0\xA0\xA0<span class="hljs-comment">//ref\u5B9A\u4E49\u57FA\u7840\u6570\u636E</span>
\xA0\xA0\xA0\xA0<span class="hljs-keyword">let</span> num = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
\xA0\xA0\xA0\xA0<span class="hljs-comment">//reactive\u5B9A\u4E49obj array \u5F15\u7528\u7C7B\u578B\u6570\u636E</span>
\xA0\xA0\xA0\xA0<span class="hljs-keyword">let</span> obj = <span class="hljs-title function_">reactive</span>({
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-attr">id</span>:<span class="hljs-number">1</span>
\xA0\xA0\xA0\xA0})

\xA0\xA0\xA0\xA0<span class="hljs-comment">//\u5B9A\u4E49\u65B9\u6CD5</span>
\xA0\xA0\xA0\xA0<span class="hljs-keyword">function</span> <span class="hljs-title function_">add</span>(<span class="hljs-params"></span>){
\xA0\xA0\xA0\xA0\xA0\xA0num.<span class="hljs-property">value</span>++
\xA0\xA0\xA0\xA0}

\xA0\xA0\xA0\xA0<span class="hljs-comment">// \u629B\u51FA</span>
\xA0\xA0\xA0\xA0<span class="hljs-keyword">return</span> {
\xA0\xA0\xA0\xA0\xA0\xA0num,
\xA0\xA0\xA0\xA0\xA0\xA0add,
\xA0\xA0\xA0\xA0\xA0\xA0obj
\xA0\xA0\xA0\xA0}
\xA0\xA0}
}
</code></pre>`,8),r=[l],m=[],j={__name:"setup() \u548C script setup",setup(c,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(h,u)=>(n(),e("div",p,r))}};export{j as default,m as meta};
