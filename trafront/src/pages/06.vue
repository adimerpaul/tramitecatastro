<template>
  <div class="q-px-lg q-pb-md">
    <div class="row">
      <div class="col-12 q-pa-xs">
        <q-btn to="/" color="teal" label="Atras" size="13px" icon="arrow_back" ></q-btn>
      </div>
    </div>
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        <div class="text-subtitle1 text-bold">Requisitos para recatastracion </div>
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
        '1.	Comprobante de pago inspección en bus.',
        '2.	Formulario único 001.',
        '3.	Hoja técnica (formulario).',
        '4.	Formulario N° 23 (Llenado en sus 3 copias).',
        '5.	2 Fotocopias de plano demostrativo codificado.',
        '6.	2 Fotocopias de testimonio de propiedad.',
        '7.	2 Fotocopias de testimonio de propiedad anterior matriculado en D.D.R.R. o con partida.',
        '8.	 2 Fotocopias de impuestos últimas 3 gestiones.',
        '9.	2 Fotocopias de tasas por servicios últimas 3 gestiones.',
        '10.	1 Fotocopia de C.I. de los propietarios.',
        '11.	1 Fotocopia de comprobante de pago conexión alcantarillado.',
        '12.	1 Folder amarillo nuevo más alcofaster.',
      ]
    }
  }
}
</script>

<style scoped>

</style>
