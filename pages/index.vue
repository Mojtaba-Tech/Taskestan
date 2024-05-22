<template>
	<div>
		<h1 class="text-white bg-stone-800/70 border-l-[10px] border-4 border-stone-800 rounded-large p-4">Your Boards</h1>
		
		<section class="flex flex-wrap py-10">
			<div class="flex justify-center items-center bg-white/90 hover:bg-white transition cursor-pointer rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-4 border-slate-600/80 mb-3 mx-2">
				<div class="text-center text-slate-600/90">
					<font-awesome :icon="faPlus" size="3x"/>
					<h3 class="mt-2">Add new board</h3>
				</div>
			</div>
			<div class="bg-white/80 rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-t-8 border-2 border-slate-600/80 mb-3 mx-2">
				<h2 class="mb-3">Udemy projects</h2>
				<p>This is about my Udemy tasks</p>
			</div>
			<div class="bg-white/80 rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-t-8 border-2 border-slate-600/80 mb-3 mx-2">
				<h2 class="mb-3">Udemy projects</h2>
				<p>This is about my Udemy tasks</p>
			</div>
			<div class="bg-white/80 rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-t-8 border-2 border-slate-600/80 mb-3 mx-2">
				<h2 class="mb-3">Udemy projects</h2>
				<p>This is about my Udemy tasks</p>
			</div>
			<div class="bg-white/80 rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-t-8 border-2 border-slate-600/80 mb-3 mx-2">
				<h2 class="mb-3">Udemy projects</h2>
				<p>This is about my Udemy tasks</p>
			</div>
			<div class="bg-white/80 rounded-medium w-[calc((100%/3)-16px)] h-56 p-4 border-t-8 border-2 border-slate-600/80 mb-3 mx-2">
				<h2 class="mb-3">Udemy projects</h2>
				<p>This is about my Udemy tasks</p>
			</div>
		</section>
	</div>
</template>

<script setup>
import {faPlus} from '@fortawesome/free-solid-svg-icons'

</script>