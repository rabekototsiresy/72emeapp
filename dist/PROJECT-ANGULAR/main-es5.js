(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/todisoa/Documents/app-skoto-front/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../component/navbar/navbar.component */
      "ObfR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(userSerive) {
          _classCallCheck(this, HomeComponent);

          this.userSerive = userSerive;
          this.users = [];
          this.listOfTonia = [];
          this.nbT = 0;
          this.listOfMpiandraikitra = [];
          this.nbMp = 0;
          this.listOfBeazina = [];
          this.nbBea = 0;
          this.sampana = {
            lovitao: [],
            mpianjoria: [],
            mpamakilay: [],
            mpiandalana: []
          };
          this.nbEeachSampanaMp = {
            lovitao: 0,
            mpianjoria: 0,
            mpamakilay: 0,
            mpiandalana: 0
          };
          this.nbEeachSampanaBea = {
            lovitao: 0,
            mpianjoria: 0,
            mpamakilay: 0,
            mpiandalana: 0
          };
          this.usersSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            document.title = "fandraisana";
            this.usersSubscription = this.userSerive.usersSubject.subscribe(function (response) {
              _this.users = response;
              _this.listOfTonia = response.filter(function (data) {
                return data.role == "tonia";
              });
              _this.nbT = _this.listOfTonia.length;
              _this.listOfMpiandraikitra = response.filter(function (data) {
                return data.role == "mpiandraikitra";
              });
              _this.nbMp = _this.listOfMpiandraikitra.length;
              _this.listOfBeazina = response.filter(function (data) {
                return data.role == "beazina";
              });
              _this.nbBea = _this.listOfBeazina.length; // Teto vo ita hoe tsy tokony natao attribu,kamo b ah amerina azy

              _this.sampana.lovitao = response.filter(function (data) {
                return data.role == "mpiandraikitra" && data.sampana == "lovitao";
              });
              _this.nbEeachSampanaMp.lovitao = _this.sampana.lovitao.length;
              _this.sampana.mpianjoria = response.filter(function (data) {
                return data.role == "mpiandraikitra" && data.sampana == "mpianjoria";
              });
              _this.nbEeachSampanaMp.mpianjoria = _this.sampana.mpianjoria.length;
              _this.sampana.mpamakilay = response.filter(function (data) {
                return data.role == "mpiandraikitra" && data.sampana == "mpamakilay";
              });
              _this.nbEeachSampanaMp.mpamakilay = _this.sampana.mpamakilay.length;
              _this.sampana.mpiandalana = response.filter(function (data) {
                return data.role == "mpiandraikitra" && data.sampana == "mpiandalana";
              });
              _this.nbEeachSampanaMp.mpiandalana = _this.sampana.mpiandalana.length; // Ity no mety

              var listLovitaoBea = response.filter(function (data) {
                return data.role == "beazina" && data.sampana == "lovitao";
              });
              _this.nbEeachSampanaBea.lovitao = listLovitaoBea.length;
              var listMpianjoriaBea = response.filter(function (data) {
                return data.role == "beazina" && data.sampana == "mpianjoria";
              });
              _this.nbEeachSampanaBea.mpianjoria = listMpianjoriaBea.length;
              var listMpamakilay = response.filter(function (data) {
                return data.role == "beazina" && data.sampana == "mpamakilay";
              });
              _this.nbEeachSampanaBea.mpamakilay = listMpamakilay.length;
              var listMpiandalana = response.filter(function (data) {
                return data.role == "beazina" && data.sampana == "mpiandalana";
              });
              _this.nbEeachSampanaBea.mpiandalana = listMpiandalana.length;
            }, function (error) {
              console.log(error);
            });
            this.userSerive.getAllUsers();
            this.userSerive.emitUser();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 74,
        vars: 11,
        consts: [[1, "container"], [1, "row", "mt-65"], [1, "col-md-12", "text-center"], [1, "text-white"], [1, "col-md-4", "col-sm-12", "card", "border-black", "nav-sampana"], [1, "col-md-3", "col-sm-12", "border-black", "card", "m-2", "nav-sampana"], [1, "row"], [1, "col-md-4"], [1, "col-md-8"], [1, "col-md-4", "col-sm-12", "col-sm-4", "border-black", "card", "nav-sampana"], [1, "col-md-12", "text-white", "text-center"], [1, ""], ["routerLink", "/sampana/lovitao", 1, "col-md-2", "card-sm-12", "my-1", "card", "mx-3", "bg-warning", "text-white", "text-center", "d-flex", "border-black", "justify-content-center", "pt-3"], ["routerLink", "/sampana/mpianjoria", 1, "col-md-2", "pt-3", "my-1", "card", "mx-3", "bg-success", "text-white", "text-center", "border-black"], ["routerLink", "/sampana/mpamakilay", 1, "border-black", "col-md-2", "my-1", "pt-3", "card", "mx-3", "bg-primary", "text-white", "text-center"], ["routerLink", "/sampana/mpiandalana", 1, "col-md-2", "border-black", "my-1", "pt-3", "card", "mx-3", "bg-danger", "text-white", "text-center"], ["routerLink", "/sampana/tonia", 1, "col-md-2", "pt-3", "my-1", "border-black", "card", "mx-3", "bg-secondary", "text-white", "text-center"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Antotanisa");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Tonia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "MPiandraikitra");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Beazina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Sampana");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Lovitao");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Mpianjoria");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "MPamakilay");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Miandala");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Tonia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nbT);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nbMp);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Lovitao: ", ctx.nbEeachSampanaMp.lovitao, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mpianjoria: ", ctx.nbEeachSampanaMp.mpianjoria, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mpamakilay: ", ctx.nbEeachSampanaMp.mpamakilay, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mpiandalana: ", ctx.nbEeachSampanaMp.mpiandalana, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nbBea);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Lovitao: ", ctx.nbEeachSampanaBea.lovitao, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mpianjoria: ", ctx.nbEeachSampanaBea.mpianjoria, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mpamakilay: ", ctx.nbEeachSampanaBea.mpamakilay, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mpiandalana: ", ctx.nbEeachSampanaBea.mpiandalana, "");
          }
        },
        directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: [".nav-sampana[_ngcontent-%COMP%]{\n    background-color: #FBFF1D;\n    color: black;\n    font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc2FtcGFuYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGRjFEO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "1Y2z":
    /*!************************************************************!*\
      !*** ./src/app/component/card-full/card-full.component.ts ***!
      \************************************************************/

    /*! exports provided: CardFullComponent */

    /***/
    function Y2z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardFullComponent", function () {
        return CardFullComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function CardFullComponent_a_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Hampiditra sary");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/upload-avatar/" + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r0.idUser));
        }
      }

      var CardFullComponent = /*#__PURE__*/function () {
        function CardFullComponent(userService, router) {
          _classCallCheck(this, CardFullComponent);

          this.userService = userService;
          this.router = router;
          this.user = {
            fullName: '',
            role: '',
            username: ''
          };
          this.userSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
          this.roleActive = "";
          this.idUser = "";
          this.linkBack = "";
          this.imageLink = "http://localhost:7000/public/uploads/images/";
          this.trueImageLink = "";
        }

        _createClass(CardFullComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var token = localStorage.getItem('token');
            var userActive = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
            this.roleActive = userActive.role;
            var id = this.router.snapshot.params.id;
            this.idUser = id;
            this.userSubscription = this.userService.simpleUserSubject.subscribe(function (response) {
              _this2.user = response;

              if (_this2.user.sampana) {
                _this2.linkBack = "/sampana/" + _this2.user.sampana;
              } else {
                _this2.linkBack = "sampana/" + _this2.user.role;
              }

              var inc = 0;

              if (_this2.user.avatar) {
                _this2.trueImageLink = "http://localhost:7000/public/uploads/images/" + _this2.user.avatar;
              } else {
                _this2.trueImageLink = "http://localhost:7000/public/uploads/images/default.png";
              }
            }, function (error) {
              console.log("error", error);
            });
            this.userService.oneUser(id);
            this.userService.emitSimpleUser();
          }
        }]);

        return CardFullComponent;
      }();

      CardFullComponent.ɵfac = function CardFullComponent_Factory(t) {
        return new (t || CardFullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      CardFullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CardFullComponent,
        selectors: [["app-card-full"]],
        inputs: {
          user: "user"
        },
        decls: 22,
        vars: 8,
        consts: [[1, "card", "mt-5", "bg-black", "border"], ["alt", "Card image", 1, "card-img-top-full", "rounded", 3, "src"], [1, "card-body"], [1, "list-group"], [1, "list-group-item"], [1, "col-md-12", "d-flex", "justify-content-between"], ["class", "btn btn-success mx-1 ", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-primary", "mx-1", 3, "routerLink"], [1, "btn", "btn-success", "mx-1", 3, "routerLink"]],
        template: function CardFullComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Anarana: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fiantsoana: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Andraikitra: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CardFullComponent_a_19_Template, 2, 3, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "HIVERINA");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.trueImageLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.user.fullName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.user.username, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.user.role, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.user.avatar);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/" + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.linkBack));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWZ1bGwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "4fXm":
    /*!**************************************************!*\
      !*** ./src/app/component/card/card.component.ts ***!
      \**************************************************/

    /*! exports provided: CardComponent */

    /***/
    function fXm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent() {
          _classCallCheck(this, CardComponent);

          this.user = {};
          this.idUser = 0;
          this.imageLink = "http://localhost:7000/public/uploads/images/";
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.idUser = this.user._id;
            this.imageLink += this.user.avatar ? this.user.avatar : 'default.png';
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)();
      };

      CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        inputs: {
          user: "user",
          idUser: "idUser"
        },
        decls: 9,
        vars: 6,
        consts: [[1, "card", "text-center", "m-3"], ["alt", "Card image", 1, "card-img-top", 2, "width", "50%", 3, "src"], [1, "card-body", "body-custom"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "routerLink"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hijery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/user/" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.idUser));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "82Ye":
    /*!**********************************!*\
      !*** ./src/app/common/config.ts ***!
      \**********************************/

    /*! exports provided: default */

    /***/
    function Ye(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var HOST_URL_API = "https://apiskoto.herokuapp.com"; // const HOST_URL_API = "http://localhost:7000"

      /* harmony default export */

      __webpack_exports__["default"] = {
        HOST_URL_API: HOST_URL_API
      };
      /***/
    },

    /***/
    "9ans":
    /*!***********************************************!*\
      !*** ./src/app/services/auth/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function ans(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_common_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/config */
      "82Ye");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(httpClient, router) {
          _classCallCheck(this, AuthService);

          this.httpClient = httpClient;
          this.router = router;
          this.logged = false;
          this.errorMessage = "";
          this.errorMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(AuthService, [{
          key: "emitErrorMessageSubject",
          value: function emitErrorMessageSubject() {
            this.errorMessageSubject.next(this.errorMessage);
          }
        }, {
          key: "login",
          value: function login(info) {
            var _this3 = this;

            this.httpClient.post("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_2__["default"].HOST_URL_API, "/api/v1/beazina/login"), info).subscribe(function (response) {
              var token = response.token;
              localStorage.setItem('token', token);
              var userLogged = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
              _this3.logged = true;

              _this3.router.navigate(['home']); // this.router.navigate(['user',userLogged.userId])

            }, function (error) {
              _this3.errorMessage = error.error.message;

              _this3.emitErrorMessageSubject();
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.logged = false;
            localStorage.removeItem("token");
            this.router.navigate([""]);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CFL1":
    /*!***********************************************!*\
      !*** ./src/app/services/user/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function CFL1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/config */
      "82Ye");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UserService = /*#__PURE__*/function () {
        function UserService(httClient, router, routerParam) {
          var _this4 = this;

          _classCallCheck(this, UserService);

          this.httClient = httClient;
          this.router = router;
          this.routerParam = routerParam;
          this.users = [];
          this.errorMessage = "";
          this.errorMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.simpleUser = {};
          this.idToUpload = "";
          this.errorMessageUploadFileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.errorMessageUploadFile = "";
          this.mpAndBeaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.mpAndBeaList = {
            listMp: [],
            listBea: []
          };
          this.tonia = [];
          this.toniaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.simpleUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

          this.getAllUsers = function () {
            var token = "Bearer ".concat(localStorage.getItem('token'));

            _this4.httClient.get("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina"), {
              headers: {
                authorization: token
              }
            }).subscribe(function (response) {
              _this4.users = response.data;

              _this4.emitUser();
            }, function (error) {
              console.log(error);
            });
          };
        }

        _createClass(UserService, [{
          key: "emitErrorMessage",
          value: function emitErrorMessage() {
            this.errorMessageSubject.next(this.errorMessage);
          }
        }, {
          key: "emitUser",
          value: function emitUser() {
            if (Array.isArray(this.users)) {
              this.usersSubject.next(this.users.slice());
            } else {
              this.usersSubject.next(this.users);
            }
          }
        }, {
          key: "emitErroMessageUploadFile",
          value: function emitErroMessageUploadFile() {
            this.errorMessageUploadFileSubject.next(this.errorMessageUploadFile);
          }
        }, {
          key: "emitSimpleUser",
          value: function emitSimpleUser() {
            this.simpleUserSubject.next(this.simpleUser);
          }
        }, {
          key: "emitMpAndBea",
          value: function emitMpAndBea() {
            this.mpAndBeaSubject.next(this.mpAndBeaList);
          }
        }, {
          key: "emitToniaSubject",
          value: function emitToniaSubject() {
            this.toniaSubject.next(this.tonia);
          }
        }, {
          key: "register",
          value: function register(info) {
            var _this5 = this;

            this.httClient.post("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina/user"), info).subscribe(function (response) {
              if (response.error) {
                _this5.errorMessage = response.error;

                _this5.emitErrorMessage();
              }

              _this5.idToUpload = response.data._id;

              _this5.router.navigate(['upload-avatar', response.data._id]);
            }, function (error) {
              _this5.errorMessage = error.error.message;

              _this5.emitErrorMessage();
            });
          }
        }, {
          key: "oneUser",
          value: function oneUser(id) {
            var _this6 = this;

            var token = "Bearer ".concat(localStorage.getItem('token'));
            this.httClient.get("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina/user/").concat(id), {
              headers: {
                authorization: token
              }
            }).subscribe(function (response) {
              _this6.simpleUser = response.data;

              _this6.emitSimpleUser();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "addAvatar",
          value: function addAvatar(data, id) {
            var _this7 = this;

            var token = localStorage.getItem('token');
            this.httClient.post("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina/upload-avatar/").concat(id), data).subscribe(function (response) {
              if (token) {
                _this7.router.navigate(['user', id]);
              } else {
                _this7.router.navigate(['congratulation']);
              }
            }, function (error) {
              _this7.errorMessageUploadFile = error.error.message;

              _this7.emitErroMessageUploadFile();
            });
          }
        }, {
          key: "getMpFromSampana",
          value: function getMpFromSampana(sampanaName) {
            var _this8 = this;

            this.httClient.get("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina/mp/").concat(sampanaName)).subscribe(function (response) {
              _this8.mpAndBeaList.listMp = response.data;

              _this8.emitMpAndBea();
            });
          }
        }, {
          key: "getBeazinaFromSampana",
          value: function getBeazinaFromSampana(sampanaName) {
            var _this9 = this;

            this.httClient.get("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina/bea/").concat(sampanaName)).subscribe(function (response) {
              _this9.mpAndBeaList.listBea = response.data;

              _this9.emitMpAndBea();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getToniaFromFiv",
          value: function getToniaFromFiv() {
            var _this10 = this;

            this.httClient.get("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina/tonia")).subscribe(function (response) {
              _this10.tonia = response.data;

              _this10.emitToniaSubject();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "removeUser",
          value: function removeUser(id, sampana) {
            var _this11 = this;

            this.httClient["delete"]("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina/user/").concat(id)).subscribe(function (response) {
              console.log(response);

              _this11.getBeazinaFromSampana(sampana);

              _this11.getMpFromSampana(sampana);

              _this11.getToniaFromFiv();

              _this11.emitToniaSubject();

              _this11.emitMpAndBea();
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, data) {
            var _this12 = this;

            this.httClient.put("".concat(src_app_common_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST_URL_API, "/api/v1/beazina/user/").concat(id), data).subscribe(function (response) {
              if (response) {
                _this12.router.navigate(['user', id]);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function LoginComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(userService, authService) {
          _classCallCheck(this, LoginComponent);

          this.userService = userService;
          this.authService = authService;
          this.errorMessage = "";
          this.errorMessageSusbscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            document.title = "i-konekta";
          }
        }, {
          key: "loginFromService",
          value: function loginFromService(info) {
            var _this13 = this;

            this.authService.login(info.value);
            this.errorMessageSusbscription = this.authService.errorMessageSubject.subscribe(function (response) {
              _this13.errorMessage = response;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 23,
        vars: 2,
        consts: [[1, "row", "mt-4", "m-0", "text-white"], [1, "col-md-4"], [1, "col-md-4", "border", "p-3"], [1, "p-2", 3, "ngSubmit"], ["info", "ngForm"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "ngModel", "", "required", "", 1, "form-control"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "form-grou"], ["routerLink", "/register"], [1, "alert", "alert-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

              return ctx.loginFromService(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Fidirana ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Fiantsoana: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Teny Miafina: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Hiditra");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Hamorona kaonty");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "ObfR":
    /*!******************************************************!*\
      !*** ./src/app/component/navbar/navbar.component.ts ***!
      \******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function ObfR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(authService) {
          _classCallCheck(this, NavbarComponent);

          this.authService = authService;
          this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"];
          this.usernameLogged = "";
          this.id = "";
          this.imageLink = "http://localhost:7000/public/uploads/images/";
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var token = localStorage.getItem('token');
            var user = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
            this.usernameLogged = user.username;
            this.id = user._id;
            this.imageLink += user.avatar ? user.avatar : "default.png";
          }
        }, {
          key: "signOutFromService",
          value: function signOutFromService() {
            this.authService.signOut();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 14,
        vars: 3,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-yellow"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["href", "#", 1, "navbar-brand"], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "text-dark"], [1, "text-dark", "mr-2", 3, "routerLink"], [1, "logout", 3, "icon", "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ANDRIAMPIROKANA");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "fa-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_13_listener() {
              return ctx.signOutFromService();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/user/"[ctx.id]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.usernameLogged);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSignOutAlt);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]],
        styles: [".logout[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "QLnj":
    /*!**************************************************************!*\
      !*** ./src/app/pages/not-found404/not-found404.component.ts ***!
      \**************************************************************/

    /*! exports provided: NotFound404Component */

    /***/
    function QLnj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFound404Component", function () {
        return NotFound404Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFound404Component = /*#__PURE__*/function () {
        function NotFound404Component() {
          _classCallCheck(this, NotFound404Component);
        }

        _createClass(NotFound404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFound404Component;
      }();

      NotFound404Component.ɵfac = function NotFound404Component_Factory(t) {
        return new (t || NotFound404Component)();
      };

      NotFound404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFound404Component,
        selectors: [["app-not-found404"]],
        decls: 3,
        vars: 0,
        consts: [[1, "box-center"]],
        template: function NotFound404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oups, page not found :-(");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQ0MDQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".row[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.active[_ngcontent-%COMP%]{\n    background-color: rgb(5, 158, 5);\n    padding: 10px;\n    border-radius: 5px;\n    color: white; \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTs7QUFFaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAxNTgsIDUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTsgXG5cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (!localStorage.getItem('token')) {
              return this.router.navigate(['']);
            } else {
              return true;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Xbd+":
    /*!**********************************************************!*\
      !*** ./src/app/component/card-bea/card-bea.component.ts ***!
      \**********************************************************/

    /*! exports provided: CardBeaComponent */

    /***/
    function Xbd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardBeaComponent", function () {
        return CardBeaComponent;
      });
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function CardBeaComponent_a_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HANOVA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/user/edit/" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.user_id));
        }
      }

      function CardBeaComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardBeaComponent_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.removeBeazinaFromService(ctx_r2.bea._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HAMAFA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var CardBeaComponent = /*#__PURE__*/function () {
        function CardBeaComponent(userService) {
          _classCallCheck(this, CardBeaComponent);

          this.userService = userService;
          this.bea = {};
          this.sampana = "";
          this.imageLink = "http://localhost:7000/public/uploads/images/";
          this.user_id = "";
          this.usersConnected = {};
          this.isNotBeazina = true;
        }

        _createClass(CardBeaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imageLink += this.bea.avatar ? this.bea.avatar : "default.png";
            this.user_id = this.bea._id;
            var token = localStorage.getItem('token');
            var userConnected = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
            this.isNotBeazina = userConnected.role !== "beazina" ? true : false;
          }
        }, {
          key: "removeBeazinaFromService",
          value: function removeBeazinaFromService(id) {
            this.userService.removeUser(id, this.sampana);
          }
        }]);

        return CardBeaComponent;
      }();

      CardBeaComponent.ɵfac = function CardBeaComponent_Factory(t) {
        return new (t || CardBeaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      CardBeaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CardBeaComponent,
        selectors: [["app-card-bea"]],
        inputs: {
          bea: "bea",
          sampana: "sampana"
        },
        decls: 19,
        vars: 8,
        consts: [[1, "card", "mb-3", "card-details", "border", 2, "max-width", "540px"], [1, "row", "g-0"], [1, "col-md-4", "dFlexCol"], ["alt", "...", 1, "img-fluid", 3, "src"], [1, "col-md-8"], [1, "card-body"], [1, "card-text"], [1, "text-muted"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-primary", 3, "routerLink"], ["class", "btn btn-success", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]],
        template: function CardBeaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Anarana: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "HIJERY");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CardBeaComponent_a_17_Template, 2, 3, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CardBeaComponent_button_18_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bea.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bea.sampana);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/user/" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.user_id));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNotBeazina);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNotBeazina);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWJlYS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/not-found404/not-found404.component */
      "QLnj");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/detail-user/detail-user.component */
      "dxdv");
      /* harmony import */


      var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./component/navbar/navbar.component */
      "ObfR");
      /* harmony import */


      var _pages_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/congratulation/congratulation.component */
      "ugMz");
      /* harmony import */


      var _component_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./component/card/card.component */
      "4fXm");
      /* harmony import */


      var _component_card_full_card_full_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./component/card-full/card-full.component */
      "1Y2z");
      /* harmony import */


      var _pages_avatar_upload_avatar_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/avatar-upload/avatar-upload.component */
      "ja9t");
      /* harmony import */


      var _pages_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/list-user/list-user.component */
      "vF8A");
      /* harmony import */


      var _pages_sampana_details_sampana_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/sampana-details/sampana-details.component */
      "jP+/");
      /* harmony import */


      var _component_card_mp_card_mp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./component/card-mp/card-mp.component */
      "pjuX");
      /* harmony import */


      var _component_card_bea_card_bea_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./component/card-bea/card-bea.component */
      "Xbd+");
      /* harmony import */


      var _component_card_tonia_card_tonia_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./component/card-tonia/card-tonia.component */
      "yg1T");
      /* harmony import */


      var _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/edit/edit.component */
      "iPD0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _pages_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_7__["NotFound404Component"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _pages_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_10__["DetailUserComponent"], _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _pages_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_12__["CongratulationComponent"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _component_card_full_card_full_component__WEBPACK_IMPORTED_MODULE_14__["CardFullComponent"], _pages_avatar_upload_avatar_upload_component__WEBPACK_IMPORTED_MODULE_15__["AvatarUploadComponent"], _pages_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_16__["ListUserComponent"], _pages_sampana_details_sampana_details_component__WEBPACK_IMPORTED_MODULE_17__["SampanaDetailsComponent"], _component_card_mp_card_mp_component__WEBPACK_IMPORTED_MODULE_18__["CardMpComponent"], _component_card_bea_card_bea_component__WEBPACK_IMPORTED_MODULE_19__["CardBeaComponent"], _component_card_tonia_card_tonia_component__WEBPACK_IMPORTED_MODULE_20__["CardToniaComponent"], _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_21__["EditComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]
        });
      })();
      /***/

    },

    /***/
    "dxdv":
    /*!************************************************************!*\
      !*** ./src/app/pages/detail-user/detail-user.component.ts ***!
      \************************************************************/

    /*! exports provided: DetailUserComponent */

    /***/
    function dxdv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailUserComponent", function () {
        return DetailUserComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../component/navbar/navbar.component */
      "ObfR");
      /* harmony import */


      var _component_card_full_card_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../component/card-full/card-full.component */
      "1Y2z");

      var DetailUserComponent = /*#__PURE__*/function () {
        function DetailUserComponent(userService, router) {
          _classCallCheck(this, DetailUserComponent);

          this.userService = userService;
          this.router = router;
          this.user = [];
          this.userSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        }

        _createClass(DetailUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            // document.title = "Mahakasika an\'i"
            var id = this.router.snapshot.params.id;
            this.userSubscription = this.userService.usersSubject.subscribe(function (response) {
              _this14.user = response;
            }, function (error) {
              console.log(error);
            });
            this.userService.oneUser(id);
            this.userService.emitUser();
          }
        }]);

        return DetailUserComponent;
      }();

      DetailUserComponent.ɵfac = function DetailUserComponent_Factory(t) {
        return new (t || DetailUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      DetailUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DetailUserComponent,
        selectors: [["app-detail-user"]],
        decls: 3,
        vars: 1,
        consts: [[1, "d-flex", "justify-content-center", "mt-65"], [1, "d-flex", "justify-content-center", 3, "user"]],
        template: function DetailUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-card-full", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx.user);
          }
        },
        directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _component_card_full_card_full_component__WEBPACK_IMPORTED_MODULE_5__["CardFullComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtdXNlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "fNfI":
    /*!******************************************************!*\
      !*** ./src/app/pages/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function fNfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function RegisterComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
        }
      }

      function RegisterComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sampana: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "sampana misy anao");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Lovitao");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Mpianjoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Mpamakilay");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Mpiandalana");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.defaultSampana);
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(userService) {
          _classCallCheck(this, RegisterComponent);

          this.userService = userService;
          this.errorMessageSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
          this.errorMessage = "";
          this.defaultRole = "tonia";
          this.defaultSampana = "lovitao";
          this.isTonia = false;
          this.titlePage = "Hanokatra kaonty";
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            document.title = this.titlePage;
          }
        }, {
          key: "handleRole",
          value: function handleRole(event) {
            this.isTonia = event.target.value == 'tonia' ? false : true;
          }
        }, {
          key: "registerFromService",
          value: function registerFromService(info) {
            var _this15 = this;

            this.userService.register(info.value);

            if (!info.value.sampana) {
              info.value.sampana = "loviao|mpiajoria|mpamakilay|mpiandalana";
            }

            this.errorMessageSubscription = this.userService.errorMessageSubject.subscribe(function (response) {
              _this15.errorMessage = response;
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 38,
        vars: 4,
        consts: [[1, "row", "mt-4", "text-white"], [1, "col-md-3"], [1, "col-md-6", "border", "p-3"], [1, "p-2", 3, "ngSubmit"], ["info", "ngForm"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "fullName"], ["type", "text", "name", "fullName", "id", "fullName", "ngModel", "", "required", "", 1, "form-control"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "ngModel", "", "required", "", 1, "form-control"], ["for", "role"], ["name", "role", "id", "role", 1, "form-control", 3, "ngModel", "input"], ["value", "tonia"], ["value", "mpiandraikitra"], ["value", "beazina"], ["class", "form-group", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["routerLink", ""], [1, "alert", "alert-danger"], ["for", "sampana"], ["name", "sampana", "id", "sampana", 1, "form-control", 3, "ngModel"], ["value", "lovitao", "selected", ""], ["value", "lovitao"], ["value", "mpianjoria"], ["value", "mpamakilay"], ["value", "mpiandalana"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

              return ctx.registerFromService(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Hamorona Kaonty ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterComponent_div_7_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Anarana Feno: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Fiantsoana ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Andraikitra sahanina: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegisterComponent_Template_select_input_20_listener($event) {
              return ctx.handleRole($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tonia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Mpiandraikitra");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Beazina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RegisterComponent_div_27_Template, 14, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Teny Miafina: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Hamorona");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Efa manana Kaonty");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.defaultRole);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTonia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "iPD0":
    /*!**********************************************!*\
      !*** ./src/app/pages/edit/edit.component.ts ***!
      \**********************************************/

    /*! exports provided: EditComponent */

    /***/
    function iPD0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
        return EditComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../component/navbar/navbar.component */
      "ObfR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EditComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
        }
      }

      function EditComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sampana: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Lovitao");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mpianjoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Mpamakilay");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Mpiandalana");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.user.sampana);
        }
      }

      var EditComponent = /*#__PURE__*/function () {
        function EditComponent(router, userService) {
          _classCallCheck(this, EditComponent);

          this.router = router;
          this.userService = userService;
          this.errorMessage = "";
          this.isTonia = true;
          this.defaultSampana = "lovitao";
          this.defaultRole = "beazina";
          this.userSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
          this.user = {};
          this.idUser = "";
        }

        _createClass(EditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.idUser = this.router.snapshot.params.id;
            this.userSubscription = this.userService.simpleUserSubject.subscribe(function (response) {
              _this16.user = response;
              _this16.defaultRole = _this16.user.role;
            }, function (err) {
              console.log(err);
            });
            this.userService.oneUser(this.idUser);
            this.userService.emitSimpleUser();
          }
        }, {
          key: "handleRole",
          value: function handleRole(event) {
            this.isTonia = event.target.value == 'tonia' ? true : false;
          }
        }, {
          key: "updadteFromService",
          value: function updadteFromService(info) {
            this.userService.updateUser(this.idUser, info.value);
          }
        }]);

        return EditComponent;
      }();

      EditComponent.ɵfac = function EditComponent_Factory(t) {
        return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EditComponent,
        selectors: [["app-edit"]],
        decls: 35,
        vars: 6,
        consts: [[1, "row", "mt-4"], [1, "col-md-3"], [1, "col-md-6", "border", "p-3", "text-white"], [1, "p-2", 3, "ngSubmit"], ["info", "ngForm"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "fullName"], ["type", "text", "name", "fullName", "id", "fullName", "ngModel", "", "required", "", 1, "form-control", 3, "value"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "ngModel", "", "required", "", 1, "form-control", 3, "value"], ["for", "role"], ["name", "role", "id", "role", 1, "form-control", 3, "ngModel", "input"], ["value", "tonia"], ["value", "mpiandraikitra"], ["value", "beazina"], ["class", "form-group", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "form-grou"], ["routerLink", "/home"], [1, "alert", "alert-danger"], ["for", "sampana"], ["name", "sampana", "id", "sampana", 1, "form-control", 3, "ngModel"], ["value", "lovitao"], ["value", "mpianjoria"], ["value", "mpamakilay"], ["value", "mpiandalana"]],
        template: function EditComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return ctx.updadteFromService(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Hanova ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditComponent_div_8_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Anarana Feno: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Fiantsoana ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Andraikitra sahanina: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function EditComponent_Template_select_input_21_listener($event) {
              return ctx.handleRole($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Tonia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Mpiandraikitra");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Beazina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, EditComponent_div_28_Template, 12, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "HANOVA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "TSY HANOVA INDRAY");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.user.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.user.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTonia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
          }
        },
        directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "jP+/":
    /*!********************************************************************!*\
      !*** ./src/app/pages/sampana-details/sampana-details.component.ts ***!
      \********************************************************************/

    /*! exports provided: SampanaDetailsComponent */

    /***/
    function jP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SampanaDetailsComponent", function () {
        return SampanaDetailsComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../component/navbar/navbar.component */
      "ObfR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _component_card_mp_card_mp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../component/card-mp/card-mp.component */
      "pjuX");
      /* harmony import */


      var _component_card_tonia_card_tonia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../component/card-tonia/card-tonia.component */
      "yg1T");
      /* harmony import */


      var _component_card_bea_card_bea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../component/card-bea/card-bea.component */
      "Xbd+");

      function SampanaDetailsComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tonia");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SampanaDetailsComponent_p_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mpiandraikitra");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SampanaDetailsComponent_h1_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.numOfTonia);
        }
      }

      function SampanaDetailsComponent_h1_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.numberOfMp);
        }
      }

      function SampanaDetailsComponent_div_8_app_card_mp_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card-mp", 8);
        }

        if (rf & 2) {
          var mp_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mp", mp_r8)("sampana", ctx_r7.sampanaName);
        }
      }

      function SampanaDetailsComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SampanaDetailsComponent_div_8_app_card_mp_1_Template, 1, 2, "app-card-mp", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.listOfMp);
        }
      }

      function SampanaDetailsComponent_div_9_app_card_tonia_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card-tonia", 10);
        }

        if (rf & 2) {
          var tonia_r10 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tonia", tonia_r10)("sampana", ctx_r9.sampanaName);
        }
      }

      function SampanaDetailsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SampanaDetailsComponent_div_9_app_card_tonia_1_Template, 1, 2, "app-card-tonia", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.listOfTonia);
        }
      }

      function SampanaDetailsComponent_div_10_app_card_bea_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card-bea", 14);
        }

        if (rf & 2) {
          var bea_r12 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bea", bea_r12)("sampana", ctx_r11.sampanaName);
        }
      }

      function SampanaDetailsComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Beazina");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SampanaDetailsComponent_div_10_app_card_bea_8_Template, 1, 2, "app-card-bea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.numOfBea);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.listOfBea);
        }
      }

      var SampanaDetailsComponent = /*#__PURE__*/function () {
        function SampanaDetailsComponent(router, userService) {
          _classCallCheck(this, SampanaDetailsComponent);

          this.router = router;
          this.userService = userService;
          this.mpAndBeaSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
          this.toniaSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
          this.listOfMp = [];
          this.listOfBea = [];
          this.mp = {};
          this.numberOfMp = 0;
          this.numOfBea = 0;
          this.isTonia = false;
          this.listOfTonia = [];
          this.numOfTonia = 0;
          this.sampanaName = "";
        }

        _createClass(SampanaDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.sampanaName = this.router.snapshot.params.sampana;

            if (this.sampanaName == 'tonia') {
              this.isTonia = true;
              this.toniaSubscription = this.userService.toniaSubject.subscribe(function (response) {
                _this17.listOfTonia = response;
                _this17.numOfTonia = _this17.listOfTonia.length;
              }, function (error) {
                console.log(error);
              });
              this.userService.getToniaFromFiv();
              this.userService.emitToniaSubject();
            } else {
              this.isTonia = false;
            }

            this.mpAndBeaSubscription = this.userService.mpAndBeaSubject.subscribe(function (response) {
              _this17.listOfMp = response.listMp;
              _this17.listOfBea = response.listBea;
              _this17.numberOfMp = _this17.listOfMp.length;
              _this17.numOfBea = _this17.listOfBea.length;
            }, function (error) {
              console.log(error);
            });
            this.userService.getMpFromSampana(this.sampanaName);
            this.userService.getBeazinaFromSampana(this.sampanaName);
            this.userService.emitMpAndBea();
          }
        }]);

        return SampanaDetailsComponent;
      }();

      SampanaDetailsComponent.ɵfac = function SampanaDetailsComponent_Factory(t) {
        return new (t || SampanaDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      SampanaDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SampanaDetailsComponent,
        selectors: [["app-sampana-details"]],
        decls: 11,
        vars: 7,
        consts: [[1, "container"], [1, "row", "mt-80"], [1, "col-md-2", "card", "my-5", "border-black", "bg-yellow"], [4, "ngIf"], ["class", "col-md-8 ", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "col-md-8"], [3, "mp", "sampana", 4, "ngFor", "ngForOf"], [3, "mp", "sampana"], [3, "tonia", "sampana", 4, "ngFor", "ngForOf"], [3, "tonia", "sampana"], [1, "row", "mt-65"], [1, "col-md-2", "col-sm-4", "mb-3", "card", "border-black", "bg-yellow"], [3, "bea", "sampana", 4, "ngFor", "ngForOf"], [3, "bea", "sampana"]],
        template: function SampanaDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SampanaDetailsComponent_p_4_Template, 2, 0, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SampanaDetailsComponent_p_5_Template, 2, 0, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SampanaDetailsComponent_h1_6_Template, 2, 1, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SampanaDetailsComponent_h1_7_Template, 2, 1, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SampanaDetailsComponent_div_8_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SampanaDetailsComponent_div_9_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SampanaDetailsComponent_div_10_Template, 9, 2, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTonia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTonia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTonia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTonia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTonia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTonia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTonia);
          }
        },
        directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _component_card_mp_card_mp_component__WEBPACK_IMPORTED_MODULE_6__["CardMpComponent"], _component_card_tonia_card_tonia_component__WEBPACK_IMPORTED_MODULE_7__["CardToniaComponent"], _component_card_bea_card_bea_component__WEBPACK_IMPORTED_MODULE_8__["CardBeaComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wYW5hLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ja9t":
    /*!****************************************************************!*\
      !*** ./src/app/pages/avatar-upload/avatar-upload.component.ts ***!
      \****************************************************************/

    /*! exports provided: AvatarUploadComponent */

    /***/
    function ja9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvatarUploadComponent", function () {
        return AvatarUploadComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../component/navbar/navbar.component */
      "ObfR");

      function AvatarUploadComponent_app_navbar_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        }
      }

      function AvatarUploadComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errrorMessageUploadFileFromService, " ");
        }
      }

      function AvatarUploadComponent_a_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tsy hampiditra sary,hiditra amin'ny kaontiko");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function AvatarUploadComponent_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hiverina");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/user/" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r3.id_user));
        }
      }

      var AvatarUploadComponent = /*#__PURE__*/function () {
        function AvatarUploadComponent(userService, router, authService) {
          _classCallCheck(this, AvatarUploadComponent);

          this.userService = userService;
          this.router = router;
          this.authService = authService;
          this.token = localStorage.getItem('token');
          this.avatar = {};
          this.shoudSubmit = false;
          this.errrorMessageUploadFileFromService = "";
          this.errorMessageUploadFileSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
          this.logged = false;
          this.id_user = "";
        }

        _createClass(AvatarUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logged = this.authService.logged;
            var id = this.router.snapshot.params.id;
            this.id_user = id;
          }
        }, {
          key: "handleFile",
          value: function handleFile(event) {
            this.avatar = event.target.files[0];
            this.shoudSubmit = true;
          }
        }, {
          key: "addAvatarFromService",
          value: function addAvatarFromService() {
            var _this18 = this;

            var id = this.router.snapshot.params.id;
            var fd = new FormData();
            fd.append('avatar', this.avatar, this.avatar.name);
            this.userService.addAvatar(fd, id);
            this.errorMessageUploadFileSubscription = this.userService.errorMessageUploadFileSubject.subscribe(function (response) {
              _this18.errrorMessageUploadFileFromService = response;
            });
          }
        }]);

        return AvatarUploadComponent;
      }();

      AvatarUploadComponent.ɵfac = function AvatarUploadComponent_Factory(t) {
        return new (t || AvatarUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      AvatarUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AvatarUploadComponent,
        selectors: [["app-avatar-upload"]],
        decls: 15,
        vars: 5,
        consts: [[4, "ngIf"], [1, "row", "container"], [1, "col-md-4"], [1, "col-md-6", "pt-5"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "avatar", 1, "text-white"], ["type", "file", "name", "avatr", "id", "", 1, "form-control", 3, "input"], [1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "m-4"], ["routerLink", "/", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [1, "alert", "alert-danger"], ["routerLink", "/"], [3, "routerLink"]],
        template: function AvatarUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AvatarUploadComponent_app_navbar_0_Template, 1, 0, "app-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AvatarUploadComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "ary fanehoana: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AvatarUploadComponent_Template_input_input_7_listener($event) {
              return ctx.handleFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AvatarUploadComponent_Template_button_click_9_listener() {
              return ctx.addAvatarFromService();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "EKENA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AvatarUploadComponent_a_12_Template, 2, 0, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AvatarUploadComponent_a_14_Template, 2, 3, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logged);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errrorMessageUploadFileFromService);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.shoudSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.token);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.token);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmF0YXItdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "pjuX":
    /*!********************************************************!*\
      !*** ./src/app/component/card-mp/card-mp.component.ts ***!
      \********************************************************/

    /*! exports provided: CardMpComponent */

    /***/
    function pjuX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardMpComponent", function () {
        return CardMpComponent;
      });
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function CardMpComponent_a_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HANOVA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/user/edit/" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.id_user));
        }
      }

      function CardMpComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardMpComponent_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.removeUserFromService(ctx_r2.mp._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HAMAFA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var CardMpComponent = /*#__PURE__*/function () {
        function CardMpComponent(userService, route) {
          _classCallCheck(this, CardMpComponent);

          this.userService = userService;
          this.route = route;
          this.mp = {};
          this.sampana = "";
          this.id_user = "";
          this.imageLink = "http://localhost:7000/public/uploads/images/";
          this.isNotBeazina = true;
        }

        _createClass(CardMpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imageLink += this.mp.avatar ? this.mp.avatar : "default.png";
            this.id_user = this.mp._id;
            var token = localStorage.getItem('token');
            var userConnected = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
            this.isNotBeazina = userConnected.role !== "beazina" ? true : false;
          }
        }, {
          key: "removeUserFromService",
          value: function removeUserFromService(id) {
            this.userService.removeUser(id, this.sampana);
          }
        }]);

        return CardMpComponent;
      }();

      CardMpComponent.ɵfac = function CardMpComponent_Factory(t) {
        return new (t || CardMpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      CardMpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CardMpComponent,
        selectors: [["app-card-mp"]],
        inputs: {
          mp: "mp",
          sampana: "sampana"
        },
        decls: 19,
        vars: 8,
        consts: [[1, "card", "mb-3", "card-details", "border", 2, "max-width", "540px"], [1, "row", "g-0"], [1, "col-md-4", "dFlexCol"], ["alt", "...", 1, "img-fluid", 3, "src"], [1, "col-md-8"], [1, "card-body"], [1, "card-text"], [1, "text-muted"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-primary", 3, "routerLink"], ["class", "btn btn-success", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]],
        template: function CardMpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Anarana: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "HIJERY");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CardMpComponent_a_17_Template, 2, 3, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CardMpComponent_button_18_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.mp.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.mp.sampana);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/user/" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.id_user));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNotBeazina);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNotBeazina);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLW1wLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ugMz":
    /*!******************************************************************!*\
      !*** ./src/app/pages/congratulation/congratulation.component.ts ***!
      \******************************************************************/

    /*! exports provided: CongratulationComponent */

    /***/
    function ugMz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CongratulationComponent", function () {
        return CongratulationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CongratulationComponent = /*#__PURE__*/function () {
        function CongratulationComponent() {
          _classCallCheck(this, CongratulationComponent);
        }

        _createClass(CongratulationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CongratulationComponent;
      }();

      CongratulationComponent.ɵfac = function CongratulationComponent_Factory(t) {
        return new (t || CongratulationComponent)();
      };

      CongratulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CongratulationComponent,
        selectors: [["app-congratulation"]],
        decls: 6,
        vars: 0,
        consts: [[1, "box-center", "text-white"], ["routerLink", ""]],
        template: function CongratulationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Misaotra e,kaonty voasokatra aradanlana");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hiditra amin'ny kantiko");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25ncmF0dWxhdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "vF8A":
    /*!********************************************************!*\
      !*** ./src/app/pages/list-user/list-user.component.ts ***!
      \********************************************************/

    /*! exports provided: ListUserComponent */

    /***/
    function vF8A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListUserComponent", function () {
        return ListUserComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../component/navbar/navbar.component */
      "ObfR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _component_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../component/card/card.component */
      "4fXm");

      function ListUserComponent_app_card_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card", 2);
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", user_r1);
        }
      }

      var ListUserComponent = /*#__PURE__*/function () {
        function ListUserComponent(userSerive) {
          _classCallCheck(this, ListUserComponent);

          this.userSerive = userSerive;
          this.users = [];
          this.usersSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        }

        _createClass(ListUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.usersSubscription = this.userSerive.usersSubject.subscribe(function (response) {
              _this19.users = response;
            }, function (error) {
              console.log(error);
            });
            this.userSerive.getAllUsers();
            this.userSerive.emitUser();
          }
        }]);

        return ListUserComponent;
      }();

      ListUserComponent.ɵfac = function ListUserComponent_Factory(t) {
        return new (t || ListUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      ListUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListUserComponent,
        selectors: [["app-list-user"]],
        decls: 3,
        vars: 1,
        consts: [[1, "card-columns", "mt-65"], [3, "user", 4, "ngFor", "ngForOf"], [3, "user"]],
        template: function ListUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListUserComponent_app_card_2_Template, 1, 1, "app-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _pages_avatar_upload_avatar_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/avatar-upload/avatar-upload.component */
      "ja9t");
      /* harmony import */


      var _pages_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/congratulation/congratulation.component */
      "ugMz");
      /* harmony import */


      var _pages_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/detail-user/detail-user.component */
      "dxdv");
      /* harmony import */


      var _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/edit/edit.component */
      "iPD0");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/list-user/list-user.component */
      "vF8A");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/not-found404/not-found404.component */
      "QLnj");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _pages_sampana_details_sampana_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/sampana-details/sampana-details.component */
      "jP+/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
      }, {
        path: "home",
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
      }, {
        path: "register",
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
      }, {
        path: "user/:id",
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        component: _pages_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_4__["DetailUserComponent"]
      }, {
        path: "user/edit/:id",
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        component: _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
      }, {
        path: "congratulation",
        component: _pages_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_3__["CongratulationComponent"]
      }, {
        path: "upload-avatar/:id",
        component: _pages_avatar_upload_avatar_upload_component__WEBPACK_IMPORTED_MODULE_2__["AvatarUploadComponent"]
      }, {
        path: "list-user",
        component: _pages_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_7__["ListUserComponent"]
      }, {
        path: "sampana/:sampana",
        component: _pages_sampana_details_sampana_details_component__WEBPACK_IMPORTED_MODULE_11__["SampanaDetailsComponent"]
      }, {
        path: "not-found",
        component: _pages_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_9__["NotFound404Component"]
      }, {
        path: "**",
        redirectTo: "not-found"
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "yg1T":
    /*!**************************************************************!*\
      !*** ./src/app/component/card-tonia/card-tonia.component.ts ***!
      \**************************************************************/

    /*! exports provided: CardToniaComponent */

    /***/
    function yg1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardToniaComponent", function () {
        return CardToniaComponent;
      });
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function CardToniaComponent_a_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HANOVA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/user/edit/" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.id_user));
        }
      }

      function CardToniaComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardToniaComponent_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.removeToniaFromService(ctx_r2.tonia._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HAMAFA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var CardToniaComponent = /*#__PURE__*/function () {
        function CardToniaComponent(userService) {
          _classCallCheck(this, CardToniaComponent);

          this.userService = userService;
          this.tonia = {};
          this.sampana = "";
          this.imageLink = "http://localhost:7000/public/uploads/images/";
          this.id_user = "";
          this.isNotBeazina = true;
        }

        _createClass(CardToniaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imageLink += this.tonia.avatar ? this.tonia.avatar : "default.png";
            this.id_user = this.tonia._id;
            var token = localStorage.getItem('token');
            var userConnected = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
            this.isNotBeazina = userConnected.role !== "beazina" ? true : false;
          }
        }, {
          key: "removeToniaFromService",
          value: function removeToniaFromService(id) {
            this.userService.removeUser(id, this.sampana);
          }
        }]);

        return CardToniaComponent;
      }();

      CardToniaComponent.ɵfac = function CardToniaComponent_Factory(t) {
        return new (t || CardToniaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      CardToniaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CardToniaComponent,
        selectors: [["app-card-tonia"]],
        inputs: {
          tonia: "tonia",
          sampana: "sampana"
        },
        decls: 19,
        vars: 8,
        consts: [[1, "card", "mb-3", "card-details", "border", 2, "max-width", "540px"], [1, "row", "g-0"], [1, "col-md-4", "dFlexCol"], ["alt", "...", 1, "img-fluid", 3, "src"], [1, "col-md-8"], [1, "card-body"], [1, "card-text"], [1, "text-muted"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-primary", 3, "routerLink"], ["class", "btn btn-success", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]],
        template: function CardToniaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Anarana: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "HIJERY");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CardToniaComponent_a_17_Template, 2, 3, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CardToniaComponent_button_18_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tonia.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tonia.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/user/" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.id_user));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNotBeazina);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNotBeazina);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXRvbmlhLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map