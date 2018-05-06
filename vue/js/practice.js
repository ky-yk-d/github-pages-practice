var app = new Vue({
    // このVueを有効にする要素の指定
    el: '#app',
    // 上記で指定した範囲で利用するデータ
    data: {
        message: 'こんにちは、Vue.js!',
        htmlsample: '<a href="https://ky-yk-d.hatenablog.com">こまどブログ</a>',
        urlsample: 'https://twitter.com/ky-yk-d',
        email: 'Komado@example.com',
        current: new Date().toLocaleString()
    },
    // 演算結果を取得する算出プロパティ
    computed: {
        localEmail: function(){
            return this.email.split('@')[0].toLowerCase();
        },
        // 算出プロパティ経由で乱数を取得
        randomc: function(){
            return Math.random();
        }
    },
    // メソッドとして書くこともできる
    methods: {
        localEmail2: function(){
            return this.email.split('@')[0].toLowerCase();
        },
        // クリック時に処理を実行する
        onclick: function(){
            this.current = new Date().toLocaleString();
        },
        // メソッド経由で乱数を取得
        randomm: function(){
            return Math.random();
        }
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: '',
        name: 'ゲスト',
        inputmessage: '' 
    },
    methods: {
        onclick: function(message, e){
            this.message = new Date().toLocaleString();
            console.log(message);
            console.log(e);
        },
        clear: function(){
            this.name = '';
        },
        help: function(){
            window.alert('ヘルプメッセージです')
        },
        rightclick: function(e){
            window.alert(
                '右クリックした座標：' + e.clientX + ',' + e.clientY
            );
        }
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        yourName: 'ゲスト',
        gender: 'その他',
        agree: '',
        language: [],
        pglang: [],
        unit: {},
        height: '',
        text: '',
        lazyText: '',
        elements: []
    },
    computed: {
        agreeStr: function(){
            return this.agree === '◯' ? '同意します！' : '同意しません！';
        }
    },
    methods:{
        onchange: function(){
            // 変更時にログ出力
            console.log(
                this.unit.name + '：' + this.unit.size
            );
        },
        onchange2: function(){
            console.log(this.height.toFixed(2));
        },
        onchange3: function(){
            console.log('トリムした結果は、「' + this.text + '」です。')
        }
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        toggle: true,
        season: '',
        books: [
            {
                author: '森鴎外',
                title: '阿部一族・舞姫',
                publisher: '新潮社'
            },
            {
                author: '松浦理英子',
                title: 'ナチュラル・ウーマン',
                publisher: '河出書房'
            },
            {
                author: 'ショーペンハウアー',
                title: '意志と表象としての世界I',
                publisher: '中央公論新社'
            }
        ],
        person: {
            name: '名無しさん',
            age: 25,
            mail: 'nanashi@example.com'
        },
        machines: [
            {
                name: 'iPhone',
                price: 60000
            },
            {
                name: 'Gameboy',
                price: 5000
            },
            {
                name: 'PlayStation',
                price: 20000
            }
        ],
        list: [
            'baseball',
            'football',
            'golf'
        ]
    },
    computed: {
        cheapMachines: function(){
            return this.machines.filter(function(m){
                return m.price < 30000;
            })
        }
    },
    methods: {
        onclick: function(){
            Vue.set(this.list, 1, 'tabletennis');
        }
    }
});

var app5 = new Vue({
    el:'#app5',
    data: {
        attrs:{
            size:12,
            maxlength: 15,
            required: true
        },
        text: '要素オブジェクトのプロパティ',
        name: 'ゲスト',
        styleBinding: 'Vue.jsのスタイルバインディング',
        multiStyle: '配列形式で複数のオブジェクトを渡す',
        color: {
            backgroundColor: 'Blue',
            color: 'White'
        },
        big: {
            fontSize: '2.0em'
        },
        url:'https://twitter.com/ky_yk_d',
        message: 'v-bind:classの実験',
        isChange: true,
        colorClass: 'color',
        frameClass: 'frame',
        vCloakSample: 'cssでv-cloak付きの要素を非表示扱いにしておけばMustache構文が表示されずに済む'
    }
});