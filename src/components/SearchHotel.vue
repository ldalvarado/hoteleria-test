<template>
    <div class="search-hotel">
        <form @submit.prevent="hotelStore.findCheapestHotel()" >
            <div class="input-container">
                <div class="form-group">
                    <label class="form-label" for="checkin">Fecha llegada:</label>
                    <input class="form-control" type="date" id="checkin" v-model="hotelStore.formData.startDate">
                </div>
                <div class="form-group">
                    <label class="form-label" for="checkout">Fecha salida:</label>
                    <input class="form-control" type="date" id="checkout" v-model="hotelStore.formData.endDate">
                </div>
                <div class="form-group">
                    <label class="form-label" for="client-type">Tipo de cliente:</label>
                    <select class="form-control" id="client-type" v-model="hotelStore.formData.clientType">
                        <option value="regular">Regular</option>
                        <option value="rewards">Recompensas</option>
                    </select>
                </div>
                <div class="form-group">
                    <div style="display: flex;align-items: end;width: 100%;height: 100%;">
                        <button id="search-button" type="submit" class="btn btn-success">Buscar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
/**
 * Necessary files are imported
 * Then load the variables
 */
import { useHotelStore } from '@/stores/modules/hotels'
const hotelStore = useHotelStore()
</script>
