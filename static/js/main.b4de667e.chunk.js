(this.webpackJsonpfood_recipe=this.webpackJsonpfood_recipe||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),s=(a(24),a(1)),i=(a(25),a(7));var m=function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("div",null,c.a.createElement("div",{className:"msg"},"Page Not Found !!"),c.a.createElement("div",null,c.a.createElement(i.a,{to:"/",className:"button"},"Go Home"))))};var o=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"item title"},c.a.createElement(i.b,{to:"/"},c.a.createElement("div",{className:"title"},"Food Recipe")),c.a.createElement("div",{className:"desc"},"know your food?")),c.a.createElement("div",{className:"developer"},"- developed by alpha"))},u=a(13),d=a.n(u),E=a(18),p=a(6),v=a(3),h=Object(v.a)();var N=Object(s.f)((function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),s=Object(p.a)(r,2),i=s[0],m=s[1],o=Object(n.useState)(""),u=Object(p.a)(o,2),v=u[0],N=u[1],f=function(){var e=Object(E.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N("Searching : "),"35415686","a67a3e31295996b90f996df842ad1b3d",t="https://api.edamam.com/search?q="+a+"&app_id=35415686&app_key=a67a3e31295996b90f996df842ad1b3d",console.log(t),e.next=7,fetch(t).then((function(e){return e.json()})).then((function(e){0!==e.hits.length?h.push("/search/"+a,{recipeArr:e.hits}):(m(!1),document.querySelector(".error").style.display="block")})).catch((function(e){m(!1),document.querySelector(".error").style.display="block"}));case 7:e.sent;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.length>2?(document.querySelector(".error").style.display="none",f()):(m(!1),document.querySelector(".error").style.display="block")}},c.a.createElement("div",{className:"searchBox"},c.a.createElement("input",{id:"search",type:"text",onChange:function(e){document.querySelector(".error").style.display="none",l(e.target.value),e.target.addEventListener("keydown",(function(e){8===e.keyCode&&(document.querySelector(".error").style.display="none")})),document.querySelector("#search").value.length>2?(m(!0),N("Recipe Name : ")):(m(!1),N(""),document.querySelector(".error").style.display="none")},placeholder:"Seach Recipe.... ",autoComplete:"off"}),c.a.createElement("button",{type:"submit"},"Search"),c.a.createElement("div",{className:"error"},c.a.createElement("div",{className:"title"},"Error"),c.a.createElement("div",{className:"desc"},"- Please search valid Recipe name."),c.a.createElement("div",{className:"desc"},"- Please search atleast 3 characters."),c.a.createElement("div",{className:"desc"},"- Should not include any symbols."),c.a.createElement("div",{className:"desc"},"- Check your internet access.")),i&&c.a.createElement("div",{className:"isLoading"},v," ",a," ",c.a.createElement("span",null,"."),c.a.createElement("span",null,"."),c.a.createElement("span",null,"."),c.a.createElement("span",null,"."))))}));var f=Object(s.f)((function(e){var t=e.match,a=e.location,l=Object(n.useState)(a.state.recipeArr),r=Object(p.a)(l,2),s=r[0];return r[1],c.a.createElement("div",null,c.a.createElement("div",{className:"searchedText"},c.a.createElement("div",{className:"title"},"Searched Recipe : ",t.params.name)),c.a.createElement("div",{className:"recipeSearched"},s.map((function(e,t){return c.a.createElement("div",{className:"eachRecipe",key:t+"recipe",onClick:function(){return function(e){h.push("/recipe/"+e.recipe.label,{data:e})}(e)}},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:e.recipe.image,alt:"Recipe"})),c.a.createElement("div",null,c.a.createElement("div",{className:"title"},e.recipe.label)))}))))}));var b=function(e){var t=e.location.state.data.recipe;window.scrollTo(0,0);var a=Object(n.useState)(Object.keys(t.totalNutrients).sort()),l=Object(p.a)(a,2),r=l[0];return l[1],console.log(t.totalNutrients),c.a.createElement("div",{className:"eachRecipePage"},c.a.createElement("div",{className:"imageAndInfo"},c.a.createElement("div",{className:"imageAndLabel"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:t.image})),c.a.createElement("div",{className:"label"},t.label),c.a.createElement("div",{className:"status"},c.a.createElement("div",{className:"pos"},c.a.createElement("div",{className:"title"}," Positive"),t.healthLabels.map((function(e,t){return c.a.createElement("div",{className:"healthLabels",key:t+"healthLabels"},e)}))),c.a.createElement("div",{className:"neg"},c.a.createElement("div",{className:"title"},"Caution"),t.cautions.map((function(e,t){return c.a.createElement("div",{className:"cautions",key:t+"cautions"},e)}))))),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"title"},"Ingredients :"),c.a.createElement("ul",null,t.ingredientLines.map((function(e,t){return c.a.createElement("li",{className:"ingredientLines",key:t+"ingredientLines"},e)}))))),c.a.createElement("div",{className:"IL"},c.a.createElement("div",{className:"title"},"Ingredient Detail's"),c.a.createElement("p",null,"These are the ingredients used to make this recipe."),c.a.createElement("div",{className:"desc"},t.ingredients.map((function(e,t){return c.a.createElement("div",{className:"eachIngredientsList",key:t+"eachIL"},c.a.createElement("div",{className:"ingredient"},c.a.createElement("div",null,c.a.createElement("img",{src:e.image})),c.a.createElement("div",{className:"titleAndWeight"},c.a.createElement("div",{className:"text"},e.text),c.a.createElement("div",{className:"weight"},parseInt(e.weight)))))})))),c.a.createElement("div",{className:"totalNutrients"},c.a.createElement("div",{className:"title"},"Total Nutrients"),c.a.createElement("div",{className:"ListtotalNutrients"},c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"SN"),c.a.createElement("th",null,"CODE"),c.a.createElement("th",null,"NAME OF NUTRIENT"),c.a.createElement("th",null,"QUANTITY")),r.map((function(e,a){return c.a.createElement("tr",null,c.a.createElement("td",null,a+1),c.a.createElement("td",null,e),c.a.createElement("td",null,t.totalNutrients[e].label),c.a.createElement("td",null,parseFloat(t.totalNutrients[e].quantity).toFixed(2)," ",t.totalNutrients[e].unit))}))))))};var y=function(){return c.a.createElement(s.b,{history:h},c.a.createElement(o,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(N,null)),c.a.createElement(s.a,{path:"/search/:name",component:f}),c.a.createElement(s.a,{path:"/recipe/:name",component:b}),c.a.createElement(s.a,{path:"*",component:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b4de667e.chunk.js.map