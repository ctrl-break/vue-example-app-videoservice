<template>
    <li class="slider_item">
        <div class="poster anim_appear">
           <img :src="movie.picture">
           <div class="description">
               {{movie.description}}
           </div>
        </div>
        <div class="title">{{movie.title}}</div>
    </li>
</template>
 
 
<script>
export default {
  name: "SliderItem",
  props: ['movie'],
};
</script>
 
 
<style lang="scss" scoped>
.slider_item{
    .poster{
        position: relative;
        cursor: pointer;
        img{
            border-radius: 5px;
            margin-bottom: 5px;
        }
        .description{
            border-radius: 5px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            padding: 10px;
            white-space: normal;
            color: $secondary;
            opacity: 0;
            transition: $anim_speed;
            background-color: rgba($text-primary, 0.8);
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &:hover .description{
            opacity: 1;
        }
    }
}
</style>