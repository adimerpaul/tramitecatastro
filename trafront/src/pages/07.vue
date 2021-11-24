<template>
  <div class="q-px-lg q-pb-md">
    <div class="row">
      <div class="col-12 q-pa-xs">
        <q-btn to="/" color="teal" label="Atras" size="13px" icon="arrow_back" ></q-btn>
      </div>
    </div>
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        <div class="text-subtitle1 text-bold">Requisitos para trámites de pago por tazas de servicios </div>
      </q-timeline-entry>

      <q-timeline-entry v-for="(d,i) in datos" :key="i">
        {{ d }}
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  data(){
    return{
      datos:[
        '1.	1 Fotocopia de testimonio de propiedad.',
        '2.	Hoja técnica (ADQ caja de valores).',
        '3.	1 Fotocopias de plano demostrativo actualizado.',
        '4.	1 Fotocopias de impuestos últimas 2 gestiones.',
        '5.	Comprobante de cambio de nombre(si corresponde)',
        '6.	Derecho de conexión (comp caja)',
        '7.	1 Fotocopia de C.I. de los propietarios.',
        '8.	1 Folder amarillo nuevo más alcofaster.',
      ]
    }
  }
}
</script>

<style scoped>

</style>
