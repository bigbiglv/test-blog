import{u as n,o as a,c as e,d as l}from"./index.6fbb99ea.js";const o={class:"markdown-body"},t=l(`<h4 id="%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F" tabindex="-1"><a class="header-anchor" href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"><span aria-hidden="true">#</span></a> \u751F\u547D\u5468\u671F</h4><hr><ul><li><code>beforeDestroy</code>\u548C<code>destroyed</code>\u6539\u4E3A<code>beforeUnMount</code>\u548C<code>unMounted</code></li><li>\u4F7F\u7528\u751F\u547D\u5468\u671F\u9700\u8981\u5F15\u5165\u5BF9\u5E94\u7684api</li><li>\u540C\u4E00\u4E2A\u751F\u547D\u5468\u671Fvue3\u5199\u6CD5\u6BD4vue2\u5199\u6CD5\u66F4\u5FEB\u6267\u884C</li><li><code>beforeCreate</code>\u548C<code>created</code>\u4E3A<code>setup</code>\u51FD\u6570\u5185\u90E8</li><li><code>setup</code>\u6BD4<code>beforeCreate</code>\u548C<code>created</code>\u5FEB</li></ul><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
\xA0\xA0<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>){
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue3--setup&#39;</span>)
\xA0\xA0\xA0\xA0<span class="hljs-title function_">onBeforeMount</span>(<span class="hljs-function">()=&gt;</span>{
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue3--onBeforeMount&#39;</span>)
\xA0\xA0\xA0\xA0})
\xA0\xA0\xA0\xA0<span class="hljs-title function_">onMounted</span>(<span class="hljs-function">()=&gt;</span>{
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue3--onMounted&#39;</span>)
\xA0\xA0\xA0\xA0})
\xA0\xA0\xA0\xA0<span class="hljs-title function_">onBeforeUpdate</span>(<span class="hljs-function">()=&gt;</span>{
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue3--onBeforeUpdate&#39;</span>)
\xA0\xA0\xA0\xA0})
\xA0\xA0\xA0\xA0<span class="hljs-title function_">onUpdated</span>(<span class="hljs-function">()=&gt;</span>{
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue3--onUpdated&#39;</span>)
\xA0\xA0\xA0\xA0})
\xA0\xA0\xA0\xA0<span class="hljs-title function_">onBeforeUnmount</span>(<span class="hljs-function">()=&gt;</span>{
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue3--onBeforeUnmount&#39;</span>)
\xA0\xA0\xA0\xA0})
\xA0\xA0\xA0\xA0<span class="hljs-title function_">onUnmounted</span>(<span class="hljs-function">()=&gt;</span>{
\xA0\xA0\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue3--onUnmounted&#39;</span>)
\xA0\xA0\xA0\xA0})
\xA0\xA0},
\xA0\xA0<span class="hljs-title function_">beforeCreate</span>(<span class="hljs-params"></span>) {
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue2--beforeCreate&#39;</span>)
\xA0\xA0},
\xA0\xA0<span class="hljs-title function_">created</span>(<span class="hljs-params"></span>) {
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue2--create&#39;</span>)
\xA0\xA0},
\xA0\xA0<span class="hljs-title function_">beforeMount</span>(<span class="hljs-params"></span>) {
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue2--beforeMount&#39;</span>)
\xA0\xA0},
\xA0\xA0<span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue2--mounted&#39;</span>)
\xA0\xA0},
\xA0\xA0<span class="hljs-title function_">beforeUpdate</span>(<span class="hljs-params"></span>) {
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue2--beforeUpdate&#39;</span>)
\xA0\xA0},
\xA0\xA0<span class="hljs-title function_">updated</span>(<span class="hljs-params"></span>) {
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue2--updated&#39;</span>)
\xA0\xA0},
\xA0\xA0<span class="hljs-title function_">beforeUnmount</span>(<span class="hljs-params"></span>) {
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue2--beforUnmount&#39;</span>)
\xA0\xA0},
\xA0\xA0<span class="hljs-title function_">unmounted</span>(<span class="hljs-params"></span>){
\xA0\xA0\xA0\xA0<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;vue2--unMounted&#39;</span>)
\xA0\xA0}
}
</code></pre><p>\u8F93\u51FA\u7684\u987A\u5E8F\u662F</p><pre><code class="hljs language-js">vue3--setup
vue2--beforeCreate
vue2--create
vue3--onBeforeMount
vue2--beforeMount
vue3--onMounted
vue2--mounted
vue3--onBeforeUpdate
vue2--beforeUpdate
vue3--onUpdated
vue2--updated
vue3--onBeforeUnmount
vue2--beforUnmount
vue3--onUnmounted
vue2--unMounted
</code></pre>`,6),p=[t],j=[],f={__name:"\u751F\u547D\u5468\u671F",setup(c,{expose:s}){return s({frontmatter:{meta:[]}}),n({meta:[]}),(r,h)=>(a(),e("div",o,p))}};export{f as default,j as meta};
