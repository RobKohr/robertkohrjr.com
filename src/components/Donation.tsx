import { For } from "solid-js";

export default function Donation() {
  const donationAmounts: number[] = [25, 50, 100, 250, 500, 1000, 2500, 5000];

  return (
    <div class="donation-box">
      <h3>Donate</h3>
      <p>Help us bring charter schools to Longview</p>
      <For each={donationAmounts}>
        {(amount) => (
          <div style="padding:0.3em">
            <input type="radio" name="donation-amount" value={amount} style="height: 2em;width:2em;" />
            <div style="display:inline-block;position:relative;top:-0.4em;left:0.4em"> ${amount}</div>
          </div>
        )}
      </For>
      <button>Donate</button>
    </div>
  );
}
