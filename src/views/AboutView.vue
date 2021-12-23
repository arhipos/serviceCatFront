<template>
    <div class="search_line">
        <div class="search-field__input-wrapper">
            <div class="text-field">
                <div class="text-field__body">
                    <fieldset class="text-field__fieldset"/>
                    <div>
                        <input type="text" placeholder="Услуги, ищем тут" class="text-field__input">
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="search_line__button btn btn-success">Хуяк</button>
    </div>
  <div class="main-content">
      <div class="service_cards_container" v-for="service in services">
          <div class="service_card">
              <div class="service_card__profile">
                  <div class="profile__img_wrap">
                      <img :src="service.avatar" loading="lazy" class="profile__img" alt="ава">
                  </div>
                  <button class="btn btn-link profile__btn_review">{{service.reviewsCount}} отзыв</button>
              </div>
              <div class="service_card__content">
                  <div class="content__title fs-3">
                      <a href="__todo" class="service_title">{{service.name}}</a>
                  </div>
                  <div class="content_phone">
                      <i class="fa-xl fas fa-blender-phone content_phone__icon"></i>
                      <span class="content_phone__numbers">{{service.phone}}</span>
                  </div>
                  <div class="content_address">
                      <i class="fa-xl fa-solid fa-location-dot content_phone__icon"></i>
                      <span class="content_phone__numbers">{{addressToString(service.address)}}</span>
                  </div>
                  <div class="content__description">
                      <blockquote>
                          {{contentShorter(service.description)}}
                     </blockquote>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data: function () {
        return {
            services: [
                {
                    name: 'Сервис центр "Насломан"',
                    avatar: "/img/avatars/avatar_1.jpeg",
                    phone: '79119122212',
                    reviewsCount: 102,
                    description: 'Чтобы ремонт сотовых, мобильных телефонов и смартфонов прошел действительно срочно и качественно, обращайтесь в наши сервисные центры «re-Center СПб». Диагностика всегда бесплатна, при любых условиях! Ремонтируем телефоны любых марок по низким ценам в Санкт-Петербурге. Длительная гарантия до 1 года, мастера с опытом более 8 лет с профессиональным оборудованием. Устанавливаем оригинальные запчасти, так же их качественные аналоги.',
                    address: {
                        street: 'наб. Реки Карповки',
                        building: 'д. 20',
                        flat: null
                    }
                }
            ]
        };
    },
    methods: {
        addressToString(address){
          let res =  address.street+' '+address.building;
          if (address.flat !== null && address.flat !== ''){
              res += ', '+address.flat;
          }
            return res;
        },
        contentShorter(text) {
            let res = ''
            text.split(' ').forEach((word)=> {
                if (res.length< 250){
                    res += ' ' + word
                }
            })

            return res+'...'
        },
    },
}
</script>
<style scoped>
.content_phone__icon{
    color: dodgerblue;
}
.service_cards_container, .search_line {
    width: 960px;
    margin: 0 auto;
}
@media (min-width: 1200px) {
    .service_cards_container, .search_line {
        width:1120px;
    }
}
.search_line {
    transform: translateY(50%);
    margin-top: -32px;
    margin-bottom: 44px;
    z-index: 100;
    display: flex;
    position: relative;
}
.service_card{
    display: flex;
    padding: 24px;
    margin: 16px 0;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #e8ebf1;
    -webkit-box-shadow: 0 15px 20px rgb(151 158 167 / 10%);
    box-shadow: 0 15px 20px rgb(151 158 167 / 10%);
}
.profile__img_wrap{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 4px;
    border: 1px solid #e8ebf1;
    line-height: 0;
    cursor: pointer;
    position: relative;
}
.profile__btn_review
{
    color: #4e4e4e!important;
}
.profile__btn_review:hover
{
   text-decoration: none;
}
.service_card__profile{
    width: 150px;
    text-align: center;
}
.service_card__content{
    padding: 0 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: inline-block;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.service_title{
    display: inline-block;
    text-decoration: none;
    color: dodgerblue;
}
.content_phone{
    margin: 10px 0;
}
.content_address{
    margin: 10px 0;
}
.content_phone__numbers {
    padding-left: 10px;
    font-weight: 900;
    font-size: 16px;
    color: #181d21;
}
.content__description {
    line-height: 140%;
    font-size: 14px;
    color: #0c0a0a;
    margin-bottom: 24px;
}
blockquote:before {
    content: "\AB ";
}
 blockquote:after {
     content: " \BB";
}
 .text-field__input{
     background-color: transparent;
     border-style: none;
     border-radius: 0;
     outline: none;
     -webkit-box-flex: 1;
     -ms-flex: 1 1 auto;
     flex: 1 1 auto;
     line-height: 20px;
     padding: 8px 0;
     max-width: 100%;
     min-width: 0;
     width: 100%;
 }
 .text-field__body{
     height: 56px;
     display: flex;
     -webkit-box-flex: 1;
     -ms-flex: 1 1 auto;
     flex: 1 1 auto;
     position: relative;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     background-color: #fff;
 }
 .text-field{
     display: flex;
 }
 .text-field__fieldset{
     min-inline-size: min-content;
     padding: 0;
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     border-radius: 4px;
     border: 1px solid #757575;
     pointer-events: none;
 }
 .search-field__input-wrapper{
     position: relative;
     -webkit-box-flex: 1;
     -ms-flex: 1 0 auto;
     flex: 1 0 auto;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-orient: vertical;
     -webkit-box-direction: normal;
     -ms-flex-flow: column;
     flex-flow: column;
 }
 .text-field__input{
     padding: 0 12px;
     -webkit-box-flex: 1;
     flex: 1 1 auto;
 }
 .search_line__button{
     flex: 0 0 130px;
     margin: 0 0 0 16px;
     font-weight: 500;
     font-size: 14px;
     line-height: 16px;
     letter-spacing: 1.25px;
     text-transform: uppercase;
 }
</style>