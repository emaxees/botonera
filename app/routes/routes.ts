let sound = require("nativescript-sound");

export class Routes {
    // control code
    public static get animalsSoundsRoutes(): any {
        return [{
            name: 'Cerdo',
            fileRoute: sound.create("~/sounds/animals/oink.wav")
        }, {
            name: 'Vaca',
            fileRoute: sound.create("~/sounds/animals/vaca.wav")
        }, {
            name: 'Llama',
            fileRoute: sound.create("~/sounds/animals/llama.wav")
        }, {
            name: 'Mula',
            fileRoute: sound.create("~/sounds/animals/mula.wav")
        }, {
            name: 'Hiena',
            fileRoute: sound.create("~/sounds/animals/hiena.wav")
        }, {
            name: 'Toro',
            fileRoute: sound.create("~/sounds/animals/toro.wav")
        }, {
            name: 'Alpahaca',
            fileRoute: sound.create("~/sounds/animals/alpahaca.wav")
        }, {
            name: 'Ornitorrinco',
            fileRoute: sound.create("~/sounds/animals/ornitorrinco.wav")
        }];
    };

    public static get screamSoundsRoutes(): any {
        return [{
            name: 'Niah',
            fileRoute: sound.create("~/sounds/screams/niah.wav")
        }, {
            name: '@#&%!',
            fileRoute: sound.create("~/sounds/screams/lacon.wav")
        }, {
            name: 'uuuy!',
            fileRoute: sound.create("~/sounds/screams/uy.wav")
        }, {
            name: 'AAAH',
            fileRoute: sound.create("~/sounds/screams/aaaah.wav")
        }, {
            name: 'iiaaa!',
            fileRoute: sound.create("~/sounds/screams/iiaaa.wav")
        }, {
            name: 'niiaii',
            fileRoute: sound.create("~/sounds/screams/niiaaii.wav")
        }, {
            name: 'aah-aah',
            fileRoute: sound.create("~/sounds/screams/aah-aah.wav")
        }, {
            name: 'ah-ah',
            fileRoute: sound.create("~/sounds/screams/ah-ah.wav")
        }, {
            name: 'ahAHAH',
            fileRoute: sound.create("~/sounds/screams/ahAHAH.wav")
        }, {
            name: 'arrrg',
            fileRoute: sound.create("~/sounds/screams/arrrg.wav")
        }, {
            name: 'carlitox',
            fileRoute: sound.create("~/sounds/screams/carlitox.wav")
        }, {
            name: 'NO',
            fileRoute: sound.create("~/sounds/screams/NO.wav")
        }, {
            name: 'aahh',
            fileRoute: sound.create("~/sounds/screams/aahh.wav")
        }];
    };

    public static get laughsSoundsRoutes(): any {
        return [{
            name: 'juajua',
            fileRoute: sound.create("~/sounds/laughs/jaja.wav")
        }, {
            name: 'muajajaja',
            fileRoute: sound.create("~/sounds/laughs/jajajijuja.wav")
        }, {
            name: 'muejejej',
            fileRoute: sound.create("~/sounds/laughs/jejeje.wav")
        }, {
            name: 'endemoniado',
            fileRoute: sound.create("~/sounds/laughs/mehuhu.wav")
        }, {
            name: 'ja-jajaja',
            fileRoute: sound.create("~/sounds/laughs/ja-jajaja.wav")
        }];
    };

    public static get specialsSoundsRoutes(): any {
        return [{
            name: 'Cartel',
            fileRoute: sound.create("~/sounds/others/cartel.wav")
        }, {
            name: 'Como te llamas?',
            fileRoute: sound.create("~/sounds/others/comotellamas.wav")
        }, {
            name: 'Ebrios',
            fileRoute: sound.create("~/sounds/others/ebrios.wav")
        }, {
            name: 'Perdon',
            fileRoute: sound.create("~/sounds/others/perdon.wav")
        }, {
            name: '???',
            fileRoute: sound.create("~/sounds/others/quienes.wav")
        }];
    };
    

}
