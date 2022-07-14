import{u as n,o as a,c as p,d as l}from"./index.fcfeccfd.js";const t={class:"markdown-body"},e=l(`<h4 id="%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82" tabindex="-1"><a class="header-anchor" href="#%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82"><span aria-hidden="true">#</span></a> \u7EC4\u4EF6\u4F20\u53C2</h4><hr><h4 id="props%E5%92%8Cemit" tabindex="-1"><a class="header-anchor" href="#props%E5%92%8Cemit"><span aria-hidden="true">#</span></a> props\u548Cemit</h4><ul><li>script setup</li></ul><pre><code class="hljs language-js"><span class="hljs-comment">/** \u7236\u7EC4\u4EF6 **/</span>
<span class="hljs-comment">// template</span>
&lt;component2 :num=<span class="hljs-string">&quot;num&quot;</span> @compontentSub=<span class="hljs-string">&quot;sub&quot;</span> /&gt;

<span class="hljs-comment">// script</span>
<span class="hljs-comment">//\u53EA\u5F15\u5165\u4E0D\u7528\u58F0\u660E</span>
<span class="hljs-keyword">import</span> component2 <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../components/compontent2.vue&#39;</span> 

<span class="hljs-keyword">import</span> { ref, toRefs } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">let</span> num = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
<span class="hljs-keyword">function</span> <span class="hljs-title function_">sub</span>(<span class="hljs-params"></span>){
  <span class="hljs-comment">//\u7236\u7EC4\u4EF6\u63A5\u6536\u5230\u5B50\u7EC4\u4EF6\u7684\u51CF\u5C11\u4FE1\u53F7 \u5F00\u59CB\u51CF\u5C11</span>
\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;\u51CF\u5C11&#39;</span>)
\xA0\xA0num.<span class="hljs-property">value</span>--
}

<span class="hljs-comment">/** \u5B50\u7EC4\u4EF6 **/</span>
<span class="hljs-comment">// import {\xA0\xA0defineEmits,defineProps } from &#39;vue&#39; //\u4E0D\u9700\u8981\u5F15\u5165</span>
<span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>({
  <span class="hljs-comment">//\u63A5\u6536\u4F20\u6765\u7684num \u5E76\u521D\u59CB\u5316\u5904\u7406</span>
  <span class="hljs-attr">num</span>:{
    <span class="hljs-attr">type</span>:number,
    <span class="hljs-attr">default</span>:<span class="hljs-number">0</span>
  }
}) 
<span class="hljs-keyword">const</span> { num } = props  <span class="hljs-comment">//\u76F4\u63A5\u89E3\u6784\u4F1A\u5931\u53BB\u54CD\u5E94\u5F0F</span>
<span class="hljs-keyword">const</span> { num } = <span class="hljs-title function_">toRefs</span>(props)  <span class="hljs-comment">//\u4F7F\u7528toRefs\u89E3\u6784\u4FDD\u6301\u54CD\u5E94\u5F0F</span>
<span class="hljs-comment">// \u7236\u7EC4\u4EF6\u63A5\u6536\u6570\u636E\u7684\u4E8B\u4EF6\u540D</span>
<span class="hljs-keyword">const</span> emits = <span class="hljs-title function_">defineEmits</span>([<span class="hljs-string">&#39;compontentSub&#39;</span>])

<span class="hljs-keyword">function</span> <span class="hljs-title function_">sub</span>(<span class="hljs-params"></span>){
  <span class="hljs-comment">//\u5B50\u7EC4\u4EF6\u89E6\u53D1\u51CF\u5C11num \u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6</span>
\xA0\xA0<span class="hljs-title function_">emits</span>(<span class="hljs-string">&#39;compontentSub&#39;</span>)
}
</code></pre><ul><li>setup\u51FD\u6570</li></ul><pre><code class="hljs language-js"><span class="hljs-comment">// ! \u7236\u7EC4\u4EF6</span>
&lt;component1 :num=<span class="hljs-string">&quot;num&quot;</span> @compontentSub=<span class="hljs-string">&quot;sub&quot;</span>/&gt;

<span class="hljs-keyword">import</span> component1 <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../components/compontent1.vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
\xA0\xA0<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;Home&#39;</span>,
\xA0\xA0<span class="hljs-attr">components</span>:{
\xA0\xA0\xA0\xA0component1
\xA0\xA0},
\xA0 \xA0 ...
}
<span class="hljs-comment">// ! \u5B50\u7EC4\u4EF6</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
\xA0\xA0<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;compontente1&#39;</span>,
\xA0\xA0<span class="hljs-attr">emits</span>:[<span class="hljs-string">&#39;compontentSub&#39;</span>],
\xA0\xA0<span class="hljs-attr">props</span>:[<span class="hljs-string">&#39;num&#39;</span>],
\xA0\xA0<span class="hljs-title function_">setup</span>(<span class="hljs-params">props,context</span>){
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;props&#39;</span>,props)
\xA0\xA0\xA0\xA0<span class="hljs-keyword">function</span> <span class="hljs-title function_">sub</span>(<span class="hljs-params"></span>){
\xA0\xA0\xA0\xA0\xA0\xA0context.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;compontentSub&#39;</span>)\xA0\xA0
\xA0\xA0\xA0\xA0}
\xA0\xA0\xA0\xA0<span class="hljs-keyword">return</span> {
\xA0\xA0\xA0\xA0\xA0\xA0sub
\xA0\xA0\xA0\xA0}
\xA0\xA0}
}
</code></pre><hr><h5 id="provide-%E5%92%8C-inject" tabindex="-1"><a class="header-anchor" href="#provide-%E5%92%8C-inject"><span aria-hidden="true">#</span></a> provide \u548C inject</h5><ul><li>\u7236\u5B59\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u5B50\u7EC4\u4EF6\u4E5F\u80FD\u63A5\u6536\u4F46\u5B50\u7EC4\u4EF6\u80FD\u4F7F\u7528props</li><li>\u7236\u7EC4\u4EF6\u4F7F\u7528provide\uFF0C\u5B59\u5B50\u7EC4\u4EF6\u4F7F\u7528inject\u63A5\u6536</li><li>\u5B59\u5B50\u7EC4\u4EF6\u6570\u636E\u6539\u53D8\u7236\u7EC4\u4EF6\u6570\u636E\u4E5F\u4F1A\u540C\u6B65\u6539\u53D8</li></ul><pre><code class="hljs language-js"><span class="hljs-comment">// !\u7236\u7EC4\u4EF6</span>
<span class="hljs-keyword">import</span> {ref,provide} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
...
<span class="hljs-keyword">let</span> num = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
<span class="hljs-title function_">provide</span>(<span class="hljs-string">&#39;num&#39;</span>,num)

<span class="hljs-comment">// !\u5B59\u5B50\u7EC4\u4EF6\u63A5\u6536</span>
<span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
...
<span class="hljs-keyword">let</span> num = <span class="hljs-title function_">inject</span>(<span class="hljs-string">&#39;num&#39;</span>)
</code></pre>`,11),c=[e],u=[],d={__name:"\u7EC4\u4EF6\u4F20\u53C2",setup(o,{expose:s}){return s({frontmatter:{meta:[]}}),n({meta:[]}),(i,m)=>(a(),p("div",t,c))}};export{d as default,u as meta};
