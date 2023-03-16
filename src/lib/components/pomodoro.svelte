<script lang="ts">
	import { onDestroy } from 'svelte';

	let title = 'Countdown!';
	let time_left = 25 * 60;
	let timer_running = false;
	let interval: ReturnType<typeof setTimeout>; // Update this line

	const pad_time = (time: number) => {
		return time.toString().padStart(2, '0');
	};

	$: minutes = pad_time(Math.floor(time_left / 60));
	$: seconds = pad_time(time_left - Number(minutes) * 60);

	const start_timer = () => {
		if (timer_running) return;

		interval = setInterval(() => {
			time_left = time_left >= 1 ? time_left - 1 : 0;
			if (time_left === 0) reset_timer();
		}, 1000);
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

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<h2>{title}</h2>
<div>
	<span>{minutes}</span>
	<span>:</span>
	<span>{seconds}</span>
</div>
<div>
	<button on:click={start_timer}>Start</button>
	<button on:click={stop_timer}>Stop</button>
	<button on:click={reset_timer}>Reset</button>
</div>
