<template>
    <div class="hotel-list">
        <loading-hotel v-if="loading"></loading-hotel>
        <div v-else>
            <div class="hotel_container">
                <div class="houtel_box" v-if="cheapestHotel.hotelName === ''">
                    <div class="houtel_item" v-for="(item,index) in hotelStore.list" :key="index">
                        <a href="#" class="houtel_item_link">
                            <div class="houtel_item_bg"></div>

                            <div class="houtel_item_title">
                                {{ item.hotelName }}
                            </div>

                            <div class="houtel_item_date-box">
                                Rating: <span class="houtel_item_date"> <b v-for="rate in item.hotelRating" :key="rate">★</b> </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="houtel_box" v-else>
                    <div class="houtel_item" v-if="cheapestHotel.hotelName !== ''">
                        <a href="#" class="houtel_item_link">
                            <div class="houtel_item_bg"></div>

                            <div class="houtel_item_title">
                                <b class="hotel_card_title">{{ cheapestHotel.hotelName }}</b>
                                <br/>
                                <b class="hotel_card_subtitle">Price : ${{ cheapestHotel.rate }}</b>
                            </div>

                            <div class="houtel_item_date-box">
                                Rating: <span class="houtel_item_date"> <b v-for="rate in cheapestHotel.hotelRating" :key="rate">★</b> </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * Necessary files are imported
 * Then load the variables
 */
import { ref, onMounted } from 'vue'
import { useHotelStore } from '@/stores/modules/hotels'
import LoadingHotel from './LoadingHotel.vue'
import { storeToRefs } from 'pinia'
const hotelStore = useHotelStore()
const loading = ref(false)
const { cheapestHotel } = storeToRefs(hotelStore)
onMounted(async () => {
  loading.value = true
  hotelStore.fetchHotels().then(() => {
    loading.value = false
  })
})
</script>
