(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/memoryTraining/memoryTraining"],{

/***/ 19:
/*!********************************************************************************************!*\
  !*** D:/desktop/zm/uni_app/小游戏/main.js?{"page":"pages%2FmemoryTraining%2FmemoryTraining"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _memoryTraining = _interopRequireDefault(__webpack_require__(/*! ./pages/memoryTraining/memoryTraining.vue */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_memoryTraining.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 20:
/*!*************************************************************************!*\
  !*** D:/desktop/zm/uni_app/小游戏/pages/memoryTraining/memoryTraining.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoryTraining.vue?vue&type=template&id=6d266b66& */ 21);
/* harmony import */ var _memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memoryTraining.vue?vue&type=script&lang=js& */ 23);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _memoryTraining_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memoryTraining.vue?vue&type=style&index=0&lang=less& */ 25);
/* harmony import */ var _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/memoryTraining/memoryTraining.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 21:
/*!********************************************************************************************************!*\
  !*** D:/desktop/zm/uni_app/小游戏/pages/memoryTraining/memoryTraining.vue?vue&type=template&id=6d266b66& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./memoryTraining.vue?vue&type=template&id=6d266b66& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_template_id_6d266b66___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 22:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/desktop/zm/uni_app/小游戏/pages/memoryTraining/memoryTraining.vue?vue&type=template&id=6d266b66& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = Math.ceil(_vm.time)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 23:
/*!**************************************************************************************************!*\
  !*** D:/desktop/zm/uni_app/小游戏/pages/memoryTraining/memoryTraining.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./memoryTraining.vue?vue&type=script&lang=js& */ 24);
/* harmony import */ var _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 24:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/desktop/zm/uni_app/小游戏/pages/memoryTraining/memoryTraining.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      background_color: 'rgb(137, 217, 254)', // 背景颜色
      start_flag: false, // 开始标记
      memory_flag: true, // 记忆阶段标记
      currentSchedule: 500, // 进度条长度
      strList: '0123456789', // 题目的范围
      value: '', // 当前的题目
      inputValue: '', // 用户输入的值
      time: 5, // 倒计时
      timeSpace: 10, // 进度条缩小像素
      isCorrect: null, // 回答是否正确, 为空表示不暂时不显示
      duplicateFlag: 0, // 每一个长度重复3次 
      stringLength: 4, // 题目的长度
      qualified: 0 // 当前坚持的次数
    };
  },
  methods: {
    // 开始游戏
    startPlay: function startPlay() {var _this = this;
      if (this.start_flag === false) {
        this.start_flag = true;
        // 根据坚持次数增加游戏难度
        if (this.qualified >= 6 && this.qualified < 9) {
          // this.currentSchedule = this.currentSchedule + 100 * 2;
          this.time = this.time + 2; // 延长记忆时间
          this.timeSpace = 7;
          this.strList = this.strList.concat('abcdefghijklmnopqrstuvwxyz');
          console.log(this.strList);
        } else
        if (this.qualified >= 9) {
          // this.currentSchedule = this.currentSchedule + 100 * 3;
          this.time = this.time + 5; // 延长记忆时间
          this.timeSpace = 5;
          this.strList = this.strList.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
          console.log(this.strList);
        }
        this.value = this.randomString(this.strList, this.stringLength); // 题目不限制长度
        // 开始倒计时
        var timer = setInterval(function () {
          var time = _this.time * 1000 - 100;
          _this.currentSchedule = _this.currentSchedule - _this.timeSpace;
          _this.time = time / 1000;
          if (_this.currentSchedule <= 0) {
            clearInterval(timer);
            _this.time = 0;
            _this.memory_flag = false; // 进入答题阶段
            _this.background_color = 'rgb(163, 238, 134)';
          }
        }, 100);
      }
    },

    // 输入框输入值
    inputValueFun: function inputValueFun(event) {
      this.inputValue = event.detail.value.trim();
    },

    // 提交结果
    submitResult: function submitResult() {
      console.log(this.value);
      console.log(this.inputValue);
      if (this.value === this.inputValue) {
        this.isCorrect = true;
        this.duplicateFlag++;
        if (this.duplicateFlag >= 3) {// 题目重复3次，长度加一
          this.duplicateFlag = 0;
          this.stringLength++;
        }
        this.qualified++;
      } else
      {
        this.isCorrect = false;
      }
    },

    // 继续挑战
    continuePlay: function continuePlay() {
      // 还原属性值
      this.value = '';
      this.inputValue = '';
      this.start_flag = false;
      this.isCorrect = null;
      this.memory_flag = true;
      this.currentSchedule = 500;
      this.time = 5;
      this.background_color = 'rgb(137, 217, 254)';
    },

    // 复活继续
    resurrectionPlay: function resurrectionPlay() {
      // 还原属性值
      this.value = '';
      this.inputValue = '';
      this.start_flag = false;
      this.isCorrect = null;
      this.memory_flag = true;
      this.currentSchedule = 500;
      this.time = 5;
      this.background_color = 'rgb(137, 217, 254)';
    },

    // 重新开始
    resetPlay: function resetPlay() {
      // 还原属性值
      this.value = '';
      this.inputValue = '';
      this.start_flag = false;
      this.isCorrect = null;
      this.memory_flag = true;
      this.currentSchedule = 500;
      this.qualified = 0;
      this.stringLength = 4;
      this.duplicateFlag = 0;
      this.time = 5;
      this.timeSpace = 10;
      this.strList = '0123456789';
      this.background_color = 'rgb(137, 217, 254)';
    },

    // 生成随机字符串
    randomString: function randomString(strList, length) {// strList: 随机字符串的范围   length: 需生成的字符串长度
      var str = ''; // 初始化字符串
      for (var i = 0; i < length; i++) {
        str = str + strList[Math.floor(Math.random() * strList.length)];
      }
      return str;
    } } };exports.default = _default;

/***/ }),

/***/ 25:
/*!***********************************************************************************************************!*\
  !*** D:/desktop/zm/uni_app/小游戏/pages/memoryTraining/memoryTraining.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./memoryTraining.vue?vue&type=style&index=0&lang=less& */ 26);
/* harmony import */ var _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_memoryTraining_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 26:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/desktop/zm/uni_app/小游戏/pages/memoryTraining/memoryTraining.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[19,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9kZXNrdG9wL3ptL3VuaV9hcHAv5bCP5ri45oiPL3BhZ2VzL21lbW9yeVRyYWluaW5nL21lbW9yeVRyYWluaW5nLnZ1ZT83ZjVhIiwid2VicGFjazovLy9EOi9kZXNrdG9wL3ptL3VuaV9hcHAv5bCP5ri45oiPL3BhZ2VzL21lbW9yeVRyYWluaW5nL21lbW9yeVRyYWluaW5nLnZ1ZT8xNWZkIiwid2VicGFjazovLy9EOi9kZXNrdG9wL3ptL3VuaV9hcHAv5bCP5ri45oiPL3BhZ2VzL21lbW9yeVRyYWluaW5nL21lbW9yeVRyYWluaW5nLnZ1ZT9kOTgwIiwidW5pLWFwcDovLy9wYWdlcy9tZW1vcnlUcmFpbmluZy9tZW1vcnlUcmFpbmluZy52dWUiLCJ3ZWJwYWNrOi8vL0Q6L2Rlc2t0b3Avem0vdW5pX2FwcC/lsI/muLjmiI8vcGFnZXMvbWVtb3J5VHJhaW5pbmcvbWVtb3J5VHJhaW5pbmcudnVlP2VhMGIiLCJ3ZWJwYWNrOi8vL0Q6L2Rlc2t0b3Avem0vdW5pX2FwcC/lsI/muLjmiI8vcGFnZXMvbWVtb3J5VHJhaW5pbmcvbWVtb3J5VHJhaW5pbmcudnVlP2Q5NzMiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLHVIO0FBQ0FBLFVBQVUsQ0FBQ0MsdUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJIO0FBQzNIO0FBQ2tFO0FBQ0w7QUFDYzs7O0FBRzNFO0FBQ3VNO0FBQ3ZNLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBK3hCLENBQWdCLDh3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NEbnpCO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsNENBREEsRUFDQTtBQUNBLHVCQUZBLEVBRUE7QUFDQSx1QkFIQSxFQUdBO0FBQ0EsMEJBSkEsRUFJQTtBQUNBLDJCQUxBLEVBS0E7QUFDQSxlQU5BLEVBTUE7QUFDQSxvQkFQQSxFQU9BO0FBQ0EsYUFSQSxFQVFBO0FBQ0EsbUJBVEEsRUFTQTtBQUNBLHFCQVZBLEVBVUE7QUFDQSxzQkFYQSxFQVdBO0FBQ0EscUJBWkEsRUFZQTtBQUNBLGtCQWJBLENBYUE7QUFiQTtBQWVBLEdBakJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSxvQ0FGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFqQkEsQ0FpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQSxTQVZBLEVBVUEsR0FWQTtBQVdBO0FBQ0EsS0FsQ0E7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBLEtBdkNBOztBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0EsS0F6REE7O0FBMkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRFQTs7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbkZBOztBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckdBOztBQXVHQTtBQUNBO0FBQ0EsbUJBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5R0EsRUFsQkEsRTs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBO0FBQTA3QyxDQUFnQixzMUNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0E5OEM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9tZW1vcnlUcmFpbmluZy9tZW1vcnlUcmFpbmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9tZW1vcnlUcmFpbmluZy9tZW1vcnlUcmFpbmluZy52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tZW1vcnlUcmFpbmluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQyNjZiNjYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZW1vcnlUcmFpbmluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lbW9yeVRyYWluaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9tZW1vcnlUcmFpbmluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbWVtb3J5VHJhaW5pbmcvbWVtb3J5VHJhaW5pbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9tZW1vcnlUcmFpbmluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQyNjZiNjYmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBnMCA9IE1hdGguY2VpbChfdm0udGltZSlcbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBnMDogZzBcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL21lbW9yeVRyYWluaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9tZW1vcnlUcmFpbmluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IEBjbGljaz1cInN0YXJ0UGxheVwiIGNsYXNzPVwiYmFja2dyb3VuZFwiIHYtYmluZDpzdHlsZT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBiYWNrZ3JvdW5kX2NvbG9yfVwiPlxyXG5cdFx0XHJcblx0XHQ8IS0tIOmhtemdouWIneWni+WMliAtLT5cclxuXHRcdDx2aWV3IHYtaWY9XCJzdGFydF9mbGFnPT09ZmFsc2VcIiBjbGFzcz1cImluaXRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCI+XHJcblx0XHRcdFx0PHRleHQ+MTIzPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdDx2aWV3PuacgOWOieWus+eahOS6uuWPr+S7peeerOmXtOiusOS9jzfkuKrmlbDlrZc8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+5L2g6IO95YGa5Yiw5ZCXPzwvdmlldz5cclxuXHRcdFx0XHQ8dGV4dD7ljZXlh7vku7vmhI/kvY3nva7lvIDlp4s8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cInN0YXJ0XCI+XHJcblx0XHRcdDwhLS0g6K6w5b+G6Zi25q61IC0tPlxyXG5cdFx0XHQ8YmxvY2sgdi1pZj1cIm1lbW9yeV9mbGFnXCI+XHJcblx0XHRcdFx0PHRleHQgaWQ9XCJzY29yZVwiPnt7dmFsdWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpbWUtc2NoZWR1bGVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VtLXNjaGVkdWxlXCIgPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3VycmVudC1zY2hlZHVsZVwiIHYtYmluZDpzdHlsZT1cInsgd2lkdGg6IGN1cnJlbnRTY2hlZHVsZSArICdycHgnfVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aW1lLW51bVwiPuWAkuiuoeaXtu+8mnt7TWF0aC5jZWlsKHRpbWUpfX1zPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvbXB0XCI+6K+35ZyoNXPlhoXorrDkvY/mlbDlrZflkozlrZfmr408L3ZpZXc+XHJcblx0XHRcdDwvYmxvY2s+IFxyXG5cdFx0XHQ8IS0tIOetlOmimOmYtuautSAtLT5cclxuXHRcdFx0PGJsb2NrIHYtZWxzZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFuc3dlclwiPlxyXG5cdFx0XHRcdFx0PGJsb2NrIHYtaWY9XCJpc0NvcnJlY3Q9PT1udWxsXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0Puivt+i+k+WFpeaJgOiusOWtl+espjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IEBpbnB1dD1cImlucHV0VmFsdWVGdW5cIiB2LWJpbmQ6dmFsdWU9XCJpbnB1dFZhbHVlXCIvPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwic3VibWl0XCIgQGNsaWNrPVwic3VibWl0UmVzdWx0XCIgdHlwZT1cImRlZmF1bHRcIj7noa7lrpo8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1lbHNlLWlmPVwiaXNDb3JyZWN0PT09dHJ1ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogNzBycHg7IGNvbG9yOiAjMDBhOGYwO1wiPuWbnuetlOato+ehrjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHZpZXc+5oKo5bey5oiQ5Yqf5Z2a5oyBe3txdWFsaWZpZWR9fei9rjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImNvbnRpbnVlXCIgQGNsaWNrPVwiY29udGludWVQbGF5XCI+54K55Ye757un57utPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0PGJsb2NrIHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA0MHJweDtmb250LXNpemU6IDcwcnB4OyBjb2xvcjogI0RENTI0RDtcIj7lm57nrZTplJnor688L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3Puato+ehruetlOahiDo8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogNDBycHg7Y29sb3I6ICMwMDdBRkZcIj57e3ZhbHVlfX08L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldz7mgqjnmoTnrZTmoYg6PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDQwcnB4O2NvbG9yOiAjZmY5ZTAyXCI+e3tpbnB1dFZhbHVlfX08L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldz7mgqjmiJDlip/lnZrmjIE8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogNDVycHg7Y29sb3I6ICNmZjAyODlcIj57e3F1YWxpZmllZH19PC90ZXh0Pui9rjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJyZXN1cnJlY3Rpb25QbGF5XCIgY2xhc3M9XCJyZXN1cnJlY3Rpb25cIiB0eXBlPVwiZGVmYXVsdFwiPuWkjea0u+e7p+e7rTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cInJlc2V0UGxheVwiIGNsYXNzPVwicmVzZXRcIiB0eXBlPVwiZGVmYXVsdFwiPumHjeaWsOW8gOWnizwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvYmxvY2s+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGJhY2tncm91bmRfY29sb3I6ICdyZ2IoMTM3LCAyMTcsIDI1NCknLCAgLy8g6IOM5pmv6aKc6ImyXG5cdFx0XHRcdHN0YXJ0X2ZsYWc6IGZhbHNlLCAgIC8vIOW8gOWni+agh+iusFxyXG5cdFx0XHRcdG1lbW9yeV9mbGFnOiB0cnVlLCAgIC8vIOiusOW/humYtuauteagh+iusFxyXG5cdFx0XHRcdGN1cnJlbnRTY2hlZHVsZTogNTAwLCAgIC8vIOi/m+W6puadoemVv+W6plxyXG5cdFx0XHRcdHN0ckxpc3Q6ICcwMTIzNDU2Nzg5JywgIC8vIOmimOebrueahOiMg+WbtFxyXG5cdFx0XHRcdHZhbHVlOiAnJywgICAvLyDlvZPliY3nmoTpopjnm65cclxuXHRcdFx0XHRpbnB1dFZhbHVlOiAnJywgIC8vIOeUqOaIt+i+k+WFpeeahOWAvFxyXG5cdFx0XHRcdHRpbWU6IDUgICwvLyDlgJLorqHml7ZcclxuXHRcdFx0XHR0aW1lU3BhY2U6IDEwLCAgLy8g6L+b5bqm5p2h57yp5bCP5YOP57SgXHJcblx0XHRcdFx0aXNDb3JyZWN0OiBudWxsLCAgIC8vIOWbnuetlOaYr+WQpuato+ehriwg5Li656m66KGo56S65LiN5pqC5pe25LiN5pi+56S6XHJcblx0XHRcdFx0ZHVwbGljYXRlRmxhZzogMCwgICAvLyDmr4/kuIDkuKrplb/luqbph43lpI0z5qyhIFxyXG5cdFx0XHRcdHN0cmluZ0xlbmd0aDogNCwgICAvLyDpopjnm67nmoTplb/luqZcclxuXHRcdFx0XHRxdWFsaWZpZWQ6IDAsICAvLyDlvZPliY3lnZrmjIHnmoTmrKHmlbBcblx0XHRcdH07XG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHQvLyDlvIDlp4vmuLjmiI9cclxuXHRcdFx0c3RhcnRQbGF5OiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHRoaXMuc3RhcnRfZmxhZyA9PT0gZmFsc2Upe1xyXG5cdFx0XHRcdFx0dGhpcy5zdGFydF9mbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHRcdC8vIOagueaNruWdmuaMgeasoeaVsOWinuWKoOa4uOaIj+mavuW6plxyXG5cdFx0XHRcdFx0aWYodGhpcy5xdWFsaWZpZWQgPj0gNiAmJiB0aGlzLnF1YWxpZmllZCA8IDkpe1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLmN1cnJlbnRTY2hlZHVsZSA9IHRoaXMuY3VycmVudFNjaGVkdWxlICsgMTAwICogMjtcclxuXHRcdFx0XHRcdFx0dGhpcy50aW1lICA9IHRoaXMudGltZSArIDIgICAvLyDlu7bplb/orrDlv4bml7bpl7RcclxuXHRcdFx0XHRcdFx0dGhpcy50aW1lU3BhY2UgPSA3O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0ckxpc3QgPSB0aGlzLnN0ckxpc3QuY29uY2F0KCdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0ckxpc3QpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZih0aGlzLnF1YWxpZmllZCA+PSA5KXtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5jdXJyZW50U2NoZWR1bGUgPSB0aGlzLmN1cnJlbnRTY2hlZHVsZSArIDEwMCAqIDM7XHJcblx0XHRcdFx0XHRcdHRoaXMudGltZSAgPSB0aGlzLnRpbWUgKyA1OyAgIC8vIOW7tumVv+iusOW/huaXtumXtFxyXG5cdFx0XHRcdFx0XHR0aGlzLnRpbWVTcGFjZSA9IDU7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RyTGlzdCA9IHRoaXMuc3RyTGlzdC5jb25jYXQoJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJyk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RyTGlzdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5yYW5kb21TdHJpbmcodGhpcy5zdHJMaXN0LCB0aGlzLnN0cmluZ0xlbmd0aCk7ICAvLyDpopjnm67kuI3pmZDliLbplb/luqZcclxuXHRcdFx0XHRcdC8vIOW8gOWni+WAkuiuoeaXtlxyXG5cdFx0XHRcdFx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuXHRcdFx0XHRcdFx0dmFyIHRpbWUgPSB0aGlzLnRpbWUgICogMTAwMCAtIDEwMDtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50U2NoZWR1bGUgPSB0aGlzLmN1cnJlbnRTY2hlZHVsZSAtIHRoaXMudGltZVNwYWNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRpbWUgPSB0aW1lIC8gMTAwMDtcclxuXHRcdFx0XHRcdFx0aWYodGhpcy5jdXJyZW50U2NoZWR1bGUgPD0gMCl7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50aW1lID0gMDtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1lbW9yeV9mbGFnID0gZmFsc2U7ICAgLy8g6L+b5YWl562U6aKY6Zi25q61XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kX2NvbG9yID0gJ3JnYigxNjMsIDIzOCwgMTM0KSc7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sMTAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDovpPlhaXmoYbovpPlhaXlgLxcclxuXHRcdFx0aW5wdXRWYWx1ZUZ1bjogZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0XHRcdHRoaXMuaW5wdXRWYWx1ZSA9IGV2ZW50LmRldGFpbC52YWx1ZS50cmltKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDmj5DkuqTnu5PmnpxcclxuXHRcdFx0c3VibWl0UmVzdWx0OiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudmFsdWUpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5pbnB1dFZhbHVlKVxyXG5cdFx0XHRcdGlmKHRoaXMudmFsdWUgPT09IHRoaXMuaW5wdXRWYWx1ZSl7XHJcblx0XHRcdFx0XHR0aGlzLmlzQ29ycmVjdCA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmR1cGxpY2F0ZUZsYWcrKztcclxuXHRcdFx0XHRcdGlmKHRoaXMuZHVwbGljYXRlRmxhZyA+PSAzKXsgICAvLyDpopjnm67ph43lpI0z5qyh77yM6ZW/5bqm5Yqg5LiAXHJcblx0XHRcdFx0XHRcdHRoaXMuZHVwbGljYXRlRmxhZyA9IDA7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RyaW5nTGVuZ3RoKys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnF1YWxpZmllZCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5pc0NvcnJlY3QgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDnu6fnu63mjJHmiJhcclxuXHRcdFx0Y29udGludWVQbGF5OiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdC8vIOi/mOWOn+WxnuaAp+WAvFxyXG5cdFx0XHRcdHRoaXMudmFsdWUgPSAnJztcclxuXHRcdFx0XHR0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuXHRcdFx0XHR0aGlzLnN0YXJ0X2ZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzQ29ycmVjdCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5tZW1vcnlfZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50U2NoZWR1bGUgPSA1MDA7XHJcblx0XHRcdFx0dGhpcy50aW1lID0gNTtcclxuXHRcdFx0XHR0aGlzLmJhY2tncm91bmRfY29sb3IgPSAncmdiKDEzNywgMjE3LCAyNTQpJztcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOWkjea0u+e7p+e7rVxyXG5cdFx0XHRyZXN1cnJlY3Rpb25QbGF5OiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdC8vIOi/mOWOn+WxnuaAp+WAvFxyXG5cdFx0XHRcdHRoaXMudmFsdWUgPSAnJztcclxuXHRcdFx0XHR0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuXHRcdFx0XHR0aGlzLnN0YXJ0X2ZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzQ29ycmVjdCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5tZW1vcnlfZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50U2NoZWR1bGUgPSA1MDA7XHJcblx0XHRcdFx0dGhpcy50aW1lID0gNTtcclxuXHRcdFx0XHR0aGlzLmJhY2tncm91bmRfY29sb3IgPSAncmdiKDEzNywgMjE3LCAyNTQpJztcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOmHjeaWsOW8gOWni1xyXG5cdFx0XHRyZXNldFBsYXk6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Ly8g6L+Y5Y6f5bGe5oCn5YC8XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG5cdFx0XHRcdHRoaXMuc3RhcnRfZmxhZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuaXNDb3JyZWN0ID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLm1lbW9yeV9mbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRTY2hlZHVsZSA9IDUwMDtcclxuXHRcdFx0XHR0aGlzLnF1YWxpZmllZCA9IDA7XHJcblx0XHRcdFx0dGhpcy5zdHJpbmdMZW5ndGggPSA0O1xyXG5cdFx0XHRcdHRoaXMuZHVwbGljYXRlRmxhZyA9IDA7XHJcblx0XHRcdFx0dGhpcy50aW1lID0gNTtcclxuXHRcdFx0XHR0aGlzLnRpbWVTcGFjZSA9IDEwO1xyXG5cdFx0XHRcdHRoaXMuc3RyTGlzdCA9ICcwMTIzNDU2Nzg5JztcclxuXHRcdFx0XHR0aGlzLmJhY2tncm91bmRfY29sb3IgPSAncmdiKDEzNywgMjE3LCAyNTQpJztcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOeUn+aIkOmaj+acuuWtl+espuS4slxyXG5cdFx0XHRyYW5kb21TdHJpbmc6IGZ1bmN0aW9uKHN0ckxpc3QsIGxlbmd0aCl7ICAgIC8vIHN0ckxpc3Q6IOmaj+acuuWtl+espuS4sueahOiMg+WbtCAgIGxlbmd0aDog6ZyA55Sf5oiQ55qE5a2X56ym5Liy6ZW/5bqmXHJcblx0XHRcdFx0dmFyIHN0ciA9ICcnOyAgLy8g5Yid5aeL5YyW5a2X56ym5LiyXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMDtpIDwgbGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRzdHIgPSBzdHIgKyBzdHJMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzdHJMaXN0Lmxlbmd0aCldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gc3RyO1xyXG5cdFx0XHR9LFxyXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcblx0XHJcbip7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cblxyXG4uYmFja2dyb3VuZHtcclxuXHR3aWR0aDogNzUwcnB4O1xyXG5cdGhlaWdodDogMTQwMHJweDtcclxufVxyXG5cclxuLmluaXR7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMTUlO1xyXG5cdGxlZnQ6IDEwJTtcclxuXHR3aWR0aDogNjAwcnB4O1xyXG5cdGhlaWdodDogOTUwcnB4O1xyXG5cdC5pY29ue1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0bGVmdDogMzclO1xyXG5cdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdGhlaWdodDogMTUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyOiA4cnB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0dGV4dHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHR0b3A6IDQwcnB4O1xyXG5cdFx0XHRsZWZ0OiAyN3JweDtcclxuXHRcdFx0Zm9udC1zaXplOiA1MHJweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbnRlbnR7XHJcblx0XHRtYXJnaW4tdG9wOiA3MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR2aWV3e1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHRcdH1cclxuXHRcdHRleHR7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiA5NSU7XHJcblx0XHRcdGxlZnQ6IDIzJTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zdGFydHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAyMCU7XHJcblx0bGVmdDogMTAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQjc2NvcmV7XHJcblx0XHRmb250LXNpemU6IDgwcnB4O1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdH1cclxuXHQudGltZS1zY2hlZHVsZXtcclxuXHRcdG1hcmdpbjogNjBycHggMHJweDtcclxuXHRcdC5zdW0tc2NoZWR1bGV7XHJcblx0XHRcdHdpZHRoOiA1MDBycHg7XHJcblx0XHRcdGhlaWdodDogMjBycHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdFx0bWFyZ2luOiAwcnB4IDUwcnB4O1xyXG5cdFx0fVxyXG5cdFx0LmN1cnJlbnQtc2NoZWR1bGV7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0dG9wOiAtMjBycHg7XHJcblx0XHRcdC8vIHdpZHRoOiA1MDBycHg7XHJcblx0XHRcdGhlaWdodDogMjBycHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0XHRtYXJnaW46IDBycHggNTBycHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC50aW1lLW51bXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0LnByb21wdHtcclxuXHRcdG1hcmdpbi10b3A6IDIwMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0LmFuc3dlcntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA2MDBycHg7XHJcblx0XHRoZWlnaHQ6IDUwMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0dGV4dHtcclxuXHRcdFx0Zm9udC1zaXplOiA2MHJweDtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0fVxyXG5cdFx0aW5wdXR7XHJcblx0XHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRcdGhlaWdodDogNzBycHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdH1cclxuXHRcdGJ1dHRvbntcclxuXHRcdFx0d2lkdGg6IDI1MHJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRcdGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR9XHJcblx0XHQuc3VibWl0e1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdH1cclxuXHRcdC5jb250aW51ZXtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHR9XHJcblx0XHQucmVzdXJyZWN0aW9ue1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHRvcDogMTk1cnB4O1xyXG5cdFx0XHRsZWZ0OiAtMTQwcnB4O1xyXG5cdFx0XHR3aWR0aDogMjIwcnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjODdmNzBlO1xyXG5cdFx0fVxyXG5cdFx0LnJlc2V0e1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHRvcDogOTBycHg7XHJcblx0XHRcdGxlZnQ6IDE3MHJweDtcclxuXHRcdFx0d2lkdGg6IDIyMHJweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZGQ0ODtcclxuXHRcdH1cclxuXHR9XHJcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9tZW1vcnlUcmFpbmluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL21lbW9yeVRyYWluaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1OTYxODQ4MTgxNDlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9