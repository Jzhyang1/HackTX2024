<script lang="ts">
    type Props = {
        data: {
            username: string,
            text: string
        }
    }
    let {data}: Props = $props();
</script>

<li>
    <span style="color: #aa16ff">{data.username}:</span>
    <span>{data.text}</span>
</li>

<style>
    li {
        display: flex;
        float: left;
        width: auto;
        flex-direction: row;
        flex-shrink: 2;
    }
</style>