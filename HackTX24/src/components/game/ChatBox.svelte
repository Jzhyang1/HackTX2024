<script lang="ts">
    import {gameState} from "../../lib/state.svelte";
    import ChatMsg from "./ChatMsg.svelte";
    import {sendData} from "../../lib/socket.svelte";

    type Props = {
        thread: {
            id: number,
            asker: string,
            question: string,
            receiver: string,
            msgs: {
                username: string,
                text: string
            }[]
        }
    }
    let {thread}: Props = $props();
    let text = $state('');

    // only msgs can change
    let msgs = $derived(gameState.threads[thread.id].msgs);

    async function listenForEnter(kbEvent: KeyboardEvent) {
        if (kbEvent.key === "Enter") {
            console.log('user is sending msg', text)
            await sendData({type: 'thread_send', id: thread.id, text: text});
            text = '';
        }
    }
</script>

<div class="holder">
    <div class="scrolling">
        <h1>
            {thread.question}
        </h1>
        <p>Asked by {thread.asker} to {thread.receiver}</p>
        {#each msgs as msg}
            <ChatMsg data={msg}/>
            <br/>
        {/each}
    </div>
    <input bind:value={text} onkeydown={listenForEnter} placeholder="say anything!">
</div>

<style>
    .holder {
        background: rgba(37, 10, 44, 0.94);
        padding: 2em;
        border-radius: 30px;
        margin: 1em;
        height: 33em;
    }

    .scrolling {
        overflow-y: auto;
        /*overflow: auto;*/
        height: 100%;
        display: inline-block;
        width: 100%;
    }

    input {
        font-size: 20px;
        font-family: "hun", serif;
        background: transparent;
        border: 3px solid transparent;
        box-shadow: none;
        outline: none;
        transition: 0.2s;
        margin: 0;
        bottom: 5em;
        border-bottom-color: white;
    }

    ul {
        overflow-y: auto;

        justify-content: left;
        background: transparent;
        position: relative;
        left: -5em;
    }


</style>