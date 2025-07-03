import { component$, useSignal, useStylesScoped$, useTask$, $ } from '@builder.io/qwik';
import styles from "./index.css?inline";


export default component$(() => {
  useStylesScoped$(styles);

  const isFavoriteSignal = useSignal(false);
  const dadJokeSignal = useSignal<{ id: string; joke: string }>({ id: '', joke: '' });

  // Fetch a new joke client-side:
  // (Wrapped in `$()` so Qwik can serialize this function for event handlers)
  const fetchNewJoke = $(async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    const data = await res.json();
    dadJokeSignal.value = { id: data.id, joke: data.joke };

    // Reset favorite when new joke loads
    isFavoriteSignal.value = false;
  });

  // Fetch joke client-side on component mount:
  useTask$(() => fetchNewJoke());

  return (
    <main>
      <div>
        <p class="joke">{dadJokeSignal.value.joke || 'Loading joke...'}</p>

        {/* Replace the form with buttons that fetch a new joke client-side */}
        <div>
          <button class="vote-button" onClick$={fetchNewJoke} aria-label="Upvote and get new joke">
            👍
          </button>
          <button class="vote-button" onClick$={fetchNewJoke} aria-label="Downvote and get new joke">
            👎
          </button>
        </div>

        <button
          onClick$={() => (isFavoriteSignal.value = !isFavoriteSignal.value)}
          aria-label="Toggle favorite"
        >
          {isFavoriteSignal.value ? '❤️' : '🤍'}
        </button>
      </div>
    </main>
  );
});
