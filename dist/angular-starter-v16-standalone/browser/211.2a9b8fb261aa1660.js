"use strict";(self.webpackChunkangular_starter_v16_standalone=self.webpackChunkangular_starter_v16_standalone||[]).push([[211],{2211:(ao,p,a)=>{a.r(p),a.d(p,{PageCivilMarriageComponent:()=>lo});var l=a(95),y=a(1576),d=a(6814),g=a(3714),f=a(1865),u=a(6218),v=a(354),h=a(7680),x=a(411),c=function(i){return i.Nadia_Familly="Famille Nadia",i.Samuel_Familly="Famille Samuel",i}(c||{}),_=a(707),b=a(7213),Z=a(9689),o=a(4946),F=a(3749),A=a(5219);function T(i,r){if(1&i&&(o.ynx(0),o.TgZ(1,"div",31)(2,"div",32),o._UZ(3,"img",33),o.qZA(),o.TgZ(4,"div",34)(5,"p"),o._uU(6),o.qZA(),o.TgZ(7,"span"),o._uU(8),o.qZA()()(),o.BQk()),2&i){const n=r.$implicit;o.xp6(3),o.s9C("src",n.image,o.LSH),o.xp6(3),o.Oqu(n.familly),o.xp6(2),o.hij("",n.price," \u20ac ")}}function q(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Renseignez votre nom "),o.qZA())}function k(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,q,2,0,"small",23),o.qZA()),2&i){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.f.lastname.errors?null:n.f.lastname.errors.required)}}function N(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Renseignez votre pr\xe9nom "),o.qZA())}function U(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,N,2,0,"small",23),o.qZA()),2&i){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.f.firstname.errors?null:n.f.firstname.errors.required)}}function w(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Renseignez votre adresse mail "),o.qZA())}function W(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"V\xe9rifiez votre adresse mail"),o.qZA())}function I(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,w,2,0,"small",23),o.YNc(2,W,2,0,"small",23),o.qZA()),2&i){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.f.email.errors?null:n.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==n.f.email.errors?null:n.f.email.errors.email)}}function B(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Indiquez si vous serez pr\xe9sent ou non "),o.qZA())}function Q(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,B,2,0,"small",23),o.qZA()),2&i){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.f.isPresent.errors?null:n.f.isPresent.errors.required)}}function z(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Indiquez si vous d\xe9sirez un pagne"),o.qZA())}function J(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,z,2,0,"small",23),o.qZA()),2&i){const n=o.oxw(2);o.xp6(1),o.Q6J("ngIf",null==n.f.isGuestWantLoincloth.errors?null:n.f.isGuestWantLoincloth.errors.required)}}function S(i,r){if(1&i&&(o.ynx(0),o.TgZ(1,"div",48),o._UZ(2,"img",33),o.TgZ(3,"span"),o._uU(4),o.qZA(),o._UZ(5,"p-inputNumber",49),o.qZA(),o.BQk()),2&i){const n=r.$implicit,e=r.index;o.xp6(2),o.s9C("src",n.image,o.LSH),o.xp6(2),o.hij(" ",n.familly," "),o.xp6(1),o.Q6J("showButtons",!0)("min",0)("step",1)("formControlName",0===e?"quantityNadia":"quantitySamuel")}}function L(i,r){1&i&&(o.TgZ(0,"div",35)(1,"small")(2,"b"),o._uU(3," Veuillez choisir une quantit\xe9 "),o.qZA()()())}function Y(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Indiquez une adresse de livraison"),o.qZA())}function G(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,Y,2,0,"small",23),o.qZA()),2&i){const n=o.oxw(3);o.xp6(1),o.Q6J("ngIf",null==n.f.deleveryAdress.errors?null:n.f.deleveryAdress.errors.required)}}function E(i,r){if(1&i&&(o.ynx(0),o.TgZ(1,"div",43)(2,"p"),o._uU(3,"Choisissez un pagne en indiquant la quantit\xe9"),o.qZA(),o.TgZ(4,"div",44)(5,"div",45),o.YNc(6,S,6,6,"ng-container",4),o.qZA(),o.YNc(7,L,4,0,"div",9),o.qZA(),o.TgZ(8,"div",6)(9,"label",46),o._uU(10,"Adresse de livraison"),o.qZA(),o._UZ(11,"input",47),o.YNc(12,G,2,1,"div",9),o.qZA()(),o.BQk()),2&i){const n=o.oxw(2);o.xp6(6),o.Q6J("ngForOf",n.loinclothList),o.xp6(1),o.Q6J("ngIf",n.isQuantityNotAppropriate),o.xp6(5),o.Q6J("ngIf",n.isFormSubmitted&&n.f.deleveryAdress.errors)}}function D(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Renseignez un accompagnant"),o.qZA())}function O(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,D,2,0,"small",23),o.qZA()),2&i){const n=o.oxw().$implicit;let e;o.xp6(1),o.Q6J("ngIf",null==(e=n.get("type"))||null==e.errors?null:e.errors.required)}}function P(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Renseignez le nom de l'accompagnant"),o.qZA())}function j(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,P,2,0,"small",23),o.qZA()),2&i){const n=o.oxw().$implicit;let e;o.xp6(1),o.Q6J("ngIf",null==(e=n.get("companionLastname"))||null==e.errors?null:e.errors.required)}}function M(i,r){1&i&&(o.TgZ(0,"small"),o._uU(1,"Renseignez le pr\xe9nom de l'accompagnant"),o.qZA())}function V(i,r){if(1&i&&(o.TgZ(0,"div",35),o.YNc(1,M,2,0,"small",23),o.qZA()),2&i){const n=o.oxw().$implicit;let e;o.xp6(1),o.Q6J("ngIf",null==(e=n.get("companionFirstname"))||null==e.errors?null:e.errors.required)}}function R(i,r){if(1&i){const n=o.EpF();o.TgZ(0,"div",50)(1,"div",51)(2,"div",52)(3,"span",53),o._uU(4),o.qZA(),o.TgZ(5,"button",54),o.NdJ("click",function(){const m=o.CHM(n).index,s=o.oxw(2);return o.KtG(s.removeCompanion(m))}),o.TgZ(6,"span"),o._uU(7,"Supprimer"),o.qZA(),o._UZ(8,"i",55),o.qZA()(),o.TgZ(9,"div",56)(10,"div",6)(11,"label"),o._uU(12,"Par qui serez-vous accompagn\xe9s ?"),o.qZA(),o._UZ(13,"p-dropdown",57),o.YNc(14,O,2,1,"div",9),o.qZA(),o.TgZ(15,"div",6)(16,"label",58),o._uU(17,"Nom"),o.qZA(),o._UZ(18,"input",59),o.YNc(19,j,2,1,"div",9),o.qZA(),o.TgZ(20,"div",6)(21,"label",58),o._uU(22,"Pr\xe9nom"),o.qZA(),o._UZ(23,"input",60),o.YNc(24,V,2,1,"div",9),o.qZA()()()()}if(2&i){const n=r.$implicit,e=r.index,t=o.oxw(2);let m,s,C;o.xp6(1),o.Q6J("formGroupName",e),o.xp6(3),o.hij("ACCOMPAGNANT ",e+1,""),o.xp6(9),o.Q6J("options",t.companionTypeList),o.xp6(1),o.Q6J("ngIf",t.isFormSubmitted&&(null==(m=n.get("type"))?null:m.errors)),o.xp6(2),o.MGl("for","lastname",e,""),o.xp6(2),o.MGl("id","lastname",e,""),o.xp6(1),o.Q6J("ngIf",t.isFormSubmitted&&(null==(s=n.get("companionLastname"))?null:s.errors)),o.xp6(2),o.MGl("for","firstname",e,""),o.xp6(2),o.MGl("id","firstname",e,""),o.xp6(1),o.Q6J("ngIf",t.isFormSubmitted&&(null==(C=n.get("companionFirstname"))?null:C.errors))}}function H(i,r){if(1&i){const n=o.EpF();o.ynx(0),o.TgZ(1,"div",14)(2,"p",15),o._uU(3,"Pagne ?"),o.qZA(),o.TgZ(4,"div",16)(5,"div",17)(6,"label",36),o._uU(7,"Oui"),o.qZA(),o._UZ(8,"p-radioButton",37),o.qZA(),o.TgZ(9,"div",20),o._UZ(10,"p-radioButton",38),o.TgZ(11,"label",39),o._uU(12,"Non"),o.qZA()()(),o.YNc(13,J,2,1,"div",9),o.qZA(),o.YNc(14,E,13,3,"ng-container",23),o.YNc(15,R,25,10,"div",40),o.TgZ(16,"button",41),o.NdJ("click",function(){o.CHM(n);const t=o.oxw();return o.KtG(t.addCompanion())}),o._UZ(17,"i",42),o.TgZ(18,"span"),o._uU(19,"Ajoutez un accompagnant"),o.qZA()(),o.BQk()}if(2&i){const n=o.oxw();o.xp6(13),o.Q6J("ngIf",n.isFormSubmitted&&n.f.isGuestWantLoincloth.errors),o.xp6(1),o.Q6J("ngIf","Oui"===n.f.isGuestWantLoincloth.value),o.xp6(1),o.Q6J("ngForOf",n.companions.controls)}}const $=function(){return{width:"20px",height:"20px"}};function X(i,r){1&i&&(o.ynx(0),o._UZ(1,"p-progressSpinner",61),o.BQk()),2&i&&(o.xp6(1),o.Akn(o.DdM(2,$)))}function K(i,r){1&i&&(o.TgZ(0,"span"),o._uU(1," Valider "),o.qZA(),o._UZ(2,"i",62))}function oo(i,r){1&i&&(o.TgZ(0,"span",63),o._uU(1,"Pr\xe9sence pour mariage civil confirm\xe9e"),o.qZA())}function io(i,r){if(1&i){const n=o.EpF();o.TgZ(0,"p-button",64),o.NdJ("click",function(){o.CHM(n);const t=o.oxw();return o.KtG(t.onNavigate())}),o._uU(1," R\xe9server pour le mariage r\xe9ligieux "),o.qZA()}}const no=function(){return{width:"50vw"}};let eo=(()=>{class i{constructor(n,e,t){this.fb=n,this.weddingConfirmationService=e,this.route=t,this.isFormSubmitted=!1,this.isWeddingConfirmationSubmittedAndNotErrorOnClientSide=!1,this.isQuantityNotAppropriate=!1,this.displayModal=!1}ngOnInit(){this.getLoinclotchs(),this.initCompanionTypes(),this.initForm(),this.getGuestStateData(),this.checkForPresenceAndUpdatabeValidators(),this.checkForDeliveryWhenUserWantClothAndUpdatabeValidators()}getGuestStateData(){const n=history.state.guest;n?.firstname&&this.civilWeddingBookingForm?.get("firstname")?.setValue(n.firstname),n?.lastname&&this.civilWeddingBookingForm?.get("lastname")?.setValue(n.lastname),n?.email&&this.civilWeddingBookingForm?.get("email")?.setValue(n.email)}initForm(){this.civilWeddingBookingForm=this.fb.group({firstname:["",l.kI.required],lastname:["",l.kI.required],email:["",[l.kI.required,l.kI.email]],isPresent:["",l.kI.required],isGuestWantLoincloth:[""],quantityNadia:[0],quantitySamuel:[0],deleveryAdress:[""],message:[""],companions:this.fb.array([])})}checkForPresenceAndUpdatabeValidators(){this.civilWeddingBookingForm.get("isPresent")?.valueChanges.subscribe({next:n=>{const e=this.civilWeddingBookingForm.get("isGuestWantLoincloth");"Oui"===n?e?.setValidators(l.kI.required):e?.removeValidators(l.kI.required),e?.updateValueAndValidity()}})}checkForDeliveryWhenUserWantClothAndUpdatabeValidators(){this.civilWeddingBookingForm.get("isGuestWantLoincloth")?.valueChanges.subscribe({next:n=>{const e=this.civilWeddingBookingForm.get("deleveryAdress");"Oui"===n?e?.setValidators(l.kI.required):e?.removeValidators(l.kI.required),e?.updateValueAndValidity()}})}initCompanionTypes(){this.companionTypeList=[{name:"Votre conjoint"},{name:"Votre enfant"},{name:"Ami / Amie"}]}checkLoinclothQuantity(){if(this.isQuantityNotAppropriate=!1,"Oui"===this.civilWeddingBookingForm.get("isGuestWantLoincloth")?.value){const e=this.civilWeddingBookingForm.get("quantityNadia")?.value,t=this.civilWeddingBookingForm.get("quantitySamuel")?.value;if(e+t<=0)return void(this.isQuantityNotAppropriate=!0)}}getLoinclotchs(){this.loinclothList=[{image:"../../../../../../../assets/img/home/loincloth-nadia.png",familly:"Famille de Nadia",price:35},{image:"../../../../../../../assets/img/home/loincloth-sam.jpeg",familly:"Famille de Samuel",price:35}]}get f(){return this.civilWeddingBookingForm.controls}get companions(){return this.civilWeddingBookingForm.get("companions")}addCompanion(){this.companions.push(this.createCompanionFormGroup())}createCompanionFormGroup(){return this.fb.group({type:["",l.kI.required],companionFirstname:["",l.kI.required],companionLastname:["",l.kI.required]})}removeCompanion(n){this.companions.removeAt(n)}onSubmitCivilWeddingForm(){if(this.isFormSubmitted=!0,this.checkLoinclothQuantity(),this.civilWeddingBookingForm.invalid||this.isQuantityNotAppropriate)return;let n={firstname:this.civilWeddingBookingForm.get("firstname")?.value,lastname:this.civilWeddingBookingForm.get("lastname")?.value,email:this.civilWeddingBookingForm.get("email")?.value,isPresent:this.civilWeddingBookingForm.get("isPresent")?.value};if("Oui"===this.civilWeddingBookingForm.get("isGuestWantLoincloth")?.value){let e=[];this.civilWeddingBookingForm.get("quantityNadia")?.value>0&&e.push({familly:c.Nadia_Familly,quantity:this.civilWeddingBookingForm.get("quantityNadia")?.value,deliveryAdress:this.civilWeddingBookingForm.get("deleveryAdress")?.value}),this.civilWeddingBookingForm.get("quantitySamuel")?.value>0&&e.push({familly:c.Samuel_Familly,quantity:this.civilWeddingBookingForm.get("quantitySamuel")?.value,deliveryAdress:this.civilWeddingBookingForm.get("deleveryAdress")?.value}),n={...n,loinclothes:e},this.civilWeddingBookingForm.get("deleveryAdress")}if(this.civilWeddingBookingForm.get("message")?.value&&(n={...n,message:this.civilWeddingBookingForm.get("message")?.value}),this.civilWeddingBookingForm.get("companions")?.value.length>0){const t=(this.civilWeddingBookingForm.get("companions")?.value).map(m=>({type:m.type.name,firstname:m.companionFirstname,lastname:m.companionLastname}));n={...n,companions:t}}this.isWeddingConfirmationSubmittedAndNotErrorOnClientSide=!0,this.displayModal=!0,this.weddingConfirmationService.confirmCivilWedding(n).subscribe({next:()=>{},error:()=>{}})}onNavigate(){this.displayModal=!1;const n={firstname:this.civilWeddingBookingForm.get("firstname")?.value,lastname:this.civilWeddingBookingForm.get("lastname")?.value,email:this.civilWeddingBookingForm.get("email")?.value};this.route.navigate(["confirmation-mariage-religieux"],{state:{guest:n}})}static#o=this.\u0275fac=function(e){return new(e||i)(o.Y36(l.qu),o.Y36(F.G),o.Y36(Z.F0))};static#i=this.\u0275cmp=o.Xpm({type:i,selectors:[["app-civil-form"]],standalone:!0,features:[o.jDz],decls:50,vars:17,consts:[[1,"civil-form"],[1,"content","my-container"],[1,"loincloths"],[1,"loincloths-list"],[4,"ngFor","ngForOf"],[3,"formGroup","ngSubmit"],[1,"form-element"],["for","lastname"],["formControlName","lastname","id","lastname","type","text","pInputText",""],["class","error-feedback",4,"ngIf"],["for","first"],["formControlName","firstname","id","first","type","text","pInputText",""],["for","email"],["formControlName","email","id","email","type","text","pInputText",""],[1,"form-element","radio-bloc"],[1,"explanations"],[1,"radios"],[1,"radio"],["for","yes-present"],["formControlName","isPresent","inputId","yes-present","value","Oui"],[1,"radio","no"],["formControlName","isPresent","inputId","no-present","value","Non"],["for","no-present"],[4,"ngIf"],["formControlName","message","rows","10","cols","30","pInputTextarea","",3,"autoResize"],["type","submit",1,"send-button"],[4,"ngIf","ngIfElse"],["defaultText",""],["maskStyleClass","mask","styleClass","confirmDialog","header","Header",3,"modal","draggable","resizable","visible","visibleChange"],["pTemplate","header"],["pTemplate","footer"],[1,"loincloth"],[1,"image-wrapper"],[3,"src"],[1,"texts"],[1,"error-feedback"],["for","yes-loincloth"],["formControlName","isGuestWantLoincloth","inputId","yes-loincloth","value","Oui"],["formControlName","isGuestWantLoincloth","inputId","no-loincloth","value","Non"],["for","no-loincloth"],["class","companions","formArrayName","companions",4,"ngFor","ngForOf"],["type","button",1,"add-button",3,"click"],[1,"pi","pi-plus"],[1,"loincloths-box"],[1,"loincloths-form-bloc"],[1,"loincloths-form"],["for","adresse"],["formControlName","deleveryAdress","id","adresse","type","text","pInputText",""],[1,"loincloth-form"],["buttonLayout","horizontal","inputId","horizontal","spinnerMode","horizontal","decrementButtonClass","buttons-number","incrementButtonClass","buttons-number","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"showButtons","min","step","formControlName"],["formArrayName","companions",1,"companions"],[1,"companion",3,"formGroupName"],[1,"top"],[1,"header"],[3,"click"],[1,"pi","pi-trash"],[1,"bottom"],["formControlName","type","optionLabel","name","placeholder","Choisir ...",3,"options"],[3,"for"],["formControlName","companionLastname","type","text","pInputText","",3,"id"],["formControlName","companionFirstname","type","text","pInputText","",3,"id"],["strokeWidth","8"],[1,"pi","pi-send"],[1,"text-xl","font-bold"],["routerLink","/confirmation-mariage-religieux",1,"confirm-other",3,"click"]],template:function(e,t){if(1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),o._uU(4,"Les Pagnes"),o.qZA(),o.TgZ(5,"div",3),o.YNc(6,T,9,3,"ng-container",4),o.qZA()(),o.TgZ(7,"form",5),o.NdJ("ngSubmit",function(){return t.onSubmitCivilWeddingForm()}),o.TgZ(8,"div",6)(9,"label",7),o._uU(10,"Nom"),o.qZA(),o._UZ(11,"input",8),o.YNc(12,k,2,1,"div",9),o.qZA(),o.TgZ(13,"div",6)(14,"label",10),o._uU(15,"Pr\xe9nom"),o.qZA(),o._UZ(16,"input",11),o.YNc(17,U,2,1,"div",9),o.qZA(),o.TgZ(18,"div",6)(19,"label",12),o._uU(20,"Email"),o.qZA(),o._UZ(21,"input",13),o.YNc(22,I,3,2,"div",9),o.qZA(),o.TgZ(23,"div",14)(24,"p",15),o._uU(25,"Serez-vous pr\xe9sents ?"),o.qZA(),o.TgZ(26,"div",16)(27,"div",17)(28,"label",18),o._uU(29,"Oui"),o.qZA(),o._UZ(30,"p-radioButton",19),o.qZA(),o.TgZ(31,"div",20),o._UZ(32,"p-radioButton",21),o.TgZ(33,"label",22),o._uU(34,"Non"),o.qZA()()(),o.YNc(35,Q,2,1,"div",9),o.qZA(),o.YNc(36,H,20,3,"ng-container",23),o.TgZ(37,"div",6)(38,"label"),o._uU(39,"Un message pour les futur mari\xe9s ? (optionnel)"),o.qZA(),o._UZ(40,"textarea",24),o.qZA(),o.TgZ(41,"button",25),o.YNc(42,X,2,3,"ng-container",26),o.qZA(),o.YNc(43,K,3,0,"ng-template",null,27,o.W1O),o.qZA()()(),o.TgZ(45,"p-dialog",28),o.NdJ("visibleChange",function(s){return t.displayModal=s}),o.YNc(46,oo,2,0,"ng-template",29),o.TgZ(47,"p"),o._uU(48," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),o.qZA(),o.YNc(49,io,2,0,"ng-template",30),o.qZA()),2&e){const m=o.MAs(44);o.xp6(6),o.Q6J("ngForOf",t.loinclothList),o.xp6(1),o.Q6J("formGroup",t.civilWeddingBookingForm),o.xp6(5),o.Q6J("ngIf",t.isFormSubmitted&&t.f.lastname.errors),o.xp6(5),o.Q6J("ngIf",t.isFormSubmitted&&t.f.firstname.errors),o.xp6(5),o.Q6J("ngIf",t.isFormSubmitted&&t.f.email.errors),o.xp6(13),o.Q6J("ngIf",t.isFormSubmitted&&t.f.isPresent.errors),o.xp6(1),o.Q6J("ngIf","Oui"===t.f.isPresent.value),o.xp6(4),o.Q6J("autoResize",!0),o.xp6(2),o.Q6J("ngIf",t.isWeddingConfirmationSubmittedAndNotErrorOnClientSide)("ngIfElse",m),o.xp6(3),o.Akn(o.DdM(16,no)),o.Q6J("modal",!0)("draggable",!1)("resizable",!1)("visible",t.displayModal)}},dependencies:[d.O5,d.ax,l.UX,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,l.x0,l.CE,Z.rH,_.hJ,_.zx,A.jx,g.j,g.o,b.S,b.V,f.cc,f.EU,u.A,u.g,v.L$,v.Rn,h.L,h.G,x.kW,x.Lt],styles:[".mask{background:rgba(0,0,0,.7803921569)!important}.mask .confirmDialog .p-dialog-header{font-weight:900;color:#000;font-size:1.2rem;padding:20px;background:var(--sn-green-color)}.mask .confirmDialog .p-dialog-header span{margin-right:70px;color:var(--sn-gold-color)}.mask .confirmDialog .p-dialog-header .p-dialog-header-icons{border-radius:50%;background:white}.mask .confirmDialog .p-dialog-header .p-dialog-header-icons button{color:#000}.mask .confirmDialog .p-dialog-content{padding:30px 20px;font-size:15px;line-height:23px;background:#efefef;color:#272727}.mask .confirmDialog .p-dialog-footer{padding:12px 20px;background:#b0baba}.mask .confirmDialog .p-dialog-footer .confirm-other button{background-color:var(--sn-gold-color);color:#000;padding:7px 10px;border:1px solid var(--sn-gold-color)}.civil-form{display:flex;justify-content:center;margin-bottom:7rem}.civil-form .error-feedback{width:-moz-fit-content;width:fit-content;margin-top:.25rem;color:#dc3545}.civil-form .content{width:100%;display:flex;justify-content:center;align-items:flex-start;gap:5rem}.civil-form .content .loincloths{width:400px;height:-moz-fit-content;height:fit-content;padding:50px 30px;background-image:url(hero-bg.573dad24bce4ea15.png);background-repeat:no-repeat;background-size:cover;position:sticky;top:7rem;flex:1}.civil-form .content .loincloths h2{color:var(--sn-gold-color);margin-bottom:50px}.civil-form .content .loincloths .loincloths-list{display:flex;flex-direction:column;gap:2rem}.civil-form .content .loincloths .loincloths-list .loincloth{display:flex;align-items:center}.civil-form .content .loincloths .loincloths-list .loincloth:hover .image-wrapper{transform:scale(1.15);box-shadow:#d6b40bb3 0 0 12px}.civil-form .content .loincloths .loincloths-list .loincloth .image-wrapper{width:135px;height:135px;overflow:hidden;border-radius:50%;margin-right:1rem;transition:all .2s ease-in-out}.civil-form .content .loincloths .loincloths-list .loincloth .image-wrapper img{width:100%;height:100%;object-fit:cover;object-position:center}.civil-form .content .loincloths .loincloths-list .loincloth .texts{display:flex;flex-direction:column}.civil-form .content .loincloths .loincloths-list .loincloth .texts p{color:#fff;margin-bottom:10px}.civil-form .content .loincloths .loincloths-list .loincloth .texts span{color:var(--sn-gold-color);font-size:1.2rem}.civil-form .content form{box-shadow:#06182c66 0 0 0 2px,#06182ca6 0 4px 6px -1px,#ffffff14 0 1px inset;border-radius:20px;padding:40px;width:100%;flex:1}.civil-form .content form .loincloths-box{background-color:#f29c353d;padding:20px;border-radius:5px;margin-bottom:30px;display:flex;flex-direction:column;align-items:center}.civil-form .content form .loincloths-box p{text-align:center;margin-bottom:40px;font-weight:600}.civil-form .content form .loincloths-box .loincloths-form-bloc{display:flex;flex-direction:column;margin-bottom:40px;align-items:center}.civil-form .content form .loincloths-box .loincloths-form-bloc .loincloths-form{display:flex;gap:3rem;margin-bottom:10px}.civil-form .content form .loincloths-box .loincloths-form-bloc .loincloths-form .loincloth-form{display:flex;flex-direction:column;gap:.5rem;align-items:center}.civil-form .content form .loincloths-box .loincloths-form-bloc .loincloths-form .loincloth-form img{width:80px;height:80px;border-radius:50%}.civil-form .content form .loincloths-box .loincloths-form-bloc .loincloths-form .loincloth-form .p-inputnumber input{margin-top:0;width:100px;height:35px;padding:.5rem}.civil-form .content form .loincloths-box .loincloths-form-bloc .loincloths-form .loincloth-form .buttons-number{background-color:#000}.civil-form .content form .loincloths-box input{background:white!important}.civil-form .content form .form-element{display:flex;flex-direction:column;margin-bottom:20px;width:100%}.civil-form .content form .form-element label{font-weight:600}.civil-form .content form .form-element input,.civil-form .content form .form-element textarea,.civil-form .content form .form-element p-dropdown{margin-top:5px;background:#ecf9f7;color:#000}.civil-form .content form .form-element textarea{padding:.5rem}.civil-form .content form .form-element input,.civil-form .content form .form-element .p-dropdown{width:100%;height:35px;padding:.5rem}.civil-form .content form .form-element .p-dropdown .p-dropdown-item{padding:.5rem}.civil-form .content form .add-button{margin-bottom:40px;margin-right:20px;border-radius:100px;border:none;width:100%;padding:10px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s ease-in-out}.civil-form .content form .add-button:hover{background-color:var(--sn-green-color);color:var(--sn-gold-color)}.civil-form .content form .add-button i{font-size:1.1rem;font-weight:700}.civil-form .content form .add-button span{margin-left:10px;font-size:1.05rem}.civil-form .content form .companions{display:flex;flex-direction:column;gap:1rem;background-color:var(--sn-green-color);color:#fff;padding:30px;margin-bottom:20px}.civil-form .content form .companions .companion{display:flex;flex-direction:column;margin-bottom:5px}.civil-form .content form .companions .companion:last-child{margin-bottom:0}.civil-form .content form .companions .companion .top{display:flex;width:100%;justify-content:space-between;margin-bottom:40px;align-items:center}.civil-form .content form .companions .companion .top .header{font-weight:700;font-size:1.3rem;color:var(--sn-gold-color)}.civil-form .content form .companions .companion .top button{display:flex;align-items:center;justify-content:center;border:none;background-color:#fff;color:red;border-radius:5px;cursor:pointer;transition:all .2s ease-in-out;padding:7px 20px}.civil-form .content form .companions .companion .top button:hover{background-color:red;color:#fff}.civil-form .content form .companions .companion .top button span{margin-right:7px}.civil-form .content form .companions .companion .bottom{display:flex;flex-direction:column}.civil-form .content form .radio-bloc{align-items:center;margin-top:40px;margin-bottom:40px}.civil-form .content form .radio-bloc .explanations{font-size:15px;line-height:21px;margin-bottom:10px;font-weight:700}.civil-form .content form .radio-bloc .radios{display:flex;gap:1rem}.civil-form .content form .radio-bloc .radios .radio{display:flex;width:-moz-fit-content;width:fit-content}.civil-form .content form .radio-bloc .radios .radio label{margin-right:7px;font-weight:unset}.civil-form .content form .radio-bloc .radios .no label{margin-right:0;margin-left:7px;font-weight:unset}.civil-form .content form .send-button{margin-top:40px;height:40px;border:none;padding:10px 25px;display:flex;align-items:center;cursor:pointer;background-color:var(--sn-green-color);color:#fff;transition:background-color .3s ease-in-out}.civil-form .content form .send-button:hover{color:var(--sn-gold-color)}.civil-form .content form .send-button span{font-size:15px}.civil-form .content form .send-button i{font-size:1.2rem;margin-left:15px}@media all and (max-width: 1024px){.civil-form{margin-bottom:5rem}.civil-form .content{flex-direction:column}.civil-form .content .loincloths{width:100%;padding:50px 30px;flex:none;position:relative;top:0;align-items:center}.civil-form .content .loincloths h2{text-align:center}.civil-form .content .loincloths .loincloths-list{flex-direction:row;justify-content:center;gap:4rem}.civil-form .content .loincloths .loincloths-list .loincloth{flex-direction:column;align-items:center}.civil-form .content .loincloths .loincloths-list .loincloth:hover .image-wrapper{transform:scale(1.15);box-shadow:#d6b40bb3 0 0 12px}.civil-form .content .loincloths .loincloths-list .loincloth .image-wrapper{width:120px;height:120px;margin-right:0;margin-bottom:25px}.civil-form .content .loincloths .loincloths-list .loincloth .texts{align-items:center}.civil-form .content form{border-radius:10px;padding:40px;width:100%;flex:none}}@media all and (max-width: 540px){.civil-form .content{gap:2rem}.civil-form .content .loincloths{padding:50px 15px}.civil-form .content .loincloths h2{text-align:center}.civil-form .content .loincloths .loincloths-list{flex-direction:row;justify-content:space-evenly;flex-wrap:wrap;align-items:center;gap:2rem}.civil-form .content .loincloths .loincloths-list .loincloth{flex-direction:column;align-items:center}.civil-form .content .loincloths .loincloths-list .loincloth:hover .image-wrapper{transform:scale(1.15);box-shadow:#d6b40bb3 0 0 12px}.civil-form .content .loincloths .loincloths-list .loincloth .image-wrapper{width:110px;height:110px;margin-bottom:20px}.civil-form .content form{padding:40px 15px}.civil-form .content form .loincloths-box .loincloths-form-bloc .loincloths-form{flex-direction:column;gap:2rem}.civil-form .content form .form-element{margin-bottom:20px}.civil-form .content form .form-element label{font-size:15px}.civil-form .content form .add-button i{font-size:1.05rem}.civil-form .content form .add-button span{font-size:15px}.civil-form .content form .companions{gap:1rem;padding:30px 20px;margin-bottom:25px}.civil-form .content form .companions .companion:last-child{margin-bottom:0}.civil-form .content form .companions .companion .top{flex-direction:column-reverse;margin-bottom:30px;align-items:center}.civil-form .content form .companions .companion .top .header{font-size:1.1rem;align-self:flex-start}.civil-form .content form .companions .companion .top button{align-self:flex-end;padding:5px 20px;margin-bottom:15px;border-radius:3px}.civil-form .content form .companions .companion .top button:hover{background-color:red;color:#fff}.civil-form .content form .companions .companion .top button span{margin-right:7px}.civil-form .content form .companions .companion .bottom{display:flex;flex-direction:column}}\n"],encapsulation:2})}return i})();var to=a(4610),ro=a(4429);let lo=(()=>{class i{ngOnInit(){this.getHebannerData(),this.getPageintro(),this.getWeddingCeremonyDetails()}getHebannerData(){this.heroBannerData={image:"../../../../../../../../assets/img/home/hero-bg.png",title:"Confirmation : Mariage Civil"}}getPageintro(){this.pageIntro={header:"D\xe9roulement de la journ\xe9e",paragraphs:["Notre week-end magique d\xe9butera le vendredi 24 mai par une c\xe9r\xe9monie civile qui scellera notre union, suivie d'une soir\xe9e festive. Rejoignez-nous pour ce moment sp\xe9cial, o\xf9 l'amour et la c\xe9l\xe9bration seront \xe0 l'honneur. La journ\xe9e du vendredi marquera le commencement de notre aventure, et nous sommes impatients de partager ces moments m\xe9morables avec vous."]}}getWeddingCeremonyDetails(){this.ceremoniesList=[{header:"Mariage \xe0 la Mairie",hour:"14h00 - 14h15",address:"Pl. de la Mairie, 35000 Rennes",explanations:"Le mariage \xe0 la mairie d\xe9butera \xe0 14h00 pr\xe9cises \xe0 la mairie de Rennes. Nous serions ravis de vous avoir \xe0 nos c\xf4t\xe9s pour partager ce moment cl\xe9 qui lancera notre week-end de c\xe9l\xe9bration."},{header:"Vin d'honneur",hour:"16h00 - 03h00",address:"4 All. Georges Palante, 35000 Rennes",explanations:"La petite soir\xe9e traditionnelle d\xe9butera apr\xe8s la c\xe9r\xe9monie \xe0 la mairie. Elle sera impr\xe9gn\xe9e d'un th\xe8me traditionnel, et nous vous encourageons \xe0 rev\xeatir un pagne choisi par l'une des familles et \xe0 arborer votre meilleure tenue."}]}static#o=this.\u0275fac=function(e){return new(e||i)};static#i=this.\u0275cmp=o.Xpm({type:i,selectors:[["app-page-civil-marriage"]],standalone:!0,features:[o.jDz],decls:5,vars:3,consts:[[1,"page-civil-marriage"],[3,"heroData"],[3,"intro"],[3,"ceremonies"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o._UZ(1,"app-secondary-hero",1)(2,"app-page-intro",2)(3,"app-wedding-ceremony-details",3)(4,"app-civil-form"),o.qZA()),2&e&&(o.xp6(1),o.Q6J("heroData",t.heroBannerData),o.xp6(1),o.Q6J("intro",t.pageIntro),o.xp6(1),o.Q6J("ceremonies",t.ceremoniesList))},dependencies:[l.UX,y.y,ro.N,to.O,eo]})}return i})()}}]);