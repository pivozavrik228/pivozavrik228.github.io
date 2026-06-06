const swiper = new Swiper('.swiper', {

autoplay:{
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
},


  // Optional parameters
  direction: 'horizontal',
//   loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    /* el: '.swiper-scrollbar', */
  },
});













let app = {
    data() {
        return {
            title: 'Pizzas Menu',
            noteArr: [

                { name: "No meat", model: 'Hot`n Chedar', color: 'spicy!', proceso: 'Big, Medium, Small',  price: 185 },
                { name: "No meat", model: 'Vegan', color: 'Best for fitness', proceso: 'Big, Medium, Small',  price: 145 },
                { name: "No meat", model: 'Habanero', color: 'XTRAspice', proceso: 'Big, Medium, Small', price: 160 },
                { name: "No meat", model: '4cheeses', color: 'For cheese lovers', proceso: 'Big, Medium',  price: 180 },
                { name: "No meat", model: 'Marinara', color: 'Tomatoes!', proceso: 'Big, Medium', price: 180 },
                { name: "No meat", model: 'Mozarella', color: 'Old classic', proceso: 'Big, Medium',  price: 180 },
                { name: "No meat", model: 'Margharita', color: 'Old classic', proceso: 'Big, Small', price: 160 },

                { name: "Meat", model: 'Capricossa', color: 'delicious!', proceso: 'Big, Medium',  price: 170 },
                { name: "Meat", model: '4seasons', color: 'For meat lovers', proceso: 'Big, Medium',  price: 190 },
                { name: "Meat", model: 'Peperoni', color: 'The best one', proceso: 'Big, Medium',  price: 150 },

                
                { name: "Meat", model: 'Habanero Meat', color: 'Hot and tasty', proceso: 'Big, Medium, Small',  price: 200 },
                { name: "Meat", model: 'Pizza Chicago', color: 'Bila Tserkwa special', proceso: 'Ultra Big, Big, Medium',  price: 210 },

                { name: "Special", model: 'America', color: 'Taste of freedom', proceso: 'Big, Medium',  price: 170 },
                
                { name: "Special", model: 'VariantsPizza', color: 'Feel invincible', proceso: 'Big, Medium',  price: 160 },

                { name: "Special", model: 'Manhatan', color: 'Dad`s favorite', proceso: 'Big, Medium',  price: 200 },
                { name: "Special", model: '1 bite chalange', color: 'try hard', proceso: '1 piece',  price: 250 },
                { name: "Special", model: 'CountrySide Pizza', color: 'mmm... that taste!', proceso: 'Big, Medium',  price: 190 },

            ],
            noteName: ['No meat', 'Meat', 'Special', 'Promotions'  ],
            clickArray: [],
            clickName: '',
            tralyalya:'',


        }
    },
    methods: {
        Jiguli(i) {
            this.clickArray.length = 0;
            this.clickName = this.noteName[i];
            for (let elem of this.noteArr) {
                if (elem.name == this.clickName){
                    this.clickArray.push(elem);
                }

           }
           console.log(this.clickArray);

        },
        Lexus(){
            let s = this.tralyalya.trim().toLowerCase();
            if (s == ''){
                return this.clickArray;
            }
            this.clickArray.length = 0;

            return this.noteArr.filter(item =>{
                if(item.name.toLowerCase().indexOf(s) !== -1 || item.proceso.toLowerCase().indexOf(s)){
                    this.clickArray.push(item);
                    return this.clickArray;
                }
            })
        }
        
    },

    mounted(){
        this.Jiguli(0)
    }
}

Vue.createApp(app).mount('.vue-container')