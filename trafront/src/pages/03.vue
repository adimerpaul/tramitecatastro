<template>
  <div class="q-px-lg q-pb-md">
    <div class="row">
      <div class="col-12 q-pa-xs">
        <q-btn to="/" color="teal" label="Atras" size="13px" icon="arrow_back" ></q-btn>
      </div>
    </div>
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        <div class="text-subtitle1 text-bold">Requisitos para empadronamiento y cambio de nombre</div>
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
        '3.	Valores para cambio de nombre.',
        '4.	1 Plano demostrativo Original con timbre de 10 bs. mas 3 copias.',
        '5.	3 Fotocopias de testimonio de propiedad matriculado (1 legalizado de dirección jurídica GAMO).',
        '6.	1 Fotocopias de testimonio de propiedad anterior.',
        '7.	 3 Fotocopias de impuestos últimas 5 gestiones.',
        '8.	3 Fotocopias de tasas por servicios últimas 5 gestiones.',
        '9.	1 Fotocopia de C.I. de los propietarios.',
        '10.	1 Fotocopia de comprobante de pago conexión alcantarillado.',
        '11.	1 Folder amarillo nuevo más alcofaster.',

  ]
    }
  }
}
</script>

<style scoped>

</style>
