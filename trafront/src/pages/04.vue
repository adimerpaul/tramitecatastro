<template>
  <div class="q-px-lg q-pb-md">
    <div class="row">
      <div class="col-12 q-pa-xs">
        <q-btn to="/" color="teal" label="Atras" size="13px" icon="arrow_back" ></q-btn>
      </div>
    </div>
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        <div class="text-subtitle1 text-bold">Requisitos para pago de impuestos a la transferencia</div>
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
        '3.	Hoja técnica (formulario con timbre de 10 bs.).',
        '4.	Formulario N° 23 (Llenado en sus 3 copias).',
        '5.	3 Fotocopias de plano demostrativo a nombre del actual propietario.',
        '6.	Minuta original.',
        '7.	2 fotocopias de minuta.',
        '8.	1 Fotocopia legalizada de dirección jurídica del GAMO del testimonio anterior (MATRICULADO)',
        '9.	1 Fotocopias de impuestos e inmuebles de las últimas 5 gestiones.',
        '10.	1 Fotocopias de tasas por servicios últimas 5 gestiones.',
        '11.	1 Fotocopia de C.I. de los propietarios.',
        '12.	1 Fotocopia de comprobante de pago conexión alcantarillado.',
        '13.	1 Folder amarillo nuevo más alcofaster.',

  ]
    }
  }
}
</script>

<style scoped>

</style>
