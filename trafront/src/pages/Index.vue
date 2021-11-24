<template>
  <q-page>
<!--  <q-page class="flex flex-center">-->
<!--    <img-->
<!--      alt="Quasar logo"-->
<!--      src="~assets/quasar-logo-vertical.svg"-->
<!--      style="width: 200px; height: 200px"-->
<!--    >-->
    <div class="row q-pa-xs">
      <div class="col-6 flex flex-center q-mt-md" >
        <div class="row">
          <div class="col-12 text-center" >
            <q-btn
              to="01"
              size="lg"
              round
              color="teal"
              icon="map"
            />
          </div>
          <div class="col-12 text-center">
            <div class="text-subtitle2">Requisitos para la certificación general o informe técnico C-G</div>
          </div>
        </div>
      </div>
      <div class="col-6 flex flex-center q-mt-md" >
        <div class="row">
          <div class="col-12 text-center" >
            <q-btn
              to="02"
              size="lg"
              round
              color="primary"
              icon="place"
            />
          </div>
          <div class="col-12 text-center">
            <div class="text-subtitle2">Requisitos para certificación catastral y préstamos Bancarios C-B</div>
          </div>
        </div>
      </div>
      <div class="col-6 flex flex-center q-mt-md">
        <div class="row">
          <div class="col-12 text-center" >
            <q-btn
              to="03"
              size="lg"
              round
              color="accent"
              icon="public"
            />
          </div>
          <div class="col-12 text-center">
            <div class="text-subtitle2">Requisitos para empadronamiento y cambio de nombre</div>
          </div>
        </div>
      </div>
      <div class="col-6 flex flex-center q-mt-md">
        <div class="row">
          <div class="col-12 text-center" >
            <q-btn
              to="04"
              size="lg"
              round
              color="dark"
              icon="menu_book"
            />
          </div>
          <div class="col-12 text-center">
            <div class="text-subtitle2">Requisitos para pago de impuestos a la transferencia</div>
          </div>
        </div>
      </div>
      <div class="col-6 flex flex-center q-mt-md">
        <div class="row">
          <div class="col-12 text-center" >
            <q-btn
              to="05"
              size="lg"
              round
              color="positive"
              icon="local_offer"
            />
          </div>
          <div class="col-12 text-center">
            <div class="text-subtitle2">Requisitos para la regulación de impuestos</div>
          </div>
        </div>
      </div>
      <div class="col-6 flex flex-center q-mt-md">
        <div class="row">
          <div class="col-12 text-center" >
            <q-btn
              to="06"
              size="lg"
              round
              color="negative"
              icon="maps_home_work"
            />
          </div>
          <div class="col-12 text-center">
            <div class="text-subtitle2">Requisitos para recatastracion</div>
          </div>
        </div>
      </div>
      <div class="col-6 flex flex-center q-mt-md">
        <div class="row">
          <div class="col-12 text-center" >
            <q-btn
              to="07"
              size="lg"
              round
              color="info"
              icon="travel_explore"
            />
          </div>
          <div class="col-12 text-center">
            <div class="text-subtitle2">Requisitos para trámites de pago por tazas de servicios</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
