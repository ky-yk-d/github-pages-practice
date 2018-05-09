// グローバル登録
Vue.component('my-grobal-hello',{
    template: '<div>コンポーネントを使ってみる</div>'
});
var MyHello = {
    template: '<div>ローカル登録からの利用</div>'
};
Vue.component('my-param-hello', {
    props: ['yourName'], // プロパティはキャメルケース
    template: '<div>{{yourName}}！</div>'
});
Vue.component('my-counter', {
    // propsはオブジェクトを渡すこともできる
    // バリデーションはこの形でかける
    props:{
        init: {
            type: Number,
            required: true,
            // デフォルト値を設定（配列やオブジェクトの場合はfunction()を使う）
            default: function(){
                return 1
            },
            // カスタムバリデーター
            validator: function(value){
                return value <= 5;
            }
        }
    },
    template: '<div>現在の値は、{{current}}です。' + '<input type="button" v-on:click="count" value="カウント" /></div>',
    // 内部プロパティに設定しておく
    data: function(){
        return {
            current: this.init
        };
    },
    // メソッドでは内部プロパティの側を更新する
    methods: {
        count: function(){
            this.current++;
        }
    }
});
Vue.component('my-slot',{
    props: ['yourFavorite'],
    // 呼び出し元から何も渡されなかった場合はPythonになる
    template: '<div>お気に入りの言語は、<slot>Python</slot>ですね！</div>'
});
Vue.component('multi-slot',{
    props:['lyrics'],
    template: 
    '<div>' + 
    '<header><slot name="header"></slot></header>' +
    // slot属性を付加しなかった要素は無名slotに埋め込まれる
    '<div><slot></slot></div>' +
    // slot="footer"と指定した要素は下記のslotに埋め込まれる
    '<footer><slot name="footer"></slot></footer>' +
    '</div>'
})
var app7 = new Vue({
    el: '#app7',
    // ローカル登録
    components: {
        'my-local-hello': MyHello
    }
});
Vue.directive('highlight',{
    // el ディレクティブが適用された要素
    // binding バインド情報オブジェクト
    // vnode 現在の仮想ノード
    // 変更前の仮想ノード
    // [bind, inserted, ...] 実行タイミング
    // ':'以下 フック関数
    bind:(el, binding, vnode,oldVnode) => {
        el.style.backgroundColor = binding.value;
    }
});
Vue.directive('mouseenter-highlight',{
    bind: (el, binding) =>{
        el.addEventListener('mouseenter',function(){
            this.style.backgroundColor = binding.value;
        }, false);
        el.addEventListener('mouseleave',function(){
            this.style.backgroundColor = '';
        }, false);
    }
});
// 自作プラグイン
var MyUtil = {
    install: function(Vue, options){
        // numberフィルター
        Vue.filter('number', function(value, dec){
            return value.toFixed(dec);
        });
    }
};
Vue.use(MyUtil);
Vue.use(VeeValidate, {locale: 'ja'});
var app8 = new Vue({
    el: '#app8',
    data:{
        color: 'Yellow'
    }
})

