import{q as m,o,c as a,b as h,w as b,e as x,a as s,t as l,F as f,s as g,_ as j,u as I,v as A,x as S,y as p,z as k,A as d,B as v,C as w,p as $,f as q}from"./B2PhNWYy.js";const F={class:"v-app-project"},C={class:"v-app-project__text"},B={class:"v-app-project__title"},V={class:"app-rm-margins v-app-project__title__content"},D={class:"v-app-project__subtitle v-app-project__project-hover-transition"},N={class:"v-app-project__year v-app-project__project-hover-transition"},T=["src"],z={class:"v-app-project__category v-app-project__project-hover-transition"},K=m({__name:"AppProject",props:{src:{},title:{},year:{},category:{},slug:{},subtitle:{}},setup(r){return(e,u)=>{const _=x;return o(),a("section",F,[h(_,{class:"v-app-project__link",href:`projects/${e.slug}`},{default:b(()=>[s("div",C,[s("div",B,[s("h3",V,l(e.title),1)]),s("div",D,[(o(!0),a(f,null,g(e.category,c=>(o(),a("span",null,l(c.title)+", ",1))),256))]),s("div",N,l(new Date(e.year).getFullYear()),1)]),s("img",{class:"v-app-project__img app-display-block",src:e.src,alt:"image de couverture pour le projet"},null,8,T),s("div",z,l(e.subtitle),1)]),_:1},8,["href"])])}}}),P=j(K,[["__scopeId","data-v-5f07c5cc"]]),R=r=>($("data-v-b88146e0"),r=r(),q(),r),E={class:"v-index"},J=R(()=>s("div",null,[s("p",null,"Je suis furieuse contre une société qui m'a éduqué dans jamais apprendre a blesser un homme s'il m'écarte les cuisses de force, alors que cette même société m'a inculqué l'idée que c'était un crime dont je ne devais pas me remettre."),s("p",null,"Virginie Despente, King Kong Théorie")],-1)),L=[J],M={key:1,class:"app-flex"},W={class:"app-flex__col-12 app--width-reg--flex__col-24 v-index__project-box"},Y=m({__name:"index",setup(r){const e=I(),u=A(),_=S(()=>{var n,t;const c=u.value;return c===null?(n=e.value)==null?void 0:n.projectsInfos.toReversed():(t=e.value)==null?void 0:t.projectsInfos.filter(i=>i.tags.map(y=>y.title).includes(c)).toReversed()});return(c,n)=>(o(),a("section",E,[p(v)().value?(o(),a("div",{key:0,class:"v-index__intro",onClick:n[0]||(n[0]=t=>p(v)().value=!1),style:k({opacity:p(w)().value})},L,4)):d("",!0),p(e)?(o(),a("div",M,[(o(!0),a(f,null,g(p(_),t=>{var i;return o(),a("div",W,[h(P,{title:t.title,category:t.tags,src:((i=t.cover[0])==null?void 0:i.url)||"",year:t.date,slug:t.slug,subtitle:t.subtitle},null,8,["title","category","src","year","slug","subtitle"])])}),256))])):d("",!0)]))}}),H=j(Y,[["__scopeId","data-v-b88146e0"]]);export{H as default};