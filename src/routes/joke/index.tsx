import { component$, useSignal, useStylesScoped$, useTask$, $ } from '@builder.io/qwik';
import styles from "./index.css?inline";


export default component$(() => {
  useStylesScoped$(styles);
  const isFavoriteSignal = useSignal(false);

  // Replace server loader with client-side joke state:
  const dadJokeSignal = useSignal<{ id: string; joke: string }>({ id: '', joke: '' });

  // Fetch joke client-side on component mount:
  useTask$(async () => {
    // track something if needed, or just run once
    if (!dadJokeSignal.value.joke) {
      const res = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      const data = await res.json();
      dadJokeSignal.value = { id: data.id, joke: data.joke };
    }
  });

  // Fetch a new joke when upvote/downvote form submits
  // Since the form does a full submit by default, let's disable that and do fetch ourselves instead
  // For now keep the form but disable default submit behavior and fetch new joke client-side instead
  const fetchNewJoke = $(async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    const data = await res.json();
    dadJokeSignal.value = { id: data.id, joke: data.joke };

    // Reset favorite when new joke loads
    isFavoriteSignal.value = false;
  });

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
