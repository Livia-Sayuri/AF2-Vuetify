
<template>
  <div>
    <v-row>
      <v-col 
      v-for="(n,i) in myCards.lenght"
      : key="i"
       cols="12"
        sm="6" 
        md="4" 
        xs="2">
    {{n}}
        <MyCard: cardid="i"></MyCard>

      </v-col>
      <v-row>
  </div>

</template>

<script>
// @ is an alias to /src
import MyCard from '../components/MyCard'

export default {
  name: 'MyCard',
  data(){
    return{
      cardsview: this.$store.state.cards
    }
  },
 
  name: 'Card',
  components: {
    MyCard,
  },
}
</script>
