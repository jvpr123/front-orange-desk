(this["webpackJsonpfront-orange-desk"]=this["webpackJsonpfront-orange-desk"]||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(29),r=a.n(n),o=a(5),l=a(7),i=a.p+"static/media/logo-Orange-Desk.94a03b66.svg",d=a.p+"static/media/home-page.67276819.svg",m=a(1),j=function(){return document.title="HOME | Orange Desk",Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"container-lg container-md d-flex flex-column justify-content-start align-items-center bg-white container vw-100 vh-100",children:[Object(m.jsxs)("header",{className:"col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mt-3 mt-lg-4",children:[Object(m.jsx)(o.b,{className:"col-3 col-md-2 col-lg-1",to:"/",children:Object(m.jsx)("img",{className:"img-fluid p-2",src:i,alt:"Logotipo FCamara"})}),Object(m.jsx)(o.b,{to:"/login",className:"text-orange link-hover col-1",children:"Entrar"})]}),Object(m.jsxs)("main",{className:"container-fluid row w-100 d-flex justify-content-start flex-column align-items-center flex-lg-row",children:[Object(m.jsx)("img",{className:"img-fluid col-10 col-lg-6",src:d,alt:"Duas mulheres sentadas no escrit\xf3rio conversando e tomando caf\xe9."}),Object(m.jsxs)("div",{className:"d-flex flex-column col-md-9 col-lg-5 col-12 mt-2",children:[Object(m.jsx)("h5",{className:"mb-1 fs-5 fw__bold",children:"Bateu saudade dos colegas?"}),Object(m.jsx)("h5",{className:"fs-5 fw__bold",children:"Precisa fazer uma reuni\xe3o importante?"}),Object(m.jsx)("p",{className:"fw__light mt-3",children:"Seja qual for o motivo, aqui voc\xea agenda o dia que precisa ir ao escrit\xf3rio e garante um dia de trabalho seguro e agrad\xe1vel."}),Object(m.jsx)(o.b,{className:"btn-orange fw__extra-bold text-center mt-2 mt-md-4 w-100 col-12",to:"/register",children:"Quero reservar meu lugar"})]})]})]})})},b=a(3),u=a.n(b),x=a(6),f=a(4),h=a(18),g=a(51),p=a.n(g).a.create({baseURL:"http://localhost:3333/api/v1"}),O=a(16),v=a(8),N=a(31),w=function(e){var t=e.type,a=e.placeholder,c=e.name,n=e.className,r={backgroundColor:"#F4F4F4",borderColor:"#F2F2F2"},o=Object(s.useState)(!1),l=Object(v.a)(o,2),i=l[0],d=l[1];return Object(m.jsxs)("div",{style:r,className:"input-group border rounded mt-2",children:[Object(m.jsx)("input",Object(O.a)({style:r,type:i?"text":t,className:n,placeholder:a},c)),"password"===t&&(i?Object(m.jsx)("span",{className:"input-group-text bg-transparent border-0",children:Object(m.jsx)(N.a,{size:"1.5rem",color:"#6A6A6A",cursor:"pointer",onClick:function(){return d(!1)}})}):Object(m.jsx)("span",{className:"input-group-text bg-transparent border-0",children:Object(m.jsx)(N.b,{size:"1.5rem",color:"#6A6A6A",cursor:"pointer",onClick:function(){return d(!0)}})}))]})},y=a(17),_=function(){document.title="REGISTER | Orange Desk";var e=Object(h.a)(),t=e.handleSubmit,a=e.register,s=e.formState.errors,n=Object(l.f)(),r=function(){var e=Object(x.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.post("/register",t);case 3:f.toast.success("Usu\xe1rio cadastrado com sucesso!",{position:f.toast.POSITION.TOP_RIGHT}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response.data),f.toast.error(e.t0.response.data[0].message,{position:f.toast.POSITION.TOP_RIGHT});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"container-lg d-flex flex-column align-items-center vh-100",children:[Object(m.jsxs)("header",{className:"col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4 mt-3 mt-lg-4",children:[Object(m.jsx)(y.a,{className:"icon-size col-2 bg-white",color:"#6A6A6A",onClick:function(){return n.goBack()}}),Object(m.jsx)(o.b,{className:"col-3 col-md-2 col-lg-1",to:"/",children:Object(m.jsx)("img",{className:"img-fluid p-2",src:i,alt:"Logotipo FCamara"})})]}),Object(m.jsxs)("main",{className:"container-lg d-flex flex-column justify-content-center align-items-center mt-5",children:[Object(m.jsxs)("div",{className:"col-12 col-md-6 ms-4",children:[Object(m.jsx)("h5",{className:"fs-5 fw__extra-bold",children:"Vamos come\xe7ar?"}),Object(m.jsx)("p",{className:"fs__light",children:"S\xf3 precisamos de algumas informa\xe7\xf5es."})]}),Object(m.jsxs)("div",{className:"row col-12 col-md-6 mt-4",children:[Object(m.jsxs)("form",{className:"col-12",onSubmit:t(r),children:[Object(m.jsx)(w,{type:"text",className:"form-control form fw__light shadow-none",placeholder:"Nome *",name:a("name",{required:!0})}),s.name&&"required"===s.name.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)(w,{type:"email",className:"form-control form fw__light shadow-none",placeholder:"Email *",name:a("email",{required:!0})}),s.email&&"required"===s.email.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)(w,{type:"password",className:"form-control form fw__light shadow-none",placeholder:"Senha *",name:a("password",{required:!0})}),s.password&&"required"===s.password.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)(w,{type:"password",className:"form-control form fw__light shadow-none",placeholder:"Confirme a senha *",name:a("password_confirmation",{required:!0})}),s.password_confirmation&&"required"===s.password_confirmation.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)("button",{id:"btnRegister",className:"btn-orange w-100 mt-5",children:"Criar cadastro e continuar"}),Object(m.jsx)(f.ToastContainer,{})]}),Object(m.jsx)(o.b,{className:"btn-white mt-3",to:"/login",children:"J\xe1 tenho login"})]})]})]})})},k=function(){document.title="LOGIN | Orange Desk";var e=Object(h.a)(),t=e.handleSubmit,a=e.register,s=e.formState.errors,n=Object(l.f)(),r=function(){var e=Object(x.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.post("/sessions",t);case 3:a=e.sent,f.toast.success("Bem vindo!",{position:f.toast.POSITION.TOP_RIGHT}),localStorage.setItem("token",a.data.token),n.push("office/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),f.toast.error(e.t0.response.data[0].message,{position:f.toast.POSITION.TOP_RIGHT});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"container-lg d-flex flex-column align-items-center vh-100",children:[Object(m.jsxs)("header",{className:"col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4 mt-3 mt-lg-4",children:[Object(m.jsx)(y.a,{className:"icon-size col-2 bg-white",color:"#6A6A6A",onClick:function(){return n.goBack()}}),Object(m.jsx)(o.b,{className:"col-3 col-md-2 col-lg-1",to:"/",children:Object(m.jsx)("img",{className:"img-fluid p-2",src:i,alt:"Logotipo FCamara"})})]}),Object(m.jsxs)("main",{className:"container-lg d-flex flex-column justify-content-center align-items-center mt-5",children:[Object(m.jsxs)("div",{className:"col-12 col-md-6 ms-4",children:[Object(m.jsx)("h5",{className:"fs-5 fw__extra-bold",children:"Fa\xe7a seu login."}),Object(m.jsx)("p",{className:"fs__light",children:"S\xf3 precisamos de mais algumas informa\xe7\xf5es."})]}),Object(m.jsx)("div",{className:"row col-12 col-md-6 mt-4",children:Object(m.jsxs)("form",{className:"col-12 mt-4",onSubmit:t(r),children:[Object(m.jsx)(w,{type:"email",className:"form-control form fw__light shadow-none",placeholder:"Email",name:a("email",{required:!0})}),s.email&&"required"===s.email.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)(w,{type:"password",className:"form-control form fw__light shadow-none",placeholder:"Senha",name:a("password",{required:!0})}),s.password&&"required"===s.password.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsxs)("div",{className:"w-auto align-self-end text-center mt-md-3",children:[Object(m.jsx)("button",{id:"btnLogin",className:"form-control btn-orange mt-5 w-100",children:"Fazer login e continuar"}),Object(m.jsx)(f.ToastContainer,{})]})]})})]})]})})},S=function(e){var t=e.step;return Object(s.useEffect)((function(){document.querySelectorAll(".step").forEach((function(e){e.id===t?e.className="step-active":e.className="step-disabled"}))}),[]),Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center",children:[Object(m.jsx)("div",{id:"office",className:"step"}),Object(m.jsx)("div",{id:"date",className:"step"}),Object(m.jsx)("div",{id:"desk",className:"step"}),Object(m.jsx)("div",{id:"review",className:"step"})]})},C=function(e){var t=e.currentStep,a=Object(l.f)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("header",{className:"container-lg d-flex flex-column justify-content-between mt-3 mt-lg-4",children:[Object(m.jsxs)("nav",{className:"col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4",children:[Object(m.jsx)(y.a,{className:"icon-size col-2 bg-white",color:"#6A6A6A",onClick:function(){return a.goBack()}}),Object(m.jsx)(o.b,{className:"col-3 col-md-2 col-lg-1",to:"/",children:Object(m.jsx)("img",{className:"img-fluid p-2",src:i,alt:"Logotipo FCamara"})})]}),Object(m.jsx)(S,{step:t})]})})},I=a.p+"static/media/consultor-page.1a089ab4.svg",T=function(){var e=Object(l.f)(),t=Object(s.useState)([]),a=Object(v.a)(t,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){function e(){return(e=Object(x.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/unity");case 3:t=e.sent,a=t.data,r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f.toast.error("Erro ao buscar unidades",{position:f.toast.POSITION.TOP_RIGHT});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsxs)("div",{className:"container-lg container-md d-flex flex-column justify-content-start bg-white container vw-100 vh-100",children:[Object(m.jsx)(C,{currentStep:"office"}),Object(m.jsxs)("main",{className:"container-fluid row w-100 d-flex justify-content-start flex-column align-items-center flex-lg-row",children:[Object(m.jsx)("img",{className:"img-fluid w-md-25 col-lg-8 col-10",src:I,alt:"Colegas conversando de forma descontra\xedda no escrit\xf3rio."}),Object(m.jsxs)("div",{className:"container-fluid col-lg-4 flex-column justify-content-evenly align-items-start mt-3",children:[Object(m.jsx)("div",{className:"col-md-12 mb-3 ms-2 fw__medium",children:Object(m.jsx)("p",{children:"Em qual unidade FCamara voc\xea vai?"})}),Object(m.jsx)("div",{className:"d-flex flex-column flex-md-row flex-lg-column w-100",children:n.map((function(t){return Object(m.jsx)("div",{className:"card hover btn w-100 m-md-1 mb-1",value:t.id,onClick:function(){localStorage.setItem("unity_id",t.id),console.log(localStorage.getItem("unity_id")),e.push("/office/schedule/")},children:Object(m.jsxs)("div",{className:"container d-flex flex-row justify-content-between \r align-items-center p-3 rounded text-white",children:[Object(m.jsxs)("div",{className:"text-start",children:[Object(m.jsx)("h1",{className:" fs-3 fw-bold text-orange",children:t.address.city}),Object(m.jsxs)("p",{className:"fs-10 fw-normal text-black",children:[t.address.road,",",t.address.number," - 2\xb0 andar",Object(m.jsx)("br",{}),t.address.district,",",t.address.city," -",t.address.state]})]}),Object(m.jsxs)("div",{className:"text-end fs-1 fw-bold text-blue",children:[console.log(t.is_main),1===t.is_main?"sede":"filial",Object(m.jsx)("h1",{className:"mt-3 fs-4 fw__bold text-orange",children:"S\xc3O PAULO"}),Object(m.jsxs)("p",{className:"fs-10 fw__light text-black col-11",children:["Rua Bela Cintra, 986 - 2\xb0 andar",Object(m.jsx)("br",{}),"Consola\xe7\xe3o, S\xe3o Paulo - SP"]})]}),Object(m.jsx)("div",{className:"text-end fs-1 fw__bold text-blue",children:"sede"})]})})}))})]})]})]}),Object(m.jsx)(f.ToastContainer,{})]})},q=a(32),F=(a(92),a.p+"static/media/calendar-img.3d87f977.svg"),P=function(){var e,t=Object(l.f)();document.title="CALENDAR | Orange Desk";var a=Object(q.utils)().getToday(),n=Object(s.useState)(a),r=Object(v.a)(n,2),o=r[0],i=r[1],d=Object(s.useState)({}),j=Object(v.a)(d,2),b=j[0],h=j[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("unity_id");function t(){return(t=Object(x.a)(u.a.mark((function t(){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("/unity/".concat(e));case 3:a=t.sent,s=a.data,h(s),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),f.toast.error("Erro ao buscar unidades",{position:f.toast.POSITION.TOP_RIGHT});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsxs)("div",{className:"container-lg d-flex flex-column justify-content-start bg-white container vw-100 vh-100",children:[Object(m.jsx)(C,{currentStep:"date"}),Object(m.jsxs)("main",{className:"mt-3 d-flex flex-column flex-lg-row justify-content-center align-items-center",children:[Object(m.jsxs)("div",{className:"mt-4 align-self-start",children:[Object(m.jsxs)("h1",{className:"text-grey fs-5 fw-normal",children:["Unidade: ",b.is_main?"Sede":"Filial"," - ",null===b||void 0===b||null===(e=b.address)||void 0===e?void 0:e.city]}),Object(m.jsx)("p",{className:"text-black mt-3 mb-lg-4",children:"Quais os dias que voc\xea precisa ir ao escrit\xf3rio?"}),Object(m.jsx)("img",{className:"img-fluid mt-4 col-lg-10 image",src:F,alt:"Pessoas diversificadas trabalhando no escrit\xf3rio."})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(q.Calendar,{value:o,onChange:i,minimumDate:a,maximumDate:{year:a.year,month:a.month+1,day:a.day},locale:"en",calendarClassName:"mt-lg-4"}),Object(m.jsxs)("div",{className:"g-col-5 align-self-start mt-2 mb-2 w-100",children:[Object(m.jsxs)("span",{className:"fw__light text-blue",children:["Dia ",o.day<10?"0".concat(o.day," - "):o.day,"/",o.month<10?"0".concat(o.month," - "):o.month]}),Object(m.jsxs)("span",{className:"fw__extra-bold text-blue",children:[25," mesas dispon\xedveis"]}),Object(m.jsx)("button",{className:"btn-orange mt-lg-4 w-100",onClick:function(){var e=new Date("".concat(o.year,"-").concat(o.month,"-").concat(o.day));localStorage.setItem("date",e),t.push("/desks")},children:"Confirmar data"})]})]})]})]}),Object(m.jsx)(f.ToastContainer,{})]})},A=a.p+"static/media/signs.18733e62.svg",E=a.p+"static/media/numered-desk.24b841fe.svg",D=function(){document.title="INSTRUCTIONS | Orange Desk;";var e=Object(l.f)();return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"container-lg d-flex flex-column justify-content-start bg-white container vw-100 vh-100",children:[Object(m.jsxs)("header",{className:"col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4 mt-3 mt-lg-4",children:[Object(m.jsx)(y.a,{className:"icon-size col-2 bg-white",color:"#6A6A6A",onClick:function(){return e.goBack()}}),Object(m.jsx)(o.b,{className:"col-3 col-md-2 col-lg-1",to:"/",children:Object(m.jsx)("img",{className:"img-fluid p-2",src:i,alt:"Logotipo FCamara"})})]}),Object(m.jsxs)("main",{className:"row vw-100 container-lg d-flex flex-column mt-md-4",children:[Object(m.jsxs)("div",{className:"vw-100 ms-auto me-auto",children:[Object(m.jsx)("p",{className:"text-start text-md-center text-black md-fs-16 fs-12 fw__light",children:"Nessa etapa voc\xea vai escolher o andar e o n\xfamero da mesa que ir\xe1 ocupar."}),Object(m.jsx)("h4",{className:"text-dark-orange text-start text-md-center fw__bold mt-1",children:"Mas fique tranquilo!"})]}),Object(m.jsxs)("div",{className:"d-md-flex flex-md-row col-md-11 col-lg-8 justify-content-md-between ms-auto me-auto mt-md-5",children:[Object(m.jsxs)("div",{className:"text-black fw__light mt-1 d-flex flex-column justify-content-md-start align-items-center",children:[Object(m.jsx)("p",{className:"col-md-8",children:"Quando chegar no escrit\xf3rio, as placas v\xe3o te orientar."}),Object(m.jsx)("img",{src:A,className:"img-fluid mt-3 col-8",alt:"Pessoa lendo placas de orienta\xe7\xe3o"})]}),Object(m.jsxs)("div",{className:"text-black fw__light mt-1 d-flex flex-column justify-content-md-start align-items-center",children:[Object(m.jsx)("p",{className:"col-md-8",children:"E voc\xea encontrar\xe1 sua mesa numerada."}),Object(m.jsx)("img",{src:E,className:"img-fluid mt-3 col-10",alt:"Mesa laranja com objetos de escrit\xf3rio em cima."})]})]}),Object(m.jsx)("div",{className:"col-md-10 col-lg-8 mt-md-5 align-self-center",children:Object(m.jsx)(o.b,{to:"/desks",id:"btnContinue",className:"text-center btn-orange form-control shadow-none",children:"Obrigado (a) por avisar!"})})]})]})})},R=a.p+"static/media/desks-layout.0d240884.svg",G=function(){var e=Object(l.f)(),t=Object(s.useState)(""),a=Object(v.a)(t,2),n=a[0],r=a[1],o=function(e){return r(e.target.value)};Object(s.useEffect)((function(){var e=document.getElementById("btnSelectDesk");""!==n&&void 0!==n&&n.length<=2&&Number(n)>=1&&Number(n)<=40?(e.removeAttribute("disabled"),e.setAttribute("style","btn-orange")):(e.setAttribute("disabled",""),e.setAttribute("style","background-color: var(--grey); color: var(--dark-grey); border-color: var(--grey)"))}),[o]);return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"container-lg d-flex flex-column justify-content-start bg-white container vw-100 vh-100",children:[Object(m.jsx)(C,{currentStep:"desk"}),Object(m.jsx)("main",{className:"mt-1 mt-md-5 d-flex flex-column flex-lg-row justify-content-center align-items-center",children:Object(m.jsxs)("div",{className:"container-lg d-flex flex-column flex-lg-row justify-content-around align-items-start",children:[Object(m.jsx)("p",{className:"d-md-block text-start text-md-center col-md-8 fw__medium d-lg-none ms-auto me-auto text-black mt-4 mb-md-3 mt-lg-5",children:"Escolha sua esta\xe7\xe3o de trabalho"}),Object(m.jsx)("img",{className:"img-fluid mt-4 ms-auto me-auto col-lg-4",src:R,alt:"Imagem ilustrando layout de um escrit\xf3rio FCamara."}),Object(m.jsxs)("div",{className:"col-md-4 col-12 mt-md-5 mt-3",children:[Object(m.jsx)("h5",{className:"d-md-block d-none mb-md-3",children:"Escolha sua esta\xe7\xe3o de trabalho"}),Object(m.jsx)("input",{onChange:o,type:"number",style:{backgroundColor:"#F4F4F4"},className:"text-start fw__light form mt-lg-5 form-control shadow-none",placeholder:"Digite o n\xba da mesa que quer reservar",min:"1",max:"40",required:!0}),(""!==n&&Number(n)<1||Number(n)>40)&&Object(m.jsx)("span",{className:"text-danger",children:"O valor deve estar entre 1 e 40"}),Object(m.jsx)("div",{class:"accordion accordion-flush mt-3 mb-5",id:"accordionFlush",children:Object(m.jsxs)("div",{class:"accordion-item text-center",children:[Object(m.jsx)("p",{class:"accordion-header",id:"flush-showDesks",children:Object(m.jsx)("button",{style:{color:"#404099"},class:"collapsed bg-white shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne",children:"Mostrar mesas dispon\xedveis"})}),Object(m.jsx)("div",{id:"flush-collapseOne",class:"accordion-collapse collapse","aria-labelledby":"flush-showDesks","data-bs-parent":"#accordionFlush",children:Object(m.jsx)("div",{class:"accordion-body",children:"01 | 02 | 03"})})]})}),Object(m.jsx)("button",{id:"btnSelectDesk",onClick:function(){localStorage.setItem("desk",n),e.push("review/")},className:"form-control border-0 shadow-none mb-md-0 mb-3",children:"Escolher esta\xe7\xe3o de trabalho"})]})]})})]})})},H=a(52),L=a.n(H),z=function(){var e,t,a,n,r,o;document.title="REVIEW | Orange Desk";var i=Object(h.a)(),d=i.handleSubmit,j=i.register,b=i.formState.errors,g=new Date(localStorage.getItem("date")).toLocaleDateString("pt-BR",{timeZone:"UTC"}),O=new Date(localStorage.getItem("date"));O=L()(O).format("YYYY-MM-DD");var N=localStorage.getItem("desk"),w=localStorage.getItem("unity_id"),y=Object(s.useState)([]),_=Object(v.a)(y,2),k=_[0],S=_[1],I=Object(s.useState)({}),T=Object(v.a)(I,2),q=T[0],F=T[1],P=Object(l.f)(),A={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},E=function(){var e=Object(x.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(O),t={unity_id:w,desk:N,date:O},e.next=5,p.post("/reserve",t,A);case 5:f.toast.success("Reserva feita com sucesso!",{position:f.toast.POSITION.TOP_RIGHT}),P.push("/confirmation"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data),f.toast.error(e.t0.response.data[0].message,{position:f.toast.POSITION.TOP_RIGHT});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){function e(){return(e=Object(x.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/unity/".concat(w));case 3:t=e.sent,a=t.data,S(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f.toast.error("Erro ao buscar unidades",{position:f.toast.POSITION.TOP_RIGHT});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function t(){return(t=Object(x.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/auth/",A);case 3:t=e.sent,a=t.data,console.log(a),F(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),f.toast.error("Erro ao buscar unidades",{position:f.toast.POSITION.TOP_RIGHT});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsxs)("div",{className:"container-lg container-md d-flex flex-column justify-content-start bg-white container vw-100 vh-100",children:[Object(m.jsx)(C,{currentStep:"review"}),Object(m.jsx)("main",{clasName:"container-lg row w-100 d-flex justify-content-start flex-column align-items-center flex-lg-row",children:Object(m.jsxs)("div",{className:"col-lg-6 col-md-10 ms-auto me-auto",children:[Object(m.jsx)("p",{className:"text-black mt-4 mt-lg-5 text-center",children:"Confira as informa\xe7\xf5es"}),Object(m.jsxs)("div",{className:"mt-4 ms-4",children:[Object(m.jsx)("h4",{className:"text-black fw__medium",children:q.name}),Object(m.jsx)("p",{className:"text-grey fw__light",children:q.email})]}),Object(m.jsxs)("div",{className:"mt-4 ms-4 me-4",children:[Object(m.jsxs)("div",{className:"d-flex justify-content-between text-grey fw__light",children:[Object(m.jsx)("p",{children:"data"}),Object(m.jsx)("p",{children:"mesa escolhida"})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-between text-blue fw__bold",children:[Object(m.jsx)("h4",{children:g}),Object(m.jsx)("h4",{children:N})]}),Object(m.jsxs)("div",{className:"mt-3",children:[Object(m.jsx)("p",{className:"text-grey fw__light",children:"unidade"}),Object(m.jsxs)("p",{className:"text-black",children:[k.is_main?"Sede":"Filial"," - ",null===k||void 0===k||null===(e=k.address)||void 0===e?void 0:e.city]}),Object(m.jsxs)("p",{className:"text-black fs-12 fw__light",children:[null===k||void 0===k||null===(t=k.address)||void 0===t?void 0:t.road,", ",null===k||void 0===k||null===(a=k.address)||void 0===a?void 0:a.number," - 2\xb0 andar",Object(m.jsx)("br",{}),null===k||void 0===k||null===(n=k.address)||void 0===n?void 0:n.district,", ",null===k||void 0===k||null===(r=k.address)||void 0===r?void 0:r.city," - ",null===k||void 0===k||null===(o=k.address)||void 0===o?void 0:o.state]})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("form",{className:"mt-5",onSubmit:d(E),children:[Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)("input",{type:"checkbox",value:!0,checked:"checked",className:"form-control me-4 fw__light checkbox-size shadow-none",name:j("checkbox",{required:!0})}),Object(m.jsxs)("label",{className:"text-grey fs-10 fw__light d-flex justify-space-between",children:["Eu me comprometo a respeitar as regras de distanciamento e os demais protocolos com o objetivo de combater a dissemina\xe7\xe3o do coronav\xedrus.",b.password&&"required"===b.password.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"})]})]}),Object(m.jsx)("button",{id:"btnRegister",onClick:E,className:"btn-orange w-100 mt-3 mb-2",children:"Confirmar agendamento"})]})})]})]})})]}),Object(m.jsx)(f.ToastContainer,{})]})},B=a.p+"static/media/confirmation-page.32d64e54.svg",M=function(){return document.title="CONFIRMATION | Orange Desk",Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"container-lg container-md d-flex flex-column justify-content-start align-items-center bg-white container vw-100 vh-100",children:[Object(m.jsx)("header",{className:"col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mt-3 mb-sm-1 mt-lg-4",children:Object(m.jsx)(o.b,{className:"col-3 col-md-2 col-lg-1",to:"/",children:Object(m.jsx)("img",{className:"img-fluid p-2",src:i,alt:"Logotipo FCamara"})})}),Object(m.jsxs)("main",{className:"container-fluid row w-100 d-flex justify-content-evenly flex-column align-items-center flex-lg-row mt-md-3",children:[Object(m.jsx)("img",{className:"img-fluid col-10 col-lg-6",src:B,alt:"Rapaz sentado com um notebook no colo, observando que seu agendamento foi conclu\xeddo."}),Object(m.jsxs)("div",{className:"d-flex flex-column align-items-center col-lg-6 col-lg-5 col-12 mt-2",children:[Object(m.jsx)("h4",{className:"fw__bold text-black",children:"Reserva conclu\xedda"}),Object(m.jsx)("p",{className:"mt-2 text-center text-orange fw__light",children:"Prontinho, Sangue Laranja!"}),Object(m.jsxs)("p",{className:"mt-2 text-center text-black fw__light",children:["Voc\xea pode frequentar o escrit\xf3rio no dia selecionado entre \xe0s ",Object(m.jsx)("span",{className:"fw__extra-bold",children:"8h e 18h"})]}),Object(m.jsx)("p",{className:"mt-2 text-center text-black",children:"N\xe3o esque\xe7a o \xe1lcool gel! At\xe9 mais :D"}),Object(m.jsx)(o.b,{className:"btn-orange fw__extra-bold mt-2 mt-md-4 w-100 col-12 text-center",to:"#",children:"Ver meus agendamentos"})]})]})]})})},U=function(){document.title="ADM SIGN-UP | Orange Desk";var e=Object(h.a)(),t=e.register,a=e.handleSubmit,s=e.formState.errors;return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row vh-100 d-flex align-items-center",children:[Object(m.jsx)("div",{className:"col-md-6 col-12",children:Object(m.jsx)("img",{src:I,alt:"Pessoas sentadas",className:"img-fluid"})}),Object(m.jsxs)("div",{className:"col-md-6 col-12",children:[Object(m.jsx)("h5",{children:"Bateu saudade dos colegas? Precisa fazer uma reuni\xe3o importante?"}),Object(m.jsxs)("form",{onSubmit:a((function(e){p.post("/register_company",e).then((function(e){f.toast.success("Empresa cadastrada com sucesso!",{position:f.toast.POSITION.TOP_RIGHT})})).catch((function(e){console.log(e.response.data),f.toast.error(e.response.data[0].message,{position:f.toast.POSITION.TOP_RIGHT})}))})),children:[Object(m.jsx)("input",Object(O.a)({type:"text",placeholder:"Nome de Usu\xe1rio *",className:"form-control"},t("username",{required:!0}))),s.username&&"required"===s.username.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)("input",Object(O.a)({type:"text",placeholder:"Apelido (Usar\xe3o para te encontrar) *",className:"form-control mt-3"},t("slug",{required:!0}))),s.slug&&"required"===s.slug.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)("input",Object(O.a)({type:"email",placeholder:"Email *",className:"form-control mt-3"},t("email",{required:!0}))),s.email&&"required"===s.email.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)("input",Object(O.a)({type:"text",placeholder:"Telefone *",className:"form-control mt-3"},t("phone",{required:!0}))),s.phone&&"required"===s.phone.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)("input",Object(O.a)({type:"password",placeholder:"Senha *",className:"form-control mt-3"},t("password",{required:!0}))),s.password&&"required"===s.password.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)("input",Object(O.a)({type:"password",placeholder:"Confirmar Senha *",className:"form-control mt-3"},t("password_confirmation",{required:!0}))),s.password_confirmation&&"required"===s.password_confirmation.type&&Object(m.jsx)("span",{className:"text-danger",children:"Campo obrigat\xf3rio"}),Object(m.jsx)("button",{className:"btn-orange mt-3 w-100",children:"Cadastrar Minha Empresa"})]})]})]}),Object(m.jsx)(f.ToastContainer,{})]})})};a(94);var V=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(o.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/",exact:!0,component:j}),Object(m.jsx)(l.a,{path:"/register",exact:!0,component:_}),Object(m.jsx)(l.a,{path:"/login",exact:!0,component:k}),Object(m.jsx)(l.a,{path:"/office",exact:!0,component:T}),Object(m.jsx)(l.a,{path:"/office/schedule/",exact:!0,component:P}),Object(m.jsx)(l.a,{path:"/instructions",exact:!0,component:D}),Object(m.jsx)(l.a,{path:"/desks",exact:!0,component:G}),Object(m.jsx)(l.a,{path:"/review",exact:!0,component:z}),Object(m.jsx)(l.a,{path:"/confirmation",exact:!0,component:M}),Object(m.jsx)(l.a,{path:"/adm/criar",exact:!0,component:U}),Object(m.jsx)(l.a,{path:"/adm/home",exact:!0,component:j})]})})})};a(95),a(96),a(117);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root"))},92:function(e,t,a){},94:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.552e9700.chunk.js.map