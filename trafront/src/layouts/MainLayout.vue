<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" >
      <q-toolbar >
        <q-toolbar-title >
          <q-avatar>
            <img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/182083485_2473331082812500_846495472244560929_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=M-a6d2JbG5AAX-omkyI&_nc_ht=scontent-mia3-2.xx&oh=839006e04ab7e7e98c2368c9b959cbb4&oe=61C417AB">
          </q-avatar>
          Consultas catastro
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<!--<template>-->
<!--  <q-layout view="hHh lpR fFf">-->
<!--    <q-header elevated>-->
<!--      <q-toolbar>-->
<!--        <q-btn-->
<!--          flat-->
<!--          dense-->
<!--          round-->
<!--          icon="menu"-->
<!--          aria-label="Menu"-->
<!--          @click="toggleLeftDrawer"-->
<!--        />-->

<!--        <q-toolbar-title>-->
<!--          Tramites Catastro-->
<!--        </q-toolbar-title>-->

<!--        <div> v{{ $q.version }}</div>-->
<!--      </q-toolbar>-->
<!--    </q-header>-->
<!--    <q-drawer-->
<!--      v-model="leftDrawerOpen"-->
<!--      show-if-above-->
<!--      bordered-->
<!--    >-->
<!--      <q-list>-->
<!--        <q-item-label-->
<!--          header-->
<!--        >-->
<!--          Essential Links-->
<!--        </q-item-label>-->

<!--&lt;!&ndash;        <EssentialLink&ndash;&gt;-->
<!--&lt;!&ndash;          v-for="link in essentialLinks"&ndash;&gt;-->
<!--&lt;!&ndash;          :key="link.title"&ndash;&gt;-->
<!--&lt;!&ndash;          v-bind="link"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->
<!--      </q-list>-->
<!--    </q-drawer>-->

<!--    <q-page-container>-->
<!--      <router-view />-->
<!--    </q-page-container>-->
<!--  </q-layout>-->
<!--</template>-->

<script>
// import EssentialLink from 'components/EssentialLink.vue'
//
// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ];
//
// import { defineComponent, ref } from 'vue'
//
// export default defineComponent({
//   name: 'MainLayout',
//
//   components: {
//     EssentialLink
//   },
//
//   setup () {
//     const leftDrawerOpen = ref(false)
//
//     return {
//       essentialLinks: linksList,
//       leftDrawerOpen,
//       toggleLeftDrawer () {
//         leftDrawerOpen.value = !leftDrawerOpen.value
//       }
//     }
//   }
// })
export default {
  data(){
    return{
      leftDrawerOpen:true,
    }
  },
  methods:{
    toggleLeftDrawer () {
        this.leftDrawerOpen = !this.leftDrawerOpen
      }
  }
}
</script>
