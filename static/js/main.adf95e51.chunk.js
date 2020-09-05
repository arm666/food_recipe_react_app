(this.webpackJsonpfood_recipe=this.webpackJsonpfood_recipe||[]).push([[0],{19:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},25:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),s=(t(24),t(1)),i=(t(25),t(7));var m=function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("div",null,c.a.createElement("div",{className:"msg"},"Page Not Found !!"),c.a.createElement("div",null,c.a.createElement(i.a,{to:"/food_recipe_react_app/",className:"button"},"Go Home"))))};var o=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"item title"},c.a.createElement(i.b,{to:"/food_recipe_react_app"},c.a.createElement("div",{className:"title"},"Food Recipe")),c.a.createElement("div",{className:"desc"},"know your food?")),c.a.createElement("div",{className:"developer"},"- developed by alpha"))},d=t(13),u=t.n(d),p=t(18),E=t(6),v=t(3),h=Object(v.a)();var N=Object(s.f)((function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),s=Object(E.a)(r,2),i=s[0],m=s[1],o=Object(n.useState)(""),d=Object(E.a)(o,2),v=d[0],N=d[1],f=function(){var e=Object(p.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N("Searching : "),"35415686","a67a3e31295996b90f996df842ad1b3d",a="https://api.edamam.com/search?q="+t+"&app_id=35415686&app_key=a67a3e31295996b90f996df842ad1b3d",console.log(a),e.next=7,fetch(a).then((function(e){return e.json()})).then((function(e){0!==e.hits.length?h.push("food_recipe_react_app/search/"+t,{recipeArr:e.hits}):(m(!1),document.querySelector(".error").style.display="block")})).catch((function(e){m(!1),document.querySelector(".error").style.display="block"}));case 7:e.sent;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.length>2?(document.querySelector(".error").style.display="none",f()):(m(!1),document.querySelector(".error").style.display="block")}},c.a.createElement("div",{className:"searchBox"},c.a.createElement("input",{id:"search",type:"text",onChange:function(e){document.querySelector(".error").style.display="none",l(e.target.value),e.target.addEventListener("keydown",(function(e){8===e.keyCode&&(document.querySelector(".error").style.display="none")})),document.querySelector("#search").value.length>2?(m(!0),N("Recipe Name : ")):(m(!1),N(""),document.querySelector(".error").style.display="none")},placeholder:"Seach Recipe.... ",autoComplete:"off"}),c.a.createElement("button",{type:"submit"},"Search"),c.a.createElement("div",{className:"error"},c.a.createElement("div",{className:"title"},"Error"),c.a.createElement("div",{className:"desc"},"- Please search valid Recipe name."),c.a.createElement("div",{className:"desc"},"- Please search atleast 3 characters."),c.a.createElement("div",{className:"desc"},"- Should not include any symbols."),c.a.createElement("div",{className:"desc"},"- Check your internet access.")),i&&c.a.createElement("div",{className:"isLoading"},v," ",t," ",c.a.createElement("span",null,"."),c.a.createElement("span",null,"."),c.a.createElement("span",null,"."),c.a.createElement("span",null,"."))))}));var f=Object(s.f)((function(e){var a=e.match,t=e.location,l=Object(n.useState)(t.state.recipeArr),r=Object(E.a)(l,2),s=r[0];return r[1],c.a.createElement("div",null,c.a.createElement("div",{className:"searchedText"},c.a.createElement("div",{className:"title"},"Searched Recipe : ",a.params.name)),c.a.createElement("div",{className:"recipeSearched"},s.map((function(e,a){return c.a.createElement("div",{className:"eachRecipe",key:a+"recipe",onClick:function(){return function(e){h.push("/food_recipe_react_app/recipe/"+e.recipe.label,{data:e})}(e)}},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:e.recipe.image,alt:"Recipe"})),c.a.createElement("div",null,c.a.createElement("div",{className:"title"},e.recipe.label)))}))))}));var b=function(e){var a=e.location.state.data.recipe;window.scrollTo(0,0);var t=Object(n.useState)(Object.keys(a.totalNutrients).sort()),l=Object(E.a)(t,2),r=l[0];return l[1],console.log(a.totalNutrients),c.a.createElement("div",{className:"eachRecipePage"},c.a.createElement("div",{className:"imageAndInfo"},c.a.createElement("div",{className:"imageAndLabel"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:a.image})),c.a.createElement("div",{className:"label"},a.label),c.a.createElement("div",{className:"status"},c.a.createElement("div",{className:"pos"},c.a.createElement("div",{className:"title"}," Positive"),a.healthLabels.map((function(e,a){return c.a.createElement("div",{className:"healthLabels",key:a+"healthLabels"},e)}))),c.a.createElement("div",{className:"neg"},c.a.createElement("div",{className:"title"},"Caution"),a.cautions.map((function(e,a){return c.a.createElement("div",{className:"cautions",key:a+"cautions"},e)}))))),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"title"},"Ingredients :"),c.a.createElement("ul",null,a.ingredientLines.map((function(e,a){return c.a.createElement("li",{className:"ingredientLines",key:a+"ingredientLines"},e)}))))),c.a.createElement("div",{className:"IL"},c.a.createElement("div",{className:"title"},"Ingredient Detail's"),c.a.createElement("p",null,"These are the ingredients used to make this recipe."),c.a.createElement("div",{className:"desc"},a.ingredients.map((function(e,a){return c.a.createElement("div",{className:"eachIngredientsList",key:a+"eachIL"},c.a.createElement("div",{className:"ingredient"},c.a.createElement("div",null,c.a.createElement("img",{src:e.image})),c.a.createElement("div",{className:"titleAndWeight"},c.a.createElement("div",{className:"text"},e.text),c.a.createElement("div",{className:"weight"},parseInt(e.weight)))))})))),c.a.createElement("div",{className:"totalNutrients"},c.a.createElement("div",{className:"title"},"Total Nutrients"),c.a.createElement("div",{className:"ListtotalNutrients"},c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"SN"),c.a.createElement("th",null,"CODE"),c.a.createElement("th",null,"NAME OF NUTRIENT"),c.a.createElement("th",null,"QUANTITY")),r.map((function(e,t){return c.a.createElement("tr",null,c.a.createElement("td",null,t+1),c.a.createElement("td",null,e),c.a.createElement("td",null,a.totalNutrients[e].label),c.a.createElement("td",null,parseFloat(a.totalNutrients[e].quantity).toFixed(2)," ",a.totalNutrients[e].unit))}))))))};var y=function(){return c.a.createElement(s.b,{history:h},c.a.createElement(o,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/food_recipe_react_app"},c.a.createElement(N,null)),c.a.createElement(s.a,{path:"/food_recipe_react_app/search/:name",component:f}),c.a.createElement(s.a,{path:"/food_recipe_react_app/recipe/:name",component:b}),c.a.createElement(s.a,{path:"*",component:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.adf95e51.chunk.js.map