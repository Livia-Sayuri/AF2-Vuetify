<template>
  <v-app>

  <v-system-bar app>
      <v-spacer></v-spacer>
      <span>v-system-bar</span>
            <v-spacer></v-spacer>
            </v-system-bar>



    <v-app-bar app >
          <v-spacer></v-spacer>
      <span>v-app-bar</span>
       <v-spacer></v-spacer>
    </v-app-bar>
    
<v-card
    color="black"
    flat
    height="200px"
    tile
  >
    <Toolbar >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

          <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

    </Toolbar>
  </v-card>

     <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            v-navigaton-drawer
          </v-list-item-title>
           <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

            <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-content app> 
      <span>v-content</span>
      </v-content>


    <v-footer class="mt-5" app>
      <v-spacer></v-spacer>
      <span>v-footer</span>
    <v-spacer></v-spacer>
    </v-footer>

<v-bottom-navigation app> 
  <v-spacer></v-spacer>
  <span>v-bottom-navigation</span>
  <v-spacer></v-spacer>
</v-bottom-navigation>

  </v-app>

  
</template>

<script> 
  import Toolbar from "@/components/Toolbar"

  export default{
    name: 'App',
    components: {
      Toolbar
    },
    data: () => ({
      //
    }),
  };
</script>