define(["jquery"],function(a){"use strict";var b={options:{data:{contact:null},selectCallback:function(a){}},translations:{title:"sulu_article.contact-selection-overlay.title"}};return{defaults:b,initialize:function(){var b=a("<div/>"),c=a("<div/>");this.$el.append(b),this.sandbox.start([{name:"overlay@husky",options:{el:b,instanceName:"contact-selection",openOnStart:!0,removeOnClose:!0,skin:"medium",slides:[{title:this.translations.title,data:c,okCallback:this.okCallbackOverlay.bind(this)}]}}]),this.sandbox.once("husky.overlay.contact-selection.opened",function(){this.sandbox.start([{name:"articles/list/contact-selection/form@suluarticle",options:{el:c,data:this.options.data,selectCallback:function(a){this.options.selectCallback(a),this.sandbox.stop()}.bind(this)}}])}.bind(this))},okCallbackOverlay:function(){this.sandbox.emit("sulu_article.contact-selection.form.get")}}});