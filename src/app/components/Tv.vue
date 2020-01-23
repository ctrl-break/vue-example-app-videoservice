<template>
    <div class="tv">
        {{tvSliceByCurrentTime}}
    </div>
</template>
 
 
<script>
import { mapGetters } from "vuex";

export default {
  name: "Tv",
  computed: mapGetters(["tvSliceByCurrentTime"]),
};
</script>
 
 
<style lang="scss" scoped>

</style>