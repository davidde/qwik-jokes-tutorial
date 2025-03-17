import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <main>
      <div>
        <h1>Hi 👋</h1>
        <p>
          Can't wait to see what you build with qwik!
          <br/>
          Happy coding.
        </p>
        <br/>
        <p>
          <button><a href='/joke'>See joke</a></button>
        </p>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
