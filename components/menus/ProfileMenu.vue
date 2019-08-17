<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon>
        <v-avatar size="32px">
          <img v-if="user.avatar" :src="user.avatar" alt="Avatar" />
          <v-icon v-else>person</v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-tile v-for="(item, i) in items" :key="i">
        <v-list-tile-title>
          <v-icon>{{item.icon}}</v-icon>
          <nuxt-link :to="{ name: item.url }" class="no-decoration">{{ item.title }}</nuxt-link>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Meus Dados", icon: "person", url: "auth-usuario-edita" },
      { title: "Logout", icon: "logout", url: "auth-logout" }
    ]
  }),

  computed: {
    user() {
      return {
        avatar: "/images/me.jpg",
        name: "Natan"
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.no-decoration {
  color: grey;
  text-decoration: none;
}
</style>