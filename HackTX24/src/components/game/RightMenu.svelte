<script lang="ts">
    import {getIconFor} from "../../lib/icons.js";
    import PlayerDisplay from "./PlayerDisplay.svelte";
    import {gameState} from "../../lib/state.svelte.js";
    import {sendData} from "../../lib/socket.svelte";

    let players = $derived(gameState.base?.players ?? []);

    async function startVote() {
        await sendData({'type': 'vote_session_req'});
    }

    let timerDisplay = $state('');
    setInterval(() => {
        const numSeconds = Math.floor((Date.now() - gameState.base!.lastVoteTime) / 1000);
        timerDisplay = String(Math.floor(numSeconds / 60)).padStart(2, '0')
            + ':' + String(numSeconds % 60).padStart(2, '0')
    }, 33)
</script>

<div class="container">
    <div class="players">
        Players:
        {#each players as player}
            <PlayerDisplay name={player}/>
        {/each}
    </div>

    <div class="data">
        <p>Topic: {gameState.base?.gameTopic} </p>
        <p>Word: {gameState.base?.gameWord ?? "???"} </p>
    </div>
    <button onclick={startVote} class="vote">Vote</button>
    <div class="voting">
        <p class="timer">{timerDisplay}</p>
    </div>
</div>

<style>
    .container {
        flex-direction: column;
        right: 0;
        top: 5%;
        position: absolute;
        width: 20%;
    }

    .container > * {
        margin: 1em;
    }

    .players {
        padding: 1em;
        height: 20em;
        border-radius: 30px;
        background: rgba(16, 8, 21, 0.99);
    }

    .data {
        flex-direction: column;
        padding: 1em;
        border-radius: 30px;
        background: rgba(16, 8, 21, 0.99);
    }

    .data > p {
        padding: 0 2em 0 2em;
    }

    .vote {
        padding: 1em;
        margin: 0;
        width: 60%;
        border-radius: 30px;
        background: rgba(119, 48, 164, 0.99);
    }

    .voting {
        font-size: 30px;
        flex-direction: column;
        padding: .5em;
        border-radius: 30px;
        background: rgba(16, 8, 21, 0.99);
    }
</style>