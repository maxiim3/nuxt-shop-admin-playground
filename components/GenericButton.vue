<template>
  <button
      :class="`${classes || '' } border-none min-w-4 min-h-4 bg-slate-300 hover:bg-slate-400 transition-all duration-75 `
        .concat(variant === 'sm' ? 'p-1 ' : 'px-3 py-2 ')
        .concat(round ? 'rounded-full ': 'rounded-md ' )
"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
type Props = {
  variant ?: "sm" | "md"
  round?: boolean
  classes?: string
}

defineProps<Props>()


</script>
