<template>
  <div class="q-px-lg q-pb-md">
    <div class="row">
      <div class="col-12 q-pa-xs">
        <q-btn to="/" color="teal" label="Atras" size="13px" icon="arrow_back" ></q-btn>
      </div>
    </div>
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        <div class="text-subtitle1 text-bold">Requisitos para la regulación de impuestos</div>
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
        '5.	3 Fotocopias de plano demostrativo actualizado.',
        '6.	2 Fotocopias de testimonio de propiedad matriculado o con partida.',
        '7.	2 Fotocopias del testimonio anterior',
        '8.	1 Fotocopia de C.I. de los propietarios.',
        '9.	2 Fotocopia de comprobante de pago conexión alcantarillado.',
        '10.	1 Folder amarillo nuevo más alcofaster.',
      ]
    }
  }
}
</script>

<style scoped>

</style>
