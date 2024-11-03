<script lang="ts">
  import winImage from "../assets/win.gif";
  import loseImage from "../assets/lose.gif";
  import { display } from "../lib/state.svelte";
  import ReadyScreen from "./ReadyScreen.svelte";

  const { isWinner } = $props();
  function done() {
    display.page = ReadyScreen;
  }
</script>

{#if isWinner}
  <div class="win-graphic">
    <text class="text-label win">You WIN</text>
    <img class="visual" src={winImage} width="350px" height="350px" alt="" />
  </div>
{:else}
  <div class="lose-graphic">
    <text class="text-label lose">You LOSE</text>
    <img class="visual" src={loseImage} width="75px" height="75px" alt="" />
  </div>
{/if}
<div>
  <button onclick={done}>Return</button>
</div>

<style>
  .win-graphic {
    position: relative;
    width: 564px;
    height: 350px;
  }
  .lose-graphic {
    position: relative;
    width: 624px;
    height: 160px;
  }
  .visual {
    position: absolute;
    z-index: 20;
    right: 20%;
    top: 0;
  }
  .text-label {
    font-family: "Sixtyfour Convergence", sans-serif;
    font-size: 78px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .win {
    color: gold;
  }
  .lose {
    color: red;
  }
</style>
