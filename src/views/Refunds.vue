<template>
	<div>
		<div class="page-title">
			<h3>Повернення</h3>
		</div>

		<div>

			<div class="row">
				<form class="col s12">
					<div class="row">
						<div class="input-field col s12">
							<textarea id="textarea1" v-model="ticketValue" class="materialize-textarea"></textarea>
							<label for="textarea1">Вставити квитки</label>
						</div>
					</div>
				</form>
			</div>

		</div>
	</div>
</template>

<script>
// import { wetr_1 } from '/template/wetr_1'
export default {
  name: 'refund',
  data: () => ({
    ticketValue: ''
  }),
  watch: {
    ticketValue(e) {
      console.log(e);
    },

  },
  mounted() {
    // console.log(this.ticketValue);
    // M.textareaAutoResize()
  }
}
</script>
