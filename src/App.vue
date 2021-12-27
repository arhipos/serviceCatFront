<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="serviceRoute">About</router-link>
  </nav>
  <router-view/>
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
                    address: 'наб. Реки Карповки, д. 20',
                    map: {
                        latitude: 60.012345,
                        longitude: 60.012345,
                    }
                }
            ]
        };
    },
    methods: {
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
    computed: {
        serviceRoute () {
          return {'name':'services'+this.isPhone};
        },
        isPhone() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'Phone' : '';
        }
    }
    }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
