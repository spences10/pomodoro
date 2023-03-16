<script lang="ts">
	import { onDestroy } from 'svelte';

	let title = 'Countdown!';
	let time_left = 25 * 60;
	let timer_running = false;
	let interval: ReturnType<typeof setTimeout>;
	let show_milliseconds = false;
	let milliseconds = 0;

	const pad_time = (time: number) => {
		return time.toString().padStart(2, '0');
	};

	$: minutes = pad_time(Math.floor(time_left / 60));
	$: seconds = pad_time(time_left - Number(minutes) * 60);

	const start_timer = () => {
		if (timer_running) return;

		interval = setInterval(() => {
			if (show_milliseconds) {
				milliseconds -= 10;
				if (milliseconds <= 0) {
					milliseconds = 990;
					time_left -= 1;
				}
			} else {
				time_left -= 1;
			}

			if (time_left <= 0) {
				reset_timer();
			}
		}, show_milliseconds ? 10 : 1000);
		timer_running = true;
	};

	const stop_timer = () => {
		if (!timer_running) return;
		clearInterval(interval);
		timer_running = false;
	};

	const reset_timer = () => {
		clearInterval(interval);
		time_left = 25 * 60;
		timer_running = false;
	};

	const toggle_timer = () => {
		if (timer_running) {
			stop_timer();
		} else {
			start_timer();
		}
	};

	$: toggle_button_text = timer_running ? 'Stop' : 'Start';

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<h2>{title}</h2>
<div>
	<span>{minutes}</span>
	<span>:</span>
	<span>{seconds}</span>
	{#if show_milliseconds}
		<span>:</span>
		<span>{pad_time(Math.floor(milliseconds / 10))}</span>
	{/if}
</div>
<div>
	<button on:click={toggle_timer}>{toggle_button_text}</button>
	<button on:click={reset_timer}>Reset</button>
</div>
<div>
	<label>
		<input type="checkbox" bind:checked={show_milliseconds} />
		Show milliseconds
	</label>
</div>
