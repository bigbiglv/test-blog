import{u as a,o as n,c as e,d as l}from"./index.6fbb99ea.js";const p={class:"markdown-body"},t=l(`<h4 id="ref%E5%92%8Creactive%E7%9A%84%E5%8E%9F%E7%90%86" tabindex="-1"><a class="header-anchor" href="#ref%E5%92%8Creactive%E7%9A%84%E5%8E%9F%E7%90%86"><span aria-hidden="true">#</span></a> ref\u548Creactive\u7684\u539F\u7406</h4><hr><h4 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span aria-hidden="true">#</span></a> ref</h4><ul><li>\u8FD8\u662F\u57FA\u4E8E <code>Object.defineproperty()</code></li><li>\u7528\u6765\u5B9A\u4E49 <code>string</code> <code>number</code>\u7B49\u57FA\u7840\u7C7B\u578B\u6570\u636E\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u52A0\u4E0A<code>.value</code> xxx.value <code>template</code>\u6A21\u677F\u8BED\u6CD5\u4E2D\u4E0D\u7528</li><li>\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4E0D\u8FC7\u5185\u90E8\u539F\u7406\u4F9D\u65E7\u4F1A\u8D70reactive\uFF0C\u53D6\u503C\u8FD8\u5F97\u52A0.value obj.value.xxx</li></ul><pre><code class="hljs language-js">\xA0\xA0<span class="hljs-keyword">let</span> num = <span class="hljs-number">0</span>
\xA0\xA0<span class="hljs-keyword">let</span> obj={}
\xA0\xA0<span class="hljs-title class_">Object</span>.<span class="hljs-title function_">defineProperty</span>(obj,<span class="hljs-string">&#39;num&#39;</span>,{
\xA0\xA0\xA0\xA0<span class="hljs-comment">// value:&#39;\u503C&#39;,</span>
\xA0\xA0\xA0\xA0<span class="hljs-comment">// enumerable:true, //\u662F\u5426\u53EF\u4EE5\u88AB\u679A\u4E3E</span>
\xA0\xA0\xA0\xA0<span class="hljs-comment">// writable:true,\xA0\xA0\xA0//\u662F\u5426\u53EF\u4EE5\u88AB\u4FEE\u6539</span>
\xA0\xA0\xA0\xA0<span class="hljs-comment">// configurableL:true,\xA0\xA0//\u662F\u5426\u80FD\u88AB\u5220\u9664</span>
\xA0\xA0\xA0\xA0<span class="hljs-title function_">get</span>(<span class="hljs-params"></span>){
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-keyword">return</span> num
\xA0\xA0\xA0\xA0},
\xA0\xA0\xA0\xA0<span class="hljs-title function_">set</span>(<span class="hljs-params">newVal</span>){
\xA0\xA0\xA0\xA0\xA0\xA0num = newVal
\xA0\xA0\xA0\xA0}
\xA0\xA0})
\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj.<span class="hljs-property">num</span>) <span class="hljs-comment">//0 \u8D70get()\u7684</span>
\xA0\xA0<span class="hljs-comment">// \u8D70set()\u7684 \u4FEE\u6539\u4E86num</span>
\xA0\xA0obj.<span class="hljs-property">num</span> = <span class="hljs-number">10</span>
\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj.<span class="hljs-property">num</span>) <span class="hljs-comment">//10 \u8D70set()\u7684</span>
\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(num)\xA0\xA0\xA0\xA0\xA0<span class="hljs-comment">//10 set()\u91CC\u9762\u4FEE\u6539\u4E86num</span>
\xA0\xA0num = <span class="hljs-number">11</span>
\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj.<span class="hljs-property">num</span>) <span class="hljs-comment">//11 \u8D70get() \u8FD4\u56DEnum</span>
</code></pre><hr><h4 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive"><span aria-hidden="true">#</span></a> reactive</h4><ul><li>\u57FA\u4E8E <code>proxy</code></li><li>\u7528\u6765\u5B9A\u4E49 <code>object</code> <code>array</code>\u7B49\u5F15\u7528\u7C7B\u578B\u6570\u636E</li><li>\u89E3\u51B3\u4E86vue2\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u65B0\u589E\uFF0C\u5220\u9664\u5C5E\u6027\uFF0C\u6570\u7EC4\u901A\u8FC7\u4E0B\u6807\u4FEE\u6539\u6570\u636E\u89C6\u56FE\u4E0D\u4F1A\u66F4\u65B0\u3002(vue2\u9700\u8981\u4F7F\u7528 <code>this.$set()</code>\u89E3\u51B3)</li></ul><pre><code class="hljs language-js"><span class="hljs-keyword">let</span> obj = {
\xA0\xA0<span class="hljs-attr">num</span>:<span class="hljs-number">1</span>
}
<span class="hljs-keyword">let</span> p = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Proxy</span>(obj,{
\xA0\xA0<span class="hljs-comment">//\u6355\u83B7\u4FEE\u6539</span>
\xA0\xA0<span class="hljs-comment">//\u67E5</span>
\xA0\xA0<span class="hljs-title function_">get</span>(<span class="hljs-params">target, propNmae</span>){
\xA0\xA0\xA0\xA0<span class="hljs-comment">//target\u539F\u5BF9\u8C61 propNmae \u5F53\u524D\u7684key\u503C</span>
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;\u89E6\u53D1p\u7684get&#39;</span>,target, propNmae)
\xA0\xA0\xA0\xA0<span class="hljs-comment">// return target[propNmae]</span>
\xA0\xA0\xA0\xA0<span class="hljs-keyword">return</span> <span class="hljs-title class_">Reflect</span>.<span class="hljs-title function_">get</span>(target,propNmae)\xA0\xA0<span class="hljs-comment">// Reflect vue3\u5E95\u5C42\u66F4\u597D\u7684\u6355\u83B7\u9519\u8BEF</span>
\xA0\xA0},
\xA0\xA0<span class="hljs-comment">//\u589E\u6539</span>
\xA0\xA0<span class="hljs-title function_">set</span>(<span class="hljs-params">target, propNmae, newVal</span>){
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;\u89E6\u53D1p\u7684set&#39;</span>)
\xA0\xA0\xA0\xA0<span class="hljs-comment">// target[propNmae] = newVal</span>
\xA0\xA0\xA0\xA0<span class="hljs-title class_">Reflect</span>.<span class="hljs-title function_">set</span>(target,propNmae,newVal)\xA0\xA0<span class="hljs-comment">// Reflect vue3\u5E95\u5C42\u66F4\u597D\u7684\u6355\u83B7\u9519\u8BEF</span>
\xA0\xA0},
\xA0\xA0<span class="hljs-comment">//\u5220</span>
\xA0\xA0<span class="hljs-title function_">deleteProperty</span>(<span class="hljs-params">target, propNmae</span>){
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;\u89E6\u53D1\u4E86\u5220\u9664&#39;</span>)
\xA0\xA0\xA0\xA0<span class="hljs-comment">// return delete target[propNmae]</span>
\xA0\xA0\xA0\xA0<span class="hljs-keyword">return</span> <span class="hljs-title class_">Reflect</span>.<span class="hljs-title function_">deleteProperty</span>(target,propNmae)\xA0\xA0<span class="hljs-comment">//Reflect vue3\u5E95\u5C42\u66F4\u597D\u7684\u6355\u83B7\u9519\u8BEF</span>
\xA0\xA0}
})
<span class="hljs-comment">// \u4EE3\u7406</span>
p.<span class="hljs-property">num</span> = <span class="hljs-number">2</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj.<span class="hljs-property">num</span>) <span class="hljs-comment">//2</span>
obj.<span class="hljs-property">num</span> = <span class="hljs-number">3</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(p.<span class="hljs-property">num</span>)\xA0\xA0\xA0<span class="hljs-comment">//3</span>
</code></pre>`,9),c=[t],u=[],d={__name:"ref\u548Creactive\u7684\u539F\u7406",setup(o,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(j,m)=>(n(),e("div",p,c))}};export{d as default,u as meta};
