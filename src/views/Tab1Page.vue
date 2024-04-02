<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
      <!-- <ion-input class="search--bar" placeholder="rechercher un membre, un article, une boutique ..."></ion-input> -->
      <ion-searchbar class="search--bar" placeholder="rechercher un membre, un article ..."></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
     
        <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mes favoris</ion-title>
          <ion-buttons slot="end">
      <ion-button> Tout voir </ion-button>
    </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <div class="scroll-view">
        <ion-card>
    <img alt="Silhouette of mountains" src="https://static.nike.com/a/images/t_prod_sc/w_960,c_limit,f_auto/v5lpzojwwajqeqx25ooc/nike-air-shake-ndestrukt-black-white.jpg" />
    <ion-card-header>
      <ion-card-title>25,00 $</ion-card-title>   
      <ion-icon name="heart"></ion-icon>
      <ion-card-subtitle>Nike Air shake ndestrukt</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c76e2119-acb7-4944-9085-d4f5ae2bda4a/chaussure-facile-a-enfiler-et-a-retirer-go-flyease-nfbRvV.png" />
    <ion-card-header>
      <ion-card-title>25,00 $</ion-card-title>   
      <ion-icon name="heart"></ion-icon>
      <ion-card-subtitle>Nike</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://cdn.shopify.com/s/files/1/2358/2817/files/Nike-Air-Max-Plus-Voltage-Purple.png?v=1705318694&width=1080" />
    <ion-card-header>
      <ion-card-title>25,00 $</ion-card-title>   
      <ion-icon name="heart"></ion-icon>
      <ion-card-subtitle>Nike</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
</div>
      
  <ion-icon name="heart"></ion-icon>





     
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import { IonSearchbar } from '@ionic/vue';

</script>

<style>
ion-toolbar {

}
ion-card {
  
}
/* .search--bar {
  border: 1px solid black;
  border-radius: 50px;
  padding:20px;
} */
ion-searchbar.ios.search--bar{
  margin-top: 20px;
  border-radius:100px;
  
  }
.scroll-view {
 
}
</style>