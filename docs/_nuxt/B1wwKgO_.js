import{q as g,o as t,c as s,F as n,s as h,a,_ as f,t as i,A as L,u as p,B as I,b as y,p as w,f as $,r as M,C as H,D as T,E as S,z as x,G as z,w as B,e as A}from"./QH3t8MoH.js";const D={class:"v-app-list-of-details"},P={class:"v-app-list-of-details__detail app-flex"},N=["innerHTML"],O=["innerHTML"],V=g({__name:"AppListOfDetails",props:{data:{}},setup(l){return(_,c)=>{var o;return t(),s("section",D,[(t(!0),s(n,null,h((o=_.data)==null?void 0:o.content.listofdetails,e=>(t(),s("div",P,[a("div",{class:"v-app-list-of-details__detail__name app-flex__col-12 app--width-sm--flex__col-24",innerHTML:e.name},null,8,N),a("div",{class:"v-app-list-of-details__detail__value app-flex__col-12 app--width-sm--flex__col-24",innerHTML:e.value},null,8,O)]))),256))])}}}),k=f(V,[["__scopeId","data-v-ae77f3e2"]]),j=l=>(w("data-v-9fec8d6d"),l=l(),$(),l),E={class:"v-app-page"},F={class:"app-flex app-flex--justify-center"},R={class:"app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22"},q={class:"v-app-page__title"},G={class:"v-app-page__subtitle"},J={class:"app-flex app-flex--justify-center"},K={key:0,class:"app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22"},Q=["innerHTML"],U={key:0,class:"app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22"},W={key:0},X={key:1},Y={key:2},Z={key:0,class:"app-flex__col-24 v-app-page__image v-app-page__image--full app--width-sm--flex__col-22"},b=["src","alt"],C=["src"],ee=["innerHTML"],te={key:3,class:"app-flex__col-16 app--width-reg--flex__col-18 app--width-sm--flex__col-22 v-app-page__list-details"},se={key:0,class:"v-app-page__gallery"},ae=j(()=>a("div",{class:"v-app-page__gallery__item--scroll-spacing"},null,-1)),_e={class:"v-app-page__gallery__item"},le=["src"],pe=j(()=>a("div",{class:"v-app-page__gallery__item--scroll-spacing"},null,-1)),oe=g({__name:"AppPage",props:{content:{}},setup(l){return(_,c)=>{const o=k;return t(),s("main",E,[a("header",{class:"v-app-page__header",style:L({backgroundImage:`url(${_.content.cover[0].resize.xxl})`})},[a("div",F,[a("div",R,[a("h2",q,i(_.content.title),1),a("h3",G,i(_.content.subtitle),1)])])],4),a("div",J,[_.content.introduction?(t(),s("div",K,[a("div",{class:"v-app-page__intro",innerHTML:_.content.introduction},null,8,Q)])):p("",!0),(t(!0),s(n,null,h(_.content.htmlcontent,e=>{var u,d,r,m,v;return t(),s(n,null,[e.type==="heading"?(t(),s("div",U,[e.content.level==="h2"?(t(),s("h2",W,i(e.content.text),1)):e.content.level==="h3"?(t(),s("h3",X,i(e.content.text),1)):(t(),s("div",Y,i(e.content.text),1))])):p("",!0),e.type==="image"?(t(),s(n,{key:1},[e.content.isfullwidth==="true"?(t(),s("div",Z,[a("img",{src:(u=e.images[0])==null?void 0:u.url,alt:((d=e.images[0])==null?void 0:d.alt)||"Image du projet"},null,8,b)])):(t(),s("div",{key:1,class:I(["app-flex__col-14 app--width-reg--flex__col-16 v-app-page__image app--width-sm--flex__col-22",{"v-app-page__image--horizontal":((r=e.images[0])==null?void 0:r.height)>((m=e.images[0])==null?void 0:m.width)}])},[a("img",{src:(v=e.images[0])==null?void 0:v.url,alt:"image de projet"},null,8,C)],2))],64)):p("",!0),e.type==="text"?(t(),s("div",{key:2,class:"app-flex__col-16 app--width-reg--flex__col-18 app--width-sm--flex__col-22",innerHTML:e.content.text},null,8,ee)):p("",!0),e.type==="listOfDetails"?(t(),s("div",te,[y(o,{data:e},null,8,["data"])])):p("",!0)],64)}),256))]),_.content.galleryproject.length>0?(t(),s("div",se,[ae,(t(!0),s(n,null,h(_.content.galleryproject,e=>(t(),s("div",_e,[a("img",{src:e.images[0].resize.xxl,alt:"image",class:"v-app-page__gallery__item__img"},null,8,le)]))),256)),pe])):p("",!0)])}}}),ie=f(oe,[["__scopeId","data-v-9fec8d6d"]]),ne=l=>(w("data-v-9b123265"),l=l(),$(),l),ce={class:"v-projects-slug"},de={style:{width:"100%",display:"flex","justify-content":"center","padding-top":"10rem","padding-bottom":"10rem"}},re=ne(()=>a("div",null,"Retour aux projets",-1)),ue=g({__name:"[slug]",setup(l){const _=M(null),c=H();T(()=>{o()});async function o(){typeof c.params.slug=="string"&&(_.value=await S(c.params.slug))}return(e,u)=>{const d=ie,r=A;return t(),s("section",ce,[x(_)?(t(),z(d,{key:0,content:x(_)},null,8,["content"])):p("",!0),a("div",de,[y(r,{href:"/",class:"v-projects-slug__link-button"},{default:B(()=>[re]),_:1})])])}}}),ge=f(ue,[["__scopeId","data-v-9b123265"]]);export{ge as default};