<script>
/**
 * fecha
 * lugar
 * arrendador
 * arrendatario
 * valorMensual
 */
export default {
  name: 'ContratoInmobiliario',
  data() {
    return {
      fecha: new Date().toLocaleDateString(),
      lugar: 'Avenida Siempre Viva, Springfield',
      arrendador: 'Don Barriga',
      arrendatario: 'Ron Damón',
      valorMensual: 350000
    }
  }
}
</script>
<template>
  <div class="container">
    <h1 class="pb">Contrato de Arriendo</h1>
    <div class="encabezado">
      <span>Fecha: {{ fecha }}</span>
      <span>Lugar: {{ lugar }}</span>
    </div>
    <hr />
    <div class="pt">
      <p>
        En el siguiente contrato se estipula el acuerdo entre {{ arrendador }} en su rol de
        arrendador y {{ arrendatario }} como arrendatario
      </p>
      <p>
        Ambas partes acuerdan que el valor del inmueble mensual es de
        {{
          new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(
            valorMensual
          )
        }}.
      </p>
    </div>
  </div>
</template>
<style scoped>
.container {
  margin: 3rem auto;
  width: 60%;
}
.encabezado {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  border-bottom: 1px solid black;
}

.pb {
  padding-bottom: 1rem;
}

.pt {
  padding-top: 1rem;
}

span {
  font-weight: 700;
  font-size: 19px;
}
</style>
