<script lang="ts">

    import ChatBox from "./ChatBox.svelte";
    import {gameState, selectPlayer} from "../../lib/state.svelte";
    import RightMenu from "./RightMenu.svelte";
    import {sendData} from "../../lib/socket.svelte";
    
    let question = $state('');
    function ask() {
        const userQuestion = $state.snapshot(question);
        selectPlayer.set(0); // so we can select a player
        const unsub = selectPlayer.subscribe(async (newValue) => {
            if (typeof newValue != 'string') return;
            console.log('creating new thread with values: ', userQuestion, $selectPlayer)
            await sendData({
                type: 'thread_create',
                question: userQuestion,
                user: $selectPlayer
            });
            unsub()
        });
    }
</script>

<div class="container">
    <div class="thread-div">
        {#if gameState.threads.length === 0}
            <div class="emptyDiv">
                <p>No conversations yet! Press "ask" to ask someone something!</p>
            </div>
        {:else}
            <div class="thread_div2">
            {#each gameState.threads as thread (thread.id)}
                <ChatBox thread={thread}/>
            {/each}
            </div>
        {/if}
    </div>
    <RightMenu/>
    <div class="btm">
        <input bind:value={question} placeholder="enter a question here">
        <button onclick={ask} disabled={$selectPlayer === 0}>ask</button>
    </div>
</div>

<style>
    .thread-div, .emptyDiv {
        background: transparent;
        overflow-x: auto;
        left: 0;
        position: absolute;
        width: 87%;
        top: 3%;
        height: 88%;
    }
    
    .thread_div2 {
        display: flex;
        flex-direction: row;
        position: absolute;
        height: 70%;
        width: 30%;
    }

    .emptyDiv {
        background: rgba(16, 8, 21, 0.99);
        margin: 1em;
        justify-content: center;
        border-radius: 30px;
        display: flex;
        align-items: center;
    }
    
    p {
        font-size: 40px;
    }
    
    .container {
        height: 100%;
        width: 100%;
    }

    button {
        background: rgba(119, 48, 164, 0.99);
    }
    
    .btm {
        flex-direction: column;
        padding: 2em;
        border-radius: 30px;
        background: rgba(16, 8, 21, 0.99);
        bottom: 0%;
        position: absolute;
        left: 0%;
        margin: 1em;
        width: 69%;
    }
    
    input {
        font-size: 20px;
        font-family: "hun", serif;
        background: transparent;
        border: 3px solid transparent;
        box-shadow: none;
        outline: none;
        transition: 0.2s;
        margin-bottom: -5px;
    }

    input:focus {
        border-bottom-color: white;
    }


</style>