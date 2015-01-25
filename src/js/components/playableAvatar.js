var Crafty = require('craftyjs');

Crafty.c('PlayableAvatar', {
    init: function(){
        this.requires("Avatar, Twoway");
        this.twoway(5, 0);
    }
});
