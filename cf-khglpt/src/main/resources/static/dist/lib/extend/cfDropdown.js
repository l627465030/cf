layui.define(function(b){var d=layui.hint(),a=function(e){var f=this;f.options=e;f.render()};a.prototype={options:{elem:"",children:""},render:function(){var g=this;var e=g.options;var h=$(g.options.elem).wrap('<div class="cf-cfDropdown"></div>').parent();var f=h.append('<div class="cf-cfDropdown-content"></div>').children(".cf-cfDropdown-content");f.html(e.children)}};var c=function(e){return new a(e)};b("cfDropdown",c)});