(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{B0N1:function(t,e,n){"use strict";n("pqte")},VFvn:function(t,e,n){"use strict";n("eV+8")},"eV+8":function(t,e,n){},odGf:function(t,e,n){"use strict";n.r(e);var i=n("tlie"),o={name:"VAbout",props:["heading","title","description","desktopImage","mobileImage","leftAlign","items"],data:()=>({backgroundStyle:{}}),methods:{updateContent(){{let t=this.desktopImage;window.innerWidth<1440&&(t=this.mobileImage),this.backgroundStyle={backgroundImage:`url(${t})`}}}},mounted(){this.updateContent()},created(){window.addEventListener("resize",this.updateContent)},destroyed(){window.removeEventListener("resize",this.updateContent)}},a=(n("B0N1"),n("KHd+")),s={metaInfo:{title:"About Handhug"},components:{VAbout:Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("md-content",{staticClass:"item-container",class:{"is-left":t.leftAlign,"is-right":!t.leftAlign},style:t.backgroundStyle},[e("div",{staticClass:"heading"},[t._v(t._s(t.heading))]),t._l(t.title,(function(n){return e("div",{key:n.key,class:{"normal-title":"normal"==n.style,"bold-title":"bold"==n.style}},[t._v("\n    "+t._s(n.text)+"\n  ")])})),e("div",{staticClass:"description"},[t._v(t._s(t.description))])],2)}),[],!1,null,"6a02776a",null).exports},data:()=>({content:i.content})},l=(n("VFvn"),Object(a.a)(s,(function(){var t=this._self._c;return t("Layout",[t("div",{staticClass:"content-container"},this._l(this.content,(function(e,n){return t("v-about",{key:e.key,attrs:{heading:e.heading,title:e.title,description:e.description,desktopImage:e.desktopImage,mobileImage:e.mobileImage,leftAlign:n%2==0}})})),1)])}),[],!1,null,"68f9cdee",null));e.default=l.exports},pqte:function(t,e,n){},tlie:function(t){t.exports=JSON.parse('{"content":[{"heading":"Creators to Commerce","title":[{"text":"크리에이터 커머스 기업","style":"normal"},{"text":"핸드허그","style":"bold"}],"description":"핸드허그는 크리에이터들과 함께\\n커머스를 혁신합니다.","desktopImage":"/about-img-01.jpg","mobileImage":"/mw-about-img-01.jpg"},{"heading":"Commerce Platform with Creators","title":[{"text":"크리에이터 중심의","style":"normal"},{"text":"플랫폼 개발","style":"bold"}],"description":"핸드허그는 크리에이터들이 중심이 되는\\n크리에이터 플랫폼을 설계하고 제안합니다.","desktopImage":"/about-img-02.jpg","mobileImage":"/mw-about-img-02.jpg"},{"heading":"Brand with Creators","title":[{"text":"전문가와 함께하는","style":"normal"},{"text":"브랜드 개발","style":"bold"}],"description":"핸드허그는 크리에이터들이 참여할 수 있는\\n브랜드를 만들고 브랜드 안에서\\n크리에이터들의 상품을 함께 개발합니다.","desktopImage":"/about-img-03.jpg","mobileImage":"/mw-about-img-03.jpg"},{"heading":"Solutions for Creators","title":[{"text":"핸드허그만의 노하우와","style":"normal"},{"text":"체계적인 인프라","style":"bold"}],"description":"핸드허그는 크리에이터들에게 풀필먼트 솔루션과\\n상품화 솔루션, 유통 솔루션을 제공합니다.","desktopImage":"/about-img-04.jpg","mobileImage":"/mw-about-img-04.jpg"}]}')}}]);