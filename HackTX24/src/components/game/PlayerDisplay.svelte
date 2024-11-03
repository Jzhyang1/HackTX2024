<script lang="ts">

    import {getIconFor} from "../../lib/icons";
    import {gameState, lobbyState, selectPlayer} from "../../lib/state.svelte";

    type Props = { name: string }

    let {name}: Props = $props();

    let isClient = $derived(name === lobbyState.name)
    console.log('for player: ', name, ' but we are ', lobbyState.name)
    let displayText = $derived(name + (isClient ? '(you)' : ''));

    const base = gameState.base;
    const imposter = base?.imposters && base?.imposters.indexOf(name) !== -1;

    const iconUrl = getIconFor(name);
    const color = imposter ? '#dc0a38' : 'white';

    function select() {
        console.log('selected player ', name)
        selectPlayer.set(name);
    }
</script>

<div>
    <img src={iconUrl} alt="an icon"/>
    <span style="color: {color}">{displayText}</span>

    {#if $selectPlayer === 0 && !isClient}
        <button onclick={select}>select</button>
    {/if}
</div>

<style>
    div {
        flex-direction: row;
        padding: 0px;
    }

    span {
        margin-right: auto;
    }

    img {
        margin-top: 10px;
        margin-bottom: -10px;
    }

    button {
        background: rgba(119, 48, 164, 0.99);
    }
</style>