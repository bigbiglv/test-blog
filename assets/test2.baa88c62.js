import{u as a,o as n,c as l,d as t}from"./index.42487c58.js";const p={class:"markdown-body"},e=t(`<h4 id="watch%E5%92%8Cwatcheffect-%E6%95%B0%E6%8D%AE%E7%9B%91%E5%90%AC" tabindex="-1"><a class="header-anchor" href="#watch%E5%92%8Cwatcheffect-%E6%95%B0%E6%8D%AE%E7%9B%91%E5%90%AC"><span aria-hidden="true">#</span></a> watch\u548CwatchEffect \u6570\u636E\u76D1\u542C</h4><hr><h4 id="%E6%B3%A8%E6%84%8F" tabindex="-1"><a class="header-anchor" href="#%E6%B3%A8%E6%84%8F"><span aria-hidden="true">#</span></a> \u6CE8\u610F</h4><ul><li>\u5728setup()\u6216script setup\u521B\u5EFA\u7684\u4FA6\u542C\u5668\u662F\u7ED1\u5B9A\u5728\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u7684\uFF0C\u4F1A\u968F\u7740\u7EC4\u4EF6\u7684\u5378\u8F7D\u800C\u9500\u6BC1</li><li><strong>\u5982\u679C\u5728\u5F02\u6B65\u56DE\u8C03\u4E2D\u521B\u5EFA\u4E00\u4E2A\u4FA6\u542C\u5668\u7684\u8BDD\u662F\u4E0D\u4F1A\u968F\u7740\u7EC4\u4EF6\u7684\u5378\u8F7D\u800C\u9500\u6BC1\u7684\uFF0C\u9700\u8981\u624B\u52A8\u505C\u6B62</strong> \u{1F601}</li></ul><pre><code class="hljs language-ts"><span class="hljs-keyword">import</span> { ref,watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">let</span> test = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
<span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
\xA0 test.<span class="hljs-property">value</span>++
}, <span class="hljs-number">1000</span>);
<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">//\u4E0D\u4F1A\u9500\u6BC1</span>
  <span class="hljs-keyword">const</span> unwatch = <span class="hljs-title function_">watch</span>(test,<span class="hljs-function">()=&gt;</span>{
\xA0 \xA0 <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;test&#39;</span>,test)
\xA0 })
}, <span class="hljs-number">2000</span>);
<span class="hljs-comment">//\u8C03\u7528\u4FA6\u542C\u5668\u8FD4\u56DE\u7684\u51FD\u6570\u5C31\u80FD\u505C\u6B62</span>
<span class="hljs-title function_">unwatch</span>()
</code></pre><h5 id="watch" tabindex="-1"><a class="header-anchor" href="#watch"><span aria-hidden="true">#</span></a> watch</h5><ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u76D1\u542C\u7684\u6570\u636E</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u56DE\u8C03\u51FD\u6570</li><li>\u7B2C\u4E09\u4E2A\u53C2\u6570\u5C5E\u6027\u8BBE\u7F6E\xA0immediate\uFF0Cdeep</li></ul><p>ref \u5B9A\u4E49\u7684\u6570\u636E\u5206\u4E3A\u57FA\u672C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B</p><ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0D\u9700\u8981\u52A0.value\u800C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u5C31\u9700\u8981</li></ul><pre><code class="hljs language-js">\xA0<span class="hljs-comment">// 1.\u76D1\u542Cref\u5B9A\u4E49\u76841\u4E2A\u6570\u636E</span>

\xA0<span class="hljs-comment">//\u57FA\u672C\u6570\u636E\u7C7B\u578B \u4E0D\u9700\u8981 .value</span>
<span class="hljs-title function_">watch</span>(num,<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;num\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)
},{<span class="hljs-attr">deep</span>:<span class="hljs-literal">true</span>})

\xA0<span class="hljs-comment">//\u5F15\u7528\u6570\u636E\u7C7B\u578B \u9700\u8981 .value</span>
<span class="hljs-title function_">watch</span>(obj.<span class="hljs-property">value</span>,<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;obj\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)\xA0
})
\xA0<span class="hljs-comment">//\u6216\u8005</span>
\xA0<span class="hljs-comment">//\u76D1\u542C\u67D0\u4E2A\u5C5E\u6027\u7684\u65F6\u5019\u4F1A\u5931\u6548</span>
<span class="hljs-title function_">watch</span>(obj,<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;obj\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)
},{<span class="hljs-attr">deep</span>:<span class="hljs-literal">true</span>})

\xA0<span class="hljs-comment">// 2.\u76D1\u542Cref\u5B9A\u4E49\u76842\u4E2A\u6570\u636E</span>
<span class="hljs-title function_">watch</span>([num,num2],<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0 \xA0<span class="hljs-comment">// newVal,oldVal\u4E5F\u53D8\u6210\u6570\u7EC4\u7684\u5F62\u5F0F</span>
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;num\u6216num2\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)
})



</code></pre><p>reactive\u5B9A\u4E49\u7684\u6570\u636E</p><ul><li>\u5185\u90E8\u5C5E\u6027\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u65F6\u5019\u4E0D\u9700\u8981deep\u5C5E\u6027\u4E5F\u80FD\u76D1\u542C\u5230\u4F46deep\u4E0D\u80FD\u624B\u52A8\u5173\u95ED</li><li>\u5185\u90E8\u5C5E\u6027\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u65F6\u5019\u5C31\u9700\u8981\u6DFB\u52A0deep\uFF0C\u56E0\u4E3A\u76D1\u542C\u7684\u662F\u5185\u5B58\u5730\u5740</li></ul><pre><code class="hljs language-js">\xA0<span class="hljs-comment">// 1.\u76D1\u542Creactive\u5B9A\u4E49\u7684\u6570\u636E\xA0</span>
\xA0<span class="hljs-title function_">watch</span>(obj,<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0 \xA0<span class="hljs-comment">// ! oldVal\u6709\u95EE\u9898</span>
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;obj\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)
\xA0})

\xA0<span class="hljs-comment">// 2.\u76D1\u542Creactive\u5B9A\u4E49\u7684\u6570\u636E\u7684\u67D0\u4E00\u4E2A\u5C5E\u6027</span>
\xA0<span class="hljs-title function_">watch</span>(<span class="hljs-function">()=&gt;</span>obj.<span class="hljs-property">obj2</span>.<span class="hljs-property">idd</span>,<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;obj.obj2.idd\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)
\xA0})

\xA0<span class="hljs-comment">// 3.\u76D1\u542Creactive\u5B9A\u4E49\u7684\u6570\u636E\u7684\u591A\u4E2A\u5C5E\u6027</span>
\xA0<span class="hljs-title function_">watch</span>(<span class="hljs-function">()=&gt;</span>{<span class="hljs-keyword">return</span> [obj.<span class="hljs-property">obj2</span>.<span class="hljs-property">idd</span>,obj.<span class="hljs-property">id</span>]},<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;obj.obj2.idd\u6216obj.id\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)
\xA0})
\xA0<span class="hljs-comment">// \u6216</span>
\xA0<span class="hljs-title function_">watch</span>([<span class="hljs-function">()=&gt;</span>obj.<span class="hljs-property">obj2</span>.<span class="hljs-property">idd</span>,<span class="hljs-function">()=&gt;</span>obj.<span class="hljs-property">id</span>],<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;obj.obj2.idd\u6216obj.id\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)
\xA0})

\xA0<span class="hljs-comment">// 4.\u76D1\u542Creactive\u5B9A\u4E49\u7684\u6570\u636E\u7684\u5C5E\u6027\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\xA0obj2\u4E3A\u5BF9\u8C61</span>
\xA0<span class="hljs-comment">// ! \u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u52A0deep:true</span>
\xA0<span class="hljs-title function_">watch</span>(<span class="hljs-function">()=&gt;</span>obj.<span class="hljs-property">obj2</span>,<span class="hljs-function">(<span class="hljs-params">newVal,oldVal</span>)=&gt;</span>{
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;obj.obj2\u6539\u53D8\u4E86&#39;</span>,newVal,oldVal)
\xA0},{<span class="hljs-attr">deep</span>:<span class="hljs-literal">true</span>})
</code></pre><hr><h5 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect"><span aria-hidden="true">#</span></a> watchEffect</h5><ul><li>watchEffect\u51FD\u6570\u4F53\u5185\u4F7F\u7528\u7684\u90A3\u4E2A\u53C2\u6570\u5C31\u76D1\u542C\u54EA\u4E2A\u53C2\u6570</li><li>\u6709\u70B9\u50CFcomputed\uFF0C\u4F46\u662Fcomputed\u66F4\u6CE8\u91CDreturn\u7684\u503C\uFF0CwatchEffect\u66F4\u6CE8\u91CD\u8FC7\u7A0B\uFF0C\u4E0D\u7528return</li></ul><pre><code class="hljs language-js"><span class="hljs-title function_">watchEffect</span>(<span class="hljs-function">()=&gt;</span>{
\xA0 \xA0<span class="hljs-comment">//\u7528\u5230\u4E86obj.id\u5C31\u53EA\u76D1\u542Cobj.id</span>
\xA0 \xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;watchEffect&#39;</span>,obj.<span class="hljs-property">id</span>)
})
</code></pre>`,17),c=[e],d="blog2-test2",g="blog2-test2",f=[{name:"description",content:"blog"},{property:"og:title",content:"blog2-test2"}],m={__name:"test2",setup(o,{expose:s}){return s({frontmatter:{name:"blog2-test2",title:"blog2-test2",meta:[{name:"description",content:"blog"},{property:"og:title",content:"blog2-test2"}]}}),a({title:"blog2-test2",meta:[{name:"description",content:"blog"},{property:"og:title",content:"blog2-test2"}]}),(j,r)=>(n(),l("div",p,c))}};export{m as default,f as meta,d as name,g as title};
