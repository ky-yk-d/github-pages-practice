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
})